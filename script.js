(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
})();

const themeToggle = document.getElementById('themeToggle');
function setTheme(next) {
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
  themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
}

(function wireThemeToggle() {
  // set initial icon state
  const current = document.documentElement.getAtt