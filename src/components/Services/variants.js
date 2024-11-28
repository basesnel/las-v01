const outerList = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const innerList = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 100,
    },
  },
};

const innerItem = {
  hiddenLeft: { scale: 0.5, opacity: 0, x: -200 },
  hiddenRight: { scale: 0.5, opacity: 0, x: 200 },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
  },
};

export { outerList, innerList, innerItem };
