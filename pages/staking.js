import React, { useState, useEffect,Component } from "react";
import Head from "next/head";
import Image from "next/image";
import classNames from "classnames/bind";
import Timer from "react-compound-timer";
import Web3 from "web3";
import Wallet from "../components/wallet";
import useWallet from "use-wallet";
import { whitelistSale, getWhitelistSaleByAddress, getTotalWhitelistSale, getTotalPublicSale, getPublicSaleByAddress, publicSale, checkWhitelist} from "../api/api";
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
import { utils,BigNumber } from "ethers";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "../styles/stake.module.scss"
const cx = classNames.bind(styles)
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
  const { t } = useTranslation("common")
  const router = useRouter()

  const [whitelistMyContributeBtc, setWhitelistMyContributeBtc] = useState(0)
  const [totalWhitelistSaleData, setTotalWhitelistSaleData] = useState(0)
  const [publicMyContributeBtc, setPublicMyContributeBtc] = useState(0)
  const [totalPublicSaleData, setTotalPublicSaleData] = useState(0)
  const [whitelistInput, setWhitelistInput] = useState(0.00036)
  const [publicInput, setPublicInput] = useState(0.00036)

  useEffect(async () => {
    const timer = setInterval(async () => {

        }, 3000)
        return () => {
            clearInterval(timer)
        }
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

  const staking = ()=>{
    toast.success('Comming soon!', toastConfig)
  }

  return (
    <HeaderFooter activeIndex={3}>
      <ToastContainer />
      <div className={cx(styles.idoWrapper)}>
        <div className={styles.banner}>
          <i></i>
        </div>
        <section className={cx(styles.form)}>
          <div className={styles.detail}>
            <ul>
              <li>
                  <h1>0<i>BISO</i> <b>$0</b></h1>
                  <p>TVL</p>
              </li>
              <li>
                <h1>0%</h1>
                <p>APR</p>
              </li>
            </ul>
          </div>
          <h3>Stake $BISO</h3>
          <div className={cx(styles.cells)}>
            <div className={styles.cell}>
              <div className={styles.label}><b>Balance</b></div>
              <div className={styles.content}>0 <b>BISO</b></div>
            </div>
            <div className={styles.cell}>
              <input className={styles.input} type="text" value={0} />
            </div>
          </div>
          <div className={styles.btns}>
            <button className={cx(styles.buttonPrimary)}>
              <div className={cx(styles.inner)} onClick={()=>staking()}>STAKE</div>
            </button>
          </div>
          <h3>My Supply</h3>
          <h4>Earned</h4>
          <h5>0 BISO</h5>
          <div className={styles.btns}>
            <button className={cx(styles.buttonPrimary)}>
              <div className={cx(styles.inner)} onClick={()=>staking()}>CLAIM</div>
            </button>
          </div>
          <h3>Stake $BISO</h3>
          <div className={cx(styles.cells)}>
            <div className={styles.cell}>
              <div className={styles.label}><b>Staked Amount</b></div>
              <div className={styles.content}>0 <b>BISO</b></div>
            </div>
            <div className={styles.cell}>
              <input className={styles.input} type="text" value={0} />
            </div>
             <div className={styles.btns}>
            <button className={cx(styles.buttonPrimary)}>
              <div className={cx(styles.inner)} onClick={()=>staking()}>Withdraw&Claim</div>
            </button>
          </div>
          </div>
        </section>
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
