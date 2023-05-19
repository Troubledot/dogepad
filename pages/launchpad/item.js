import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { withRouter, useRouter } from "next/router";
import LeftNav from "../../layout/LeftNav";
import styles from "../../styles/launchpad-item.module.scss";
const LauchpadItem = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <LeftNav />
      <div className={styles.launchpadItemsWarp}>
        <div className={styles.leftBox}>
          <div className={styles.cardTop}>
            <div className={styles.topBox}>
              <div className={styles.imgBox}>
                <img src="" />
              </div>
              <div className={styles.infoBox}>
                <div className={styles.tagItemBlue}>Listed</div>
                <div className={styles.nameCss}>Name Fair Launch</div>
                <img src='/images/link.png'/>
              </div>
            </div>
            <div className={styles.descCss}>
              Introduction:XXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </div>
          </div>
          <div className={styles.scrollCard}>
            <div className={styles.itemWrapBox}>
              <div className={styles.itemBox}>
                <div className={styles.labelCss}>Fairlaunch address</div>
                <div className={styles.valueCss}>
                  <div className={styles.yellowCss}>
                    0xff814375ef83706c25b363eba309782538209ca4
                  </div>
                  <div className={styles.bottomWord}>
                    Do not send ETH to this address
                  </div>
                </div>
              </div>
              <div className={styles.gapCss} />
            </div>
            <div className={styles.itemWrapBox}>
              <div className={styles.itemBox}>
                <div className={styles.labelCss}>Token address</div>
                <div className={styles.valueCss}>
                  <div className={styles.yellowCss}>
                    <img src='/images/icon.png' style={{width:20}}/>
                    0x27893315F7d3Fb62196826153505430B6C48bfC5
                  </div>
                  <div className={styles.bottomWord}>
                    Do not send ETH to this address
                  </div>
                </div>
              </div>
              <div className={styles.gapCss} />
            </div>
            <div className={styles.itemWrapBox}>
              <div className={styles.itemBox}>
                <div className={styles.labelCss}>Category</div>
                <div className={styles.valueCss}>
                  <div className={styles.purpleTag}>DeFi</div>
                </div>
              </div>
              <div className={styles.gapCss} />
            </div>
            <div className={styles.itemWrapBox}>
              <div className={styles.itemBox}>
                <div className={styles.labelCss}>Token name</div>
                <div className={styles.valueCss}>XMM</div>
              </div>
              <div className={styles.gapCss} />
            </div>
            <div className={styles.itemWrapBox}>
              <div className={styles.itemBox}>
                <div className={styles.labelCss}>Token Symbol</div>
                <div className={styles.valueCss}>Xmm</div>
              </div>
              <div className={styles.gapCss} />
            </div>
            <div className={styles.itemWrapBox}>
              <div className={styles.itemBox}>
                <div className={styles.labelCss}>Token Decimals</div>
                <div className={styles.valueCss}>18</div>
              </div>
              <div className={styles.gapCss} />
            </div>
            <div className={styles.itemWrapBox}>
              <div className={styles.itemBox}>
                <div className={styles.labelCss}>Total Supply</div>
                <div className={styles.valueCss}>100,000,000,000 Xmm</div>
              </div>
              <div className={styles.gapCss} />
            </div>
            <div className={styles.itemWrapBox}>
              <div className={styles.itemBox}>
                <div className={styles.labelCss}>Tokens for Presale</div>
                <div className={styles.valueCss}>100,000,000,000 Xmm</div>
              </div>
              <div className={styles.gapCss} />
            </div>
            <div className={styles.itemWrapBox}>
              <div className={styles.itemBox}>
                <div className={styles.labelCss}>Soft Cap</div>
                <div className={styles.valueCss}>0.1 ETH</div>
              </div>
              <div className={styles.gapCss} />
            </div>
            <div className={styles.itemWrapBox}>
              <div className={styles.itemBox}>
                <div className={styles.labelCss}>Listing On</div>
                <div className={styles.valueCss} style={{ marginBottom: 0 }}>
                  <div className={styles.yellowCss}>OreoSwap</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightBox}>
          <div className={styles.cardTop}>
            <div className={styles.titleCss}>The pool has been finalized</div>
            <div className={styles.progressBox}>
              <div className={styles.topCss}>
                <div className={styles.titleCss1}>Progress:</div>
                <div className={styles.numCss}>925.00%</div>
              </div>
              <div className={styles.pregressBar} />
              <div className={styles.progressBottom}>
                <div className={styles.titleCss2}>0.93 BTC</div>
                <div className={styles.titleCss2}>0.1 BTC</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "16px" }}>
            <div className={`${styles.itemBox} ${styles.itemBox1}`}>
              <div className={styles.labelCss}>Status</div>
              <div className={styles.valueCss}>
                <div className={styles.tagItemBlue}>Listed</div>
              </div>
            </div>
            <div className={styles.gapCss} />
            <div className={`${styles.itemBox} ${styles.itemBox1}`}>
              <div className={styles.labelCss}>Current Rate</div>
              <div className={styles.valueCss}>
                <div>1 ETH=59,395,012,339.48</div>
                <div>Xmm</div>
              </div>
            </div>
            <div className={styles.gapCss} />
            <div className={`${styles.itemBox} ${styles.itemBox1}`}>
              <div className={styles.labelCss}>My Contribution</div>
              <div className={styles.valueCss}>0.0 ETH</div>
            </div>
            <div className={styles.gapCss} />
            <div className={`${styles.itemBox} ${styles.itemBox1}`}>
              <div className={styles.labelCss}>
                Total
                <br />
                Contributors
              </div>
              <div className={styles.valueCss}>74</div>
            </div>
          </div>

          <div style={{ marginTop: "16px" }}>
            <div className={`${styles.itemBox} ${styles.itemBox1}`}>
              <div className={styles.labelCss}>Audit</div>
              <div className={styles.valueCss}>
                <div className={styles.tagItemYellow}>No</div>
              </div>
            </div>
            <div className={styles.gapCss} />
            <div className={`${styles.itemBox} ${styles.itemBox1}`}>
              <div className={styles.labelCss}>KYC</div>
              <div className={styles.valueCss}>
                <div className={styles.tagItemYellow}>No</div>
              </div>
            </div>
            <div className={styles.gapCss} />
            <div className={`${styles.itemBox} ${styles.itemBox1}`}>
              <div className={styles.labelCss}>
                Tokens
                <br />
                supply owned
                <br />
                by team
              </div>
              <div className={styles.valueCss}>
                <div className={styles.tagItemYellow}>13%</div>
              </div>
            </div>
            <div className={styles.gapCss} />
            <div className={`${styles.itemBox} ${styles.itemBox1}`}>
              <div className={styles.labelCss}>Lock duration</div>
              <div className={styles.valueCss}>
                <div className={styles.tagItemGreen}>
                  694444444444444416 Days
                </div>
              </div>
            </div>
            <div className={styles.gapCss} />
            <div className={`${styles.itemBox} ${styles.itemBox1}`}>
              <div className={styles.labelCss}>Lock percentage</div>
              <div className={styles.valueCss}>
                <div className={styles.tagItemYellow}>55%</div>
              </div>
            </div>
            <div className={styles.gapCss} />
            <div className={`${styles.itemBox} ${styles.itemBox1}`}>
              <div className={styles.labelCss}>
                Unsafe
                <br />
                functions
                <br />
                <span>Powered by</span>
                <br />
                <span>OKCA</span>
              </div>
              <div className={styles.valueCss}>
                <div className={styles.tagItemGray}>Loading</div>
              </div>
            </div>
          </div>
          <div className={styles.cardBottom}>
            <div className={styles.titleCss3}>Token Metric</div>
            <img src="/images/token.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {},
});

export default withRouter(LauchpadItem);
