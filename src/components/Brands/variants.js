const brandItem = {
  hidden: { scale: 0, opacity: 0 },
  visible: { opacity: 1, scale: 1 },
};

const brandLink = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: [1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1],
    rotate: [0, 0, -13, 8, -5, 3, -2, 1, 0],
    transition: {
      duration: 0.5,
      times: [0, 0.3, 0.4, 0.64, 0.8, 0.89, 0.95, 0.99, 1],
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const switchBrand = (i) => {
  switch (i % 4) {
    case 0:
      return { originX: 1, originY: 1 };

    case 1:
      return { originX: 0, originY: 1 };

    case 2:
      return { originX: 1, originY: 0 };

    case 3:
      return { originX: 0, originY: 0 };

    default:
      return;
  }
};

export { brandItem, brandLink, switchBrand };
