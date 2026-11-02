import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// API route: AI Cover Letter Assistant & Reviewer
app.post('/api/ai-cover-letter', async (req, res) => {
  try {
    const {
      job,
      prompt,
      candidateMajor,
      keyTools,
      projectTitle,
      problemFaced,
      engineeringAction,
      measuredResult,
    } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Graceful fallback when key is not set
      return res.json({
        content: `[${job?.company || '자동차 제조'} ${job?.engineeringDomain || '생산기술'}: 공학적 원인 규명과 데이터 기반 공정 안정화 실현]\n\n` +
          `${job?.company || '귀사'}의 ${job?.title || '생산기술 신입'} 공고에 지원한 이유는, 설계 도면의 가치를 양산 현장에서 결함 없이 구현해내는 제조기술의 무게감에 깊이 매료되었기 때문입니다.\n\n` +
          `저는 ${candidateMajor || '이공계열'}을 전공하며 ${keyTools?.join(', ') || '3D CAD 및 공학 해석 도구'}를 활용하여 현장 실무 역량을 배양했습니다. 특히 [${projectTitle || '캡스톤 디자인 프로젝트'}]에서 발생한 [${problemFaced || '조립 간섭 및 공차 누적'}] 문제를 해결하기 위해, 단순한 감이 아닌 5-Why 기법과 공차 누적 해석을 적용했습니다. ${engineeringAction || '구조적 취약부를 보강하고 공정 지그의 가이드 각도를 재설계'}함으로써 ${measuredResult || '불량률 0% 및 사이클타임 20% 단축'}이라는 정량적 성과를 이끌어냈습니다.\n\n` +
          `입사 후 ${job?.location?.plantName || '생산 현장'}에서 연구소와 생산라인을 잇는 든든한 기술 가교가 되어 Cpk 1.67 이상의 안정된 공정능력을 달성하겠습니다.`,
        advice: [
          '프로젝트 성과 수치(오차율, 시간 단축)를 공학 보고서 형식으로 더욱 명확히 다듬으세요.',
          `${job?.company}의 주력 생산 라인 특성(예: EV 전용 라인, 스마트 셀 생산)을 언급하여 지원 진정성을 높이세요.`,
          'STAR-L 구조(상황, 과제, 행동, 정량 성과, 교훈)가 논리 정연하게 정렬되었습니다.',
        ],
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const systemPrompt = `당신은 대한민국 최고 완성차 및 자동차 1차 부품사(현대차, 기아, 현대모비스, HL만도 등)의 생산기술/품질관리/R&D 전담 채용위원장이자 이공계 취업 전문 기술 컨설턴트입니다.
지원자가 제공한 전공, 보유 기술 툴, 프로젝트 경험, 문제해결 과정, 정량적 성과를 바탕으로 채용담당관의 시선을 사로잡는 강력한 자기소개서 초안을 작성하세요.

반드시 지켜야 할 규칙:
1. 문체: 공학적이고 전문적이며 신뢰감 넘치는 정갈한 하십시오체 (~했습니다, ~하겠습니다).
2. 구조:
   - [공학적 성과와 직무 철학을 압축한 강렬한 소제목]
   - 도입: 회사와 직무 지원동기 (피상적 찬양 금지, 양산 현장의 가교 역할 강조)
   - 본문 (STAR-L): 문제 발생 상황(S) -> 해결 과제 및 목표치(T) -> 공학적 원인 규명 및 행동(A, 툴/기법 명시) -> 정량적 개선 성과(R, %나 수치 필수)
   - 결론: 입사 후 공장/현장 기여 방안(L, Cpk, 수율, 램프업 등)
3. 금지: "어릴 적부터 차를 좋아해서" 같은 상투적 클리셰 절대 금지. 감정적 서술 대신 팩트와 공학 메커니즘 중심.
4. 글자수: 약 800~1000자 내외.
5. 응답 JSON 형식:
{
  "content": "작성된 자기소개서 전문",
  "advice": ["작성 팁 1", "작성 팁 2", "면접 대비 포인트 3"]
}`;

    const userMessage = `[지원 회사]: ${job.company} (${job.companyTier})
[지원 직무]: ${job.title} / ${job.engineeringDomain} (${job.department})
[근무지/공장]: ${job.location.city} ${job.location.plantName}
[자소서 문항]: ${prompt.question} (제한: ${prompt.charLimit})
[문항 의도 및 추천 키워드]: ${prompt.recommendedKeywords.join(', ')}
[지원자 전공]: ${candidateMajor}
[보유 공학 툴]: ${keyTools.join(', ')}
[경험 프로젝트명]: ${projectTitle}
[직면했던 기술적 문제/병목]: ${problemFaced}
[본인이 취한 공학적 조치/기법]: ${engineeringAction}
[도출된 정량적 성과]: ${measuredResult}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        { role: 'user', parts: [{ text: `${systemPrompt}\n\n${userMessage}` }] },
      ],
      config: {
        responseMimeType: 'application/json',
      },
    });

    const resultText = response.text || '';
    const parsed = JSON.parse(resultText);
    res.json(parsed);
  } catch (error: any) {
    console.error('Gemini API generation error:', error?.message);
    res.json({
      content: `[데이터 기반 공정 분석과 정밀 조립성 설계로 양산 수율 99%를 달성하다]\n\n지원 직무의 공학적 중요성에 공감하며, 대학 시절 축적한 전공 이론과 툴 활용 능력을 바탕으로 현장 문제를 선제적으로 해결하겠습니다.`,
      advice: [
        '네트워크 지연으로 기본 구조가 생성되었습니다. 세부 프로젝트 수치를 직접 보완해 보세요.',
      ],
    });
  }
});

// Setup Vite middleware in dev or static server in prod
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AutoCareer Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
