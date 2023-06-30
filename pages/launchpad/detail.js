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
    color: ["#64708B", "#F3BA2F", "#282D34", "#21BF73", "#ff4b19"],
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
          { value: 4, name: "Market Allocation" },
          { value: 3, name: "Ecosystem and Partnerships" },
          { value: 10, name: "Staking" },
          { value: 3, name: "DAO Allocation" },
          { value: 80, name: "IDO Allocation" },
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
                <img src="/launchpad/launchpad_banner.png" />
                <div className={styles.text}>
                    <h1>WISTAVERSE</h1>
                    <h2>
                        <img src="/launchpad/team_avator.png" />
                        <span>Cloris Chen</span>
                    </h2>
                    <p>
                        Litoja Labs is a company founded by industry experts in technology, web3, and gaming, aiming to revolutionize the way we play games and interact online. The main investor of Litoja Labs is Animoca Brands, who have established important partnerships with various industry leaders such as Immutable X. Aradena is a medieval fantasy game brand and ecosystem created by Litoja Labs. Its mission is to reimagine competitive strategy games and fundamentally improve the player experience through innovative game design and web3 technology. Aradena already has various mini games and products in the ecosystem, but its flagship product Aradena: Battlegrounds has always been the core focus of its internal gaming studio. The Aradenan Gold token ($AG) has multiple uses in the Aradena gaming ecosystem. It can be used to obtain digital assets, including gold level NFTs, from the Aradena Store. Players can purchase seasonal packs or specific gold level cards from the rotating store slot$ AG can also be used to purchase game decorations, participate in tournaments, enhance missions, convert silver, manipulate RNGs, recruit game avatars, form guilds, offer card sacrifices, pledge to receive rewards, and provide liquidity for decentralized exchanges.
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
                            <span>10,000,000 Xmm</span>
                        </div>
                        <div  className={styles.list}>
                            <span>Fundraising percentage</span>
                            <span>900,000 Usdc</span>
                        </div>
                        <ul>
                            <li>
                                <h1>Total fundraising amount</h1>
                                <p>10,000.00 BTC</p>
                            </li>
                            <li>
                                <h1>Actual fundraising amount</h1>
                                <p>10,000.00 BTC</p>
                            </li>
                            <li>
                                <h1>Number of fundraisers</h1>
                                <p>10,000.00 BTC</p>
                            </li>
                            <li>
                                <h1>Number of tokens obtained</h1>
                                <p>10,000.00 BTC</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.submit}>
                        <input type="number" />
                        <div className={styles.label}>
                            <span>Balance</span>
                            <span>0 $BISO</span>
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
                            <span>10,000,000 Xmm</span>
                        </div>
                        <div  className={styles.list}>
                            <span>Fundraising percentage</span>
                            <span>900,000 Usdc</span>
                        </div>
                        <ul>
                            <li>
                                <h1>Total fundraising amount</h1>
                                <p>10,000.00 BTC</p>
                            </li>
                            <li>
                                <h1>Actual fundraising amount</h1>
                                <p>10,000.00 BTC</p>
                            </li>
                            <li>
                                <h1>Number of fundraisers</h1>
                                <p>10,000.00 BTC</p>
                            </li>
                            <li>
                                <h1>Number of tokens obtained</h1>
                                <p>10,000.00 BTC</p>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.submit}>
                        <input type="number" />
                        <div className={styles.label}>
                            <span>Balance</span>
                            <span>0 $BISO</span>
                        </div>
                        <div>
                            <button><span>Mint</span><i></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.detail}>
                <div className={styles.data}>
                    <div className={styles.team}>
                        <img src="/launchpad/team_avator.png" />
                        <div className={styles.text}>
                            <h1>Gregoire Laugier</h1>
                            <h2>Founder</h2>
                            <p>With extensive experience in the fields of citizen technology and media, Gregoire founded Wistaverse in early 2020.</p>
                        </div>
                    </div>
                    <div className={styles.protocol}>
                <div className={styles.item}>
                    <div className={styles.title}>80% IDO Allocation</div>
                    <p>
                    Increased to 80% to provide additional liquidity for initial
                    exchange offerings. This expanded allocation ensures
                    sufficient token availability for IDO/IEO participants,
                    fostering wider participation and enhancing market liquidity.
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>4% Market Allocation</div>
                    <p>
                    Unlocked 20% at Token Generation Event (TGE), primarily used
                    for initial user airdrops, incentives, and ecosystem
                    development. This allocation is adjusted to allocate 7% of the
                    total supply to the market. It enables Arkstart to allocate
                    resources for market development, user acquisition, and
                    ecosystem growth, fostering adoption and establishing a strong
                    presence in the market.
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>
                    3% Ecosystem and Partnerships
                    </div>
                    <p>
                    Allocated for ecosystem development, strategic partnerships,
                    and collaborative initiatives. This allocation ensures 7% of
                    the total supply is dedicated to fostering collaborations with
                    other projects, platforms, and communities. It supports the
                    growth and expansion of the Arkstart ecosystem by integrating
                    complementary services, expanding use cases, and strengthening
                    the overall ecosystem.
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>10% Staking</div>
                    <p>
                    Users can stake the platform token and earn staking rewards.
                    The staking mechanism incentivizes long-term commitment,
                    active participation, and alignment of interests among
                    participants. This allocation ensures 3% of the total supply
                    is dedicated to staking rewards, promoting network security
                    and token holder engagement.
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles.title}>3% DAO Allocation</div>
                    <p>
                    Reserved for internal and external incentives within the DAO
                    organization. This allocation ensures active governance
                    participation and supports collaborative partnerships,
                    promoting community involvement and decision-making.
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
