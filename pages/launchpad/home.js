import React, { useState, useEffect, Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import { withRouter, useRouter } from "next/router";
import styles from "../../styles/launchpad-home.module.scss";

const LauchpadHome = () => {
  const router = useRouter();
  console.log(router);

  useEffect(() => {}, []);

  return (
    
      <div className={styles.launchpadHomeWarp}>
        <div className={styles.titleCss}>
          The Launchpad Protocol for Everyone!
        </div>
        <div className={styles.contentCss}>
          <div>
            PinkSale helps everyone to create their own tokens and token sales
            in few seconds.
          </div>
          <div>
            Tokens created on PinkSale will be verified and published on
            explorer websites.
          </div>
        </div>
        <div className={styles.linkBox}>
          <div className={styles.linkItem}>
            <div className={styles.greenBar} />
            Create Now
            <div className={styles.greenBar} />
          </div>
          <div className={styles.linkItem}>
            <div className={styles.greenBar} />
            Learn More
            <div className={styles.greenBar} />
          </div>
        </div>
        <div className={styles.flexBox}>
            <div className={styles.flex1}>
                <div className={styles.numCss}>$495.4M</div>
                <div className={styles.wordCss}>Total Liquidity Raised</div>
            </div>
            <div className={styles.flex1}>
                <div className={styles.numCss}>16918</div>
                <div className={styles.wordCss}>Total Projects</div>
            </div>
            <div className={styles.flex1}>
                <div className={styles.numCss}>1.8M</div>
                <div className={styles.wordCss}>Total Participants</div>
            </div>
            <div className={styles.flex1}>
                <div className={styles.numCss}>$281.9M</div>
                <div className={styles.wordCss}>Total Values Locked</div>
            </div>
        </div>
      </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {},
});

export default withRouter(LauchpadHome);
