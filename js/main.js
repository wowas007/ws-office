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

  /* --- Language switcher: preserve current anchor --- */
  const langLinks = document.querySelectorAll('.lang-switcher a');
  const anchorMap = {
    // DE anchors -> EN/ES equivalents
    'ueber':      { en: 'tags',    es: 'tags'     },
    'ueber-text': { en: 'about',   es: 'sobre'    },
    'vita':       { en: 'vita',    es: 'vita'     },
    'medien':     { en: 'media',   es: 'medios'   },
    'kontakt':    { en: 'contact', es: 'contacto' },
    // EN anchors -> DE/ES equivalents
    'tags':    { de: 'ueber',   es: 'tags'     },
    'about':   { de: 'ueber-text', es: 'sobre'  },
    'media':   { de: 'medien',  es: 'medios'   },
    'contact': { de: 'kontakt', es: 'contacto' },
    // ES anchors -> DE/EN equivalents
    'sobre':    { de: 'ueber-text', en: 'about'  },
    'medios':   { de: 'medien',     en: 'media'  },
    'contacto': { de: 'kontakt',    en: 'contact'},
  };

  function getCurrentLang() {
    const path = window.location.pathname;
    if (path.includes('/en/')) return 'en';
    if (path.includes('/es/')) return 'es';
    return 'de';
  }

  langLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;
      const targetLang = this.getAttribute('href').includes('/en/') ? 'en'
                       : this.getAttribute('href').includes('/es/') ? 'es' : 'de';
      let targetAnchor = hash;
      if (anchorMap[hash] && anchorMap[hash][targetLang]) {
        targetAnchor = anchorMap[hash][targetLang];
      }
      if (targetAnchor) {
        e.preventDefault();
        // Store anchor in sessionStorage so target page can scroll on load
        try { sessionStorage.setItem('scrollToAnchor', targetAnchor); } catch(err) {}
        window.location.href = this.getAttribute('href').split('#')[0] + '#' + targetAnchor;
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

