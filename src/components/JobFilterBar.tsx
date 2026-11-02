import React from 'react';
import { EngineeringDomain, JobFilterState } from '../types/job';
import { Filter, RotateCcw, ShieldCheck, ArrowDownUp, Check } from 'lucide-react';

interface JobFilterBarProps {
  filterState: JobFilterState;
  onFilterChange: (newFilter: Partial<JobFilterState>) => void;
  onResetFilters: () => void;
  totalFilteredCount: number;
}

export const JobFilterBar: React.FC<JobFilterBarProps> = ({
  filterState,
  onFilterChange,
  onResetFilters,
  totalFilteredCount,
}) => {
  const domains: (EngineeringDomain | '전체')[] = [
    '전체',
    '생산기술',
    '품질관리·보증',
    '전기전자·전장제어',
    '스마트팩토리·설비보전',
    '연구개발·설계',
    '화학·신소재',
    '생산관리·SCM',
  ];

  const regions: ('전체' | '경기' | '충청' | '영남' | '호남')[] = [
    '전체',
    '경기',
    '충청',
    '영남',
    '호남',
  ];

  const majors = [
    { label: '전공 전체', value: '전체' },
    { label: '기계공학/기계설계', value: '기계' },
    { label: '전기전자/제어계측', value: '전기' },
    { label: '산업공학/경영공학', value: '산업공학' },
    { label: '화학공학/신소재', value: '화학' },
    { label: '컴퓨터/SW/로봇', value: '컴퓨터' },
  ];

  const salaries = [
    { label: '연봉 전체', value: 0 },
    { label: '초봉 4,500만원 이상', value: 4500 },
    { label: '초봉 5,000만원 이상', value: 5000 },
    { label: '초봉 5,300만원 이상', value: 5300 },
  ];

  return (
    <div className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 py-4 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-3.5">
        {/* Row 1: Engineering Domains Segmented Control */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 shrink-0 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            직무 분야:
          </span>
          {domains.map((domain) => {
            const isActive = filterState.engineeringDomain === domain;
            return (
              <button
                key={domain}
                onClick={() => onFilterChange({ engineeringDomain: domain })}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold shadow-xs'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {domain}
              </button>
            );
          })}
        </div>

        {/* Row 2: Secondary Dropdowns (Region, Major, Salary, Career Exclusivity, Sorting) */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-neutral-100 dark:border-neutral-800/60">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Region Selector */}
            <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 rounded-md p-0.5">
              <span className="px-2 text-neutral-500 dark:text-neutral-400 font-medium">지역:</span>
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => onFilterChange({ region })}
                  className={`px-2 py-1 rounded text-xs transition-colors cursor-pointer ${
                    filterState.region === region
                      ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white font-semibold shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {region === '전체' ? '전체' : region}
                </button>
              ))}
            </div>

            {/* Major Dropdown */}
            <select
              value={filterState.targetMajor}
              onChange={(e) => onFilterChange({ targetMajor: e.target.value })}
              className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md px-2.5 py-1.5 text-xs text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {majors.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>

            {/* Salary Dropdown */}
            <select
              value={filterState.minSalary}
              onChange={(e) => onFilterChange({ minSalary: Number(e.target.value) })}
              className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md px-2.5 py-1.5 text-xs text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {salaries.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>

            {/* Anti-Career Exclusive Toggle */}
            <div
              title="3년 이상 경력 전용 공고는 원천 필터링되어 신입 지원 가능한 공고만 표시됩니다."
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-medium cursor-help"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>경력 전용 제외 (신입 100%)</span>
              <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            </div>

            {/* Reset Button */}
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>초기화</span>
            </button>
          </div>

          {/* Right Side: Sorting & Count */}
          <div className="flex items-center gap-3 text-xs">
            <span className="text-neutral-500 dark:text-neutral-400">
              검색 결과:{' '}
              <strong className="text-neutral-900 dark:text-white font-mono tabular-nums">
                {totalFilteredCount}
              </strong>
              개 공고
            </span>

            <div className="flex items-center gap-1">
              <ArrowDownUp className="w-3.5 h-3.5 text-neutral-400" />
              <select
                value={filterState.sortBy}
                onChange={(e) =>
                  onFilterChange({ sortBy: e.target.value as 'deadline' | 'salary' | 'recent' })
                }
                className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md px-2 py-1 text-xs text-neutral-800 dark:text-neutral-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="deadline">마감 임박순</option>
                <option value="salary">높은 연봉순</option>
                <option value="recent">최신 등록순</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
