// 텍스트 안의 URL을 자동으로 클릭 가능한 링크로 바꿔줍니다.
// set:html과 함께 사용하므로 먼저 HTML 특수문자를 이스케이프한 뒤 링크를 감쌉니다.
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const URL_RE = /(https?:\/\/[^\s<]+)/g;

export function linkifyHtml(text: string): string {
  const escaped = escapeHtml(text);
  return escaped.replace(
    URL_RE,
    (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-accent-400 underline underline-offset-2 hover:text-accent-500">${url}</a>`
  );
}
