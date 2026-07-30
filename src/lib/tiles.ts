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
  tiles.t0_2,
  tiles.t1_2,
  tiles.t0_4,
  tiles.t0_1,
  tiles.t1_0,
  tiles.t0_5,
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

const instagramPost = (image: StaticImageData, path: string): WorkItem => ({
  kind: "photo",
  image,
  href: `https://www.instagram.com/p/${path}/`,
});

export const workGallery: Record<"shoot" | "consult" | "collab", WorkItem[]> = {
  shoot: [
    youtubeShort("AY2uPhvOnNE"),
    youtubeShort("C7OTW5h9Avk"),
    youtubeShort("GXtn6NLEiYM"),
    youtubeShort("RD6y9a7GZTk"),
  ],
  consult: [
    instagramPost(tiles.t1, "C_JDCvDtC2A"),
    instagramPost(tiles.t2, "Cwfi-drNcR1"),
  ],
  collab: [
    instagramPost(tiles.t3, "C8T7E5KNQJW"),
    instagramPost(tiles.t4, "C-IXsJYNQnk"),
    instagramPost(tiles.t5, "DFAUU7Yt17o"),
  ],
};
