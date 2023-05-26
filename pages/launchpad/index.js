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
import Link from 'next/link'
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/launchpad.module.scss";
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
          <div className={styles.info}>
            <div className={styles.text}>
              <h1>The Launchpad Protocol</h1>
              <h2>for Everyone!</h2>
              <p>Biso helps everyone to create their own tokens and token sales in few seconds. Tokens created on Biso will be verified and published on explorer websites.</p>
              <p>
                 <Link href="/launchpad/list"><button>
                  Find Project<i></i>
                </button></Link>
                <a href="#">
                  Learn<i></i>
                </a>
              </p>
            </div>
            <div className={styles.data}>
              <b></b>
              <ul>
                <li>
                  <i></i>
                  <h1>1</h1>
                  <h2>Projects</h2>
                  <p>in the last 30 days</p>
                </li>
                <li>
                  <i></i>
                  <h1>0</h1>
                  <h2>Total Users</h2>
                  <p>in the last 30 days</p>
                </li>
                <li>
                  <i></i>
                  <h1>0</h1>
                  <h2>Total Liquidity Raised</h2>
                  <p>in the last 30 days</p>
                </li>
                <li>
                  <i></i>
                  <h1>0</h1>
                  <h2>Total Values Locked</h2>
                  <p>in the last 30 days</p>
                </li>
              </ul>
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
