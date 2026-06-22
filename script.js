const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const compactMotion = window.matchMedia("(max-width: 800px)").matches;
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");
const menuLinks = menu?.querySelectorAll("a") ?? [];
const form = document.querySelector("[data-demo-form]");
const status = document.querySelector("[data-form-status]");
const year = document.querySelector("[data-year]");

const closeMenu = () => {
  document.body.classList.remove("menu-open");
  menu?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Abrir menú");
};

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  document.body.classList.toggle("menu-open", !open);
  menu?.classList.toggle("open", !open);
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.setAttribute("aria-label", open ? "Abrir menú" : "Cerrar menú");
});

menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener(
  "scroll",
  () => header?.classList.toggle("is-compact", window.scrollY > 24),
  { passive: true },
);

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent =
    "Versión de demostración: la solicitud no se ha enviado ni almacenado.";
});

if (year) year.textContent = new Date().getFullYear();

const splitWords = () => {
  document.querySelectorAll(".split-reveal").forEach((element) => {
    if (element.dataset.split) return;
    const words = element.textContent.trim().split(/\s+/);
    element.innerHTML = words
      .map((word) => `<span class="word"><span class="word-inner">${word}&nbsp;</span></span>`)
      .join("");
    element.dataset.split = "true";
  });
};

splitWords();

if (!reduceMotion && window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".intro-reveal", { opacity: 0, y: 18 });
  gsap.set(".hero .word-inner", { yPercent: 110 });

  gsap.timeline({ defaults: { ease: "power3.out" } })
    .to(".intro-reveal", { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.25)
    .to(".hero .word-inner", {
      yPercent: 0,
      duration: compactMotion ? 0.65 : 0.95,
      stagger: compactMotion ? 0.012 : 0.018,
    }, 0.35);

  window.setTimeout(() => {
    gsap.set(".intro-reveal", { clearProps: "opacity,transform" });
    gsap.set(".hero .word-inner", { clearProps: "opacity,transform" });
  }, 1800);

  gsap.from(".reveal-image img", {
    yPercent: 12,
    scale: 1.08,
    duration: 1.25,
    ease: "power3.out",
    scrollTrigger: { trigger: ".reveal-image", start: "top 88%", once: true },
  });

  document.querySelectorAll(".split-reveal:not(.hero-title)").forEach((element) => {
    gsap.from(element.querySelectorAll(".word-inner"), {
      yPercent: 110,
      opacity: 0,
      duration: compactMotion ? 0.52 : 0.72,
      stagger: compactMotion ? 0.01 : 0.016,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 84%", once: true },
    });
  });

  document.querySelectorAll(".reveal-copy").forEach((element) => {
    gsap.from(element, {
      y: compactMotion ? 14 : 24,
      opacity: 0,
      duration: compactMotion ? 0.5 : 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 88%", once: true },
    });
  });

  if (!compactMotion) {
    gsap.to(".section-number", {
      yPercent: -8,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.6,
      },
    });

    gsap.utils.toArray(".image-slice img, .profile-image img").forEach((image) => {
      gsap.to(image, {
        yPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: image.closest("section") || image,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });
  }
} else {
  document.querySelectorAll(".word-inner").forEach((line) => {
    line.style.transform = "none";
  });
  document.querySelectorAll(".intro-reveal").forEach((element) => {
    element.style.opacity = "1";
  });
}
