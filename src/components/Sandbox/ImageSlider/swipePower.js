const swipeConfidenceThreshold = 65000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export { swipeConfidenceThreshold, swipePower };
