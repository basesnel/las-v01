const course = 42;
function enCountPrice() {
  // console.log(this);
  return `from $${Math.ceil(this.count / course)}`;
}

function ukCountPrice() {
  // console.log(this);
  return `від ${this.count} грн`;
}

const services = [
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
    service: { en: "Auto parts", uk: "Авто-запчастини" },
    price: {
      count: 2000,
      en: enCountPrice,
      uk: ukCountPrice,
    },
  },
  {
    id: 2,
    service: {
      en: "Sale of rubber for any type",
      uk: "Продаж гуми будь-якого типу",
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
    service: { en: "Straightning, painting", uk: "Випрямлення, фарбування" },
    price: {
      count: 16000,
      en: enCountPrice,
      uk: ukCountPrice,
    },
  },
  {
    id: 5,
    service: {
      en: "Conditioner's maintain",
      uk: "Обслуговування кондиціонера",
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
      count: 12000,
      en: enCountPrice,
      uk: ukCountPrice,
    },
  },
  {
    id: 7,
    service: {
      en: "Comprehinsive car inspection",
      uk: "Комплексна перевірка авто",
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
      en: "Glass wrapping and pasting",
      uk: "Обгортання та обклеювання скла",
    },
    price: {
      count: 2900,
      en: enCountPrice,
      uk: ukCountPrice,
    },
  },
  {
    id: 9,
    service: {
      en: "Servicing of electric cars",
      uk: "Обслуговування електромобілів",
    },
    price: {
      count: 4000,
      en: enCountPrice,
      uk: ukCountPrice,
    },
  },
];

export default services;
