import styles from '../styles/deadline.module.scss'
import React from 'react'
import { useState, useEffect } from 'react'

const Deadline = ({ timestamp }) => {
const [day, setDay] = useState('0')
const [hour, setHour] = useState('0')
const [minutes, setMinutes] = useState('0')
const [second, setSecond] = useState('0')
const [errorShow, setErrorShow] = useState(false)
const getDeadline = () => {
  const dif = timestamp - Date.now()
  if (dif < 0) {
    return setErrorShow(false)
  }
  const secondVal = Math.floor((dif / 1000) % 60) 
  const minuteVal = Math.floor((dif / 1000 / 60) % 60)
  const hourVal = Math.floor((dif / 1000 / 60 / 60) % 60 % 24)
  const dayVal = Math.floor(dif / 1000 / 60 / 60 / 24)
  const getVal = (val)=>{
    return val<10 ? '0' + String(val) : String(val)
  }
  setSecond(getVal(secondVal))
  setMinutes(getVal(minuteVal))
  setHour(getVal(hourVal))
  setDay(String(dayVal))
  console.log(secondVal)
}
useEffect(() => {
  const timer = setInterval(() => {
    getDeadline()
  }, 1000)
  return () => {
    clearInterval(timer)
  }
})
const getContent = () => {
  return errorShow ? (
    <>已过期！</>
  ) : (
    <>
      <span>{day}</span>
      <span className={styles.unit}>D</span>
      <span>{hour}</span>
      <span className={styles.unit}>H</span>
      <span>{minutes}</span>
      <span className={styles.unit}>M</span>
      <span>{second}</span>
      <span className={styles.unit}>S</span>
    </>
  )
}

  return <div className={styles.deadline}>{getContent()}</div>
}
export default Deadline
