import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import AddContact from "../components/createBounty";
import ContactList from "../components/contact-list";
import Bounties from "../components/bounties";

const Home: NextPage = () => {
  const address = useAddress();

  return (
    <div className={styles.container}>
      <div className={styles.addressContainer}>
        <div className={styles.addressHeader}>
          <h1>Create Bounty</h1>
          <ConnectWallet />
        </div>
        {address && (
          <div className={styles.addressListContainer}>
            <div className={styles.addressListHeader}>
              <h3>Let's Go!:</h3>
              <AddContact />
            </div>
            <bounties />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
