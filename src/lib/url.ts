// GitHub Pages 프로젝트 사이트(base 경로)에서도 링크가 깨지지 않도록 돕는 헬퍼.
// astro.config.mjs의 base 값이 자동으로 적용됩니다.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // 예: "/juhyuck-portfolio/"
  if (path === "/") return base;
  return base.replace(/\/$/, "") + path;
}
