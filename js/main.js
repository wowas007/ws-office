/* ============================================================
   SCHMIDT-SABUGAL.DE — Main JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Nav: scroll state --- */
  const nav = document.querySelector('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Mobile menu toggle --- */
  const toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      nav.classList.toggle('menu-open');
    });
    // Close on link click
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        nav.classList.remove('menu-open');
      });
    });
  }

  /* --- Timeline scroll reveal --- */
  const items = document.querySelectorAll('.timeline-item');
  if (items.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(el => obs.observe(el));
  } else {
    items.forEach(el => el.classList.add('visible'));
  }

  /* --- Nav anchor links: zuverlässiger Scroll mit Nav-Offset --- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navH;
      window.scrollTo({ top: top, behavior: 'smooth' });
      history.pushState(null, '', '#' + id);
    });
  });

  /* --- Language switcher: preserve current anchor --- */
  // All three language versions use identical section IDs, so anchor passes through unchanged.
  const langLinks = document.querySelectorAll('.lang-switcher a');

  langLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const hash = window.location.hash.replace('#', '');
      const target = this.getAttribute('href').split('#')[0];
      e.preventDefault();
      if (hash) {
        // Auf Seiten mit Anker: Zielseite + gleicher Anker
        try { sessionStorage.setItem('scrollToAnchor', hash); } catch(err) {}
        window.location.href = target + '#' + hash;
      } else {
        // Auf Seiten ohne Anker (z.B. medien.html): direkt navigieren
        window.location.href = target;
      }
    });
  });

  // On page load: scroll to anchor reliably (fixes Safari scroll-margin-top issues)
  const storedAnchor = (() => { try { return sessionStorage.getItem('scrollToAnchor'); } catch(e) { return null; } })();
  if (storedAnchor) {
    try { sessionStorage.removeItem('scrollToAnchor'); } catch(e) {}
    const target = document.getElementById(storedAnchor);
    if (target) {
      // Small delay ensures page is fully rendered before scrolling
      setTimeout(() => {
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - navH;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }, 100);
    }
  }

});

