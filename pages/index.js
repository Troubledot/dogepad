import React from "react";
import { getInvite, getInviteRank, createInvite } from "../api/api";
import HeaderFooter from "../layout/HeaderFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Button from "../components/Button";
import styles from "../styles/home.module.scss";
import twitter from "../public/home/twitter.png";
import md from "../public/home/md.png";
import discord from "../public/home/discord.png";
import tel from "../public/home/tel.png";
import Link from "next/link";
import Image from "next/image";
import "animate.css";

const Home = () => {
  return (
    <HeaderFooter activeIndex={1}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.text}>The DRC-20’s New-Gen LaunchPad</div>
            <div className={styles.tips}>
              Decentralization, stability, deep cultivation of memes, and
              long-term prospects are the main drivers for the development of
              DogePad.
            </div>
            <div className={styles.buttons}>
              <Button
                renderContent={() => (
                  <>
                    <span>Open launchpad</span>
                  </>
                )}
              ></Button>
              <Button
                type="normal"
                renderContent={() => (
                  <>
                    <span>Subscribe</span>
                  </>
                )}
              ></Button>
            </div>
            <p>For All Meme Investors</p>
          </div>
          <div className={styles.contacts}>
            <div className={styles.title}>FIND US ON SOCIAL MEDIA</div>
            <div className={styles.contact}>
              <div className={styles.item}>
                <Image src={md} alt="discord" width="48" height="38" />
                <Link href="https://medium.com/@dogepad.drc">Medium</Link>
              </div>
              <div className={styles.item}>
                <Image src={tel} alt="tel" width="42" height="38" />
                <Link href="https://t.me/DogePad_CN">Telegram</Link>
              </div>
              <div className={styles.item}>
                <Image src={twitter} alt="twitter" width="38" height="38" />
                <Link href="https://twitter.com/DogePad_drc?s=20">Twitter</Link>
              </div>
            </div>
          </div>
          <div className={styles.progress}>
            <div className={styles.item}>
              <div className={styles.icon}></div>
              <div className={styles.amount}>$100M+</div>
              <div className={styles.label}>Total Liquidity Raised</div>
              <div className={styles.time}>in the last 30 days</div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}></div>
              <div className={styles.amount}>1000+</div>
              <div className={styles.label}>Total Users in here</div>
              <div className={styles.time}>in the last 30 days</div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}></div>
              <div className={styles.amount}>3+</div>
              <div className={styles.label}>Projects listing</div>
              <div className={styles.time}>in the last 30 days</div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}></div>
              <div className={styles.amount}>$0</div>
              <div className={styles.label}>Total Values Locked</div>
              <div className={styles.time}>in the last 30 days</div>
            </div>
          </div>
        </div>
        <div className={styles.help}>
          <div className={styles.content}>
            <div className={styles.text}>
              HELP RAISE FUNDS FOR THE MOST SUCCESSFUL PROJECT ON THE
              <br />
              DRC-20 PROTOCOL
            </div>
            <div className={styles.buttons}>
              <Button
                renderContent={() => (
                  <>
                    <span>Open launchpad</span>
                  </>
                )}
              ></Button>
              <Button
                type="normal"
                renderContent={() => (
                  <>
                    <span>Subscribe</span>
                  </>
                )}
              ></Button>
            </div>
          </div>
        </div>
        <div className={styles.nft}>
          <div className={styles.content}>
            <div className={styles.main}>
              <div className={styles.title}>DOGEPAD NFT COMING SOON</div>
              <div className={styles.subtitle}>
                RAISE CAPITAL ACROSS ALL MAIN BLOCKCHAIN NETWORKS
              </div>
              <div className={styles.btn}>
                <Button
                  type="normal"
                  renderContent={() => (
                    <>
                      <span>Learn More &gt;&gt;</span>
                    </>
                  )}
                ></Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.questions}>
          <div className={styles.content}>
            <div className={styles.title}>
              <span>Have questions?</span>
            </div>
            <p>
              Here are some answers to commonly asked questions. Did we miss
              something?{" "}
              <Link href="https://twitter.com/DogePad_drc">
                DM us on Twitter
              </Link>
              to ask anything else.
            </p>
            <div className={styles.q}>1.What is DogePad?</div>
            <div className={styles.a}>
              DogePad is the first fully decentralized token distribution
              platform based on DRC20 that is active in the meme community,
              enabling you to obtain capital gains while ensuring your
              investment security.
            </div>
            <div className={styles.q}>2.What is a DRC-20 token?</div>
            <div className={styles.a}>
              A DRC-20 token is a digital asset built on the Cardinals protocol,
              which provides a standardized framework for creating and managing
              tokens on the DOGE network. These tokens are characterized by
              their unique features, such as customizable parameters and
              functionalities, allowing for a wide range of applications ranging
              from utility tokens to meme-inspired concepts.
            </div>
            <div className={styles.q}>
              3.What is the relationship between DogePad and DRC-20?
            </div>
            <div className={styles.a}>
              DogePad utilizes the DRC-20 standard and Cardinals protocol to
              provide enhanced trading experience and functionalities for users
              within the DRC-20 ecosystem. By focusing on the unique
              characteristics and functionalities of DRC-20 tokens, DogePad aims
              to cater to the specific needs of this rapidly growing market.
            </div>
            <div className={styles.q}>4.What is the goal of DogePad?</div>
            <div className={styles.a}>
              The goal of DogePad is to provide a secure and reliable platform
              within the DRC-20 ecosystem, reducing investment risks, curating
              high-quality projects for users, establishing strong connections
              between projects and the platform, and assisting in the healthy
              and orderly growth of projects.
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.sign}>
            <div className={styles.subtitle}>NEVER WANT TO MISS A SALE?</div>
            <div className={styles.title}>
              Sign up for our newsletter and get the latest news and updates.
            </div>
            <div className={styles.inputs}>
              <input type="text" />
              <Button
                type="normal"
                size="small"
                renderContent={() => (
                  <>
                    <span>Subscribe</span>
                  </>
                )}
              ></Button>
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

export default withRouter(Home);
