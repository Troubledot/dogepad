import React, { useState, useEffect, Component } from "react";
import Timer from "react-compound-timer";
import HeaderFooter from "../../layout/HeaderFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter, useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classNames from "classnames/bind";
import Cookies from "js-cookie";
import { utils } from "ethers";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/launchpad_detail.module.scss";
import "animate.css";
import axios from "axios";

const Stake = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  useEffect(async () => {
    updateBalance();
    const timer = setInterval(async () => {
      updateBalance();
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const updateBalance = async () => {
    let accounts = await window.unisat.getAccounts();
    if (accounts[0]) {
    }
  };

  return (
    <HeaderFooter activeIndex={2}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <ul className={styles.projects}>
            <li>
              <span>
                <h1>
                  <img src="/launchpad/arks.jpg" />
                </h1>
                <i>
                  <img src="/launchpad/arks.jpg" />
                </i>
                <h2>Arkstart</h2>
                {/* <dt>
                  <dl className={styles.twitter}></dl>
                  <dl className={styles.telegarm}></dl>
                  <dl className={styles.medium}></dl>
                  <dl className={styles.github}></dl>
                  <dl className={styles.discord}></dl>
                </dt> */}
              </span>
              <p>
                The decentralized Muon network is like a distributed
                supercomputer with a universal operating system. It will be run
                by a global community of node operators, all incentivized by the
                Muon token. This creates a powerful and secure cloud computation
                service that can run any app/software and connect to all public
                blockchains. It in no way replaces blockchains, but rather is a
                perfect technology-
              </p>
            </li>
          </ul>
          <div className={styles.detail}>
            <div className={styles.left}>
              <div className={styles.left_content}>
                <div className={styles.pool}>
                  <Timer
                    formatValue={(value) =>
                      `${value < 10 ? `0${value}` : value} `
                    }
                    initialTime={
                      new Date(1684179800 * 1000).getTime() -
                      new Date().getTime()
                    }
                    lastUnit="h"
                    direction="backward"
                  >
                    <ul>
                      <li>
                        <h1>
                          <Timer.Days />
                        </h1>
                        <p>D A Y</p>
                      </li>
                      <li>
                        <h1>
                          <Timer.Hours />
                        </h1>
                        <p>H R S</p>
                      </li>
                      <li>
                        <h1>
                          <Timer.Minutes />
                        </h1>
                        <p>M I N</p>
                      </li>
                      <li>
                        <h1>
                          <Timer.Seconds />
                        </h1>
                        <p>S E C</p>
                      </li>
                    </ul>
                  </Timer>
                  {/* <div className={styles.tips}><i></i>The pool has been finalized</div> */}
                  <div className={styles.title}>
                    <span>Progress</span>
                    <span className={styles.orange}>0 $BISO</span>
                  </div>
                  <div className={styles.progress}>
                    <div className={styles.progress_inner}></div>
                  </div>
                  <dl>
                    <dt>
                      <h1>0.0 BTC</h1>
                      <p>Current fundraising</p>
                    </dt>
                    <dt>
                      <h1>0.0 BTC</h1>
                      <p>Target fundraising</p>
                    </dt>
                  </dl>
                  <div className={styles.deadline}>
                    <div className={styles.rows}>
                      <span>Start</span>
                      <span>2023-05-31 13:00:00 UTC+8</span>
                    </div>
                    <div className={styles.rows}>
                      <span>End</span>
                      <span>2023-06-1 13:00:00 UTC+8</span>
                    </div>
                    <div className={styles.tips}>
                      If the target value is not achieved in the end,
                      crowdfunding will fail
                    </div>
                  </div>
                  <div className={styles.btns}>
                    <button>I want to participate</button>
                  </div>
                </div>
              </div>
              <div className={styles.detail}>
                <div className={styles.rows}>
                  <span>Website</span>
                  <span><a href="https://arkstart.org" target="_blank"   rel="noreferrer">https://arkstart.org</a></span>
                </div>
                <div className={styles.rows}>
                  <span>Twitter</span>
                  <span><a href="https://twitter.com/arkscoin" target="_blank"   rel="noreferrer">https://twitter.com/arkscoin</a></span>
                </div>
                <div className={styles.rows}>
                  <span>Medium</span>
                  <span><a href="https://medium.com/@arkstart" target="_blank"   rel="noreferrer">https://medium.com/@arkstart</a></span>
                </div>
                <div className={styles.rows}>
                  <span>Telegarm</span>
                  <span><a href="https://t.me/ArkstartOfficial" target="_blank"   rel="noreferrer">https://t.me/ArkstartOfficial</a></span>
                </div>
                {/* <div className={styles.deadline}>
                  <div className={styles.rows}>
                    <span>Start</span>
                    <span>2023-05-27 13:00:00 UTC+8</span>
                  </div>
                  <div className={styles.rows}>
                    <span>End</span>
                    <span>2023-05-27 13:00:00 UTC+8</span>
                  </div>
                  <div className={styles.tips}>
                    If the target value is not achieved in the end, crowdfunding
                    will fail
                  </div>
                </div> */}
              </div>
            </div>

            <div className={styles.right}>
              <img src="/launchpad/arks.jpg" width="100%" />
              <p>
                <span>Tokenomics :</span>
                <span>
                  80% IDO Allocation: Increased to 80% to provide additional
                  liquidity for initial exchange offerings. This expanded
                  allocation ensures sufficient token availability for IDO/IEO
                  participants, fostering wider participation and enhancing
                  market liquidity.
                </span>
              </p>
              <p>
                <span>&nbsp;</span>
              </p>
              <p>
                <span>
                  4% Market Allocation: Unlocked 20% at Token Generation Event
                  (TGE), primarily used for initial user airdrops, incentives,
                  and ecosystem development. This allocation is adjusted to
                  allocate 7% of the total supply to the market. It enables
                  Arkstart to allocate resources for market development, user
                  acquisition, and ecosystem growth, fostering adoption and
                  establishing a strong presence in the market.
                </span>
              </p>
              <p>
                <span>&nbsp;</span>
              </p>
              <p>
                <span>
                  3% Ecosystem and Partnerships: Allocated for ecosystem
                  development, strategic partnerships, and collaborative
                  initiatives. This allocation ensures 7% of the total supply is
                  dedicated to fostering collaborations with other projects,
                  platforms, and communities. It supports the growth and
                  expansion of the Arkstart ecosystem by integrating
                  complementary services, expanding use cases, and strengthening
                  the overall ecosystem.
                </span>
              </p>
              <p>
                <span>&nbsp;</span>
              </p>
              <p>
                <span>
                  10% Staking: Users can stake the platform token and earn
                  staking rewards. The staking mechanism incentivizes long-term
                  commitment, active participation, and alignment of interests
                  among participants. This allocation ensures 3% of the total
                  supply is dedicated to staking rewards, promoting network
                  security and token holder engagement.
                </span>
              </p>
              <p>
                <span>&nbsp;</span>
              </p>
              <p>
                <span>
                  3% DAO Allocation: Reserved for internal and external
                  incentives within the DAO organization. This allocation
                  ensures active governance participation and supports
                  collaborative partnerships, promoting community involvement
                  and decision-making.
                </span>
              </p>
              <p>
                <br />
              </p>
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

export default withRouter(Stake);
