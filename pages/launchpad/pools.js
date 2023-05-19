import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { withRouter, useRouter } from "next/router";
import LeftNav from "../../layout/LeftNav";
import styles from "../../styles/launchpad-pools.module.scss";
const LauchpadPools = () => {
  const router = useRouter();
  console.log(router);
  const [tab, setTab] = useState(1);

  const changeTab = (type) => {
    setTab(type);
  };

  useEffect(() => {}, []);
  const list = [1, 2, 3, 4, 5, 6];
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <LeftNav />
      <div className={styles.launchpadPoolsWarp}>
        <div className={styles.topBox}>
          <div className={styles.inputBox}>
            <input className={styles.input} placeholder="Search" />
            <select className={styles.select}>
              <option>All status</option>
            </select>
          </div>
          <div className={styles.tabBox}>
            <div
              className={tab === 1 ? styles.actItem : styles.tabItem}
              onClick={() => changeTab(1)}
            >
              All Presales
            </div>
            <div
              className={tab === 2 ? styles.actItem : styles.tabItem}
              onClick={() => changeTab(2)}
            >
              My Contribution
            </div>
          </div>
        </div>
        <div className={styles.flexBox}>
          {list.map((item) => (
            <div className={styles.flexItem} key={item}>
              <div className={styles.topItem}>
                <div className={styles.tagBox}>
                  <div className={styles.leftBox}>
                    <div className={styles.tagItemBlue}>Listed</div>
                  </div>
                  <div className={styles.rightBox}>
                    <div className={styles.tagGreen}>KYC</div>
                    <div className={styles.tagBlue}>AUDIT</div>
                  </div>
                </div>
                <div className={styles.imgBox}>
                  <div className={styles.imgCss}>
                    <img src="" alt="img" />
                  </div>
                  <div className={styles.rightTitle}>
                    <div className={styles.nameCss}>NAME</div>
                    <div className={styles.descCss}>1BTC = 40000000 xxxx</div>
                  </div>
                </div>
              </div>
              <div className={styles.softBox}>
                <div className={styles.wordCss}>Soft/Hard Cap</div>
                <div className={styles.yellowWord}>0.1 BTC</div>
              </div>
              {/* 进度条部分 */}
              <div className={styles.progressBox}>
                <div className={styles.topCss}>
                  <div className={styles.titleCss}>Progress:</div>
                  <div className={styles.numCss}>925.00%</div>
                </div>
                <div className={styles.pregressBar} />
                <div className={styles.progressBottom}>
                  <div className={styles.titleCss}>0.93 BTC</div>
                  <div className={styles.titleCss}>0.1 BTC</div>
                </div>
              </div>
              <div className={styles.flexBox1}>
                <div className={styles.flex1}>
                  <div className={styles.wordCss}>Liquidity</div>
                  <div className={styles.numCss}>55%</div>
                </div>
                <div className={styles.flex1}>
                  <div className={styles.wordCss}>Lock Time</div>
                  <div className={styles.numCss}>1 minutes</div>
                </div>
              </div>
              <div className={styles.opBox}>
              Sale Listed
              </div>
              <div className={styles.opBox1}>
              View Pool
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {},
});

export default withRouter(LauchpadPools);
