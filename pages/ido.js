import React, { useState } from "react";
import HeaderFooter from "../layout/HeaderFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Button from "../components/Button";
import styles from "../styles/ido.module.scss";

import twitter from "../public/home/twitter.png";
import md from "../public/home/md.png";
import discord from "../public/launchpad/discord.png";
import tel from "../public/home/tel.png";
import github from "../public/launchpad/github.png";
import ani from "../public/launchpad/ani.mp4";
import avatar from "../public/launchpad/messi.webp";
import hot from "../public/launchpad/hot.svg";
import totalIcon from "../public/launchpad/icon_total.png";
import pro1 from "../public/launchpad/pro1.png";
import pro2 from "../public/launchpad/pro2.png";
import pro3 from "../public/launchpad/pro3.png";
import pro4 from "../public/launchpad/pro4.png";
import pro5 from "../public/launchpad/pro5.png";
import pro6 from "../public/launchpad/pro6.png";
import pro7 from "../public/launchpad/pro7.png";
import Timer from "react-compound-timer";
import Link from "next/link";
import Image from "next/image";
import "animate.css";

const Launchpad = () => {
  return (
    <HeaderFooter activeIndex={2}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <div className={styles.ido_wrapper}>
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
