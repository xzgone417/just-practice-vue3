import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { NavBar,Image } from 'antd-mobile';
import { useRequest,history } from '@umijs/max';
import { queryMycollect } from '@/services/cai'
import Playbar from '@/components/Playbar';
import { connect } from '@umijs/max';


 function Page(FM:any) {
  const { data, loading } = useRequest(() => queryMycollect());
  const [myquery, setquery] = useState(0)  // 路由跳转判断
  console.log(data, loading,"xx")


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
// 把歌曲存到dva后状态变化后再跳转
useEffect(() => {
  if (myquery !== 0) {
    history.push(`/FMplayer/${myquery}`);
  }
}, [myquery])
  

  const back = () => {
    history.go(-1)
  }


  return (
    <div>
      <NavBar onBack={back} >我收藏的播单</NavBar>
      <div>
        {!loading && data.map((item: any) => (
          <div title={item.title} key={item.id} className={styles.list} onClick={()=>nowFM(item)}>
            <Image src={item.cover} className={styles.listimg}></Image>
            <p>{item.title}</p>
          </div>
        ))}

      </div>
      <Playbar></Playbar>
    </div>
  );
}

export default connect(({ FMplayer, loading }) => ({
  FMplayer,
  loading: loading.models.FMplayer,
  loadingList: loading.effects['FMplayer/fetchFMplayer']
}))(Page);