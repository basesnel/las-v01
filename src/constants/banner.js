import formatDate from "../helpers/formatDate";

const banner = {
  subTitle: {
    en: "it's a quality car service in poltava",
    uk: "якісний авто-сервіс у полтаві",
  },
  text: {
    en: "Services for cars. We invite you to visit LAS, where you can get a full range of quality services:",
    uk: "Послуги для автомобілів. Запрошуємо Вас відвідати LAS, де Ви зможете отримати повний спектр якісних послуг:",
  },
  link: { en: "to services", uk: "до послуг" },
  data: {
    en: `Auto-tool | ${formatDate(new Date(), "en-US")}`,
    uk: `Авто-інструмент | ${formatDate(new Date(), "uk")}`,
  },
};

export default banner;
