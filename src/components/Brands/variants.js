const brandList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const brandItem = {
  hiddenFirst: { scale: 0, opacity: 0, x: -50, y: -50 },
  hiddenSecond: { scale: 0, opacity: 0, x: 50, y: -50 },
  hiddenThird: { scale: 0, opacity: 0, x: -50, y: 50 },
  hiddenFourth: { scale: 0, opacity: 0, x: 50, y: 50 },
  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
};

const brandLink = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: [1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    rotate: [0, 0, -13, 8, -5, 3, -2, 1, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.3, 0.4, 0.64, 0.8, 0.89, 0.95, 0.99, 1],
    },
  },
  tap: {
    scale: 0.8,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const switchStat = (i) => {
  switch (i % 4) {
    case 0:
      return "hiddenFirst";

    case 1:
      return "hiddenSecond";

    case 2:
      return "hiddenThird";

    case 3:
      return "hiddenFourth";

    default:
      return;
  }
};

export { brandList, brandItem, brandLink, switchStat };
