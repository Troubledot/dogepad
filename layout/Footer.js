
import Link from 'next/link'
import styles from '../styles/layout.module.scss'

const Footer = ({ t }) => {
    return (
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <ul>
            <a href="https://t.me/BisoSwap" target="_blank"><li className={styles.tg}></li></a>
            <a href="https://twitter.com/bisoswap" target="_blank"><li className={styles.tw}></li></a>
            <a href='https://medium.com/@BisoSwap' target="_blank"><li className={styles.logo}></li></a>
            <li className={styles.dc}></li>
            <li className={styles.gb}></li>
          </ul>
        </div>
      </footer>
    )
}

export default Footer
