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
  () => header?.classList.toggle("is-compact", window.scrollY > 40),
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

  gsap.set(".lighthouse-beam", { opacity: 0 });
  gsap.set(".intro-kicker", { opacity: 0 });
  gsap.set(".title-line > span", { yPercent: 110 });
  gsap.set(".intro-note", { opacity: 0, y: 18 });
  gsap.set(".intro-actions", { opacity: 0, y: 18 });
  gsap.set(".intro-author", { opacity: 0 });

  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
  intro
    .to(".lighthouse-beam", { opacity: compactMotion ? 0.08 : 0.12, duration: 1.8 }, 0.35)
    .to(".intro-kicker", { opacity: 1, duration: 0.7 }, 0.75)
    .to(".title-line > span", {
      yPercent: 0,
      duration: compactMotion ? 0.8 : 1.05,
      stagger: 0.1,
    }, 0.9)
    .to(".intro-note", { opacity: 1, y: 0, duration: 0.8 }, 1.45)
    .to(".intro-actions", { opacity: 1, y: 0, duration: 0.7 }, 1.58)
    .to(".intro-author", { opacity: 1, duration: 0.8 }, 1.7);

  window.setTimeout(() => {
    gsap.set(".intro-kicker,.intro-note,.intro-actions,.intro-author", {
      clearProps: "opacity,transform",
    });
    gsap.set(".title-line > span", { clearProps: "transform" });
  }, 2600);

  gsap.to(".lighthouse-beam", {
    rotate: compactMotion ? 3 : 6,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    transformOrigin: "84% 44%",
  });

  if (!compactMotion) {
    document.querySelectorAll("[data-parallax]").forEach((element) => {
      gsap.to(element, {
        yPercent: Number(element.dataset.parallax) * 0.7,
        ease: "none",
        scrollTrigger: {
          trigger: element.closest("section") || element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });
  }

  document.querySelectorAll(".split-reveal").forEach((element) => {
    gsap.from(element.querySelectorAll(".word-inner"), {
      yPercent: 115,
      opacity: 0,
      duration: compactMotion ? 0.55 : 0.75,
      stagger: compactMotion ? 0.012 : 0.02,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 82%", once: true },
    });
  });

  document.querySelectorAll(".reveal-copy").forEach((element) => {
    gsap.from(element, {
      y: compactMotion ? 16 : 24,
      opacity: 0,
      filter: compactMotion ? "none" : "blur(5px)",
      duration: compactMotion ? 0.6 : 0.85,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 86%", once: true },
    });
  });

  gsap.to(".pulse-orbit i", {
    scale: 1.08,
    opacity: 0.35,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".chapter-dark",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  gsap.from(".focus-ring", {
    scale: 0.65,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".chapter-focus",
      start: "top 65%",
      end: "center center",
      scrub: 1,
    },
  });

  gsap.from(".alliance-lines span", {
    scaleX: 0,
    scrollTrigger: {
      trigger: ".chapter-alliance",
      start: "top 65%",
      end: "center center",
      scrub: 1,
    },
  });

  gsap.from(".work-sequence article", {
    y: 70,
    opacity: 0,
    stagger: 0.13,
    scrollTrigger: {
      trigger: ".work-sequence",
      start: "top 80%",
      once: true,
    },
  });

  gsap.from(".essay", {
    x: compactMotion ? 0 : -24,
    opacity: 0,
    stagger: 0.12,
    scrollTrigger: { trigger: ".essay-list", start: "top 78%", once: true },
  });

} else {
  document.querySelectorAll(".title-line > span").forEach((line) => {
    line.style.transform = "none";
  });
  document.querySelectorAll(".intro-kicker,.intro-note,.intro-actions,.intro-author").forEach((el) => {
    el.style.opacity = "1";
  });
}
