import React, { Component, useEffect, useState } from 'react';
import { ethers,utils as ethersUtils } from 'ethers'
import { ConnectionRejectedError, UseWalletProvider, useWallet } from 'use-wallet'
import classNames from 'classnames/bind';
import { confirmAlert } from 'react-confirm-alert'
import Image from 'next/image'
import styles from '../styles/wallet.module.scss'
const cx = classNames.bind(styles)

const WalletMask = (props) => {
    const [isHideWallet, setIsHideWallet] = useState(true)
    const showWallet = (show) => setIsHideWallet(show)
    const { connectWallet } = props
    const { t } = props

    return (
      <>
        <div className={styles.padding} >
        <button className={styles.button} onClick={() => showWallet(false)}>
          Connect Wallet
          </button>
          </div>
        <div
          onClick={() => showWallet(true)}
          className={cx(styles.walletMask, { hide: isHideWallet })}
        >
          <div className={styles.walletWrapper} onClick={() => connectWallet()}>
            <Image
              src="/wallet/metamask.svg"
              width={336}
              height={86.8}
              alt="metamask"
            />
            <div className={styles.walletTitle}>MetaMask</div>
            <div className={styles.walletTips}>Connect Metamask</div>
          </div>
        </div>
      </>
    )
}

const Wallet = ({t}) => {
    const wallet = useWallet()
    const { account, ethereum } = wallet
    const blockNumber = wallet.getBlockNumber()
    const [ontoIcon, setOntoIcon] = useState(false)
    const [tpIcon, setTpIcon] = useState(false)
    const activate = async connector => {
        setOntoIcon(false)
        if( connector == "onto"){
            confirmAlert({
                    closeOnClickOutside: false,
                    customUI: ({ onClose }) => {
                        return (
                            <div className={styles.confirmAlert}>
                                <img width="400" src={ontoBG} />
                                <p className={styles.center}>
                                    <button onClick={onClose}> OK </button>
                                </p>
                            </div>
                        )
                    }
            })
            setOntoIcon(true)
            wallet.connect()
        }
        else if(connector == "tp"){
            setTpIcon(true)
            wallet.connect()
        }
        else{
            wallet.connect(connector)
        }
    }

    const formatAddress = (address) => {
        return address.substr(0, 4) + '...' + address.substr(address.length - 4, 4)
    }

    return (
      <div className={styles.wallet}>
        {wallet.account && (
          <div className={styles.accountWrap} >
            <span className={styles.account}>
              {formatAddress(wallet.account)}
            </span>
            <span className={styles.balance}>
              {' '}
              {wallet.balance === '-1'
                ? '...'
                : `${parseFloat(
                    ethersUtils.formatEther(wallet.balance)
                  ).toFixed(2)} BNB`}
              {' '}
            </span>
          </div>
        )}

        {(() => {
          if (wallet.error?.name) {
            return (
              <button className={styles.button} onClick={wallet.reset()}>
                Retry
              </button>
            )
          }

          if (wallet.status === 'connecting') {
            return (
              <button className={styles.button} onClick={() => wallet.reset()}>
                Cancel
              </button>
            )
          }

          if (wallet.status === 'connected') {
            return (
              <button
                className={cx(styles.button, {
                  disconnect: wallet.status === 'connected'
                })}
                onClick={() => wallet.reset()}
              >
                Disconnect
              </button>
            )
          }

          return (
            <div>
              <WalletMask connectWallet={(type) => activate(type)} t={t} />
            </div>
          )
        })()}

        {/* {wallet.account && (
            <p>
                <span>Block:</span> <span>{blockNumber || '…'}</span>
            </p>
        )} */}
      </div>
    )
}

export default Wallet
