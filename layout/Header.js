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
import { concat } from "ethers/lib/utils"

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";


// const okxWeb3 = require('@okwallet/extension')
// const cx = classNames.bind(styles)


const Header = (props) => {
    const { activeIndex, scrolling } = props
    const [openState, setopenState] = useState(false)

        const router = useRouter()
        const { t } = useTranslation('common')
        const [account,setAccount] = useState("")

        useEffect(async () => {
            // const timer = setInterval(async () => {
            //     if (typeof window.unisat !== 'undefined' && window.account) {
            //         setAccount(window.account)
            //     }
            // }, 1000)
            // return () => {
            //     clearInterval(timer)
            // }
        }, [])

        const connectWallet = async () => {
            
        // Create a connector
        const connector = new WalletConnect({
            bridge: "https://bridge.walletconnect.org", // Required
            qrcodeModal: QRCodeModal,
        });
        
        // Check if connection is already established
        if (!connector.connected) {
            // create new session
            connector.createSession();
        }
        
        // Subscribe to connection events
        connector.on("connect", (error, payload) => {
            if (error) {
            throw error;
            }
        
            // Get provided accounts and chainId
            const { accounts, chainId } = payload.params[0];
            setAccount(accounts[0])
        });
        
        connector.on("session_update", (error, payload) => {
            if (error) {
            throw error;
            }
        
            // Get updated accounts and chainId
            const { accounts, chainId } = payload.params[0];
            setAccount(accounts[0])
        });
        
        connector.on("disconnect", (error, payload) => {
            if (error) {
            throw error;
            }
        
            // Delete connector
        });}

    return (
        <header className={styles.header}>
            {/* <Wallet /> */}
            <div className={styles.inner}>
                <Link href="/"><i className={styles.logo}></i></Link>
                <div className={styles.settings}>
                    <ul className={styles.link}>
                        <a href="https://t.me/BisoSwap" target="_blank"><li className={styles.tg}></li></a>
                        <a href="https://twitter.com/bisoswap" target="_blank"><li className={styles.tw}></li></a>
                        <a href='https://medium.com/@BisoSwap' target="_blank"><li className={styles.md}></li></a>
                        <a href='https://bisoswap.gitbook.io/bisoswap/' target="_blank"><li className={styles.gitbook}></li></a>
                    </ul>
                    <div className={styles.wallet}>
                        {!account ? 
                            <button className={styles.wallet_btn} onClick={()=>connectWallet()}>Connect Wallet</button>
                            :
                            <button className={styles.wallet_btn}>{account}</button>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
