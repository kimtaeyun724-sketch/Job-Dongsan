export type EngineeringDomain =
  | '생산기술'
  | '품질관리·보증'
  | '생산관리·SCM'
  | '연구개발·설계'
  | '전기전자·전장제어'
  | '스마트팩토리·설비보전'
  | '화학·신소재'
  | '차량SW·임베디드';

export type CompanyTier =
  | '완성차 OEM'
  | '글로벌 1차 부품사'
  | '배터리·전장 전문기업'
  | '샤시·차체 전문사';

export type CareerType = '신입' | '신입/인턴(채용전환형)' | '신입·경력무관';

export interface CoverLetterPrompt {
  id: string;
  questionNumber: number;
  question: string;
  charLimit: string;
  purpose: string; // 평가 및 출제 의도
  keyFocus: string[]; // 꼭 포함되어야 하는 핵심 역량
  recommendedKeywords: string[]; // 추천 공학 전문 키워드 (예: Cpk, 4대역학, 수율, FMEA 등)
  suggestedTopics: string[]; // 추천 경험 소재 (캡스톤, 자작차, 랩실, 공정실습 등)
  starFrameworkGuide: {
    situation: string;
    task: string;
    action: string;
    result: string;
    learning: string;
  };
  sampleDraftOutline: string; // 모범 개요 템플릿
  clicheToAvoid: string; // 피해야 할 상투적 표현
}

export interface JobCompetency {
  name: string;
  importance: '필수' | '매우중요' | '우대';
  description: string;
  evaluationCriteria: string;
  recommendedSkills: string[];
}

export interface JobPosting {
  id: string;
  company: string;
  companyTier: CompanyTier;
  companyLogoText: string;
  companyBgColor: string;
  title: string;
  department: string;
  careerType: CareerType;
  experienceExcluded: true; // Explicit flag confirming career-only candidates excluded
  targetDegrees: string[];
  engineeringDomain: EngineeringDomain;
  targetMajors: string[];
  location: {
    region: '경기' | '충청' | '영남' | '호남' | '수도권';
    city: string;
    plantName: string;
    detailAddress: string;
  };
  salary: {
    baseAmount: number; // in 만원, e.g. 5400
    displaySalary: string; // e.g. "5,400만원 + 성과급 (예상 영끌 6,800만원)"
    bonusDetails: string;
  };
  workType: string;
  timeline: {
    startDate: string; // YYYY-MM-DD
    endDate: string; // YYYY-MM-DD
    docResultDate: string; // 서류 결과 발표 예정일
    interviewPhase1: string;
    interviewPhase2: string;
    finalJoinDate: string;
  };
  jobOverview: {
    summary: string;
    manufacturingProcess: string; // 어떤 공정을 담당하는지
    dailyWorkflow: string[]; // 현장 엔지니어의 하루
    keyResponsibilities: string[];
    futureGrowth: string;
  };
  competencies: JobCompetency[];
  requirements: {
    mandatory: string[];
    preferred: string[];
    preferredCerts: string[];
    preferredTools: string[];
    minLanguageScore: string;
  };
  coverLetterPrompts: CoverLetterPrompt[];
  tags: string[];
  featuredImage: string;
  applyUrl: string;
}

export interface JobFilterState {
  searchQuery: string;
  engineeringDomain: EngineeringDomain | '전체';
  region: '전체' | '경기' | '충청' | '영남' | '호남' | '수도권';
  minSalary: number; // 0, 4000, 4500, 5000, 5500, 6000
  targetMajor: string; // '전체' or specific major
  careerOnlyExcluded: boolean; // default true
  deadlineFilter: 'all' | 'urgent' | 'active'; // urgent is within 7 days
  sortBy: 'deadline' | 'salary' | 'recent';
}

export interface StudentProfile {
  major: string;
  subMajor?: string;
  gpa: string;
  certifications: string[];
  engineeringTools: string[];
  practicalExperiences: string[];
  preferredDomain: EngineeringDomain | '전체';
  preferredRegion: string;
}

export interface FitAssessmentResult {
  overallScore: number; // 0 - 100
  majorMatchScore: number;
  toolsSkillsScore: number;
  certificationsScore: number;
  experienceMatchScore: number;
  strengths: string[];
  gapAnalysis: string[];
  recommendedPreparation: string[];
  bestSuitedRoles: string[];
}
