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
          <h1>The first AMM DEX in the BRC20 ecosystem! </h1>
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
            <span>Ido</span>
            <i></i>
          </li>
          <li>
            <span>Stake</span>
            <i></i>
          </li>
          <li>
            <span>Launchpad</span>
            <i></i>
          </li>
          <li>
            <span>Swap</span>
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
          <h2>
           Bisoswap is committed to addressing the issue of insufficient liquidity in BRC20 by increasing liquidity pools for LP trading and enabling real-time transactions.
          </h2>
          <ul>
            <i className={styles.character}></i>
            <li>
              <h3>
                <b>AMM</b> Model.
              </h3>
              <p>
Automated Market Maker (AMM) model: BisoSwap employs an AMM model, which simplifies trading processes and reduces the reliance on order books.
              </p>
              <a href="#">go to Swap &gt;&gt;</a>
            </li>
            <li>
              <h3>
                <b>Liquidity</b>provision.
              </h3>
              <p>
       Liquidity provision and incentives: Users can provide liquidity to the platform and earn rewards, ensuring sufficient liquidity for smooth transactions.
              </p>
              <a href="#">go to Swap &gt;&gt;</a>
            </li>
            <li>
              <h3>
                <b>User-friendly </b>Interface.
              </h3>
              <p>
         User-friendly interface: BisoSwap offers a clean, intuitive interface that allows users to easily connect their wallets and interact with the platform.
              </p>
              <a href="#">go to Swap &gt;&gt;</a>
            </li>
          </ul>
        </div>
        <div className={styles.info}>
          <div className={styles.inner}>
            <div className={styles.text}>
              <h1>
                We server users and 
                <br />
                <b> project stakeholders</b>
              </h1>
              <p>
               We're gonna offer users all the decentralized services, and provide project partners with services like fundraising, distribution, and airdrops.
              </p>
              <ul className={styles.icon}>
                <li>No KYC</li>
                <li>Non-Custodial</li>
                <li>Indefinite Term</li>
              </ul>
              <p>
                <button>
                  Swap Now<i></i>
                </button>
                <a href="#">
                  Learn<i></i>
                </a>
              </p>
            </div>
            <div className={styles.bg}>
              <ul>
                <li>
                  <h1></h1>
                  <p>
                    1893 <b>Hloders</b>
                  </p>
                  <button>in the last 30 days</button>
                </li>
                <li>
                  <h1></h1>
                  <p>
                   1893 <b>Hloders</b>
                  </p>
                  <button>in the last 30 days</button>
                </li>
                <li>
                  <h1></h1>
                  <p>
                   1893 <b>Hloders</b>
                  </p>
                  <button>in the last 30 days</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.stake}>
          <div className={styles.inner}>
            <div className={styles.text}>
              <h1>
                <span className={styles.ori}>Stake</span> passive income
                <br />
                <span className={styles.gray}>with crypto.</span>
              </h1>
              <p>BisoSwap makes it easy to make your crypto work for you.</p>
              <ul>
                <li>
                  USE $BISO <br />
                  EARN $BISO TOKENS
                </li>
                <li>
                  USTAKE $BISO TOKENS <br /> EARN FEES
                </li>
              </ul>
              <div className={styles.opr}>
                <button className={styles.oribtn}>Stake Now</button>
                <button className={styles.btn}>Learn</button>
              </div>
            </div>
            <div className={styles.img1}></div>
          </div>
          <div className={styles.inner}>
            <div className={styles.text}>
              <h1>
                <span className={styles.ori}>Launchpad </span> passive <br />{" "}
                income
                <span className={styles.gray}> with crypto.</span>
              </h1>
              <p>BisoSwap makes it easy to make your crypto work for you.</p>
              <ul>
                <li>
                  USE $BISO <br />
                  EARN $BISO TOKENS
                </li>
                <li>
                  USTAKE $BISO TOKENS <br /> EARN FEES
                </li>
              </ul>
              <div className={styles.opr}>
                <button className={styles.oribtn}>Stake Now</button>
                <button className={styles.btn}>Learn</button>
              </div>
            </div>
            <div className={styles.img1}></div>
          </div>
        </div>
        <div className={styles.subscribe}>
          <div className={styles.bow}></div>
          <div className={styles.inputwrap}>
            <input type="text" placeholder="ENTER YOUR EMAIL" />
            <button>SUBSCRIBE</button>
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
