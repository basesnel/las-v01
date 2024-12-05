const outerList = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

const innerList = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    // transition: {
    //   delay: 0.2,
    //   type: "tween",
    //   duration: 0.2,
    // },
  },
};

const innerItem = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

export { outerList, innerList, innerItem };
