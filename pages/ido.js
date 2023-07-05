import React, { useState, useEffect } from "react";
import HeaderFooter from "../layout/HeaderFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Button from "../components/Button";
import styles from "../styles/ido.module.scss";

import {
  whitelistSale,
  getWhitelistSaleByAddress,
  getTotalWhitelistSale,
  getTotalPublicSale,
  getPublicSaleByAddress,
  publicSale,
  checkWhitelist,
} from "../api/api";
import Timer from "react-compound-timer";
import Link from "next/link";
import Image from "next/image";
import "animate.css";

const Launchpad = () => {

  const [whilelistTotalFundraising, setWhilelistTotalFundraising] = useState(1000);
  const [publicTotalFundraising, setPublicTotalFundraising] = useState(1000);
  const [tokenPrice, setTokenPrice] = useState(3.2)

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
    <HeaderFooter activeIndex={2}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <div className={styles.ido_wrapper}>
          <div className={styles.solgin}>
            <h1>DOGEPAD LAUNCHPAD PROTPOCOL</h1>
            <h2>The Launchpad Protocol</h2>
            <h3>Each diamond project.</h3>
          </div>
          <div className={styles.ido_content}>
              <div className={styles.ido}>
            <div className={styles.title}>
              <div className={styles.text}>
                <h1>DogePad</h1>
                <p>Private equity.</p>
              </div>
              <div className={styles.deadline}>
                <span>Distance Start</span>
                <Timer
                  formatValue={(value) =>
                    `${value < 10 ? `0${value}` : value} `
                  }
                  initialTime={1000000}
                  lastUnit="d"
                  direction="backward"
                >
                  <div className={styles.timer}>
                    <div className={styles.item}>
                      <div className={styles.time}>
                        <Timer.Days />
                      </div>
                      <div className={styles.label}>DAY</div>
                    </div>
                    <span>:</span>
                    <div className={styles.item}>
                      <div className={styles.time}>
                        <Timer.Hours />
                      </div>
                      <div className={styles.label}>HRS</div>
                    </div>
                    <span>:</span>
                    <div className={styles.item}>
                      <div className={styles.time}>
                        <Timer.Minutes />
                      </div>
                      <div className={styles.label}>MIN</div>
                    </div>
                    <span>:</span>
                    <div className={styles.item}>
                      <div className={styles.time}>
                        <Timer.Seconds />
                      </div>
                      <div className={styles.label}>SEC</div>
                    </div>
                  </div>
                </Timer>
              </div>
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.list}>
                        <span>Token Price</span>
                        <span>{tokenPrice} DOGE/PAD</span>
                    </div>
                    <div  className={styles.list}>
                        <span>Fundraising percentage</span>
                        <span>  {((totalWhitelistSaleData / whilelistTotalFundraising) * 100).toFixed(2)}%</span>
                    </div>
                    <ul>
                        <li>
                            <h1>Total fundraising amount</h1>
                            <p>{whilelistTotalFundraising} DOGE</p>
                        </li>
                        <li>
                            <h1>Actual fundraising amount</h1>
                            <p>{totalWhitelistSaleData} DOGE</p>
                        </li>
                        <li>
                            <h1>Number of fundraisers</h1>
                            <p>{totalWhitelistSaleUsers}</p>
                        </li>
                        <li>
                            <h1>Number of tokens obtained</h1>
                            <p>{whitelistMyContributeBtc}DOGE(
                              {totalWhitelistSaleData * 1 < whilelistTotalFundraising
                                ? whitelistMyContributeBtc / tokenPrice
                                : whitelistMyContributeBtc /
                                  (totalWhitelistSaleData / whilelistTotalFundraising) /
                                  tokenPrice} PAD)</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.submit}>
                    <div className={styles.label}>
                        <span>Whitelist Round Quota</span>
                        <span>0.01 $Doge - 0.077 $Doge</span>
                    </div>
                    <input 
                      type="number" 
                      onChange={(e) => whilistInputChange(e)} 
                      value={whitelistInput}
                    />
                    <button onClick={() => setWhitelistMax()}>Max</button>
                    <div className={styles.label}>
                        <span>Balance</span>
                        <span>0 DOGE</span>
                    </div>
                    <div>
                        <button onClick={() => whitelistSaleMint()}><span>Mint</span><i></i></button>
                    </div>
                </div>
            </div>
          </div>
          <div className={styles.ido}>
            <div className={styles.title}>
              <div className={styles.text}>
                <h1>DogePad</h1>
                <p>Public equity.</p>
              </div>
              <div className={styles.deadline}>
                <span>Distance Start</span>
                <Timer
                  formatValue={(value) =>
                    `${value < 10 ? `0${value}` : value} `
                  }
                  initialTime={1000000}
                  lastUnit="d"
                  direction="backward"
                >
                  <div className={styles.timer}>
                    <div className={styles.item}>
                      <div className={styles.time}>
                        <Timer.Days />
                      </div>
                      <div className={styles.label}>DAY</div>
                    </div>
                    <span>:</span>
                    <div className={styles.item}>
                      <div className={styles.time}>
                        <Timer.Hours />
                      </div>
                      <div className={styles.label}>HRS</div>
                    </div>
                    <span>:</span>
                    <div className={styles.item}>
                      <div className={styles.time}>
                        <Timer.Minutes />
                      </div>
                      <div className={styles.label}>MIN</div>
                    </div>
                    <span>:</span>
                    <div className={styles.item}>
                      <div className={styles.time}>
                        <Timer.Seconds />
                      </div>
                      <div className={styles.label}>SEC</div>
                    </div>
                  </div>
                </Timer>
              </div>
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.list}>
                        <span>Token Price</span>
                        <span>{tokenPrice} DOGE/PAD</span>
                    </div>
                    <div  className={styles.list}>
                        <span>Fundraising percentage</span>
                        <span> {((totalPublicSaleData / publicTotalFundraising) * 100).toFixed(2)}%</span>
                    </div>
                    <ul>
                        <li>
                            <h1>Total fundraising amount</h1>
                            <p>{publicTotalFundraising} DOGE</p>
                        </li>
                        <li>
                            <h1>Actual fundraising amount</h1>
                            <p>{totalPublicSaleData} DOGE</p>
                        </li>
                        <li>
                            <h1>Number of fundraisers</h1>
                            <p>{totalPublicSaleUsers}</p>
                        </li>
                        <li>
                            <h1>Number of tokens obtained</h1>
                            <p>{publicMyContributeBtc}DOGE({totalPublicSaleData * 1 < 7.5
                  ? publicMyContributeBtc / tokenPrice
                  : publicMyContributeBtc /
                    (totalPublicSaleData / publicTotalFundraising) /
                    tokenPrice}PAD)</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.submit}>
                   <div className={styles.label}>
                        <span>Public Round Quota</span>
                        <span>0.01 $Doge - 0.077 $Doge</span>
                    </div>
                    <input type="number"   value={publicInput}
                onChange={(e) => publicInputChange(e)} />
                <button onClick={()=>setPublicMax()}>Max</button>
                    <div className={styles.label}>
                        <span>Balance</span>
                        <span>0 DOGE</span>
                    </div>
                    <div>
                        <button  onClick={() => publicSaleMint()}><span>Mint</span><i></i></button>
                    </div>
                </div>
            </div>
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

export default withRouter(Launchpad);
