import React, { FC } from 'react'
import styles from './index.less'
import font from '@/assets/font/iconfont.css'
import { useRequest ,history } from '@umijs/max'
const TjList: FC = () => {
  const { loading, data } = useRequest({
    url: "/fm2/broadcast_list.json/",
    method: "GET",
    params: {
      "offset": 0,
      "speaker_id": 0,
      "tag": "已弃疗",
      "rows": 10,
      "key": "046b6a2a43dc6ff6e770255f57328f89"
    }
  }
  )
  // console.log(data,"tuijian");
  
  let tj = null
  if (data) {
    tj = data.map(item => (<div key={item.id} onClick={()=>history.push(`/FMplayer/${item.id}`)}>
      <div className={styles.cover}><img src={item.cover} alt="" /></div>
      <div className={styles.speak}>{item.speak}</div>
      <div className={styles.dttit}>{item.title}</div>
    </div>))
  }

  return (
    <div className={styles.tj}>
      <div className={styles.head}>
        <div className={styles.title}>推荐列表</div>
      </div>
      <div className={styles.list}>
        <div className={styles.content}>{tj}</div></div>
    </div>
  )
}

export default TjList;