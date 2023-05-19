import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { withRouter, useRouter } from "next/router";
import LeftNav from "../../layout/LeftNav";
import styles from "../../styles/launchpad-create.module.scss";
const LauchpadCreate = () => {
  const router = useRouter();
  console.log(router);
  const [step, setStep] = useState(1);
  const [checkFair, setCheckFair] = useState(false); //选择Fair Launch
  const [checkPresale, setCheckPresale] = useState(false); //选择Presale

  useEffect(() => {}, []);

  const handleChange = (type) => {
    switch (type) {
      case 1:
        setCheckFair((prev) => !prev);
        break;
      case 2:
        setCheckPresale((prev) => !prev);
        break;

      default:
        break;
    }
  };

  const leftSteps = [
    { title: "Verify Token", content: "Enter the token address and verify" },
    { title: "DeFi launchpad", content: "Enter the launchpad information" },
    {
      title: "Add Additional Info",
      content: "Short description about your project and project links",
    },
    {
      title: "Finish",
      content: "Review your information and submit your presale",
    },
  ];

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <LeftNav />
      <div className={styles.launchpadCreateWarp}>
        <div className={styles.leftWrapBox}>
          <div className={styles.leftBox}>
            {leftSteps.map((item, index) => (
              <div className={styles.stepItem} key={item.title}>
                <div
                  className={
                    step === index + 1 ? styles.actIndexCss : styles.indexCss
                  }
                >
                  {index + 1}
                </div>
                <div className={styles.rightCss}>
                  <div className={styles.titleCss}>{item.title}</div>
                  <div className={styles.contentCss}>{item.content}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.leftBottomBox}>
            <div className={styles.flexBox}>
              <div
                className={checkFair ? styles.actFlex1 : styles.flex1}
                onClick={() => handleChange(1)}
              >
                <div
                  className={checkFair ? styles.checkedBox : styles.checkBox}
                />
                Fair Launch
              </div>
              <div
                className={checkPresale ? styles.actFlex1 : styles.flex1}
                onClick={() => handleChange(2)}
              >
                <div
                  className={checkPresale ? styles.checkedBox : styles.checkBox}
                />
                Presale
              </div>
            </div>
            <div className={styles.wordBox}>Free 0.01 XXXX</div>
          </div>
        </div>
        {/* 右侧表单 */}
        <div className={styles.formBox}>
          <div className={styles.infoWord}>(*) is required field.</div>
          <div className={styles.formItem}>
            <div className={styles.labelCss}>Token Address</div>
            <input className={styles.input} />
          </div>
          <div className={styles.infoWord}>Create pool fee: 10 ETHW</div>
          <div className={styles.formItem}>
            <div className={styles.labelCss}>Currency</div>
            <select className={styles.input}>
              <option>这里是选项</option>
            </select>
          </div>
          <div className={styles.infoWord}>
            Users will pay with XXXXX for your token
          </div>
          <div className={styles.formItem}>
            <div className={styles.labelCss}>Free Option</div>
            <div className={styles.flexBox}>
              <div className={styles.checkedBox} />
              <div className={styles.wordCss}>2.5% XXXX raised only</div>
            </div>
            <div className={styles.flexBox}>
              <div className={styles.checkBox} />
              <div className={styles.wordCss}>
                1.5% XXXX raised+ 1.5% token raised
              </div>
            </div>
          </div>
          <div className={styles.yellowCss}>
            Make sure the token has Exclude transfer fee function if it has
            transfer fees.
          </div>
          <button className={styles.btnCss}>Approve spend</button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {},
});

export default withRouter(LauchpadCreate);
