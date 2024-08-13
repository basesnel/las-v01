import Banner from "../../components/Banner/Banner";
import Introduction from "../../components/Introduction/Introduction";
import Services from "../../components/Services/Services";
import Features from "../../components/Features/Features";
import Automechanics from "../../components/Automechanics/Automechanics";
import Gallery from "../../components/Gallery/Gallery";
import Contacts from "../../components/Contacts/Contacts";
import Clients from "../../components/Clients/Clients";

import styles from "./styles.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <Banner />
      <Introduction />
      <Services />
      <Features />
      <Automechanics />
      <Gallery />
      <Contacts />
      <Clients />
    </main>
  );
};

export default Main;
