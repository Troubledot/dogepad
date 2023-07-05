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
    color: [ "#282D34", "#21BF73", "#ff4b19", "#8fb6ff", "#ff369a"],
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
          { value: 30, name: "IDO" },
          { value: 20, name: "Development" },
          { value: 10, name: "Marketing" },
          { value: 10, name: "Ecosystem" },
          { value: 30, name: "Staking and Farming" },
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
                <img src="/launchpad/pro2.png" />
                <div className={styles.text}>
                    <h1>Dogemeta.ai</h1>
                    <h2>
                        <img src="/launchpad/pro3.png" />
                        <span>James O'Connor</span>
                    </h2>
                    <p>
                       Introducing Dogy, the revolutionary token reshaping the GameFi universe! Designed to break barriers, Dogy is not just a token—it's a beacon of hope and a testament to the power of Artificial Intelligence. Unlike traditional GameFi tokens, Dogy offers multidimensional utility across numerous games, boosting the demand for game tokens and fostering a more dynamic ecosystem.

But Dogy's power extends beyond the gaming field. It is the key to unlocking the AI Game Master—an innovative assistant guiding players to new gaming heights. Dogy merges the conventional gaming world with the emerging Web3 landscape, propelling traditional games into the blockchain era and translating victories into tangible rewards.

Most importantly, Dogy cultivates community prosperity, promising fair distribution of potential ecosystem revenue. It's more than a token—it's an emblem of change, community, and a prosperous future. Experience the future of GameFi. Embrace the power of Dogy!
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
                            <span>0.002 DOGE/DOGY</span>
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
                            <span>0.01 $Doge - 0.077 $Doge</span>
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
                            <span>0.002 DOGE/DOGY</span>
                        </div>
                        <div  className={styles.list}>
                            <span>Fundraising percentage</span>
                            <span>7,000,000 DOGE</span>
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
                            <span>0.01 $Doge - 0.077 $Doge</span>
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
                    <div className={styles.title}>Multidimensional Utility</div>
                    <p>
                   Unlike traditional GameFi tokens, Dogy is not limited to a single game or ecosystem. It can be swapped, traded, and used across numerous games, providing unparalleled flexibility and utility in the gaming space.
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>Powerful AI Integration</div>
                    <p>
                    Dogy introduces the AI Game Master, an advanced AI assistant designed to guide gamers through their challenges. This innovative technology reshapes the gaming experience, helping players transcend boundaries and reach new heights.
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>Blockchain Fusion</div>
                    <p>
                    Dogy is the bridge that connects traditional gaming and the Web3 landscape. It brings the revolution of blockchain to conventional games, transforming gaming achievements into real-world rewards and enhancing the value proposition for players.
                    </p>
                </div>
                 <div className={styles.item}>
                    <div className={styles.title}>Community-Centric Prosperity</div>
                    <p>
                    Dogy promotes a sense of shared wealth within the gaming community. It offers a fair distribution mechanism for potential revenue generated within the ecosystem, fostering a more equitable and prosperous gaming landscape.
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>Symbol of Change</div>
                    <p>
                    Dogy is more than a token - it's a beacon of hope, a symbol of community strength, and a testament to the transformative power of Web3 technologies.
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
