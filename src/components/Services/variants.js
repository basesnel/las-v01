const outerList = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.2,
      when: "beforeChildren",
    },
  },
};

const innerList = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.2,
      when: "beforeChildren",
    },
  },
};

const innerItem = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export { outerList, innerList, innerItem };
