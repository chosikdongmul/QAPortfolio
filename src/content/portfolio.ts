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
    points: [
      "맞춤형 Workflow 설계: 프로젝트 특성에 최적화된 이슈 상태와 전환 흐름을 직접 세팅합니다.",
      "이슈 보고 프로세스 최적화: 리포터마다 기입 정보가 누락되거나 상이할 수 있는 점을 최소화하는 프로세스를 적용합니다. 리포트 내 이슈의 최소 정보가 보장되며, 레이블을 통해 이슈를 더 쉽게 추적할 수 있습니다.",
    ],
    photos: [
      { src: "/images/portfolio/jira-workflow.jpg", caption: "맞춤형 Workflow 설계" },
      { src: "/images/portfolio/jira-process.jpg", caption: "이슈 보고 프로세스 최적화" },
    ],
  },
  {
    name: "GitHub",
    quote: "명확한 버전 관리 및 브랜치 전략을 수립하여 안정적인 서비스 환경을 구축합니다.",
    points: [
      "안전한 서비스를 위한 브랜치 전략: 안정적인 라이브 서비스를 위해 Code Freeze된 버전의 Dev 빌드에서 테스트를 진행합니다. 테스트 마감 시, 안전이 확보된 Dev Branch에서 Live 브랜치를 딴 후 서비스합니다.",
      "버그 수정을 위한 머지 전략 — 라이브 환경에서 발견된 버그: Master 최신 / 서비스 중인 버전의 Dev에서 테스트 후, 라이브 패치에 반영합니다.",
      "버그 수정을 위한 머지 전략 — Master 환경에서 발견된 버그: Live에 영향 없는 신규 시스템 버그는 Master 버전에만 반영합니다.",
    ],
    photos: [],
  },
  {
    name: "Unity",
    quote: "에디터 내 직접 테스트 및 데이터 검증",
    points: [
      "에디터 내 데이터 변경: Hierarchy 및 Inspector를 통해 데이터를 직접 수정하는 방식으로 테스트, 빌드 대기 시간을 최소화합니다.",
      "해상도(Resolution) 변경으로 UI 검수: 다양한 해상도와 화면 비율을 시뮬레이션하여 UI 구성 등을 테스트합니다.",
      "테스트에 필요한 이미지, 사운드, Prefab 등 리소스를 직접 추출하여 검증합니다.",
    ],
    photos: [
      { src: "/images/portfolio/unity-editor-1.jpg", caption: "Unity 에디터 내 데이터/UI 검수" },
      { src: "/images/portfolio/unity-editor-2.jpg", caption: "해상도별 UI 테스트" },
    ],
  },
  {
    name: "Excel",
    quote: "체계적인 테스트 문서 설계를 통해, 업무를 효율화하고 품질 현황을 투명하게 가시화합니다.",
    points: [
      "테스트 시뮬레이터 제작: 기획 검증 및 인게임 테스트 검증을 위해 테스트 시뮬레이터를 제작하며, VLOOKUP / MOD 등 다양한 함수를 활용합니다.",
      "테스트 동선 최적화: ISTQB 산업 표준에 의거한 테스트를 설계합니다. 불필요한 동선을 최소화한 상태전이 기반 테스트 설계로 전체 테스트 리드 타임을 크게 단축합니다.",
      "테스트 시각화: 전체 TC 대비 각 상태를 실시간으로 분류·집계하고, 각 항목의 비율을 수치화하여 유관 부서에 현재 시스템의 품질 현황을 한눈에 파악할 수 있게 합니다.",
    ],
    photos: [{ src: "/images/portfolio/excel-simulator.jpg", caption: "테스트 시뮬레이터 / 테스트 시각화" }],
  },
  {
    name: "Photoshop",
    quote: "버그 검수를 넘어, 아트 리소스 수정과 마케팅 이미지 제작을 직접 지원하여 유관 부서의 병목을 해소합니다.",
    points: [
      "마케팅 / 프로모션 이미지 제작 및 편집을 직접 지원합니다.",
      "마케팅 에셋 퀄리티 컨트롤: 앱 마켓 썸네일, 배너 등 이미지의 해상도, 레이아웃, 오탈자를 검수하고 필요 시 직접 수정합니다.",
      "그래픽 리소스 자체 수급: 리사이징, 텍스트 교체 등 아트 리소스가 낭비되지 않도록 즉각 편집이 가능합니다.",
    ],
    photos: [
      { src: "/images/portfolio/photoshop-1.jpg", caption: "마케팅 이미지 제작/편집" },
      { src: "/images/portfolio/photoshop-2.jpg", caption: "마케팅 에셋 퀄리티 컨트롤" },
      { src: "/images/portfolio/photoshop-3.jpg", caption: "그래픽 리소스 편집" },
      { src: "/images/portfolio/photoshop-4.jpg", caption: "그래픽 리소스 편집" },
      { src: "/images/portfolio/photoshop-5.jpg", caption: "그래픽 리소스 편집" },
    ],
  },
  {
    name: "Diff & Debug Tools",
    quote: "오류의 사전 추적, 사후 분석",
    points: [
      "사전 추적(무결성 확보): Compare 툴을 활용하여 수정되지 않아야 하는 데이터 테이블이나 코드가 의도치 않게 변경되었는지 검수하고, GitHub 커밋 로그의 변경 사항을 직접 리뷰하여 형상 관리를 교차 검증합니다.",
      "사후 분석(안드로이드 환경 크래시 분석): 빌드된 게임에서 오류 발생 시 Android Studio를 연결하여 어느 부분에서 크래시가 발생했는지 재현 및 로그 추출이 가능합니다.",
      "사후 분석(Unity 에디터 디버깅): Unity 환경 내에서 발생하는 런타임 에러 등 이슈를 Console 로그를 통해 추적하여, 개발팀에 명확한 재현 경로와 발생 지점을 공유합니다.",
    ],
    photos: [],
  },
];

export type FeaturedProject = {
  title: string;
  period: string;
  role: string;
  highlight: string;
};

// 4.3-b Featured Project
export const featuredProjects: FeaturedProject[] = [
  {
    title: "쿠노이치 키우기 (방치형 RPG)",
    period: "2025.02 ~ 2025.11",
    role: "Director & Lead QA",
    highlight: "프로젝트 총괄. 개발 시작부터 런칭까지 모든 개발 파이프라인을 통제했습니다.",
  },
];

// 4.3-c 테스트 케이스 문서 뷰어
export const testCaseDoc = {
  ready: false,
  title: "테스트 케이스 문서 (준비 중)",
  description: "DWGames 방치형 RPG 중 1개 프로젝트의 테스트 케이스 문서를 준비 중입니다. NDA 검토 및 민감정보 제거 후 업로드 예정입니다.",
  fileUrl: "",
  fileType: "pdf" as "pdf" | "xlsx",
};

// 4.3-d Skills & Tools
export const skills = [
  { category: "QA/협업 툴", items: ["Jira", "Confluence", "Redmine", "Mantis", "Slack"] },
  { category: "버전관리", items: ["GitHub", "SVN", "Perforce", "Fork"] },
  { category: "엔진", items: ["Unreal Engine (TERA, Elyon)", "Unity 2D"] },
  { category: "테스트 도구", items: ["Beyond Compare", "PostMan"] },
  { category: "디자인 툴", items: ["Photoshop", "Figma"] },
];

// 4.3-e 대외활동 상세 (정부사업 평가/자문 위원)
export type ExternalAdvisory = {
  role: string;
  points: string[];
  projectName: string;
  taskName: string;
  advisoryDetail: string;
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
};

// 4.3-f Achievements
export const achievements = [
  { name: "ISTQB (International Software Testing Qualification Board)", date: "2016.08" },
  { name: "(주)위세아이텍 ATC+ 정부사업 자문 (외부 전문가)", date: "2023 - 2026" },
];
