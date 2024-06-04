import React from 'react'
import styles from "./index.less"
import font from "@/assets/font/iconfont.css"
import { history } from '@umijs/max'
const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.icon} onClick={() => history.go(-1)}>
                <span className={font.iconfont + " " + font.iconXiangzuo}></span>
            </div>
            <div className={styles.title}>分类话题</div>
        </div>
    )
}

export default Nav;