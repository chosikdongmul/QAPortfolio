import type { Photo } from "./types";

export type CareerEntry = {
  company: string;
  team: string;
  role: string;
  period: string;
  duration: string;
  engine?: string;
  jobTitleEn?: string;
  project?: string;
  projects?: string[];
  responsibilities: string[];
};

export const career: CareerEntry[] = [
  {
    company: "DWGames",
    team: "개발팀",
    role: "PD",
    period: "2025.02 ~ 2025.11",
    duration: "0년 10개월",
    engine: "Unity 2D",
    jobTitleEn: "PD",
    project: "쿠노이치 키우기",
    responsibilities: [
      "기획 전반 (BM, 콘텐츠, 시스템, 재화 밸런스)",
      "일정 전반 (개발·아트 일정, 런칭, 업데이트)",
      "부서 간 협업 (아트, 개발)",
      "스토어 앱 등록 및 상품 등록, 배포 전반 담당",
      "QA 인원 및 품질 관리",
    ],
  },
  {
    company: "DWGames",
    team: "QA",
    role: "사원",
    period: "2022.09 ~ 2024.08",
    duration: "2년 0개월",
    engine: "Unity 2D",
    responsibilities: [
      "개발/라이브 서비스 QA (유니티 기반 테스트)",
      "JIRA 도입 및 SLACK 연동, 프로세스/협업 도구 개선",
      "퍼블리셔(Backnd) 커뮤니케이션",
      "BM 상품 기획, 게임 데이터 테이블 구조 수립",
      "밸런스/시스템/컨텐츠 기획",
      "소프트런칭 및 지표 분석·개선 경험",
    ],
    projects: [
      "썩쏘 키우기 (2022)",
      "잔다르크 키우기 (2022)",
      "철구 키우기 (2023)",
      "썩쏘 또 키우기 (2023)",
      "좀많이 키우기 (2024)",
      "쿠노이치 키우기 (2025)",
    ],
  },
  {
    company: "게임덱스",
    team: "QA",
    role: "사원",
    period: "2020.02 ~ 2020.11",
    duration: "0년 10개월",
    responsibilities: [
      "모바일 전략 게임 테스팅 (체크리스트 작성/테스트)",
      "호환성 테스트, 피처드 가이드 테스트, 런칭 테스트, 서비스 QA",
      "코딩 교육용 소프트웨어+하드웨어(교구) QA",
    ],
  },
  {
    company: "크래프톤",
    team: "테라PC / 플랫폼QA",
    role: "사원",
    period: "2017.08 ~ 2019.08",
    duration: "2년",
    engine: "Unreal Engine (TERA, Elyon)",
    responsibilities: [
      "국내 라이브·개발 QA Test",
      "사업 부서와 이탈 요인 분석 가설 검증",
      "QA Plan 수립 (Man Day 기준 리소스 관리, WorkDay 1일 초과 방지)",
      "해외 QA를 위한 빌드 관리 보조, 신규 사원 가이드 문서 작성",
      "사내 그룹웨어(HRM, 전자결재, 출퇴근관리, 계정관리, 통합게임런처) QA 다수 수행",
      "SignOff 프로세스 및 QA 상태 정기 보고",
      "런칭 후 사용자 피드백/버그 추적 (Service QA)",
    ],
  },
  {
    company: "준인터",
    team: "QA팀",
    role: "사원",
    period: "2017.05 ~ 2017.08",
    duration: "0년 4개월",
    responsibilities: [
      "모바일 MMORPG(쏘판타지) 구글 피처드 가이드 기준 라이브 QA",
      "테스트 케이스/체크리스트 작성 및 분배, 블랙박스 테스팅",
    ],
  },
];

export const education = {
  school: "동광고등학교",
  period: "2011~2014",
  status: "졸업",
};

export type ExternalActivity = {
  name: string;
  period: string;
  description: string;
  photos: Photo[];
};

export const externalActivities: ExternalActivity[] = [
  {
    name: "(주)위세아이텍 ATC+ 정부사업 자문 (외부 전문가)",
    period: "2023 - 2026",
    description: "'실감형 콘텐츠 공유 서비스를 위한 그래프 기반 지능형 메타버스 엔진 개발' 분야의 개발 및 연구 결과의\n평가를 위해 외부전문가로 계약하여 3년간 자문활동하였습니다. (2026년은 TTA 기관 평가로 예정되어있습니다.)",
    photos: [
      { src: "/images/career/KakaoTalk_20260702_153905315.jpg", caption: "2023 (주)위세아이텍 사옥" },
      { src: "/images/career/KakaoTalk_20260702_153905315_01.jpg", caption: "2023 (주)위세아이텍 사옥 계약일" },
      { src: "/images/career/1. 계약서_위세아이텍_김주혁.jpg", caption: "계약서" },
    ],
  },
];
