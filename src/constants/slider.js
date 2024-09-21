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

const slider = {
  slides: [
    {
      mobWEBP: `${mobWebp1}`,
      mobJPG: `${mobJpg1}`,
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
