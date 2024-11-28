import { useState, useLayoutEffect } from "react";

const useSmallMobile = () => {
  const mediaQuery = "(max-width: 407px)";
  const query = window.matchMedia(mediaQuery);

  const [isSmallMobile, setIsSmallMobile] = useState(query.matches);

  useLayoutEffect(() => {
    const updateMedia = () => {
      query.matches ? setIsSmallMobile(true) : setIsSmallMobile(false);
    };

    query.addEventListener("change", updateMedia);

    return () => query.removeEventListener("change", updateMedia);
  }, [query]);

  return isSmallMobile;
};

export default useSmallMobile;
