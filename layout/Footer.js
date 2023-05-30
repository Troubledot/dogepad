import Link from 'next/link';
import styles from '../styles/layout.module.scss';

const Footer = ({ t }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.logo}></div>
          <p>2022 BISOSWAP.All Rights Reserved</p>
          <p>Picacy Poilcy · Terms&Conditons</p>
        </div>
        <div className={styles.right}>
          <div className={styles.social}>
            <div className={styles.title}>Social</div>
            <ul>
              <a href="https://t.me/BisoSwap" target="_blank" rel="noreferrer">
                <li className={styles.tg}></li>
              </a>
              <a href="https://twitter.com/bisoswap" target="_blank" rel="noreferrer">
                <li className={styles.tw}></li>
              </a>
              <a href="https://medium.com/@BisoSwap" target="_blank" rel="noreferrer">
                <li className={styles.md}></li>
              </a>
              <a href="https://bisoswap.gitbook.io/bisoswap/" target="_blank" rel="noreferrer">
                <li className={styles.gb}></li>
              </a>
            </ul>
          </div>
          <div className={styles.navigate}>
            <div className={styles.title}>Navigate</div>
            <div className={styles.navs}>
              <div className={styles.leftnav}>
                <a href="#">Home</a>
                <a href="#">Launchpad</a>
                <a href="#">Swap</a>
                <a href="#">Stake</a>
              </div>
              <div className={styles.rightnav}>
                <a href="#">Docs</a>
                <a href="#">About</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
