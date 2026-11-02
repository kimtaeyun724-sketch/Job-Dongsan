import React, { useState } from 'react';
import { JobPosting, CoverLetterPrompt } from '../types/job';
import {
  generateStructuredCoverLetterDraft,
  requestAIEnhancedCoverLetter,
} from '../utils/coverLetterGenerator';
import {
  BookOpen,
  Sparkles,
  Copy,
  Check,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  GraduationCap,
  Layers,
  FileText,
  Wrench,
} from 'lucide-react';

interface CoverLetterStudioProps {
  jobs: JobPosting[];
  selectedJobId?: string;
  onSelectJob: (job: JobPosting, tab?: 'overview' | 'requirements' | 'coverletter') => void;
}

export const CoverLetterStudio: React.FC<CoverLetterStudioProps> = ({
  jobs,
  selectedJobId,
  onSelectJob,
}) => {
  const [currentJobId, setCurrentJobId] = useState<string>(
    selectedJobId || jobs[0]?.id || 'hmc-mfg-eng-2026'
  );
  const currentJob = jobs.find((j) => j.id === currentJobId) || jobs[0];

  const [promptIndex, setPromptIndex] = useState<number>(0);
  const currentPrompt: CoverLetterPrompt =
    currentJob.coverLetterPrompts[promptIndex] || currentJob.coverLetterPrompts[0];

  // Form Inputs
  const [candidateMajor, setCandidateMajor] = useState<string>('기계공학');
  const [tools, setTools] = useState<string>('CATIA V5, Minitab');
  const [projectTitle, setProjectTitle] = useState<string>('학부 캡스톤 신차 프레임 조립 지그 개선');
  const [problemFaced, setProblemFaced] = useState<string>('조립 공차 누적으로 인한 단차 불량 및 가이드 간섭');
  const [engineeringAction, setEngineeringAction] = useState<string>(
    '3D CAD 간섭 체크 및 5-Why 원인 분석으로 지그 챔퍼 각도를 재설계하고 공차 누적을 시뮬레이션함'
  );
  const [measuredResult, setMeasuredResult] = useState<string>(
    '시제품 조립 불량률 0% 달성 및 사이클타임 18% 단축'
  );

  const [outputDraft, setOutputDraft] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);
  const [aiAdvice, setAiAdvice] = useState<string[]>([]);

  const handleGenerate = () => {
    const draft = generateStructuredCoverLetterDraft({
      job: currentJob,
      prompt: currentPrompt,
      candidateMajor,
      keyTools: tools.split(',').map((t) => t.trim()).filter(Boolean),
      projectTitle,
      problemFaced,
      engineeringAction,
      measuredResult,
      tone: 'professional',
    });
    setOutputDraft(draft.fullContent);
    setAiAdvice([]);
  };

  const handleAiPolish = async () => {
    setIsAiLoading(true);
    try {
      const res = await requestAIEnhancedCoverLetter({
        job: currentJob,
        prompt: currentPrompt,
        candidateMajor,
        keyTools: tools.split(',').map((t) => t.trim()).filter(Boolean),
        projectTitle,
        problemFaced,
        engineeringAction,
        measuredResult,
        tone: 'data-driven',
      });
      setOutputDraft(res.content);
      setAiAdvice(res.advice);
    } catch {
      handleGenerate();
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleCopy = () => {
    if (!outputDraft) return;
    navigator.clipboard.writeText(outputDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Studio Header */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                자동차 이공계 자기소개서 특화 스튜디오
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                기업별 실전 문항 분석, 합격 공학 키워드, STAR-L 서술 가이드 및 실시간 초안 생성기를 제공합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Company Selector */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-neutral-500 shrink-0">공고 선택:</label>
          <select
            value={currentJobId}
            onChange={(e) => {
              setCurrentJobId(e.target.value);
              setPromptIndex(0);
              setOutputDraft('');
            }}
            className="px-3 py-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-xs font-medium text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 max-w-xs"
          >
            {jobs.map((j) => (
              <option key={j.id} value={j.id}>
                [{j.company}] {j.engineeringDomain} - {j.title.slice(0, 26)}...
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (5 Cols): Question & Writing Guide */}
        <div className="lg:col-span-5 space-y-5">
          {/* Question Tabs */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wide">
                {currentJob.company} 자소서 문항
              </h3>
              <span className="text-[11px] text-neutral-500">
                총 {currentJob.coverLetterPrompts.length}개 문항
              </span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {currentJob.coverLetterPrompts.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setPromptIndex(idx);
                    setOutputDraft('');
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    promptIndex === idx
                      ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  문항 {p.questionNumber} ({p.charLimit})
                </button>
              ))}
            </div>

            {/* Selected Question Details */}
            <div className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/80 space-y-2">
              <h4 className="text-xs font-bold text-neutral-900 dark:text-white leading-relaxed">
                "{currentPrompt.question}"
              </h4>
              <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
                <strong className="text-neutral-800 dark:text-neutral-200">출제 의도:</strong>{' '}
                {currentPrompt.purpose}
              </p>
            </div>

            {/* Keywords */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-1">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                <span>추천 공학 핵심 키워드</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentPrompt.recommendedKeywords.map((kw, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-blue-800 dark:text-blue-300"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Focus Points */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>반드시 어필해야 할 점</span>
              </span>
              <ul className="space-y-1 text-xs text-neutral-600 dark:text-neutral-300">
                {currentPrompt.keyFocus.map((f, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold">·</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Anti-Cliche Warning */}
            <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 text-xs">
              <span className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1 mb-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                피해야 할 상투적 표현
              </span>
              <p className="text-amber-900 dark:text-amber-200 text-[11px] leading-relaxed">
                {currentPrompt.clicheToAvoid}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column (7 Cols): Interactive Draft Builder */}
        <div className="lg:col-span-7 space-y-5">
          <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100 dark:border-neutral-800">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>내 경험 기반 STAR-L 실전 자소서 생성</span>
              </h3>
              <span className="text-xs text-neutral-400">
                {currentJob.company} {currentJob.engineeringDomain}
              </span>
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  전공 학과
                </label>
                <input
                  type="text"
                  value={candidateMajor}
                  onChange={(e) => setCandidateMajor(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  활용 공학 툴
                </label>
                <input
                  type="text"
                  value={tools}
                  onChange={(e) => setTools(e.target.value)}
                  placeholder="예: CATIA, Minitab, PLC"
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  대표 프로젝트/과제명
                </label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  placeholder="예: 학부 캡스톤 신차 프레임 조립 지그 개선"
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  기술적 난제 또는 발생한 병목 (Situation & Task)
                </label>
                <input
                  type="text"
                  value={problemFaced}
                  onChange={(e) => setProblemFaced(e.target.value)}
                  placeholder="예: 조립 공차 누적으로 인한 단차 불량 및 가이드 간섭"
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  본인이 취한 공학적 조치 (Action)
                </label>
                <textarea
                  rows={2}
                  value={engineeringAction}
                  onChange={(e) => setEngineeringAction(e.target.value)}
                  placeholder="예: CATIA 간섭 체크 및 5-Why 원인 분석으로 지그 챔퍼 각도를 재설계하고 공차 누적을 시뮬레이션함"
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                  도출된 정량적 성과 (Result)
                </label>
                <input
                  type="text"
                  value={measuredResult}
                  onChange={(e) => setMeasuredResult(e.target.value)}
                  placeholder="예: 시제품 조립 불량률 0% 달성 및 사이클타임 18% 단축"
                  className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={handleGenerate}
                className="flex-1 py-2 px-3 text-xs font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                엔지니어링 초안 즉시 생성
              </button>

              <button
                onClick={handleAiPolish}
                disabled={isAiLoading}
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isAiLoading ? 'AI 정밀 첨삭 중...' : 'Gemini AI 정밀 첨삭'}</span>
              </button>
            </div>

            {/* Output Display */}
            {outputDraft ? (
              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-neutral-900 dark:text-white flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-neutral-500" />
                    완성된 자소서 문안
                  </span>
                  <span className="font-mono tabular-nums text-neutral-500">
                    공백 제외 약 {outputDraft.replace(/\s/g, '').length}자
                  </span>
                </div>

                <textarea
                  rows={13}
                  value={outputDraft}
                  onChange={(e) => setOutputDraft(e.target.value)}
                  className="w-full p-3.5 text-xs text-neutral-800 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-800/80 rounded-lg border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-1 focus:ring-blue-500 leading-relaxed font-sans"
                />

                {aiAdvice.length > 0 && (
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg border border-blue-200 dark:border-blue-900 text-xs space-y-1">
                    <span className="font-bold text-blue-900 dark:text-blue-300 flex items-center gap-1">
                      <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                      채용위원 심사평 & 수정 권고사항:
                    </span>
                    {aiAdvice.map((adv, idx) => (
                      <p key={idx} className="text-blue-800 dark:text-blue-200 text-[11px]">
                        · {adv}
                      </p>
                    ))}
                  </div>
                )}

                <div className="flex justify-end">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? '복사 완료!' : '클립보드 복사'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center text-xs text-neutral-400 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg">
                <Sparkles className="w-6 h-6 mx-auto mb-2 opacity-30 text-neutral-500" />
                <p>경험 정보를 입력하고 초안 생성 버튼을 누르면 STAR-L 구조의 전문 자소서가 완성됩니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
