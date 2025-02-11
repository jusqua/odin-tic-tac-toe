function main() {
  document.getElementById('change-theme').addEventListener('click', toggleTheme);

  if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    toggleTheme();
}

function toggleTheme() {
  const button = document.getElementById('change-theme');
  button.classList.toggle('ph-sun');
  button.classList.toggle('ph-moon');
  document.documentElement.classList.toggle('dark');
}

window.addEventListener('DOMContentLoaded', main);
