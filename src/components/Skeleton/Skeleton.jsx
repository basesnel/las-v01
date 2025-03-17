import HeaderSkeleton from "./HeaderSkeleton/HeaderSkeleton";
import BannerSkeleton from "./BannerSkeleton/BannerSkeleton";
import IntroSkeleton from "./IntroSkeleton/IntroSkeleton";
import ServicesSkeleton from "./ServicesSkeleton/ServicesSkeleton";
import TowtruckSkeleton from "./TowtruckSkeleton/TowtruckSkeleton";
import GallerySkeleton from "./GallerySkeleton/GallerySkeleton";
import FeaturesSkeleton from "./FeaturesSkeleton/FeaturesSkeleton";
import ContactUsSkeleton from "./ContactUsSkeleton/ContactUsSkeleton";

import styles from "./styles.module.css";

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <HeaderSkeleton />
      <BannerSkeleton />
      <IntroSkeleton />
      <ServicesSkeleton />
      <TowtruckSkeleton />
      <GallerySkeleton />
      <FeaturesSkeleton />
      <ContactUsSkeleton />
    </div>
  );
};

export default Skeleton;
