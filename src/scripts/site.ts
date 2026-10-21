// Petits scripts d'interaction du site. Pas de bibliothèque
// externe : tout est en JavaScript natif. Chaque fonction vérifie que les
// éléments dont elle a besoin existent avant de s'activer, pour qu'un même
// fichier puisse être chargé sur toutes les pages sans erreur.

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// ---------- Pause des animations en boucle quand l'onglet est caché ----------
function setupVisibilityPause(): void {
  document.addEventListener("visibilitychange", () => {
    document.body.classList.toggle("tab-hidden", document.hidden);
  });
}

// ---------- Mot qui change dans le titre ----------
function setupWordRotator(): void {
  const live = document.querySelector<HTMLElement>(".word-rotator-live");
  if (!live || prefersReducedMotion) return;

  const words = Array.from(live.querySelectorAll<HTMLElement>("[data-word]"));
  if (words.length < 2) return;

  let index = 0;
  window.setInterval(() => {
    words[index].classList.remove("is-active");
    index = (index + 1) % words.length;
    words[index].classList.add("is-active");
  }, 2200);
}

// ---------- Apparition au défilement ----------
function setupScrollReveal(): void {
  const items = document.querySelectorAll<HTMLElement>(".reveal");
  if (!items.length) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 },
  );

  items.forEach((el) => observer.observe(el));
}

// ---------- Filtres de projets ----------
function setupFilters(): void {
  const pills = document.querySelectorAll<HTMLButtonElement>("[data-filter]");
  const cards = document.querySelectorAll<HTMLElement>("[data-category]");
  if (!pills.length || !cards.length) return;

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.setAttribute("aria-pressed", "false"));
      pill.setAttribute("aria-pressed", "true");

      const filter = pill.dataset.filter;
      cards.forEach((card) => {
        const show = filter === "tout" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !show);
      });
    });
  });
}

// ---------- Menu mobile ----------
function setupMobileNav(): void {
  const nav = document.querySelector<HTMLElement>(".nav");
  const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
  const panel = document.querySelector<HTMLElement>(".nav-mobile-panel");
  if (!nav || !toggle || !panel) return;

  function close(): void {
    nav?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
  }

  function open(): void {
    nav?.classList.add("is-open");
    toggle?.setAttribute("aria-expanded", "true");
    const firstLink = panel?.querySelector<HTMLElement>("a");
    firstLink?.focus();
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    if (isOpen) close();
    else open();
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", close);
  });

  document.addEventListener("keydown", (event) => {
    if (!nav.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      close();
      toggle.focus();
      return;
    }

    // Garde le focus clavier à l'intérieur du menu tant qu'il est ouvert.
    if (event.key === "Tab") {
      const focusable = panel.querySelectorAll<HTMLElement>("a");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

setupVisibilityPause();
setupWordRotator();
setupScrollReveal();
setupFilters();
setupMobileNav();
