import Banner from "../../components/Banner/Banner";
import Intro from "../../components/Intro/Intro";
import Services from "../../components/Services/Services";
import Features from "../../components/Features/Features";
import Automechanics from "../../components/Automechanics/Automechanics";
import Gallery from "../../components/Gallery/Gallery";
import ContactUs from "../../components/ContactUs/ContactUs";
import Clients from "../../components/Clients/Clients";
import Shop from "../../components/Shop/Shop";

// import styles from "./styles.module.css";

const Main = () => {
  return (
    <main>
      <Banner />
      <Intro />
      <Services />
      <Features />
      <Shop />
      <Automechanics />
      <Gallery />
      <ContactUs />
      <Clients />
    </main>
  );
};

export default Main;
