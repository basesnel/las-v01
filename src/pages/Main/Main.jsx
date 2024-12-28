import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Intro from "../../components/Intro/Intro";
import Services from "../../components/Services/Services";
import Features from "../../components/Features/Features";
import Gallery from "../../components/Gallery/Gallery";
import ContactUs from "../../components/ContactUs/ContactUs";
import Brands from "../../components/Brands/Brands";
import HeaderSkeleton from "../../components/HeaderSkeleton/HeaderSkeleton";
import { useState, useEffect } from "react";
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
      {isLoading ? <HeaderSkeleton /> : <Header />}
      {/* <Header /> */}

      <main>
        <Banner />
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
