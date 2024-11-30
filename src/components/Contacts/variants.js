const contactList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};

const contactItem = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const contactLink = {
  hover: {
    scale: 1.2,
    x: 20,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.8,
  },
};

const contactIcon = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: [1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2],
    rotate: [0, 0, -13, 8, -5, 3, -2, 1, 0],
    transition: {
      delay: 0.5,
      duration: 0.5,
      times: [0, 0.3, 0.4, 0.64, 0.8, 0.89, 0.95, 0.99, 1],
    },
  },
};

export { contactList, contactItem, contactLink, contactIcon };
