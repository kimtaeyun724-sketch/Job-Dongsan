import { JobPosting, CoverLetterPrompt } from '../types/job';

export interface CoverLetterDraftRequest {
  job: JobPosting;
  prompt: CoverLetterPrompt;
  candidateMajor: string;
  keyTools: string[];
  projectTitle: string;
  problemFaced: string;
  engineeringAction: string;
  measuredResult: string;
  tone: 'professional' | 'passionate' | 'data-driven';
}

export function generateStructuredCoverLetterDraft(params: CoverLetterDraftRequest): {
  headline: string;
  fullContent: string;
  charCount: number;
  highlightedKeywords: string[];
} {
  const {
    job,
    prompt,
    candidateMajor,
    keyTools,
    projectTitle,
    problemFaced,
    engineeringAction,
    measuredResult,
  } = params;

  const toolsStr = keyTools.length > 0 ? keyTools.join(', ') : '3D CAD 및 공학 해석 도구';
  const majorStr = candidateMajor || '이공계열 전공';
  const safeProject = projectTitle || '학부 캡스톤 디자인 및 공정 개선 프로젝트';
  const safeProblem = problemFaced || '조립 공차 누적으로 인한 부품 간섭 및 작동 오작동 발생';
  const safeAction =
    engineeringAction || '공학적 공차 분석 및 3D 모델링 간섭 체크를 통해 하중 집중 부위를 재설계하고 공정 파라미터를 보정함';
  const safeResult =
    measuredResult || '시제품 조립 불량률 0% 달성 및 기존 대비 조립 소요시간 20% 단축';

  let headline = '';
  let bodyParagraphs: string[] = [];
  const usedKeywords: string[] = [];

  // Pick top recommended keywords from prompt
  const keywords = prompt.recommendedKeywords.slice(0, 4);
  usedKeywords.push(...keywords);

  if (prompt.questionNumber === 1) {
    headline = `[${job.company} ${job.engineeringDomain}: 데이터와 현장 중심의 공정 안정화로 양산 무결점을 실현하다]`;
    bodyParagraphs = [
      `${job.company}의 ${job.title}에 지원한 이유는, 설계도면의 혁신을 오차 없이 실물 차량으로 구현해내는 제조기술의 엄중한 책임감에 깊이 공감하기 때문입니다. 모빌리티 산업이 급격한 전동화와 스마트팩토리 전환기를 맞이한 지금, 생산 현장에서의 1마이크로미터 공차와 사이클타임(T/T) 단축은 회사의 수익성과 직결되는 핵심 경쟁력입니다.`,
      `저는 ${majorStr}을 전공하며 ${toolsStr}을 활용해 설계와 생산 사이의 물리적 괴리를 해소하는 감각을 길렀습니다. 특히 [${safeProject}]를 수행하면서, 단순히 이론상의 성능을 만족하는 것을 넘어 제조 현장의 작업성과 조립 편의성(DFM)을 고려한 공법 설계의 중요성을 절감했습니다. 당시 ${safeProblem} 문제에 직면했을 때, 도면을 전면 재검토하고 ${safeAction}을 적용하여 ${safeResult}이라는 정량적 성과를 거두었습니다.`,
      `입사 후, ${job.location.plantName} 현장의 목소리를 경청하며 연구소 설계 부서와 현장 기술직 사원 사이의 신뢰받는 가교가 되겠습니다. 공정능력지수(Cpk) 1.67 이상을 유지하고 양산 램프업(Ramp-up) 기간을 단축하여, ${job.company}가 글로벌 모빌리티 시장에서 압도적인 제조 경쟁력을 확보하는 데 기여하겠습니다.`,
    ];
  } else if (prompt.questionNumber === 2) {
    headline = `[공학적 원인 규명과 ${keywords[0] || '공정 최적화'} 역량: ${safeProject}]`;
    bodyParagraphs = [
      `${job.engineeringDomain} 엔지니어의 핵심 덕목은 예기치 못한 라인 트러블 앞에서도 직관에 의존하지 않고, 물리적 법칙과 데이터에 근거해 5-Why 원인을 추적하는 분석력입니다. 저는 ${majorStr} 학부 과정에서 다진 전공 역량과 ${toolsStr}을 통해 현장 문제를 해결할 준비가 되어 있습니다.`,
      `[${safeProject}] 진행 당시, 가장 큰 병목은 ${safeProblem}이었습니다. 초기에는 단순 가공 불량으로 판단되었으나, 저는 측정 오차와 환경 변수를 분리하기 위해 단계별 가설 검증을 실시했습니다. ${safeAction}을 신속히 실행에 옮겼고, 그 결과 ${safeResult}을 이끌어낼 수 있었습니다.`,
      `이 과정에서 체득한 공차 누적 해석 및 공정 파라미터 최적화 노하우는 ${job.company} ${job.department}의 라인 안정화 업무에 즉각 기여할 것입니다. 사소한 편차도 놓치지 않는 정밀한 품질 의식으로 현장의 수율 손실을 원천 차단하겠습니다.`,
    ];
  } else {
    headline = `[상호 존중과 데이터 기반 소통으로 이끌어낸 현장 시너지]`;
    bodyParagraphs = [
      `생산 현장은 연구개발, 품질, 설비보전, 그리고 현장 작업자의 노력이 하나로 맞물리는 다기능 협업의 장입니다. [${safeProject}]를 리드하며, 서로 다른 우선순위를 가진 팀원 및 협력 주체 간의 이견을 조율한 경험이 있습니다.`,
      `당시 작업성과 안전을 둘러싼 의견 대립과 ${safeProblem}으로 인해 일정 지연 위기에 처했습니다. 저는 일방적인 주장을 펼치는 대신, 객관적 작업 데이터와 시제품 테스트 결과를 시각화하여 공유했습니다. 또한 ${safeAction}을 대안으로 제시하며 상대방의 우려를 선제적으로 해소했습니다.`,
      `그 결과 모든 이해관계자의 합의를 도출하며 ${safeResult}을 달성했습니다. ${job.company}의 ${job.engineeringDomain} 엔지니어로서, 현장의 안전을 최우선으로 존중하며 최고의 생산성을 이끌어내는 소통형 인재가 되겠습니다.`,
    ];
  }

  const fullContent = `${headline}\n\n${bodyParagraphs.join('\n\n')}`;
  const charCount = fullContent.replace(/\s/g, '').length;

  return {
    headline,
    fullContent,
    charCount,
    highlightedKeywords: usedKeywords,
  };
}

export async function requestAIEnhancedCoverLetter(params: CoverLetterDraftRequest): Promise<{
  content: string;
  advice: string[];
}> {
  try {
    const response = await fetch('/api/ai-cover-letter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        content: data.content,
        advice: data.advice || [],
      };
    }
  } catch {
    // If backend endpoint is unavailable or fails, fallback seamlessly
  }

  // Robust fallback
  const fallback = generateStructuredCoverLetterDraft(params);
  return {
    content: fallback.fullContent,
    advice: [
      `본문 내 [${params.measuredResult || '정량적 수치'}]를 실제 캡스톤 또는 공모전에서 도출된 정확한 측정값으로 검토하세요.`,
      `지원 회사(${params.job.company})의 최근 차종 양산 이슈 및 ${params.job.location.plantName}의 공정 특징을 한 문장 추가하면 완성도가 배가됩니다.`,
      `STAR-L 프레임워크(상황-과제-행동-결과-배운점)가 논리적으로 균형 있게 기술되었습니다.`,
    ],
  };
}
