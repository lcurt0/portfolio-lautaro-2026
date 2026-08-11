// Theme toggle (dark / light)
const themeToggle = document.querySelector('.theme-toggle');
const rootEl = document.documentElement;

function setTheme(theme) {
  rootEl.setAttribute('data-theme', theme);
  try { localStorage.setItem('theme', theme); } catch (e) {}
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = rootEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Hover preview on project cards (agency-style, desktop only)
const hoverPreview = document.getElementById('hoverPreview');
const previewCards = document.querySelectorAll('.project-card[data-preview]');
const workSection = document.getElementById('work');
const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (hoverPreview && previewCards.length && workSection && canHover) {
  const previewImg = hoverPreview.querySelector('img');
  const offset = { x: 28, y: -24 };
  let targetX = 0, targetY = 0, currentX = 0, currentY = 0, raf = null;
  let activeCard = null;

  function render() {
    currentX += (targetX - currentX) * 0.2;
    currentY += (targetY - currentY) * 0.2;
    hoverPreview.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    raf = requestAnimationFrame(render);
  }

  function hide() {
    activeCard = null;
    hoverPreview.classList.remove('is-visible');
  }

  workSection.addEventListener('mousemove', (e) => {
    targetX = e.clientX + offset.x;
    targetY = e.clientY + offset.y;

    const card = e.target.closest('.project-card[data-preview]');
    if (!card) {
      if (activeCard) hide();
      return;
    }
    if (card !== activeCard) {
      activeCard = card;
      previewImg.setAttribute('src', card.getAttribute('data-preview'));
    }
    hoverPreview.classList.add('is-visible');
    if (!raf) raf = requestAnimationFrame(render);
  });

  workSection.addEventListener('mouseleave', hide);
}
