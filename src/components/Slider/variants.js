const buttons = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 300 },
  },
};

const buttonPrev = {
  hover: {
    scale: 1.2,
    color: "#f0f0f0",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const buttonNext = {
  hover: {
    scale: 1.2,
    color: "#f0f0f0",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.9,
  },
};

const buttonDots = {
  hidden: { y: 100, opacity: 0, scaleY: 0 },
  visible: {
    y: 0,
    opacity: 1,
    scaleY: 1,
    transition: { delay: 0.5, type: "spring", stiffness: 300 },
  },
};

const buttonDot = {
  hover: {
    scale: 1.4,
    color: "#f0f0f0",
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.9,
  },
};

export { buttons, buttonPrev, buttonNext, buttonDots, buttonDot };
