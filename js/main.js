/* ============================================================
   SCHMIDT-SABUGAL.DE — Main JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Nav: scroll state + Back-to-top button --- */
  const nav = document.querySelector('nav');

  // Back-to-top Button erstellen
  const btt = document.createElement('button');
  btt.id = 'back-to-top';
  btt.setAttribute('aria-label', 'Nach oben');
  btt.innerHTML = '↑';
  btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(btt);

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
    btt.classList.toggle('visible', window.scrollY > 300);
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

  /* --- Home button: nur auf Unterseiten --- */
  const isSubpage = !(
    window.location.pathname.endsWith('/ws-office/') ||
    window.location.pathname.endsWith('/ws-office/en/') ||
    window.location.pathname.endsWith('/ws-office/es/') ||
    window.location.pathname === '/ws-office'
  );
  if (isSubpage) {
    const homeBtn = document.createElement('a');
    homeBtn.href = window.location.pathname.includes('/en/') ? '/ws-office/en/'
                 : window.location.pathname.includes('/es/') ? '/ws-office/es/'
                 : '/ws-office/';
    homeBtn.title = 'Zur Startseite';
    homeBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
    homeBtn.style.cssText = [
      'position:fixed', 'bottom:32px', 'right:32px', 'z-index:200',
      'width:44px', 'height:44px', 'border-radius:50%',
      'background:rgba(45,74,94,0.55)', 'backdrop-filter:blur(6px)',
      '-webkit-backdrop-filter:blur(6px)',
      'color:rgba(255,255,255,0.85)',
      'display:flex', 'align-items:center', 'justify-content:center',
      'transition:background 0.2s,transform 0.2s',
      'text-decoration:none',
      'box-shadow:0 2px 12px rgba(0,0,0,0.15)'
    ].join(';');
    homeBtn.addEventListener('mouseenter', () => {
      homeBtn.style.background = 'rgba(45,74,94,0.9)';
      homeBtn.style.transform = 'scale(1.08)';
    });
    homeBtn.addEventListener('mouseleave', () => {
      homeBtn.style.background = 'rgba(45,74,94,0.55)';
      homeBtn.style.transform = 'scale(1)';
    });
    document.body.appendChild(homeBtn);
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

