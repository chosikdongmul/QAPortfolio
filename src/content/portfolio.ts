import type { Photo } from "./types";

// 4.3-a 핵심 스킬 딥다이브 (포트폴리오 PDF/PPT 기반)
export type SkillDeepDive = {
  name: string;
  quote: string;
  points: string[];
  photos: Photo[];
};

export const skillDeepDives: SkillDeepDive[] = [
  {
    name: "JIRA",
    quote: "모든 이슈를 자산화하여, 누락 없는 QA 환경을 구축할 수 있습니다.",
    points: [],
    photos: [{ src: "/images/portfolio/jira-slide.jpg", caption: "" }],
  },
  {
    name: "GitHub",
    quote: "명확한 버전 관리 및 브랜치 전략을 수립하여 안정적인 서비스 환경을 구축합니다.",
    points: [],
    photos: [{ src: "/images/portfolio/github-slide.jpg", caption: "" }],
  },
  {
    name: "Unity",
    quote: "에디터 내 직접 테스트 및 데이터 검증",
    points: [],
    photos: [{ src: "/images/portfolio/unity-slide.jpg", caption: "" }],
  },
  {
    name: "Excel",
    quote: "체계적인 테스트 문서 설계를 통해, 업무를 효율화하고 품질 현황을 투명하게 가시화합니다.",
    points: [],
    photos: [{ src: "/images/portfolio/excel-slide.jpg", caption: "" }],
  },
  {
    name: "Photoshop",
    quote: "버그 검수를 넘어, 아트 리소스 수정과 마케팅 이미지 제작을 직접 지원하여 유관 부서의 병목을 해소합니다.",
    points: [],
    photos: [{ src: "/images/portfolio/photoshop-slide.jpg", caption: "" }],
  },
  {
    name: "Diff & Debug Tools",
    quote: "오류의 사전 추적, 사후 분석",
    points: [],
    photos: [{ src: "/images/portfolio/diffdebug-slide.jpg", caption: "" }],
  },
];

export type FeaturedProject = {
  title: string;
  period: string;
  role: string;
  highlight: string;
  photo?: Photo;
};

// 4.3-b Featured Projects
export const featuredProjects: FeaturedProject[] = [
  {
    title: "쿠노이치 키우기",
    period: "2025.02 ~ 2025.11",
    role: "PD",
    highlight: "기획, 마케팅, 배포, 런칭 담당\nQA 교육, 대외 커뮤니케이션 담당",
    photo: { src: "/images/portfolio/project-slide.jpg", caption: "" },
  },
  {
    title: "방치형 RPG 시리즈 (썩쏘 키우기 등)",
    period: "2022 ~ 2024",
    role: "QA",
    highlight: "썩쏘 키우기, 잔다르크 키우기, 철구 키우기 등 6개 타이틀 개발 초기 ~ 런칭 QA 및 지표 분석, Growth Hacking, 유저 공식 카페 운영",
  },
  {
    title: "TERA / Elyon (Unreal Engine)",
    period: "2017.08 ~ 2019.08",
    role: "라이브·개발 QA",
    highlight: "국내 라이브 서비스 QA, 이탈 요인 분석, QA Plan 수립 및 SignOff 수행",
  },
];

// 4.3-c Skills & Tools
export const skills = [
  { category: "QA/협업 툴", items: ["Jira", "Confluence", "Redmine", "Mantis", "Slack"] },
  { category: "버전관리", items: ["GitHub", "SVN", "Perforce", "Fork"] },
  { category: "엔진", items: ["Unreal Engine (TERA, Elyon)", "Unity 2D"] },
  { category: "테스트 도구", items: ["Beyond Compare", "PostMan"] },
  { category: "디자인 툴", items: ["Photoshop", "Figma"] },
];

// 4.3-d 대외활동 상세 (정부사업 평가/자문 위원)
export type ExternalAdvisory = {
  role: string;
  points: string[];
  projectName: string;
  taskName: string;
  advisoryDetail: string;
  photo?: Photo;
};

export const externalAdvisory: ExternalAdvisory = {
  role: "정부사업 평가/자문 위원",
  points: [
    "목표 달성률 검증: 초기 의도 및 요구사항 대비, 실제 개발 산출물 완성도 검증 의견을 제출합니다.",
    "리스크 관리 및 개선점 도출: 이슈나 지연 사유를 분석하고, 다음 페이즈를 위한 피드백을 도출합니다.",
  ],
  projectName: "우수기업연구소육성사업(ATC+)",
  taskName: "실감형 콘텐츠 공유 서비스를 위한 그래프 기반 지능형 메타버스 엔진 개발",
  advisoryDetail: "메타버스 3D 에셋 관리 현황과 동적 로드 및 조합 가능한 비율 검토",
  photo: { src: "/images/portfolio/advisory-slide.jpg", caption: "" },
};

// 4.3-e Achievements
export const achievements = [
  { name: "ISTQB (International Software Testing Qualification Board)", date: "2016.08" },
  { name: "(주)위세아이텍 ATC+ 정부사업 자문 (외부 전문가)", date: "2023 - 2026" },
];
