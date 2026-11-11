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
      text: "we are <strong>ai_clan</strong>, a student association for artificial intelligence at the Allameh Tabataba'i University — a small clan of people who like teaching machines and helping each other level up.",
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
    { label: "email",    value: "amirali.firouzi@atu.ac.ir", href: "mailto:amirali.firouzi@atu.ac.ir" },
    { label: "telegram", value: "@Amiiiiiiiiiiraliii",          href: "https://t.me/Amiiiiiiiiiiraliii" },
    { label: "github",   value: "ai_clan",           href: "https://github.com/AmiraliFirouzi/ai-clan" },
    { label: "linkedin",   value: "ai_clan",           href: "https://www.linkedin.com/company/ai-clan" },
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
      date: "2026-11-17",
      time: "12:00",
      title: "meet and great",
      summary: "",
    }
  ],
};
