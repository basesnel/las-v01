import { useContext } from "react";
import { CarouselContext } from "./CarouselContext";

import styles from "./styles.module.css";

const Page = ({ children }) => {
  const { width } = useContext(CarouselContext);

  return (
    <div
      className={styles.pageMainContainer}
      style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Page;
