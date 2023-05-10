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
          <div className={styles.inner}>
            <div className={styles.text}>
              <h1>BISO - the first AMM DEX in the BRC20 ecosystem! </h1>
              <p>Add liquidity, gain to transaction fees and enjoy a lower GAS trading experience!</p>
              {/* <div className={styles.deadline}>
                <h4>IDO Countdown:</h4>
                <Timer
                  formatValue={(value) => `${(value < 10 ? `0${value}` : value)} `}
                  initialTime={
                    new Date(1683723600*1000).getTime() -
                      new Date().getTime()
                  }
                  lastUnit="h"
                  direction="backward"
                >
                  <ul>
                    <li>
                      <h1><Timer.Hours /></h1>
                      <p>hours</p>
                    </li>
                    <li></li>
                    <li>
                      <h1><Timer.Minutes /></h1>
                      <p>minutes</p>
                    </li>
                    <li></li>
                    <li>
                      <h1><Timer.Seconds /></h1>
                      <p>seconds</p>
                    </li>
                  </ul>
                </Timer>
              </div> */}
              {/* <button onClick={()=>toast.success('Comming soon!', toastConfig)}><span>IDO</span></button> */}
              <Link href="/ido"><button><span>IDO</span></button></Link>
            </div>
            <div className={styles.rhinoceros}>
              <i className={styles.token_biso}></i>
              <i className={styles.token_btc}></i>
            </div>
          </div>
        </div>
        <div className={styles.how_it_works}>
          <h1>How it works
            <i></i>
          </h1>
          <div className={styles.content}>
            <div className={styles.step1}></div>
            <div className={styles.step2}></div>
            <div className={styles.step3}></div>
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
