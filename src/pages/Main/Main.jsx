import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Intro from "../../components/Intro/Intro";
import Services from "../../components/Services/Services";
import Features from "../../components/Features/Features";
import Gallery from "../../components/Gallery/Gallery";
import ContactUs from "../../components/ContactUs/ContactUs";
import ContactUsSkeleton from "../../components/ContactUsSkeleton/ContactUsSkeleton";
import Brands from "../../components/Brands/Brands";
import HeaderSkeleton from "../../components/HeaderSkeleton/HeaderSkeleton";
import BannerSkeleton from "../../components/BannerSkeleton/BannerSkeleton";
import IntroSkeleton from "../../components/IntroSkeleton/IntroSkeleton";
import FeaturesSkeleton from "../../components/FeaturesSkeleton/FeaturesSkeleton";
import GalletySkeleton from "../../components/GallerySkeleton/GallerySkeleton";
import TowtruckSkeleton from "../../components/TowtruckSkeleton/TowtruckSkeleton";
import ServicesSkeleton from "../../components/ServicesSkeleton/ServicesSkeleton";
import BrandsSkeleton from "../../components/BrandsSkeleton/BrandsSkeleton";
import FooterSkeleton from "../../components/FooterSkeleton/FooterSkeleton";
import TowTruck from "../../components/TowTruck/TowTruck";
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
        <motion.div
          key="mainLoading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <HeaderSkeleton />
          <BannerSkeleton />
          <IntroSkeleton />
          <ServicesSkeleton />
          <TowtruckSkeleton />
          <GalletySkeleton />
          <FeaturesSkeleton />
          <ContactUsSkeleton />
          <BrandsSkeleton />
          <FooterSkeleton />
        </motion.div>
      ) : (
        // <motion.div
        //   key="mainLoaded"
        //   initial={{ opacity: 0, scale: 0.3 }}
        //   animate={{ opacity: 1, scale: 1 }}
        // >
        <>
          <Header />
          <main>
            <Banner />
            {/* <BannerSkeleton /> */}
            <Intro />
            {/* <IntroSkeleton /> */}
            <Services />
            {/* <ServicesSkeleton /> */}
            <TowTruck />
            {/* <TowtruckSkeleton /> */}
            <Gallery />
            {/* <GalletySkeleton /> */}
            <Features />
            {/* <FeaturesSkeleton /> */}
            <ContactUs />
            {/* <ContactUsSkeleton /> */}
            <Brands />
            {/* <BrandsSkeleton /> */}
          </main>
          <Footer />
          {/* <FooterSkeleton /> */}
        </>
        // </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Main;
