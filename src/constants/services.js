const course = 42;
function enCountPrice() {
  return `from $${Math.ceil(this.count / course)}`;
}

function ukCountPrice() {
  return `від ${this.count} ₴`;
}

const services = {
  subTitle: {
    en: "entrust your car to the best craftsmen",
    uk: "довірте свою машину найкращим майстрам",
  },
  title: {
    en: "services",
    uk: "послуги",
  },
  reference: {
    en: "online-bookung",
    uk: "бронювання",
  },
  list: [
    {
      id: 0,
      service: { en: "STO", uk: "СТО" },
      price: {
        count: 4000,
        en: enCountPrice,
        uk: ukCountPrice,
      },
    },
    {
      id: 1,
      service: { en: "Auto parts", uk: "Автозапчастини" },
      price: {
        count: 2000,
        en: enCountPrice,
        uk: ukCountPrice,
      },
    },
    {
      id: 2,
      service: {
        en: "Sale of rubber for any type of transport",
        uk: "Продаж автогуми на будь-який вид транспорту",
      },
      price: {
        count: 3500,
        en: enCountPrice,
        uk: ukCountPrice,
      },
    },
    {
      id: 3,
      service: {
        en: "Repair of any complexity",
        uk: "Ремонт будь-якої складності",
      },
      price: {
        count: 2000,
        en: enCountPrice,
        uk: ukCountPrice,
      },
    },
    {
      id: 4,
      service: {
        en: "Straightning, painting of a high level",
        uk: "Рихтування, малярні роботи високого рівня",
      },
      price: {
        count: 1600,
        en: enCountPrice,
        uk: ukCountPrice,
      },
    },
    {
      id: 5,
      service: {
        en: "Refueling and maintenance of car air conditioners",
        uk: "Заправка та обслуговування автокондиціонерів",
      },
      price: {
        count: 4200,
        en: enCountPrice,
        uk: ukCountPrice,
      },
    },
    {
      id: 6,
      service: {
        en: "Sale and pasting of glass",
        uk: "Продаж та вклейка скла",
      },
      price: {
        count: 1200,
        en: enCountPrice,
        uk: ukCountPrice,
      },
    },
    {
      id: 7,
      service: {
        en: "Comprehensive inspection of the car before purchase",
        uk: "Комплексна перевірка авто перед купівлею",
      },
      price: {
        count: 6000,
        en: enCountPrice,
        uk: ukCountPrice,
      },
    },
    {
      id: 8,
      service: {
        en: "Pasting with armored film and glass tinting",
        uk: "Оклейка броньоплівкою та тонування скла",
      },
      price: {
        count: 6000,
        en: enCountPrice,
        uk: ukCountPrice,
      },
    },
    {
      id: 9,
      service: {
        en: "Car certification",
        uk: "Сертифікація авто",
      },
      price: {
        count: 6000,
        en: enCountPrice,
        uk: ukCountPrice,
      },
    },
    {
      id: 10,
      service: {
        en: "Tow truck",
        uk: "Евакуатор",
      },
      price: {
        count: 6000,
        en: enCountPrice,
        uk: ukCountPrice,
      },
    },
    {
      id: 11,
      service: {
        en: "Other services",
        uk: "Інші послуги",
      },
      price: {
        count: 6000,
        en: enCountPrice,
        uk: ukCountPrice,
      },
    },
  ],
};

export default services;
