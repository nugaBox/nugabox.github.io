const MENU_LINKS = {
  '프로필': 'https://portfolio.nugabox.com',
  '다이어리': 'https://note.nugabox.com',
};

function handleClickMenu(el) {
  const menuList = document.getElementsByClassName('menu-item');
  [...menuList].forEach((item) => item.classList.remove('menu-selected'));
  el.classList.add('menu-selected');

  const label = el.textContent.trim();
  const url = MENU_LINKS[label];
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

function initWaveSelect() {
  const select = document.getElementById('wave-select');
  if (!select) return;

  select.addEventListener('change', () => {
    const url = select.value;
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
    select.value = '';
  });
}

function initCyworldUrl() {
  const el = document.getElementById('cyworld-url');
  if (!el) return;
  el.textContent = window.location.origin + '/cyworld';
}

document.addEventListener('DOMContentLoaded', () => {
  initWaveSelect();
  initCyworldUrl();
});
