import React, { useState, useEffect, useMemo } from 'react';
import { JOB_POSTINGS_DATA } from './data/jobPostings';
import { JobPosting, JobFilterState } from './types/job';
import { calculateDDay } from './utils/calendarUtils';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { JobFilterBar } from './components/JobFilterBar';
import { JobCard } from './components/JobCard';
import { RecruitmentCalendar } from './components/RecruitmentCalendar';
import { JobFitDiagnosticModal } from './components/JobFitDiagnosticModal';
import { CoverLetterStudio } from './components/CoverLetterStudio';
import { JobDetailModal } from './components/JobDetailModal';
import { BookmarksModal } from './components/BookmarksModal';
import {
  Compass,
  Calendar as CalendarIcon,
  Award,
  BookOpen,
  ShieldCheck,
  AlertCircle,
  RotateCcw,
} from 'lucide-react';

export default function App() {
  // Theme state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('autocareer_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('autocareer_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('autocareer_theme', 'light');
    }
  }, [darkMode]);

  // Tab State: 'jobs' | 'calendar' | 'diagnostics' | 'studio'
  const [currentTab, setCurrentTab] = useState<'jobs' | 'calendar' | 'diagnostics' | 'studio'>('jobs');

  // Bookmarks State
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('autocareer_bookmarks');
      return saved ? JSON.parse(saved) : ['hmc-mfg-eng-2026', 'mobis-ev-mfg-2026'];
    } catch {
      return ['hmc-mfg-eng-2026', 'mobis-ev-mfg-2026'];
    }
  });

  useEffect(() => {
    localStorage.setItem('autocareer_bookmarks', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  const toggleBookmark = (jobId: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const clearAllBookmarks = () => {
    setBookmarkedIds([]);
  };

  // Modals State
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);
  const [selectedJobForDetail, setSelectedJobForDetail] = useState<{
    job: JobPosting;
    initialTab: 'overview' | 'requirements' | 'coverletter' | 'studio';
  } | null>(null);

  // Filter State
  const initialFilterState: JobFilterState = {
    searchQuery: '',
    engineeringDomain: '전체',
    region: '전체',
    minSalary: 0,
    targetMajor: '전체',
    careerOnlyExcluded: true, // Strict: Never show career-only
    deadlineFilter: 'all',
    sortBy: 'deadline',
  };

  const [filterState, setFilterState] = useState<JobFilterState>(initialFilterState);

  const handleFilterChange = (newFilters: Partial<JobFilterState>) => {
    setFilterState((prev) => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilterState(initialFilterState);
  };

  // Filter & Search Logic
  const filteredJobs = useMemo(() => {
    return JOB_POSTINGS_DATA.filter((job) => {
      // 1. Search Query
      if (filterState.searchQuery.trim()) {
        const q = filterState.searchQuery.toLowerCase().trim();
        const matchTitle = job.title.toLowerCase().includes(q);
        const matchCompany = job.company.toLowerCase().includes(q);
        const matchDept = job.department.toLowerCase().includes(q);
        const matchDomain = job.engineeringDomain.toLowerCase().includes(q);
        const matchCity = job.location.city.toLowerCase().includes(q);
        const matchPlant = job.location.plantName.toLowerCase().includes(q);
        const matchMajors = job.targetMajors.some((m) => m.toLowerCase().includes(q));
        const matchTools = job.requirements.preferredTools.some((t) => t.toLowerCase().includes(q));
        const matchTags = job.tags.some((tag) => tag.toLowerCase().includes(q));

        if (
          !matchTitle &&
          !matchCompany &&
          !matchDept &&
          !matchDomain &&
          !matchCity &&
          !matchPlant &&
          !matchMajors &&
          !matchTools &&
          !matchTags
        ) {
          return false;
        }
      }

      // 2. Domain Filter
      if (filterState.engineeringDomain !== '전체') {
        if (job.engineeringDomain !== filterState.engineeringDomain) {
          return false;
        }
      }

      // 3. Region Filter
      if (filterState.region !== '전체') {
        if (job.location.region !== filterState.region) {
          return false;
        }
      }

      // 4. Salary Filter
      if (filterState.minSalary > 0) {
        if (job.salary.baseAmount < filterState.minSalary) {
          return false;
        }
      }

      // 5. Target Major Filter
      if (filterState.targetMajor !== '전체') {
        const hasMajor = job.targetMajors.some((m) => m.includes(filterState.targetMajor));
        if (!hasMajor) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (filterState.sortBy === 'deadline') {
        const ddayA = calculateDDay(a.timeline.endDate).daysRemaining;
        const ddayB = calculateDDay(b.timeline.endDate).daysRemaining;
        return ddayA - ddayB;
      } else if (filterState.sortBy === 'salary') {
        return b.salary.baseAmount - a.salary.baseAmount;
      } else {
        return new Date(b.timeline.startDate).getTime() - new Date(a.timeline.startDate).getTime();
      }
    });
  }, [filterState]);

  // Urgent Jobs Count (7 days or less)
  const urgentCount = useMemo(() => {
    return JOB_POSTINGS_DATA.filter((j) => calculateDDay(j.timeline.endDate).isUpcoming).length;
  }, []);

  // Bookmarked Jobs List
  const bookmarkedJobs = useMemo(() => {
    return JOB_POSTINGS_DATA.filter((j) => bookmarkedIds.includes(j.id));
  }, [bookmarkedIds]);

  const handleOpenJobDetail = (
    job: JobPosting,
    tab: 'overview' | 'requirements' | 'coverletter' | 'studio' = 'overview'
  ) => {
    setSelectedJobForDetail({ job, initialTab: tab });
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col font-sans transition-colors">
      {/* Top Bar */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        bookmarksCount={bookmarkedIds.length}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main View Switching */}
      <main className="flex-1">
        {currentTab === 'jobs' && (
          <div className="space-y-6">
            {/* Hero Banner */}
            <HeroSection
              searchQuery={filterState.searchQuery}
              onSearchChange={(q) => handleFilterChange({ searchQuery: q })}
              totalJobsCount={JOB_POSTINGS_DATA.length}
              urgentJobsCount={urgentCount}
              onSelectQuickKeyword={(kw) => handleFilterChange({ searchQuery: kw })}
            />

            {/* Filter Bar */}
            <JobFilterBar
              filterState={filterState}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              totalFilteredCount={filteredJobs.length}
            />

            {/* Job Grid / Empty State */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              {filteredJobs.length === 0 ? (
                <div className="py-20 text-center bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-xs">
                  <AlertCircle className="w-10 h-10 mx-auto text-neutral-400 mb-3" />
                  <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-200">
                    일치하는 자동차 제조 신입 공고가 없습니다.
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">
                    선택하신 직무 분야, 지역, 연봉 조건을 완화하거나 검색어를 재설정해 보세요.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>필터 전체 초기화</span>
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredJobs.map((job) => (
                    <JobCard
                      key={job.id}
                      job={job}
                      isBookmarked={bookmarkedIds.includes(job.id)}
                      onToggleBookmark={toggleBookmark}
                      onSelectJob={handleOpenJobDetail}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {currentTab === 'calendar' && (
          <RecruitmentCalendar
            jobs={JOB_POSTINGS_DATA}
            onSelectJob={handleOpenJobDetail}
          />
        )}

        {currentTab === 'diagnostics' && (
          <JobFitDiagnosticModal
            jobs={JOB_POSTINGS_DATA}
            onSelectJob={handleOpenJobDetail}
          />
        )}

        {currentTab === 'studio' && (
          <CoverLetterStudio
            jobs={JOB_POSTINGS_DATA}
            onSelectJob={handleOpenJobDetail}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-8 px-4 sm:px-6 lg:px-8 text-xs text-neutral-500 dark:text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-800 dark:text-neutral-200">AutoCareer</span>
            <span>·</span>
            <span>대한민국 자동차 제조 및 1차 부품사 이공계 신입 전용 채용 포털</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>경력 전용 공고 원천 제외</span>
            </span>
            <span>·</span>
            <span className="font-mono tabular-nums">기준일: 2026.11.02</span>
          </div>
        </div>
      </footer>

      {/* Detail Modal */}
      {selectedJobForDetail && (
        <JobDetailModal
          job={selectedJobForDetail.job}
          initialTab={selectedJobForDetail.initialTab}
          onClose={() => setSelectedJobForDetail(null)}
          isBookmarked={bookmarkedIds.includes(selectedJobForDetail.job.id)}
          onToggleBookmark={toggleBookmark}
        />
      )}

      {/* Bookmarks Modal */}
      {isBookmarksOpen && (
        <BookmarksModal
          bookmarkedJobs={bookmarkedJobs}
          onClose={() => setIsBookmarksOpen(false)}
          onRemoveBookmark={toggleBookmark}
          onSelectJob={handleOpenJobDetail}
          onClearAll={clearAllBookmarks}
        />
      )}
    </div>
  );
}
