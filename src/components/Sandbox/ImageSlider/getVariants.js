const positions = [
  "center",
  "left4",
  "left3",
  "left2",
  "left1",
  "left",
  "behind",
  "right",
  "right1",
  "right2",
  "right3",
  "right4",
];

const galleryMediaQueries = {
  mobile: "(max-width: 420px)",
  smartphone: "(min-width: 421px) and (max-width: 479px)",
  tabletFirst: "(min-width: 480px) and (max-width: 590px)",
  tabletSecond: "(min-width: 591px) and (max-width: 700px)",
  tabletThird: "(min-width: 701px) and (max-width: 767px)",
  laptopFirst: "(min-width: 768px) and (max-width: 860px)",
  laptopSecond: "(min-width: 861px) and (max-width: 960px)",
  laptopThird: "(min-width: 961px) and (max-width: 1100px)",
  laptopFourth: "(min-width: 1101px) and (max-width: 1199px)",
  desktopFirst: "(min-width: 1200px) and (max-width: 1299px)",
  desktopSecond: "(min-width: 1300px) and (max-width: 1399px)",
  desktopThird: "(min-width: 1400px)",
};

const getVariants = (media) => {
  const variantsMobile = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 8 },
    left4: { x: "-60%", scale: 0, opacity: 0, zIndex: 5 },
    left3: { x: "0%", scale: 0, opacity: 0, zIndex: 3 },
    left2: { x: "0%", scale: 0, opacity: 0, zIndex: 1 },
    left1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    left: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right2: { x: "0%", scale: 0, opacity: 0, zIndex: 1 },
    right3: { x: "0%", scale: 0, opacity: 0, zIndex: 3 },
    right4: { x: "60%", scale: 0, opacity: 0, zIndex: 5 },
  };

  const variantsSmartphone = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 8 },
    left4: { x: "-30%", scale: 0.8, opacity: 0.8, zIndex: 5 },
    left3: { x: "-80%", scale: 0, opacity: 0, zIndex: 3 },
    left2: { x: "0%", scale: 0, opacity: 0, zIndex: 1 },
    left1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    left: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right2: { x: "0%", scale: 0, opacity: 0, zIndex: 1 },
    right3: { x: "80%", scale: 0, opacity: 0, zIndex: 3 },
    right4: { x: "30%", scale: 0.8, opacity: 0.8, zIndex: 5 },
  };

  const variantsTabletFirstStep = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 8 },
    left4: { x: "-40%", scale: 0.8, opacity: 0.8, zIndex: 5 },
    left3: { x: "-90%", scale: 0, opacity: 0.5, zIndex: 3 },
    left2: { x: "0%", scale: 0, opacity: 0, zIndex: 1 },
    left1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    left: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right2: { x: "0%", scale: 0, opacity: 0, zIndex: 1 },
    right3: { x: "90%", scale: 0, opacity: 0.5, zIndex: 3 },
    right4: { x: "40%", scale: 0.8, opacity: 0.8, zIndex: 5 },
  };

  const variantsTabletSecondStep = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 8 },
    left4: { x: "-40%", scale: 0.8, opacity: 0.8, zIndex: 5 },
    left3: { x: "-80%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    left2: { x: "-115%", scale: 0, opacity: 0, zIndex: 1 },
    left1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    left: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right2: { x: "115%", scale: 0, opacity: 0, zIndex: 1 },
    right3: { x: "80%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    right4: { x: "40%", scale: 0.8, opacity: 0.8, zIndex: 5 },
  };

  const variantsTabletThirdStep = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 8 },
    left4: { x: "-60%", scale: 0.8, opacity: 0.8, zIndex: 5 },
    left3: { x: "-100%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    left2: { x: "-135%", scale: 0, opacity: 0, zIndex: 1 },
    left1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    left: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right2: { x: "135%", scale: 0, opacity: 0, zIndex: 1 },
    right3: { x: "100%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    right4: { x: "60%", scale: 0.8, opacity: 0.8, zIndex: 5 },
  };

  const variantsLaptopFirst = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 8 },
    left4: { x: "-50%", scale: 0.8, opacity: 0.8, zIndex: 5 },
    left3: { x: "-90%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    left2: { x: "-135%", scale: 0, opacity: 0, zIndex: 1 },
    left1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    left: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right2: { x: "135%", scale: 0, opacity: 0, zIndex: 1 },
    right3: { x: "90%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    right4: { x: "50%", scale: 0.8, opacity: 0.8, zIndex: 5 },
  };

  const variantsLaptopSecond = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 8 },
    left4: { x: "-60%", scale: 0.8, opacity: 0.8, zIndex: 5 },
    left3: { x: "-100%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    left2: { x: "-140%", scale: 0, opacity: 0, zIndex: 1 },
    left1: { x: "-0%", scale: 0, opacity: 0, zIndex: 0 },
    left: { x: "-0%", scale: 0, opacity: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right2: { x: "140%", scale: 0, opacity: 0, zIndex: 1 },
    right3: { x: "100%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    right4: { x: "60%", scale: 0.8, opacity: 0.8, zIndex: 5 },
  };

  const variantsLaptopThird = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 8 },
    left4: { x: "-70%", scale: 0.8, opacity: 0.8, zIndex: 5 },
    left3: { x: "-115%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    left2: { x: "-150%", scale: 0, opacity: 0, zIndex: 1 },
    left1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    left: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right2: { x: "150%", scale: 0, opacity: 0, zIndex: 1 },
    right3: { x: "115%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    right4: { x: "70%", scale: 0.8, opacity: 0.8, zIndex: 5 },
  };

  const variantsLaptopFourth = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 8 },
    left4: { x: "-80%", scale: 0.8, opacity: 0.8, zIndex: 5 },
    left3: { x: "-135%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    left2: { x: "-180%", scale: 0, opacity: 0, zIndex: 1 },
    left1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    left: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right2: { x: "180%", scale: 0, opacity: 0, zIndex: 1 },
    right3: { x: "135%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    right4: { x: "80%", scale: 0.8, opacity: 0.8, zIndex: 5 },
  };

  const variantsDesktopFirst = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 8 },
    left4: { x: "-75%", scale: 0.8, opacity: 0.8, zIndex: 5 },
    left3: { x: "-115%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    left2: { x: "-160%", scale: 0, opacity: 0, zIndex: 1 },
    left1: { x: "-128%", scale: 0, opacity: 0, zIndex: 0 },
    left: { x: "-145%", scale: 0, opacity: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right: { x: "145%", scale: 0, opacity: 0, zIndex: 0 },
    right1: { x: "128%", scale: 0, opacity: 0, zIndex: 0 },
    right2: { x: "160%", scale: 0, opacity: 0, zIndex: 1 },
    right3: { x: "115%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    right4: { x: "75%", scale: 0.8, opacity: 0.8, zIndex: 5 },
  };

  const variantsDesktopSecond = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 8 },
    left4: { x: "-75%", scale: 0.8, opacity: 0.8, zIndex: 5 },
    left3: { x: "-125%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    left2: { x: "-160%", scale: 0, opacity: 0, zIndex: 1 },
    left1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    left: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right1: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right2: { x: "160%", scale: 0, opacity: 0, zIndex: 1 },
    right3: { x: "125%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    right4: { x: "75%", scale: 0.8, opacity: 0.8, zIndex: 5 },
  };

  const variantsDesktopThird = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 8 },
    left4: { x: "-75%", scale: 0.8, opacity: 0.8, zIndex: 5 },
    left3: { x: "-125%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    left2: { x: "-150%", scale: 0.3, opacity: 0.3, zIndex: 1 },
    left1: { x: "-190%", scale: 0, opacity: 0, zIndex: 0 },
    left: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    behind: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right: { x: "0%", scale: 0, opacity: 0, zIndex: 0 },
    right1: { x: "190%", scale: 0, opacity: 0, zIndex: 0 },
    right2: { x: "150%", scale: 0.3, opacity: 0.3, zIndex: 1 },
    right3: { x: "125%", scale: 0.5, opacity: 0.5, zIndex: 3 },
    right4: { x: "75%", scale: 0.8, opacity: 0.8, zIndex: 5 },
  };

  if (media.mobile) return variantsMobile;

  if (media.smartphone) return variantsSmartphone;

  if (media.tabletFirst) return variantsTabletFirstStep;

  if (media.tabletSecond) return variantsTabletSecondStep;

  if (media.tabletThird) return variantsTabletThirdStep;

  if (media.laptopFirst) return variantsLaptopFirst;

  if (media.laptopSecond) return variantsLaptopSecond;

  if (media.laptopThird) return variantsLaptopThird;

  if (media.laptopFourth) return variantsLaptopFourth;

  if (media.desktopFirst) return variantsDesktopFirst;

  if (media.desktopSecond) return variantsDesktopSecond;

  if (media.desktopThird) return variantsDesktopThird;
};

export { positions, galleryMediaQueries, getVariants };
