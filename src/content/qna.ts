import type { Photo } from "./types";

export const q1 = {
  question: "최근 3년 동안 참여한 서브컬처 오프라인 행사 횟수를 작성해 주세요.",
  headCopy: "최근 3년간 안 간 행사가 없어요..",
  summary: "증거 자료로 제출합니다.",
  events: [
    "서울 코믹월드 (청주, 부산, 서울 포함)",
    "아코스타",
    "AGF",
    "플레이엑스포",
    "일러스타",
    "일러스타카페",
    "부천만화축제",
    "코스앤코믹 페스티벌",
  ],
  photos: [

  ] as Photo[],
};

export const q2 = {
  question: "본인이 생각하는 오타쿠 레벨(Lv.0~10)과 이유를 작성해 주세요.",
  level: 7,
  maxLevel: 10,
  reasons: [
    "고전 장르, 특히 《블리치》 애정 — 좋아하는 장면을 코스어와 함께 사진으로 재현",
    "최근에는 코스프레 자체에도 관심이 생겨 직접 코스프레 행사(코코페 빅보)에 참여",
    "덕질의 증거를 사진으로 기록하고 보관하는 습관",
    "최근에는 AI 개발과 제가 찍은 사진을 융합해서.. '진짜같은 가짜' 프로젝트를 개인적으로 진행 중이에요. ",
    "ㄴ https://chosikdongmul.github.io/FakeReal/odod/",
    "ㄴ https://chosikdongmul.github.io/FakeReal/odfc/",
    "ㄴ https://chosikdongmul.github.io/macPolio/",
  ],
  photos: [
    { src: "/images/qna/KakaoTalk_20260702_155339238.jpg", caption: "26.06.28 서울랜드" },
  ] as Photo[],
};
