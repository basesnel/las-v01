import HeaderSkeleton from "./HeaderSkeleton/HeaderSkeleton";
import BannerSkeleton from "./BannerSkeleton/BannerSkeleton";

import styles from "./styles.module.css";

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <HeaderSkeleton />
      <BannerSkeleton />
    </div>
  );
};

export default Skeleton;
