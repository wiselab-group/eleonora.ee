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

export interface Translation {
  tagline: string;
  ogDescription: string;
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
  workGalleries: Record<"shoot" | "consult" | "collab", WorkGallery>;
}

const dictionaries: Record<Locale, Translation> = {
  ru: {
    tagline:
      "Маркетолог и автор блога о жизни в Таллинне. Создаю контент, обучаю, консультирую и сотрудничаю с брендами — помогаю раскрыть себя и заявить о себе в социальных сетях.",
    ogDescription:
      "SMM- и UGC-маркетолог из Таллинна — контент, обучение, консультации.",
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
      { label: "Комплексный пакет (сторис + пост + reels)", price: "150–220 €" },
      { label: "Долгосрочное амбассадорство", price: "от 180 €" },
    ],
    collabBarter:
      "Для небольших локальных брендов возможен формат бартера — продукт в обмен на публикацию.",
    collabCta: "Написать о сотрудничестве",
    serviceAlt: [
      "Съёмка в городе с телефоном в руках на фоне улицы Таллинна",
      "Портрет эксперта в живой, непостановочной обстановке",
      "Раскладка ленты из живых фотографий для бизнеса",
      "Съёмка UGC-видео с продуктом в кадре",
      "Раскадровка нескольких UGC-сценариев одного продукта",
      "Созвон с ноутбуком: разбор блога",
      "Телефон с открытым профилем Instagram на столе",
      "Обсуждение стратегии за столом с ноутбуком",
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
      consult: {
        label: "Примеры работ",
        playLabel: "Смотреть видео",
        alt: [
          "Утро в отеле: чашка кофе и ноутбук в постели под подписью «Мой список дофамина»",
          "Двойной рожок мороженого на фоне киоска Pargi Kiosk в Таллинне",
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
  },
  en: {
    tagline:
      "Marketer and blogger writing about life in Tallinn. I create content, teach, consult, and collaborate with brands — helping you unfold yourself and speak about it on social media.",
    ogDescription:
      "SMM & UGC marketer based in Tallinn — content, coaching, consulting.",
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
      "Shooting around town with a phone against a Tallinn street",
      "A portrait of an expert in a natural, unstaged setting",
      "A finished feed layout of natural photos for a business",
      "Filming a UGC video with a product in frame",
      "A storyboard of several UGC scripts for one product",
      "A call with a laptop: reviewing a blog",
      "A phone with an Instagram profile open on a table",
      "Discussing strategy across a table with a laptop",
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
      consult: {
        label: "Recent work",
        playLabel: "Watch video",
        alt: [
          "Hotel-room morning: coffee and a laptop in bed under the caption 'My dopamine menu'",
          "A double scoop of ice cream held up outside the Pargi Kiosk in Tallinn",
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
  },
};

export function getDictionary(locale: Locale): Translation {
  return dictionaries[locale];
}
