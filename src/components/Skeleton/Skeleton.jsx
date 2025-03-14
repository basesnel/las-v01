import HeaderSkeleton from "./HeaderSkeleton/HeaderSkeleton";
import BannerSkeleton from "./BannerSkeleton/BannerSkeleton";
import IntroSkeleton from "./IntroSkeleton/IntroSkeleton";
import ServicesSkeleton from "./ServicesSkeleton/ServicesSkeleton";
import TowtruckSkeleton from "./TowtruckSkeleton/TowtruckSkeleton";

import styles from "./styles.module.css";

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <HeaderSkeleton />
      <BannerSkeleton />
      <IntroSkeleton />
      <ServicesSkeleton />
      <TowtruckSkeleton />
    </div>
  );
};

export default Skeleton;
