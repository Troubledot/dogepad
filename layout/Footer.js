import Link from "next/link";
import styles from "../styles/layout.module.scss";
import Image from "next/image";
const Footer = ({ t }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.logo}></div>
          <div className={styles.navigate}>
            <div className={styles.title}>Navigate</div>
            <div className={styles.navs}>
              <Link href="#">Home</Link>
              <Link href="#">Launchpad</Link>
              <Link href="#">Swap</Link>
              <Link href="#">Stake</Link>
            </div>
          </div>
          <div className={styles.social}>
            <div className={styles.title}>Social</div>
            <div className={styles.contact}>
              <Link
                href="https://bisoswap.gitbook.io/bisoswap/"
                target="_blank"
                rel="noreferrer"
                passHref
                passHref
              >
                <div className={styles.dc}></div>
              </Link>
              <Link
                href="https://t.me/BisoSwap"
                target="_blank"
                rel="noreferrer"
                passHref
              >
                <div className={styles.tg}></div>
              </Link>
              <Link
                href="https://twitter.com/bisoswap"
                target="_blank"
                rel="noreferrer"
                passHref
              >
                <div className={styles.tw}></div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>2022 BISOSWAP.All Rights Reserved</p>
          <p>Picacy Poilcy · Terms&Conditons</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
