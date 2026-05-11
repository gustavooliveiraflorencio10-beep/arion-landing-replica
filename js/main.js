/* ===== Arion — Interatividade ===== */

// Partículas mágicas no Hero
(function spawnParticles() {
  const container = document.querySelector('.particles');
  if (!container) return;
  const COUNT = 24;
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = (60 + Math.random() * 40) + '%';
    p.style.animationDelay = (Math.random() * 6) + 's';
    p.style.animationDuration = (4 + Math.random() * 5) + 's';
    container.appendChild(p);
  }
})();

// Navegação ativa por scroll
(function activeNavOnScroll() {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.nav-link');
  if (!sections.length) return;
  const setActive = () => {
    const y = window.scrollY + 120;
    let current = sections[0].id;
    sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();

// Carrossel da galeria
(function galleryControls() {
  const scroller = document.getElementById('galleryScroll');
  if (!scroller) return;
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = parseInt(btn.dataset.scroll, 10);
      scroller.scrollBy({ left: dir * 360, behavior: 'smooth' });
    });
  });
})();
