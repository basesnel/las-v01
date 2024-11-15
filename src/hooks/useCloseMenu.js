import { useEffect, useLayoutEffect } from "react";

const useCloseMenu = (showMenu, closeMenu) => {
  const mediaQuery = "(max-width: 768px)";
  const query = window.matchMedia(mediaQuery);

  useEffect(() => {
    const escFunction = (event) => {
      if (event.key === "Escape") {
        showMenu && closeMenu();
      }
    };

    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [showMenu]);

  useLayoutEffect(() => {
    const updateValue = () => {
      !query.matches && closeMenu();
    };

    query.addEventListener("change", updateValue);

    return () => query.removeEventListener("change", updateValue);
  }, [query]);
};

export default useCloseMenu;
