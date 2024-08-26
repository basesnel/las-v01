import Banner from "../../components/Banner/Banner";
import Introduction from "../../components/Introduction/Introduction";
import Services from "../../components/Services/Services";
import Features from "../../components/Features/Features";
import Automechanics from "../../components/Automechanics/Automechanics";
import Gallery from "../../components/Gallery/Gallery";
import ContactUs from "../../components/ContactUs/ContactUs";
import Clients from "../../components/Clients/Clients";

// import styles from "./styles.module.css";

const Main = () => {
  return (
    <main>
      <Banner />
      <Introduction />
      <Services />
      <Features />
      <Automechanics />
      <Gallery />
      <ContactUs />
      {/* <Feedback />
      <Contacts /> */}
      <Clients />
    </main>
  );
};

export default Main;
