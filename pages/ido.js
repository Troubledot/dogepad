import React, { useState, useEffect, Component } from "react";
import Head from "next/head";
import Image from "next/image";
import classNames from "classnames/bind";
import Timer from "react-compound-timer";
import Web3 from "web3";
import Wallet from "../components/wallet";
import useWallet from "use-wallet";
import {
  whitelistSale,
  getWhitelistSaleByAddress,
  getTotalWhitelistSale,
  getTotalPublicSale,
  getPublicSaleByAddress,
  publicSale,
  checkWhitelist,
} from "../api/api";
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
import { utils, BigNumber } from "ethers";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "../styles/ido.module.scss";
const cx = classNames.bind(styles);
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
  console.log(router);

  const [whitelistMyContributeBtc, setWhitelistMyContributeBtc] = useState(0);
  const [totalWhitelistSaleData, setTotalWhitelistSaleData] = useState(0);
  const [publicMyContributeBtc, setPublicMyContributeBtc] = useState(0);
  const [totalPublicSaleData, setTotalPublicSaleData] = useState(0);
  const [whitelistInput, setWhitelistInput] = useState(0.00036);
  const [publicInput, setPublicInput] = useState(0.00036);
  const [whitelistBtnEnable, setWhitelistBtnEnable] = useState(false);
  const [publicBtnEnable, setPublicBtnEnable] = useState(false);
  const [totalWhitelistSaleUsers, setTotalWhitelistSaleUsers] = useState(0)
  const [totalPublicSaleUsers, setTotalPublicSaleUsers] = useState(0)


  useEffect(async () => {
    const totalPublicSaleData = await getTotalPublicSale();
    setTotalPublicSaleData((totalPublicSaleData.data.totalPublicSale* 1).toFixed(6));
    setTotalPublicSaleUsers(totalPublicSaleData.data.totalUsers);

    const totalWhitelistSaleData = await getTotalWhitelistSale();
    setTotalWhitelistSaleData((totalWhitelistSaleData.data.totalWhitelistSale * 1).toFixed(6));
    setTotalWhitelistSaleUsers(totalWhitelistSaleData.data?.totalUsers)

    const timer = setInterval(async () => {
      const totalPublicSaleData = await getTotalPublicSale();
      setTotalPublicSaleData((totalPublicSaleData.data.totalPublicSale* 1).toFixed(6));
      setTotalPublicSaleUsers(totalPublicSaleData.data.totalUsers);

      const totalWhitelistSaleData = await getTotalWhitelistSale();
      setTotalWhitelistSaleData((totalWhitelistSaleData.data.totalWhitelistSale* 1).toFixed(6));
      setTotalWhitelistSaleUsers(totalWhitelistSaleData.data?.totalUsers)

      console.log(
        "totalWhitelistSaleData",
        totalWhitelistSaleData.data.totalWhitelistSale
      );
      if (typeof window.unisat !== "undefined") {
        let accounts = await window.unisat.getAccounts();
        window.account = accounts[0];
        const whitelistSaleByAddressData = await getWhitelistSaleByAddress( accounts[0] )
        setWhitelistMyContributeBtc(whitelistSaleByAddressData.data?.totalBuy)
        const publicMyContributeBtc = await getPublicSaleByAddress(accounts[0])
        setPublicMyContributeBtc(publicMyContributeBtc.data?.totalBuy)
      }
      console.log("timer");
      // clearInterval(timer)
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const publicInputChange = (e) => {
    let obj = {};
    let value = e.target.value;
    value = value.match(/^\d*(\.?\d{0,8})/g)[0] || null;
    obj[e.target.id] = value;
    setPublicInput(value);
  };

  const whilistInputChange = (e) => {
    let obj = {};
    let value = e.target.value;
    value = value.match(/^\d*(\.?\d{0,8})/g)[0] || null;
    obj[e.target.id] = value;
    console.log(value);
    setWhitelistInput(value);
  };

  const publicSaleMint = async () => {
    if (publicBtnEnable) return;
    setPublicBtnEnable(true);
    setTimeout(() => {
      setPublicBtnEnable(false);
    }, 1000);

    if (new Date().getTime() < 1683766800 * 1000) {
      toast.warning("The Public sale round has yet to begin", toastConfig);
      return;
    }

    if (new Date().getTime() > 1683896400 * 1000) {
      toast.warning("The Public sale round has end", toastConfig);
      return;
    }

    if (publicInput * 1 < 0.00036 || publicInput * 1 > 0.72) {
      toast.warning(
        "Your contribution amount must be between 0.00036 to 0.72!",
        toastConfig
      );
      return;
    }
    let accounts = await window.unisat.getAccounts();
    const publicSaleByAddress = await getPublicSaleByAddress(accounts[0]);
    if (publicSaleByAddress.data.totalBuy * 1 + publicInput * 1 > 0.72) {
      toast.warning("Your contribution amount cannot exceed 0.72", toastConfig);
      return;
    }
    let txid = await window.unisat.sendBitcoin(
      "bc1pg085uvgzy6ma8x9kxnre50u8swcudtvwrn9n54h2npafjdt0tqhsuzc7qv",
      utils.parseUnits(String(publicInput), 8).add("35000").toString() * 1
    );
    console.log(txid);
    if (txid) {
      await publicSale(
        accounts[0],
        txid,
        publicInput
      );
      toast.success(
        "Payment success",
        toastConfig
      );
    }
  };

  const whitelistSaleMint = async () => {
    console.log("whitelistBtnEnable", whitelistBtnEnable);
    if (whitelistBtnEnable) return;
    setWhitelistBtnEnable(true);
    setTimeout(() => {
      setWhitelistBtnEnable(false);
    }, 1000);
    if (new Date().getTime() < 1683723600 * 1000 ) {
      toast.warning("The Whitelist sale round has yet to begin", toastConfig);
      return;
    }

    if (new Date().getTime() > 1683766800 * 1000) {
      toast.warning("The Whitelist sale round has end", toastConfig);
      return;
    }

    console.log("whitelistInput", whitelistInput);
    if (whitelistInput * 1 < 0.00036 || whitelistInput * 1 > 0.072) {
      toast.warning(
        "Your contribution amount must be between 0.00036 to 0.072!",
        toastConfig
      );
      return;
    }

    let accounts = await window.unisat.getAccounts();
    const isWhitelist = await checkWhitelist(accounts[0]);
    console.log("isWhitelist", isWhitelist.data.isWhitelist);
    if (!isWhitelist.data.isWhitelist) {
      toast.warning("Your address are not in whitelist.", toastConfig);
      return;
    }

    const whitelistSaleByAddressData = await getWhitelistSaleByAddress(
      accounts[0]
    );
    console.log(
      whitelistSaleByAddressData.data.totalBuy,
      whitelistInput,
      whitelistSaleByAddressData.data.totalBuy * 1 + whitelistInput > 0.072
    );
    if (
      whitelistSaleByAddressData.data.totalBuy * 1 + whitelistInput * 1 >
      0.072
    ) {
      toast.warning(
        "Your contribution amount cannot exceed 0.072",
        toastConfig
      );
      return;
    }
    console.log(
      whitelistInput,
      utils.parseUnits(String(whitelistInput), 8).add("35000").toString() * 1
    );
    let txid = await window.unisat.sendBitcoin(
      "bc1pg085uvgzy6ma8x9kxnre50u8swcudtvwrn9n54h2npafjdt0tqhsuzc7qv",
      utils.parseUnits(String(whitelistInput), 8).add("35000").toString() * 1
    );
    console.log(txid);
    if (txid) {
      await whitelistSale(
        accounts[0],
        txid,
        whitelistInput
      );
       toast.success(
        "Payment success",
        toastConfig
      );
    }
  };

  const setWhitelistMax = async() => {

    let accounts = await window.unisat.getAccounts();
    const whitelistSaleByAddressData = await getWhitelistSaleByAddress(
      accounts[0]
    );
    console.log( whitelistSaleByAddressData.data?.totalBuy)
    setWhitelistInput( 0.072 - whitelistSaleByAddressData.data?.totalBuy)
  };

    const setPublicMax = async() => {

    let accounts = await window.unisat.getAccounts();
    const publicSaleByAddress = await getPublicSaleByAddress(
      accounts[0]
    );
    console.log( publicSaleByAddress.data?.totalBuy)
    setPublicInput( 0.72 - publicSaleByAddress.data?.totalBuy)
  };

  const toastConfig = {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  return (
    <HeaderFooter activeIndex={1}>
      <ToastContainer />
      <div className={cx(styles.idoWrapper)}>
        <div className={styles.banner}></div>
        <section className={cx(styles.form)}>
          <h3>Public Sale</h3>
          <div className={styles.deadline}>
            <i>End Time:</i>
            <Timer
              formatValue={(value) => `${value < 10 ? `0${value}` : value} `}
              initialTime={
                new Date(1683896400 * 1000).getTime() - new Date().getTime()
              }
              lastUnit="h"
              direction="backward"
            >
              <ul>
                <li>
                  <h1>
                    <Timer.Hours />
                  </h1>
                  <p>hours</p>
                </li>
                <li></li>
                <li>
                  <h1>
                    <Timer.Minutes />
                  </h1>
                  <p>minutes</p>
                </li>
                <li></li>
                <li>
                  <h1>
                    <Timer.Seconds />
                  </h1>
                  <p>seconds</p>
                </li>
              </ul>
            </Timer>
          </div>
          <div className={cx(styles.info)}>
            <p>
              {totalPublicSaleData} <b>BTC</b> / {totalPublicSaleUsers} contributors
            </p>
            <p className={cx(styles.sub)}>Current Contribution</p>
          </div>
          <div className={cx(styles.cells)}>
            <div className={styles.progress}>
              <i style={{ width: `${(totalPublicSaleData / 7.5) * 100}%` }}></i>
            </div>
            <div className={styles.cell}>
              <div className={styles.label}>Raising Percentage</div>
              <div className={styles.content}>
                {((totalPublicSaleData / 7.5) * 100).toFixed(2)}%
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.label}>Funds to raise</div>
              <div className={styles.content}>
                7.5 <b>BTC</b>
              </div>
            </div>
          </div>
          <div
            className={[`${cx(styles.cells)}`, `${cx(styles.borderTop)}`].join(
              " "
            )}
          >
            <div className={styles.cell}>
              <div className={styles.label}>My Investment</div>
              <div className={styles.content}>
                {publicMyContributeBtc}{" "}
                <b className={styles.colorPrimary}>BTC</b>
              </div>
            </div>
          </div>
          <div
            className={[`${cx(styles.cells)}`, `${cx(styles.borderTop)}`].join(
              " "
            )}
          >
            <div className={styles.cell}>
              <div className={styles.label}>Received</div>
              <div className={styles.content}>
                {totalPublicSaleData * 1 < 7.5
                  ? publicMyContributeBtc / 0.0000000852
                  : publicMyContributeBtc /
                    (totalPublicSaleData / 7.5) /
                    0.0000000852}{" "}
                <b className={styles.colorPrimary}>BISO</b>
              </div>
            </div>
          </div>
          <div
            className={[`${cx(styles.cells)}`, `${cx(styles.borderTop)}`].join(
              " "
            )}
          >
            <div className={styles.cell}>
              <div className={styles.label}>Ratio</div>
              <div className={styles.content}>
                1 <b className={styles.colorPrimary}>BISO</b> = 0.0000000852{" "}
                <b className={styles.colorPrimary}>BTC</b>
              </div>
            </div>
          </div>
          <div className={styles.btns}>
            <span>
              <input
                className={styles.input}
                type="number"
                min="0.00036"
                max="0.72"
                value={publicInput}
                onChange={(e) => publicInputChange(e)}
              />
              <button onClick={()=>setPublicMax()}>Max</button>
            </span>
            <button className={cx(styles.buttonPrimary)}>
              <div className={cx(styles.inner)} onClick={() => publicSaleMint()}>
                MINT
              </div>
            </button>
          </div>
          <div className={styles.input_tips}>Limit:(0.00036~0.72)</div>
          <div className={styles.tips}>
            The cost included in IDO fee and network fee 35000 sats (~200
            sats/vB)
          </div>
        </section>

          <section className={cx(styles.form)}>
          <h3>Whitelist Sale</h3>
          <div className={styles.deadline}>
            <i>End Time:</i>
            <Timer
              formatValue={(value) => `${value < 10 ? `0${value}` : value} `}
              initialTime={
                new Date(1683766800 * 1000).getTime() - new Date().getTime()
              }
              lastUnit="h"
              direction="backward"
            >
              <ul>
                <li>
                  <h1>
                    <Timer.Hours />
                  </h1>
                  <p>hours</p>
                </li>
                <li></li>
                <li>
                  <h1>
                    <Timer.Minutes />
                  </h1>
                  <p>minutes</p>
                </li>
                <li></li>
                <li>
                  <h1>
                    <Timer.Seconds />
                  </h1>
                  <p>seconds</p>
                </li>
              </ul>
            </Timer>
          </div>
          <div className={cx(styles.info)}>
            <p>
              {totalWhitelistSaleData} <b>BTC </b> / {totalWhitelistSaleUsers} contributors
            </p>
            <p className={cx(styles.sub)}>Current Contribution</p>
          </div>
          <div className={cx(styles.cells)}>
            <div className={styles.progress}>
              <i
                style={{ width: `${(totalWhitelistSaleData / 3.22) * 100}%` }}
              ></i>
            </div>
            <div className={styles.cell}>
              <div className={styles.label}>Raising Percentage</div>
              <div className={styles.content}>
                {((totalWhitelistSaleData / 3.22) * 100).toFixed(2)}%
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.label}>Funds to raise</div>
              <div className={styles.content}>
                3.22 <b>BTC</b>
              </div>
            </div>
          </div>
          <div
            className={[`${cx(styles.cells)}`, `${cx(styles.borderTop)}`].join(
              " "
            )}
          >
            <div className={styles.cell}>
              <div className={styles.label}>My Investment</div>
              <div className={styles.content}>
                {whitelistMyContributeBtc}{" "}
                <b className={styles.colorPrimary}>BTC</b>
              </div>
            </div>
          </div>
          <div
            className={[`${cx(styles.cells)}`, `${cx(styles.borderTop)}`].join(
              " "
            )}
          >
            <div className={styles.cell}>
              <div className={styles.label}>Received</div>
              <div className={styles.content}>
                {totalWhitelistSaleData * 1 < 3.22
                  ? whitelistMyContributeBtc / 0.0000000852
                  : whitelistMyContributeBtc /
                    (totalWhitelistSaleData / 3.22) /
                    0.0000000852}{" "}
                <b className={styles.colorPrimary}>BISO</b>
              </div>
            </div>
          </div>
          <div
            className={[`${cx(styles.cells)}`, `${cx(styles.borderTop)}`].join(
              " "
            )}
          >
            <div className={styles.cell}>
              <div className={styles.label}>Ratio</div>
              <div className={styles.content}>
                1 <b className={styles.colorPrimary}>BISO</b> = 0.0000000852{" "}
                <b className={styles.colorPrimary}>BTC</b>
              </div>
            </div>
          </div>
          <div className={styles.btns}>
            <span>
              <input
                className={styles.input}
                type="number"
                min="0.00036"
                max="0.072"
                value={whitelistInput}
                onChange={(e) => whilistInputChange(e)}
              />
              <button onClick={() => setWhitelistMax()}>Max</button>
            </span>
            <button className={cx(styles.buttonPrimary)}>
              <div className={cx(styles.inner)} onClick={() => whitelistSaleMint()}>
                MINT
              </div>
            </button>
          </div>
          <div className={styles.input_tips}>Limit:(0.00036~0.072)</div>
          <div className={styles.tips}>
            The cost included in IDO fee and network fee 35000 sats (~200
            sats/vB)
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
