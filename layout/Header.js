import React, { useState, useEffect } from "react";
import Wallet from "../components/wallet";
import Link from "next/link";
import classNames from "classnames/bind";
import Router, { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { route } from "next/dist/server/router";
import styles from "../styles/layout.module.scss";
import { concat } from "ethers/lib/utils";
const cx = classNames.bind(styles);

const Header = (props) => {
  const { activeIndex, scrolling } = props;
  const [openState, setopenState] = useState(false);

  const router = useRouter();
  const { t } = useTranslation("common");
  const [account, setAccount] = useState("");

  useEffect(async () => {
    // const timer = setInterval(async () => {
    //     if (typeof window.unisat !== 'undefined' && window.account) {
    //         setAccount(window.account)
    //     }
    // }, 1000)
    // return () => {
    //     clearInterval(timer)
    // }
  }, []);

  const connectWallet = async () => {
    if (typeof window.unisat !== "undefined") {
      let accounts = await window.unisat.requestAccounts();
      setAccount(accounts[0]);
    } else {
      alert("UniSat Wallet is not installed!");
    }
  };

  const connectWalletOKX = async () => {
    if (typeof window.okxwallet !== "undefined") {
      const res = await window.okxwallet.requestWallets(true);
      setAccount(res[0].address[0].address);
    } else {
      alert("OKX Wallet is not installed!");
    }
  };

  return (
    <header className={styles.header}>
      {/* <Wallet /> */}
      <div className={styles.inner}>
        <Link href="/" passHref>
          <i className={styles.logo}></i>
        </Link>
        <ul className={styles.nav}>
          <Link href="/" passHref>
            <li
              className={cx({
                active: activeIndex === 1,
              })}
            >
              Home
            </li>
          </Link>
          <Link href="/" passHref>
            <li
              className={cx({
                active: activeIndex === 2,
              })}
            >
              Launchpad
            </li>
          </Link>
          <a
            href="https://bisoswap.gitbook.io/bisoswap/"
            target="_blank"
            rel="noreferrer"
          >
            <li>Doc</li>
          </a>
        </ul>
        <div className={styles.settings}>
          <div className={styles.wallet}>
            {!account ? (
              <div className={styles.wallet_inner}>
                <button>Connect Wallet</button>
                <ul>
                  <li>
                    <button
                      className={styles.wallet_btn}
                      onClick={() => connectWallet()}
                    >
                      Connect Unisat Wallet
                    </button>
                  </li>
                  <li>
                    <button
                      className={styles.wallet_btn}
                      onClick={() => connectWalletOKX()}
                    >
                      Connect OKX Wallet
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <button className={styles.wallet_btn}>{account}</button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
