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
import Link from "next/link";
import Image from "next/image";
import tokenimg from "../../public/images/token.png";
import project from "../../public/launchpad/project.png";
import avatar from "../../public/launchpad/messi.webp";
import icon1 from "../../public/launchpad/titleicon.png";
import icon2 from "../../public/launchpad/launchicon2.png";
import icon3 from "../../public/launchpad/launchicon3.png";
import icon4 from "../../public/launchpad/launchicon4.png";
import hot from "../../public/launchpad/hot.svg";
import github from "../../public/launchpad/github.png";
import twitter from "../../public/launchpad/twitter.png";
import telegram from "../../public/launchpad/telegram.png";
import discord from "../../public/launchpad/discord.png";
import meta from "../../public/launchpad/meta.png";
import styles from "../../styles/launchpad.module.scss";
import "animate.css";
import axios from "axios";

const Stake = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  // useEffect(() => {
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
          <div className={styles.info}>
            <div className={styles.text}>
              <h1>The Launchpad Protocol</h1>
              <h2>
                for Everyone! <span className={styles.version}>Version 1</span>
              </h2>
              <p>
                Biso helps everyone to create their own tokens and token sales
                in few seconds. Tokens created on Biso will be verified and
                published on explorer websites.
              </p>
              <div className={styles.operate}>
                <Link href="/launchpad/list" passHref>
                  <button>
                    Find Project<i></i>
                  </button>
                </Link>
                <a href="#">
                  Learn<i></i>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.data}>
            <b></b>
            <ul>
              <li>
                <Image src={icon1} alt="icon" width={57} height={50} />
                <h1>1</h1>
                <h2>Projects</h2>
                <p>in the last 30 days</p>
              </li>
              <li>
                <Image src={icon2} alt="icon" width={60} height={60} />
                <h1>0</h1>
                <h2>Total Users</h2>
                <p>in the last 30 days</p>
              </li>
              <li>
                <Image src={icon3} alt="icon" width={60} height={60} />
                <h1>0</h1>
                <h2>Total Liquidity Raised</h2>
                <p>in the last 30 days</p>
              </li>
              <li>
                <Image src={icon4} alt="icon" width={64} height={64} />
                <h1>0</h1>
                <h2>Total Values Locked</h2>
                <p>in the last 30 days</p>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <div className={styles.main}>
                <div className={styles.banner}>
                  <Image
                    src={project}
                    alt="Remote Image"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className={styles.tag}>
                    <Image src={hot} width={12} height={12} alt="hot" />
                    <span>So Hot</span>
                  </div>
                </div>
                <div className={styles.avatar}>
                  <Image src={avatar} alt="avatar" width={80} height={80} />
                </div>
                <div className={styles.name}>FairLady Project</div>
                <div className={styles.contact}>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={twitter}
                        alt="twitter"
                        width={20}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={discord}
                        alt="discord"
                        width={24.24}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={telegram}
                        alt="telegram"
                        width={23.53}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={github}
                        alt="github"
                        width={23.53}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={meta}
                        alt="meta"
                        width={25.8}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                </div>
              </div>
              <p>
                The decentralized Muon network is like a distributed
                supercomputer with a universal operating system. It will be run
                by a global community of node operators, all incentivized by the
                Muon token. This creates a powerful and secure cloud computation
                service that can run any app/software and connect to all public
                blockchains. It in no way replaces blockchains, but rather is a
                perfect technology-
              </p>
            </div>
            <div className={styles.listItem}>
              <div className={styles.main}>
                <div className={styles.banner}>
                  <Image
                    src={project}
                    alt="Remote Image"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className={styles.tag}>
                    <Image src={hot} width={12} height={12} alt="hot" />
                    <span>So Hot</span>
                  </div>
                </div>
                <div className={styles.avatar}>
                  <Image src={avatar} alt="avatar" width={80} height={80} />
                </div>
                <div className={styles.name}>FairLady Project</div>
                <div className={styles.contact}>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={twitter}
                        alt="twitter"
                        width={20}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={discord}
                        alt="discord"
                        width={24.24}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={telegram}
                        alt="telegram"
                        width={23.53}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={github}
                        alt="github"
                        width={23.53}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={meta}
                        alt="meta"
                        width={25.8}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                </div>
              </div>
              <p>
                The decentralized Muon network is like a distributed
                supercomputer with a universal operating system. It will be run
                by a global community of node operators, all incentivized by the
                Muon token. This creates a powerful and secure cloud computation
                service that can run any app/software and connect to all public
                blockchains. It in no way replaces blockchains, but rather is a
                perfect technology-
              </p>
            </div>
            <div className={styles.listItem}>
              <div className={styles.main}>
                <div className={styles.banner}>
                  <Image
                    src={project}
                    alt="Remote Image"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className={styles.tag}>
                    <Image src={hot} width={12} height={12} alt="hot" />
                    <span>So Hot</span>
                  </div>
                </div>
                <div className={styles.avatar}>
                  <Image src={avatar} alt="avatar" width={80} height={80} />
                </div>
                <div className={styles.name}>FairLady Project</div>
                <div className={styles.contact}>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={twitter}
                        alt="twitter"
                        width={20}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={discord}
                        alt="discord"
                        width={24.24}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={telegram}
                        alt="telegram"
                        width={23.53}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={github}
                        alt="github"
                        width={23.53}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                  <Link href="https://www.baidu.com/" passHref>
                    <a className={styles.item}>
                      <Image
                        src={meta}
                        alt="meta"
                        width={25.8}
                        height={20}
                      ></Image>
                    </a>
                  </Link>
                </div>
              </div>
              <p>
                The decentralized Muon network is like a distributed
                supercomputer with a universal operating system. It will be run
                by a global community of node operators, all incentivized by the
                Muon token. This creates a powerful and secure cloud computation
                service that can run any app/software and connect to all public
                blockchains. It in no way replaces blockchains, but rather is a
                perfect technology-
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
