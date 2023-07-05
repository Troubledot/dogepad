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
    // color: [ "#282D34", "#21BF73", "#ff4b19", "#8fb6ff", "#ff369a"],
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
          { value: 15, name: "Team Pool" },
          { value: 5.5, name: "Advisory Pool" },
          { value: 15, name: "Community Growth" },
          { value: 7.5, name: "B2B Sales" },
          { value: 5, name: "Integrations" },
          { value: 2.5, name: "Legal" },
          { value: 1, name: "Admin" },
          { value: 1, name: "Charity" },
          { value: 12.5, name: "Liquidity & Listings" },
          { value: 10, name: "IDO/IEO" },
          { value: 25, name: "PrivateAI Core Building" },
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
                <img src="/launchpad/pro5.png" />
                <div className={styles.text}>
                    <h1>PrivateAI</h1>
                    <h2>
                        <img src="/launchpad/pro6.png" />
                        <span>James O'Connor</span>
                    </h2>
                    <p>
                       PrivateAI is building the AI model compatible with homogeneous federated learning. $PGPT is the utility token that powers PrivateAI's privacy layer to interact with Chat GPT and Machine Learning (ML) that focuses on preventing both the internal data misuse as well as external exposure and leaks. With exponential growth and adoption of OpenAI's Chat GPT and other related Artificial Intelligence (AI) technologies, the question of preserving data privacy remains wide open. Using enhanced data protection, homomorphic encryption and federated learning, PrivateAI users will be able to train neural networks without revealing their data. The business model of PGPT includes subscription plans with multiple tiers as well as a privacy-focused marketplace of PrivateAI-powered dApps, plugins and content.
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
                            <span>2.14 DOGE/PGPT</span>
                        </div>
                        <div  className={styles.list}>
                            <span>Fundraising percentage</span>
                            <span>3,000,000 DOGE</span>
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
<span>1 $Doge - 10000 $Doge</span>
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
                            <span>2.14 DOGE/PGPT</span>
                        </div>
                        <div  className={styles.list}>
                            <span>Fundraising percentage</span>
                            <span>7,700,000 DOGE</span>
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
<span>1 $Doge - 10000 $Doge</span>
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
                    PrivateAI is building the AI model compatible with homogeneous federated learning. $PGPT is the utility token that powers PrivateAI's privacy layer to interact with Chat GPT and Machine Learning (ML) that focuses on preventing both the internal data misuse as well as external exposure and leaks. With exponential growth and adoption of OpenAI's Chat GPT and other related Artificial Intelligence (AI) technologies, the question of preserving data privacy remains wide open. Using enhanced data protection, homomorphic encryption and federated learning, PrivateAI users will be able to train neural networks without revealing their data. The business model of PGPT includes subscription plans with multiple tiers as well as a privacy-focused marketplace of PrivateAI-powered dApps, plugins and content.
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>Project advantages</div>
                    <p>
                    As of now, none of the open-source AI models are compatible to be trained against fully encrypted data.FHE protocols including the considered Concrete ML have limitations in terms of the types of computations they can perform. These protocols are typically designed for basic arithmetic operations and simple computations. On the other hand, text processing AI models have complex structure and involve operations that require high computational power. Compared to that, PGPT utilizes federated learning technique, enabling more secure, resource-efficient AI model training while maintaining user privacy, unlike competitors that rely on centralized data processing. PGPT is focused primarily on data privacy and complex data encryption.
Moreover, PGPT also uses data pseudonymization, a data protection technique that involves replacing personally identifiable information (PII) with artificial identifiers or pseudonyms. 
In this method, sensitive data elements are replaced with non-sensitive tokens, which act as placeholders or references to the original data. This method is not used by the main competitors. 
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
