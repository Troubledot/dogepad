import React, { useState, useEffect } from 'react';
import Timer from 'react-compound-timer';
import HeaderFooter from '../../layout/HeaderFooter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { withRouter, useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/launchpad_detail.module.scss';
import 'animate.css';
import axios from 'axios';
import avatar from '../../public/launchpad/avatar.png';
import address from '../../public/launchpad/address.png';
import github from '../../public/launchpad/github.png';
import twitter from '../../public/launchpad/twitter.png';
import telegram from '../../public/launchpad/telegram.png';
import discord from '../../public/launchpad/discord.png';
import meta from '../../public/launchpad/meta.png';
import yellowArrow from '../../public/home/yellow_arrow.svg';
import whiteArrow from '../../public/home/white_arrow.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Echart from '../../components/Echart';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';

const LaunchpadDetails = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  interface Member {
    id: number;
    name: string;
    position: string;
    avatar: StaticImageData;
    intro: string;
  }

  const myTeam: Member[] = [
    {
      id: 1,
      name: 'Michael',
      position: 'Founder',
      avatar,
      intro:
        'Michael is a passionate technology innovator. He has extensive engineering knowledge and technical expertise, with in-depth research and hands-on experience in multiple fields. Michael is committed to exploring and applying cutting-edge technology solutions to create innovative value for customers.'
    }
  ];

  const [tokenPrice, setTokenPrice] = useState(0.00000105952);
  const [percentage, setPercentage] = useState(0);
  const [totalAmount, setTotalAmount] = useState(5.2);
  const [actualAmount, setActualAmount] = useState(0);
  const [fundraisers, setFundraisers] = useState(0);
  const [obtained, setObtained] = useState(0);
  const [balance, setBalance] = useState(0);
  const [team, setTeam] = useState<Member[]>(myTeam);
  const [status, setStatus] = useState('Listed');
  const [currentRate, setCurrentRate] = useState(65.3212345);
  const [myContribution, setMyContribution] = useState(0.0);
  const [totalContribution, setTotalContribution] = useState(65);
  const [audit, setAudit] = useState('No');
  const [KYC, setKYC] = useState('No');
  const [supply, setSupply] = useState(12);
  const [lockDuration, setLockDuration] = useState(32542);
  const [lockPercent, setLockPercent] = useState(25);

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
    console.log('mint');
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
              <div className={styles.title}>Arkstart</div>
              {/* <div className={styles.avatar}>
                <Image src={avatar} alt="avatar" width={35} height={35} />
                <div className={styles.name}>Cloris Chen</div>
              </div> */}
              <p className={styles.intro}>
                Arkstart is pioneering the new era of BRC-20 token staking with
                our innovative blockchain project. We aim to build a sustainable
                staking ecosystem using unique staking mechanisms and economic
                models.
                <br />
                We&apos;ve introduced &apos;arks&apos;, our native token, into
                an advanced staking feature that brings value to BRC-20 tokens.
                By staking &apos;arks&apos;, users can earn &apos;Aras&apos;
                tokens as rewards. This model incentivizes continuous
                participation aligning the long-term interests of users with our
                protocol&apos;s objectives.
                <br />
                Our mission is to develop a robust and consistent staking
                ecosystem, changing the staking paradigm for BRC-20 tokens. With
                our dedicated efforts, we aim to offer greater value and
                long-term returns to our participants.
              </p>
              <div className={styles.contact}>
                <Link href="https://arkstart.org" passHref>
                  <a className={styles.item}>
                    <Image
                      src={address}
                      alt="address"
                      width={20}
                      height={20}
                    ></Image>
                  </a>
                </Link>
                <Link href="https://twitter.com/arkscoin" passHref>
                  <a className={styles.item}>
                    <Image
                      src={twitter}
                      alt="twitter"
                      width={20}
                      height={20}
                    ></Image>
                  </a>
                </Link>
                {/* <Link href="https://www.baidu.com/" passHref>
                  <a className={styles.item}>
                    <Image
                      src={discord}
                      alt="discord"
                      width={24.24}
                      height={20}
                    ></Image>
                  </a>
                </Link> */}
                <Link href="https://medium.com/@arkstart" passHref>
                  <a className={styles.item}>
                    <Image
                      src={telegram}
                      alt="telegram"
                      width={23.53}
                      height={20}
                    ></Image>
                  </a>
                </Link>
                {/* <Link href="https://www.baidu.com/" passHref>
                  <a className={styles.item}>
                    <Image
                      src={github}
                      alt="github"
                      width={23.53}
                      height={20}
                    ></Image>
                  </a>
                </Link> */}
                <Link href="https://medium.com/@arkstart" passHref>
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
                  <div className={styles.ori}>ArkStart</div>
                  <div>Private Sale</div>
                </div>
                <div className={styles.deadline}>
                  <Timer
                    formatValue={(value) =>
                      `${value < 10 ? `0${value}` : value} `
                    }
                    initialTime={
                      new Date(1685624400000).getTime() - new Date().getTime()
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
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.label}>Token Price</div>
                <div className={styles.val + " " + styles.ori}>
                  {tokenPrice} BTC
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.label}>Fundraising percentage</div>
                <div className={styles.val + " " + styles.ori}>
                  {percentage} %
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
                    {fundraisers}
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.label}>Number of tokens obtained</div>
                  <div className={styles.val + " " + styles.ori}>
                    {obtained} $ARKS
                  </div>
                </div>
              </div>
              <Input handleClick={setMax} btnText="MAX"></Input>
              <div className={styles.list + " " + styles.small}>
                <div className={styles.label}>Balance</div>
                <div className={styles.val + " " + styles.ori}>
                  {balance} $BTC
                </div>
              </div>
              <Button
                backgroundColor="#383838"
                handleClick={mint}
                renderContent={() => (
                  <>
                    <span className={styles.btnText + " " + styles.ori}>
                      Buy
                    </span>
                    <Image
                      src={yellowArrow}
                      alt="mint"
                      width={12}
                      height={12}
                    />
                  </>
                )}
              ></Button>
            </div>
            <div className={styles.card + " " + styles.item}>
              <div className={styles.title}>
                <div>
                  <div className={styles.ori}>ArkStart</div>
                  <div>Public Sale</div>
                </div>
                <div className={styles.deadline}>
                  <Timer
                    formatValue={(value) =>
                      `${value < 10 ? `0${value}` : value} `
                    }
                    initialTime={
                      new Date(1685678400000).getTime() - new Date().getTime()
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
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.label}>Token Price</div>
                <div className={styles.val + " " + styles.ori}>
                  {tokenPrice} BTC
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.label}>Fundraising percentage</div>
                <div className={styles.val + " " + styles.ori}>
                  {percentage} %
                </div>
              </div>
              <div className={styles.amount}>
                <div className={styles.list}>
                  <div className={styles.label}>Total fundraising amount</div>
                  <div className={styles.val + " " + styles.ori}>12.6 BTC</div>
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
                    {fundraisers}
                  </div>
                </div>
                <div className={styles.list}>
                  <div className={styles.label}>Number of tokens obtained</div>
                  <div className={styles.val + " " + styles.ori}>
                    {obtained} $ARKS
                  </div>
                </div>
              </div>
              <Input handleClick={setMax} btnText="MAX"></Input>
              <div className={styles.list + " " + styles.small}>
                <div className={styles.label}>Balance</div>
                <div className={styles.val + " " + styles.ori}>
                  {balance} $BTC
                </div>
              </div>
              <Button
                backgroundColor="rgba(56,56,56,0.25)"
                handleClick={mint}
                renderContent={() => (
                  <>
                    <span className={styles.btnText}>Buy</span>
                    <Image src={whiteArrow} alt="buy" width={12} height={12} />
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
                <div className={styles.title}>80% IDO Allocation</div>
                <p>
                  Increased to 80% to provide additional liquidity for initial
                  exchange offerings. This expanded allocation ensures
                  sufficient token availability for IDO/IEO participants,
                  fostering wider participation and enhancing market liquidity.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>4% Market Allocation</div>
                <p>
                  Unlocked 20% at Token Generation Event (TGE), primarily used
                  for initial user airdrops, incentives, and ecosystem
                  development. This allocation is adjusted to allocate 7% of the
                  total supply to the market. It enables Arkstart to allocate
                  resources for market development, user acquisition, and
                  ecosystem growth, fostering adoption and establishing a strong
                  presence in the market.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>
                  3% Ecosystem and Partnerships
                </div>
                <p>
                  Allocated for ecosystem development, strategic partnerships,
                  and collaborative initiatives. This allocation ensures 7% of
                  the total supply is dedicated to fostering collaborations with
                  other projects, platforms, and communities. It supports the
                  growth and expansion of the Arkstart ecosystem by integrating
                  complementary services, expanding use cases, and strengthening
                  the overall ecosystem.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>10% Staking</div>
                <p>
                  Users can stake the platform token and earn staking rewards.
                  The staking mechanism incentivizes long-term commitment,
                  active participation, and alignment of interests among
                  participants. This allocation ensures 3% of the total supply
                  is dedicated to staking rewards, promoting network security
                  and token holder engagement.
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.title}>3% DAO Allocation</div>
                <p>
                  Reserved for internal and external incentives within the DAO
                  organization. This allocation ensures active governance
                  participation and supports collaborative partnerships,
                  promoting community involvement and decision-making.
                </p>
              </div>
            </div>
            <div className={styles.other}>
              {/* <div className={styles.card + " " + styles.status}>
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
              </div> */}
              <div className={styles.card + " " + styles.metric}>
                <div className={styles.title}>Tokenomics</div>
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
// @ts-ignore
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});

export default withRouter(LaunchpadDetails);
