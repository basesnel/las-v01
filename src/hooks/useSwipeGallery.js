import { useEffect } from "react";

const useSwipeGallery = (handleNext, handlePrev) => {
  let i = 0;

  const swipeGallery = (i) => {
    const interval = (i) => {
      if (i < 5) return 400 - 20 * i;
      if (i >= 5) return 300 - 20 * (i - 5);
    };

    setTimeout(() => {
      if (i < 5) {
        handleNext();
      } else {
        handlePrev();
      }

      i++;

      if (i < 8) {
        swipeGallery(i);
      }
    }, interval(i));
  };

  useEffect(() => {
    setInterval(() => {
      swipeGallery(i);
    }, 20000);
  }, []);
};

export default useSwipeGallery;
