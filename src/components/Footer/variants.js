const date = {
  hidden: { x: -100, opacity: 0, scaleX: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scaleX: 1,
    transition: { type: "tween", duration: 0.5 },
  },
};

const copyright = {
  hidden: { y: 20, opacity: 0, scaleY: 0 },
  visible: {
    y: 0,
    opacity: 1,
    scaleY: 1,
    transition: { type: "tween", duration: 0.5 },
  },
};

const socList = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const socItem = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const socLink = {
  hover: {
    scale: 1.3,
    color: "#f67307",
    x: 13,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.8,
    x: -13,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

export { date, copyright, socList, socItem, socLink };
