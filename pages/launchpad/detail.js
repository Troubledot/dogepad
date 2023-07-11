import React, { useState } from "react";
import HeaderFooter from "../../layout/HeaderFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Button from "../../components/Button";
import styles from "../../styles/detail.module.scss";

import twitter from "../../public/home/twitter.png";
import md from "../../public/home/md.png";
import discord from "../../public/launchpad/discord.png";
import tel from "../../public/home/tel.png";
import github from "../../public/launchpad/github.png";
import ani from "../../public/launchpad/ani.mp4";
import avatar from "../../public/launchpad/messi.webp";
import hot from "../../public/launchpad/hot.svg";
import totalIcon from "../../public/launchpad/icon_total.png";
import pro1 from "../../public/launchpad/pro1.png";
import pro2 from "../../public/launchpad/pro2.png";
import pro3 from "../../public/launchpad/pro3.png";
import pro4 from "../../public/launchpad/pro4.png";
import pro5 from "../../public/launchpad/pro5.png";
import pro6 from "../../public/launchpad/pro6.png";
import pro7 from "../../public/launchpad/pro7.png";
import Timer from "react-compound-timer";
import Echart from "../../components/Echart";
import Link from "next/link";
import Image from "next/image";
import "animate.css";

const Launchpad = () => {
 const options = {
    color: [ "#282D34", "#21BF73", "#ff4b19"],
    tooltip: {
      trigger: "item",
      textStyle:{
        color: "#64708B"
      }
    },
    legend: {
      left: "center",
      top: "20px",
      textStyle:{
            color:"#64708B"
        }
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "55%"],
        center: ["50%", "70%"],
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 4.2, name: "cex listings" },
          { value: 6.9, name: "airdrops" },
          { value: 88.9, name: "IDO" }
        ],
      },
    ],
  };
  return (
    <HeaderFooter activeIndex={3}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <div className={styles.ido_wrapper}>
            <div className={styles.project}>
                <dt>
                    <dl></dl>
                </dt>
                <img src="/launchpad/pro1.png" />
                <div className={styles.text}>
                    <h1>Pepe cardinals</h1>
                    <h2>
                        <img src="/launchpad/pro1.png" />
                        <span>pepedoges</span>
                    </h2>
                    <p>
                       memecoin powered by Dogecoin community is for Pepe fan. The most original memecoin in existence, a rattling mixture of pepe built on Dogecoin Chain (DRC-20)
                    </p>
                </div>
            </div>
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
                    initialTime={0}
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
                            <span>0.000015 DOGE/KEK</span>
                        </div>
                        <div  className={styles.list}>
                            <span>Fundraising percentage</span>
                            <span>50,000 DOGE</span>
                        </div>
                        <ul>
                            <li>
                                <h1>Total fundraising amount</h1>
                                <p>0 DOGE</p>
                            </li>
                            <li>
                                <h1>Actual fundraising amount</h1>
                                <p>0 DOGE</p>
                            </li>
                            <li>
                                <h1>Number of fundraisers</h1>
                                <p>0 DOGE</p>
                            </li>
                            <li>
                                <h1>Number of tokens obtained</h1>
                                <p>0 DOGE</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.submit}>
                         <div className={styles.label}>
                            <span>Whitelist Round Quota</span>
                            <span>15 $Doge - 300 $Doge</span>
                        </div>
                        <input type="number" />
                        <div className={styles.label}>
                            <span>Balance</span>
                            <span>0 DOGE</span>
                        </div>
                        <div>
                            <button><span>Mint</span><i></i></button>
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
                    initialTime={0}
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
                            <span>0.000015 DOGE/KEK</span>
                        </div>
                        <div  className={styles.list}>
                            <span>Fundraising percentage</span>
                            <span>100,000 DOGE</span>
                        </div>
                        <ul>
                            <li>
                                <h1>Total fundraising amount</h1>
                                <p>0 DOGE</p>
                            </li>
                            <li>
                                <h1>Actual fundraising amount</h1>
                                <p>0 DOGE</p>
                            </li>
                            <li>
                                <h1>Number of fundraisers</h1>
                                <p>0 DOGE</p>
                            </li>
                            <li>
                                <h1>Number of tokens obtained</h1>
                                <p>0 DOGE</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.submit}>
                         <div className={styles.label}>
                            <span>Public Round Quota</span>
                            <span>15 $Doge - 300 $Doge</span>
                        </div>
                        <input type="number" />
                        <div className={styles.label}>
                            <span>Balance</span>
                            <span>0 DOGE</span>
                        </div>
                        <div>
                            <button><span>Mint</span><i></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.detail}>
                <div className={styles.data}>
                    {/* <div className={styles.team}>
                        <img src="/launchpad/team_avator.png" />
                        <div className={styles.text}>
                            <h1>Gregoire Laugier</h1>
                            <h2>Founder</h2>
                            <p>With extensive experience in the fields of citizen technology and media, Gregoire founded Wistaverse in early 2020.</p>
                        </div>
                    </div> */}
                    <div className={styles.protocol}>
                <div className={styles.item}>
                    <div className={styles.title}>About</div>
                    <p>
                    Pepe Cardinals - believes in a bright future, actively uses all the benefits of the 21st century:<br/>
                    - cryptocurrency<br/>
                    - listens to music<br/>
                    - social networks<br/>
                    - worships Dogecoin<br/>
                    - waits for Elon Musk
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>Project advantages</div>
                    <p>
                    memecoin powered by Dogecoin community is for Pepe fans
                    The most original memecoin in existence, a rattling mixture of pepe built on Dogecoin Chain (DRC-20)
                    </p>
                </div>
                
                    </div>
                 </div>
                <div className={styles.metric}>
                    <div className={styles.title}>Tokenomics</div>
                    <div className={styles.chart}>
                    <Echart options={options} />
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
