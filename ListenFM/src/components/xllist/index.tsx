import { connect } from '@umijs/max'
import { useRequest,history } from '@umijs/max'
import React, { FC, useEffect, useState } from 'react'
import styles from "./index.less"

const XlList: FC = (FM:any) => {
    const [myquery, setquery] = useState(0)  // 路由跳转判断
    const { loading, data } = useRequest("/fm/newlesson-list.json")
    // console.log(data,"xl");
  
    
// 存歌曲列表
 // 播放歌曲，并更改dva状态。存数组，存歌曲？、、、、、、、、、、、、、、、、、、、
 const nowFM = (args) => {
    // console.log(args,"olool");
    FM.dispatch({
      type: "FMplayer/FMjump",
      payload: args
    });
    if (data !== []) {
     FM.dispatch({
        type: "FMplayer/MyFMList",
        payload: data
      })
    }
    setquery(parseInt(args.id))    //修改状态，修改后跳转路由
  }
  // 把歌曲存到dva后状态变化后再跳转、、、、、、、4444444444444444、、、、、、dva存储完毕之后再跳转路由
  useEffect(() => {
    if (myquery !== 0) {
      history.push(`/FMplayer/${myquery}`);
    }
  }, [myquery])

    let xl = null
    if (!loading && data) {
        xl = data.map((item) => (<div key={item.id}  onClick={()=>nowFM(item)}>
            <div className={styles.cover}>
                <img src={item.cover} alt="" />
            </div>
            <div className={styles.info}>
                <div className={styles.xltit}>{item.title}</div>
                <div className={styles.speak}>{item.speak}</div>
            </div>
        </div>))
    }



    return (
        <div className={styles.xl}>
            <div className={styles.head}>
                <div className={styles.title}>心理课堂</div>
            </div>
            <div className={styles.list}>
                <div className={styles.content}>
                    {xl}
                </div>
            </div>
        </div>
    )
}

// export default XlList;
export default connect(({ FMplayer, loading }) => ({
    FMplayer,
    loading: loading.models.FMplayer,
    loadingList: loading.effects['FMplayer/fetchFMplayer']
  }))(XlList);