import React, { useState, useEffect } from "react";
import Timer from "react-compound-timer";
import HeaderFooter from "../../layout/HeaderFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter, useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classNames from "classnames/bind";
import { utils } from "ethers";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/launchpad_detail.module.scss";
import "animate.css";
import axios from "axios";
import avatar from "../../public/launchpad/avatar.png";
import address from "../../public/launchpad/address.png";
import github from "../../public/launchpad/github.png";
import twitter from "../../public/launchpad/twitter.png";
import telegram from "../../public/launchpad/telegram.png";
import discord from "../../public/launchpad/discord.png";
import meta from "../../public/launchpad/meta.png";
import arrow from "../../public/home/yellow_arrow.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Echart from "../../components/Echart";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
const LaunchpadDetails = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const myTeam: Member[] = [
    {
      id: 1,
      name: "Gregoire Laugier",
      position: "Founder",
      avatar,
      intro:
        "With extensive experience in the fields of citizen technology and media, Gregoire founded Wistaverse in early 2020.",
    },
    {
      id: 2,
      name: "Gregoire Laugier",
      position: "Founder",
      avatar,
      intro:
        "With extensive experience in the fields of citizen technology and media, Gregoire founded Wistaverse in early 2020.",
    },
    {
      id: 3,
      name: "Gregoire Laugier",
      position: "Founder",
      avatar,
      intro:
        "With extensive experience in the fields of citizen technology and media, Gregoire founded Wistaverse in early 2020.",
    },
    {
      id: 4,
      name: "Gregoire Laugier",
      position: "Founder",
      avatar,
      intro:
        "With extensive experience in the fields of citizen technology and media, Gregoire founded Wistaverse in early 2020.",
    },
    {
      id: 5,
      name: "Gregoire Laugier",
      position: "Founder",
      avatar,
      intro:
        "With extensive experience in the fields of citizen technology and media, Gregoire founded Wistaverse in early 2020.",
    },
    {
      id: 6,
      name: "Gregoire Laugier",
      position: "Founder",
      avatar,
      intro:
        "With extensive experience in the fields of citizen technology and media, Gregoire founded Wistaverse in early 2020.",
    },
    {
      id: 7,
      name: "Gregoire Laugier",
      position: "Founder",
      avatar,
      intro:
        "With extensive experience in the fields of citizen technology and media, Gregoire founded Wistaverse in early 2020.",
    },
  ];

  const [tokenPrice, setTokenPrice] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [actualAmount, setActualAmount] = useState(0);
  const [fundraisers, setFundraisers] = useState(0);
  const [obtained, setObtained] = useState(0);
  const [balance, setBalance] = useState(0);
  const [team, setTeam] = useState<Member[]>(myTeam);
  const [status, setStatus] = useState("Listed");
  const [currentRate, setCurrentRate] = useState(65.3212345);
  const [myContribution, setMyContribution] = useState(0.0);
  const [totalContribution, setTotalContribution] = useState(65);
  const [audit, setAudit] = useState("No");
  const [KYC, setKYC] = useState("No");
  const [supply, setSupply] = useState(12);
  const [lockDuration, setLockDuration] = useState(32542);
  const [lockPercent, setLockPercent] = useState(25);

  interface Member {
    id: number;
    name: string;
    position: string;
    avatar: string;
    intro: string;
  }

  useEffect(() => {
    // updateBalance();
    const setUpdate = () => {
      const timer = setInterval(async () => {
        updateBalance();
      }, 5000);
      return () => {
        clearInterval(timer);
      };
    };
    // setUpdate();
  }, []);

  const updateBalance = async () => {
    let accounts = await window.unisat.getAccounts();
    if (accounts[0]) {
    }
  };
  const setMax = (value: string) => {
    console.log(value);
  };
  const mint = () => {
    console.log("mint");
  };

  return (
    <HeaderFooter activeIndex={2}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <div className={styles.topimg}></div>
        <div className={styles.container}>
          <div className={styles.card + " " + styles.project}>
            <div className={styles.banner}></div>
            <div className={styles.info}>
              <div className={styles.title}>FairLady Project</div>
              <div className={styles.avatar}>
                <Image src={avatar} alt="avatar" width={35} height={35} />
                <div className={styles.name}>Cloris Chen</div>
              </div>
              <p className={styles.intro}>
                The decentralized Muon network is like a distributed
                supercomputer with a universal operating system. It will be run
                by a global community of node operators, all incentivized by the
                Muon token. <br />
                This creates a powerful and secure cloud computation service
                that can run any app/software and connect to all public
                blockchains. It in no way replaces blockchains, but rather is a
                perfect technology-
              </p>
              <div className={styles.contact}>
                <Link href="https://www.baidu.com/" passHref>
                  <a className={styles.item}>
                    <Image
                      src={address}
                      alt="address"
                      width={20}
                      height={20}
                    ></Image>
                  </a>
                </Link>
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
          </div>
          <div className={styles.swap}>
            <div className={styles.card + " " + styles.item}>
              <div className={styles.title}>
                <div>
                  <div className={styles.ori}>BisoSwap</div>
                  <div>Private equity.</div>
                </div>
                <div className={styles.deadline}></div>
              </div>
              <div className={styles.list}>
                <div className={styles.label}>Token Price</div>
                <div className={styles.val + " " + styles.ori}>
                  {tokenPrice} Xmm
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.label}>Fundraising percentage</div>
                <div className={styles.val + " " + styles.ori}>
                  {percentage} Xmm
                </div>
              </div>
              <div className={styles.amount}>
                <div className={styles.list}>
                  <div className={styles.label}>Total fundraising amount</div>
                  <div className={styles.val + " " + styles.ori}>
                    {totalAmount} BTC
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.label}>Actual fundraising amount</div>
                  <div className={styles.val + " " + styles.ori}>
                    {actualAmount} BTC
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.label}>Number of fundraisers</div>
                  <div className={styles.val + " " + styles.ori}>
                    {fundraisers} BTC
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.label}>Number of tokens obtained</div>
                  <div className={styles.val + " " + styles.ori}>
                    {obtained} BTC
                  </div>
                </div>
              </div>
              <Input handleClick={setMax} btnText="MAX"></Input>
              <div className={styles.list + " " + styles.small}>
                <div className={styles.label}>Balance</div>
                <div className={styles.val + " " + styles.ori}>
                  {balance} $BISO
                </div>
              </div>
              <Button
                backgroundColor="#383838"
                handleClick={mint}
                renderContent={() => (
                  <>
                    <span className={styles.btnText + " " + styles.ori}>
                      Mint! Go
                    </span>
                    <Image src={arrow} alt="mint" width={12} height={12} />
                  </>
                )}
              ></Button>
            </div>
            <div className={styles.card + " " + styles.item}>
              <div className={styles.title}>
                <div>
                  <div className={styles.ori}>BisoSwap</div>
                  <div>Private equity.</div>
                </div>
                <div className={styles.deadline}></div>
              </div>
              <div className={styles.list}>
                <div className={styles.label}>Token Price</div>
                <div className={styles.val + " " + styles.ori}>
                  {tokenPrice} Xmm
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.label}>Fundraising percentage</div>
                <div className={styles.val + " " + styles.ori}>
                  {percentage} Xmm
                </div>
              </div>
              <div className={styles.amount}>
                <div className={styles.list}>
                  <div className={styles.label}>Total fundraising amount</div>
                  <div className={styles.val + " " + styles.ori}>
                    {totalAmount} BTC
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.label}>Actual fundraising amount</div>
                  <div className={styles.val + " " + styles.ori}>
                    {actualAmount} BTC
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.label}>Number of fundraisers</div>
                  <div className={styles.val + " " + styles.ori}>
                    {fundraisers} BTC
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.label}>Number of tokens obtained</div>
                  <div className={styles.val + " " + styles.ori}>
                    {obtained} BTC
                  </div>
                </div>
              </div>
              <Input handleClick={setMax} btnText="MAX"></Input>
              <div className={styles.list + " " + styles.small}>
                <div className={styles.label}>Balance</div>
                <div className={styles.val + " " + styles.ori}>
                  {balance} $BISO
                </div>
              </div>
              <Button
                backgroundColor="#383838"
                handleClick={mint}
                renderContent={() => (
                  <>
                    <span className={styles.btnText + " " + styles.ori}>
                      Mint! Go
                    </span>
                    <Image src={arrow} alt="mint" width={12} height={12} />
                  </>
                )}
              ></Button>
            </div>
          </div>
          <div className={styles.card + " " + styles.team}>
            <div className={styles.title}>About Team</div>
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {team.map((member: Member) => (
                <SwiperSlide className={styles.member} key={member.id}>
                  <Image src={member.avatar} alt={member.name} />
                  <div className={styles.name}>{member.name}</div>
                  <div className={styles.position + " " + styles.ori}>
                    {member.position}
                  </div>
                  <p className={styles.intro}>{member.intro}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.data}>
            <div className={styles.card + " " + styles.protocol}>
              <div className={styles.item}>
                <div className={styles.title}>Cogito Protocol</div>
                <p>
                  The Cogito protocol provides a framework that allows for the
                  creation of decentralized assets called tracepoints. They are
                  artificial intelligence driven, secured stable currencies, and
                  soft linked to non-financial indices. The mechanism behind
                  this protocol is supported by SingularityNET's artificial
                  intelligence technology.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Cogito Protocol</div>
                <p>
                  The Cogito protocol provides a framework that allows for the
                  creation of decentralized assets called tracepoints. They are
                  artificial intelligence driven, secured stable currencies, and
                  soft linked to non-financial indices. The mechanism behind
                  this protocol is supported by SingularityNET's artificial
                  intelligence technology.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Cogito Protocol</div>
                <p>
                  The Cogito protocol provides a framework that allows for the
                  creation of decentralized assets called tracepoints. They are
                  artificial intelligence driven, secured stable currencies, and
                  soft linked to non-financial indices. The mechanism behind
                  this protocol is supported by SingularityNET's artificial
                  intelligence technology.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>Cogito Protocol</div>
                <p>
                  The Cogito protocol provides a framework that allows for the
                  creation of decentralized assets called tracepoints. They are
                  artificial intelligence driven, secured stable currencies, and
                  soft linked to non-financial indices. The mechanism behind
                  this protocol is supported by SingularityNET's artificial
                  intelligence technology.
                </p>
              </div>
            </div>
            <div className={styles.other}>
              <div className={styles.card + " " + styles.status}>
                <div className={styles.list}>
                  <div className={styles.label}>Status</div>
                  <div className={styles.val + " " + styles.blue}>{status}</div>
                </div>
                <div className={styles.list}>
                  <div className={styles.label}>Current Rate</div>
                  <div className={styles.val}>1ETH = {currentRate} Xmm</div>
                </div>
                <div className={styles.list}>
                  <div className={styles.label}>My Contribution</div>
                  <div className={styles.val}>{myContribution} Xmm</div>
                </div>
                <div className={styles.list}>
                  <div className={styles.label}>Total Contribution</div>
                  <div className={styles.val}>{totalContribution} Xmm</div>
                </div>
                <div className={styles.inner}>
                  <div className={styles.list}>
                    <div className={styles.label}>Audit</div>
                    <div className={styles.val + " " + styles.red}>{audit}</div>
                  </div>
                  <div className={styles.list}>
                    <div className={styles.label}>KYC</div>
                    <div className={styles.val + " " + styles.red}>{KYC}</div>
                  </div>
                  <div className={styles.list}>
                    <div className={styles.label}>
                      Token supply owned by Team
                    </div>
                    <div className={styles.val + " " + styles.ori}>
                      {supply} %
                    </div>
                  </div>
                  <div className={styles.list}>
                    <div className={styles.label}>Lock duration</div>
                    <div className={styles.val + " " + styles.ori}>
                      {lockDuration} Days
                    </div>
                  </div>
                  <div className={styles.list}>
                    <div className={styles.label}>Lock percentage</div>
                    <div className={styles.val + " " + styles.ori}>
                      {lockPercent} %
                    </div>
                  </div>
                  <div className={styles.list}>
                    <div className={styles.label}>Unsafe functions</div>
                    <div className={styles.val}>...</div>
                  </div>
                  <div className={styles.tips}>
                    Unsafe functions Powered by OKCA
                  </div>
                </div>
              </div>
              <div className={styles.card + " " + styles.metric}>
                <div className={styles.title}>Token Metric</div>
                <div className={styles.chart}>
                  <Echart />
                </div>
              </div>
              <div
                className={
                  styles.card + " " + styles.grayback + " " + styles.prompt
                }
              >
                <div className={styles.title}>Prompt you.</div>
                <p>
                  The start-up project is still in its early stages, and there
                  may be significant risks in the operation of the project, the
                  underlying technology of the project, and the legal and
                  regulatory environment.
                </p>
                <p>
                  Understanding tokens and evaluating their inherent risks
                  require advanced technical and financial knowledge.
                </p>
                <p>
                  Due to the influence of technology, laws and regulations,
                  market, and other factors, the price of the token you
                  purchased may fluctuate significantly, and the price may
                  decrease or increase significantly.
                </p>
                <p>
                  Due to the underlying technology of the token or the GATE.IO
                  trading platform, the token you purchased may not be able to
                  be fully or partially withdrawn.
                </p>
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

export default withRouter(LaunchpadDetails);
