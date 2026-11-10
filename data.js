/* =====================================================================
   AI CLAN — data.js
   ---------------------------------------------------------------------
   ✏️ EDIT ME — همه‌ی محتوا و اطلاعات سایت فقط در همین فایل است.
   بعد از تغییر فقط ذخیره کن و صفحه را رفرش کن؛ فایل دیگری لازم نیست.
   ✏️ ALL site content lives here — edit ONLY this file,
   then save + refresh the browser. Nothing else needs changing.
===================================================================== */

const SITE_DATA = {

  /* ------------------------------------------------ branding ------ */

  // نام کوتاه انجمن — در عنوان تب مرورگر و فوتر استفاده می‌شود
  siteName: "ai_clan",

  // لوگوی ASCII بالای صفحه.
  // اسم عوض شد؟ خروجی جدید بگیر از: https://patorjk.com/software/taag
  // (فونت: ANSI Shadow) و متن زیر را با خروجی جدید جایگزین کن.
  asciiLogo: ` █████╗ ██╗   ██████╗██╗     █████╗ ███╗   ██╗
██╔══██╗██║   ██╔════╝██║    ██╔══██╗████╗  ██║
███████║██║   ██║     ██║    ██████║██╔██╗ ██║
██╔══██║██║   ██║     ██║    ██╔══██║██║╚██╗██║
██║  ██║██║   ╚█████╗ ██████╗██║  ██║██║ ╚████║
╚═╝  ╚═╝╚═╝    ╚════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝`,

  // یک خط درباره‌ی انجمن (با افکت تایپ شدن نمایش داده می‌شود)
  tagline: "a student community exploring artificial intelligence — talks, workshops & hands-on builds.",

  // متن نوار عنوان پنجره (چپ / راست)
  titlebar: "ai_clan@web:~/association",
  titlebarRight: "bash — 80×24",

  /* ------------------------------------------------ welcome box --- */

  // بخش «کی هستیم و چیکار می‌کنیم».
  // هر آیتم = یک خط دستور (cmd) + یک پاراگراف (text).
  // داخل text می‌توانی از HTML ساده مثل <strong>...</strong> هم استفاده کنی.
  about: [
    {
      cmd: "> whoami",
      text: "we are <strong>ai_clan</strong>, a student association for artificial intelligence at the university — a small clan of people who like teaching machines and helping each other level up.",
    },
    {
      cmd: "> cat mission.txt",
      text: "we run weekly talks, paper-reading circles, hands-on workshops and project nights. we share roadmaps, opportunities and everything we learn along the way.",
    },
    {
      cmd: "> open --members",
      text: "everyone is welcome: total beginners, the curious and the obsessed. no experience required — just show up.",
    },
  ],

  /* ------------------------------------------------ contact ------- */

  // راه‌های ارتباطی فوتر. label را کوتاه نگه دار تا زیر هم بنشینند.
  contacts: [
    { label: "email",    value: "hello@example.com", href: "mailto:hello@example.com" },
    { label: "telegram", value: "@example",          href: "https://t.me/example" },
    { label: "github",   value: "example",           href: "https://github.com/example" },
  ],
  joinNote: "everyone welcome — no experience required, just curiosity.",

  /* ------------------------------------------------ events -------- */

  // لیست ایونت‌ها — اضافه/کم کردن فقط با همین آرایه.
  // خودکار: ترتیب تاریخ، بج NEXT، شمارش معکوس، اسکرول و محو شدن.
  // date    : "YYYY-MM-DD"
  // time    : "HH:MM"  (24 ساعته، زمان شروع — برای شمارش معکوس)
  // title   : عنوان کوتاه روی نوار
  // summary : متنی که با زدن + باز می‌شود
  events: [
    {
      date: "2026-11-20",
      time: "18:00",
      title: "Kickoff meeting — intro to the association",
      summary:
        "Our first official meetup. We introduce the association, present " +
        "the roadmap for this semester and collect ideas for future " +
        "sessions. Everyone is welcome — bring your friends!",
    },
    {
      date: "2026-12-04",
      time: "17:30",
      title: "Workshop — Python for AI beginners",
      summary:
        "A hands-on session covering the Python stack we use all the time: " +
        "NumPy, Pandas, and a first look at training a tiny neural network. " +
        "Laptops required, experience optional.",
    },
    {
      date: "2026-10-16",
      time: "18:00",
      title: "First gathering — meet & greet",
      summary:
        "An informal gathering to meet everyone interested in AI at the " +
        "university. We talked about community goals and planned the kickoff.",
    },
  ],
};
