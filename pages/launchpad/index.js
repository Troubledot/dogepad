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
      id: 1,
      title: "PrivateAI",
      desc: `PrivateAI is building the AI model compatible with homogeneous federated learning. $PGPT is the utility token that powers PrivateAI's privacy layer to interact with Chat GPT and Machine Learning (ML) that focuses on preventing both the internal data misuse as well as external exposure and leaks. With exponential growth and adoption of OpenAI's Chat GPT and other related Artificial Intelligence (AI) technologies, the question of preserving data privacy remains wide open. Using enhanced data protection, homomorphic encryption and federated learning, PrivateAI users will be able to train neural networks without revealing their data. The business model of PGPT includes subscription plans with multiple tiers as well as a privacy-focused marketplace of PrivateAI-powered dApps, plugins and content.`,
      banner: pro5,
      avatar: pro5,
      hot: true,
      details: "/launchpad/detail3",
      twitter: "https://twitter.com/privateAIcom",
      medium: "",
      telegram: "https://t.me/privateaicom",
      discord: "",
      target: 3000000,
      subscribed: 7700000,
    },
    
    {
      id: 3,
      title: "Dogemeta.ai",
      desc: `Introducing Dogy, the revolutionary token reshaping the GameFi universe! Designed to break barriers, Dogy is not just a token—it's a beacon of hope and a testament to the power of Artificial Intelligence. Unlike traditional GameFi tokens, Dogy offers multidimensional utility across numerous games, boosting the demand for game tokens and fostering a more dynamic ecosystem.

But Dogy's power extends beyond the gaming field. It is the key to unlocking the AI Game Master—an innovative assistant guiding players to new gaming heights. Dogy merges the conventional gaming world with the emerging Web3 landscape, propelling traditional games into the blockchain era and translating victories into tangible rewards.

Most importantly, Dogy cultivates community prosperity, promising fair distribution of potential ecosystem revenue. It's more than a token—it's an emblem of change, community, and a prosperous future. Experience the future of GameFi. Embrace the power of Dogy!`,
      banner: pro3,
      avatar: pro3,
      hot: true,
      details: "/launchpad/detail2",
      twitter: "https://twitter.com/dogy.ai",
      medium: "",
      telegram: "",
      discord: "",
      target: 30000000,
      subscribed: 70000000,
    },
    {
      id: 2,
      title: "Pepe cardinals",
      desc: `Pepe Cardinals - believes in a bright future, actively uses all the benefits of the 21st century:
              - cryptocurrency
              - listens to music
              - social networks
              - worships Dogecoin
              - waits for Elon Musk`,
      banner: pro1,
      avatar: pro1,
      hot: true,
      details: "/launchpad/detail",
      twitter: "https://twitter.com/pepedrc20",
      medium: "",
      telegram: "",
      discord: "",
      target: 50000,
      subscribed: 100000,
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
              <div className={styles.label}>Private Sale</div>
              <div className={styles.val}>{item.target} DOGE</div>
            </div>
            <div className={styles.item}>
              <div className={styles.label}>Public Sale</div>
              <div className={styles.val}>{item.subscribed} DOGE</div>
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
    <HeaderFooter activeIndex={3}>
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
                  <div className={styles.val}>$0</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}></div>
                <div className={styles.desc}>
                  <div className={styles.label}>Total Raised</div>
                  <div className={styles.val}>$0</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}></div>
                <div className={styles.desc}>
                  <div className={styles.label}>
                    Total Users
                  </div>
                  <div className={styles.val}>$0</div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}></div>
                <div className={styles.desc}>
                  <div className={styles.label}>Total Locked Liquidity</div>
                  <div className={styles.val}>$0</div>
                </div>
              </div>
            </div>
            {/* <div className={styles.title}>
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
                    <div className={styles.val}>80 DOGE</div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.label}>Subscribed</div>
                    <div className={styles.val}>
                      5 DOGE <span>/10 DOGE</span>
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
                         <Link href="/launchpad/detail" target="_blank"
                        rel="noreferrer"
                        passHref>Find Project</Link><i className={styles.arrow}></i>
                      </span>
                    </>
                  )}
                ></Button>
              </div>
            </div> */}
            <div className={styles.title}>
              <div className={styles.main}>HISTORY PROJECTS</div>
              <span>
                <Link
                  href="https://medium.com/@dogepad.drc"
                  target="_blank"
                  rel="noreferrer"
                  passHref
                >
                  More &gt;&gt;
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
