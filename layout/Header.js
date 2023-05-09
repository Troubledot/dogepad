import React, { useState, useEffect } from "react"
import Wallet from '../components/wallet'
import Link from 'next/link'
import classNames from "classnames/bind"
import Router, {
    useRouter
} from 'next/router'
import {
    useTranslation,
    Trans
} from 'next-i18next'
import { route } from "next/dist/server/router"
import styles from "../styles/layout.module.scss"
// const cx = classNames.bind(styles)

const Header = (props) => {
    const { activeIndex, scrolling } = props
    const [openState, setopenState] = useState(false)

        const router = useRouter()
        const { t } = useTranslation('common')

        useEffect(async () => {
            // initNetWork()
        }, [])

    return (
        <header className={styles.header}>
            {/* <Wallet /> */}
            <div className={styles.inner}>
                <i className={styles.logo}></i>
                <div className={styles.settings}>
                    <ul className={styles.link}>
                        <a href="https://t.me/BisoSwap" target="_blank"><li className={styles.tg}></li></a>
                        <a href="https://twitter.com/bisoswap" target="_blank"><li className={styles.tw}></li></a>
                        <li className={styles.dc}></li>
                        <li className={styles.gb}></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
