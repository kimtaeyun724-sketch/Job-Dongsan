import React from 'react';
import { JobPosting } from '../types/job';
import { calculateDDay, formatKoreanDate, downloadIcsFile } from '../utils/calendarUtils';
import { Bookmark, X, Download, Trash2, ArrowRight, ExternalLink } from 'lucide-react';

interface BookmarksModalProps {
  bookmarkedJobs: JobPosting[];
  onClose: () => void;
  onRemoveBookmark: (jobId: string) => void;
  onSelectJob: (job: JobPosting, tab?: 'overview' | 'requirements' | 'coverletter') => void;
  onClearAll: () => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  bookmarkedJobs,
  onClose,
  onRemoveBookmark,
  onSelectJob,
  onClearAll,
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col max-h-[85vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/80">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              관심 채용 공고 보관함
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 font-mono tabular-nums text-neutral-700 dark:text-neutral-300">
              {bookmarkedJobs.length}건
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {bookmarkedJobs.length === 0 ? (
            <div className="py-16 text-center text-xs text-neutral-400">
              <Bookmark className="w-8 h-8 mx-auto mb-2 opacity-30 text-neutral-500" />
              <p>아직 저장된 관심 공고가 없습니다.</p>
              <p className="mt-1 text-neutral-500">
                공고 카드 우측 상단의 북마크 아이콘을 눌러 관심 있는 공고를 모아보세요.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {bookmarkedJobs.map((job) => {
                const dday = calculateDDay(job.timeline.endDate);
                return (
                  <div
                    key={job.id}
                    className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800/40 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <span className="font-bold text-neutral-900 dark:text-white">
                          {job.company}
                        </span>
                        <span>·</span>
                        <span>{job.engineeringDomain}</span>
                        <span>·</span>
                        <span>{job.location.city}</span>
                      </div>
                      <h4
                        onClick={() => {
                          onClose();
                          onSelectJob(job, 'overview');
                        }}
                        className="text-sm font-bold text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer line-clamp-1"
                      >
                        {job.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono tabular-nums">
                        <span>마감: {formatKoreanDate(job.timeline.endDate)}</span>
                        <span>·</span>
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                          {job.salary.displaySalary}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono tabular-nums ${
                          dday.isUrgent
                            ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200'
                        }`}
                      >
                        {dday.label}
                      </span>

                      <div className="flex items-center gap-1.5 mt-1">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectJob(job, 'coverletter');
                          }}
                          className="px-2 py-1 text-xs text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded transition-colors cursor-pointer"
                        >
                          자소서
                        </button>
                        <button
                          onClick={() => onRemoveBookmark(job.id)}
                          className="p-1 text-neutral-400 hover:text-rose-600 rounded transition-colors cursor-pointer"
                          title="삭제"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {bookmarkedJobs.length > 0 && (
          <div className="px-6 py-3.5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/90 flex items-center justify-between text-xs">
            <button
              onClick={onClearAll}
              className="text-neutral-500 hover:text-rose-600 transition-colors cursor-pointer"
            >
              전체 비우기
            </button>

            <button
              onClick={() => downloadIcsFile(bookmarkedJobs, 'my_auto_recruitment_schedule.ics')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>관심 공고 일정 .ICS 다운로드</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
