import React, { useState } from 'react';
import { JobPosting, CoverLetterPrompt } from '../types/job';
import { calculateDDay, formatKoreanDate, generateGoogleCalendarUrl } from '../utils/calendarUtils';
import {
  generateStructuredCoverLetterDraft,
  requestAIEnhancedCoverLetter,
} from '../utils/coverLetterGenerator';
import { evaluateJobFit } from '../utils/jobFitEvaluator';
import {
  X,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  AlertTriangle,
  Lightbulb,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  MapPin,
  Clock,
  Layers,
  Wrench,
  ChevronRight,
  ShieldCheck,
  FileText,
} from 'lucide-react';

interface JobDetailModalProps {
  job: JobPosting;
  initialTab?: 'overview' | 'requirements' | 'coverletter' | 'studio';
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (jobId: string) => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  initialTab = 'overview',
  onClose,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'requirements' | 'coverletter' | 'studio'>(
    initialTab
  );

  // Selected Cover Letter Prompt index
  const [selectedPromptIdx, setSelectedPromptIdx] = useState<number>(0);
  const activePrompt: CoverLetterPrompt = job.coverLetterPrompts[selectedPromptIdx] || job.coverLetterPrompts[0];

  // Studio Interactive Builder State
  const [candidateMajor, setCandidateMajor] = useState<string>('기계공학');
  const [projectTitle, setProjectTitle] = useState<string>('학부 캡스톤 신차 프레임 조립 지그 개선');
  const [problemFaced, setProblemFaced] = useState<string>('조립 공차 누적으로 인한 단차 불량 및 가이드 간섭');
  const [engineeringAction, setEngineeringAction] = useState<string>(
    '3D CATIA 간섭 체크 및 5-Why 분석을 통해 지그 챔퍼 각도를 재설계하고 공차 누적을 시뮬레이션함'
  );
  const [measuredResult, setMeasuredResult] = useState<string>(
    '시제품 조립 불량률 0% 달성 및 사이클타임 18% 단축'
  );
  const [generatedDraft, setGeneratedDraft] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [isGeneratingAI, setIsGeneratingAI] = useState<boolean>(false);
  const [aiAdvice, setAiAdvice] = useState<string[]>([]);

  // Instant Fit Check State
  const [userProfile, setUserProfile] = useState({
    major: '기계공학',
    tools: ['CATIA', 'Minitab'],
    certs: ['일반기계기사'],
    experiences: ['캡스톤 디자인 프로젝트'],
  });

  const fitResult = evaluateJobFit(
    {
      major: userProfile.major,
      engineeringTools: userProfile.tools,
      certifications: userProfile.certs,
      practicalExperiences: userProfile.experiences,
      gpa: '3.8/4.5',
      preferredDomain: job.engineeringDomain,
      preferredRegion: job.location.region,
    },
    job
  );

  const dday = calculateDDay(job.timeline.endDate);

  const handleGenerateDraft = () => {
    const draft = generateStructuredCoverLetterDraft({
      job,
      prompt: activePrompt,
      candidateMajor,
      keyTools: userProfile.tools,
      projectTitle,
      problemFaced,
      engineeringAction,
      measuredResult,
      tone: 'professional',
    });
    setGeneratedDraft(draft.fullContent);
    setAiAdvice([]);
  };

  const handleAIEnhance = async () => {
    setIsGeneratingAI(true);
    try {
      const res = await requestAIEnhancedCoverLetter({
        job,
        prompt: activePrompt,
        candidateMajor,
        keyTools: userProfile.tools,
        projectTitle,
        problemFaced,
        engineeringAction,
        measuredResult,
        tone: 'data-driven',
      });
      setGeneratedDraft(res.content);
      setAiAdvice(res.advice);
    } catch {
      // Fallback
      handleGenerateDraft();
    } finally {
      setIsGeneratingAI(false);
    }
  };

  const handleCopyText = () => {
    if (!generatedDraft) return;
    navigator.clipboard.writeText(generatedDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-5xl bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/80">
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs text-white ${job.companyBgColor}`}
            >
              {job.companyLogoText.slice(0, 3)}
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <span className="font-bold text-neutral-900 dark:text-white">{job.company}</span>
                <span>·</span>
                <span>{job.companyTier}</span>
                <span>·</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  {job.careerType} (경력 전용 제외)
                </span>
              </div>
              <h2 className="text-lg font-bold text-neutral-900 dark:text-white line-clamp-1">
                {job.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`px-2.5 py-1 text-xs font-bold font-mono tabular-nums rounded-md ${
                dday.isUrgent
                  ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200'
                  : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200'
              }`}
            >
              {dday.label}
            </span>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Nav Tabs (Single-line segmented control) */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-t-lg border-b-2 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'overview'
                ? 'border-neutral-900 dark:border-white text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-800/50'
                : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>01. 직무 심층 분석</span>
          </button>

          <button
            onClick={() => setActiveTab('requirements')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-t-lg border-b-2 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'requirements'
                ? 'border-neutral-900 dark:border-white text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-800/50'
                : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>02. 필수 자격 & 직무 적합성</span>
          </button>

          <button
            onClick={() => setActiveTab('coverletter')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-t-lg border-b-2 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'coverletter'
                ? 'border-neutral-900 dark:border-white text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-800/50'
                : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>03. 자소서 항목별 추천 가이드</span>
          </button>

          <button
            onClick={() => setActiveTab('studio')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-t-lg border-b-2 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'studio'
                ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/20'
                : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>04. 자소서 작성기 & AI 첨삭</span>
          </button>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm">
          {/* TAB 1: 직무 분석 */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Summary Banner */}
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-xs font-bold text-neutral-400 mb-1">직무 개요</h3>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed">
                  {job.jobOverview.summary}
                </p>
                <div className="mt-3 pt-3 border-t border-neutral-200/80 dark:border-neutral-700/60 flex flex-wrap gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                  <div>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                      근무지:
                    </span>{' '}
                    {job.location.city} {job.location.plantName} ({job.location.detailAddress})
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                      연봉:
                    </span>{' '}
                    <span className="font-mono tabular-nums text-neutral-900 dark:text-white font-bold">
                      {job.salary.displaySalary}
                    </span>{' '}
                    ({job.salary.bonusDetails})
                  </div>
                </div>
              </div>

              {/* Manufacturing Process */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span>담당 제조 공정 흐름</span>
                </h4>
                <div className="p-3.5 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/60 text-xs font-mono text-blue-950 dark:text-blue-200 leading-relaxed">
                  {job.jobOverview.manufacturingProcess}
                </div>
              </div>

              {/* Day in the Life Workflow */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>현장 엔지니어의 일과 (Day in the Life)</span>
                </h4>
                <div className="space-y-2">
                  {job.jobOverview.dailyWorkflow.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/80 text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2.5"
                    >
                      <span className="font-mono tabular-nums font-bold text-blue-600 dark:text-blue-400 shrink-0">
                        {item.split(' - ')[0]}
                      </span>
                      <span>{item.split(' - ')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Responsibilities */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-emerald-500" />
                  <span>핵심 직무 책임 (Key Responsibilities)</span>
                </h4>
                <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                  {job.jobOverview.keyResponsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Career Growth */}
              <div className="p-3.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs">
                <span className="font-bold text-neutral-900 dark:text-white">
                  성장 로드맵 & 비전:
                </span>{' '}
                <span className="text-neutral-600 dark:text-neutral-300">
                  {job.jobOverview.futureGrowth}
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: 필수 자격 & 직무 적합성 */}
          {activeTab === 'requirements' && (
            <div className="space-y-6">
              {/* Mandatory & Preferred Requirements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1.5 mb-2.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span>필수 자격 요건 (Mandatory)</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                    {job.requirements.mandatory.map((m, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">·</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-2 border-t border-neutral-200 dark:border-neutral-700 text-xs">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                      어학 기준:
                    </span>{' '}
                    <span className="font-mono text-neutral-900 dark:text-white font-medium">
                      {job.requirements.minLanguageScore}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1.5 mb-2.5">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>우대 사항 (Preferred)</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                    {job.requirements.preferred.map((p, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">·</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 pt-2 border-t border-neutral-200 dark:border-neutral-700 space-y-1 text-xs">
                    <div>
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                        우대 자격증:
                      </span>{' '}
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {job.requirements.preferredCerts.join(', ')}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                        우대 툴:
                      </span>{' '}
                      <span className="font-mono text-neutral-600 dark:text-neutral-400">
                        {job.requirements.preferredTools.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Competencies Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                  핵심 직무 역량 심층 평가 기준
                </h4>
                <div className="space-y-3">
                  {job.competencies.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800/40"
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-bold text-neutral-900 dark:text-white text-sm">
                          {comp.name}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                            comp.importance === '필수'
                              ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200'
                          }`}
                        >
                          {comp.importance}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        {comp.description}
                      </p>
                      <div className="mt-2 text-xs flex flex-wrap items-center gap-3 text-neutral-500">
                        <span>
                          <strong className="text-neutral-700 dark:text-neutral-300">
                            평가 관점:
                          </strong>{' '}
                          {comp.evaluationCriteria}
                        </span>
                        <span>
                          <strong className="text-neutral-700 dark:text-neutral-300">
                            추천 스킬:
                          </strong>{' '}
                          {comp.recommendedSkills.join(', ')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instant Mini Job-Fit Evaluator */}
              <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/30 dark:bg-blue-950/20 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-blue-950 dark:text-blue-200 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span>내 스펙과 본 공고의 즉시 적합도 분석</span>
                    </h4>
                    <p className="text-xs text-blue-800/80 dark:text-blue-300/80 mt-0.5">
                      지원자의 전공 및 보유 툴과 자격증에 기반한 계산 결과입니다.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold font-mono tabular-nums text-blue-700 dark:text-blue-400">
                      {fitResult.overallScore}%
                    </span>
                    <span className="block text-[11px] text-blue-600/80 font-medium">직무 적합도</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2 rounded bg-white/80 dark:bg-neutral-800/80 border border-blue-100 dark:border-blue-900/40">
                    <span className="text-neutral-500">전공 일치도</span>
                    <div className="font-bold font-mono text-neutral-900 dark:text-white">
                      {fitResult.majorMatchScore}%
                    </div>
                  </div>
                  <div className="p-2 rounded bg-white/80 dark:bg-neutral-800/80 border border-blue-100 dark:border-blue-900/40">
                    <span className="text-neutral-500">실무 툴 역량</span>
                    <div className="font-bold font-mono text-neutral-900 dark:text-white">
                      {fitResult.toolsSkillsScore}%
                    </div>
                  </div>
                  <div className="p-2 rounded bg-white/80 dark:bg-neutral-800/80 border border-blue-100 dark:border-blue-900/40">
                    <span className="text-neutral-500">자격증 가산점</span>
                    <div className="font-bold font-mono text-neutral-900 dark:text-white">
                      {fitResult.certificationsScore}%
                    </div>
                  </div>
                  <div className="p-2 rounded bg-white/80 dark:bg-neutral-800/80 border border-blue-100 dark:border-blue-900/40">
                    <span className="text-neutral-500">프로젝트 적합성</span>
                    <div className="font-bold font-mono text-neutral-900 dark:text-white">
                      {fitResult.experienceMatchScore}%
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2 text-xs">
                  {fitResult.strengths.map((s, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                  {fitResult.gapAnalysis.map((g, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-amber-700 dark:text-amber-400">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{g}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 자소서 항목별 추천 가이드 */}
          {activeTab === 'coverletter' && (
            <div className="space-y-6">
              {/* Question Selector Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <span className="text-xs font-bold text-neutral-400 shrink-0">문항 선택:</span>
                {job.coverLetterPrompts.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPromptIdx(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                      selectedPromptIdx === idx
                        ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    문항 {p.questionNumber} ({p.charLimit})
                  </button>
                ))}
              </div>

              {/* Active Prompt Box */}
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    문항 {activePrompt.questionNumber}
                  </span>
                  <span>글자수 제한: {activePrompt.charLimit}</span>
                </div>
                <h3 className="text-sm font-bold text-neutral-900 dark:text-white leading-snug">
                  "{activePrompt.question}"
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 pt-1">
                  <strong className="text-neutral-800 dark:text-neutral-200">출제 및 평가 의도:</strong>{' '}
                  {activePrompt.purpose}
                </p>
              </div>

              {/* 3 Column Guidance Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                {/* 1. 꼭 들어가야 할 핵심 포인트 */}
                <div className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800/40 space-y-2">
                  <h4 className="font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>반드시 포함할 내용</span>
                  </h4>
                  <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-300">
                    {activePrompt.keyFocus.map((f, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-blue-500 font-bold">·</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. 추천 공학 전문 키워드 */}
                <div className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800/40 space-y-2">
                  <h4 className="font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span>추천 공학 키워드</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activePrompt.recommendedKeywords.map((kw, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-[11px] font-medium"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. 추천 경험 소재 제안 */}
                <div className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800/40 space-y-2">
                  <h4 className="font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />
                    <span>추천 경험 소재</span>
                  </h4>
                  <ul className="space-y-1 text-neutral-600 dark:text-neutral-300">
                    {activePrompt.suggestedTopics.map((top, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-emerald-500 font-bold">·</span>
                        <span>{top}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* STAR-L Framework Breakdown */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span>STAR-L 모델 기반 추천 서술 구조</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800">
                    <span className="font-bold text-blue-600 block mb-1">Situation (상황)</span>
                    <p className="text-neutral-600 dark:text-neutral-300 text-[11px] leading-relaxed">
                      {activePrompt.starFrameworkGuide.situation}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800">
                    <span className="font-bold text-blue-600 block mb-1">Task (과제/목표)</span>
                    <p className="text-neutral-600 dark:text-neutral-300 text-[11px] leading-relaxed">
                      {activePrompt.starFrameworkGuide.task}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800">
                    <span className="font-bold text-blue-600 block mb-1">Action (공학적 행동)</span>
                    <p className="text-neutral-600 dark:text-neutral-300 text-[11px] leading-relaxed">
                      {activePrompt.starFrameworkGuide.action}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800">
                    <span className="font-bold text-blue-600 block mb-1">Result (정량적 성과)</span>
                    <p className="text-neutral-600 dark:text-neutral-300 text-[11px] leading-relaxed">
                      {activePrompt.starFrameworkGuide.result}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800">
                    <span className="font-bold text-blue-600 block mb-1">Learning (현장 기여)</span>
                    <p className="text-neutral-600 dark:text-neutral-300 text-[11px] leading-relaxed">
                      {activePrompt.starFrameworkGuide.learning}
                    </p>
                  </div>
                </div>
              </div>

              {/* Anti-Cliche Warning */}
              <div className="p-3.5 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/60 text-xs">
                <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-bold mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>※ 피해야 할 상투적 클리셰 (Anti-Cliché)</span>
                </div>
                <p className="text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
                  {activePrompt.clicheToAvoid}
                </p>
              </div>

              {/* Action to switch to Studio */}
              <div className="flex justify-end">
                <button
                  onClick={() => setActiveTab('studio')}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>이 문항으로 맞춤 자소서 초안 생성하기</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: 자소서 작성기 & AI 첨삭 */}
          {activeTab === 'studio' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column: User Inputs */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span>내 프로젝트 및 공학 경험 입력</span>
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    문항 {activePrompt.questionNumber}에 맞춘 STAR-L 논리 구조를 자동 생성합니다.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      전공 분야
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
                      프로젝트/과제명
                    </label>
                    <input
                      type="text"
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
                      placeholder="예: 학부 캡스톤 로봇 용접 지그 최적화"
                      className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      직면했던 기술적 문제/병목 (Situation & Task)
                    </label>
                    <textarea
                      rows={2}
                      value={problemFaced}
                      onChange={(e) => setProblemFaced(e.target.value)}
                      placeholder="예: 용접 열변형으로 인한 단차 불량 및 가이드 간섭 발생"
                      className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      공학적 해결 조치 및 툴 활용 (Action)
                    </label>
                    <textarea
                      rows={2}
                      value={engineeringAction}
                      onChange={(e) => setEngineeringAction(e.target.value)}
                      placeholder="예: CATIA 간섭 체크 및 5-Why 원인 분석으로 지그 챔퍼 각도와 클램핑 압력 재설정"
                      className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      도출된 정량적 성과 (Result & Learning)
                    </label>
                    <input
                      type="text"
                      value={measuredResult}
                      onChange={(e) => setMeasuredResult(e.target.value)}
                      placeholder="예: 불량률 14% -> 0.5% 저감, 사이클타임 20% 단축"
                      className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={handleGenerateDraft}
                    className="flex-1 py-2 px-3 text-xs font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    엔지니어링 초안 즉시 생성
                  </button>

                  <button
                    onClick={handleAIEnhance}
                    disabled={isGeneratingAI}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isGeneratingAI ? 'AI 첨삭 중...' : 'Gemini AI 정밀 첨삭'}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Output Draft View */}
              <div className="flex flex-col justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/40">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-neutral-500" />
                      <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                        작성된 자기소개서 초안
                      </h4>
                    </div>
                    {generatedDraft && (
                      <span className="text-xs font-mono tabular-nums text-neutral-500">
                        공백 제외 약 {generatedDraft.replace(/\s/g, '').length}자
                      </span>
                    )}
                  </div>

                  {generatedDraft ? (
                    <div className="mt-3">
                      <textarea
                        rows={12}
                        value={generatedDraft}
                        onChange={(e) => setGeneratedDraft(e.target.value)}
                        className="w-full p-3 text-xs font-normal text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-1 focus:ring-blue-500 leading-relaxed font-sans"
                      />

                      {aiAdvice.length > 0 && (
                        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg border border-blue-200 dark:border-blue-900 text-xs space-y-1">
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
                    </div>
                  ) : (
                    <div className="py-20 text-center text-xs text-neutral-400">
                      <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-30 text-neutral-500" />
                      <p>왼쪽 정보를 입력하고 [엔지니어링 초안 생성]을 클릭하세요.</p>
                      <p className="mt-1 text-neutral-500">
                        {job.company}의 최신 제조 라인과 STAR-L 원칙에 맞춤화된 초안이 도출됩니다.
                      </p>
                    </div>
                  )}
                </div>

                {generatedDraft && (
                  <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-400">
                      초안을 복사하여 채용 사이트에 붙여넣으세요.
                    </span>
                    <button
                      onClick={handleCopyText}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? '복사 완료!' : '클립보드 복사'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Fixed Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/90 text-xs">
          <div className="flex items-center gap-3 text-neutral-500">
            <span>마감일: {formatKoreanDate(job.timeline.endDate)}</span>
            <span>·</span>
            <a
              href={generateGoogleCalendarUrl(job)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 flex items-center gap-0.5"
            >
              <span>구글 캘린더 추가</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(job.id)}
              className={`px-3 py-1.5 rounded-lg border font-medium transition-colors cursor-pointer ${
                isBookmarked
                  ? 'border-amber-400 text-amber-600 bg-amber-50 dark:bg-amber-950/40'
                  : 'border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {isBookmarked ? '★ 관심 공고 저장됨' : '☆ 관심 공고 담기'}
            </button>

            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-1.5 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
            >
              <span>{job.company} 채용 사이트 지원하기</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
