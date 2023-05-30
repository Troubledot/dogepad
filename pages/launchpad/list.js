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
import Link from 'next/link'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/launchpad_list.module.scss";
import "animate.css";
import axios from 'axios';

const Stake = () => {
  const { t } = useTranslation("common");
  const router = useRouter();


  useEffect(async() => {
    updateBalance()
    const timer = setInterval(async () => {
      updateBalance()
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);


  const updateBalance = async() => {
    let accounts = await window.unisat.getAccounts();
      if(accounts[0]){
    
      } 
  }


  return (
    <HeaderFooter activeIndex={2}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <div className={styles.inner}>
            <ul className={styles.projects}>
                <Link href="/launchpad/detail"><li>
                    <span>
                        <h1>
                            <img src="/launchpad/arks.jpg" />
                        </h1>
                        <i> <img src="/launchpad/arks.jpg" /></i>
                        <h2>Arkstart</h2>
                        <dt>
                          <a href="https://twitter.com/arkscoin" target="_blank"  rel="noreferrer"><dl className={styles.twitter}></dl></a>
                          <a href="https://t.me/ArkstartOfficial" target="_blank"  rel="noreferrer"><dl className={styles.telegarm}></dl></a>
                          <a href="https://medium.com/@arkstart" target="_blank"  rel="noreferrer"><dl className={styles.medium}></dl></a>
                        </dt>
                    </span>
                    <p>The first project to adopt the VE (3,3) model on the #BRC20 protocol .</p>
                </li>
                </Link>
                {/* <Link href="/launchpad/detail2"><li>
                    <span>
                        <h1>
                            <img src="/launchpad/ghz2.jpg" />
                        </h1>
                        <i> <img src="/launchpad/ghz.jpg" /></i>
                        <h2>古惑仔(GHZI)</h2>
                        <dt>
                          <a href="https://twitter.com/HK_Brother_" target="_blank"  rel="noreferrer"><dl className={styles.twitter}></dl></a>
                          <a href="https://t.me/BRO10000X" target="_blank"  rel="noreferrer"><dl className={styles.telegarm}></dl></a>
                        </dt>
                    </span>
                    <p>歡迎來到古惑幣世界！這是一個基於隱私的加密貨幣，由一群勇敢的古惑仔創造。</p>
                </li>
                </Link>
                <Link href="/launchpad/detail3"><li>
                    <span>
                        <h1>
                            <img src="/launchpad/iksa.jpg" />
                        </h1>
                        <i> <img src="/launchpad/iksa.jpg" /></i>
                        <h2>Isekai Protocol</h2>
                        <dt>
                          <a href="https://twitter.com/isekaiprotocol" target="_blank"  rel="noreferrer"><dl className={styles.twitter}></dl></a>
                          <a href="https://discord.com/invite/tuxbNWqhmA" target="_blank"  rel="noreferrer"><dl className={styles.discord}></dl></a>
                        </dt>
                    </span>
                    <p>Isekai Metaverse is an AI-driven Web3 ACGN (anime, comics, games, and novels) creator ecosystem. With our open-source creator protocol: Isekai Protocol, we will build a bottom-up ACGN metaverse where creators can use NFT culture legos to participate in community creation and eventually form an NFT content network. Isekai Metaverse provides various creation tools and distribution channels.</p>
                </li>
                </Link> */}
            </ul>
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
