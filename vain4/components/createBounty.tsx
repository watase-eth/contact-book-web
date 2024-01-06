import { useState } from "react";
import styles from "../styles/Home.module.css";
import { Web3Button } from "@thirdweb-dev/react";
import { CONTRACT_ADDRESS } from "../const/addresses";

export default function CreateBounty() {
  const [createBounty, setcreateBounty] = useState(false);
  const [pubkey, setPubkey] = useState("");
  const [custom, setcustom] = useState("");
  const [nLeading0s, setnLeading0s] = useState("");
  const [flag, setflag] = useState("");
  const [locked, setlocked] = useState("");
  const [amount, setamount] = useState("");

  function resetForm() {
    setPubkey("");
    setcustom("");
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
                placeholder="Custom ex.0x1337"
                value={custom}
                onChange={(e) => setcustom(e.target.value)}
              />
              <input
                type="text"
                placeholder="N Leading0s ex. 0x0000, n=4 "
                value={nLeading0s}
                onChange={(e) => setnLeading0s(e.target.value)}
              />
              <input
                type="text"
                placeholder="Flag"
                value={flag}
                onChange={(e) => setflag(e.target.value)}
              />
              <p>
                0 = user wallet EOA with n leading 0s <br />
                1 = contract with n leading 0s <br />
                2 = create 2 contract with n leading 0s <br />
                3 = user wallet EOA custom <br />4 = contract custom <br />5
                create 2 contracts
              </p>
              <input
                type="text"
                placeholder="Locked Set to 0"
                value={locked}
                onChange={(e) => setlocked(e.target.value)}
              />
              <input
                type="text"
                placeholder="Amount of Scry Bounty"
                value={amount}
                onChange={(e) => setamount(e.target.value)}
              />
            </div>
            <div>
              <Web3Button
                contractAddress="0x64ba55A341EC586A4C5d58d6297CdE5125aB55bC"
                action={async (contract) => {
                  const spenderAddress =
                    "0x000000000001F04A9533e92d7AD4dDe7DC19a8F3";
                  const amount = 10000;
                  await contract.erc20.setAllowance(spenderAddress, amount);
                  alert("Scry Approved for Vain");
                }}
              >
                Approve SCRY for VAIN
              </Web3Button>
            </div>
            <br />
            <Web3Button
              contractAddress={CONTRACT_ADDRESS}
              action={(contract) =>
                contract.call("createBounty", [
                  pubkey,
                  custom,
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
