import type { StaticImageData } from "next/image";
import t0_0 from "../../public/images/tiles/t0_0.png";
import t0_1 from "../../public/images/tiles/t0_1.png";
import t0_2 from "../../public/images/tiles/t0_2.png";
import t0_4 from "../../public/images/tiles/t0_4.png";
import t0_5 from "../../public/images/tiles/t0_5.png";
import t1_0 from "../../public/images/tiles/t1_0.png";
import t1_2 from "../../public/images/tiles/t1_2.png";
import t1_4 from "../../public/images/tiles/t1_4.png";
import t1 from "../../public/images/tiles/t1.jpg";
import t2 from "../../public/images/tiles/t2.jpg";
import t3 from "../../public/images/tiles/t3.jpg";
import t4 from "../../public/images/tiles/t4.jpg";
import t5 from "../../public/images/tiles/t5.jpg";
import collab1 from "../../public/images/tiles/collab-1.jpg";
import collab2 from "../../public/images/tiles/collab-2.jpg";
import collab3 from "../../public/images/tiles/collab-3.jpg";
import collab4 from "../../public/images/tiles/collab-4.jpg";
import collab5 from "../../public/images/tiles/collab-5.jpg";
import collab6 from "../../public/images/tiles/collab-6.jpg";
import collab7 from "../../public/images/tiles/collab-7.jpg";
import collab8 from "../../public/images/tiles/collab-8.jpg";
import collab9 from "../../public/images/tiles/collab-9.jpg";
import collab10 from "../../public/images/tiles/collab-10.jpg";
import collab11 from "../../public/images/tiles/collab-11.jpg";
import collab12 from "../../public/images/tiles/collab-12.jpg";
import collab13 from "../../public/images/tiles/collab-13.jpg";
import collab14 from "../../public/images/tiles/collab-14.jpg";
import ugc1 from "../../public/images/tiles/ugc-1.jpg";
import serviceExpressShoot from "../../public/images/services/service-express-shoot.webp";
import serviceExpertPhotoshoot from "../../public/images/services/service-expert-photoshoot.webp";
import serviceBlogReview from "../../public/images/services/service-blog-review.webp";
import serviceAccountReview from "../../public/images/services/service-account-review.webp";
import serviceMentorship from "../../public/images/services/service-mentorship.webp";
import serviceBusinessContent from "../../public/images/services/service-business-content.webp";
import serviceUgcVideo from "../../public/images/services/service-ugc-video-poster.webp";
import serviceUgcBundle from "../../public/images/services/service-ugc-bundle.webp";

export const tiles = {
  t0_0,
  t0_1,
  t0_2,
  t0_4,
  t0_5,
  t1_0,
  t1_2,
  t1_4,
  t1,
  t2,
  t3,
  t4,
  t5,
};

export const serviceImages = [
  serviceExpressShoot,
  serviceBusinessContent,
  serviceExpertPhotoshoot,
  serviceUgcVideo,
  serviceUgcBundle,
];

export const consultServiceImages = [
  serviceBlogReview,
  serviceAccountReview,
  serviceMentorship,
];

export interface WorkItem {
  kind: "photo" | "video";
  image: StaticImageData | string;
  href: string;
}

const youtubeShort = (id: string): WorkItem => ({
  kind: "video",
  image: `https://i.ytimg.com/vi/${id}/oar2.jpg`,
  href: `https://youtube.com/shorts/${id}`,
});

const instagramPost = (
  image: StaticImageData,
  path: string,
  kind: WorkItem["kind"] = "photo",
): WorkItem => ({
  kind,
  image,
  href: `https://www.instagram.com/p/${path}/`,
});

export const workGallery: Record<"shoot" | "collab", WorkItem[]> = {
  shoot: [
    youtubeShort("AY2uPhvOnNE"),
    youtubeShort("C7OTW5h9Avk"),
    youtubeShort("GXtn6NLEiYM"),
    youtubeShort("RD6y9a7GZTk"),
    instagramPost(ugc1, "C87Nuk9NsLq"),
  ],
  collab: [
    instagramPost(collab1, "DZ_1AGIsLTl"),
    instagramPost(collab2, "DYNOTzVszVm"),
    instagramPost(collab3, "DVQ6chpjPbu"),
    instagramPost(collab4, "DSiaA_jjACV"),
    instagramPost(collab5, "DWJfU73DLgo"),
    instagramPost(collab6, "C81rjoWNYlf"),
    instagramPost(collab7, "C60usqFNW2O"),
    instagramPost(collab8, "C53Eaauti29"),
    instagramPost(collab9, "C4QsIfKNX5X"),
    instagramPost(collab10, "C2rf853N--H"),
    instagramPost(collab11, "CuREcVyxwRY"),
    instagramPost(collab12, "CrYAkH2smR7"),
    instagramPost(collab13, "CrNPb59NLTV"),
    instagramPost(collab14, "C9z3-4-MwYn"),
  ],
};
