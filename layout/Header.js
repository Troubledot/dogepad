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

// const cx = classNames.bind(styles)

const Header = (props) => {
    const { activeIndex, scrolling } = props
    const [openState, setopenState] = useState(false)

    const router = useRouter()
    const {
        t
    } = useTranslation('common')
    useEffect(async () => {
        // initNetWork()
    }, [])

    const initNetWork = async () => {
        let ethereum = window.ethereum
        // const data = [{
        //     // chainId: "0x61",
        //     chainId: "0x38",
        //     chainName: "Binance Smart Chain Mainnet",
        //     nativeCurrency: {
        //         name: "BNB",
        //         symbol: "BNB",
        //         decimals: 18,
        //     },
        //     rpcUrls: ["https://bsc-dataseed.binance.org"],
        //     blockExplorerUrls: ["https://bscscan.com/"],
        // },]
         const data = [{
             chainId: "0x61",
             // chainId: "0x38",
             chainName: "Binance Smart Chain Mainnet",
             nativeCurrency: {
                 name: "tBNB",
                 symbol: "tBNB",
                 decimals: 18,
             },
             // rpcUrls: ["https://bsc-dataseed.binance.org"],
             rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
             blockExplorerUrls: ["https://bscscan.com/"],
         }, ]


        /* eslint-disable */
        const tx = await ethereum.request({
            method: "wallet_addEthereumChain",
            params: data
        }).catch()
        if (tx) {
            console.log(tx)
        }
    }
    return (
        <header>
            {/* <Wallet /> */}
        </header>
    )
}

export default Header
