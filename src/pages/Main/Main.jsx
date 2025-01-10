import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Intro from "../../components/Intro/Intro";
import Services from "../../components/Services/Services";
import Features from "../../components/Features/Features";
import Gallery from "../../components/Gallery/Gallery";
import ContactUs from "../../components/ContactUs/ContactUs";
import Brands from "../../components/Brands/Brands";
// import Shop from "../../components/Shop/Shop";

// import styles from "./styles.module.css";

const Main = () => {
  return (
    <>
      <Header />
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
