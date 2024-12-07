const socList = {
  hidden: { opacity: 0, scale: 0.8, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: -90,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 300,
    },
  },
};

const socLink = {
  hover: {
    scale: 1.2,
    color: "#f67307",
    transition: {
      type: "spring",
      stiffness: 300,
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

export { socList, socLink };
