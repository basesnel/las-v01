const header = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const backdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.8,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

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
  light: { color: "#f0f0f0" },
  dark: { color: "#171717" },
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

export { header, backdrop, list, item, link };
