import React from 'react';
import { Search, Filter, ShieldCheck, MapPin, DollarSign, CalendarCheck } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalJobsCount: number;
  urgentJobsCount: number;
  onSelectQuickKeyword: (keyword: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  totalJobsCount,
  urgentJobsCount,
  onSelectQuickKeyword,
}) => {
  const quickKeywords = [
    '생산기술',
    '품질관리',
    'CATIA',
    'PLC',
    '화성',
    '울산',
    '진천/서산',
    '오창 배터리',
    '평택',
  ];

  return (
    <div className="relative overflow-hidden bg-neutral-900 text-white border-b border-neutral-800">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/auto_factory_robotics_1793606426799.jpg"
          alt="Automotive Manufacturing Robotics Factory"
          className="w-full h-full object-cover object-center opacity-30 brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Anti-Career Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-medium mb-4">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>경력 사원 전용 공고 원천 제외 (신입/인턴 채용만 엄선)</span>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-tight">
            대한민국 자동차 제조·부품사
            <span className="block text-blue-400 mt-1">이공계 신입 엔지니어 채용 포털</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-300 max-w-2xl text-balance">
            완성차(현대·기아) 및 1차 협력사(모비스·만도·LG엔솔 등)의 생산기술, 품질, 전장, R&D 공고를
            지역·초봉 필터와 마감 달력으로 한눈에 탐색하고, 직무 분석과 합격 자소서 전략을 확인하세요.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="mt-6 max-w-2xl">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 w-5 h-5 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="기업명, 직무(생산기술/품질), 전공(기계/전기), 툴(CATIA/PLC), 지역(화성/울산) 검색..."
              className="w-full pl-11 pr-4 py-3 bg-neutral-800/90 hover:bg-neutral-800 focus:bg-neutral-900 border border-neutral-700 focus:border-blue-500 rounded-lg text-sm text-white placeholder-neutral-400 focus:outline-none transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 text-xs text-neutral-400 hover:text-white px-2 py-1 bg-neutral-700/60 rounded"
              >
                지우기
              </button>
            )}
          </div>

          {/* Quick Keywords */}
          <div className="mt-2.5 flex items-center gap-1.5 flex-wrap text-xs text-neutral-400">
            <span className="shrink-0 flex items-center gap-1 text-neutral-400">
              <Filter className="w-3 h-3" /> 추천 검색어:
            </span>
            {quickKeywords.map((kw) => (
              <button
                key={kw}
                onClick={() => onSelectQuickKeyword(kw)}
                className="px-2 py-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                {kw}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Stat Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-neutral-800/80">
          <div className="bg-neutral-900/60 backdrop-blur-sm p-3.5 rounded-lg border border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>검증된 신입 공고</span>
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-bold font-mono tabular-nums text-white">
                {totalJobsCount}
              </span>
              <span className="text-xs text-neutral-400">건 (경력직 제외)</span>
            </div>
          </div>

          <div className="bg-neutral-900/60 backdrop-blur-sm p-3.5 rounded-lg border border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
              <CalendarCheck className="w-4 h-4 text-amber-400" />
              <span>마감 임박 공고</span>
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-bold font-mono tabular-nums text-amber-400">
                {urgentJobsCount}
              </span>
              <span className="text-xs text-neutral-400">건 (7일 이내)</span>
            </div>
          </div>

          <div className="bg-neutral-900/60 backdrop-blur-sm p-3.5 rounded-lg border border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
              <DollarSign className="w-4 h-4 text-blue-400" />
              <span>평균 대졸 초봉</span>
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-bold font-mono tabular-nums text-white">5,200</span>
              <span className="text-xs text-neutral-400">만원 (성과급 별도)</span>
            </div>
          </div>

          <div className="bg-neutral-900/60 backdrop-blur-sm p-3.5 rounded-lg border border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>주요 제조 거점</span>
            </div>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-sm font-semibold text-neutral-200 truncate">
                화성 · 울산 · 평택 · 오창
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
