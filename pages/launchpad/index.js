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
import project from "../../public/launchpad/arks.jpg";
import avatar from "../../public/launchpad/avatar.png";
import avatar1 from "../../public/launchpad/avatar1.png";
import project1 from "../../public/launchpad/project1.jpg";
import project2 from "../../public/launchpad/project2.png";
import icon1 from "../../public/launchpad/titleicon.png";
import icon2 from "../../public/launchpad/launchicon2.png";
import icon3 from "../../public/launchpad/launchicon3.png";
import icon4 from "../../public/launchpad/launchicon4.png";
import hot from "../../public/launchpad/hot.svg";
import github from "../../public/launchpad/github.png";
import twitter from "../../public/launchpad/twitter.png";
import telegram from "../../public/launchpad/telegram.png";
import discord from "../../public/launchpad/discord.png";
import medium from "../../public/launchpad/meta.png";
import styles from "../../styles/launchpad.module.scss";
import "animate.css";
import axios from "axios";

const Launchpad = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const projects = [
    {
      id: 1,
      title: "TBWS",
      desc: `Three-body Warrior is a WEB3 game, based on the BRC20 protocol ARPG + MOBA game, the game story takes place in 2272 and now, the three-body man from the future takes over the governance of the earth in an all-round way, through the game system, each player can have an immersive experience. The form of the earth in the metaverse period and participate in various governances. At the same time, you can get income in the game, and you can also convert the income into real value, (legal currency). A global team based in the United States and South Korea provides support for game development. Product features include NFT mall, game center, Defi module, incentives, and personal center.`,
      banner: project1,
      avatar: avatar1,
      hot: true,
      details: "/launchpad/detail1",
      twitter: "https://twitter.com/3bodywarriors",
      medium: "http://threebodywarriors.medium.com",
      telegram: "https://t.me/threebodywarriors",
      discord: null,
    },
    {
      id: 2,
      title: "ISKA",
      desc: `Isekai Protocol is a pioneering AI-driven Web3 creator ecosystem dedicated to the creation of ACGN (anime, comics, games, and novels) content. By leveraging the power of AI and Web3 technology, Isekai Protocol enables users to unleash their creative potential, generating derivative works from established IPs while adhering to the principles of the Isekai Protocol, fostering a dynamic NFT network that seamlessly connects derivatives and originals. The platform offers AI-powered creator tools, including a visual novel maker to enable immersive storytelling experiences. Moreover, the derivative creation royalty system ensures owners and creators of NFTs integrated into derivative works receive a fair share of profits when such creations achieve success. By establishing a bottom-up ACGN content creation ecosystem, Isekai aims to revolutionize the way content is created, shared, and monetized. `,
      banner: project2,
      avatar: project2,
      hot: false,
      details: "/launchpad/detail2",
      twitter: "https://twitter.com/isekaiprotocol",
      medium: "https://medium.com/@isekaimetaverse",
      telegram: null,
      discord: "https://discord.com/invite/tuxbNWqhmA",
    },
     {
      id: 3,
      title: "Arkstart",
      desc: `Arkstart is pioneering the new era of BRC-20 token staking with
                our innovative blockchain project. We aim to build a sustainable
                staking ecosystem using unique staking mechanisms and economic
                models.`,
      banner: project,
      avatar: avatar,
      hot: false,
      details: "/launchpad/detail",
      twitter: "https://twitter.com/arkscoin",
      medium: "https://medium.com/@arkstart",
      telegram: "https://t.me/ArkstartOfficial",
      discord: null,
    },
  ];

  const [projectList, setProjectList] = useState(projects);

  if (projectList.length > 1 && projectList.length % 3 !== 0) {
    const remainder = projectList.length % 3;
    if (remainder === 1) {
      setProjectList([...projectList, { id: "seat1" }, { id: "seat2" }]);
    } else {
      setProjectList([...projectList, { id: "seat1" }]);
    }
  }

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

  const ListItem = (item) => {
    if (typeof item.id === "number") {
      return (
        <div className={styles.listItem} key={item.id}>
          <div className={styles.main}>
            <Link href={item.details} passHref>
              <div className={styles.banner}>
                <Image
                  src={item.banner}
                  alt="Remote Image"
                  layout="fill"
                  objectFit="cover"
                />
                {item.hot ? (
                  <div className={styles.tag}>
                    <Image src={hot} width={12} height={12} alt="hot" />
                    <span>So Hot</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Link>
            <div className={styles.avatar}>
              <Image
                src={item.avatar}
                alt="avatar"
                width={80}
                height={80}
                objectFit="cover"
              />
            </div>
            <div className={styles.name}>{item.title}</div>
            <div className={styles.contact}>
              {item.twitter && (
                <Link href={item.twitter} passHref>
                  <a className={styles.item}>
                    <Image
                      src={twitter}
                      alt="twitter"
                      width={20}
                      height={20}
                    ></Image>
                  </a>
                </Link>
              )}
              {item.discord && (
                <Link href={item.discord} passHref>
                  <a className={styles.item}>
                    <Image
                      src={discord}
                      alt="discord"
                      width={24.24}
                      height={20}
                    ></Image>
                  </a>
                </Link>
              )}
              {item.telegram && (
                <Link href={item.telegram} passHref>
                  <a className={styles.item}>
                    <Image
                      src={telegram}
                      alt="telegram"
                      width={23.53}
                      height={20}
                    ></Image>
                  </a>
                </Link>
              )}
              {item.medium && (
                <Link href={item.medium} passHref>
                  <a className={styles.item}>
                    <Image
                      src={medium}
                      alt="medium"
                      width={25.8}
                      height={20}
                    ></Image>
                  </a>
                </Link>
              )}
            </div>
          </div>
          <p>{item.desc}</p>
        </div>
      );
    } else {
      return (
        <div
          className={styles.listItem}
          key={item.id}
          style={{ backgroundColor: "transparent" }}
        ></div>
      );
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
                {/* <Link href="/launchpad/list" passHref> */}
                <button>
                  Learn<i></i>
                </button>
                {/* </Link> */}
                {/* <a href="#">
                  Learn<i></i>
                </a> */}
              </div>
            </div>
          </div>
          <div className={styles.data}>
            <b></b>
            <ul>
              <li>
                <Image src={icon1} alt="icon" width={57} height={50} />
                <h1>3</h1>
                <h2>Projects</h2>
                <p>in the last 30 days</p>
              </li>
              <li>
                <Image src={icon2} alt="icon" width={60} height={60} />
                <h1>3481</h1>
                <h2>Total Users</h2>
                <p>in the last 30 days</p>
              </li>
              <li>
                <Image src={icon3} alt="icon" width={60} height={60} />
                <h1>17.8 BTC</h1>
                <h2>Total Liquidity Raised</h2>
                <p>in the last 30 days</p>
              </li>
              <li>
                <Image src={icon4} alt="icon" width={64} height={64} />
                <h1>$357M</h1>
                <h2>Total Values Locked</h2>
                <p>in the last 30 days</p>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            {projectList.map((item) => ListItem(item))}
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
