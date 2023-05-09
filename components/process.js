import classNames from 'classnames/bind'
import styles from '../styles/progress.module.scss'
import React from 'react'
// const cx = classNames.bind(styles)

const Process = ({ percent }) => {

const item = []
for (let index = 0; index < 20 ;index++) {
  let spanClass = cx('inner')
  if (index < percent / 5 - 1) {
    spanClass = cx('inner', styles.all)
  }
  if (index === Math.floor(percent / 5) && percent % 5 !== 0) {
    const className = 'w' + Math.round(((percent % 5) / 5) * 100)
    spanClass = cx('inner', styles[className])
  }
  item.push(
    <span key={index} className={styles.item}>
      <span
        className={spanClass}
      />
    </span>
  )
}

  return (
    <div className={styles.progress}>
      <div>Total SUPPLY</div>
      <div className={styles.progress_wrap}>
        <div className={styles.progress_box}>{item}</div>
        <span>{percent}%</span>
      </div>
      <div> League of FFC Rights Card = 1 NFT + 20000 $FFC </div>
    </div>
  )
}

export default Process
