import HeaderSkeleton from "./HeaderSkeleton/HeaderSkeleton";
import BannerSkeleton from "./BannerSkeleton/BannerSkeleton";
import IntroSkeleton from "./IntroSkeleton/IntroSkeleton";
import ServicesSkeleton from "./ServicesSkeleton/ServicesSkeleton";
import TowtruckSkeleton from "./TowtruckSkeleton/TowtruckSkeleton";
import GallerySkeleton from "./GallerySkeleton/GallerySkeleton";
import FeaturesSkeleton from "./FeaturesSkeleton/FeaturesSkeleton";
import ContactUsSkeleton from "./ContactUsSkeleton/ContactUsSkeleton";
import BrandsSkeleton from "./BrandsSkeleton/BrandsSkeleton";
import FooterSkeleton from "./FooterSkeleton/FooterSkeleton";

import styles from "./styles.module.css";

const Skeleton = ({ type = null }) => {
  switch (type) {
    case "header":
      return <HeaderSkeleton />;

    case "banner":
      return <BannerSkeleton />;

    case "intro":
      return <IntroSkeleton />;

    case "services":
      return <ServicesSkeleton />;

    case "towtruck":
      return <TowtruckSkeleton />;

    case "gallery":
      return <GallerySkeleton />;

    case "features":
      return <FeaturesSkeleton />;

    case "contactus":
      return <ContactUsSkeleton />;

    case "brands":
      return <BrandsSkeleton />;

    case "footer":
      return <FooterSkeleton />;

    default:
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
          <BrandsSkeleton />
          <FooterSkeleton />
        </div>
      );
  }
};

export default Skeleton;
