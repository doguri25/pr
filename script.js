/* eslint-disable no-undef */

const GOOGLE_FORM_URL = "https://forms.gle/tRivWBmhepDFKNjx8"; // 커피챗(구글 폼)

function setupCoffeeChatLinks() {
  const elements = [document.getElementById("coffeeChatLink"), document.getElementById("coffeeChatSticky")].filter(
    Boolean
  );

  for (const el of elements) {
    const placeholderUrl = el.getAttribute("data-placeholder-url") || "#";
    if (GOOGLE_FORM_URL && GOOGLE_FORM_URL.trim() !== "") {
      el.setAttribute("href", GOOGLE_FORM_URL);
      el.setAttribute("aria-label", "커피챗 링크로 이동");
      el.removeAttribute("data-placeholder-url");
      return;
    }

    // 구글 폼 URL이 아직 없으면, 링크 대신 안내만 보여주되 페이지 흐름은 유지합니다.
    el.setAttribute("href", placeholderUrl);
    el.addEventListener("click", (e) => {
      if (placeholderUrl === "#" || placeholderUrl === "") {
        e.preventDefault();
      }
      // 너무 방해되지 않게 toast 형태 대신 기본 alert를 사용합니다.
      window.alert("커피챗 링크는 곧 제공될 예정이에요. (구글 폼 URL을 연결해주세요)");
    });
  }
}

function setupSmoothScroll() {
  const links = Array.from(document.querySelectorAll("[data-scroll]"));
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  for (const link of links) {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }
}

function setupRevealAnimations() {
  const cards = Array.from(document.querySelectorAll(".topic-card.reveal"));
  if (cards.length === 0) return;

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    for (const card of cards) card.classList.add("revealed");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.18 }
  );

  for (const card of cards) observer.observe(card);
}

function setupYear() {
  const yearEl = document.getElementById("year");
  if (!yearEl) return;
  yearEl.textContent = String(new Date().getFullYear());
}

function init() {
  setupYear();
  setupSmoothScroll();
  setupRevealAnimations();
  setupCoffeeChatLinks();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}

