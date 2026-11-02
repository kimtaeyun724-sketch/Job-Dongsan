import { JobPosting } from '../types/job';

export const JOB_POSTINGS_DATA: JobPosting[] = [
  {
    id: 'hmc-mfg-eng-2026',
    company: '현대자동차',
    companyTier: '완성차 OEM',
    companyLogoText: 'HYUNDAI',
    companyBgColor: 'bg-blue-900',
    title: '[신입] 2026 모빌리티 제조 엔지니어 (완성차 생산기술 차체/의장 공정)',
    department: '국내생산본부 차체/의장생산기술실',
    careerType: '신입',
    experienceExcluded: true,
    targetDegrees: ['학사 졸업(예정)자', '석사 졸업(예정)자'],
    engineeringDomain: '생산기술',
    targetMajors: ['기계공학', '전기전자공학', '제어계측', '산업공학', '메카트로닉스'],
    location: {
      region: '영남',
      city: '울산광역시',
      plantName: '울산공장',
      detailAddress: '울산광역시 북구 염포로 700 현대자동차 울산공장',
    },
    salary: {
      baseAmount: 5400,
      displaySalary: '5,400만원 + 성과급',
      bonusDetails: '경영성과급/격려금 포함 시 초봉 영끌 약 7,200만원 수준',
    },
    workType: '정규직 (수습 3개월)',
    timeline: {
      startDate: '2026-11-01',
      endDate: '2026-11-14',
      docResultDate: '2026-11-28',
      interviewPhase1: '2026-12-08 ~ 2026-12-15',
      interviewPhase2: '2027-01-05 ~ 2027-01-10',
      finalJoinDate: '2027-02-01',
    },
    jobOverview: {
      summary:
        '현대자동차 신차 양산 프로젝트의 핵심인 차체 용접 로봇 공정과 최종 의장(Trim/Chassis/Final) 조립 라인의 신기술 공법을 설계하고 라인 사이클타임(T/T)을 최적화하는 생산기술 엔지니어입니다.',
      manufacturingProcess:
        '프레스 성형 패널 → 로봇 차체 스폿/레이저 용접 조립 → 도장 라인 → 의장 전장·내외장 모듈 결합 → 종합 검사 휠얼라인먼트/방수 테스트',
      dailyWorkflow: [
        '08:00 - 아침 라인 가동률 및 전일 Cpk 공정능력지수/야간 공정 트러블슈팅 점검',
        '10:00 - 신차종(신규 EV) 시험 양산(Pilot) 파일럿 카 조립 갭단차(Gap & Flush) 측정 및 간섭 검토',
        '13:30 - 현장 반장/생산직 작업자와 인체공학적 조립 동선 개선 및 전동 토크렌치 체결 인터록 회의',
        '15:30 - 3D CATIA/Delmia 디지털 트윈 시뮬레이션으로 차기 차종 로봇 티칭 간섭 궤적 사전 검증',
        '17:00 - 공정 FMEA(고장형태영향분석) 업데이트 및 금일 설비보전 개조 결과 보고서 작성',
      ],
      keyResponsibilities: [
        '신차 양산 램프업(Ramp-up) 시 조립성 검토 및 라인 밸런싱(Line Balancing) 95% 이상 달성',
        '스마트팩토리 무인 AGV/AMR 연계 의장 모듈 자동 공급 체계 및 비전 검사 시스템 도입',
        '차체 스폿용접/레이저 브레이징 품질 불량 원인 분석(5-Why) 및 용접 건(Welding Gun) 가압 파라미터 표준화',
        '현장 생산성 저해 요소(Bottle-neck) 분석 및 사이클타임 10% 단축 개선 과제 수행',
      ],
      futureGrowth:
        '국내 공장 신차 셋업 노하우를 바탕으로 북미 HMGMA(조지아 메타플랜트) 및 유럽 공장 해외 주재원 및 스마트팩토리 총괄 엔지니어로 성장',
    },
    competencies: [
      {
        name: '4대 역학 및 기계/도면 해독 능력',
        importance: '필수',
        description: '기계재료학, 열역학, 정역학 기반 부품 변형 해석 및 2D/3D 조립 공차 분석 역량',
        evaluationCriteria: '기하공차(GD&T) 이해도 및 부품 간섭 분석 능력',
        recommendedSkills: ['CATIA', 'SolidWorks', 'GD&T', '기하공차 해독'],
      },
      {
        name: '생산 라인 문제해결(Root Cause Analysis)',
        importance: '매우중요',
        description: '돌발 설비 정지 및 조립 불량 발생 시 계측 장비와 5-Why 기법을 통한 근본 원인 도출',
        evaluationCriteria: '원인 규명 논리성과 현장 적용 가능한 대책 수립 능력',
        recommendedSkills: ['공정 FMEA', '5-Why', 'QC 7가지 도구', 'Minitab'],
      },
      {
        name: '현장 협업 및 다기능 소통',
        importance: '매우중요',
        description: '연구소 설계팀, 품질관리팀, 현장 생산직 기술사원과의 이견 조율 및 설득력',
        evaluationCriteria: '상대방의 입장을 고려한 현실적 공법 제안과 경청 태도',
        recommendedSkills: ['공정 표준서 작성', '커뮤니케이션', '현장 안전 마인드'],
      },
    ],
    requirements: {
      mandatory: [
        '국내외 정규 4년제 대학 기계, 전기전자, 산업공학 등 이공계열 기졸업자 또는 2027년 2월 졸업예정자',
        '공인어학성적 보유자 (SPA 110점 이상, OPIc IM2 이상 또는 토익스피킹 120점 이상)',
        '남성의 경우 병역필 또는 면제자, 해외여행에 결격사유가 없는 자',
        '울산공장 현장 근무 가능자',
      ],
      preferred: [
        '자동차 제조 관련 전공 프로젝트(캡스톤 디자인, 자작차 학회 FSAE/KSAE 참가) 유경험자',
        'CATIA 또는 3D CAD 모델링 공학 소프트웨어 활용 우수자',
        '공정 능력 평가(Cpk, SPC) 및 식스시그마 프로젝트 이수자',
      ],
      preferredCerts: ['일반기계기사', '기계설계기사', '산업안전기사', '품질경영기사'],
      preferredTools: ['CATIA V5', 'AutoCAD', 'Delmia', 'Minitab', 'Excel VBA'],
      minLanguageScore: 'OPIc IM2 또는 토스 120점 이상',
    },
    coverLetterPrompts: [
      {
        id: 'hmc-q1',
        questionNumber: 1,
        question:
          '현대자동차 생산기술 직무에 지원하게 된 동기와, 해당 직무를 통해 이루고 싶은 엔지니어로서의 목표를 서술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '완성차 제조 현장 및 생산기술 역할에 대한 명확한 이해도와 회사에 대한 진정성 평가',
        keyFocus: [
          '완성차 양산 현장에서 생산기술이 갖는 중요성(설계와 제조의 가교)',
          '신차 품질 안정화 및 생산성 향상에 기여하고 싶은 구체적 공정(차체 or 의장)',
          '글로벌 완성차 경쟁 속 스마트 제조 엔지니어로서의 장기 비전',
        ],
        recommendedKeywords: [
          '양산 램프업(Ramp-up)',
          '설계와 현장의 가교',
          '사이클타임(T/T)',
          '조립성(Design for Assembly)',
          'Cpk 공정능력',
          '스마트팩토리',
        ],
        suggestedTopics: [
          '기계공학/산업공학 전공 중 제조공학 과목에서 공정 최적화에 매료된 계기',
          '자작차(KSAE) 제작 시 프레임 용접 왜곡이나 조립 간섭을 잡았던 실무 경험',
          '스마트 제조 공장 견학 또는 인턴십에서 로봇 자동화 라인의 정밀도에 매료된 경험',
        ],
        starFrameworkGuide: {
          situation: '완성차 산업이 전동화·SDV로 전환되며 생산 유연성과 공정 정밀도가 핵심 경쟁력이 된 배경',
          task: '단순 조립을 넘어 무결점 품질을 보장하는 생산기술 엔지니어로서의 역할 정의',
          action: '학부 시절 공차 분석, 기계공작법, CAD 프로젝트를 통해 제조 실무 감각을 배양한 과정',
          result: '현대자동차 울산공장에서 양산 조기 안정화 및 원가 경쟁력 확보에 기여할 준비 완료',
          learning: '연구개발의 혁신을 고객에게 오차 없이 전달하는 마지막 보루가 생산기술임을 체득',
        },
        sampleDraftOutline:
          '1. [도입] 설계 도면을 완벽한 양산차로 실체화하는 생산기술의 매력\n2. [근거] 캡스톤/공학 프로젝트에서 도면 공차 및 공정 간섭을 해결하며 체득한 제조 철학\n3. [포부] 현대차 차체/의장 라인의 자동화율 98% 달성 및 램프업 기간 20% 단축 기여',
        clicheToAvoid:
          '"어렸을 때부터 아반떼와 쏘나타를 타고 자라며 자동차를 사랑하게 되어 지원했습니다" 같은 감성적 접근은 지양하고, 엔지니어링 관점(공정 최적화, 수율 개선, 설비 가동률)으로 시작하세요.',
      },
      {
        id: 'hmc-q2',
        questionNumber: 2,
        question:
          '본인의 전공 지식 및 프로젝트 경험 중, 생산 현장의 문제 해결(공정 개선, 원가 절감, 품질 향상 등)에 가장 효과적으로 기여할 수 있는 핵심 역량을 구체적 근거와 함께 제시해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '이공계 전공 기초(역학, 제어, 데이터 분석)를 실제 엔지니어링 문제에 적용해본 실행력 검증',
        keyFocus: [
          '정량적 문제 인식 (초기 수치/불량률/오차율 명시)',
          '원인 분석 단계에서의 공학적 접근 (5-Why, 공차 누적 분석, 구조해석 등)',
          '개선 조치 및 정량적 성과 (오차 X% 감소, 시간 Y분 단축 등)',
        ],
        recommendedKeywords: [
          'GD&T(기하공차)',
          '5-Why 근본원인',
          '공차 누적 해석',
          'FMEA',
          '시제품 제작',
          '정량적 개선 지표',
        ],
        suggestedTopics: [
          '캡스톤 디자인에서 로봇 암 또는 이송 기구의 밸런싱 불균형을 동역학/구조해석으로 해결한 경험',
          '자작차 파워트레인 장착 브래킷의 진동 피로 파손을 용접 비드 형상 및 두께 변경으로 개선한 사례',
          '랩실 또는 공모전에서 3D 모델링 간섭 문제를 사전에 가상 시뮬레이션으로 차단한 경험',
        ],
        starFrameworkGuide: {
          situation: '프로젝트 진행 중 조립 오차로 인해 발생한 작동 불량 또는 파손 문제 발생 상황',
          task: '기한 내에 구조적 설계를 변경하고 조립 정밀도를 확보해야 했던 도전적 과제',
          action: '기계요소설계 원리를 적용해 하중 집중 부위를 재설계하고 가공 공차를 재정의함',
          result: '시제품 조립 성공, 변형량 40% 감소 및 정격 부하 테스트 통과',
          learning: '현장 품질은 세밀한 공차 관리와 사전 검증(FMEA)에서 비롯된다는 사실을 확립',
        },
        sampleDraftOutline:
          '1. [핵심 역량 요약] "구조적 원인 규명과 기하공차 기반의 정밀 조립성 설계 역량"\n2. [상황/과제] 학부 캡스톤 프로젝트에서 발생한 부품 간섭 및 조립 단차 문제\n3. [공학적 조치] 3D CAD 간섭 체크 및 하중 집중 부위 보강 리브 설계\n4. [결과/성과] 불량률 0% 달성 및 생산성 25% 향상\n5. [현장 적용] 현대차 신차 시험 조립 라인의 단차 및 단속 불량 조기 근절에 기여',
        clicheToAvoid:
          '"열심히 밤을 새워 팀원들과 노력했더니 문제가 해결되었습니다" 같은 단순 노력형 서술 대신, 어떤 계산/툴/이론을 써서 원인을 짚었는지 공학적 매커니즘을 밝히세요.',
      },
      {
        id: 'hmc-q3',
        questionNumber: 3,
        question:
          '다양한 이해관계자(팀원, 작업자, 타 부서 등)와 협업하면서 의견 차이를 극복하고 시너지를 창출했던 경험을 기술해 주십시오. (800자 이내)',
        charLimit: '800자',
        purpose: '생산기술 특유의 현장 생산직 사원 및 연구소 설계자 간의 조율 능력(소통/협업/현장 친화력) 평가',
        keyFocus: [
          '의견 대립의 본질 파악 (안전, 작업 편의성 vs 설계 규격 간의 충돌)',
          '감정이 아닌 데이터와 공학적 대안을 통한 설득',
          '상대방의 불편함을 해소하며 얻어낸 상호 윈-윈(Win-Win) 결과',
        ],
        recommendedKeywords: [
          '데이터 기반 설득',
          '현장 작업성(Ergonomics)',
          '공정 피드백',
          '원칙과 유연성',
          '상생 협력',
        ],
        suggestedTopics: [
          '학부 팀 프로젝트에서 제작 효율을 중시하는 팀원과 안전/품질 규격을 중시하는 팀원 간의 조율',
          '공장 실습/인턴 중 현장 작업자의 피로도를 줄이기 위한 지그(Jig) 개선 제안 및 피드백 수렴',
          '동아리 활동에서 부품 가공 외주업체와의 납격/단가/품질 스펙 협의 과정',
        ],
        starFrameworkGuide: {
          situation: '설계 변경안 적용 시 현장 작업자의 조립성 불편 호소로 갈등이 발생한 상황',
          task: '설계 스펙을 훼손하지 않으면서도 작업자의 안전성과 작업 속도를 보장해야 함',
          action: '작업자의 손목 꺾임 각도와 동선을 직접 측정하고 지그 가이드 챔퍼 각도를 15도 완만하게 수정',
          result: '작업자 만족도 향상 및 조립 소요시간 18% 단축, 무결점 조립 달성',
          learning: '진정한 생산기술은 도면 너머 현장 작업자의 손끝을 이해하는 데서 완성됨을 절감',
        },
        sampleDraftOutline:
          '1. [도입] 현장 공감대 형성을 통한 기술의 실효성 극대화\n2. [갈등 상황] 설계 사양 준수와 작업 편의성 사이의 충돌\n3. [해결 과정] 현장 동선 분석 데이터와 수정 지그 제작을 통한 대안 제시\n4. [배운 점] 상호 존중과 데이터 기반의 소통이 가져오는 생산성 시너지',
        clicheToAvoid:
          '"술자리를 가지며 허심탄회하게 대화하여 풀었습니다"는 공학적 역량 평가에서 마이너스입니다. 작업 데이터, 체크시트, 샘플 테스트 등 객관적 실증으로 푼 사례를 드세요.',
      },
    ],
    tags: ['현대차', '완성차', '생산기술', '차체의장', '울산공장', 'CATIA', '초봉7000만급'],
    featuredImage: '/src/assets/images/auto_factory_robotics_1793606426799.jpg',
    applyUrl: 'https://talent.hyundai.com',
  },
  {
    id: 'kia-smart-plant-2026',
    company: '기아',
    companyTier: '완성차 OEM',
    companyLogoText: 'KIA',
    companyBgColor: 'bg-zinc-900',
    title: '[신입] AutoLand 화성 PBV 스마트 제조공정 및 설비기술 엔지니어',
    department: 'PBV비즈니스사업부 AutoLand화성 공정기술팀',
    careerType: '신입',
    experienceExcluded: true,
    targetDegrees: ['학사 졸업(예정)자', '석사 졸업(예정)자'],
    engineeringDomain: '스마트팩토리·설비보전',
    targetMajors: ['전기전자공학', '기계공학', '제어계측', '산업공학', '컴퓨터공학'],
    location: {
      region: '경기',
      city: '화성시',
      plantName: 'AutoLand 화성 (PBV 전용공장 EVO Plant)',
      detailAddress: '경기도 화성시 우정읍 기아자동차로 701 AutoLand 화성',
    },
    salary: {
      baseAmount: 5400,
      displaySalary: '5,400만원 + 성과급',
      bonusDetails: '경영성과급 포함 초봉 약 7,100만원 선, 수도권 통근버스 전역 운행',
    },
    workType: '정규직 (수습 3개월)',
    timeline: {
      startDate: '2026-11-03',
      endDate: '2026-11-17',
      docResultDate: '2026-12-01',
      interviewPhase1: '2026-12-10 ~ 2026-12-18',
      interviewPhase2: '2027-01-08 ~ 2027-01-14',
      finalJoinDate: '2027-02-15',
    },
    jobOverview: {
      summary:
        '기아 최초의 맞춤형 목적기반 모빌리티(PBV) 전용 공장인 화성 EVO Plant에서 컨베이어리스(Conveyorless) 무인 셀 생산 시스템 및 스마트 설비 제어 알고리즘을 구축합니다.',
      manufacturingProcess:
        '무인 AGV/AMR 기반 셀 생산 이동 → 로봇 자동 차체 체결 → 유연 가변 의장 셀 조립 → AI 비전 품질 검사 → 출고',
      dailyWorkflow: [
        '08:30 - 스마트 제조 모니터링 시스템(MES/SCADA) 설비 가동 알람 및 PLC 네트워크 상태 점검',
        '10:30 - 무인 이송 AMR 최적 경로 주행 데이터 분석 및 트래픽 병목 구역 라우팅 알고리즘 수정',
        '13:30 - 다품종 소량 PBV 바디 교체용 가변 지그(Flexible Jig) 자동 캘리브레이션 테스트',
        '16:00 - 스마트 비전 결함 검출 AI 모델의 오검출(False Positive) 이미지 라벨링 및 문턱값 튜닝',
        '17:30 - 야간 무인 운전 시나리오 점검 및 예지보전(Predictive Maintenance) 진동 센서 이상치 확인',
      ],
      keyResponsibilities: [
        '컨베이어 벨트가 없는 유연 셀(Cell) 생산 방식의 설비 인터페이스 제어 및 안정화',
        '생산 설비 PLC(미쓰비시/지멘스/LS) 래더 프로그램 수정 및 센서 인터락(Interlock) 설계',
        '설비 고장 정지시간(MTTR) 감소를 위한 모터/감속기 진동·전류 이상 징후 분석',
        '디지털 트윈을 활용한 차세대 PBV 모델 생산 라인 가상 셋업 및 사전 간섭 검증',
      ],
      futureGrowth:
        '기아 글로벌 스마트 제조 표준 전문가 및 미래 PBV 제조 혁신을 선도하는 플랜트 아키텍트로 육성',
    },
    competencies: [
      {
        name: 'PLC 및 시퀀스 자동 제어 역량',
        importance: '필수',
        description: '공장 자동화 기기(센서, 모터, 공압 실린더, 서보 모터)의 시퀀스 제어 및 래더 로직 설계 능력',
        evaluationCriteria: '신호 체계 인터록 이해도 및 비상 정지(E-Stop) 안전 규격 준수 역량',
        recommendedSkills: ['PLC(Mitsubishi/Siemens)', '시퀀스 제어', '센서 네트워크', '모터 제어'],
      },
      {
        name: '스마트팩토리 데이터 분석 및 통신 프로토콜',
        importance: '매우중요',
        description: '산업용 이더넷(Profinet, EtherCAT, Modbus) 및 OPC-UA 기반 설비 데이터 수집과 통계 분석',
        evaluationCriteria: '네트워크 트러블슈팅 및 가동률 데이터 시각화 역량',
        recommendedSkills: ['OPC-UA', 'EtherCAT', 'Python', 'MES', 'SCADA'],
      },
      {
        name: '설비 트러블슈팅 및 예지보전 센싱',
        importance: '매우중요',
        description: '기계적 진동, 발열, 누유 현상에 대한 물리적 메커니즘 규명 및 선제적 부품 교체 주기 수립',
        evaluationCriteria: '기계/전기 복합 설비의 결함 징후 분석 능력',
        recommendedSkills: ['진동 분석', '예지보전', '설비보전기능', 'MTBF/MTTR'],
      },
    ],
    requirements: {
      mandatory: [
        '4년제 대학 전기전자, 기계, 제어계측, 컴퓨터 등 이공학 전공 기졸업자 및 2027년 2월 졸업예정자',
        '기아 채용 기준 공인영어성적 충족자 (토익스피킹 120점 또는 OPIc IM2 이상)',
        '경기 화성 AutoLand 근무 가능자',
      ],
      preferred: [
        '공장 자동화 실습(PLC 제어, 로봇 티칭, 센서 인터페이스) 과목 이수자 또는 공모전 입상자',
        '스마트팩토리 아카데미, MES 연동 프로젝트 경험자',
        '전기기사, 메카트로닉스기사 또는 산업안전기사 자격증 소지자',
      ],
      preferredCerts: ['전기기사', '전기공사기사', '메카트로닉스기사', '일반기계기사'],
      preferredTools: ['GX Works', 'TIA Portal', 'MATLAB/Simulink', 'Python', 'AutoCAD Electrical'],
      minLanguageScore: 'OPIc IM2 또는 토스 120점 이상',
    },
    coverLetterPrompts: [
      {
        id: 'kia-q1',
        questionNumber: 1,
        question:
          '기아의 PBV 및 목적기반 모빌리티 혁신에 주목하게 된 계기와, 화성 EVO Plant의 스마트 설비 엔지니어로서 발휘하고 싶은 역량을 기술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '전통 완성차를 넘어 유연 다품종 생산으로 전환되는 기아 PBV 스마트팩토리에 대한 기술적 통찰 평가',
        keyFocus: [
          '전통적 컨베이어 생산 방식 대비 PBV 셀 생산의 차별성과 난제',
          '자동화 설비 제어 및 무인 물류(AMR) 인터페이스 구축에 본인이 적임자인 이유',
          '설비 가동률 100%를 향한 엔지니어링 집념',
        ],
        recommendedKeywords: [
          'PBV(목적기반차량)',
          '컨베이어리스(Conveyorless)',
          '유연 셀 생산',
          'PLC 인터페이스',
          '설비 예지보전',
          '가동률(OEE)',
        ],
        suggestedTopics: [
          '공장 자동화 실습 과목에서 복합 센서와 PLC를 결합해 무인 분 компании 공정을 구축해본 경험',
          '로봇 키트 또는 자율주행 AGV 주행 제어 알고리즘을 최적화하여 충돌을 회피한 프로젝트',
          '다품종 소량 가공 시 지그 교체 시간을 줄이기 위해 모듈러 설계를 시도했던 캡스톤 경험',
        ],
        starFrameworkGuide: {
          situation: '다품종 소량 생산을 요구하는 고객 맞춤형 PBV 시장의 성장과 설비 유연성의 대두',
          task: '기아 화성 EVO Plant에서 단일 라인 내 여러 바디를 즉시 생산할 수 있는 스마트 제어 설비 구현',
          action: '전기 제어 시퀀스 설계 및 통신 인터페이스(OPC-UA, EtherCAT) 지식을 축적한 구체적 학습 과정',
          result: '현장 설비의 인터록 불량 제로화 및 무인 운전 안정성 제고',
          learning: '하드웨어 설비와 소프트웨어 알고리즘의 결합이 곧 차세대 스마트팩토리의 본질임을 각인',
        },
        sampleDraftOutline:
          '1. [도입] 기아 EVO Plant가 제시하는 완성차 제조의 새로운 패러다임: 컨베이어의 붕괴와 지능형 셀의 부상\n2. [직무 역량] PLC 시퀀스 제어 및 센서 통신 프로젝트를 통해 기른 현장 트러블슈팅 능력\n3. [구체적 기여] PBV 차종 변경 시 설비 셋업 타임을 단축하는 가변 인터페이스 구축 포부',
        clicheToAvoid:
          '"어릴 적부터 기아 카니발을 좋아해서 기아에 꼭 가고 싶었습니다" 대신 "화성 EVO Plant의 유연 셀 공법과 설비 인터록 기술에 매료되어..."로 시작하세요.',
      },
      {
        id: 'kia-q2',
        questionNumber: 2,
        question:
          '전기·기계·제어 관련 프로젝트 중, 예상치 못한 시스템 오작동이나 설비 에러를 근본적으로 해결했던 사례를 STAR 기법에 맞추어 상세히 서술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '전기 노이즈, 통신 지연, 기계적 걸림 등 현장에서 빈번히 발생하는 돌발 이슈에 대한 논리적 디버깅 역량',
        keyFocus: [
          '에러 발생 징후 및 원인 추적의 정밀성 (단순 재부팅이 아닌 오실로스코프, 로그 분석 등 활용)',
          '재발 방지를 위한 이중 안전(Fail-Safe) 또는 회로/코드 개선',
          '작업 안전 및 설비 내구성 확보 결과',
        ],
        recommendedKeywords: [
          '페일세이프(Fail-Safe)',
          '노이즈 필터링',
          '인터록(Interlock)',
          '오실로스코프 신호 분석',
          'MTBF 향상',
          '디버깅 로직',
        ],
        suggestedTopics: [
          'PLC 및 모터 구동 시 인버터 고주파 노이즈로 인한 센서 오작동을 차폐선 및 접지 개선으로 해결한 경험',
          '로봇 매니퓰레이터 제어 중 엔코더 오차 누적으로 인한 위치 이탈을 칼만 필터 및 원점 센서 보정으로 잡은 사례',
          '스마트 팩토리 모형 구축 중 통신 패킷 유실로 인한 AGV 급정지 현상을 프로토콜 핸드셰이크 수정으로 해결한 경험',
        ],
        starFrameworkGuide: {
          situation: '모터 구동 및 자동 제어 테스트 중 불규칙적인 비상 정지 센서 트리거 발생',
          task: '단순 센서 불량으로 치부하지 않고 원인 파악 및 제어 신뢰성 100% 확보 필요',
          action: '신호선을 오실로스코프로 측정하여 모터 기동 시 발생하는 역기전력 서지 노이즈를 포착, 노이즈 필터 및 래더 인터록 코드 보완',
          result: '24시간 연속 가동 테스트에서 단 1회의 오작동 없이 합격, 신뢰성 99.9% 검증',
          learning: '설비 트러블의 8할은 보이지 않는 신호와 접지 환경에 있음을 배우고 철저한 검증 습관 체득',
        },
        sampleDraftOutline:
          '1. [상황 요약] 자동화 시스템 가동 중 원인 미상의 간헐적 정지 에러 발생\n2. [분석 단계] 오실로스코프 신호 계측을 통한 유도성 서지 노이즈 확인\n3. [해결 조치] 하드웨어 포토커플러 절연 및 소프트웨어 디바운스 필터링 래더 설계\n4. [결과] 에러율 0% 달성 및 기아 자동화 라인의 무정지 신뢰성에 기여할 수 있는 디버깅 역량 입증',
        clicheToAvoid:
          '"팀원들과 밤을 지새우며 코드를 하나하나 다시 쳐봤습니다" 대신 "신호선 노이즈 파형을 분석하여 서지 전압 12V 튐 현상을 확인하고..."와 같이 계측 및 공학 용어로 서술하세요.',
      },
    ],
    tags: ['기아', '완성차', '스마트팩토리', '화성', 'PBV', 'PLC', '설비기술', '전기전자'],
    featuredImage: '/src/assets/images/smart_plant_digital_twin_1793606427881.jpg',
    applyUrl: 'https://career.kia.com',
  },
  {
    id: 'mobis-ev-mfg-2026',
    company: '현대모비스',
    companyTier: '글로벌 1차 부품사',
    companyLogoText: 'MOBIS',
    companyBgColor: 'bg-red-800',
    title: '[신입] 전동화 파워트레인(BMS·인버터·구동모터) 양산 제조기술 및 공정설계',
    department: '전동화생산기술담당 파워트레인공정기술팀',
    careerType: '신입',
    experienceExcluded: true,
    targetDegrees: ['학사 졸업(예정)자', '석사 졸업(예정)자'],
    engineeringDomain: '전기전자·전장제어',
    targetMajors: ['전기공학', '전자공학', '제어계측', '기계공학', '신소재공학'],
    location: {
      region: '충청',
      city: '진천군 / 서산시',
      plantName: '진천 전동화공장 / 서산 주행시험장 인접 플랜트',
      detailAddress: '충청북도 진천군 초평면 초평로 80 현대모비스 진천공장',
    },
    salary: {
      baseAmount: 5350,
      displaySalary: '5,350만원 + 성과급',
      bonusDetails: '경영성과급 포함 초봉 약 6,900만원 수준, 사택/기숙사 제공',
    },
    workType: '정규직 (수습 3개월)',
    timeline: {
      startDate: '2026-11-05',
      endDate: '2026-11-19',
      docResultDate: '2026-12-04',
      interviewPhase1: '2026-12-14 ~ 2026-12-20',
      interviewPhase2: '2027-01-10 ~ 2027-01-16',
      finalJoinDate: '2027-02-20',
    },
    jobOverview: {
      summary:
        '현대차그룹 전기차(E-GMP 및 신규 eM 플랫폼)의 심장인 통합 전력제어기(ICU), 고전압 배터리 관리 시스템(BMS), 영구자석 구동모터(Hairpin Winding) 양산 라인의 제조 공법을 설계하고 불량을 0ppm 수준으로 통제합니다.',
      manufacturingProcess:
        '헤어핀 권선 코일 성형 → 스테이터 코어 삽입 및 레이저 용접 → 인버터 SiC 전력반도체 패키징 모듈 조립 → EOL(End-Of-Line) 고전압 절연/통전 시험',
      dailyWorkflow: [
        '08:30 - EOL 전동화 시험기기 일일 절연저항 및 하이팟(Hi-pot) 내전압 기준치 검교정',
        '10:00 - 헤어핀 구동모터 레이저 용접부 3D 광학 단면 검사 결과 및 용입 깊이 불량률 분석',
        '13:30 - SiC(탄화규소) 전력모듈 방열 서멀 그리스(Thermal Paste) 자동 도포 공정 토출량 Cpk 측정',
        '15:30 - CAN 통신 기반 BMS 펌웨어 플래싱 라인 소요 시간 단축을 위한 통신 버퍼 튜닝 회의',
        '17:00 - 양산 부품 협력사 공정 감사(Audit) 결과 피드백 및 IATF 16949 체크리스트 검토',
      ],
      keyResponsibilities: [
        '전기차 구동모터 헤어핀 레이저 용접 공정의 스패터(Spatter) 발생 억제 및 품질 수율 99.5% 달성',
        '인버터/BMS 라인 정전기 방전(ESD) 관리 및 전장 클린룸(Cleanroom Class 10,000) 환경 표준화',
        '양산 라인 EOL(End of Line) 전기적 특성 검사 시퀀스 단축 및 자동 합불 판정 알고리즘 개선',
        '신규 전동화 라인 증설 시 설비 배치(Layout) 설계 및 투자비 대비 공정 효율(CapEx) 분석',
      ],
      futureGrowth:
        '글로벌 톱티어 전동화 메카트로닉스 공정 총괄 책임자 및 북미·유럽 전동화 신공장 런칭 PM으로 도약',
    },
    competencies: [
      {
        name: '고전압/전력전자 회로 및 부품 이해',
        importance: '필수',
        description: '인버터, 컨버터, BMS 회로도 해독 및 고전압(800V 시스템) 안전 취급 규격 숙지',
        evaluationCriteria: '절연 내압, 노이즈 필터링, 스위칭 소자(IGBT/SiC MOSFET) 동작 원리 이해도',
        recommendedSkills: ['회로도 해독', '전력전자공학', '고전압 안전', '오실로스코프'],
      },
      {
        name: '정밀 제조 공법(레이저 용접/방열 접합)',
        importance: '매우중요',
        description: '구리 헤어핀 레이저 웰딩 공정 파라미터(출력, 빔 프로파일, 가스 쉴딩) 및 방열 구조 최적화',
        evaluationCriteria: '금속 재료 접합학 이해 및 용접 결함(기공, 크랙) 판독 역량',
        recommendedSkills: ['레이저 용접', '방열 설계', '용접 결함 분석', '공정 FMEA'],
      },
      {
        name: '전장 통신 및 EOL 기능 검사 기술',
        importance: '매우중요',
        description: 'CAN, CAN-FD, LIN 차량용 통신 프로토콜 이해 및 양산 EOL 계측기(DMM, LCR, 절연저항계) 인터페이스',
        evaluationCriteria: '전기적 기능 검사 시퀀스 로직 구성 능력',
        recommendedSkills: ['CAN 통신', 'Vector CANoe', 'LabVIEW', '계측기 인터페이스'],
      },
    ],
    requirements: {
      mandatory: [
        '전기/전자공학, 제어계측, 기계공학, 신소재공학 등 이공계열 학사 이상 졸업(예정)자',
        '어학 기준: OPIc IM2 이상 또는 토익스피킹 120점 이상 (유효기간 내)',
        '진천 또는 서산 공장 근무 가능자',
      ],
      preferred: [
        '전력전자학, 전기기기, 회로이론 우수 이수자 또는 학부 연구생 경험자',
        '전기차 배터리팩/모터/인버터 제작 프로젝트 참가 경험자',
        '전기기사, 전자기사 또는 품질경영기사 취득자',
      ],
      preferredCerts: ['전기기사', '전자기사', '품질경영기사', '산업안전기사'],
      preferredTools: ['PSpice/LTspice', 'MATLAB/Simulink', 'CANoe', 'AutoCAD', 'Minitab'],
      minLanguageScore: 'OPIc IM2 / 토스 120점 이상',
    },
    coverLetterPrompts: [
      {
        id: 'mobis-q1',
        questionNumber: 1,
        question:
          '현대모비스의 전동화 핵심 부품(BMS/인버터/구동모터) 제조기술 직무에 지원한 이유와, 본인이 이 직무에 가장 적합한 이공계 인재라고 생각하는 이유를 서술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '전동화 하드웨어 양산의 특수성(고전압 안전, 고신뢰성, EOL 시험)에 대한 이해와 전공 기반 역량 검증',
        keyFocus: [
          '전기차 핵심 파워트레인 제조기술의 기술적 난이도와 중요성에 대한 통찰',
          '전기전자/기계 융합 지식을 바탕으로 양산 라인에서 발휘할 수 있는 실무적 강점',
          '현대모비스가 글로벌 1차사로서 갖는 전동화 수직계열화 경쟁력 언급',
        ],
        recommendedKeywords: [
          '전동화 파워트레인',
          'SiC 전력반도체',
          '헤어핀 모터',
          'EOL 검사 신뢰성',
          'BMS 통신 프로토콜',
          '수율 극대화',
        ],
        suggestedTopics: [
          '전력전자 실습에서 인버터 스위칭 노이즈 및 발열을 쿨링 패드로 개선해본 경험',
          '모터 구동 회로를 직접 납땜하고 800V 절연 저항을 측정해본 랩실 프로젝트',
          '전기자동차 배터리 모듈 제작 시 안전 인터록 회로를 설계해 감전 사고를 원천 차단한 경험',
        ],
        starFrameworkGuide: {
          situation: '내연기관에서 전기차 800V 고전압 전동화 플랫폼으로 급변하는 글로벌 자동차 시장 상황',
          task: '인버터와 구동모터의 초정밀 양산 품질을 보장할 수 있는 제조기술 엔지니어로서의 포지셔닝',
          action: '회로이론, 전기기기, 마이크로프로세서 지식을 바탕으로 하드웨어 제어 및 EOL 시험을 수행한 과정',
          result: '고전압 부품의 동작 특성을 오차 없이 파악하고 양산 결함을 사전에 필터링할 수 있는 역량 구비',
          learning: '전동화 부품의 1ppm 불량은 곧 탑승자의 생명과 직결되므로 타협 없는 품질 기준이 필수임을 인식',
        },
        sampleDraftOutline:
          '1. [도입] 모빌리티 전동화 전환의 심장, 현대모비스 파워트레인 제조기술에 대한 열정\n2. [전공 강점] 회로 해석 능력과 고전압 모터 특성 실험을 통해 다진 실무 기초 체력\n3. [구체적 기여] 헤어핀 레이저 용접 및 인버터 방열 공정 최적화로 초기 양산 수율 99.8% 달성 기여',
        clicheToAvoid:
          '"친환경 녹색 지구를 만들기 위해 전기차에 지원했습니다" 식의 당위론적 환경보호 구호 대신, 구동모터와 인버터 공정의 실제 기술적 이슈(레이저 용접성, 방열 그리스 도포, ESD 방지)를 다루세요.',
      },
      {
        id: 'mobis-q2',
        questionNumber: 2,
        question:
          '대학 재학 중 가장 몰입하여 공학적 성과를 도출했던 전공 과제 또는 캡스톤 프로젝트 경험을 기술하고, 그 과정에서 겪은 기술적 난제와 해결 방안을 기술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '복합 공학적 문제(전기-기계 복합, 발열, 통신 딜레이)를 체계적인 실험과 해석으로 극복한 사례 검증',
        keyFocus: [
          '프로젝트 목표와 기술적 스펙(전압, 전류, 토크, 통신 주기 등)의 명확한 기술',
          '실패 또는 병목 지점에서 원인을 분리해낸 가설 검증 과정',
          '공학적 툴(PSpice, MATLAB, 오실로스코프 등)의 효과적 활용',
        ],
        recommendedKeywords: [
          '가설 검증',
          'PSpice 시뮬레이션',
          '열화 현상 방지',
          '오차율 감소',
          '벤치마킹',
          '데이터 정량화',
        ],
        suggestedTopics: [
          'BMS 통신 시 캔 버스 로드율 과다로 인한 지연을 메시지 ID 필터링 및 전송 주기 최적화로 해결한 경험',
          '모터 구동 드라이버 제작 중 FET 발열로 인한 셧다운 현상을 방열판 형상 변경과 게이트 저항 튜닝으로 극복한 사례',
          'DC-DC 컨버터 효율 개선을 위해 인덕터 코어 손실을 계산하고 스위칭 주파수를 재설계한 경험',
        ],
        starFrameworkGuide: {
          situation: '프로젝트 수행 중 부하 인가 시 전압 강하 또는 특정 RPM 대역에서의 이상 진동 발생',
          task: '제작 마감 기한 내에 규격 출력과 신뢰성 기준을 동시에 충족해야 하는 상황',
          action: '문제를 회로단, 기구단으로 이원화하여 전압 리플과 축 정렬 오차를 각각 계측기로 정밀 분석',
          result: '전력 변환 효율 92% 달성 및 발열 15도 저감, 학과 우수 프로젝트 선정',
          learning: '원인 모를 종합 에러일수록 단계를 나누어 변수를 통제하는 공학적 분석 기법의 위력을 체득',
        },
        sampleDraftOutline:
          '1. [프로젝트 목표] 고효율 BLDC 모터 구동 드라이버 설계 및 신뢰성 검증\n2. [기술적 난제] 고부하 영역에서 MOSFET 소자 과열 및 스위칭 노이즈로 인한 MCU 리셋\n3. [해결 프로세스] 게이트 드라이버 회로 튜닝 및 스너버 회로 추가, 방열 설계 개선\n4. [결과 및 모비스 기여] 안정적 구동 확인 및 현대모비스 양산 인버터 라인의 노이즈 마진 확보에 기여',
        clicheToAvoid:
          '"팀원들과 역할을 나누어 최선을 다했습니다"는 프로젝트의 공학적 깊이를 보여주지 못합니다. 소자의 스펙, 회로 변경 내역, 계측 결과 수치를 전면에 내세우세요.',
      },
    ],
    tags: ['현대모비스', '전동화', '파워트레인', 'BMS', '인버터', '구동모터', '진천공장', '초봉6900만급'],
    featuredImage: '/src/assets/images/ev_battery_engineering_1793606428277.jpg',
    applyUrl: 'https://mobis.recruiter.co.kr',
  },
  {
    id: 'hlmando-quality-2026',
    company: 'HL만도',
    companyTier: '글로벌 1차 부품사',
    companyLogoText: 'HL MANDO',
    companyBgColor: 'bg-emerald-900',
    title: '[신입] 스마트 새시(Brake/Steering) 품질보증 및 신뢰성 평가 엔지니어',
    department: '품질경영실 새시품질보증팀',
    careerType: '신입',
    experienceExcluded: true,
    targetDegrees: ['학사 졸업(예정)자', '석사 졸업(예정)자'],
    engineeringDomain: '품질관리·보증',
    targetMajors: ['기계공학', '산업공학', '전기전자공학', '재료공학'],
    location: {
      region: '경기',
      city: '평택시',
      plantName: 'HL만도 평택 브레이크/스티어링 공장',
      detailAddress: '경기도 평택시 포승읍 포승공단순환로 21 HL만도 평택공장',
    },
    salary: {
      baseAmount: 5100,
      displaySalary: '5,100만원 + 인센티브',
      bonusDetails: '경영성과급 포함 초봉 약 6,600만원 수준, 기숙사 및 통근버스 제공',
    },
    workType: '정규직 (수습 3개월)',
    timeline: {
      startDate: '2026-11-02',
      endDate: '2026-11-16',
      docResultDate: '2026-11-30',
      interviewPhase1: '2026-12-10 ~ 2026-12-16',
      interviewPhase2: '2027-01-07 ~ 2027-01-12',
      finalJoinDate: '2027-02-01',
    },
    jobOverview: {
      summary:
        '자율주행 3단계 및 전기차의 핵심 안전 부품인 통합형 전자 브레이크(IDB)와 전자식 조향장치(EPS)의 부품 입고부터 양산 출하까지 IATF 16949 기준 무결점 품질을 책임지는 품질보증 엔지니어입니다.',
      manufacturingProcess:
        '정밀 알루미늄 가공 캘리퍼/하우징 → 클린룸 유압 모터/밸브 조립 → 기밀성(Leak) 및 유압 특성 전수 검사 → 실차 신뢰성 진동/염수분무 시험',
      dailyWorkflow: [
        '08:30 - 당일 생산 라인 초품 검사(First Article Inspection) 및 누유 검사기 압력 강하 로그 검토',
        '10:30 - 협력사에서 납품된 전자식 액추에이터 입고 수입검사 샘플링 및 치수 3차원 측정(CMM)',
        '13:30 - 북미 수출 차종 필드 클레임 데이터 분석 및 고품 분석실에서 파손 부품 파단면 주사전자현미경(SEM) 분석',
        '15:30 - 생산기술팀 및 구매팀과 함께 협력업체 4M(Man, Machine, Material, Method) 변경점 심의 회의',
        '17:00 - 글로벌 완성차 고객사(GM, 현대차, 포드) 제출용 PPAP(양산부품승인절차) 문서 승인 작업',
      ],
      keyResponsibilities: [
        '통합 전자식 브레이크(IDB) 가공/조립 라인 불량률 10ppm 이하 유지 및 공정능력지수 Cpk 1.67 확보',
        '국제 자동차 품질 표준 IATF 16949 내부 심사 및 고객사 품질 감사 대응',
        '신뢰성 시험(고온/저온 환경챔버 사이클, 3축 복합 진동 시험, 염수 분무 내식성) 계획 수립 및 데이터 검증',
        '협력업체 품질 육성 및 공정 산포 축소를 위한 통계적 공정관리(SPC) 지도',
      ],
      futureGrowth:
        '글로벌 완성차 OEM(북미/유럽) 담당 품질 디렉터 및 글로벌 품질 감사원(Lead Auditor)으로 성장',
    },
    competencies: [
      {
        name: '통계적 공정관리(SPC) 및 품질 분석 툴',
        importance: '필수',
        description: 'Minitab 기반의 정규성 검정, 공정능력분석(Cp/Cpk), 관리도(Xbar-R) 작성 및 이상 징후 감지',
        evaluationCriteria: '공정 데이터에서 군내/군간 산포 원인을 찾아내는 통계적 분석 역량',
        recommendedSkills: ['Minitab', 'Cpk 분석', '관리도', 'Gage R&R', 'SPC'],
      },
      {
        name: '자동차 품질 시스템(IATF 16949 & 코어툴)',
        importance: '매우중요',
        description: 'APQP(사전제품품질기획), FMEA(고장영향분석), PPAP(양산승인), MSA(측정시스템분석) 절차 숙지',
        evaluationCriteria: '신차 개발 단계별 품질 게이트(Quality Gate) 이해도',
        recommendedSkills: ['IATF 16949', 'FMEA', 'PPAP', 'APQP', 'MSA'],
      },
      {
        name: '기계 재료 파손 분석 및 치수 정밀 검사',
        importance: '매우중요',
        description: '금속 피로 파손 메커니즘, 알루미늄 다이캐스팅 기공 결함 및 3차원 측정기(CMM) 도면 매칭',
        evaluationCriteria: '도면 치수 공차 만족 여부와 재료 결함 원인 추정 역량',
        recommendedSkills: ['3차원 측정(CMM)', '금속재료학', '기하공차', '파손 분석'],
      },
    ],
    requirements: {
      mandatory: [
        '기계공학, 산업공학, 신소재/금속공학, 전기전자공학 등 이공계열 4년제 학사 이상 졸업(예정)자',
        '공인 어학점수: OPIc IM1 이상 또는 토익스피킹 120점 이상',
        '경기 평택공장 근무 가능자',
      ],
      preferred: [
        '품질경영기사 또는 6-Sigma Green Belt/Black Belt 자격 보유자',
        'Minitab 활용 통계 분석 프로젝트 수행 경험자',
        '기계공작 실습 또는 3차원 측정 장비 경험자',
      ],
      preferredCerts: ['품질경영기사', '일반기계기사', '6-Sigma GB/BB', '산업안전기사'],
      preferredTools: ['Minitab', 'AutoCAD', '3차원 측정기(CMM) 소프트웨어', 'MS Excel 고급'],
      minLanguageScore: 'OPIc IM1 / 토스 120점 이상',
    },
    coverLetterPrompts: [
      {
        id: 'mando-q1',
        questionNumber: 1,
        question:
          'HL만도의 새시 부품(Brake/Steering) 품질 직무에 지원한 동기와, 본인이 생각하는 ‘자동차 부품 품질 관리의 본질’은 무엇인지 본인의 가치관을 담아 기술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '생명 안전과 직결되는 샤시 제동/조향 부품에 대한 품질 철학과 책임감, HL만도에 대한 지원 동기 평가',
        keyFocus: [
          '샤시 부품 결함이 도로 위 승객의 안전에 미치는 치명적 영향에 대한 경각심',
          '사후 검사가 아닌 "공정 내 품질 만들기(Built-in Quality)"의 중요성',
          '데이터 기반으로 산포를 줄여나가는 품질 엔지니어의 자세',
        ],
        recommendedKeywords: [
          '생명 안전 부품',
          '내재화 품질(Built-in Quality)',
          '공정 산포 최소화',
          'Cpk 1.67',
          'IATF 16949',
          '원점 회귀(Genchi Genbutsu)',
        ],
        suggestedTopics: [
          '실험 과목에서 오차 원인을 끝까지 추적해 측정 산포를 줄였던 경험',
          '품질경영기사 또는 6시그마를 공부하며 통계적 기법이 불량을 막는 메커니즘을 깨달은 계기',
          '기계 부품 제작 시 치수 불량 한 점이 전체 어셈블리 락업으로 이어진 실패 교훈',
        ],
        starFrameworkGuide: {
          situation: '자율주행 기술의 고도화로 브레이크와 스티어링의 무결점 신뢰성이 필수인 시대',
          task: '단순한 합격/불합격 판정을 넘어 불량이 발생할 수 없는 원천적 공정 관리 체계 구축',
          action: '산업공학/기계공학 전공을 통해 실험계획법(DOE)과 공정능력지수를 익히고 통계적 접근을 체화',
          result: '규격 이탈률을 사전에 경보하는 선제적 품질 보증 마인드 확립',
          learning: '품질 엔지니어의 서명 하나에 수만 명 운전자의 안전이 달려있다는 사명감 형성',
        },
        sampleDraftOutline:
          '1. [도입] 제동과 조향은 자동차에서 결코 타협할 수 없는 마지막 안전선이다\n2. [품질 철학] 사후 불량 선별이 아닌 공정 산포 억제를 통한 예방 품질(Proactive Quality)\n3. [역량 및 포부] HL만도 평택공장의 전장 새시 라인 Cpk 1.67 달성 및 글로벌 리콜 제로화 기여',
        clicheToAvoid:
          '"저는 꼼꼼하고 완벽주의 성격이라 품질 관리에 딱 맞습니다" 같은 성격 나열은 피하세요. 대신 "규격 상한선 3시그마 관리 기준을 수립하고 이상 변동을 모니터링했던 통계적 집념"으로 승부하세요.',
      },
      {
        id: 'mando-q2',
        questionNumber: 2,
        question:
          '통계적 분석 도구(Minitab, Excel 등)나 데이터 분석 기법을 활용하여 불량 원인을 규명하거나 공정/실험의 신뢰성을 개선했던 경험을 기술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '정량적 데이터를 다루는 분석력과 통계적 품질 기법의 실전 응용 능력 검증',
        keyFocus: [
          '데이터 수집 배경 및 초기 산포 현황 (표본 수, 결함률, 표준편차 등 명시)',
          '통계적 검정 방법 (가설 검정, ANOVA, 회귀분석, 관리도 등)',
          '인자(Factor) 제어 후 개선된 공정 지표(Cpk, 불량률 감소 등)',
        ],
        recommendedKeywords: [
          'Minitab 통계 분석',
          'Gage R&R 측정시스템',
          '분산분석(ANOVA)',
          'Cp/Cpk 지수',
          '관리도 이탈',
          '요인배치법(DOE)',
        ],
        suggestedTopics: [
          '학부 랩실 실험에서 측정자 간 편차(Gage R&R)가 30%를 초과하는 문제를 측정 지그 고정으로 9% 이하로 낮춘 경험',
          '가공 실습 시 표면 거칠기 불량의 원인을 Minitab 회귀분석으로 공구 이송 속도와 절삭유 온도의 상호작용임을 밝혀낸 사례',
          '공모전에서 부품 피로 수명 데이터를 와이블(Weibull) 분포로 해석하여 B10 수명을 보증한 경험',
        ],
        starFrameworkGuide: {
          situation: '부품 시제품 제작 후 테스트 결과 편차가 심해 기준 사양을 지속적으로 이탈하는 문제 직면',
          task: '단순 감에 의한 수정을 배제하고 통계적 기법으로 유의미한 영향 인자를 도출해야 함',
          action: 'Minitab을 활용해 다변량 분산분석(ANOVA)을 수행하고, 열처리 온도가 치수 수축률에 가장 큰 영향을 미침을 p-value < 0.05로 입증',
          result: '열처리 공정 윈도우를 재설정하여 불량률을 14.5%에서 0.8%로 급감시킴',
          learning: '데이터는 거짓말을 하지 않으며, 체계적인 통계 분석만이 근본적인 불량의 연결고리를 끊는 열쇠임을 확인',
        },
        sampleDraftOutline:
          '1. [상황 요약] 시제품 가공 치수 산포 과다로 인한 불량률 급증 상황\n2. [데이터 분석] Minitab을 활용한 공정능력분석 및 ANOVA 주효과도 분석\n3. [개선 대책] 핵심 관리 인자(온도, 압력) 파라미터 최적화 및 허용 공차 재정립\n4. [성과 및 적용] Cpk 0.84 → 1.52 개선 성과 및 HL만도 새시 공정 도입 포부',
        clicheToAvoid:
          '"엑셀로 정리해보니 온도가 문제인 것 같았습니다"처럼 단순 추정으로 쓰지 말고, 어떤 통계 지표와 검정을 사용했는지 전문 용어를 적재적소에 배치하세요.',
      },
    ],
    tags: ['HL만도', '새시', '브레이크', '스티어링', '품질관리', '품질보증', '평택공장', 'IATF16949'],
    featuredImage: '/src/assets/images/smart_plant_digital_twin_1793606427881.jpg',
    applyUrl: 'https://hlmando.recruiter.co.kr',
  },
  {
    id: 'lges-battery-mfg-2026',
    company: 'LG에너지솔루션',
    companyTier: '배터리·전장 전문기업',
    companyLogoText: 'LG EnSol',
    companyBgColor: 'bg-rose-900',
    title: '[신입/인턴] 차세대 원통형 46시리즈/파우치 EV 배터리 셀 제조공정 엔지니어',
    department: '자동차전지사업부 오창공정기술담당',
    careerType: '신입/인턴(채용전환형)',
    experienceExcluded: true,
    targetDegrees: ['학사 졸업(예정)자', '석사 졸업(예정)자'],
    engineeringDomain: '화학·신소재',
    targetMajors: ['화학공학', '신소재공학', '기계공학', '전기전자공학', '배터리공학'],
    location: {
      region: '충청',
      city: '청주시 오창읍',
      plantName: '오창 에너지플랜트',
      detailAddress: '충청북도 청주시 청원구 오창읍 과학산업로 391 LG에너지솔루션 오창공장',
    },
    salary: {
      baseAmount: 5300,
      displaySalary: '5,300만원 + 성과급',
      bonusDetails: '경영성과급(성과에 따라 최대 기본급의 300~500%) 포함 초봉 약 6,800만~7,500만원',
    },
    workType: '인턴(6주) 평가 후 정규직 전환 (전환율 90% 이상)',
    timeline: {
      startDate: '2026-11-06',
      endDate: '2026-11-20',
      docResultDate: '2026-12-05',
      interviewPhase1: '2026-12-15 ~ 2026-12-22',
      interviewPhase2: '2027-01-12 ~ 2027-01-18',
      finalJoinDate: '2027-02-23',
    },
    jobOverview: {
      summary:
        '테슬라 및 글로벌 완성차 탑재용 차세대 46-시리즈 원통형 배터리와 고에너지밀도 파우치 배터리의 전극(코팅/롤프레싱/슬리팅) 및 조립(와인딩/스태킹/용접) 공정 수율을 글로벌 최고 수준으로 끌어올립니다.',
      manufacturingProcess:
        '양·음극 슬러리 믹싱 → 정밀 슬롯다이 코팅 → 고압 롤프레싱 압연 → 슬리팅 → 전극 스태킹/와인딩 → 캔/파우치 탭 레이저 용접 → 전해액 주액 및 화성(Aging) 공정',
      dailyWorkflow: [
        '08:30 - 드라이룸(이슬점 -45℃ 이하) 환경 온습도 및 전극 두께 센서 인라인 데이터 점검',
        '10:30 - 슬롯다이 코팅기(Coater) 양면 로딩 레벨(Loading Level, g/m²) 산포 분석 및 펌프 압력 미세 조정',
        '13:30 - 롤프레싱 압연 공정 롤 간극(Roll Gap) 편차로 인한 전극 활물질 탈리 현상 원인 규명',
        '15:30 - 차세대 46시리즈 탭리스(Tabless) 고속 레이저 노칭/용접 비드 품질 검사 및 인라인 비전 데이터 확인',
        '17:30 - 글로벌 신규 배터리 플랜트(북미 합작공장) 양산 표준화를 위한 표준작업지도서(SOP) 영문 개정',
      ],
      keyResponsibilities: [
        '전극 코팅 건조 공정 윈도우 최적화로 슬러리 바인더 마이그레이션(Migration) 방지 및 결착력 확보',
        '고속 슬리팅 나이프 마모 모니터링 및 전극 버(Burr) 높이를 5㎛ 이하로 억제하여 내부 단락 원천 예방',
        '초당 10개 이상 셀을 생산하는 고속 탭리스 와인딩/레이저 웰딩 조립 라인 사이클타임 단축',
        '배터리 화성(Formation) 공정 가스 배출 챔버 탈기(Degassing) 시간 단축 및 초기 용량 선별 정확도 개선',
      ],
      futureGrowth:
        '북미 스텔란티스/혼다/현대차 합작 배터리 공장 현지 셋업 주재원 및 글로벌 최고 배터리 공정 엔지니어로 성장',
    },
    competencies: [
      {
        name: '전기화학 및 배터리 소재 특성 이해',
        importance: '필수',
        description: '리튬이온 배터리 4대 요소(양극, 음극, 전해액, 분리막)의 반응 메커니즘과 화학적 안정성 이해',
        evaluationCriteria: '충방전 효율, 고체전해질계면(SEI 피막), 열폭주 메커니즘 이해도',
        recommendedSkills: ['전기화학', '배터리공학', '고분자재료', '열역학'],
      },
      {
        name: '연속 롤투롤(Roll-to-Roll) 공정 엔지니어링',
        importance: '매우중요',
        description: '웹(Web) 이송 장력 제어, 슬롯다이 유체역학, 압연 롤러 압력 제어 및 코팅 두께 균일도 관리',
        evaluationCriteria: 'R2R 연속 공정 변수(속도, 장력, 건조 온도) 최적화 능력',
        recommendedSkills: ['Roll-to-Roll 공정', '유체역학', '코팅공학', '열전달'],
      },
      {
        name: '정밀 결함 분석 및 미세구조 평가',
        importance: '매우중요',
        description: '전극 단면 SEM 분석, 비접촉식 광학 두께 측정, 비전 검사기 데이터 기반 불량 유형 분류',
        evaluationCriteria: '전극 버(Burr), 핀홀, 크랙 결함 원인 추정 및 해결 역량',
        recommendedSkills: ['SEM/XRD 분석', '비전 검사', '공정 불량 분석', '수율 관리'],
      },
    ],
    requirements: {
      mandatory: [
        '화학공학, 신소재공학, 기계공학, 전기전자공학 등 배터리 관련 전공 학사 이상 졸업(예정)자',
        '2027년 1~2월 인턴십 수행 및 2027년 2월 이후 입사 가능자',
        '공인어학성적 보유자 (OPIc IM2 또는 토스 120점 이상)',
        '충북 청주(오창) 근무 가능자',
      ],
      preferred: [
        '배터리 관련 랩실 학부연구생 또는 전극 제작 실험 유경험자',
        '화공기사, 신소재기사, 일반기계기사 자격증 소지자',
        '영어 회화 우수자 (해외 합작공장 출장 및 주재원 파견 우대)',
      ],
      preferredCerts: ['화공기사', '신소재기사', '일반기계기사', '위험물산업기사'],
      preferredTools: ['COMSOL Multiphysics', 'AutoCAD', 'Minitab', 'Python', 'Origin'],
      minLanguageScore: 'OPIc IM2 또는 토스 120점 이상',
    },
    coverLetterPrompts: [
      {
        id: 'lges-q1',
        questionNumber: 1,
        question:
          'LG에너지솔루션의 배터리 제조공정 직무에 지원하게 된 계기와, 수많은 공정(전극/조립/화성) 중 본인이 특히 강점을 발휘할 수 있는 공정 단계를 전공 배경과 연계하여 기술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '배터리 셀 양산 공정에 대한 심도 깊은 이해도와 본인 전공(화학/재료/기계)의 적용 타당성 평가',
        keyFocus: [
          '원통형 46시리즈 또는 파우치 배터리 제조의 기술적 허들 인식',
          '전극(코팅/압연) 또는 조립(와인딩/노칭/용접) 중 구체적 관심 공정 타겟팅',
          '실제 양산 수율과 직결되는 화학-기계 복합 현상에 대한 학문적 접근',
        ],
        recommendedKeywords: [
          '롤투롤(R2R) 공정',
          '전극 슬롯다이 코팅',
          '바인더 마이그레이션',
          '탭리스(Tabless) 고속 조립',
          '드라이룸 환경 관리',
          '수율 램프업',
        ],
        suggestedTopics: [
          '화학공학 유체역학 과목에서 슬러리의 비뉴턴성 점도와 코팅 두께 모델링을 다뤄본 경험',
          '신소재 랩실에서 양극재 활물질과 도전재 슬러리를 분산시키며 침전 문제를 분산제 최적화로 해결한 연구',
          '기계공학 전공 중 전극 슬리팅 커터 날의 마모 속도를 유한요소해석으로 예측해본 캡스톤 디자인',
        ],
        starFrameworkGuide: {
          situation: 'EV 대중화를 위해 배터리 팩 원가의 핵심인 셀 제조 수율과 생산 속도 혁신이 시급한 시점',
          task: '오창 에너지플랜트에서 전극 코팅 또는 46시리즈 조립 공정의 불량을 사전에 억제하는 공정 엔지니어 역할',
          action: '유체역학, 고분자물성, 재료접합 원리를 학부 때 심도 있게 수강하고 랩실에서 슬러리 물성 실험을 수행한 과정',
          result: '미세 결함 발생 메커니즘을 화학·물리적 관점에서 규명할 수 있는 공정 최적화 역량 확보',
          learning: '배터리 공정은 화학적 조성과 기계적 정밀도가 1마이크로미터 단위로 교차하는 종합 예술임을 절감',
        },
        sampleDraftOutline:
          '1. [도입] 글로벌 전기차 시장을 선도하는 LG에너지솔루션의 심장, 오창 전극 공정에 대한 열망\n2. [전공 타겟팅] 화학공학 지식(유체역학 및 계면화학)을 바탕으로 슬롯다이 코팅 산포 개선에 최적화된 배경\n3. [구체적 기여] 건조 온도 프로파일 최적화를 통한 전극 크랙 제로화 및 4680 양산 라인 수율 98% 달성 기여',
        clicheToAvoid:
          '"2차전지가 미래 유망 산업이라 지원했습니다"는 모든 지원자가 쓰는 흔한 말입니다. 슬롯다이 코팅의 전단 응력, 롤프레싱 압연 밀도, 전극 버(Burr) 억제 등 공정 전문 용어로 깊이를 증명하세요.',
      },
      {
        id: 'lges-q2',
        questionNumber: 2,
        question:
          '실험실습 또는 프로젝트 수행 중, 기존의 표준 방식이나 매뉴얼에 머무르지 않고 새로운 공정 조건이나 아이디어를 도입하여 뚜렷한 개선을 이끌어낸 경험을 기술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '전례 없는 배터리 신공정을 글로벌 최초로 셋업해야 하는 배터리 엔지니어의 도전정신과 공학적 창의성 평가',
        keyFocus: [
          '기존 방식의 한계점과 발생한 병목 현상',
          '새로운 아이디어를 낸 논리적 과학적 근거 (문헌 조사, 유사 공정 벤치마킹 등)',
          '실험적 검증과 시행착오 극복, 최종 개선 성과',
        ],
        recommendedKeywords: [
          '공정 윈도우(Window)',
          '파라미터 최적화',
          '문헌 조사 및 가설',
          '수율 20% 향상',
          '공정 단순화',
          '재현성 검증',
        ],
        suggestedTopics: [
          '화학 합성 실험에서 교반 속도와 반응 온도의 단계별 제어를 통해 결정화 시간을 30% 단축한 경험',
          '재료 표면 코팅 시 기존 침적 방식 대신 스프레이 분사 방식을 고안하여 코팅 균일도를 2배 향상시킨 사례',
          '측정 시험 중 샘플 준비 시간 과다 문제를 전용 몰드 지그를 3D 프린터로 제작하여 해결한 경험',
        ],
        starFrameworkGuide: {
          situation: '연구실 합성 또는 가공 실험 중 수율이 60%대에 머물고 시편의 재현성이 떨어지는 난관 발생',
          task: '선배들의 기존 매뉴얼에 얽매이지 않고 공정 변수를 전면 재검토하여 85% 이상으로 끌어올려야 함',
          action: '해외 논문 15편을 분석하여 용매 건조 속도와 기공 형성률 간의 상관관계를 도출, 2단계 승온 프로파일 적용',
          result: '표면 기공 결함 전면 해소, 수율 88% 달성 및 연구실 표준 프로토콜로 채택',
          learning: '고정관념을 깨는 공정 혁신은 철저한 기초 과학 이론과 치밀한 데이터 검증에서 나온다는 깨달음',
        },
        sampleDraftOutline:
          '1. [문제 상황] 기존 실험 매뉴얼의 표면 결함 발생 및 재현성 저하 문제\n2. [새로운 발상] 승온 속도와 용매 휘발 제어의 상관관계 가설 수립 및 단계별 가열 조건 도입\n3. [실험 검증] 3차례의 반복 실험을 통한 최적 공정 윈도우 확립\n4. [결과 및 기여] 불량률 80% 저감 성과 및 LG에너지솔루션 오창 공정 셋업에 발휘할 혁신 역량',
        clicheToAvoid:
          '"팀원들과 머리를 맞대고 고민하다가 번뜩이는 아이디어가 떠올랐습니다"처럼 쓰지 마세요. 어떤 문헌이나 열역학/물리화학 법칙을 기반으로 아이디어를 도출했는지 인과관계를 밝히세요.',
      },
    ],
    tags: ['LG에너지솔루션', '배터리', '2차전지', '원통형', '오창', '화학공학', '신소재', '초봉7000만급'],
    featuredImage: '/src/assets/images/ev_battery_engineering_1793606428277.jpg',
    applyUrl: 'https://careers.lg.com',
  },
  {
    id: 'hyundai-wia-plant-2026',
    company: '현대위아',
    companyTier: '글로벌 1차 부품사',
    companyLogoText: 'HYUNDAI WIA',
    companyBgColor: 'bg-cyan-950',
    title: '[신입] 친환경 열관리 시스템 및 e-LSD 조립 생산관리·생산기술 엔지니어',
    department: '창원1공장 모빌리티부품생산실',
    careerType: '신입',
    experienceExcluded: true,
    targetDegrees: ['학사 졸업(예정)자'],
    engineeringDomain: '생산관리·SCM',
    targetMajors: ['산업공학', '기계공학', '기계설계공학', '경영공학'],
    location: {
      region: '영남',
      city: '창원시 성산구',
      plantName: '현대위아 창원 1공장',
      detailAddress: '경상남도 창원시 성산구 정동로 153 현대위아 창원공장',
    },
    salary: {
      baseAmount: 5200,
      displaySalary: '5,200만원 + 성과급',
      bonusDetails: '경영성과급 포함 초봉 약 6,700만원 수준, 사택 및 통근버스 완비',
    },
    workType: '정규직 (수습 3개월)',
    timeline: {
      startDate: '2026-11-04',
      endDate: '2026-11-18',
      docResultDate: '2026-12-02',
      interviewPhase1: '2026-12-12 ~ 2026-12-19',
      interviewPhase2: '2027-01-09 ~ 2027-01-15',
      finalJoinDate: '2027-02-10',
    },
    jobOverview: {
      summary:
        '현대위아 창원공장에서 전기차 통합 열관리 모듈(냉각수 분배 및 칠러)과 고성능 구동 부품인 전자식 차동제한장치(e-LSD)의 일일 생산계획 수립, 협력사 자재 적기 공급(JIT), 및 조립 라인 병목(Bottle-neck)을 해소합니다.',
      manufacturingProcess:
        '단조 샤프트/하우징 정밀 CNC 가공 → 열처리 침탄 → e-LSD 유압 클러치 조립 → 기밀성 헬륨 리크 검사 → 포장 출하',
      dailyWorkflow: [
        '08:00 - 완성차 OEM(현대차 울산/기아 화성) 당일 발주서(JIT 서열 오더) 취합 및 생산 순번 편성',
        '10:00 - e-LSD 가공 라인 기계 가동률(OEE) 및 라인 유휴시간(Downtime) 데이터 수합 및 원인 분석',
        '13:30 - 열관리 모듈 수입 자재 입고 일정 추적 및 협력업체 결품 위험도 사전 스크리닝',
        '15:30 - 현장 조립 라인 작업자별 공수(Man-Hour) 밸런싱 및 라인 피치 타임(Pitch Time) 재조정',
        '17:00 - 월간 마감 생산 실적 대비 제조원가 편차 분석 및 익월 생산 마스터 스케줄(MPS) 수립',
      ],
      keyResponsibilities: [
        '완성차 서열 납품 100% 준수율 달성을 위한 Just-In-Time(JIT) 생산 스케줄링 최적화',
        '공정 간 재공품(WIP) 재고 15% 감축을 위한 린(Lean) 제조 및 칸반(Kanban) 시스템 운영',
        '라인 증설 및 신규 열관리 품목 도입에 따른 공정 레이아웃 재설계 및 공수 절감',
        '원자재 조달 리드타임 관리 및 협력사 생산 능력(Capa) 실사',
      ],
      futureGrowth:
        '글로벌 자동차 SCM 총괄 전문가 및 대형 플랜트 공장장(Plant General Manager)으로 육성',
    },
    competencies: [
      {
        name: '생산계획 및 재고관리(MPS/MRP/SCM)',
        importance: '필수',
        description: '기준생산계획(MPS), 자재소요계획(MRP), 안전재고 설정 및 공급망 리드타임 관리 지식',
        evaluationCriteria: '납기 준수와 재고 비용 절감 간의 트레이드오프 조율 역량',
        recommendedSkills: ['생산계획', 'MRP/ERP', '안전재고 계산', '린 제조(Lean)'],
      },
      {
        name: '공정 분석 및 라인 밸런싱(Line Balancing)',
        importance: '매우중요',
        description: '공정 흐름도(Flow Chart), 작업 사이클타임 측정, 병목 해소를 통한 라인 밸런스 효율(E) 향상',
        evaluationCriteria: '현장 낭비 요인(7대 낭비) 식별 및 유휴시간 제거 능력',
        recommendedSkills: ['라인 밸런싱', '작업연구(Time Study)', 'Capa 산정', 'Excel VBA'],
      },
      {
        name: '데이터 기반 원가 분석 및 생산성 지표 관리',
        importance: '우대',
        description: '설비종합효율(OEE), 직행률, 시간당 생산량(UPH), 표준공수 대비 실적공수 분석',
        evaluationCriteria: '정량적 생산성 KPI 개선 논리력',
        recommendedSkills: ['OEE 분석', 'UPH 향상', 'ERP(SAP)', '제조원가 계산'],
      },
    ],
    requirements: {
      mandatory: [
        '산업공학, 기계공학, 경영공학 등 관련 학사 이상 졸업(예정)자',
        '어학 기준: OPIc IL 이상 또는 토익스피킹 110점 이상',
        '경남 창원 근무 가능자',
      ],
      preferred: [
        'CPIM(국제공인생산재고관리사) 또는 물류관리사, 품질경영기사 보유자',
        '제조업 생산관리 인턴 경험 또는 ERP 실습 경험자',
        'Excel 고급(VBA, 매크로) 또는 파이썬 데이터 핸들링 우수자',
      ],
      preferredCerts: ['CPIM', '품질경영기사', '물류관리사', '산업안전기사'],
      preferredTools: ['SAP ERP', 'Excel VBA', 'Minitab', 'Simio/Arena(공정시뮬레이션)'],
      minLanguageScore: 'OPIc IL / 토스 110점 이상',
    },
    coverLetterPrompts: [
      {
        id: 'wia-q1',
        questionNumber: 1,
        question:
          '현대위아의 생산관리/생산기술 직무에 지원한 이유와, 창원공장에서 생산하는 모빌리티 열관리/구동 부품의 생산성 혁신을 위해 본인이 기여할 수 있는 차별화된 역량을 기술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '부품사 생산관리의 핵심인 납기준수·원가절감·재고최적화에 대한 전공적 통찰과 실행력 검증',
        keyFocus: [
          '완성차와의 직결 공급(JIT) 체계에서 결품 방지의 막중한 책임감',
          '공정 밸런싱, 표준공수 관리, OEE 지표에 대한 실무적 적용 능력',
          '창원공장 현장 조직과의 유기적 소통을 통한 생산 스케줄 안정화',
        ],
        recommendedKeywords: [
          'JIT(Just In Time)',
          '라인 밸런싱 효율',
          '설비종합효율(OEE)',
          '재공품(WIP) 감축',
          '표준공수',
          '창원공장 모빌리티 부품',
        ],
        suggestedTopics: [
          '생산관리 수업에서 시뮬레이션(Arena 등)으로 가상 라인 병목을 해소하고 대기시간을 줄인 텀프로젝트',
          '물류/제조 아르바이트 중 재고 조사 방식을 바코드 스캔 및 엑셀 자동화로 개선해 결품을 방지한 경험',
          '캡스톤 디자인에서 부품 조립 순서를 재배치하여 전체 조립 시간을 20% 단축한 사례',
        ],
        starFrameworkGuide: {
          situation: '완성차 조립 라인의 실시간 발주에 맞춰 한 치의 오차도 없이 직서열 납품해야 하는 제조 환경',
          task: '현대위아 e-LSD 및 열관리 생산 라인에서 설비 정지 로스를 줄이고 재고 회전율을 극대화',
          action: '산업공학 전공을 통해 배운 MRP 계산, 라인 밸런싱 기법, 엑셀 VBA 데이터 가공 능력을 연마',
          result: '일일 생산계획 대비 달성률 100% 및 돌발 결품 제로를 실현할 수 있는 실전 감각 완비',
          learning: '생산관리는 공장의 뇌관이자 오케스트라 지휘자로서 현장의 모든 흐름을 잇는 중심축임을 깨달음',
        },
        sampleDraftOutline:
          '1. [도입] 완성차 생산 라인의 멈춤 없는 심장이 되는 현대위아 창원공장 생산관리의 사명\n2. [직무 역량] 공정 병목 진단 및 라인 밸런싱 모델링을 통한 생산성 15% 개선 프로젝트 경험\n3. [기여 방안] 열관리 신규 품목 증설 시 안전재고 산정 자동화 및 납기 준수율 99.9% 달성',
        clicheToAvoid:
          '"철저한 계획성과 시간 약속을 잘 지키는 성격입니다" 대신 "공정 라인 밸런싱 효율을 82%에서 94%로 끌어올린 정량적 모델링 경험"을 내세우세요.',
      },
    ],
    tags: ['현대위아', '생산관리', 'SCM', '열관리', 'eLSD', '창원', '산업공학', '초봉6700만급'],
    featuredImage: '/src/assets/images/auto_factory_robotics_1793606426799.jpg',
    applyUrl: 'https://hyundai-wia.recruiter.co.kr',
  },
  {
    id: 'hankook-smart-plant-2026',
    company: '한국타이어앤테크놀로지',
    companyTier: '글로벌 1차 부품사',
    companyLogoText: 'HANKOOK',
    companyBgColor: 'bg-amber-950',
    title: '[신입] 테크노플렉스 스마트팩토리 공정 제어 및 로보틱스 설비보전 엔지니어',
    department: '생산기술본부 스마트설비제어팀',
    careerType: '신입',
    experienceExcluded: true,
    targetDegrees: ['학사 졸업(예정)자'],
    engineeringDomain: '스마트팩토리·설비보전',
    targetMajors: ['전기전자공학', '기계공학', '제어계측', '컴퓨터/SW', '메카트로닉스'],
    location: {
      region: '충청',
      city: '대전광역시 / 충남 금산군',
      plantName: '대전공장 및 금산 스마트 플랜트',
      detailAddress: '충청남도 금산군 제원면 금강로 438 한국타이어 금산공장',
    },
    salary: {
      baseAmount: 5100,
      displaySalary: '5,100만원 + 성과급',
      bonusDetails: '경영성과급 포함 초봉 약 6,500만원 선, 사택 제공 및 식사 4식 무료',
    },
    workType: '정규직 (수습 3개월)',
    timeline: {
      startDate: '2026-11-01',
      endDate: '2026-11-15',
      docResultDate: '2026-11-29',
      interviewPhase1: '2026-12-09 ~ 2026-12-15',
      interviewPhase2: '2027-01-06 ~ 2027-01-11',
      finalJoinDate: '2027-02-01',
    },
    jobOverview: {
      summary:
        '전기차 전용 타이어(iON)의 고하중·저소음 특성을 구현하기 위해 한국타이어 스마트팩토리의 고무 정련, 성형(Building), 가류(Curing) 설비의 서보 모터, 센서 네트워크 및 산업용 로봇 자동화를 관리합니다.',
      manufacturingProcess:
        '고무 믹싱 정련 → 압출/압연 반제품 공정 → 그린타이어 정밀 성형기 → 고온/고압 가류 챔버 몰드 성형 → 유니포미티(균일성) 검사',
      dailyWorkflow: [
        '08:30 - 금산 스마트 플랜트 가류기 고온 스팀 밸브 압력 및 성형기 서보 드라이브 상태 모니터링',
        '10:30 - 타이어 성형 로봇 비전 얼라인먼트 카메라 캘리브레이션 및 오프셋(Offset) 보정',
        '13:30 - 정련 공정 대형 믹서 모터 베어링 진동 FFT 스펙트럼 분석 및 설비 이상 조기 진단',
        '15:30 - 타이어 유니포미티(Uniformity) 다이내믹 밸런스 검사기 신호선 노이즈 차폐 작업',
        '17:00 - 스마트 예지보전 센서 데이터 수집 게이트웨이 펌웨어 업데이트 및 일일 일지 작성',
      ],
      keyResponsibilities: [
        '전기차 타이어 전용 성형 설비의 모터 위치 제어 정밀도를 ±0.1mm 이내로 향상',
        '산업용 6축 다관절 로봇(화낙/야스카와) 티칭 및 공압 그리퍼 간섭 방지 로직 개선',
        '가류 공정 온도/압력 제어 루프(PID) 튜닝을 통한 고무 가황 불량률 30% 감축',
        '설비 고장 긴급 대응 체계 구축 및 핵심 예비품(Spares) 수명 주기 관리',
      ],
      futureGrowth:
        '미국 테네시 및 유럽 헝가리 글로벌 생산 기지의 스마트 엔지니어링 리더로 파견 성장',
    },
    competencies: [
      {
        name: '모터 제어 및 서보 시스템 튜닝',
        importance: '필수',
        description: '서보 모터, 인버터, 엔코더 피드백 제어 및 PID 게인 튜닝 역량',
        evaluationCriteria: '위치 정밀도 및 속도 응답 특성 최적화 지식',
        recommendedSkills: ['서보 모터 제어', 'PID 제어', '인버터', '엔코더'],
      },
      {
        name: '산업용 로봇 티칭 및 센서 인터페이스',
        importance: '매우중요',
        description: '산업용 로봇 좌표계 설정, 툴 센터 포인트(TCP) 보정 및 광전/근접 센서 회로 결선',
        evaluationCriteria: '로봇 자동화 라인의 인터록 안전 설계 능력',
        recommendedSkills: ['로봇 티칭', 'PLC 래더', '센서 결선', '안전 릴레이'],
      },
    ],
    requirements: {
      mandatory: [
        '전기전자, 기계, 제어계측, 메카트로닉스 관련 전공 4년제 학사 졸업(예정)자',
        '공인어학성적 충족자 (토익 700점 또는 OPIc IM1 이상)',
        '대전 또는 금산 공장 교대/현장 근무 가능자',
      ],
      preferred: [
        '전기기사 또는 메카트로닉스기사 자격증 소지자',
        '로봇 티칭 실습 또는 제어 계측 프로젝트 유경험자',
      ],
      preferredCerts: ['전기기사', '메카트로닉스기사', '일반기계기사', '산업안전기사'],
      preferredTools: ['GX Works', 'RoboDK', 'AutoCAD', 'LabVIEW'],
      minLanguageScore: 'OPIc IM1 또는 토익스피킹 110점 이상',
    },
    coverLetterPrompts: [
      {
        id: 'hankook-q1',
        questionNumber: 1,
        question:
          '한국타이어의 스마트팩토리 설비제어 엔지니어로 지원하게 된 동기와, 타이어 제조 설비의 특수성(고열, 고압, 연속 공정) 속에서 본인의 전공 역량을 어떻게 발휘할 것인지 기술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '연속 공정 설비의 안정적 가동 유지 마인드와 제어 공학 지식의 결합 역량 평가',
        keyFocus: [
          '전기차 타이어(iON) 품질을 뒷받침하는 설비 제어 정밀도의 중요성',
          '모터 구동 및 센서 인터록 디버깅 경험을 통한 실무 적응력',
          '가류/성형 설비의 무정지 가동을 위한 설비보전 집념',
        ],
        recommendedKeywords: [
          '연속 공정 제어',
          '성형 정밀도',
          '서보 드라이브',
          '예지보전',
          'PID 제어',
          '무정지 라인(Zero Downtime)',
        ],
        suggestedTopics: [
          '제어공학 실습에서 모터 속도 및 위치 제어 PID 튜닝으로 정상상태 오차를 줄인 프로젝트',
          '센서 신호 결선 및 회로 트러블슈팅 경험',
        ],
        starFrameworkGuide: {
          situation: '극한의 온습도와 진동 환경에서도 정밀한 성형과 가류를 유지해야 하는 타이어 제조 설비의 난제',
          task: '설비 이상 징후를 선제적으로 감지하고 돌발 셧다운을 방지하는 엔지니어의 역할',
          action: '전기 제어 회로 해석과 모터 서보 튜닝 지식을 체계적으로 습득한 경험',
          result: '설비 가동률 극대화 및 안전 규격 준수 역량 구축',
          learning: '설비 엔지니어의 신속한 판단과 사전 점검이 곧 공장의 생산성임을 체감',
        },
        sampleDraftOutline:
          '1. [도입] 글로벌 전기차 타이어 시장을 주도하는 한국타이어 스마트 플랜트의 설비 경쟁력\n2. [직무 역량] 서보 모터 위치 제어 및 PLC 래더 수정을 통한 정밀도 개선 경험\n3. [기여 방안] 가류/성형기 정밀 인터록 유지 및 돌발 정지 제로화 실현',
        clicheToAvoid:
          '"기계를 만지는 것을 좋아해서 지원했습니다"는 표현 대신 "서보 드라이브의 위치 정밀도 편차를 억제하여 EV 타이어 진원도를 보장하는 엔지니어가 되겠다"고 쓰세요.',
      },
    ],
    tags: ['한국타이어', '스마트팩토리', '설비보전', '로보틱스', '금산', '대전', '초봉6500만급'],
    featuredImage: '/src/assets/images/auto_factory_robotics_1793606426799.jpg',
    applyUrl: 'https://hankooktire.recruiter.co.kr',
  },
  {
    id: 'hyundai-transys-mfg-2026',
    company: '현대트랜시스',
    companyTier: '글로벌 1차 부품사',
    companyLogoText: 'HYUNDAI TRANSYS',
    companyBgColor: 'bg-indigo-950',
    title: '[신입] 전동화 감속기·변속기 정밀 가공 및 기어 열처리 생산기술',
    department: '서산파워트레인생산기술실 가공기술팀',
    careerType: '신입',
    experienceExcluded: true,
    targetDegrees: ['학사 졸업(예정)자'],
    engineeringDomain: '생산기술',
    targetMajors: ['기계공학', '금속재료공학', '메카트로닉스'],
    location: {
      region: '충청',
      city: '서산시 지곡면',
      plantName: '서산 지곡공장',
      detailAddress: '충청남도 서산시 지곡면 무장산업로 13 현대트랜시스 서산공장',
    },
    salary: {
      baseAmount: 5300,
      displaySalary: '5,300만원 + 성과급',
      bonusDetails: '경영성과급 포함 초봉 약 6,800만원 수준, 기숙사 및 통근버스',
    },
    workType: '정규직 (수습 3개월)',
    timeline: {
      startDate: '2026-11-05',
      endDate: '2026-11-21',
      docResultDate: '2026-12-06',
      interviewPhase1: '2026-12-16 ~ 2026-12-22',
      interviewPhase2: '2027-01-13 ~ 2027-01-18',
      finalJoinDate: '2027-02-15',
    },
    jobOverview: {
      summary:
        '현대트랜시스 서산공장에서 EV 감속기 기어 및 하이브리드 변속기의 마이크로미터(㎛) 단위 정밀 호빙(Hobbing), 기어 연삭(Grinding) 가공 및 침탄 열처리 공정 기술을 개발합니다.',
      manufacturingProcess:
        '단조 블랭크 절단 → 황삭 선삭 CNC 가공 → 기어 치형 호빙/쉐이핑 → 진공 침탄 열처리 → 초정밀 기어 연삭(Grinding) → 소음(NVH) 테스터',
      dailyWorkflow: [
        '08:30 - 기어 연삭기 숫돌(Grinding Wheel) 드레싱 주기 및 치형 피치 오차(Tooth Pitch Error) 측정',
        '10:30 - 진공 침탄 열처리 로(Furnace) 내부 탄소 포텐셜(Cp) 및 표면 경도(HRC) 로트별 검사',
        '13:30 - 전기차 고회전(15,000 RPM) 감속기 치면 맞물림 접촉률 및 소음(NVH) 측정 데이터 리뷰',
        '15:30 - 절삭 공구 인서트 팁 마모 수명 예측을 통한 공구비 12% 절감 개선 회의',
        '17:00 - 신규 EV 감속기 양산 라인 가공 공정 사이클타임 분석 및 표준류 제개정',
      ],
      keyResponsibilities: [
        '전기차 감속기 고속 회전에 따른 고주파 기어 와인(Whine) 소음 억제를 위한 연삭 가공 조도 향상',
        '기어 침탄 열처리 시 발생하는 열변형 예측 및 보정 가공 프로그래밍',
        'CNC 공작기계 채터(Chatter) 진동 제어를 통한 절삭 수명 극대화 및 공구비 절감',
        '기어 전용 측정기(Gleason/Klingelnberg)를 통한 치형(Profile) 및 치선(Helix) 오차 관리',
      ],
      futureGrowth:
        '글로벌 최고 수준의 파워트레인 기어 제조 명장 및 생산기술 글로벌 프로젝트 매니저로 성장',
    },
    competencies: [
      {
        name: '정밀 기계가공 및 CNC 공작기계 원리',
        importance: '필수',
        description: '절삭 역학, 공구 마모 이론, CNC G-Code 프로그래밍 및 기어 호빙/연삭 공법 이해',
        evaluationCriteria: '치수 공차 및 표면 거칠기(Ra, Rz) 달성을 위한 절삭 조건 설정 능력',
        recommendedSkills: ['CNC 선반/밀링', '기어 가공', '절삭역학', 'G-Code'],
      },
      {
        name: '금속 재료학 및 침탄 열처리 메커니즘',
        importance: '매우중요',
        description: '상태도(Fe-C), 침탄 깊이 제어, 잔류 응력 및 금속 미세조직(마르텐사이트) 분석',
        evaluationCriteria: '열처리 변형 방지 대책 및 경도 만족 역량',
        recommendedSkills: ['금속열처리', '금속조직학', '경도 시험', '잔류응력'],
      },
    ],
    requirements: {
      mandatory: [
        '기계공학, 기계설계, 금속/재료공학 전공 학사 이상 졸업(예정)자',
        '어학: OPIc IM1 또는 토익스피킹 120점 이상',
        '충남 서산 근무 가능자',
      ],
      preferred: [
        '일반기계기사, 컴퓨터응용가공산업기사, 열처리기능사/기사 보유자',
        '공작기계 실습 또는 기계요소설계 프로젝트 우수자',
      ],
      preferredCerts: ['일반기계기사', '기계설계기사', '금속재료기사'],
      preferredTools: ['CATIA', 'AutoCAD', 'Mastercam', 'Minitab'],
      minLanguageScore: 'OPIc IM1 / 토스 120점 이상',
    },
    coverLetterPrompts: [
      {
        id: 'transys-q1',
        questionNumber: 1,
        question:
          '현대트랜시스의 파워트레인 가공/생산기술 직무에 지원한 동기와, 전기차 시대에 감속기 정밀 가공 기술이 왜 핵심 경쟁력인지 본인의 공학적 견해를 기술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '엔진 소음이 사라진 전기차에서 감속기 기어 정밀도가 소음(NVH)과 주행 효율을 좌우하는 메커니즘 이해도 평가',
        keyFocus: [
          '내연기관 변속기 대비 전기차 감속기의 초고회전(15,000rpm 이상) 환경 특성',
          '마이크로미터 단위 기어 치형(Profile) 가공 조도와 침탄 열처리의 중요성',
          '현대트랜시스 서산공장의 글로벌 기어 제조 기술력에 기여할 각오',
        ],
        recommendedKeywords: [
          'EV 감속기 기어',
          '고주파 기어 와인(Whine)',
          '정밀 연삭(Grinding)',
          '침탄 열처리 변형 제어',
          '치형 오차(㎛ 단위)',
          'NVH 저감',
        ],
        suggestedTopics: [
          '기계공작법 및 재료학 과목에서 기어 절삭 공법과 열처리 변형에 대해 심도 있게 탐구한 경험',
          '공작기계 실습 중 진동으로 인한 가공면 조도 불량을 절삭 파라미터(이송속도, 절입량) 최적화로 해결한 경험',
        ],
        starFrameworkGuide: {
          situation: '전기차 전동화로 엔진 소음이 차단되면서 기어 치면 마찰음이 탑승자에게 고스란히 전달되는 문제',
          task: '기어 연삭 가공의 초정밀도를 확보하고 열처리 변형을 사전에 억제하는 생산기술 엔지니어의 소명',
          action: '기계요소설계, 금속재료역학, 정밀가공학을 수강하며 미세 치형 가공 오차를 분석한 과정',
          result: '가공 불량의 근본 원인을 절삭 역학적으로 파악하고 해결할 수 있는 기초 체력 완성',
          learning: '부품의 1마이크로미터 가공 정밀도가 현대차그룹 전기차의 정숙성을 결정짓는 핵심임을 확인',
        },
        sampleDraftOutline:
          '1. [도입] 전기차의 정숙성을 지배하는 숨은 주역, 초정밀 감속기 기어 가공 기술\n2. [공학적 접근] 기계가공학 및 재료역학을 통해 다진 절삭 진동 제어 및 열처리 변형 보정 역량\n3. [기여 방안] 치형 피치 오차 2㎛ 이내 통제 및 서산공장 기어 가공 수율 극대화',
        clicheToAvoid:
          '"어렸을 때 기계 분해 조립을 좋아했습니다" 대신 "기어의 피치 오차와 치면 조도가 기어 맞물림 소음(Transmission Error)에 미치는 영향"을 언급하세요.',
      },
    ],
    tags: ['현대트랜시스', '감속기', '변속기', '기계가공', '서산', '기계공학', '초봉6800만급'],
    featuredImage: '/src/assets/images/auto_factory_robotics_1793606426799.jpg',
    applyUrl: 'https://hyundai-transys.recruiter.co.kr',
  },
  {
    id: 'sl-lighting-quality-2026',
    company: '에스엘 (SL Corporation)',
    companyTier: '글로벌 1차 부품사',
    companyLogoText: 'SL',
    companyBgColor: 'bg-blue-950',
    title: '[신입] 미래 모빌리티 지능형 헤드램프(AIFS) 및 전장 제어기 품질관리',
    department: '품질본부 램프품질보증팀',
    careerType: '신입',
    experienceExcluded: true,
    targetDegrees: ['학사 졸업(예정)자'],
    engineeringDomain: '품질관리·보증',
    targetMajors: ['전기전자공학', '기계공학', '산업공학', '광학공학'],
    location: {
      region: '영남',
      city: '경산시 / 대구광역시',
      plantName: '에스엘 본사 및 경산공장',
      detailAddress: '경상북도 경산시 진량읍 공단7로 85 에스엘 본사',
    },
    salary: {
      baseAmount: 4800,
      displaySalary: '4,800만원 + 성과급',
      bonusDetails: '성과급 포함 초봉 약 5,800만~6,200만원 수준, 사내 식당 및 복지 우수',
    },
    workType: '정규직 (수습 3개월)',
    timeline: {
      startDate: '2026-11-04',
      endDate: '2026-11-19',
      docResultDate: '2026-12-03',
      interviewPhase1: '2026-12-13 ~ 2026-12-19',
      interviewPhase2: '2027-01-08 ~ 2027-01-14',
      finalJoinDate: '2027-02-05',
    },
    jobOverview: {
      summary:
        '현대차 제네시스 및 글로벌 완성차에 공급되는 지능형 매트릭스 LED 헤드램프(AIFS), 노면 프로젝션 램프의 광학 모듈 및 내장 ECU(전자제어기)의 방수, 방열, 통신 품질을 검증합니다.',
      manufacturingProcess:
        '광학 렌즈 정밀 사출 성형 → 방열 히트싱크 알루미늄 다이캐스팅 → LED PCB SMT 실장 → 초음파/핫플레이트 융착 조립 → 광도 배광 측정 및 방수 시험',
      dailyWorkflow: [
        '08:30 - 헤드램프 습기(Fogging) 방지 방수 통기 멤브레인(Vent Hole) 리크 테스트 로그 점검',
        '10:30 - 지능형 매트릭스 LED 구동 드라이버 보드 CAN 통신 에러 및 고온 챔버 열화 시험',
        '13:30 - 광학 배광 측정실에서 암실(Dark Room) 내 컷오프 라인(Cut-off Line) 규격 합불 판정',
        '15:30 - 플라스틱 하우징 융착부 기포(Void) 결함에 대한 X-ray 비파괴 검사 결과 검토',
        '17:00 - 해외 고객사(GM, 현대차) 제출용 품질 승인 서류 및 8D 리포트 작성',
      ],
      keyResponsibilities: [
        '지능형 헤드램프 방수(IP6K9K) 신뢰성 및 습기 발생 원인 규명 및 융착 라인 공정 개선',
        '고출력 LED 발열에 의한 히트싱크 열전도 불량 방지를 위한 서멀 패드 Cpk 관리',
        'SMT 전장 라인 불량(솔더링 브릿지, 냉납) 감소를 위한 AOI 광학 검사기 문턱값 최적화',
        '국내외 안전 법규(ECE, FMVSS)에 부합하는 광도 및 배광 패턴 품질 보증',
      ],
      futureGrowth:
        '미래 모빌리티 광학·전장 통합 품질 전문가 및 글로벌 램프 품질 실사 책임자로 성장',
    },
    competencies: [
      {
        name: '전장 회로 및 전자파(EMC)/통신 이해',
        importance: '필수',
        description: 'LED 드라이버 회로 해독, CAN 통신 결함 분석, 전장부품 신뢰성 시험 규격 이해',
        evaluationCriteria: '전자 부품 불량 모드(쇼트, 오픈, 열화) 판독 능력',
        recommendedSkills: ['회로도 해독', 'CAN 통신', '신뢰성 시험', '오실로스코프'],
      },
      {
        name: '사출/융착 및 기밀(Leak) 방수 평가',
        importance: '매우중요',
        description: '플라스틱 사출 변형 공차, 초음파 융착 접합 상태 평가 및 유압/공압 리크 측정 기술',
        evaluationCriteria: '헤드램프 습기 유입 차단 메커니즘 이해도',
        recommendedSkills: ['사출 성형 해석', '리크 테스트', '기하공차', '8D Report'],
      },
    ],
    requirements: {
      mandatory: [
        '전자공학, 기계공학, 산업공학, 광학공학 등 이공계열 4년제 학사 졸업(예정)자',
        '공인어학성적 보유자 (토익 700점 또는 토스 120점 또는 OPIc IM1 이상)',
        '대구 또는 경산 본사 근무 가능자',
      ],
      preferred: [
        '품질경영기사 또는 전자기사 자격증 소지자',
        '전장 부품 프로젝트 또는 광학/사출 관련 캡스톤 경험자',
      ],
      preferredCerts: ['품질경영기사', '전자기사', '일반기계기사'],
      preferredTools: ['Minitab', 'CANalyzer', 'AutoCAD', 'SolidWorks'],
      minLanguageScore: 'OPIc IM1 또는 토스 120점 이상',
    },
    coverLetterPrompts: [
      {
        id: 'sl-q1',
        questionNumber: 1,
        question:
          '에스엘의 램프/전장 품질관리 직무에 지원한 동기와, 지능형 전장 램프가 가져야 할 가장 중요한 품질 가치가 무엇인지 본인의 전공 경험을 바탕으로 기술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '에스엘의 주력 제품인 지능형 헤드램프에 대한 이해도와 안전/신뢰성 품질 마인드 평가',
        keyFocus: [
          '단순 조명을 넘어 야간 시인성과 자율주행 센서와 연계되는 램프의 중요성',
          '극한 환경(방수, 방진, 방열, 진동) 속 신뢰성 보증에 기여할 수 있는 역량',
          '에스엘의 글로벌 품질 경쟁력에 일조하고자 하는 포부',
        ],
        recommendedKeywords: [
          '지능형 헤드램프(AIFS)',
          '방수 신뢰성(IP6K9K)',
          'LED 방열 설계',
          'SMT 전장 품질',
          '8D 리포트',
          '무결점 배광',
        ],
        suggestedTopics: [
          '전자회로 텀프로젝트에서 방열 설계 미흡으로 인한 소자 손상을 히트싱크 추가로 해결한 경험',
          '밀폐 케이스 시제품 제작 시 방수 오링 압착 공차를 계산하여 누수를 차단한 경험',
        ],
        starFrameworkGuide: {
          situation: '헤드램프가 단순 디자인 요소를 넘어 차량의 눈이자 통신 수단으로 고도화되는 트렌드',
          task: '기구적 방수와 전장 제어 신뢰성을 동시에 확보하여 필드 클레임을 원천 차단하는 품질 역할',
          action: '전기전자 및 기계공학 기초를 융합하여 회로 검사와 하우징 기밀성 메커니즘을 탐구한 과정',
          result: '품질 리스크를 사전 예측하고 8D 방법론으로 근본 대책을 세우는 역량 배양',
          learning: '고객의 신뢰는 야간 빗길 속에서도 흔들림 없이 길을 밝히는 한 가닥의 빛에서 나옴을 확인',
        },
        sampleDraftOutline:
          '1. [도입] 모빌리티의 첫인상이자 야간 안전의 등대, 에스엘 헤드램프 품질에 매료된 이유\n2. [직무 역량] 회로 분석과 기구 기밀성 평가를 아우르는 융합적 엔지니어링 역량\n3. [기여 방안] 방수 리크 및 LED 방열 산포를 선제 통제하여 글로벌 무결점 품질 달성',
        clicheToAvoid:
          '"밤길 운전할 때 헤드램프가 밝아서 고마웠습니다" 식의 일반 운전자 소회 대신, 배광 패턴 규격, 결로 방지 통기 밸브, LED junction 온도 관리 등 기술적 언어를 사용하세요.',
      },
    ],
    tags: ['에스엘', '헤드램프', '전장품질', 'LED', '품질관리', '경산', '대구', '초봉5800만급'],
    featuredImage: '/src/assets/images/smart_plant_digital_twin_1793606427881.jpg',
    applyUrl: 'https://slworld.recruiter.co.kr',
  },
  {
    id: 'posco-mobility-motor-2026',
    company: '포스코모빌리티솔루션',
    companyTier: '배터리·전장 전문기업',
    companyLogoText: 'POSCO MS',
    companyBgColor: 'bg-slate-900',
    title: '[신입] 친환경차 구동모터코아 정밀 초고속 프레스 금형 및 제조공정 엔지니어',
    department: '모터코아사업실 생산기술그룹',
    careerType: '신입',
    experienceExcluded: true,
    targetDegrees: ['학사 졸업(예정)자'],
    engineeringDomain: '생산기술',
    targetMajors: ['기계공학', '금속재료공학', '정밀기계', '금형공학'],
    location: {
      region: '충청',
      city: '천안시 / 포항시',
      plantName: '천안공장 및 포항 사업장',
      detailAddress: '충청남도 천안시 서북구 2공단3로 47 포스코모빌리티솔루션 천안공장',
    },
    salary: {
      baseAmount: 5250,
      displaySalary: '5,250만원 + 성과급',
      bonusDetails: '경영성과급 포함 초봉 약 6,600만원 수준, 포스코 그룹 복지 동일 적용',
    },
    workType: '정규직 (수습 3개월)',
    timeline: {
      startDate: '2026-11-03',
      endDate: '2026-11-18',
      docResultDate: '2026-12-02',
      interviewPhase1: '2026-12-11 ~ 2026-12-17',
      interviewPhase2: '2027-01-08 ~ 2027-01-13',
      finalJoinDate: '2027-02-10',
    },
    jobOverview: {
      summary:
        '전기차 구동모터의 핵심인 무방향성 전기강판(Hyper NO)을 분당 수백 회 초고속으로 타발하는 프로그레시브 프레스 금형을 유지보수하고, 적층 엠보싱(Embossing) 및 본딩 코어(EMFree) 제조 공법을 개발합니다.',
      manufacturingProcess:
        '무방향성 전기강판 코일 투입 → 초고속 프로그레시브 금형 펀칭 → 코어 자동 적층 및 엠보 결합(또는 접착 본딩) → 치수 정밀 검사 → 패키징',
      dailyWorkflow: [
        '08:30 - 초고속 프레스(300 SPM) 타발 소음 및 하사점(Bottom Dead Center) 센서 모니터링',
        '10:30 - 펀치 및 다이(Die) 초경합금 마모량 현미경 측정 및 금형 재연마 주기 판정',
        '13:30 - 신규 전기차 차종 구동모터 코아 적층 후 자기적 특성(철손 Iron Loss) 계측',
        '15:30 - 엠보싱 적층 두께 편차(Stack Height) 및 틸팅(Tilting) 불량 원인 해석',
        '17:00 - 프레스 설비 예방 보전 체크시트 작성 및 금형실 협업 회의',
      ],
      keyResponsibilities: [
        '초고속 타발 시 발생하는 버(Burr) 높이를 10㎛ 이내로 제어하는 금형 클리어런스(Clearance) 최적화',
        '모터 효율을 극대화하는 자체 접착 본딩(Bonding Core) 공정의 열·압력 본딩 윈도우 수립',
        '금형 파손 방지를 위한 프레스 로드 모니터(Tonnage Monitor) 이상 감지 시스템 운영',
        '모터코아 적층 진원도(Roundness) 및 동축도(Coaxiality) 공차 확보',
      ],
      futureGrowth:
        '글로벌 1위 구동모터코아 전문 엔지니어 및 유럽/북미 해외 신공장 금형 기술 리더로 성장',
    },
    competencies: [
      {
        name: '프레스 금형 설계 및 가공 지식',
        importance: '필수',
        description: '프로그레시브 금형 구조, 펀치-다이 클리어런스, 스트리퍼 메커니즘 및 초경 재료 이해',
        evaluationCriteria: '타발 공정 불량(버, 찌그러짐, 박리) 판독 역량',
        recommendedSkills: ['프레스 금형', '클리어런스 계산', '초경공구', 'AutoCAD'],
      },
      {
        name: '전기강판 재료 및 전자기적 특성 이해',
        importance: '매우중요',
        description: '무방향성 전기강판의 두께별(0.2~0.35mm) 기계적 거동 및 철손(Iron Loss), 자기장 특성',
        evaluationCriteria: '가공 응력이 자기적 성질에 미치는 영향 파악 능력',
        recommendedSkills: ['전기강판 물성', '철손 해석', '재료역학', '정밀측정'],
      },
    ],
    requirements: {
      mandatory: [
        '기계공학, 금속재료, 금형설계 관련 학사 이상 졸업(예정)자',
        '어학: OPIc IL 이상 또는 토익스피킹 110점 이상',
        '천안 또는 포항 공장 근무 가능자',
      ],
      preferred: [
        '프레스금형기사, 일반기계기사 자격증 소지자',
        '2D/3D CAD(CATIA, NX) 활용 우수자 또는 금형 실습 경험자',
      ],
      preferredCerts: ['프레스금형기사', '일반기계기사', '기계설계기사'],
      preferredTools: ['AutoCAD', 'NX', 'CATIA', 'Minitab'],
      minLanguageScore: 'OPIc IL / 토스 110점 이상',
    },
    coverLetterPrompts: [
      {
        id: 'posco-q1',
        questionNumber: 1,
        question:
          '포스코모빌리티솔루션의 구동모터코아 생산기술 직무에 지원한 이유와, 초정밀 프레스 금형 기술이 전기차 모터 효율에 미치는 영향에 대한 본인의 생각을 기술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '전기차 구동모터 효율의 핵심인 모터코아 제조 공법에 대한 전공적 통찰력 검증',
        keyFocus: [
          '전기강판 타발 시 가공 응력이 모터 전자기적 효율(철손)에 미치는 영향 이해',
          '금형 클리어런스와 미세 버(Burr) 억제가 모터 품질을 결정하는 이유',
          '포스코 그룹의 소재 경쟁력과 결합된 모터코아 글로벌 제조 경쟁력에 기여할 포부',
        ],
        recommendedKeywords: [
          '무방향성 전기강판',
          '구동모터코아',
          '프로그레시브 금형',
          '버(Burr) 억제',
          '본딩 코어(Bonding Core)',
          '철손(Iron Loss) 저감',
        ],
        suggestedTopics: [
          '기계재료학 과목에서 소성가공 및 전단 가공 메커니즘을 탐구한 프로젝트',
          'CAD를 이용한 프레스 펀치 다이 설계 실습 경험',
        ],
        starFrameworkGuide: {
          situation: '전기차 1회 충전 주행거리 향상을 위해 모터의 에너지 변환 효율 극대화가 요구되는 시점',
          task: '수천 장의 얇은 전기강판을 정밀 타발하고 적층하여 자속 손실을 최소화하는 생산기술의 핵심 역할',
          action: '재료역학과 기계가공학을 통해 소성 변형과 전단면 버 발생 원리를 체계적으로 분석한 경험',
          result: '마이크로 단위 금형 간극 제어로 가공 결함을 원천 예방할 수 있는 엔지니어링 역량 배양',
          learning: '금형의 미세한 간극 하나가 수만 대 전기차의 모터 효율을 좌우한다는 장인 정신 체득',
        },
        sampleDraftOutline:
          '1. [도입] 친환경차 모빌리티의 심장을 빚어내는 포스코모빌리티솔루션 모터코아 기술에 대한 확신\n2. [직무 역량] 전단 가공 이론 및 금형 간극 해석을 바탕으로 다진 정밀 가공 기초 체력\n3. [기여 방안] 타발 버 8㎛ 이내 통제 및 자체 융착 본딩 코어 양산 라인 수율 99% 달성',
        clicheToAvoid:
          '"철강의 쌀을 만드는 포스코에서 일하고 싶었습니다"는 일반론적 서술을 피하고, 0.2mm 박판 전기강판의 초고속 타발 기술과 적층 정밀도를 다루세요.',
      },
    ],
    tags: ['포스코모빌리티솔루션', '구동모터코아', '프레스금형', '전기강판', '천안', '포항', '초봉6600만급'],
    featuredImage: '/src/assets/images/auto_factory_robotics_1793606426799.jpg',
    applyUrl: 'https://posco.recruiter.co.kr',
  },
  {
    id: 'sebang-battery-pack-2026',
    company: '세방전지 (로케트배터리)',
    companyTier: '배터리·전장 전문기업',
    companyLogoText: 'SEBANG',
    companyBgColor: 'bg-emerald-950',
    title: '[신입] 미래 모빌리티 리튬 배터리 모듈/팩 제조공정 및 품질 엔지니어',
    department: '신에너지사업본부 광주배터리팩공장',
    careerType: '신입',
    experienceExcluded: true,
    targetDegrees: ['학사 졸업(예정)자'],
    engineeringDomain: '전기전자·전장제어',
    targetMajors: ['전기전자공학', '기계공학', '화학공학', '산업공학'],
    location: {
      region: '호남',
      city: '광주광역시 광산구',
      plantName: '광주 첨단 배터리팩 공장',
      detailAddress: '광주광역시 광산구 첨단연신로 115 세방전지 광주공장',
    },
    salary: {
      baseAmount: 4600,
      displaySalary: '4,600만원 + 성과급',
      bonusDetails: '경영성과급 포함 초봉 약 5,500만~5,900만원 선, 사택/기숙사 지원',
    },
    workType: '정규직 (수습 3개월)',
    timeline: {
      startDate: '2026-11-02',
      endDate: '2026-11-17',
      docResultDate: '2026-12-01',
      interviewPhase1: '2026-12-10 ~ 2026-12-16',
      interviewPhase2: '2027-01-07 ~ 2027-01-12',
      finalJoinDate: '2027-02-01',
    },
    jobOverview: {
      summary:
        '전기차 및 하이브리드 상용차에 탑재되는 리튬이온 배터리 모듈의 셀 레이저 용접, 버스바(Busbar) 체결, BMS 연동 및 최종 팩 EOL 안전성 검사 라인을 관리합니다.',
      manufacturingProcess:
        '배터리 셀 입고 OCV(개방회로전압) 선별 → 셀 절연 필름 테이핑 → 모듈 압축 적층 프레임 체결 → 버스바 레이저 웰딩 → BMS 하네스 결선 → 팩 조립 및 방수/통전 EOL 시험',
      dailyWorkflow: [
        '08:30 - 모듈 조립 라인 입고 셀 OCV 및 IR(내부저항) 편차 데이터 분석',
        '10:30 - 구리-알루미늄 이종 금속 버스바 레이저 용접 강도 및 접촉 저항 검사',
        '13:30 - 배터리 팩 외장 하우징 헬륨 리크 검사기 누설 수치 모니터링',
        '15:30 - BMS CAN 통신 데이터 수집 및 셀 전압 밸런싱 소프트웨어 로직 검증',
        '17:00 - 일일 공정 불량 회의 및 불량 셀 폐기/격리 절차 준수 확인',
      ],
      keyResponsibilities: [
        '배터리 모듈 버스바 레이저 용접 시 가인장 강도 확보 및 비드 산포 축소',
        '셀 간 내부저항(IR) 산포를 줄여 모듈 충방전 수명 균일화 달성',
        '배터리 팩 방수(IP67) 보장을 위한 실링 가스켓 도포 로봇 경로 티칭 최적화',
        '고전압 배터리 팩 조립 라인의 작업자 감전 방지 안전 인터록 표준화',
      ],
      futureGrowth:
        '국내 1위 축전지 명가에서 차세대 리튬 배터리 팩 제조 전문가로 도약',
    },
    competencies: [
      {
        name: '배터리 팩 구조 및 고전압 전기 안전',
        importance: '필수',
        description: '배터리 셀-모듈-팩 직병렬 회로 구성, 퓨즈 및 릴레이(PRA) 안전 메커니즘 이해',
        evaluationCriteria: '절연 내압 및 단락(Short) 방지 설계 이해도',
        recommendedSkills: ['고전압 안전', '배터리 회로', '절연 저항 측정', '전기도면'],
      },
      {
        name: '레이저 용접 및 접합 공정 품질',
        importance: '매우중요',
        description: '이종 금속(Cu-Al) 레이저 용접 결함 판정 및 접촉 저항 최소화 기술',
        evaluationCriteria: '용접 인장 강도 시험 및 미세조직 평가 역량',
        recommendedSkills: ['레이저 웰딩', '접촉 저항 측정', '공정 FMEA', '품질 검사'],
      },
    ],
    requirements: {
      mandatory: [
        '전기전자, 기계, 화학공학, 신소재 등 이공계열 4년제 학사 졸업(예정)자',
        '어학 기준: 토익 650점 또는 OPIc IL 이상',
        '광주광역시 공장 근무 가능자',
      ],
      preferred: [
        '전기기사, 전기공사기사 또는 품질경영기사 취득자',
        '배터리 관련 동아리 또는 캡스톤 프로젝트 유경험자',
      ],
      preferredCerts: ['전기기사', '품질경영기사', '일반기계기사'],
      preferredTools: ['AutoCAD', 'Minitab', 'Excel VBA'],
      minLanguageScore: 'OPIc IL 또는 토스 110점 이상',
    },
    coverLetterPrompts: [
      {
        id: 'sebang-q1',
        questionNumber: 1,
        question:
          '세방전지의 리튬 배터리 모듈/팩 제조 직무에 지원하게 된 동기와, 호남권 모빌리티 배터리 생산 허브로서 본인이 기여할 수 있는 역량을 기술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '전통 축전지 1위 기업의 리튬 신에너지 전환에 동참하는 진정성과 현장 실무 준비도 평가',
        keyFocus: [
          '로케트배터리의 신뢰도를 바탕으로 리튬팩 양산으로 도약하는 세방전지의 미래',
          '모듈/팩 조립 시 고전압 안전과 용접 신뢰성을 유지할 수 있는 공학적 역량',
          '광주 배터리팩 공장에서 수율 안정화에 기여하고자 하는 의지',
        ],
        recommendedKeywords: [
          '리튬 배터리 모듈/팩',
          '버스바 레이저 용접',
          '고전압 안전 인터록',
          '절연저항 및 OCV',
          '광주 첨단산단',
          '수율 안정화',
        ],
        suggestedTopics: [
          '전기기사 실기 및 회로 실습에서 고전압 접지와 절연 저항을 측정해본 경험',
          '배터리 모듈 연결 프로젝트에서 버스바 접촉 불량을 체결 토크 표준화로 개선한 사례',
        ],
        starFrameworkGuide: {
          situation: '상용차 및 특수 모빌리티 분야에서 신뢰성 높은 리튬 배터리 팩 양산 수요가 급증하는 환경',
          task: '셀의 화학적 특성과 팩의 기구/전기적 안정성을 결합하는 제조공정 엔지니어의 역할',
          action: '전기공학 전공을 통해 전력 회로 해석과 계측기 다루는 능력을 숙달한 과정',
          result: '배터리 모듈 간 전압 편차 및 용접 결함을 조기에 필터링할 수 있는 실무 역량 확보',
          learning: '배터리 팩 제조는 사소한 볼트 체결 토크와 용접 깊이 하나로 안전이 판가름 난다는 원칙 확립',
        },
        sampleDraftOutline:
          '1. [도입] 대한민국 배터리의 역사 세방전지가 펼치는 미래 리튬팩 신화에 동참하고자 하는 열정\n2. [직무 역량] 전기 회로 분석력과 고전압 안전 규격에 대한 철저한 이해\n3. [기여 방안] 버스바 용접 산포 억제 및 광주공장 배터리팩 양산 직행률 99.5% 달성',
        clicheToAvoid:
          '"어릴 때부터 리모컨에 로케트 배터리를 끼워 넣으며 자랐습니다" 대신 "리튬 배터리 셀 직병렬 모듈화 과정에서의 절연 설계와 용접 접촉 저항 통제"를 다루세요.',
      },
    ],
    tags: ['세방전지', '로케트배터리', '리튬배터리팩', '모듈조립', '광주', '전기전자', '초봉5500만급'],
    featuredImage: '/src/assets/images/ev_battery_engineering_1793606428277.jpg',
    applyUrl: 'https://gbat.recruiter.co.kr',
  },
  {
    id: 'hmc-namyang-cae-2026',
    company: '현대자동차',
    companyTier: '완성차 OEM',
    companyLogoText: 'HYUNDAI R&D',
    companyBgColor: 'bg-blue-900',
    title: '[신입] 남양연구소 차세대 전기차 샤시 기구 설계 및 CAE 구조/충돌 해석 연구원',
    department: 'R&D본부 샤시개발센터 샤시선행설계팀',
    careerType: '신입',
    experienceExcluded: true,
    targetDegrees: ['학사 졸업(예정)자', '석사 졸업(예정)자'],
    engineeringDomain: '연구개발·설계',
    targetMajors: ['기계공학', '항공우주공학', '메카트로닉스', '자동차공학'],
    location: {
      region: '경기',
      city: '화성시 남양읍',
      plantName: '남양 R&D 연구소',
      detailAddress: '경기도 화성시 남양읍 현대연구소로 150 남양연구소',
    },
    salary: {
      baseAmount: 5400,
      displaySalary: '5,400만원 + 성과급',
      bonusDetails: '경영성과급 포함 초봉 약 7,200만원 수준, 남양연구소 사옥 및 통근버스',
    },
    workType: '정규직 (수습 3개월)',
    timeline: {
      startDate: '2026-11-01',
      endDate: '2026-11-14',
      docResultDate: '2026-11-28',
      interviewPhase1: '2026-12-08 ~ 2026-12-15',
      interviewPhase2: '2027-01-05 ~ 2027-01-10',
      finalJoinDate: '2027-02-01',
    },
    jobOverview: {
      summary:
        '현대자동차 남양연구소에서 신규 전동화 플랫폼의 서스펜션, 서브프레임, 조향 링키지 기구 설계를 3D CAD(CATIA)로 수행하고, 유한요소해석(CAE)을 통해 강성/내구/충돌 안전성을 가상 검증합니다.',
      manufacturingProcess:
        '선행 콘셉트 패키징 레이아웃 → 3D CATIA 기구 모델링 → HyperMesh 유한요소 격자 분할 → ANSYS/Abaqus 구조 및 피로 해석 → 시작차 주행 실차 시험 검증',
      dailyWorkflow: [
        '08:30 - 야간 분산 컴퓨팅 서버로 돌려놓은 서브프레임 충돌 충격 흡수 CAE 해석 결과 수렴성 검토',
        '10:30 - 서스펜션 암 알루미늄 다이캐스팅 경량화 위상최적화(Topology Optimization) 형상 추출',
        '13:30 - 생산기술본부 금형설계팀과 부품 드래프트 각도(Draft Angle) 및 언더컷(Undercut) 양산성 회의',
        '15:30 - 3D CATIA 조향 링키지 가동 범위 기구학적 간섭(Kinematic Clearance) 체크',
        '17:30 - 샤시 부품 피로 수명 시험 벤치 실측 데이터와 CAE 예측치 상관성(Correlation) 분석',
      ],
      keyResponsibilities: [
        '전기차 배터리 중량 증가에 대응하는 알루미늄 일체형 서브프레임 경량 20% 설계',
        '서스펜션 지오메트리 최적화로 선회 시 타이어 접지력 및 R&H(Ride & Handling) 성능 극대화',
        '유한요소해석(CAE)을 활용한 피로 취약 부위 리브(Rib) 보강 및 핫스탬핑 고장력강 적용',
        '생산공장 조립 편의성을 고려한 DFM(Design for Manufacturing) 설계 반영',
      ],
      futureGrowth:
        '현대차 글로벌 전동화 플랫폼 아키텍처 수석 연구원 및 유럽/북미 R&D 테크니컬 센터 파견',
    },
    competencies: [
      {
        name: '4대 역학(고체/동역학) 및 구조해석(CAE)',
        importance: '필수',
        description: '유한요소법(FEM) 이론, 응력 집중, 모달 해석, 피로 파괴 메커니즘 이해 및 소프트웨어 활용',
        evaluationCriteria: '해석 격자(Mesh) 품질 관리 및 경계 조건(Boundary Condition) 설정 역량',
        recommendedSkills: ['HyperMesh', 'ANSYS', 'Abaqus', 'NASTRAN', 'FEM'],
      },
      {
        name: '3D CAD 기구 모델링 및 기하공차',
        importance: '매우중요',
        description: 'CATIA V5 솔리드/서피스 모델링, 파라메트릭 설계 및 양산 조립 공차 분석',
        evaluationCriteria: '부품 간섭 체크 및 가공성/주조성 고려 설계 능력',
        recommendedSkills: ['CATIA V5', '기하공차(GD&T)', '기구학 해석', 'DFM'],
      },
    ],
    requirements: {
      mandatory: [
        '기계공학, 자동차공학, 항공우주공학 전공 학사/석사 졸업(예정)자',
        '공인어학성적 보유자 (SPA 110점 이상, OPIc IM2 또는 토스 120점 이상)',
        '경기 화성 남양연구소 근무 가능자',
      ],
      preferred: [
        '자작차 동아리(KSAE/FSAE) 샤시/서스펜션 설계 제작 유경험자',
        'ANSYS, Abaqus, HyperMesh 또는 CATIA 공학 해석 공모전 입상자',
      ],
      preferredCerts: ['일반기계기사', '기계설계기사'],
      preferredTools: ['CATIA V5', 'HyperMesh', 'ANSYS Workbench', 'Abaqus', 'MATLAB'],
      minLanguageScore: 'OPIc IM2 또는 토스 120점 이상',
    },
    coverLetterPrompts: [
      {
        id: 'hmc-rnd-q1',
        questionNumber: 1,
        question:
          '현대자동차 남양연구소 샤시 설계/CAE 직무에 지원하게 된 계기와, 본인이 수행했던 기구 설계 또는 구조해석 프로젝트 중 가장 공학적 난도가 높았던 경험을 구체적으로 기술해 주십시오. (1000자 이내)',
        charLimit: '1,000자',
        purpose: '전동화 차량의 승차감과 안전을 책임지는 샤시 R&D에 대한 깊이 있는 역학과 CAE 실무 감각 검증',
        keyFocus: [
          '고체역학 및 FEM 이론을 실제 설계에 적용해본 구체적 프로세스',
          '해석 결과의 타당성 검증(단순 컬러맵 보기가 아닌 응력 특이점 제거 및 실측 비교)',
          '양산성을 고려한 설계 변경(DFM) 마인드',
        ],
        recommendedKeywords: [
          '유한요소해석(FEM/CAE)',
          '폰 미세스 응력(von Mises)',
          '서스펜션 지오메트리',
          '위상 최적화',
          '경계 조건(Boundary Condition)',
          '피로 수명 해석',
        ],
        suggestedTopics: [
          '자작차 프레임 또는 로어암의 비틀림 강성을 HyperMesh/ANSYS로 해석하고 무게를 15% 감량한 경험',
          '기계요소 텀프로젝트에서 하중 집중 부위에 필렛 반지름을 변경하여 최대 응력을 30% 낮춘 사례',
        ],
        starFrameworkGuide: {
          situation: '배터리 탑재로 인해 기존 대비 차량 총중량이 300kg 증가하여 샤시 부품의 피로 파손 위험 증대',
          task: '남양연구소에서 중량을 늘리지 않으면서도 가혹 주행 하중을 견디는 고강성 경량 샤시 구조 설계',
          action: '고체역학과 유한요소법을 기초로 위상최적화 기법을 적용하고 파라메트릭 CAD 모델링 수행',
          result: '응력 집중 부위를 효과적으로 분산시켜 안전계수 1.5 확보 및 경량화 달성',
          learning: 'CAE는 단순 툴이 아니라 설계자의 물리적 직관을 수치로 증명하는 강력한 무기임을 확신',
        },
        sampleDraftOutline:
          '1. [도입] 남양연구소에서 모빌리티의 주행 한계를 규정하는 샤시 기구학의 매력\n2. [기술적 난제] 자작차 알루미늄 로어암 설계 시 코너링 횡하중에 의한 응력 집중 해결 과정\n3. [해석 및 조치] FEM 격자 미세화 및 위상최적화 리브 설계를 통한 중량 18% 절감\n4. [남양연구소 기여] 차세대 E-GMP 플랫폼 샤시의 NVH 및 내구성 극대화 기여',
        clicheToAvoid:
          '"어려서부터 자동차 매니아였습니다" 대신 "고체역학의 에너지법과 von Mises 항복 조건을 기반으로 샤시 암의 응력 집중 계수를 계산했던..." 공학적 탐구로 시작하세요.',
      },
    ],
    tags: ['현대차', '남양연구소', '샤시설계', 'CAE', '구조해석', 'CATIA', '화성', '초봉7200만급'],
    featuredImage: '/src/assets/images/smart_plant_digital_twin_1793606427881.jpg',
    applyUrl: 'https://talent.hyundai.com',
  },
];
