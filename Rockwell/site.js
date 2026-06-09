const analyticsId = document.querySelector('meta[name="google-analytics-id"]')?.content.trim() || "";

window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}

if (/^G-[A-Z0-9]+$/i.test(analyticsId)) {
  const analyticsScript = document.createElement("script");
  analyticsScript.async = true;
  analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`;
  document.head.appendChild(analyticsScript);
  gtag("js", new Date());
  gtag("config", analyticsId);
}

document.addEventListener("click", (event) => {
  const trackedLink = event.target.closest("[data-track]");
  if (trackedLink) {
    gtag("event", trackedLink.dataset.track, {
      link_url: trackedLink.href || "",
      link_text: trackedLink.textContent.trim().replace(/\s+/g, " ")
    });
  }
});

const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");

navToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Open menu");
  });
});

const overlay = document.querySelector("[data-overlay]");
const directionsSheet = document.querySelector("[data-directions-sheet]");
let directionsTrigger;

function openDirections(trigger) {
  directionsTrigger = trigger;
  directionsSheet.classList.add("open");
  directionsSheet.setAttribute("aria-hidden", "false");
  overlay.classList.add("show");
  document.body.classList.add("directions-open");
  window.requestAnimationFrame(() => directionsSheet.querySelector("[data-direction-link]")?.focus());
}

function closeDirections(restoreFocus = true) {
  directionsSheet.classList.remove("open");
  directionsSheet.setAttribute("aria-hidden", "true");
  overlay.classList.remove("show");
  document.body.classList.remove("directions-open");
  if (restoreFocus) directionsTrigger?.focus();
}

document.addEventListener("click", (event) => {
  const directionsButton = event.target.closest("[data-open-directions]");
  if (directionsButton) {
    openDirections(directionsButton);
    return;
  }

  if (event.target.closest("[data-direction-link]")) {
    closeDirections(false);
    return;
  }

  if (event.target.closest("[data-close-directions]") || event.target === overlay) {
    closeDirections();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDirections();
});
