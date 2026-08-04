export type Locale = "ru" | "en";

export const LOCALES = ["en", "ru"] as const satisfies readonly Locale[];

export interface Service {
  num: string;
  title: string;
  tag: string;
  dur: string;
  price: string;
  desc: string;
  mediaKind?: "photo" | "video";
}

export interface CollabFormat {
  label: string;
  price: string;
}

export interface ServiceGroup {
  id: "shoot" | "consult";
  kicker: string;
  services: Service[];
}

export interface WorkGallery {
  label: string;
  playLabel: string;
  alt: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Testimonials {
  label: string;
  items: Testimonial[];
}

export interface Translation {
  metaTitle: string;
  tagline: string;
  heroCta: string;
  heroBadge: string;
  servicesKicker: string;
  servicesTitle: string;
  duration: string;
  choose: string;
  contactKicker: string;
  contactTitle: string;
  contactBody: string;
  contactCta: string;
  phone: string;
  serviceGroups: ServiceGroup[];
  collabKicker: string;
  collabTitle: string;
  collabDesc: string;
  collabFormats: CollabFormat[];
  collabBarter: string;
  collabCta: string;
  serviceAlt: string[];
  consultServiceAlt: string[];
  workGalleries: Record<"shoot" | "collab", WorkGallery>;
  testimonials: Testimonials;
}

const dictionaries: Record<Locale, Translation> = {
  ru: {
    metaTitle: "UGC-съёмка и консультации по блогу, Таллинн",
    tagline:
      "Маркетолог и автор блога о жизни в Таллинне. Создаю контент, обучаю, консультирую и сотрудничаю с брендами — помогаю раскрыть себя и заявить о себе в социальных сетях.",
    heroCta: "Написать в Telegram",
    heroBadge: "контент, который хочется смотреть",
    servicesKicker: "Услуги",
    servicesTitle: "Чем я могу помочь?",
    duration: "Длительность",
    choose: "Выбрать",
    contactKicker: "Контакты",
    contactTitle: "Давайте создадим ваш блог",
    contactBody:
      "По всем вопросам пишите в Telegram — отвечаю лично и помогаю подобрать формат под вашу задачу.",
    contactCta: "Написать в Telegram",
    phone: "Телефон",
    serviceGroups: [
      {
        id: "shoot",
        kicker: "Съёмка и UGC",
        services: [
          {
            num: "01",
            title: "Экспресс-съёмка",
            tag: "Tallinn",
            dur: "30 минут",
            price: "20 €",
            desc: "Снимаю в городе или кафе для вашего блога или личного архива. Все материалы отправляю сразу же по AirDrop, без ожидания.",
          },
          {
            num: "02",
            title: "Фотосессия для эксперта",
            tag: "фото + видео",
            dur: "1–2 часа",
            price: "90 €",
            desc: "Фотосъёмка для коучей, консультантов, мастеров: фото для сайта, соцсетей, презентаций. Живой, естественный стиль, без студийной постановочности.",
          },
          {
            num: "03",
            title: "Контент-съёмка для бизнеса",
            tag: "2–4 дня",
            dur: "2–4 дня",
            price: "200 €",
            desc: "От идеи до готовой ленты: брифинг, мудборд, локация, образы и реквизит, съёмка и обработка. 30–40 живых фотографий и 3–5 коротких UGC-видео.",
          },
          {
            num: "04",
            title: "UGC видео",
            tag: "1 видео",
            dur: "1–2 дня",
            price: "от 40 €",
            desc: "Одно короткое видео: съёмка, монтаж, музыка и текст. Передаю в день съёмки.",
            mediaKind: "video",
          },
          {
            num: "05",
            title: "UGC-пакет · 3 видео",
            tag: "3 видео",
            dur: "3–5 дней",
            price: "от 100 €",
            desc: "Три видео (до 30 сек). Разные сценарии и ракурсы одного продукта.",
            mediaKind: "video",
          },
        ],
      },
      {
        id: "consult",
        kicker: "Консультации",
        services: [
          {
            num: "06",
            title: "Экспресс-разбор блога",
            tag: "online",
            dur: "1 час",
            price: "50 €",
            desc: "Часовой созвон, на котором мы вместе посмотрим на ваш блог свежим взглядом: что уже работает, а что стоит изменить. Идеи для контента и тренды 2026.",
          },
          {
            num: "07",
            title: "Разбор аккаунта",
            tag: "online / offline",
            dur: "2–2,5 часа",
            price: "150 €",
            desc: "Подробно разберём ваш профиль: кто вы в блоге и как показать это через ленту. После встречи — ясное позиционирование и понятный план действий.",
          },
          {
            num: "08",
            title: "Личное наставничество",
            tag: "4 встречи",
            dur: "1 месяц",
            price: "320 €",
            desc: "Стратегия и позиционирование, анализ конкурентов, оформление, визуал, сторис, копирайтинг, продвижение, поиск клиентов, монетизация и сезонный контент.",
          },
        ],
      },
    ],
    collabKicker: "Сотрудничество",
    collabTitle: "Сотрудничество с брендами",
    collabDesc:
      "Сотрудничаю с брендами и продуктами, которые органично вписываются в мою повседневную жизнь в Таллинне — с акцентом на честность и реальное использование, а не постановочную рекламу.",
    collabFormats: [
      { label: "Интеграция в сторис (2–3 слайда)", price: "10–25 €" },
      { label: "Пост в ленте", price: "50–90 €" },
      { label: "Reels с интеграцией продукта", price: "70–130 €" },
      {
        label: "Комплексный пакет (сторис + пост + reels)",
        price: "150–220 €",
      },
      { label: "Долгосрочное амбассадорство", price: "от 180 €" },
    ],
    collabBarter:
      "Для небольших локальных брендов возможен формат бартера — продукт в обмен на публикацию.",
    collabCta: "Написать о сотрудничестве",
    serviceAlt: [
      "Ноутбук на кровати с отснятыми чёрно-белыми кадрами на экране",
      "Портрет эксперта в живой, непостановочной обстановке",
      "Съёмка в кровати отеля с ноутбуком и кружкой кофе для бизнес-контента",
      "Продукт крупным планом в руке рядом со свечой и косметичкой — UGC-съёмка",
      "Портативная колонка с подсветкой на деревянном столе — продуктовая съёмка для UGC-пакета",
    ],
    consultServiceAlt: [
      "Чёрно-белый портрет крупным планом на фоне улицы Таллинна",
      "Портрет в профиль у пешеходного перехода на фоне города",
      "Портрет с раскинутыми руками спиной к камере на городской улице",
    ],
    workGalleries: {
      shoot: {
        label: "Примеры работ",
        playLabel: "Смотреть видео",
        alt: [
          "Превью YouTube Shorts от Eleonora Kupczyk №1",
          "Превью YouTube Shorts от Eleonora Kupczyk №2",
          "Превью YouTube Shorts от Eleonora Kupczyk №3",
          "Превью YouTube Shorts от Eleonora Kupczyk №4",
        ],
      },
      collab: {
        label: "Примеры работ",
        playLabel: "Смотреть видео",
        alt: [
          "Серо-голубой фасад особняка с балконом и коваными перилами",
          "Круизный лайнер на закате у смотровых трибун Таллиннского порта",
          "Виниловый проигрыватель Crosley с пластинкой Harry Styles и свечами рядом",
        ],
      },
    },
    testimonials: {
      label: "Отзывы",
      items: [
        {
          quote:
            "После разбора аккаунта я наконец поняла, о чём вести блог и как это показать через ленту. Появился чёткий план на месяц вперёд.",
          name: "Анна К.",
          role: "разбор аккаунта",
        },
        {
          quote:
            "Экспресс-созвон стоил своих денег — за час получила больше конкретики, чем за месяц чтения советов в интернете.",
          name: "Мария Т.",
          role: "экспресс-разбор блога",
        },
        {
          quote:
            "Наставничество дало не только стратегию, но и уверенность. Элеонора объясняет по-человечески, без воды.",
          name: "Ольга П.",
          role: "личное наставничество",
        },
      ],
    },
  },
  en: {
    metaTitle: "UGC Shoots & Blog Consulting, Tallinn",
    tagline:
      "Marketer and blogger based in Tallinn. I create content, teach, consult, and collaborate with brands — helping you find your voice and put yourself out there on social media.",
    heroCta: "Message on Telegram",
    heroBadge: "content you want to watch",
    servicesKicker: "Services",
    servicesTitle: "How can I help?",
    duration: "Duration",
    choose: "Choose",
    contactKicker: "Contact",
    contactTitle: "Let's build your blog",
    contactBody:
      "For anything, write me on Telegram — I reply personally and help you pick the right format for your goal.",
    contactCta: "Message on Telegram",
    phone: "Phone",
    serviceGroups: [
      {
        id: "shoot",
        kicker: "Shoots & UGC",
        services: [
          {
            num: "01",
            title: "Express shoot",
            tag: "Tallinn",
            dur: "30 minutes",
            price: "20 €",
            desc: "I shoot around the city or in a café for your blog or personal archive. All material sent right away over AirDrop, no waiting.",
          },
          {
            num: "02",
            title: "Expert photoshoot",
            tag: "photo + video",
            dur: "1–2 hours",
            price: "90 €",
            desc: "Photoshoots for coaches, consultants and specialists: photos for your website, social media, presentations. A natural, lived-in style, never studio-staged.",
          },
          {
            num: "03",
            title: "Business content shoot",
            tag: "2–4 days",
            dur: "2–4 days",
            price: "200 €",
            desc: "From idea to a finished feed: briefing, moodboard, location, styling and props, shooting and editing. 30–40 natural photos and 3–5 short UGC videos.",
          },
          {
            num: "04",
            title: "UGC video",
            tag: "1 video",
            dur: "1–2 days",
            price: "from 40 €",
            desc: "One short video: filming, editing, music and text. Delivered the day of the shoot.",
            mediaKind: "video",
          },
          {
            num: "05",
            title: "UGC bundle · 3 videos",
            tag: "3 videos",
            dur: "3–5 days",
            price: "from 100 €",
            desc: "Three videos (up to 30 sec). Different scripts and angles for the same product.",
            mediaKind: "video",
          },
        ],
      },
      {
        id: "consult",
        kicker: "Consulting",
        services: [
          {
            num: "06",
            title: "Express blog review",
            tag: "online",
            dur: "1 hour",
            price: "50 €",
            desc: "An hour-long call where we look at your blog with fresh eyes: what already works, what's worth changing, content ideas and 2026 trends.",
          },
          {
            num: "07",
            title: "Account review",
            tag: "online / offline",
            dur: "2–2.5 hours",
            price: "150 €",
            desc: "A deep look at your profile: who you are as a creator and how to show that through your feed. You leave with clear positioning and a plan.",
          },
          {
            num: "08",
            title: "Personal mentorship",
            tag: "4 sessions",
            dur: "1 month",
            price: "320 €",
            desc: "Strategy and positioning, competitor analysis, account design, visuals, stories, copywriting, promotion, finding clients, monetization and seasonal content.",
          },
        ],
      },
    ],
    collabKicker: "Collaborations",
    collabTitle: "Brand collaborations",
    collabDesc:
      "I work with brands and products that fit naturally into my everyday life in Tallinn — with an emphasis on honesty and real use, not staged advertising.",
    collabFormats: [
      { label: "Story integration (2–3 slides)", price: "10–25 €" },
      { label: "Feed post", price: "50–90 €" },
      { label: "Reels with product integration", price: "70–130 €" },
      { label: "Full package (stories + post + reels)", price: "150–220 €" },
      { label: "Long-term ambassadorship", price: "from 180 €" },
    ],
    collabBarter:
      "For small local brands, a barter format is possible — product in exchange for a post.",
    collabCta: "Message about a collaboration",
    serviceAlt: [
      "A laptop on a bed showing a contact sheet of finished black-and-white shots",
      "A portrait of an expert in a natural, unstaged setting",
      "Shooting business content in a hotel bed with a laptop and a raised coffee mug",
      "A product held close in hand beside a candle and a cosmetic bag — a UGC shoot",
      "A portable speaker with a glowing ring on a wooden table — a product shoot for a UGC bundle",
    ],
    consultServiceAlt: [
      "A close black-and-white portrait against a Tallinn street",
      "A profile portrait at a pedestrian crossing against the city skyline",
      "A portrait with arms outstretched, back to camera, on a city street",
    ],
    workGalleries: {
      shoot: {
        label: "Recent work",
        playLabel: "Watch video",
        alt: [
          "YouTube Shorts preview from Eleonora Kupczyk #1",
          "YouTube Shorts preview from Eleonora Kupczyk #2",
          "YouTube Shorts preview from Eleonora Kupczyk #3",
          "YouTube Shorts preview from Eleonora Kupczyk #4",
        ],
      },
      collab: {
        label: "Recent work",
        playLabel: "Watch video",
        alt: [
          "A grey-blue mansion facade with a balcony and wrought-iron railing",
          "A cruise ship at sunset by the Tallinn harbour viewing steps",
          "A Crosley record player spinning Harry Styles, candles beside it",
        ],
      },
    },
    testimonials: {
      label: "Testimonials",
      items: [
        {
          quote:
            "After the account review I finally knew what my blog was about and how to show it through my feed. I walked away with a clear plan for the month ahead.",
          name: "Anna K.",
          role: "account review",
        },
        {
          quote:
            "The express call was worth every euro — I got more clarity in an hour than in a month of reading advice online.",
          name: "Maria T.",
          role: "express blog review",
        },
        {
          quote:
            "Mentorship gave me a strategy and real confidence. Eleonora explains things like a human, no fluff.",
          name: "Olga P.",
          role: "personal mentorship",
        },
      ],
    },
  },
};

export function getDictionary(locale: Locale): Translation {
  return dictionaries[locale];
}
