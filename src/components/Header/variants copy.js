const list = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const link = {
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

export { list, item, link };
