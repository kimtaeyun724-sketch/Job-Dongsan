import React, { useState } from 'react';
import { JobPosting, EngineeringDomain } from '../types/job';
import { calculateDDay, formatKoreanDate, downloadIcsFile, generateGoogleCalendarUrl } from '../utils/calendarUtils';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Clock,
  Layers,
  MapPin,
  Briefcase,
  AlertCircle,
} from 'lucide-react';

interface RecruitmentCalendarProps {
  jobs: JobPosting[];
  onSelectJob: (job: JobPosting, tab?: 'overview' | 'requirements' | 'coverletter') => void;
}

export const RecruitmentCalendar: React.FC<RecruitmentCalendarProps> = ({
  jobs,
  onSelectJob,
}) => {
  // Current calendar view month (Default to November 2026)
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [currentMonth, setCurrentMonth] = useState<number>(11); // 1-indexed (11 = Nov)
  const [selectedDateStr, setSelectedDateStr] = useState<string>('2026-11-14'); // Default highlighted
  const [viewMode, setViewMode] = useState<'calendar' | 'timeline'>('calendar');
  const [domainFilter, setDomainFilter] = useState<EngineeringDomain | '전체'>('전체');

  // Filter jobs by domain if selected
  const filteredJobs = domainFilter === '전체'
    ? jobs
    : jobs.filter((j) => j.engineeringDomain === domainFilter);

  // Group jobs by deadline date
  const jobsByDeadline: { [dateStr: string]: JobPosting[] } = {};
  filteredJobs.forEach((job) => {
    if (!jobsByDeadline[job.timeline.endDate]) {
      jobsByDeadline[job.timeline.endDate] = [];
    }
    jobsByDeadline[job.timeline.endDate].push(job);
  });

  // Calculate calendar days for current month
  const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay(); // 0 = Sun
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

  const prevMonthDays = new Date(currentYear, currentMonth - 1, 0).getDate();
  const calendarCells: { date: number; month: number; year: number; isCurrentMonth: boolean; dateStr: string }[] = [];

  // Trailing previous month days
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    const m = currentMonth === 1 ? 12 : currentMonth - 1;
    const y = currentMonth === 1 ? currentYear - 1 : currentYear;
    const dateStr = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    calendarCells.push({ date: d, month: m, year: y, isCurrentMonth: false, dateStr });
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    calendarCells.push({ date: d, month: currentMonth, year: currentYear, isCurrentMonth: true, dateStr });
  }

  // Leading next month days to complete 35 or 42 grid
  const remainingCells = 35 - calendarCells.length > 0 ? 35 - calendarCells.length : 42 - calendarCells.length;
  for (let d = 1; d <= remainingCells; d++) {
    const m = currentMonth === 12 ? 1 : currentMonth + 1;
    const y = currentMonth === 12 ? currentYear + 1 : currentYear;
    const dateStr = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    calendarCells.push({ date: d, month: m, year: y, isCurrentMonth: false, dateStr });
  }

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  // Jobs on selected date
  const selectedDateJobs = jobsByDeadline[selectedDateStr] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Calendar Header with Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-neutral-900 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
              자동차 채용 일정 캘린더
            </h2>
          </div>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
            신입 서류 접수 마감일과 전형 일정을 달력에서 한눈에 확인하고 내 캘린더로 내보내세요.
          </p>
        </div>

        {/* View mode & Export buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* View Toggle */}
          <div className="flex items-center p-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                viewMode === 'calendar'
                  ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              월간 달력
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                viewMode === 'timeline'
                  ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              타임라인 간트
            </button>
          </div>

          {/* Export iCal Button */}
          <button
            onClick={() => downloadIcsFile(filteredJobs)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5" />
            <span>.ICS 캘린더 저장</span>
          </button>
        </div>
      </div>

      {viewMode === 'calendar' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 2 Cols: Monthly Calendar View */}
          <div className="lg:col-span-2 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 shadow-xs">
            {/* Month Nav */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold font-mono tabular-nums text-neutral-900 dark:text-white">
                  {currentYear}년 {currentMonth}월
                </span>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  (오늘 기준: 2026.11.02)
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrevMonth}
                  className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-neutral-400 mb-2">
              <span className="text-rose-500">일</span>
              <span>월</span>
              <span>화</span>
              <span>수</span>
              <span>목</span>
              <span>금</span>
              <span className="text-blue-500">토</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1.5">
              {calendarCells.map((cell) => {
                const dayJobs = jobsByDeadline[cell.dateStr] || [];
                const isSelected = selectedDateStr === cell.dateStr;
                const isToday = cell.dateStr === '2026-11-02';
                const hasDeadlines = dayJobs.length > 0;

                return (
                  <div
                    key={cell.dateStr}
                    onClick={() => setSelectedDateStr(cell.dateStr)}
                    className={`min-h-[76px] sm:min-h-[92px] p-1.5 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-blue-600 dark:border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 ring-2 ring-blue-500/20'
                        : isToday
                        ? 'border-amber-400 dark:border-amber-500 bg-amber-50/30 dark:bg-amber-950/20'
                        : cell.isCurrentMonth
                        ? 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/40'
                        : 'border-transparent text-neutral-300 dark:text-neutral-700 opacity-40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-mono tabular-nums font-semibold ${
                          isSelected
                            ? 'text-blue-600 dark:text-blue-400'
                            : isToday
                            ? 'text-amber-600 dark:text-amber-400'
                            : cell.isCurrentMonth
                            ? 'text-neutral-800 dark:text-neutral-200'
                            : 'text-neutral-400 dark:text-neutral-600'
                        }`}
                      >
                        {cell.date}
                      </span>

                      {isToday && (
                        <span className="text-[10px] px-1 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold">
                          오늘
                        </span>
                      )}
                    </div>

                    {/* Deadline Tags */}
                    {hasDeadlines && (
                      <div className="space-y-1 mt-1">
                        {dayJobs.slice(0, 2).map((j) => (
                          <div
                            key={j.id}
                            className={`px-1 py-0.5 rounded text-[10px] font-semibold truncate leading-tight ${
                              j.company === '현대자동차'
                                ? 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200'
                                : j.company === '기아'
                                ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
                                : j.company === 'LG에너지솔루션'
                                ? 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-200'
                                : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200'
                            }`}
                            title={`${j.company} - ${j.title}`}
                          >
                            [마감] {j.company}
                          </div>
                        ))}
                        {dayJobs.length > 2 && (
                          <div className="text-[10px] text-neutral-500 font-medium pl-1">
                            +{dayJobs.length - 2}건 더보기
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="font-semibold">범례:</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-blue-500 inline-block" />
                <span>현대자동차</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-neutral-800 inline-block" />
                <span>기아</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-rose-500 inline-block" />
                <span>LG에너지솔루션</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-emerald-600 inline-block" />
                <span>부품사(모비스/만도/에스엘 등)</span>
              </div>
            </div>
          </div>

          {/* Right 1 Col: Selected Date Jobs Detail Popover/List */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-neutral-500" />
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                    {formatKoreanDate(selectedDateStr)} 마감 공고
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 font-mono tabular-nums text-neutral-700 dark:text-neutral-300">
                  {selectedDateJobs.length}건
                </span>
              </div>

              {selectedDateJobs.length === 0 ? (
                <div className="py-12 text-center text-neutral-400 text-xs">
                  <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-40 text-neutral-400" />
                  <p>선택하신 날짜에 마감되는 공고가 없습니다.</p>
                  <p className="mt-1 text-neutral-500">
                    달력에서 색상 태그가 표시된 날짜를 클릭해 보세요.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-neutral-100 dark:divide-neutral-800/80 mt-2 space-y-3">
                  {selectedDateJobs.map((job) => {
                    const dday = calculateDDay(job.timeline.endDate);
                    return (
                      <div key={job.id} className="pt-3 first:pt-1">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-bold text-neutral-900 dark:text-white">
                            {job.company}
                          </span>
                          <span
                            className={`px-1.5 py-0.5 rounded text-[11px] font-bold font-mono tabular-nums ${
                              dday.isUrgent
                                ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200'
                                : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200'
                            }`}
                          >
                            {dday.label}
                          </span>
                        </div>
                        <h4
                          onClick={() => onSelectJob(job, 'overview')}
                          className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-blue-600 line-clamp-2 cursor-pointer"
                        >
                          {job.title}
                        </h4>
                        <div className="mt-1.5 flex items-center gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
                          <span className="font-medium text-neutral-700 dark:text-neutral-300">
                            {job.engineeringDomain}
                          </span>
                          <span>·</span>
                          <span>{job.location.city}</span>
                          <span>·</span>
                          <span className="font-mono tabular-nums text-neutral-900 dark:text-white">
                            {job.salary.displaySalary.split('+')[0]}
                          </span>
                        </div>

                        {/* Calendar export links */}
                        <div className="mt-2.5 flex items-center gap-2">
                          <button
                            onClick={() => onSelectJob(job, 'coverletter')}
                            className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-medium cursor-pointer"
                          >
                            자소서 가이드 보기
                          </button>
                          <span className="text-neutral-300 dark:text-neutral-700">·</span>
                          <a
                            href={generateGoogleCalendarUrl(job)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white flex items-center gap-0.5"
                          >
                            <span>구글캘린더 추가</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Bottom Tip */}
            <div className="mt-6 p-3 bg-neutral-50 dark:bg-neutral-800/60 rounded-lg border border-neutral-100 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400">
              <strong className="text-neutral-800 dark:text-neutral-200">Tip:</strong> 서류 접수 마감 당일 서버 폭주를 피하려면 마감 24시간 전(D-1) 제출을 권장합니다.
            </div>
          </div>
        </div>
      ) : (
        /* Timeline Gantt View */
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>2026 하반기 자동차 이공계 채용 전형 간트 차트</span>
            </h3>
            <span className="text-xs text-neutral-500">11월 01일 ~ 11월 30일 접수 기간</span>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[700px] space-y-3">
              {/* Timeline date axis */}
              <div className="grid grid-cols-6 gap-2 text-xs font-mono tabular-nums text-neutral-400 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                <span>11/01 (접수시작)</span>
                <span>11/07 (1주차)</span>
                <span>11/14 (현대차/남양마감)</span>
                <span>11/21 (모비스/트랜시스마감)</span>
                <span>11/28 (서류발표 시작)</span>
                <span>12/10 (1차 면접)</span>
              </div>

              {filteredJobs.map((job) => {
                const dday = calculateDDay(job.timeline.endDate);
                const startDay = parseInt(job.timeline.startDate.split('-')[2], 10);
                const endDay = parseInt(job.timeline.endDate.split('-')[2], 10);
                const duration = Math.max(endDay - startDay, 4);

                return (
                  <div
                    key={job.id}
                    onClick={() => onSelectJob(job, 'overview')}
                    className="p-3 rounded-lg border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-800/40 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-neutral-900 dark:text-white">
                          {job.company}
                        </span>
                        <span className="text-neutral-400">·</span>
                        <span className="text-neutral-600 dark:text-neutral-300 truncate max-w-sm">
                          {job.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-neutral-500 font-mono tabular-nums">
                          {job.timeline.startDate.slice(5)} ~ {job.timeline.endDate.slice(5)}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono tabular-nums ${
                            dday.isUrgent
                              ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200'
                          }`}
                        >
                          {dday.label}
                        </span>
                      </div>
                    </div>

                    {/* Visual Bar */}
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-2 rounded-full overflow-hidden flex">
                      <div
                        style={{ width: `${(startDay / 30) * 100}%` }}
                        className="h-full bg-transparent shrink-0"
                      />
                      <div
                        style={{ width: `${(duration / 30) * 100}%` }}
                        className={`h-full rounded-full ${
                          dday.isUrgent ? 'bg-rose-500' : 'bg-blue-600'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
