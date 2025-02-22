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
import Brands from "../../components/Brands/Brands";
import HeaderSkeleton from "../../components/HeaderSkeleton/HeaderSkeleton";
import BannerSkeleton from "../../components/BannerSkeleton/BannerSkeleton";
import IntroSkeleton from "../../components/IntroSkeleton/IntroSkeleton";
import ServicesSkeleton from "../../components/ServicesSkeleton/ServicesSkeleton";
import GalletySkeleton from "../../components/GallerySkeleton/GallerySkeleton";
import FeaturesSkeleton from "../../components/FeaturesSkeleton/FeaturesSkeleton";
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
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loadingHeader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HeaderSkeleton />
          </motion.div>
        ) : (
          <Header />
        )}
      </AnimatePresence>

      {/* {isLoading ? null : <Header />} */}
      {/* <Header /> */}

      <main>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="bannerLoading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BannerSkeleton />
              <IntroSkeleton />
              <ServicesSkeleton />
              <GalletySkeleton />
            </motion.div>
          ) : (
            <motion.div
              key="bannerLoaded"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Banner />
              <Intro />
              <Services />
              <TowTruck />
              <Gallery />
            </motion.div>
          )}
        </AnimatePresence>
        {/* <Banner />
        <Intro />
        <Services />
        <TowTruck />
        <Gallery /> */}
        <Features />
        {/* <FeaturesSkeleton /> */}
        {/* <Shop /> */}
        <ContactUs />
        <Brands />
      </main>
      <Footer />
    </>
  );
};

export default Main;
