/* =============================================
   nav.js – Navbar + menú lateral compartido
   Se incluye en todas las páginas
   ============================================= */
'use strict';

(function () {
  /* ── RAF throttle scroll ── */
  const navbar = document.getElementById('navbar');
  let rafPending = false;
  window.addEventListener('scroll', () => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
      rafPending = false;
    });
  }, { passive: true });

  /* ── Menú lateral ── */
  const navToggle   = document.getElementById('navToggle');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuPanel   = document.getElementById('menuPanel');
  const menuClose   = document.getElementById('menuClose');

  function openMenu() {
    if (!menuOverlay) return;
    menuOverlay.classList.add('open');
    navToggle && navToggle.classList.add('open');
    navToggle && navToggle.setAttribute('aria-expanded', 'true');
    menuOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const first = menuPanel && menuPanel.querySelector('a');
    if (first) first.focus();
  }

  function closeMenu() {
    if (!menuOverlay) return;
    menuOverlay.classList.remove('open');
    navToggle && navToggle.classList.remove('open');
    navToggle && navToggle.setAttribute('aria-expanded', 'false');
    menuOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    navToggle && navToggle.focus();
  }

  navToggle   && navToggle.addEventListener('click', openMenu);
  menuClose   && menuClose.addEventListener('click', closeMenu);
  menuOverlay && menuOverlay.addEventListener('click', e => {
    if (menuPanel && !menuPanel.contains(e.target)) closeMenu();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menuOverlay && menuOverlay.classList.contains('open')) closeMenu();
  });

  /* ── Marcar ítem activo según página actual ── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  menuOverlay && menuOverlay.querySelectorAll('a[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
    link.addEventListener('click', closeMenu);
  });

  /* ── Toast utility (global) ── */
  window.showToast = function (msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    clearTimeout(toast._t);
    toast.textContent = msg;
    toast.classList.add('show');
    toast._t = setTimeout(() => toast.classList.remove('show'), 3200);
  };

  /* ── Scroll reveal ── */
  if (typeof IntersectionObserver !== 'undefined') {
    const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
  } else {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  }
})();
