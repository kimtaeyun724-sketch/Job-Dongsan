import { JobPosting, StudentProfile, FitAssessmentResult } from '../types/job';

export function evaluateJobFit(profile: StudentProfile, job: JobPosting): FitAssessmentResult {
  let majorScore = 0;
  let toolsScore = 0;
  let certScore = 0;
  let experienceScore = 0;

  const strengths: string[] = [];
  const gapAnalysis: string[] = [];
  const recommendedPreparation: string[] = [];

  // 1. Major Evaluation (Weight: 35%)
  const userMajor = profile.major.trim();
  const isDirectMajor = job.targetMajors.some((m) =>
    userMajor.toLowerCase().includes(m.toLowerCase()) || m.toLowerCase().includes(userMajor.toLowerCase())
  );

  if (isDirectMajor) {
    majorScore = 35;
    strengths.push(`전공 일치: ${profile.major} 전공은 본 공고(${job.engineeringDomain})의 최우선 선발 전공군에 부합합니다.`);
  } else if (profile.subMajor && job.targetMajors.some((m) => profile.subMajor?.includes(m))) {
    majorScore = 28;
    strengths.push(`복수/부전공 일치: ${profile.subMajor} 이수를 통해 전공 연계성을 증명할 수 있습니다.`);
  } else {
    majorScore = 15;
    gapAnalysis.push(`전공 차이: 공고 우대 전공(${job.targetMajors.slice(0, 3).join(', ')})과 다소 상이하므로 기계/전기/공정 관련 수강 이력을 강조해야 합니다.`);
    recommendedPreparation.push(`전공 기초 보완: 자동차 부품 구조 및 ${job.engineeringDomain} 핵심 프로세스 자격증/교육 이수 증빙 확보`);
  }

  // 2. Tools & Skills Evaluation (Weight: 25%)
  const matchedTools = profile.engineeringTools.filter((t) =>
    job.requirements.preferredTools.some(
      (reqTool) => reqTool.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(reqTool.toLowerCase())
    )
  );

  if (matchedTools.length >= 2) {
    toolsScore = 25;
    strengths.push(`핵심 툴 역량: ${matchedTools.join(', ')} 등 실무 설계/해석 소프트웨어 역량이 검증되었습니다.`);
  } else if (matchedTools.length === 1) {
    toolsScore = 18;
    strengths.push(`보유 툴 역량: ${matchedTools[0]} 활용 가능`);
    gapAnalysis.push(`추가 우대 툴(${job.requirements.preferredTools.slice(0, 2).join(', ')}) 경험 확장 권장`);
  } else {
    toolsScore = 8;
    gapAnalysis.push(`실무 툴 미비: ${job.company} 실무에서 요구하는 ${job.requirements.preferredTools.join(', ')} 활용 이력이 부족합니다.`);
    recommendedPreparation.push(`${job.requirements.preferredTools[0]} 툴 기초 모델링/분석 포트폴리오 1건 이상 제작`);
  }

  // 3. Certifications Evaluation (Weight: 20%)
  const matchedCerts = profile.certifications.filter((c) =>
    job.requirements.preferredCerts.some(
      (reqCert) => reqCert.toLowerCase().includes(c.toLowerCase()) || c.toLowerCase().includes(reqCert.toLowerCase())
    )
  );

  if (matchedCerts.length >= 2) {
    certScore = 20;
    strengths.push(`국가기술자격증: ${matchedCerts.join(', ')} 취득으로 직무 법적/기술적 기본기가 매우 우수합니다.`);
  } else if (matchedCerts.length === 1) {
    certScore = 15;
    strengths.push(`우대 자격증: ${matchedCerts[0]} 보유로 전공 전문성 인정`);
  } else if (profile.certifications.length > 0) {
    certScore = 10;
    strengths.push(`보유 자격증: ${profile.certifications.join(', ')} 보유`);
    gapAnalysis.push(`직무 특화 기사 자격증(${job.requirements.preferredCerts.slice(0, 2).join(', ')}) 취득 시 서류 합격률이 급상승합니다.`);
  } else {
    certScore = 5;
    gapAnalysis.push(`자격증 보완 필요: ${job.company} 지원자 평균 대비 직무 기사 자격증 부재`);
    recommendedPreparation.push(`서류 접수 전 ${job.requirements.preferredCerts[0]} 1차 필기 합격 또는 관련 직무 수료증 이력 기재`);
  }

  // 4. Practical Experience (Weight: 20%)
  if (profile.practicalExperiences.length >= 2) {
    experienceScore = 20;
    strengths.push(`실무 프로젝트: ${profile.practicalExperiences.join(' / ')} 등 다수의 현장 지향 프로젝트 이수`);
  } else if (profile.practicalExperiences.length === 1) {
    experienceScore = 14;
    strengths.push(`프로젝트 경험: ${profile.practicalExperiences[0]} 수행 이력`);
    recommendedPreparation.push(`자소서에 5-Why 원인 분석 및 공차 관리 등 제조 엔지니어링 키워드를 결합하여 기술력 어필`);
  } else {
    experienceScore = 6;
    gapAnalysis.push(`자동차 프로젝트 경험 부족: 캡스톤 디자인 또는 랩실 실험 데이터를 자소서 소재로 구체화해야 함`);
    recommendedPreparation.push(`학부 전공 실험 중 오차를 분석하고 수치를 개선했던 과제를 STAR 기법으로 정리`);
  }

  const overallScore = Math.min(100, Math.round(majorScore + toolsScore + certScore + experienceScore));

  const bestSuitedRoles = [
    job.engineeringDomain,
    '생산기술 및 공정 엔지니어',
    '품질보증 및 신뢰성 평가',
  ];

  return {
    overallScore,
    majorMatchScore: Math.round((majorScore / 35) * 100),
    toolsSkillsScore: Math.round((toolsScore / 25) * 100),
    certificationsScore: Math.round((certScore / 20) * 100),
    experienceMatchScore: Math.round((experienceScore / 20) * 100),
    strengths,
    gapAnalysis,
    recommendedPreparation,
    bestSuitedRoles,
  };
}
