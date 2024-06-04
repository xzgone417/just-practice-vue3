import { connect } from '@umijs/max'
import { useRequest,history } from '@umijs/max'
import React, { FC, useEffect, useState } from 'react'
import styles from "./index.less"

const JxList: FC = (FM:any) => {
    const [page, setPage] = useState(0)
    const [myquery, setquery] = useState(0)  // 路由跳转判断
    let [jx, setJx] = useState(null);
    let [jxData, setJxData] = useState([] as any)
    //请求参数
    let obj = {
        "offset": page,
        "limit": 10,
        "key": "046b6a2a43dc6ff6e770255f57328f89"
    }
    //发送请求
    const { data, run, refresh, loading, cancel } = useRequest({
        url: "/fm/newfm-list.json",
        method: "GET",
        params: obj
    }, {
        manual: true,
        loadingDelay: 200,
        //page变化时发送请求
        // refreshDeps: [page]
        onSuccess: (result) => {
            if (jx !== null && jxData.length > 0) {
                setJxData([...jxData, ...result])
            }
        }
    })
    //上拉加载
    let timerT=null;
    let onPullData = () => {
      let scrollHeight = document.documentElement.scrollHeight;
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight
      if (scrollTop + clientHeight + 160 >= scrollHeight) {
        if (timerT) return
        timerT = setTimeout(() => {
          setPage(page + 1) 
          timerT = null;
      }, 500);
      }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", onPullData);
        return () => { window.removeEventListener("scroll", onPullData) };
    })
    // 存歌曲列表
 // 播放歌曲，并更改dva状态。存数组，存歌曲？、、、、、、、、、、、、、、、、、、、
 const nowFM = (args) => {
    // console.log(args,"olool");
    FM.dispatch({
      type: "FMplayer/FMjump",
      payload: args
    });
    if (jxData !== []) {
     FM.dispatch({
        type: "FMplayer/MyFMList",
        payload: jxData
      })
    }
    setquery(parseInt(args.id))    //修改状态，修改后跳转路由
  }
  // 把歌曲存到dva后状态变化后再跳转、、、、、、、、、dva存储完毕之后再跳转路由
  useEffect(() => {
    if (myquery !== 0) {
      history.push(`/FMplayer/${myquery}`);
    }
  }, [myquery])

    //遍历数据
    if (data) {
        jx = jxData.map((item) => (<div key={item.id + Math.random()} onClick={()=>nowFM(item)}>
            <div className={styles.cover}>
                <img src={item.cover} alt="" />
            </div>
            <div className={styles.info}>
                <div className={styles.xltit}>{item.title}</div>
                <div className={styles.speak}>{item.speak}</div>
            </div>
        </div>))
    }
    if (jxData.length === 0 && jx !== null) {
        setJxData(data)
    }
    //首次加载发送一次请求
    useEffect(() => {
        run()
    }, [page])
    // console.log(jxData)
    return (
        <div className={styles.jx} onTouchMove={() => onPullData()} onScroll={() => onPullData()}>
            <div className={styles.head}>
                <div className={styles.title}>最新精选</div>
            </div>
            <div className={styles.list}>
                <div className={styles.content}>
                    {jx}
                </div>
            </div>
        </div>
    )
}

// export default JxList;
export default connect(({ FMplayer, loading }) => ({
    FMplayer,
    loading: loading.models.FMplayer,
    loadingList: loading.effects['FMplayer/fetchFMplayer']
  }))(JxList);