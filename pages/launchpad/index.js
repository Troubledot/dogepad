import React, { useState } from "react";
import HeaderFooter from "../../layout/HeaderFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Button from "../../components/Button";
import styles from "../../styles/launchpad.module.scss";

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
import Link from "next/link";
import Image from "next/image";
import "animate.css";

const Launchpad = () => {
  const current = {
    id: 13,
    title: "Edohigan",
    desc: `The Edohigan Network provides fast and easy-to-use tools that enable decentralized data validation, immutability and retrieval, empowering developers and data engineers to access reliable data they can use to build the future of Web3 with confidence.`,
    banner: pro1,
    avatar: pro1,
    hot: true,
    details: "/launchpad/detail4",
    twitter: "https://twitter.com/Edohigan_NW",
    medium: null,
    telegram: null,
    discord: "https://discord.gg/C8Fqem6KaQ",
    target: 800,
    subscribed: 1000,
  };
  const projects = [
    {
      id: 2,
      title: "Aradena",
      desc: `Litoja Labs is a company founded by industry experts in technology, web3, and gaming, aiming to revolutionize the way we play games and interact online. The main investor of Litoja Labs is Animoca Brands, who have established important partnerships with various`,
      banner: pro2,
      avatar: pro2,
      hot: true,
      details: "/launchpad",
      twitter: "https://twitter.com/Edohigan_NW",
      medium: "https://twitter.com/Edohigan_NW",
      telegram: "https://twitter.com/Edohigan_NW",
      discord: "https://discord.gg/C8Fqem6KaQ",
      target: 800,
      subscribed: 1000,
    },
    {
      id: 3,
      title: "Edohigan2",
      desc: `The Edohigan Network provides fast and easy-to-use tools that enable decentralized data validation, immutability and retrieval, empowering developers and data engineers to access reliable data they can use to build the future of Web3 with confidence.`,
      banner: pro3,
      avatar: pro3,
      hot: true,
      details: "/launchpad",
      twitter: "https://twitter.com/Edohigan_NW",
      medium: "https://twitter.com/Edohigan_NW",
      telegram: "https://twitter.com/Edohigan_NW",
      discord: "https://discord.gg/C8Fqem6KaQ",
      target: 800,
      subscribed: 1000,
    },
    {
      id: 4,
      title: "Edohigan3",
      desc: `The Edohigan Network provides fast and easy-to-use tools that enable decentralized data validation, immutability and retrieval, empowering developers and data engineers to access reliable data they can use to build the future of Web3 with confidence.`,
      banner: pro4,
      avatar: pro4,
      hot: true,
      details: "/launchpad",
      twitter: "https://twitter.com/Edohigan_NW",
      medium: "https://twitter.com/Edohigan_NW",
      telegram: "https://twitter.com/Edohigan_NW",
      discord: "https://discord.gg/C8Fqem6KaQ",
      target: 800,
      subscribed: 1000,
    },
    {
      id: 5,
      title: "Edohigan3",
      desc: `The Edohigan Network provides fast and easy-to-use tools that enable decentralized data validation, immutability and retrieval, empowering developers and data engineers to access reliable data they can use to build the future of Web3 with confidence.`,
      banner: pro5,
      avatar: pro5,
      hot: true,
      details: "/launchpad",
      twitter: "https://twitter.com/Edohigan_NW",
      medium: "https://twitter.com/Edohigan_NW",
      telegram: "https://twitter.com/Edohigan_NW",
      discord: "https://discord.gg/C8Fqem6KaQ",
      target: 800,
      subscribed: 1000,
    },
    {
      id: 6,
      title: "Edohigan3",
      desc: `The Edohigan Network provides fast and easy-to-use tools that enable decentralized data validation, immutability and retrieval, empowering developers and data engineers to access reliable data they can use to build the future of Web3 with confidence.`,
      banner: pro6,
      avatar: pro6,
      hot: true,
      details: "/launchpad",
      twitter: "https://twitter.com/Edohigan_NW",
      medium: "https://twitter.com/Edohigan_NW",
      telegram: "https://twitter.com/Edohigan_NW",
      discord: "https://discord.gg/C8Fqem6KaQ",
      target: 800,
      subscribed: 1000,
    },
    {
      id: 7,
      title: "Edohigan3",
      desc: `The Edohigan Network provides fast and easy-to-use tools that enable decentralized data validation, immutability and retrieval, empowering developers and data engineers to access reliable data they can use to build the future of Web3 with confidence.`,
      banner: pro7,
      avatar: pro7,
      hot: true,
      details: "/launchpad",
      twitter: "https://twitter.com/Edohigan_NW",
      medium: "https://twitter.com/Edohigan_NW",
      telegram: "https://twitter.com/Edohigan_NW",
      discord: "https://discord.gg/C8Fqem6KaQ",
      target: 800,
      subscribed: 1000,
    },
  ];
  const initProject = (projects) => {
    let projectList = [];
    if (projects.length > 1 && projects.length % 3 !== 0) {
      const remainder = projects.length % 3;
      if (remainder === 1) {
        projectList = [...projects, { id: "seat1" }, { id: "seat2" }];
      } else {
        projectList = [...projects, { id: "seat1" }];
      }
    } else {
      projectList = projects;
    }
    return projectList;
  };
  console.log(initProject(projects));
  const [goingProject, setGoingProject] = useState(current);
  const [projectList, setProjectList] = useState(initProject(projects));

  const ListItem = (item) => {
    if (typeof item.id === "number") {
      return (
        <div className={styles.project} key={item.id}>
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
          <div className={styles.subtitle}>
            <span>{item.title}</span>
            <div className={styles.contact}>
              {item.twitter && (
                <div>
                  <Link href={item.twitter} passHref>
                    <Image
                      src={twitter}
                      alt="twitter"
                      width={15}
                      height={15}
                    ></Image>
                  </Link>
                </div>
              )}
              {item.discord && (
                <div>
                  <Link href={item.discord} passHref>
                    <Image
                      src={discord}
                      alt="discord"
                      width={15}
                      height={13.5}
                    ></Image>
                  </Link>
                </div>
              )}
              {item.telegram && (
                <div>
                  <Link href={item.telegram} passHref>
                    <Image
                      src={tel}
                      alt="telegram"
                      width={15}
                      height={13}
                    ></Image>
                  </Link>
                </div>
              )}
              {item.medium && (
                <div>
                  <Link href={item.medium} passHref>
                    <Image src={md} alt="medium" width={15} height={12}></Image>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <p>{item.desc}</p>
          <div className={styles.amount}>
            <div className={styles.item}>
              <div className={styles.label}>Target subscription</div>
              <div className={styles.val}>{item.target} Btc</div>
            </div>
            <div className={styles.item}>
              <div className={styles.label}>Subscribed</div>
              <div className={styles.val}>{item.subscribed} Btc</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={styles.project}
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
        {/* <video autoPlay loop>
          <source src={ani} type="video/mp4" />
        </video> */}
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.title}>The DRC-20’s New-Gen LaunchPad</div>
            <div className={styles.subtitle}>
              Decentralization, stability, deep cultivation of memes, and
              long-term prospects are the main drivers for the development of
              Dogepad.
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.topinfo}>
              <div className={styles.item}>
                <div className={styles.icon}></div>
                <div className={styles.desc}>
                  <div className={styles.label}>Total Liquidity Raised</div>
                  <div className={styles.val}>$495.4M</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}></div>
                <div className={styles.desc}>
                  <div className={styles.label}>Total Raised</div>
                  <div className={styles.val}>$495.4M</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}></div>
                <div className={styles.desc}>
                  <div className={styles.label}>
                    Total Liquidity Raised Raised
                  </div>
                  <div className={styles.val}>$495.4M</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}></div>
                <div className={styles.desc}>
                  <div className={styles.label}>Total </div>
                  <div className={styles.val}>$495.4M</div>
                </div>
              </div>
            </div>
            <div className={styles.title}>
              <div className={styles.main}>ONGOING PROJECTS</div>
            </div>
            <div className={styles.going}>
              <div className={styles.banner}>
                <Image
                  width={370}
                  height={200}
                  src={goingProject.banner}
                  alt="goingProject"
                ></Image>
                {goingProject.hot ? (
                  <div className={styles.tag}>
                    <Image src={hot} width={12} height={12} alt="hot" />
                    <span>So Hot</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className={styles.info}>
                <div className={styles.subtitle}>
                  <span>Aradena</span>
                  <div className={styles.contacts}>
                    <div>
                      <Link
                        href="https://medium.com/@dogepad.drc"
                        target="_blank"
                        passHref
                      >
                        <Image
                          src={twitter}
                          width={18}
                          height={18}
                          alt="twitter"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://medium.com/@dogepad.drc"
                        target="_blank"
                        passHref
                      >
                        <Image
                          src={discord}
                          width={18.4}
                          height={15.18}
                          alt="discord"
                        />
                      </Link>
                    </div>
                    <div>
                      {" "}
                      <Link
                        href="https://medium.com/@dogepad.drc"
                        target="_blank"
                        rel="noreferrer"
                        passHref
                      >
                        <Image src={tel} width={18} height={16.28} alt="tel" />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://medium.com/@dogepad.drc"
                        target="_blank"
                        rel="noreferrer"
                        passHref
                      >
                        <Image
                          src={github}
                          width={18.4}
                          height={15.64}
                          alt="github"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://medium.com/@dogepad.drc"
                        target="_blank"
                        rel="noreferrer"
                        passHref
                      >
                        <Image
                          src={md}
                          width={18.62}
                          height={14.06}
                          alt="medium"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <p className={styles.intro}>
                  DogePad is the first token fair distribution platform for all
                  meme communities, developed based on the DRC20-Cardinals
                  protocol. It aims to help more project teams raise funds and
                  assist early investors in identifying relatively safe meme
                  investment opportunities, while building a completely
                  decentralized, open, and traffic-aggregating Launchpad.
                </p>
                <div className={styles.amount}>
                  <div className={styles.item}>
                    <div className={styles.label}>Target subscription</div>
                    <div className={styles.val}>800 Btc</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.label}>Subscribed</div>
                    <div className={styles.val}>
                      800 Btc <span>/800 Btc</span>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.label}>Subscription percentage</div>
                    <div className={styles.val}>
                      <div className={styles.pie}></div>
                      40%
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.countdown}>
                <div className={styles.member}>
                  <div className={styles.avatar}>
                    <Image src={avatar} width={23} height={23} alt="twitter" />
                  </div>
                  <span>Cloris Chen</span>
                </div>
                <div className={styles.start}>Distance Start</div>
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
                <Button
                  renderContent={() => (
                    <>
                      <span className={styles.btn}>
                        Find Project<i className={styles.arrow}></i>
                      </span>
                    </>
                  )}
                ></Button>
              </div>
            </div>
            <div className={styles.title}>
              <div className={styles.main}>HISTORY PROJECTS</div>
              <span>
                <Link
                  href="https://medium.com/@dogepad.drc"
                  target="_blank"
                  rel="noreferrer"
                  passHref
                >
                  More >>
                </Link>
              </span>
            </div>
            <div className={styles.projects}>
              {projectList.map((item) => {
                return ListItem(item);
              })}
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
