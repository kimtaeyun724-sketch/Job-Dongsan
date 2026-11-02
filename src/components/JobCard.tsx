import React from 'react';
import { JobPosting } from '../types/job';
import { calculateDDay, formatKoreanDate } from '../utils/calendarUtils';
import {
  Bookmark,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  ExternalLink,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

interface JobCardProps {
  job: JobPosting;
  isBookmarked: boolean;
  onToggleBookmark: (jobId: string) => void;
  onSelectJob: (job: JobPosting, initialTab?: 'overview' | 'requirements' | 'coverletter' | 'studio') => void;
}

export const JobCard: React.FC<JobCardProps> = ({
  job,
  isBookmarked,
  onToggleBookmark,
  onSelectJob,
}) => {
  const dday = calculateDDay(job.timeline.endDate);

  return (
    <div className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all shadow-xs hover:shadow-md flex flex-col justify-between">
      <div>
        {/* Top Header: Company & D-Day */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs tracking-tight text-white shadow-xs ${job.companyBgColor}`}
            >
              {job.companyLogoText.slice(0, 3)}
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                  {job.company}
                </span>
                <span aria-hidden="true">·</span>
                <span>{job.companyTier}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  {job.careerType}
                </span>
              </div>
              <h3
                onClick={() => onSelectJob(job, 'overview')}
                className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mt-0.5 cursor-pointer"
              >
                {job.title}
              </h3>
            </div>
          </div>

          {/* D-Day Urgency Badge */}
          <div className="flex items-center gap-2 shrink-0">
            <span
              className={`px-2.5 py-1 text-xs font-bold rounded-md font-mono tabular-nums ${
                dday.isUrgent
                  ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-200 dark:border-rose-900'
                  : dday.isUpcoming
                  ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-900'
                  : 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-900'
              }`}
            >
              {dday.label}
            </span>

            <button
              onClick={() => onToggleBookmark(job.id)}
              className="p-1.5 rounded-md text-neutral-400 hover:text-amber-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="관심 공고 저장"
            >
              <Bookmark
                className={`w-4 h-4 ${
                  isBookmarked ? 'fill-amber-500 text-amber-500' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Clean Unboxed Metadata Strip */}
        <div className="mt-3.5 flex flex-wrap items-center gap-y-1.5 gap-x-2 text-xs text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-medium text-neutral-800 dark:text-neutral-200">
              {job.engineeringDomain}
            </span>
          </div>
          <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
            <span>
              {job.location.city} ({job.location.plantName})
            </span>
          </div>
          <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
          <div className="flex items-center gap-1 font-mono tabular-nums font-semibold text-neutral-900 dark:text-white">
            <span>{job.salary.displaySalary}</span>
          </div>
        </div>

        {/* Target Majors & Tools */}
        <div className="mt-3 flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
          <GraduationCap className="w-3.5 h-3.5 shrink-0 text-neutral-400" />
          <span className="truncate">
            <strong className="text-neutral-700 dark:text-neutral-300 font-medium">추천 전공:</strong>{' '}
            {job.targetMajors.slice(0, 3).join(', ')}
            {job.targetMajors.length > 3 && ` 외 ${job.targetMajors.length - 3}개`}
          </span>
        </div>

        {/* Summary Snippet */}
        <p className="mt-2.5 text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
          {job.jobOverview.summary}
        </p>

        {/* Cover Letter Prompt Peek */}
        <div className="mt-3 p-2.5 bg-neutral-50 dark:bg-neutral-800/60 rounded-lg border border-neutral-100 dark:border-neutral-800 text-xs">
          <div className="flex items-center justify-between text-neutral-500 dark:text-neutral-400 font-medium mb-1">
            <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              자소서 1번 문항 가이드:
            </span>
            <span>{job.coverLetterPrompts[0]?.charLimit}</span>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 line-clamp-1 italic">
            "{job.coverLetterPrompts[0]?.question}"
          </p>
          <div className="mt-1 flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400">
            <span>추천 키워드:</span>
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              {job.coverLetterPrompts[0]?.recommendedKeywords.slice(0, 3).join(' · ')}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-2">
        <span className="text-[11px] text-neutral-400 font-mono tabular-nums">
          접수 마감: {formatKoreanDate(job.timeline.endDate)}
        </span>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onSelectJob(job, 'coverletter')}
            className="px-2.5 py-1.5 text-xs font-medium text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-md transition-colors cursor-pointer"
          >
            자소서 분석
          </button>

          <button
            onClick={() => onSelectJob(job, 'overview')}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors cursor-pointer shadow-xs"
          >
            <span>직무 상세</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
