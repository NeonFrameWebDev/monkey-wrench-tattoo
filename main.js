/* Monkey Wrench Tattoo Co., minimal site JS.
   Nav blur on scroll, mobile menu overlay, smooth anchors. */
(function () {
  'use strict';

  function $(q, scope) { return (scope || document).querySelector(q); }
  function $$(q, scope) { return Array.from((scope || document).querySelectorAll(q)); }

  /* ---- nav blur on scroll ---- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    var y = window.scrollY || window.pageYOffset;
    if (y > 24) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- mobile menu ---- */
  var menu = document.getElementById('menu');
  var menuBtn = document.getElementById('menuBtn');
  var menuClose = document.getElementById('menuClose');

  function openMenu() {
    if (!menu) return;
    menu.classList.add('is-open');
    menu.inert = false;
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('is-open');
    menu.inert = true;
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);
  if (menu) {
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu && menu.classList.contains('is-open')) closeMenu();
  });

  /* ---- smooth anchor scroll (offset for sticky nav) ---- */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (!id || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

})();
