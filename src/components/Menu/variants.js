const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0.4,
    },
  },
};

const position = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: {
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
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const link = {
  hover: {
    scale: 1.2,
    color: "#f67307",
    x: 20,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const socList = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 1.2,
      when: "beforeChildren",
      staggerChildren: 1,
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
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

export { backdrop, position, list, item, link, socList, socItem, socLink };