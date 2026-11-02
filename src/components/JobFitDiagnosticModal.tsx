import React, { useState } from 'react';
import { JobPosting, StudentProfile } from '../types/job';
import { evaluateJobFit } from '../utils/jobFitEvaluator';
import {
  Award,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  GraduationCap,
  Wrench,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

interface JobFitDiagnosticModalProps {
  jobs: JobPosting[];
  onSelectJob: (job: JobPosting, tab?: 'overview' | 'requirements' | 'coverletter' | 'studio') => void;
}

export const JobFitDiagnosticModal: React.FC<JobFitDiagnosticModalProps> = ({
  jobs,
  onSelectJob,
}) => {
  const [profile, setProfile] = useState<StudentProfile>({
    major: '기계공학',
    subMajor: '',
    gpa: '3.7 / 4.5',
    certifications: ['일반기계기사'],
    engineeringTools: ['CATIA', 'AutoCAD', 'Minitab'],
    practicalExperiences: ['캡스톤 디자인 프로젝트 (졸업과제)'],
    preferredDomain: '생산기술',
    preferredRegion: '전체',
  });

  const allMajors = [
    '기계공학',
    '전기전자공학',
    '제어계측공학',
    '산업공학',
    '신소재/금속공학',
    '화학공학/고분자',
    '컴퓨터/소프트웨어',
    '메카트로닉스공학',
    '자동차공학',
  ];

  const allTools = [
    'CATIA V5',
    'NX',
    'SolidWorks',
    'AutoCAD',
    'PLC (GX Works/TIA)',
    'Minitab',
    'MATLAB / Simulink',
    'ANSYS / HyperMesh',
    'Python',
    'Vector CANoe',
  ];

  const allCerts = [
    '일반기계기사',
    '기계설계기사',
    '전기기사',
    '품질경영기사',
    '산업안전기사',
    '6-Sigma Green Belt',
    '메카트로닉스기사',
    'CPIM (생산재고관리사)',
    '화공기사',
  ];

  const allExperiences = [
    '캡스톤 디자인 프로젝트 (졸업과제)',
    '자작차 동아리 (KSAE / FSAE 학회)',
    '자동차 부품사/공장 인턴십',
    '학부 연구생 (랩실 프로젝트)',
    '스마트팩토리 / PLC 자동화 아카데미',
    '공학 해석(CAE) 공모전 참가',
  ];

  const handleToggleTool = (tool: string) => {
    setProfile((prev) => ({
      ...prev,
      engineeringTools: prev.engineeringTools.includes(tool)
        ? prev.engineeringTools.filter((t) => t !== tool)
        : [...prev.engineeringTools, tool],
    }));
  };

  const handleToggleCert = (cert: string) => {
    setProfile((prev) => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter((c) => c !== cert)
        : [...prev.certifications, cert],
    }));
  };

  const handleToggleExp = (exp: string) => {
    setProfile((prev) => ({
      ...prev,
      practicalExperiences: prev.practicalExperiences.includes(exp)
        ? prev.practicalExperiences.filter((e) => e !== exp)
        : [...prev.practicalExperiences, exp],
    }));
  };

  // Evaluate fit across all jobs
  const evaluatedJobs = jobs.map((job) => ({
    job,
    fit: evaluateJobFit(profile, job),
  }));

  // Sort by overall score descending
  evaluatedJobs.sort((a, b) => b.fit.overallScore - a.fit.overallScore);

  const topMatch = evaluatedJobs[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
              이공계 자동차 직무 적합도 진단기
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              본인의 전공, 공학 소프트웨어 툴, 보유 기사 자격증, 실무 프로젝트를 선택하면 자동차 12개 주요 직무와의 정밀 일치도 및 합격 전략을 분석해 드립니다.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Profile Controls */}
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 shadow-xs space-y-5">
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-1.5 pb-2 border-b border-neutral-100 dark:border-neutral-800">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span>내 스펙 & 역량 입력</span>
          </h3>

          {/* Major Select */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              학부 주전공
            </label>
            <select
              value={profile.major}
              onChange={(e) => setProfile({ ...profile, major: e.target.value })}
              className="w-full px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {allMajors.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Tools Checklist */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center justify-between">
              <span>활용 가능 공학 툴 (복수 선택)</span>
              <span className="text-[11px] text-neutral-400 font-normal">
                {profile.engineeringTools.length}개 선택
              </span>
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {allTools.map((tool) => {
                const isSelected = profile.engineeringTools.includes(tool);
                return (
                  <button
                    key={tool}
                    onClick={() => handleToggleTool(tool)}
                    className={`px-2 py-1.5 rounded-md text-[11px] font-medium text-left truncate transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-400 text-blue-800 dark:text-blue-300 font-semibold'
                        : 'bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}
                    {tool}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Certifications Checklist */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center justify-between">
              <span>취득 자격증 (복수 선택)</span>
              <span className="text-[11px] text-neutral-400 font-normal">
                {profile.certifications.length}개 선택
              </span>
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {allCerts.map((cert) => {
                const isSelected = profile.certifications.includes(cert);
                return (
                  <button
                    key={cert}
                    onClick={() => handleToggleCert(cert)}
                    className={`px-2 py-1.5 rounded-md text-[11px] font-medium text-left truncate transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-emerald-800 dark:text-emerald-300 font-semibold'
                        : 'bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}
                    {cert}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Experiences Checklist */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              실무 경험 및 프로젝트
            </label>
            <div className="space-y-1.5">
              {allExperiences.map((exp) => {
                const isSelected = profile.practicalExperiences.includes(exp);
                return (
                  <button
                    key={exp}
                    onClick={() => handleToggleExp(exp)}
                    className={`w-full px-2.5 py-1.5 rounded-md text-xs font-medium text-left transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900 dark:border-white font-semibold'
                        : 'bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}
                    {exp}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right 2 Columns: Ranked Matching Results & Diagnostics */}
        <div className="lg:col-span-2 space-y-6">
          {/* Top Recommendation Highlight Banner */}
          {topMatch && (
            <div className="p-5 rounded-xl border border-blue-200 dark:border-blue-900 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 dark:from-blue-950/40 dark:via-neutral-900 dark:to-neutral-900 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-600 text-white">
                    최고 적합도 1위 직무
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">
                    {topMatch.job.company} · {topMatch.job.engineeringDomain}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold font-mono tabular-nums text-blue-700 dark:text-blue-400">
                    {topMatch.fit.overallScore}%
                  </span>
                  <span className="block text-[11px] text-neutral-500">매칭 점수</span>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-neutral-900 dark:text-white">
                  {topMatch.job.title}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1 line-clamp-2">
                  {topMatch.job.jobOverview.summary}
                </p>
              </div>

              {/* Strengths & Roadmap */}
              <div className="pt-2 border-t border-blue-100 dark:border-blue-900/60 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <span className="font-bold text-emerald-800 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    나의 핵심 경쟁력
                  </span>
                  {topMatch.fit.strengths.slice(0, 2).map((s, idx) => (
                    <p key={idx} className="text-neutral-700 dark:text-neutral-300 text-[11px]">
                      · {s}
                    </p>
                  ))}
                </div>

                <div className="space-y-1">
                  <span className="font-bold text-amber-800 dark:text-amber-400 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    마감 전 집중 보완 포인트
                  </span>
                  {topMatch.fit.gapAnalysis.slice(0, 2).map((g, idx) => (
                    <p key={idx} className="text-neutral-700 dark:text-neutral-300 text-[11px]">
                      · {g}
                    </p>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">
                  초봉: {topMatch.job.salary.displaySalary}
                </span>
                <button
                  onClick={() => onSelectJob(topMatch.job, 'coverletter')}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer"
                >
                  <span>이 공고 자소서 가이드 & 작성기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* All Postings Match Ranking List */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                전체 12개 자동차 제조 공고별 적합도 랭킹
              </h4>
              <span className="text-xs text-neutral-400">신입 전용 공고</span>
            </div>

            <div className="divide-y divide-neutral-100 dark:divide-neutral-800 mt-2 space-y-3">
              {evaluatedJobs.map(({ job, fit }, idx) => (
                <div
                  key={job.id}
                  onClick={() => onSelectJob(job, 'requirements')}
                  className="pt-3 first:pt-1 flex items-center justify-between gap-4 group cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50 p-2 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold font-mono tabular-nums text-neutral-400 w-5">
                      #{idx + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <span className="font-bold text-neutral-900 dark:text-white">
                          {job.company}
                        </span>
                        <span>·</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                          {job.engineeringDomain}
                        </span>
                        <span>·</span>
                        <span>{job.location.city}</span>
                      </div>
                      <h5 className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-blue-600 line-clamp-1 mt-0.5">
                        {job.title}
                      </h5>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <span
                        className={`text-base font-bold font-mono tabular-nums ${
                          fit.overallScore >= 80
                            ? 'text-blue-600 dark:text-blue-400'
                            : fit.overallScore >= 65
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-neutral-500'
                        }`}
                      >
                        {fit.overallScore}%
                      </span>
                      <span className="block text-[10px] text-neutral-400">적합도</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
