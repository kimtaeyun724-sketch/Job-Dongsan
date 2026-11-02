import React from 'react';
import { Bookmark, ShieldCheck, Moon, Sun, Calendar, BookOpen, Compass, Award } from 'lucide-react';

interface HeaderProps {
  currentTab: 'jobs' | 'calendar' | 'diagnostics' | 'studio';
  onSelectTab: (tab: 'jobs' | 'calendar' | 'diagnostics' | 'studio') => void;
  bookmarksCount: number;
  onOpenBookmarks: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  bookmarksCount,
  onOpenBookmarks,
  darkMode,
  onToggleDarkMode,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectTab('jobs')}
              className="flex items-center gap-2.5 text-left group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-bold text-lg tracking-tight shadow-sm">
                AC
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap">
                  AutoCareer
                </span>
                <span className="hidden sm:inline-block ml-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  자동차 이공계 신입 채용 포털
                </span>
              </div>
            </button>

            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>경력 전용 공고 100% 필터링</span>
            </div>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => onSelectTab('jobs')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                currentTab === 'jobs'
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>채용공고 탐색</span>
            </button>

            <button
              onClick={() => onSelectTab('calendar')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                currentTab === 'calendar'
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>일정 달력</span>
            </button>

            <button
              onClick={() => onSelectTab('diagnostics')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                currentTab === 'diagnostics'
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>직무 적합도 진단</span>
            </button>

            <button
              onClick={() => onSelectTab('studio')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                currentTab === 'studio'
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>자소서 스튜디오</span>
            </button>
          </nav>

          {/* Zone 3: Actions (Theme Toggle & Bookmarks) */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="화면 모드 전환"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenBookmarks}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors whitespace-nowrap cursor-pointer shadow-xs"
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>관심 공고</span>
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-neutral-700 dark:bg-neutral-300 text-[11px] font-mono tabular-nums text-white dark:text-neutral-900">
                {bookmarksCount}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
