const featureItem = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

// const statItem = {
//   hiddenFirst: { scale: 0, opacity: 0, x: -50, y: -50 },
//   hiddenSecond: { scale: 0, opacity: 0, x: 50, y: -50 },
//   hiddenThird: { scale: 0, opacity: 0, x: -50, y: 50 },
//   hiddenFourth: { scale: 0, opacity: 0, x: 50, y: 50 },
//   oddVisible: { scale: 1, opacity: 1, x: 0, y: -36 },
//   evenVisible: { scale: 1, opacity: 1, x: 0, y: 0 },
// };

const statItem = {
  hidden: { scale: 0, opacity: 0 },
  oddVisible: { scale: 1, opacity: 1, x: 0, y: -36 },
  evenVisible: { scale: 1, opacity: 1, x: 0, y: 0 },
};

// const switchStat = (i) => {
//   switch (i % 4) {
//     case 0:
//       return "hiddenFirst";

//     case 1:
//       return "hiddenSecond";

//     case 2:
//       return "hiddenThird";

//     case 3:
//       return "hiddenFourth";

//     default:
//       return;
//   }
// };

const switchStat = (i) => {
  switch (i % 4) {
    case 0:
      return { originX: 0, originY: 0 };

    case 1:
      return { originX: 1, originY: 0 };

    case 2:
      return { originX: 0, originY: 1 };

    case 3:
      return { originX: 1, originY: 1 };

    default:
      return;
  }
};

export { featureItem, statItem, switchStat };
