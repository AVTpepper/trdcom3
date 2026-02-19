/**
 * Theme Toggle - Manages dark mode persistence with localStorage
 * Add data-theme-toggle attribute to buttons to auto-wire
 */

const THEME_KEY = 'trdcom-theme';
const DARK_CLASS = 'dark';

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;
  
  applyTheme(isDark);
}

function applyTheme(isDark) {
  const html = document.documentElement;
  
  if (isDark) {
    html.classList.add(DARK_CLASS);
    localStorage.setItem(THEME_KEY, 'dark');
    updateThemeIcon('moon');
  } else {
    html.classList.remove(DARK_CLASS);
    localStorage.setItem(THEME_KEY, 'light');
    updateThemeIcon('sun');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains(DARK_CLASS);
  applyTheme(!isDark);
}

function updateThemeIcon(mode) {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  
  const sun = toggle.querySelector('.sun-icon');
  const moon = toggle.querySelector('.moon-icon');
  
  if (mode === 'dark') {
    sun?.classList.add('hidden');
    moon?.classList.remove('hidden');
  } else {
    sun?.classList.remove('hidden');
    moon?.classList.add('hidden');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', toggleTheme);
  }
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem(THEME_KEY)) {
    applyTheme(e.matches);
  }
});
