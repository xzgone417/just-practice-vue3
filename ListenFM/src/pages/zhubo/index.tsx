import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { useRequest,history } from '@umijs/max';
import { queryzhuboList, querydetailList, queryAttentionOK, queryAttention } from '@/services/cai'
import Item from 'antd/lib/list/Item';
import { Image, List, Tag, Toast, Dialog, NavBar } from 'antd-mobile'
import logoImg from '@/assets/image/listen.png'
import Playbar from '@/components/Playbar';
import { useParams } from '@umijs/max';
import { connect } from '@umijs/max';


 function Page(FM) {
  const idemt=useParams()
  const idnum=parseInt(idemt.id!)
  const [lookAt, setLook] = useState<boolean>(true);
  const [page, setPage] = useState(0)
  const [list, setlist] = useState([] as any)
  const [num, setNum] = useState(0)
  // const [times, settimes] = useState<boolean>(true);

  const [myquery, setquery] = useState(0)  // 路由跳转判断

  const { data: data2, loading: loading2 } = useRequest(() => queryzhuboList(idnum));
  const { data, loading, run } = useRequest(() => querydetailList({
    offset: page,
    limit: 10,
    id:idnum,
    key: "046b6a2a43dc6ff6e770255f57328f89"
  }),
    {
      // manual: true,
      refreshDeps: [page],
       debounceInterval: 500,
    });

// 上拉加载
  let timerT=null;
  let   onPullData = () => {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight
    if (scrollTop + clientHeight +160 >= scrollHeight) {
      if (timerT) return
      timerT = setTimeout(() => {
     setPage(page + 1) 
     clearTimeout(timerT)
       timerT = null;
    }, 500);
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", onPullData);
    return () => { window.removeEventListener("scroll", onPullData) };
})

  // useEffect(() => {
  //   run()
  // }, [page])

  useEffect(() => {
    console.log(page);
    if (num === 1) {
      setlist(data)
    } else if (num > 1) {
      setlist([...list!, ...data])
    }
    setNum(num + 1)
  }, [data])



// console.log(props,"bb");

  const attentionOK = useRequest(() => {
    return queryAttentionOK(data2!.id)
  },{
    manual:true
  })


  useEffect(() => {
    setLook(attentionOK.data)
  }, [attentionOK.data])

  // 关注主播
  const attention = useRequest(() => {
    return queryAttention(data2!.id)
  }, {
    manual: true
  })
  const guanzhu = () => {
    if (data2) {
      attention.run()
    }
    setLook(true)
  }
  const cancelguanzhu = () => {
    if (data2) {
      attention.run()
    }
    setLook(false)
  }

// 存歌曲列表
 // 播放歌曲，并更改dva状态。存数组，存歌曲？、、、、、、、、、、、、、、、、、、、
 const nowFM = (args) => {
  // console.log(args,"olool");
  FM.dispatch({
    type: "FMplayer/FMjump",
    payload: args
  });
  if (list !== []) {
   FM.dispatch({
      type: "FMplayer/MyFMList",
      payload: list
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

// console.log(FM,"mm");
const back = () => {
  history.go(-1)
}
// 

  return (
    <div>
      <div className={styles.top}>
      <NavBar onBack={back} style={{"color":"#333"}}>主播详情</NavBar>
        <div className={styles.zhuboimg1}>
          {!loading2 && <Image src={data2.cover} className={styles.img}></Image>}
        </div>

        {!loading2 && <Image src={data2.cover} className={styles.zhuboimg}></Image>}
        <div className={styles.pp}>
          <p>{!loading2 && data2.title}</p>
          <p>收听 {!loading2 && data2.viewnum}|关注 {!loading2 && data2.commentnum}</p>
        </div>

        <div>
          {/* <div className={styles.care}> + 关注 | 私信</div> */}
          {lookAt
            ?
            <Tag
              color='#ffffff' fill='outline' className={styles.care}
              onClick={() =>
                Dialog.confirm({
                  content: '是否取消关注该主播',
                  onConfirm: () => {
                    cancelguanzhu()
                    Toast.show({
                      icon: 'success',
                      content: '取消成功',
                      position: 'bottom',
                    })
                  }
                })
              }>
              <div> 已关注 | 私信</div>
            </Tag>
            :
            <Tag
              color='#ffffff' fill='outline' className={styles.care}
              onClick={() =>
                Dialog.confirm({
                  content: '是否关注该主播',
                  onConfirm: () => {
                    guanzhu()
                    Toast.show({
                      icon: 'success',
                      content: '关注成功',
                      position: 'bottom',
                    })
                  }
                })
              }
            >
              <div > + 关注 | 私信</div>
            </Tag>
          }
        
        </div>

      </div>
      <div className={styles.bofang}>
        <span>播放全部</span>
        <span>多选</span>
      </div>

      <div onTouchMove={() => onPullData()}>
        {list && list!.map((item, index) => (
          <div key={index} onClick={()=>nowFM(item)}>
            <div title={item.title} key={item.id} className={styles.list}>
              <Image src={item.cover} className={styles.listimg}></Image>
              <ul>
                <li>{item.title}</li>
                <li>{item.speak}</li>
                <img src={logoImg} alt='' className={styles.logo}></img>
                <li>{item.viewnum}</li>
              </ul>
            </div>
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
