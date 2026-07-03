# 김주혁 포트폴리오 — 에피드게임즈 지원용 페이지

Astro + Tailwind CSS 4 기반 정적 사이트. Home / Career / Portfolio / Q&A 4개 탭 구조.

## 1. 로컬 실행

```bash
npm install
npm run dev
```

`http://localhost:4321` 에서 확인. (이 저장소는 npm install을 거치지 않은 소스만
포함되어 있습니다 — 최초 1회 npm install이 필요합니다.)

## 2. 어드민 페이지로 텍스트·사진 관리하기 (권장)

**`admin.html`** 파일을 더블클릭해서 브라우저로 열면, 코드를 몰라도 Home·Career·
Portfolio·Q&A 전 영역의 문구/사진/목록을 폼으로 편집할 수 있습니다.

사용 순서:
1. `admin.html`을 브라우저로 엽니다 (배포되는 사이트가 아니라 로컬 편집 도구입니다).
2. 탭을 이동하며 텍스트를 수정하고, 항목 추가/삭제 버튼으로 경력·프로젝트·사진 등을 관리합니다.
   입력 내용은 브라우저에 자동 저장되어 새로고침해도 유지됩니다.
3. 사진은 파일 선택으로 미리보기만 가능합니다 — 실제 파일은 안내된 경로
   (예: `public/images/qna/파일명.jpg`)에 직접 복사해 넣어야 사이트에 보입니다.
4. 각 탭 하단의 **"코드 생성 → 복사하기"** 버튼을 누르면 해당 `src/content/*.ts` 파일
   전체 내용이 클립보드에 복사됩니다. 이걸 그대로 파일에 붙여넣기(전체 교체)하면 됩니다.
5. 작업이 끝나면 하단 "전체 내용 JSON 다운로드"로 백업해두는 것을 권장합니다
   (브라우저 저장공간은 캐시 삭제 시 사라질 수 있습니다).
6. `admin.html`은 로컬 편집 전용 도구이니 GitHub Pages 등에는 배포하지 마세요
   (Astro 빌드 대상에 포함되지 않아 `npm run build` 결과물에는 자동으로 안 들어갑니다).

## 3. 텍스트 파일을 직접 고치고 싶다면

모든 문구는 `src/content/` 안 파일에 모여 있습니다. 어드민 없이도 따옴표 안의
텍스트만 바꾸면 사이트에 바로 반영됩니다.

| 파일 | 담당 탭 |
|---|---|
| `src/content/site.ts` | Home, Footer 연락처, 공통 네비게이션, 프로필 사진 경로 |
| `src/content/career.ts` | Career (경력 타임라인, 학력, 대외활동) |
| `src/content/portfolio.ts` | Portfolio (프로젝트, 테스트케이스 문서, 스킬, 자격) |
| `src/content/qna.ts` | Q&A (지원서 질문 답변, 사진) |
| `src/content/types.ts` | 공용 타입 (Photo) |

## 4. 사진 / 문서 추가하기

- Home 프로필 사진: `public/images/home/`에 파일을 넣고 `site.ts`의 `personal.photo` 경로 연결
- Career 대외활동 사진: `public/images/career/`에 파일을 넣고 `career.ts`의
  `externalActivities` 항목 안 `photos` 배열에 추가
- Q&A 탭 사진: `public/images/qna/`에 파일을 넣고 `qna.ts`의 `photos` 배열에 추가
- 테스트 케이스 문서: `public/images/portfolio/`에 파일을 넣고
  `portfolio.ts`의 `testCaseDoc` 값을 `ready: true`로 바꾸고 `fileUrl` 연결
- 각 폴더 안 README.md에 같은 안내가 있습니다.
- 사진이 없으면 자동으로 점선 테두리 플레이스홀더가 표시됩니다.

## 5. 빌드

```bash
npm run build
```

`dist/` 폴더에 정적 파일이 생성됩니다. `npm run preview`로 로컬에서 빌드 결과를 미리 볼 수 있습니다.

## 6. GitHub Pages 배포

1. GitHub에 새 저장소 생성 (예: `juhyuck-portfolio`) 후 이 폴더를 push
2. **astro.config.mjs**의 `site`/`base` 값을 본인 GitHub Pages 주소에 맞게 수정
   - `username.github.io/저장소명` 형태(프로젝트 사이트) → `base: '/저장소명'` 유지
   - `username.github.io` 루트로 배포 → `base` 줄 삭제
3. 저장소 Settings → Pages → Build and deployment → Source를 **GitHub Actions**로 설정
4. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드·배포합니다
   (이미 포함되어 있어 별도 설정 없이 동작합니다)

Vercel을 쓰고 싶다면 저장소만 연결하면 Astro를 자동 인식해 별도 설정 없이 배포됩니다.

## 7. 참고

- 이 프로젝트는 네트워크가 제한된 환경에서 작성되어 `npm install` / `npm run build`를
  실제로 실행해 검증하지 못했습니다. 로컬에서 `npm install && npm run build`로
  먼저 확인해 주세요. 에러가 나면 메시지를 알려주시면 바로 고쳐드리겠습니다.
- 연락처(이메일/전화번호)는 요청하신 대로 Footer에 텍스트 그대로 노출되어 있습니다.
  스팸 우려가 있다면 `src/components/Footer.astro`를 문의폼으로 교체할 수 있습니다.
- `admin.html`은 서버·로그인 없이 순수 로컬 편집기입니다. 사진 파일 자체를 자동으로
  저장하지는 못하니(브라우저 보안 제약), 실제 파일은 안내된 폴더에 직접 복사해주세요.

<!-- 마지막 배포 재시도: 2026-07-03 01:28 UTC -->
