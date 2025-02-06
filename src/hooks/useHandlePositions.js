import { useState } from "react";

const swipeConfidenceThreshold = 65000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const useHandlePositions = (countImages) => {
  const [positionIndexes, setPositionIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);

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

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updateIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % countImages
      );
      return updateIndexes;
    });
  };

  const handlePrev = () => {
    setPositionIndexes((prevIndexes) => {
      const updateIndexes = prevIndexes.map((prevIndex) =>
        prevIndex === 0
          ? (prevIndex + countImages - 1) % countImages
          : (prevIndex - 1) % countImages
      );
      return updateIndexes;
    });
  };

  const handleDrag = (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      handleNext();
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrev();
    }
  };

  const handleSwiping = (i, direction = true, count = 2) => {
    const interval = (i) => {
      return 300 - i * 50;
    };

    setTimeout(() => {
      if (i < count) {
        direction ? handleNext() : handlePrev();
      }

      i++;

      if (i < count) {
        handleSwiping(i, (direction = direction), count);
      }
    }, interval(i));
  };

  return {
    positionIndexes,
    positions,
    handleNext,
    handlePrev,
    handleDrag,
    handleSwiping,
  };
};

export default useHandlePositions;
