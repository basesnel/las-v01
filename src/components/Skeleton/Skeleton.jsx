import HeaderSkeleton from "./HeaderSkeleton/HeaderSkeleton";
import BannerSkeleton from "./BannerSkeleton/BannerSkeleton";
import IntroSkeleton from "./IntroSkeleton/IntroSkeleton";

import styles from "./styles.module.css";

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <HeaderSkeleton />
      <BannerSkeleton />
      <IntroSkeleton />
    </div>
  );
};

export default Skeleton;
