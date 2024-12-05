const featureItem = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const statItem = {
  hidden: { scale: 0, opacity: 0 },
  oddVisible: { scale: 1, opacity: 1, x: 0, y: -36 },
  evenVisible: { scale: 1, opacity: 1, x: 0, y: 0 },
};

const switchStat = (i) => {
  switch (i % 4) {
    case 0:
      return { originX: 0, originY: 0 };

    case 1:
      return { originX: 1, originY: 0 };

    case 2:
      return { originX: 0, originY: 1 };

    case 3:
      return { originX: 1, originY: 1 };

    default:
      return;
  }
};

export { featureItem, statItem, switchStat };
