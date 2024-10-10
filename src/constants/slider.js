import mobJpg1 from "../assets/images/banner/mobile/img-slide-1.jpg";
import mobJpg2 from "../assets/images/banner/mobile/img-slide-2.jpg";
import mobJpg3 from "../assets/images/banner/mobile/img-slide-3.jpg";
import mobWebp1 from "../assets/images/banner/mobile/img-slide-1.webp";
import mobWebp2 from "../assets/images/banner/mobile/img-slide-2.webp";
import mobWebp3 from "../assets/images/banner/mobile/img-slide-3.webp";
import tabJpg1 from "../assets/images/banner/tablet/img-slide-1.jpg";
import tabJpg2 from "../assets/images/banner/tablet/img-slide-2.jpg";
import tabJpg3 from "../assets/images/banner/tablet/img-slide-3.jpg";
import tabWebp1 from "../assets/images/banner/tablet/img-slide-1.webp";
import tabWebp2 from "../assets/images/banner/tablet/img-slide-2.webp";
import tabWebp3 from "../assets/images/banner/tablet/img-slide-3.webp";
import deskPng1 from "../assets/images/banner/desktop/img-slide-1.png";
import deskPng2 from "../assets/images/banner/desktop/img-slide-2.png";
import deskPng3 from "../assets/images/banner/desktop/img-slide-3.png";
import deskWebp1 from "../assets/images/banner/desktop/img-slide-1.webp";
import deskWebp2 from "../assets/images/banner/desktop/img-slide-2.webp";
import deskWebp3 from "../assets/images/banner/desktop/img-slide-3.webp";

import mob1s0480jpg from "../assets/images/banner/mobile/slide-img-1-480.jpg";
import mob1s0480wpp from "../assets/images/banner/mobile/slide-img-1-480.webp";
import mob1s0960jpg from "../assets/images/banner/mobile/slide-img-1-960.jpg";
import mob1s0960wpp from "../assets/images/banner/mobile/slide-img-1-960.webp";
import mob1s1440jpg from "../assets/images/banner/mobile/slide-img-1-1440.jpg";
import mob1s1440wpp from "../assets/images/banner/mobile/slide-img-1-1440.webp";
import mob1s1920jpg from "../assets/images/banner/mobile/slide-img-1-1920.jpg";
import mob1s1920wpp from "../assets/images/banner/mobile/slide-img-1-1920.webp";

const slider = {
  slides: [
    {
      mobWEBP: `${mobWebp1}`,
      mobJPG: `${mobJpg1}`,
      mob1xJPG: `${mob1s0480jpg}`,
      mob1xWBP: `${mob1s0480wpp}`,
      mob2xJPG: `${mob1s0960jpg}`,
      mob2xWBP: `${mob1s0960wpp}`,
      mob3xJPG: `${mob1s1440jpg}`,
      mob3xWBP: `${mob1s1440wpp}`,
      mob4xJPG: `${mob1s1920jpg}`,
      mob4xWBP: `${mob1s1920wpp}`,
      tabWEBP: `${tabWebp1}`,
      tabJPG: `${tabJpg1}`,
      deskWEBP: `${deskWebp1}`,
      deskPNG: `${deskPng1}`,
      alt: {
        en: "Repair of the machine chassis",
        uk: "Ремонт ходової частини машини",
      },
    },
    {
      mobWEBP: `${mobWebp2}`,
      mobJPG: `${mobJpg2}`,
      tabWEBP: `${tabWebp2}`,
      tabJPG: `${tabJpg2}`,
      deskWEBP: `${deskWebp2}`,
      deskPNG: `${deskPng2}`,
      alt: {
        en: "Machine diagnostics",
        uk: "Діагностика машин",
      },
    },
    {
      mobWEBP: `${mobWebp3}`,
      mobJPG: `${mobJpg3}`,
      tabWEBP: `${tabWebp3}`,
      tabJPG: `${tabJpg3}`,
      deskWEBP: `${deskWebp3}`,
      deskPNG: `${deskPng3}`,
      alt: { en: "Engine overhaul", uk: "Капитальний ремонт двигуна" },
    },
  ],
  prev: {
    en: "prev",
    uk: "назад",
  },
  next: {
    en: "next",
    uk: "вперед",
  },
};

export default slider;
