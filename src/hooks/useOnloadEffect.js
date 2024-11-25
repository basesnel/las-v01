import { useEffect } from "react";

const useOnloadEffect = (effectCallback) => {
  useEffect(() => {
    window.addEventListener("load", effectCallback);
    return () => window.removeEventListener("load", effectCallback);
  }, []);
};

export default useOnloadEffect;
