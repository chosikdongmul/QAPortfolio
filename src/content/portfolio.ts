export type FeaturedProject = {
  title: string;
  period: string;
  role: string;
  highlight: string;
};

// 4.3-a Featured Projects
export const featuredProjects: FeaturedProject[] = [
  {
    title: "쿠노이치 키우기",
    period: "2025.02 ~ 2025.11",
    role: "PD",
    highlight: "기획, 마케팅, 배포, 런칭 담당\nQA 교육, 대외 커뮤니케이션 담당",
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

// 4.3-b 테스트 케이스 문서 뷰어
export const testCaseDoc = {
  ready: false,
  title: "테스트 케이스 문서 (준비 중)",
  description: "DWGames 방치형 RPG 중 1개 프로젝트의 테스트 케이스 문서를 준비 중입니다. NDA 검토 및 민감정보 제거 후 업로드 예정입니다.",
  fileUrl: "",
  fileType: "pdf" as "pdf" | "xlsx",
};

// 4.3-c Skills & Tools
export const skills = [
  { category: "QA/협업 툴", items: ["Jira", "Confluence", "Redmine", "Mantis", "Slack"] },
  { category: "버전관리", items: ["GitHub", "SVN", "Perforce", "Fork"] },
  { category: "엔진", items: ["Unreal Engine (TERA, Elyon)", "Unity 2D"] },
  { category: "테스트 도구", items: ["Beyond Compare", "PostMan"] },
  { category: "디자인 툴", items: ["Photoshop", "Figma"] },
];

// 4.3-d Achievements
export const achievements = [
  { name: "ISTQB (International Software Testing Qualification Board)", date: "2016.08" },
  { name: "(주)위세아이텍 ATC+ 정부사업 자문 (외부 전문가)", date: "2023 - 2026" },
];
