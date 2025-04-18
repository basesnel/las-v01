import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Intro from "../../components/Intro/Intro";
import Services from "../../components/Services/Services";
import TowTruck from "../../components/TowTruck/TowTruck";
import Gallery from "../../components/Gallery/Gallery";
import Features from "../../components/Features/Features";
import ContactUs from "../../components/ContactUs/ContactUs";
import Brands from "../../components/Brands/Brands";
import Footer from "../../components/Footer/Footer";
import Skeleton from "../../components/Skeleton/Skeleton";
// import ContactUsSkeleton from "../../components/ContactUsSkeleton/ContactUsSkeleton";
// import HeaderSkeleton from "../../components/HeaderSkeleton/HeaderSkeleton";
// import BannerSkeleton from "../../components/BannerSkeleton/BannerSkeleton";
// import IntroSkeleton from "../../components/IntroSkeleton/IntroSkeleton";
// import FeaturesSkeleton from "../../components/FeaturesSkeleton/FeaturesSkeleton";
// import GalletySkeleton from "../../components/GallerySkeleton/GallerySkeleton";
// import TowtruckSkeleton from "../../components/TowtruckSkeleton/TowtruckSkeleton";
// import ServicesSkeleton from "../../components/ServicesSkeleton/ServicesSkeleton";
// import BrandsSkeleton from "../../components/BrandsSkeleton/BrandsSkeleton";
// import FooterSkeleton from "../../components/FooterSkeleton/FooterSkeleton";
// import Shop from "../../components/Shop/Shop";

// import styles from "./styles.module.css";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <Header />
          <main>
            <Banner />
            <Intro />
            <Services />
            <TowTruck />
            <Gallery />
            <Features />
            <ContactUs />
            <Brands />
          </main>
          <Footer />
          {/* <Skeleton /> */}
        </>
      )}
    </AnimatePresence>
  );
};

export default Main;
