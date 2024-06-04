import { AppstoreOutline } from 'antd-mobile-icons'
import React, { FC } from 'react'
import styles from "./index.less"
import font from "@/assets/font/iconfont.css"
import { history } from '@umijs/max'

const Classify: FC = () => {
  let goPage = (val: string) => {
    history.push(val)
  }
  const data = [{ title: "分类播单", icon: font.iconFenlei, to: "/category" }, { title: "主播电台", icon: font.iconDiantai, to: "/more_dt" }, { title: "聆心社区", icon: font.iconShequ, to: "/community" }]
  return (
    <div className={styles.classify} >
      {data.map((item) => (
        <div className={styles.icon} key={item.title} onClick={() => goPage(item.to)}>
          <div className={font.iconfont + " " + item.icon} >
          </div>
          <div>{item.title}</div>
        </div>))}
    </div>
  )
}

export default Classify;