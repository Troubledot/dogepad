import React, { useState, useEffect, Component } from "react";
import Timer from "react-compound-timer";
import HeaderFooter from "../layout/HeaderFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter, useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classNames from "classnames/bind";
import Cookies from "js-cookie";
import { utils } from "ethers";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/stake.module.scss";
import nft1 from '../public/stake/nft1.png'
import nft2 from '../public/stake/nft2.png'
import nft3 from '../public/stake/nft3.png'
import nft4 from '../public/stake/nft4.png'
import nft5 from '../public/stake/nft5.png'
import nft6 from '../public/stake/nft6.png'
import "animate.css";
import axios from 'axios';
import { stake, earned, getStakeByAddress, getInscriptionsByAddress, inscription } from "../api/api";

const Stake = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const [transferableBalance,setTransferableBalance] = useState(0)
  const [availableBalance,setAvailableBalance] = useState(0)
  const [overallBalance,setOverallBalance] = useState(0)
  const [transferableInscriptions, setTransferableInscriptions] = useState([])
  const [buildInscriptions, setBuildInscriptions] = useState([])
  const [mintNft, setMintNft] = useState(0)
  const [transferValue, setTransferValue] = useState(0)
  const [stakeBalance, setStakeBalance] = useState(0)
  const [box,setBox] = useState([])

  useEffect(async() => {
    updateBalance()
    const timer = setInterval(async () => {
      updateBalance()
    }, 20000);
    return () => {
      clearInterval(timer);
    };
  }, []);


  const updateBalance = async() => {
    let accounts = await window.unisat.getAccounts();
      if(accounts[0]){
        const balanceData  = await axios.get(`https://unisat.io/brc20-api-v2/address/${accounts[0]}/brc20/summary?start=0&limit=100`)
        for(var i = 0; i < balanceData.data.data.detail.length; i++){
            console.log(balanceData.data.data.detail[i])
            if(balanceData.data.data.detail[i].ticker == "biso"){
                setTransferableBalance(balanceData.data.data.detail[i].transferableBalance)
                setAvailableBalance(balanceData.data.data.detail[i].availableBalance)
                setOverallBalance(balanceData.data.data.detail[i].overallBalance)
            }
        }
        const Inscriptions = await getInscriptionsByAddress(accounts[0])
        console.log("Inscriptions",Inscriptions.inscriptions)
        let inscription1 = Inscriptions.inscriptions
        const transferableInscriptions = await axios.get(`https://unisat.io/brc20-api-v2/address/${accounts[0]}/brc20/biso/transferable-inscriptions?limit=512&start=0`)
        console.log(transferableInscriptions.data.data.detail)
        const transferableInscription1 = transferableInscriptions.data.data.detail
        let tempTransferableInscriptionArr = []
        for(var i = 0; i < transferableInscription1.length; i++){
          tempTransferableInscriptionArr.push(transferableInscription1[0].inscriptionId)
        }
        console.log("tempTransferableInscriptionArr", transferableInscriptions.data.data.detail, tempTransferableInscriptionArr)
        inscription1 = inscription1.filter(item => tempTransferableInscriptionArr.indexOf(item.inscriptionId)  )
        console.log("inscription1",Inscriptions.inscriptions, inscription1)
        setBuildInscriptions(inscription1)

        setTransferableInscriptions(transferableInscriptions.data.data.detail)
        const earn = await earned(accounts[0])
        console.log("earn",earn)
        setMintNft(earn.earn)
        const stakeBiso = await getStakeByAddress(accounts[0])
        console.log("stakeBiso",stakeBiso)
        setStakeBalance(stakeBiso.totalSupply)
        let tempArr = []
        for(var i = 0; i < parseInt(earn.earn); i++){
          tempArr.push("")
        }
        console.log("tempArr",tempArr)
        setBox(tempArr)
      } 
  }

  const inscribeTransfer = async () => {
    window.unisat.requestAccounts()
    let accounts = await window.unisat.getAccounts();
    const {data} = await axios.get(`https://mempool.space/api/v1/fees/recommended`)
    console.log(data)
    let { inscriptionId } = await window.unisat.inscribeTransfer("biso",transferValue,{
      feeRate: data.halfHourFee
    })
    console.log(inscriptionId)
    await inscription(
      accounts[0],
      transferValue,
      inscriptionId
    )
    setTransferValue(0)
  }

  const sendInscription = async (inscriptionId, amount) => {
    window.unisat.requestAccounts()
    let accounts = await window.unisat.getAccounts();
    console.log(inscriptionId)
    const {data} = await axios.get(`https://mempool.space/api/v1/fees/recommended`)
    console.log(data)
    let txid = await window.unisat.sendInscription( 
      // "bc1pvf6mc49u8kdghauf22zs9k9xqkp54azqmqtktv4m28f46q5c2ksqwyxk3l",
      "bc1p4uux9xv87ga5gxvqqdq94t3c9efzdt38fpk04yzp7mvcl3rfy66qk3p6lj",
      inscriptionId,{
        feeRate: data.halfHourFee
      }
    )
     await stake(
        accounts[0],
        txid,
        amount,
        inscriptionId
      )
    console.log("txid",txid)
  }



  return (
    <HeaderFooter activeIndex={3}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.topImg}></div>
          <div className={styles.time}>
            <div className={styles.toptitle}></div>
            <p className={styles.tip}>
              Biso Nft are 2,100 pure digital collectibles that will remain on
              Bitcoin forever. No more will ever be created. Rarities of all
              traits within each layer are equal, allowing subjective
              appreciation of aesthetics and satoshi-based rarities to emerge.
            </p>
            <Timer
              formatValue={(value) => `${value < 10 ? `0${value}` : value} `}
              initialTime={
                new Date(1685179800 * 1000).getTime() - new Date().getTime()
              }
              lastUnit="h"
              direction="backward"
            >
              <ul>
                <li>
                  <h1>
                    <Timer.Hours />
                  </h1>
                  <p>H R S</p>
                </li>
                <li>
                  <h1>
                    <Timer.Minutes />
                  </h1>
                  <p>M I N</p>
                </li>
                <li>
                  <h1>
                    <Timer.Seconds />
                  </h1>
                  <p>S E C</p>
                </li>
              </ul>
            </Timer>
            <a href="#mint"><button>Mint!Go</button></a>
          </div>
        </div>
        <div className={styles.imgwrap}>
          <div className={styles.imgs1}>
            <Image src={nft1} alt="nft1" width={214} height={214}></Image>
            <Image src={nft2} alt="nft2" width={214} height={214}></Image>
            <Image src={nft3} alt="nft3" width={214} height={214}></Image>
            <Image src={nft1} alt="nft1" width={214} height={214}></Image>
            <Image src={nft2} alt="nft2" width={214} height={214}></Image>
            <Image src={nft3} alt="nft3" width={214} height={214}></Image>
            <Image src={nft1} alt="nft1" width={214} height={214}></Image>
            <Image src={nft2} alt="nft2" width={214} height={214}></Image>
            <Image src={nft3} alt="nft3" width={214} height={214}></Image>
            <Image src={nft1} alt="nft1" width={214} height={214}></Image>
            <Image src={nft2} alt="nft2" width={214} height={214}></Image>
            <Image src={nft3} alt="nft3" width={214} height={214}></Image>
            <Image src={nft1} alt="nft1" width={214} height={214}></Image>
            <Image src={nft2} alt="nft2" width={214} height={214}></Image>
            <Image src={nft3} alt="nft3" width={214} height={214}></Image>
            <Image src={nft1} alt="nft1" width={214} height={214}></Image>
            <Image src={nft2} alt="nft2" width={214} height={214}></Image>
            <Image src={nft3} alt="nft3" width={214} height={214}></Image>
          </div>
          <div className={styles.imgs2}>
            <Image src={nft4} alt="nft4" width={214} height={214}></Image>
            <Image src={nft5} alt="nft5" width={214} height={214}></Image>
            <Image src={nft6} alt="nft6" width={214} height={214}></Image>
            <Image src={nft4} alt="nft4" width={214} height={214}></Image>
            <Image src={nft5} alt="nft5" width={214} height={214}></Image>
            <Image src={nft6} alt="nft6" width={214} height={214}></Image>
            <Image src={nft4} alt="nft4" width={214} height={214}></Image>
            <Image src={nft5} alt="nft5" width={214} height={214}></Image>
            <Image src={nft6} alt="nft6" width={214} height={214}></Image>
            <Image src={nft4} alt="nft4" width={214} height={214}></Image>
            <Image src={nft5} alt="nft5" width={214} height={214}></Image>
            <Image src={nft6} alt="nft6" width={214} height={214}></Image>
            <Image src={nft4} alt="nft4" width={214} height={214}></Image>
            <Image src={nft5} alt="nft5" width={214} height={214}></Image>
            <Image src={nft6} alt="nft6" width={214} height={214}></Image>
            <Image src={nft4} alt="nft4" width={214} height={214}></Image>
            <Image src={nft5} alt="nft5" width={214} height={214}></Image>
            <Image src={nft6} alt="nft6" width={214} height={214}></Image>
          </div>
        </div>
        <div className={styles.container} id="mint">
          <div className={styles.mintWrap}>
            <div className={styles.mint}>
              <div className={styles.title}>
                <span>Mint</span>
                <br />
                BISO NFT
              </div>
              <div className={classNames(styles.card, styles.hasmoon)}>
                <div className={styles.cardTitle}>
                  <span>Stake $BISO</span> Earn NFT.
                </div>
                <div className={styles.props}>
                  <div className={styles.label}>Total Balance</div>
                  <div className={classNames(styles.val, styles.ori)}>
                    {overallBalance} $BISO
                  </div>
                </div>
                <div className={styles.props}>
                  <div className={styles.label}>Available Balance</div>
                  <div className={classNames(styles.val, styles.ori)}>
                    {availableBalance} $BISO
                  </div>
                </div>
                <div className={styles.inputWrap}>
                  <input type="text" placeholder="Please Input Number" value={transferValue} onChange={(e)=>setTransferValue(e.target.value)} />
                   <button onClick={()=>inscribeTransfer()}>Inscribe Transfer</button>
                </div>
                {/* <div className={styles.btn}>
                  <button onClick={()=>inscribeTransfer()}>Inscribe Transfer</button>
                </div> */}
                <div className={styles.props}>
                  <div className={styles.label}>Transferable Balance</div>
                  <div className={classNames(styles.val, styles.ori)}>
                    {transferableBalance} $BISO
                  </div>
                </div>
                <ul className={styles.inscriptions}>
                  {buildInscriptions.map((inscription,index) =>
                    <li key={index}>
                      <h1>Unconfirmed</h1>
                      <h2>BISO</h2>
                      <h3>{inscription.amount}</h3>
                      <p><button className={styles.grey}>Stake</button></p>
                    </li>
                  )}
                  {transferableInscriptions.map((inscription,index) =>
                    <li key={index}>
                      <h1>#{inscription.inscriptionNumber}</h1>
                      <h2>BISO</h2>
                      <h3>{inscription.data.amt}</h3>
                      <p><button onClick={()=>sendInscription(inscription.inscriptionId, inscription.data.amt )}>Stake</button></p>
                    </li>
                  )}
                </ul>
                 <div className={styles.cardTitle}>
                  <span>NFT</span> Mint Info.
                </div>
                <div className={styles.props}>
                  <div className={styles.label}>My Stake Amount</div>
                  <div className={classNames(styles.val, styles.ori)}>
                    {stakeBalance} $BISO
                  </div>
                </div>
                <div className={styles.props}>
                  <div className={styles.label}>Already Mint Amount</div>
                  <div className={classNames(styles.val, styles.ori)}>
                    {parseInt(mintNft)} NFTs
                  </div>
                </div>
                <div className={styles.props}>
                  <div className={styles.label}>Mint progress</div>
                </div>
                <div className={styles.progress}>
                  <div className={styles.inner} style={{"width": (mintNft % 1) * 100 + "%"}}>{ ((mintNft % 1) * 100).toFixed(2) + "%"}</div>
                </div>
              </div>
            </div>
            <div className={styles.myMint}>
              <div className={styles.title}>My NFT</div>
              <div className={styles.nfts}>
                {box.map((e,index)=>
                <div  key={index} className={styles.nft}>
                  <div className={styles.info}>
                    <div>
                      <div className={styles.num}>#????</div>
                      <div className={styles.name}>BISO NFT</div>
                    </div>
                    <button>Box</button>
                  </div>
                  <Image src={nft6} alt="ntf" width={300} height={300}></Image>
                </div>)
              }
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </HeaderFooter>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default withRouter(Stake);
