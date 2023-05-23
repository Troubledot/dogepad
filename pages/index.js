import React, { useState, useEffect,Component } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import classNames from "classnames/bind";
import Timer from "react-compound-timer";
import Web3 from "web3";
import Wallet from "../components/wallet";
import useWallet from "use-wallet";
import { getInvite, getInviteRank, createInvite } from "../api/api";
import tokenConfig from "../contract.config";
import { confirmAlert } from "react-confirm-alert";
import HeaderFooter from "../layout/HeaderFooter";
import Clipboard from "react-clipboard.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter, useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Cookies from "js-cookie";
import { utils } from "ethers";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "../styles/home.module.scss"


import "animate.css";

const toastConfig = {
  position: "bottom-left",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  draggable: true,
  progress: null,
  pauseOnHover: false,
};

const Home = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  console.log(router)
 
  useEffect(() => {
   
  }, []);


  const toastConfig = {
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    }


  return (
    <HeaderFooter activeIndex={1}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <div className={styles.slogan}>
          <h1>The first AMM DEX  in the BRC20 ecosystem! </h1>
          <h2>BISO SWAP</h2>
          <div className={styles.rhinoceros}></div>
          <i className={styles.eth}></i>
          <i className={styles.btc}></i>
          <i className={styles.knc}></i>
          <i className={styles.ada}></i>
          <i className={styles.usdt}></i>
          <i className={styles.dai}></i>
        </div>
        <ul className={styles.link}>
          <li>
            <span>Treade</span>
            <i></i>
          </li>
          <li>
            <span>Treade</span>
            <i></i>
          </li>
          <li>
            <span>Treade</span>
            <i></i>
          </li>
          <li>
            <span>Treade</span>
            <i></i>
          </li>
        </ul>
        <ul className={styles.partner}>
          <li className={styles.tp}></li>
          <li className={styles.gate}></li>
          <li className={styles.mxc}></li>
          <li className={styles.nasdaq}></li>
        </ul>
        <div className={styles.feature}>
          <h1></h1>
          <h2>Add liquidity, gain access to transaction fees and enjoy a lower GAS trading experience!</h2>
          <ul>
            <i className={styles.character}></i>
            <li>
              <h3>
                <b>What is</b> 
                BISO SWAP.
              </h3>
              <p>Add liquidity, gain access to transaction fees and enjoy a lower GAS trading experience!Add liquidity, gain access to transaction fees and enjoy a lower GAS trading experience!</p>
              <a href="#">go to Swap >></a>
            </li>
            <li>
              <h3>
                <b>What is</b> 
                BISO SWAP.
              </h3>
              <p>Add liquidity, gain access to transaction fees and enjoy a lower GAS trading experience!Add liquidity, gain access to transaction fees and enjoy a lower GAS trading experience!</p>
              <a href="#">go to Swap >></a>
            </li>
            <li>
              <h3>
                <b>What is</b> 
                BISO SWAP.
              </h3>
              <p>Add liquidity, gain access to transaction fees and enjoy a lower GAS trading experience!Add liquidity, gain access to transaction fees and enjoy a lower GAS trading experience!</p>
              <a href="#">go to Swap >></a>
            </li>
          </ul>
        </div>
        <div className={styles.info}>
          <div className={styles.inner}>
            <div className={styles.text}>
              <h1>Used by millions.
                <br />Trusted <b>with billions.</b></h1>
              <p>BISOSwap has the most users of any decentralized platform, ever. And those users are now entrusting the platform with over $2.1 billion in funds.</p>
              <ul className={styles.icon}>
                <li>No KYC</li>
                <li>Non-Custodial</li>
                <li>Indefinite Term</li>
              </ul>
              <p>
                <button>Swap Now<i></i></button>
                <a href="#">Learn<i></i></a>
              </p>
            </div>
            <div className={styles.bg}>
              <ul>
                <li>
                  <h1></h1>
                  <p>1.6 million <b>Users</b></p>
                  <button>in the last 30 days</button>
                </li>
                <li>
                  <h1></h1>
                  <p>1.6 million <b>Users</b></p>
                  <button>in the last 30 days</button>
                </li>
                <li>
                  <h1></h1>
                  <p>1.6 million <b>Users</b></p>
                  <button>in the last 30 days</button>
                </li>
              </ul>
            </div>
          </div>
        </div> 
        <div className={styles.stake}>
          <div className={styles.inner}>
            <div className={styles.text}>
              <h1>Stake passive income with crypto.</h1>
              <p>BisoSwap makes it easy to make your crypto work for you.</p>
              <ul>
                <li>USE $BISO EARN $BISO TOKENS</li>
                <li>USTAKE $BISO TOKENS EARN FEES</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </HeaderFooter>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default withRouter(Home);
