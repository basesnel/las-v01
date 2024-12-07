const date = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.5 },
  },
};

const copyright = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", duration: 0.5 },
  },
};

// const socList = {
//   hidden: { scale: 0 },
//   visible: {
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//     },
//   },
// };

const socItem = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
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

export { date, copyright, socItem, socLink };
