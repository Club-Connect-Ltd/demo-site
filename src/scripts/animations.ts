/**
 * Club Connect Demo Site — Animation System
 * Handles scroll reveals, parallax, counters, and carousels.
 */

// ── Scroll Reveal ──────────────────────────────────────────
function initScrollAnimations(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el);
  });
}

// ── Navbar Scroll ──────────────────────────────────────────
function initNavbar(): void {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Hero Parallax ──────────────────────────────────────────
function initParallax(): void {
  const heroPhones = document.querySelector('.hero__phones') as HTMLElement | null;
  const heroSection = document.querySelector('.hero') as HTMLElement | null;
  if (!heroPhones || !heroSection) return;

  let ticking = false;

  const update = () => {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    if (scrollY < heroHeight * 1.5) {
      heroPhones.style.transform = `translateY(${scrollY * 0.12}px)`;
    }
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
}

// ── Counter Animations ─────────────────────────────────────
function initCounters(): void {
  const counters = document.querySelectorAll<HTMLElement>('[data-count-target]');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.countTarget || '0', 10);
          animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

function animateCounter(el: HTMLElement, target: number, duration = 2000): void {
  const start = performance.now();
  const suffix = el.textContent?.replace(/[\d.]/g, '').trim() || '';

  const update = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = `${Math.round(target * eased)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
}

// ── Flow Carousels ─────────────────────────────────────────
function initCarousels(): void {
  document.querySelectorAll('.flow-carousel').forEach((carousel) => {
    const track = carousel.querySelector('.flow-carousel__track') as HTMLElement | null;
    const dotsContainer = carousel.querySelector('.flow-carousel__dots') as HTMLElement | null;
    if (!track || !dotsContainer) return;

    const items = Array.from(track.children) as HTMLElement[];
    if (items.length === 0) return;

    // Create dots
    items.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `dot${i === 0 ? ' is-active' : ''}`;
      dot.setAttribute('aria-label', `Go to screen ${i + 1}`);
      dot.addEventListener('click', () => {
        items[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    // Update dots on scroll
    const updateDots = () => {
      const trackRect = track.getBoundingClientRect();
      const centerX = trackRect.left + trackRect.width / 2;

      let closestIdx = 0;
      let closestDist = Infinity;

      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const dist = Math.abs(itemCenter - centerX);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      });

      dots.forEach((d, i) => d.classList.toggle('is-active', i === closestIdx));
    };

    track.addEventListener('scroll', updateDots, { passive: true });
  });
}

// ── Smooth Scroll for Nav ──────────────────────────────────
function initSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = (link as HTMLAnchorElement).getAttribute('href');
      if (!href || href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ── Initialize ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initNavbar();
  initParallax();
  initCounters();
  initCarousels();
  initSmoothScroll();
});
