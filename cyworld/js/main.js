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

function initMiniroomDrag() {
  const viewport = document.getElementById('miniroom-viewport');
  if (!viewport) return;

  const src = viewport.getAttribute('data-src');
  if (!src) return;

  viewport.style.backgroundImage = `url("${src}")`;

  const img = new Image();
  img.src = src;

  let naturalW = 0;
  let naturalH = 0;
  let posX = 0;
  let posY = 0;
  let maxX = 0;
  let maxY = 0;

  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

  function recalc() {
    if (!naturalW || !naturalH) return;
    const rect = viewport.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;
    if (!cw || !ch) return;

    const scale = Math.max(cw / naturalW, ch / naturalH) * 1.6; // cover + zoom
    const coverW = naturalW * scale;
    const coverH = naturalH * scale;

    maxX = Math.max(0, coverW - cw);
    maxY = Math.max(0, coverH - ch);

    posX = clamp(posX, 0, maxX);
    posY = clamp(posY, 0, maxY);

    viewport.style.backgroundSize = `${coverW}px ${coverH}px`;
    viewport.style.backgroundPosition = `${-posX}px ${-posY}px`;
  }

  img.addEventListener('load', () => {
    naturalW = img.naturalWidth;
    naturalH = img.naturalHeight;

    // Start centered
    const rect = viewport.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;
    const scale = Math.max(cw / naturalW, ch / naturalH) * 1.6;
    const coverW = naturalW * scale;
    const coverH = naturalH * scale;
    maxX = Math.max(0, coverW - cw);
    maxY = Math.max(0, coverH - ch);
    posX = maxX / 2;
    posY = maxY / 2;
    viewport.style.backgroundSize = `${coverW}px ${coverH}px`;
    viewport.style.backgroundPosition = `${-posX}px ${-posY}px`;
  });

  window.addEventListener('resize', recalc, { passive: true });

  let isDown = false;
  let startX = 0;
  let startY = 0;
  let startPosX = 0;
  let startPosY = 0;

  viewport.addEventListener('pointerdown', (e) => {
    isDown = true;
    viewport.classList.add('is-dragging');
    viewport.setPointerCapture(e.pointerId);
    startX = e.clientX;
    startY = e.clientY;
    startPosX = posX;
    startPosY = posY;
  });

  viewport.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // Dragging should move the image with the pointer
    posX = clamp(startPosX - dx, 0, maxX);
    posY = clamp(startPosY - dy, 0, maxY);
    viewport.style.backgroundPosition = `${-posX}px ${-posY}px`;
  });

  function endDrag() {
    isDown = false;
    viewport.classList.remove('is-dragging');
  }

  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);
  viewport.addEventListener('pointerleave', endDrag);
}

document.addEventListener('DOMContentLoaded', () => {
  initWaveSelect();
  initCyworldUrl();
  initMiniroomDrag();
});
