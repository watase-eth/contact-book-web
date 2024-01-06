import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import CreateBounty from "../components/createBounty";

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
              <h3>Let's Go! :</h3>
              <p>Create PubKey Here</p>
              <a
                href="https://codepen.io/Pro-Pro-the-scripter/pen/zYyyNbJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Create PubKey
              </a>
              <CreateBounty />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
