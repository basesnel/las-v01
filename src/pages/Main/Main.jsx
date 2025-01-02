import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import HeaderSkeleton from "../../components/HeaderSkeleton/HeaderSkeleton";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Intro from "../../components/Intro/Intro";
import Services from "../../components/Services/Services";
import Features from "../../components/Features/Features";
import Gallery from "../../components/Gallery/Gallery";
import ContactUs from "../../components/ContactUs/ContactUs";
import Brands from "../../components/Brands/Brands";
import BannerSkeleton from "../../components/BannerSkeleton/BannerSkeleton";
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
      {/* <AnimatePresence mode="wait">
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
      </AnimatePresence> */}

      {isLoading ? null : <Header />}

      <main>
        {isLoading ? (
          <motion.div
            key="bannerLoading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BannerSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="bannerLoaded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Banner />
          </motion.div>
        )}
        <Intro />
        <Services />
        <Gallery />
        <Features />
        {/* <Shop /> */}
        <ContactUs />
        <Brands />
      </main>
      <Footer />
    </>
  );
};

export default Main;
