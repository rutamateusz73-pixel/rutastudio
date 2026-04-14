// =============================================================
// RUTA STUDIO — script.js
// Wspólny plik dla index.html i faq.html.
// Każdy fragment sprawdza, czy odpowiednie elementy istnieją,
// więc bezpiecznie wykonuje się na obu stronach.
// =============================================================


// ---------- Zegar w status barze (tylko index.html) ----------
const clockEl = document.getElementById('clock');
if (clockEl) {
  const tick = () => {
    const d = new Date();
    const h = String(d.getHours()).padStart(2, '0');
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${h}:${m}:${s}`;
  };
  tick();
  setInterval(tick, 1000);
}


// ---------- Aktywny link w głównej nawigacji ----------
// Podświetla link w menu, gdy jego sekcja jest widoczna na ekranie.
// Pomija linki prowadzące do innych stron (np. faq.html).
const navLinks = document.querySelectorAll('.nav-links a');
if (navLinks.length) {
  const sections = [...navLinks]
    .filter(l => l.getAttribute('href').startsWith('#'))
    .map(l => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  if (sections.length) {
    const navIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = '#' + e.target.id;
          navLinks.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => navIO.observe(s));
  }
}


// ---------- Rozwijanie pytań FAQ (obie strony) ----------
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    q.parentElement.classList.toggle('open');
  });
});


// ---------- Aktywna kategoria w FAQ TOC (tylko faq.html) ----------
const tocLinks = document.querySelectorAll('.faq-toc a');
const cats = document.querySelectorAll('.faq-category');
if (tocLinks.length && cats.length) {
  const tocIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = '#' + e.target.id;
        tocLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === id);
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  cats.forEach(c => tocIO.observe(c));
}


// ---------- Reveal on scroll ----------
// Dodaje klasę .visible elementom, gdy wjeżdżają w ekran.
// Selektor obejmuje elementy z obu stron.
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: .15 });

const revealSelectors = [
  '.section-header',
  '.service',
  '.project',
  '.process-step',
  '.faq-item',
  '.principle',
  '.stat',
  '.faq-category'
].join(', ');

document.querySelectorAll(revealSelectors).forEach(el => {
  el.classList.add('reveal');
  revealIO.observe(el);
});
