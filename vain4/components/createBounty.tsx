import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/addresses";

export default function CreateBounty() {
  const [createBounty, setcreateBounty] = useState(false);
  const [pubkey, setPubkey] = useState("");
  const [Custom, setCustom] = useState("");
  const [nLeading0s, setnLeading0s] = useState("");
  const [flag, setflag] = useState("");
  const [locked, setlocked] = useState("");
  const [amount, setamount] = useState("");

  function resetForm() {
    setPubkey("");
    setCustom("");
    setnLeading0s("");
    setflag("");
    setlocked("");
    setamount("");
  }

  return (
    <div>
      {!createBounty ? (
        <button
          className={styles.addContactTriggerButton}
          onClick={() => setcreateBounty(true)}
        >
          Create Bounty
        </button>
      ) : (
        <div className={styles.addContactContainer}>
          <div className={styles.addContactCard}>
            <button
              className={styles.closeButton}
              onClick={() => setcreateBounty(false)}
            >
              Close
            </button>
            <div className={styles.addContactForm}>
              <h3>Create Bounty</h3>
              <input
                type="text"
                placeholder="Pubkey"
                value={pubkey}
                onChange={(e) => setPubkey(e.target.value)}
              />
              <input
                type="text"
                placeholder="Custom"
                value={Custom}
                onChange={(e) => setCustom(e.target.value)}
              />
              <input
                type="text"
                placeholder="N Leading0s"
                value={nLeading0s}
                onChange={(e) => setnLeading0s(e.target.value)}
              />
              <input
                type="text"
                placeholder="Flag"
                value={flag}
                onChange={(e) => setflag(e.target.value)}
              />
              <input
                type="text"
                placeholder="Locked"
                value={locked}
                onChange={(e) => setlocked(e.target.value)}
              />
              <input
                type="text"
                placeholder="Amount of Scry"
                value={amount}
                onChange={(e) => setamount(e.target.value)}
              />
            </div>
            <Web3Button
              contractAddress={CONTRACT_ADDRESS}
              action={(contract) =>
                contract.call("createBounty", [
                  pubkey,
                  Custom,
                  nLeading0s,
                  flag,
                  locked,
                  amount,
                ])
              }
              onSuccess={() => {
                resetForm();
                setcreateBounty(false);
              }}
            >
              Create Bounty
            </Web3Button>
          </div>
        </div>
      )}
    </div>
  );
}
