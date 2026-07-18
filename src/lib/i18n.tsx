"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type Locale = "ru" | "en";

export interface Service {
  num: string;
  title: string;
  tag: string;
  dur: string;
  price: string;
  desc: string;
}

export interface Translation {
  tagline: string;
  heroCta: string;
  heroBadge: string;
  servicesKicker: string;
  servicesTitle: string;
  duration: string;
  choose: string;
  feedKicker: string;
  feedTitle: string;
  feedCta: string;
  feedAlt: string[];
  shortsTitle: string;
  shortsBody: string;
  shortsCta: string;
  shortsAlt: string[];
  shortsPlay: string;
  contactKicker: string;
  contactTitle: string;
  contactBody: string;
  contactCta: string;
  phone: string;
  services: Service[];
  serviceAlt: string[];
}

const dictionaries: Record<Locale, Translation> = {
  ru: {
    tagline:
      "Маркетолог из Таллинна. Создаю контент, обучаю и консультирую — помогаю раскрыть себя и заявить о себе в социальных сетях.",
    heroCta: "Написать в Telegram",
    heroBadge: "контент, который хочется смотреть",
    servicesKicker: "Услуги",
    servicesTitle: "Чем я могу помочь?",
    duration: "Длительность",
    choose: "Выбрать",
    feedKicker: "Лента",
    feedTitle: "Как это выглядит",
    feedCta: "Instagram",
    feedAlt: [
      "Утро в отеле: чашка кофе и ноутбук в постели под подписью «Мой список дофамина»",
      "Двойной рожок мороженого на фоне киоска Pargi Kiosk в Таллинне",
      "Серо-голубой фасад особняка с балконом и коваными перилами",
      "Круизный лайнер на закате у смотровых трибун Таллиннского порта",
      "Виниловый проигрыватель Crosley с пластинкой Harry Styles и свечами рядом",
    ],
    shortsTitle: "Примеры UGC",
    shortsBody: "Короткие видео о съёмках, разборах и закулисье.",
    shortsCta: "Смотреть на YouTube",
    shortsAlt: [
      "Превью YouTube Shorts от Eleonora Kupczyk №1",
      "Превью YouTube Shorts от Eleonora Kupczyk №2",
      "Превью YouTube Shorts от Eleonora Kupczyk №3",
      "Превью YouTube Shorts от Eleonora Kupczyk №4",
    ],
    shortsPlay: "Смотреть видео",
    contactKicker: "Контакты",
    contactTitle: "Давайте создадим ваш блог",
    contactBody:
      "По всем вопросам пишите в Telegram — отвечаю лично и помогаю подобрать формат под вашу задачу.",
    contactCta: "Написать в Telegram",
    phone: "Телефон",
    services: [
      {
        num: "01",
        title: "Экспресс-разбор блога",
        tag: "online",
        dur: "1 час",
        price: "50 €",
        desc: "Онлайн-созвон до часа: первое впечатление о блоге, что можно улучшить, как раскрыть ваши темы, быстрые идеи для контента, тренды 2026 и разбор ошибок.",
      },
      {
        num: "02",
        title: "Разбор аккаунта",
        tag: "online / offline",
        dur: "2–2,5 часа",
        price: "150 €",
        desc: "Аудит профиля, распаковка личности и позиционирование. Разберём визуал шапки, хайлайтс и ленты, как делать цепляющий контент и продвигать аккаунт.",
      },
      {
        num: "03",
        title: "Как делать UGC-контент",
        tag: "+ пример письма",
        dur: "2–2,5 часа",
        price: "150 €",
        desc: "Всё из разбора аккаунта плюс: как создавать UGC-контент и предлагать себя брендам — с готовым примером письма-питча.",
      },
      {
        num: "04",
        title: "Личное наставничество",
        tag: "4 встречи",
        dur: "1 месяц",
        price: "320 €",
        desc: "Стратегия и позиционирование, анализ конкурентов, оформление, визуальный контент, сторис, копирайтинг, продвижение, поиск клиентов и монетизация.",
      },
      {
        num: "05",
        title: "Контент-съёмка",
        tag: "Tallinn",
        dur: "2–4 дня",
        price: "200 €",
        desc: "Брифинг, мудборд, подбор локации, реквизита и образов, съёмка и обработка. Готовая раскладка ленты на 15–20 кадров, 30–40 фото.",
      },
      {
        num: "06",
        title: "Создание UGC-контента",
        tag: "video",
        dur: "в день съёмки",
        price: "от 100 €",
        desc: "Естественные короткие видео до 30 секунд: продукт в действии, монтаж, добавление текста и музыки. Готовый материал — в день съёмки.",
      },
    ],
    serviceAlt: [
      "Уход за лицом гуа-шой в халате перед зеркалом",
      "Коробка с косметическими средствами и уходовой продукцией",
      "Выбор товаров в бутике вместе с продавцом",
      "Чтение книги на подоконнике в халате у окна",
      "Тарелка супа рядом с ноутбуком на деревянном столе",
      "Утренний кофе и ноутбук в постели в номере отеля",
    ],
  },
  en: {
    tagline:
      "A marketer based in Tallinn. I create content, teach and consult — helping you unfold yourself and speak about it on social media.",
    heroCta: "Message on Telegram",
    heroBadge: "content you want to watch",
    servicesKicker: "Services",
    servicesTitle: "How can I help?",
    duration: "Duration",
    choose: "Choose",
    feedKicker: "Feed",
    feedTitle: "How it looks",
    feedCta: "Instagram",
    feedAlt: [
      "Hotel-room morning: coffee and a laptop in bed under the caption 'My dopamine menu'",
      "A double scoop of ice cream held up outside the Pargi Kiosk in Tallinn",
      "A grey-blue mansion facade with a balcony and wrought-iron railing",
      "A cruise ship at sunset by the Tallinn harbour viewing steps",
      "A Crosley record player spinning Harry Styles, candles beside it",
    ],
    shortsTitle: "UGC examples",
    shortsBody: "Short videos from shoots, reviews and behind the scenes.",
    shortsCta: "Watch on YouTube",
    shortsAlt: [
      "YouTube Shorts preview from Eleonora Kupczyk #1",
      "YouTube Shorts preview from Eleonora Kupczyk #2",
      "YouTube Shorts preview from Eleonora Kupczyk #3",
      "YouTube Shorts preview from Eleonora Kupczyk #4",
    ],
    shortsPlay: "Watch video",
    contactKicker: "Contact",
    contactTitle: "Let's build your blog",
    contactBody:
      "For anything, write me on Telegram — I reply personally and help you pick the right format for your goal.",
    contactCta: "Message on Telegram",
    phone: "Phone",
    services: [
      {
        num: "01",
        title: "Express blog review",
        tag: "online",
        dur: "1 hour",
        price: "50 €",
        desc: "A call up to an hour: first impression of your blog, what to improve, how to open up your topics, quick content ideas, 2026 trends and a review of mistakes.",
      },
      {
        num: "02",
        title: "Account review",
        tag: "online / offline",
        dur: "2–2.5 hours",
        price: "150 €",
        desc: "Profile audit, personality unpacking and positioning. We go through your bio visual, highlights and feed, how to make catchy content and grow your account.",
      },
      {
        num: "03",
        title: "How to make UGC",
        tag: "+ pitch example",
        dur: "2–2.5 hours",
        price: "150 €",
        desc: "Everything from the account review plus how to create UGC content and pitch yourself to brands — with a ready pitch-email example.",
      },
      {
        num: "04",
        title: "Personal mentorship",
        tag: "4 sessions",
        dur: "1 month",
        price: "320 €",
        desc: "Strategy and positioning, competitor analysis, account design, visual content, stories, copywriting, promotion, finding clients and monetization.",
      },
      {
        num: "05",
        title: "Content shoot",
        tag: "Tallinn",
        dur: "2–4 days",
        price: "200 €",
        desc: "Briefing, moodboard, location, props and styling, shooting and retouching. A ready 15–20 frame feed layout, 30–40 photos.",
      },
      {
        num: "06",
        title: "UGC content creation",
        tag: "video",
        dur: "same day",
        price: "from 100 €",
        desc: "Natural short videos up to 30 seconds: product in action, editing, text and music. Footage delivered the day of the shoot.",
      },
    ],
    serviceAlt: [
      "Gua sha facial massage in a bathrobe in front of a mirror",
      "An unboxed set of skincare products",
      "Browsing homeware in a boutique with a shop assistant",
      "Reading on a windowsill in a bathrobe",
      "A bowl of soup beside a laptop on a wooden table",
      "Morning coffee and a laptop in a hotel bed",
    ],
  },
};

interface LocaleContextValue {
  lang: Locale;
  t: Translation;
  toggleLang: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Locale>("en");

  const toggleLang = useCallback(() => {
    setLang((current) => (current === "ru" ? "en" : "ru"));
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      lang,
      t: dictionaries[lang],
      toggleLang,
    }),
    [lang, toggleLang],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
