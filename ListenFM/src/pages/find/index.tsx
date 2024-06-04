import React, { FC, useEffect, useState } from 'react'
import { Grid } from 'antd-mobile'
import styles from './index.less'
import font from '@/assets/font/iconfont.css'
import { history, useRequest } from '@umijs/max'
import TabBar from '@/components/tabbar'
import Playbar from '@/components/Playbar'
import { connect } from '@umijs/max'
const Find: FC = (FM:any) => {
  const [myquery, setquery] = useState(0)  // 路由跳转判断

  const data = [
    { title: "自我成长", icon: font.iconChengchang },
    { title: "情绪管理", icon: font.iconIcon },
    { title: "人际沟通", icon: font.iconAhezuowoshoujiaoliu04 },
    { title: "恋爱婚姻", icon: font.iconLianaiyushou },
    { title: "职场管理", icon: font.iconBiaoqianlanZhichang },
    { title: "亲子家庭", icon: font.iconFushiQinzizhuangXianxing },
    { title: "心理科普", icon: font.iconXinlixue },
    { title: "课程讲座", icon: font.icon2 }]


  const { data: moreDt, loading } = useRequest({
    url: "/fm/diantai-new-list.json",
    method: "GET",
    param: {
      offset: 0,
      limit: 10,
      key: "046b6a2a43dc6ff6e770255f57328f89"
    }
  })
  const goPage = (idx) => {
    history.push(`/category?cy=${idx}`)
  }


  const { data: fdata } = useRequest({
    url: "fm2/hot_tag_list.json",
    method: "GET",
    params: {
      flag: 4,
      offset: 0,
      rows: 0,
      key: "046b6a2a43dc6ff6e770255f57328f89"
    }
  })


  const { data: moreFm } = useRequest({
    url: "/fm/newfm-list.json",
    method: "GET",
    params: {
      offset: 0,
      limit: 10,
      key: "046b6a2a43dc6ff6e770255f57328f89"
    }
  })
  // console.log(moreDt, "1111111111")
  // console.log(fdata, "22222222222")
  // console.log(moreFm, "333333333")
// 存歌曲列表
 // 播放歌曲，并更改dva状态。存数组，存歌曲？、、、、、、、、、、、、、、、、、、、
 const nowFM1 = (args) => {
  history.push(`/zhubo/${args.id!}`)
  // FM.dispatch({
  //   type: "FMplayer/FMjump",
  //   payload: args
  // });
  // if (moreDt !== []) {
  //  FM.dispatch({
  //     type: "FMplayer/MyFMList",
  //     payload: moreDt
  //   })
  // }
  // setquery(parseInt(args.id))    //修改状态，修改后跳转路由

}
// 2
const nowFM2 = () => {
  history.push(`/more_ke`)
  // history.push(`/zhubo/${args.id!}`)
  // FM.dispatch({
  //   type: "FMplayer/FMjump",
  //   payload: args
  // });
  // if (fdata !== []) {
  //  FM.dispatch({
  //     type: "FMplayer/MyFMList",
  //     payload: fdata
  //   })
  // }
  // setquery(parseInt(args.id))    //修改状态，修改后跳转路由
}
// 3
const nowFM3 = (args) => {
  FM.dispatch({
    type: "FMplayer/FMjump",
    payload: args
  });
  if (moreFm !== []) {
   FM.dispatch({
      type: "FMplayer/MyFMList",
      payload: moreFm
    })
  }
  setquery(parseInt(args.id))    //修改状态，修改后跳转路由
}
// 把歌曲存到dva后状态变化后再跳转
useEffect(() => {
  if (myquery !== 0) {
    history.push(`/FMplayer/${myquery}`);
  }
}, [myquery])




  return (
    <div className={styles.find}>
      <TabBar></TabBar>
      <div className={styles.classify}>
        <Grid columns={4} gap={8} className={styles.grid}>
          {data.map((item, index) => (
            <Grid.Item className={styles.item} key={item.title} onClick={() => {
              goPage(index)
            }}>
              <span className={font.iconfont + " " + item.icon + " " + styles.icon}></span>
              <div className={styles.title}>{item.title}</div>
            </Grid.Item>
          ))}
        </Grid>
      </div>
      <div className={styles.tit}>发现主播  <div className={styles.more} onClick={()=>history.push(`/more_zb`)}>更多<span className={font.iconfont + " " + font.iconXiangyou}></span></div> </div>
      <div className={styles.moredt}>

        {
          moreDt && moreDt.map((item) => (
            <div className={styles.item} key={item.id} onClick={()=>nowFM1(item)}>
              <img src={item.cover} alt="" />
              <div className={styles.title}>{item.title}</div>

            </div>
          ))
        }
      </div>
      <div className={styles.tj}>
        <div className={styles.head}>
          <div className={styles.title} >发现心声</div>
          <div className={styles.more} onClick={()=>history.push(`/more_ke`)}>更多<span className={font.iconfont + " " + font.iconXiangyou}></span></div>
        </div>
        <div className={styles.list}>
          <div className={styles.content}>{
            fdata && fdata.map(item => (<div key={item.id} onClick={()=>nowFM2()}>
              <div className={styles.cover}><img src={item.cover} alt="" /></div>
              <div className={styles.dttit}>{item.name}</div>
            </div>))
          }</div></div>
      </div>
      <div className={styles.tj}>
        <div className={styles.head}>
          <div className={styles.title} >更多FM</div>
          <div className={styles.more} onClick={()=>history.push(`/more_fm`)}>更多<span className={font.iconfont + " " + font.iconXiangyou}></span></div>
        </div>
        <div className={styles.list}>
          <div className={styles.content}>{
            moreFm && moreFm.map(item => (<div key={item.id} onClick={()=>nowFM3(item)}>
              <div className={styles.cover}><img src={item.cover} alt="" /></div>
              <div className={styles.dttit}>{item.title}</div>
            </div>))
          }</div></div>
      </div>
      <Playbar></Playbar>
    </div>

  )
}

// export default Find;
export default connect(({ FMplayer, loading }) => ({
  FMplayer,
  loading: loading.models.FMplayer,
  loadingList: loading.effects['FMplayer/fetchFMplayer']
}))(Find);