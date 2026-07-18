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

export const feedPosts = [
  { image: tiles.t1, href: "https://www.instagram.com/p/C_JDCvDtC2A/" },
  { image: tiles.t2, href: "https://www.instagram.com/p/Cwfi-drNcR1/" },
  { image: tiles.t3, href: "https://www.instagram.com/p/C8T7E5KNQJW/" },
  { image: tiles.t4, href: "https://www.instagram.com/p/C-IXsJYNQnk/" },
  { image: tiles.t5, href: "https://www.instagram.com/p/DFAUU7Yt17o/" },
];

// TODO: swap `href` for the real YouTube Shorts URL once videos are published.
export const shortsPlaceholders = [
  { thumbnail: tiles.t1_2, href: "#" },
  { thumbnail: tiles.t0_1, href: "#" },
  { thumbnail: tiles.t0_4, href: "#" },
  { thumbnail: tiles.t0_5, href: "#" },
  { thumbnail: tiles.t0_0, href: "#" },
];
