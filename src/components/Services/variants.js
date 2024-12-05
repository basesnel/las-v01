const outerList = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    // transition: {
    //   type: "tween",
    //   duration: 0.2,
    // },
    transition: {
      type: "tween",
      duration: 0.5,
      when: "beforeChildren",
      // staggerChildren: 0.5,
      // staggerDirection: -1,
    },
  },
};

const innerList = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 0.2,
      type: "tween",
      duration: 0.2,
    },
  },
};

const innerItem = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.4,
      type: "tween",
      duration: 0.5,
    },
  },
};

export { outerList, innerList, innerItem };
