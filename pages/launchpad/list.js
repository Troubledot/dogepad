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
import styles from "../../styles/launchpad_list.module.scss";
import "animate.css";
import axios from "axios";

const Stake = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  // useEffect(async () => {
  //   updateBalance();
  //   const timer = setInterval(async () => {
  //     updateBalance();
  //   }, 5000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

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
            <Link href="/launchpad/detail" passHref>
              <li>
                <span>
                  <h1>
                    <Image
                      src="/launchpad/arks.jpg"
                      alt="ark"
                      width={330}
                      height={215}
                    />
                  </h1>
                  <i>
                    <Image
                      src="/launchpad/arks.jpg"
                      alt="ark"
                      width={100}
                      height={100}
                    />
                  </i>
                  <h2>Arkstart</h2>
                  <dt>
                    <a
                      href="https://twitter.com/arkscoin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <dl className={styles.twitter}></dl>
                    </a>
                    <a
                      href="https://t.me/ArkstartOfficial"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <dl className={styles.telegarm}></dl>
                    </a>
                    <a
                      href="https://medium.com/@arkstart"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <dl className={styles.medium}></dl>
                    </a>
                  </dt>
                </span>
                <p>
                  The first project to adopt the VE (3,3) model on the #BRC20
                  protocol .
                </p>
              </li>
            </Link>
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
