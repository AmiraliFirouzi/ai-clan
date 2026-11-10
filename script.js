/* =====================================================================
   AI CLAN — script.js
   Logic only — ALL content/data lives in data.js (SITE_DATA).
===================================================================== */

/* --------------------------- tiny helpers --------------------------- */
const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const pad = (n) => String(n).padStart(2, "0");

function parseEvent(ev) {
  const [y, m, d] = ev.date.split("-").map(Number);
  const [hh, mm] = (ev.time || "18:00").split(":").map(Number);
  return { ...ev, dt: new Date(y, m - 1, d, hh || 0, mm || 0) };
}

function fmtDate(ev) {
  return `${ev.dt.getFullYear()}.${pad(ev.dt.getMonth() + 1)}.${pad(
    ev.dt.getDate()
  )}_${DAYS[ev.dt.getDay()]}`;
}

/* ----------------------------- branding ----------------------------- */
document.title = `${SITE_DATA.siteName}@web:~`;
document.getElementById("ascii-logo").textContent = SITE_DATA.asciiLogo;
document.getElementById("titlebar-left").textContent = SITE_DATA.titlebar;
document.getElementById("titlebar-right").textContent = SITE_DATA.titlebarRight;
document.getElementById("footer-name").textContent = SITE_DATA.siteName;

/* ------------------------ next event + countdown -------------------- */
const nextLine = document.getElementById("next-event-line");

function tick() {
  const now = new Date();
  const next = SITE_DATA.events
    .map(parseEvent)
    .filter((e) => e.dt > now)
    .sort((a, b) => a.dt - b.dt)[0];

  if (!next) {
    nextLine.innerHTML =
      '<span class="ne-label">next_event</span> &gt;&gt; TBA — stay tuned<span class="blink">_</span>';
    return;
  }

  const ms = next.dt - now;
  const d = Math.floor(ms / 864e5);
  const h = Math.floor(ms / 36e5) % 24;
  const m = Math.floor(ms / 6e4) % 60;
  const s = Math.floor(ms / 1e3) % 60;

  nextLine.innerHTML =
    `<span class="ne-label">next_event</span> &gt;&gt; ` +
    `${fmtDate(next)} @ ${next.time || "18:00"} ` +
    `<span class="ne-count">:: T-${d}d ${pad(h)}h ${pad(m)}m ${pad(s)}s</span>`;
}
tick();
setInterval(tick, 1000);

/* --------------------------- welcome box ---------------------------- */
const aboutBody = document.getElementById("about-body");
SITE_DATA.about.forEach((block) => {
  const p = document.createElement("p");
  const cmd = document.createElement("span");
  cmd.className = "cmd";
  cmd.textContent = block.cmd;
  p.appendChild(cmd);
  p.appendChild(document.createElement("br"));
  p.insertAdjacentHTML("beforeend", block.text); // owner-authored HTML allowed
  aboutBody.appendChild(p);
});

/* ---------------------------- contact list -------------------------- */
const contactList = document.getElementById("contact-list");
SITE_DATA.contacts.forEach((c) => {
  const li = document.createElement("li");

  const arrow = document.createElement("span");
  arrow.className = "arrow";
  arrow.textContent = "->";

  const label = document.createElement("span");
  label.className = "c-label";
  label.textContent = c.label;

  const link = document.createElement("a");
  link.href = c.href;
  link.textContent = c.value;
  if (c.href.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noopener";
  }

  li.append(arrow, " ", label, " : ", link);
  contactList.appendChild(li);
});
document.getElementById("join-note").textContent = SITE_DATA.joinNote;

/* --------------------------- events list ---------------------------- */
const list = document.getElementById("events-list");

/* dim-reveal: cards past the 2nd stay dim until they are scrolled into
   view (only when the list is long enough to scroll) */
let revealObserver = null;

function setupReveal(enabled) {
  if (revealObserver) {
    revealObserver.disconnect();
    revealObserver = null;
  }
  const cards = list.querySelectorAll(".event");

  if (!enabled || !("IntersectionObserver" in window)) {
    cards.forEach((c) => c.classList.remove("pending"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          entry.target.classList.remove("pending");
          revealObserver.unobserve(entry.target);
        }
      }
    },
    { root: list, rootMargin: "0px 0px -6% 0px", threshold: 0.12 }
  );

  cards.forEach((card, i) => {
    card.classList.remove("revealed", "pending");
    if (i >= 2) {
      card.classList.add("pending");
      revealObserver.observe(card);
    }
  });
}

function renderEvents() {
  const now = new Date();
  /* strict date order: soonest upcoming event on top, everything after it
     in descending date order (past events appear newest → oldest) */
  const events = SITE_DATA.events.map(parseEvent).sort((a, b) => b.dt - a.dt);
  const nextUp = SITE_DATA.events
    .map(parseEvent)
    .filter((e) => e.dt > now)
    .sort((a, b) => a.dt - b.dt)[0]; // closest upcoming event

  list.innerHTML = "";

  if (!events.length) {
    const p = document.createElement("p");
    p.className = "empty";
    p.textContent = "// no events yet — check back soon_";
    list.classList.remove("scrollable");
    list.appendChild(p);
    return;
  }

  for (const ev of events) {
    const isNext = nextUp && ev.dt.getTime() === nextUp.dt.getTime();
    const past = ev.dt < now;

    const card = document.createElement("article");
    card.className = "event" + (past ? " past" : "");

    const head = document.createElement("button");
    head.type = "button";
    head.className = "event-head";
    head.setAttribute("aria-expanded", "false");

    const date = document.createElement("span");
    date.className = "event-date";
    date.textContent = fmtDate(ev);

    const title = document.createElement("span");
    title.className = "event-title";
    title.textContent = ev.title;

    head.append(date, title);

    if (isNext) {
      const badge = document.createElement("span");
      badge.className = "badge-next";
      badge.textContent = "● NEXT";
      head.appendChild(badge);
    }

    const plus = document.createElement("span");
    plus.className = "event-plus";
    plus.textContent = "+";
    head.appendChild(plus);

    const body = document.createElement("div");
    body.className = "event-body";
    const inner = document.createElement("div");
    inner.className = "event-body-inner";
    const p = document.createElement("p");
    p.textContent = ev.summary;
    inner.appendChild(p);
    body.appendChild(inner);

    head.addEventListener("click", () => {
      const open = card.classList.toggle("open");
      head.setAttribute("aria-expanded", String(open));
    });

    card.append(head, body);
    list.appendChild(card);
  }

  // scrollbar + dim-reveal only once there are more than 3 events
  const scrollable = events.length > 3;
  list.classList.toggle("scrollable", scrollable);
  setupReveal(scrollable);
}
renderEvents();

/* ---------------------------- typewriter ---------------------------- */
const tw = document.getElementById("typewriter");
const tagline = SITE_DATA.tagline;
tw.textContent = "";
let i = 0;
(function type() {
  if (i <= tagline.length) {
    tw.textContent = tagline.slice(0, i++);
    setTimeout(type, 22 + Math.random() * 38);
  }
})();

/* ------------------------------ footer ------------------------------ */
document.getElementById("year").textContent = new Date().getFullYear();

/* --------------------------- snow effect ---------------------------- */
const SNOW = (() => {
  const canvas = document.getElementById("snow");
  const ctx = canvas.getContext("2d");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const KEY = "ai_clan_snow";
  let W, H, flakes = [], raf = null, on = false;

  function size() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function make() {
    const count = Math.min(200, Math.round((W * H) / 7500));
    flakes = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0.6 + Math.random() * 1.6,          // radius
      s: 0.3 + Math.random() * 0.85,         // fall speed
      w: Math.random() * Math.PI * 2,        // drift phase
      wv: 0.002 + Math.random() * 0.005,     // drift speed
      drift: 0.3 + Math.random() * 0.5,      // drift amount
      a: 0.18 + Math.random() * 0.5,         // opacity — gentle over the content
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#ffffff";
    for (const f of flakes) {
      ctx.globalAlpha = f.a;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function step() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#ffffff";
    for (const f of flakes) {
      f.y += f.s;
      f.w += f.wv;
      f.x += Math.sin(f.w) * f.drift;
      if (f.y > H + 4) { f.y = -4; f.x = Math.random() * W; }
      if (f.x > W + 4) f.x = -4;
      if (f.x < -4) f.x = W + 4;
      ctx.globalAlpha = f.a;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(step);
  }

  function start() {
    on = true;
    if (raf) cancelAnimationFrame(raf);
    raf = null;
    if (reduced) { draw(); return; } // one static frame, no motion
    raf = requestAnimationFrame(step);
  }

  function stop() {
    on = false;
    if (raf) cancelAnimationFrame(raf);
    raf = null;
    ctx.clearRect(0, 0, W, H);
  }

  function resize() {
    size();
    make();
    if (on) start();
  }

  size();
  make();
  window.addEventListener("resize", resize);

  return {
    enabled: localStorage.getItem(KEY) !== "off",
    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem(KEY, this.enabled ? "on" : "off");
      this.enabled ? start() : stop();
      return this.enabled;
    },
    init() {
      this.enabled ? start() : stop();
    },
  };
})();

const snowBtn = document.getElementById("snow-toggle");
function paintSnowBtn() {
  snowBtn.textContent = `[ snow: ${SNOW.enabled ? "ON" : "OFF"} ]`;
  snowBtn.setAttribute("aria-pressed", String(SNOW.enabled));
}
snowBtn.addEventListener("click", () => {
  SNOW.toggle();
  paintSnowBtn();
});
paintSnowBtn();
SNOW.init();
