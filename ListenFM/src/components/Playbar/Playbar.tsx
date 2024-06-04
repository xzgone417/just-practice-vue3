import { connect } from '@/.umi/plugin-dva';
import { BarsOutlined, PauseCircleOutlined, PlayCircleOutlined} from '@ant-design/icons'
import { Link } from '@umijs/max'
import { Popup ,Image} from 'antd-mobile';
import React, { useEffect, useState } from 'react'
import styles from './index.less'
 function Playbar(FM) {
// console.log(FM,"xxxlmg");
  // const [whostop, setStop] = useState<boolean>(true);
  const [visible1, setVisible1] = useState(false)
  const [listRound, setRound] = useState<boolean>(true);
  const [light, setlight] = useState(0);

  // 
  const audioRef=document.getElementsByTagName("audio")[0];

  // 暂停播放
const songstop=()=>{
  if (audioRef) {
    audioRef.pause();
    // setStop(false)
    FM.dispatch({
      type: 'FMplayer/PlayOrNot', 
    });
  }
}


// 进入页面播放音乐////
// useEffect(()=>{
//   if (audioRef) { 
//     // if (audioRef.paused) {
//       console.log("xxxxxx");
//       // audioRef.play();
//       if (!FM.FMplayer.juststop) {
//         FM.dispatch({
//           type: 'FMplayer/PlayOrNot', 
//         });
//       }
//     // }
//   }
//   },[light])

// 开始播放
const songplay=()=>{
  if (audioRef) {
    audioRef.play();
    // setStop(true);
    FM.dispatch({
      type: 'FMplayer/PlayOrNot', 
    });
  }
}




  // 换歌曲、、、、、、、、、、、、、、、、、、、、
  const mywhereFM = (value) => {
   FM.dispatch({
      type: 'FMplayer/fetchFMplayer',
      //payload 有效负载 ，dispatch传递参数的时候
      payload: {
        id: value
      },
    });
  }
 // 列表
 const needList = () => {
  setVisible1(true);
};
  // 列表换歌
  const otherFM = (arg,idx) => {
    const numid = parseInt(FM.FMplayer.FMsong.id)
    if (numid !== arg) {
      mywhereFM(arg);
      setlight(idx);
      if (!FM.FMplayer.juststop) {
        FM.dispatch({
          type: 'FMplayer/PlayOrNot', 
        });
      }
      // audioRef.play()
      setVisible1(false)
    }
    // console.log(arg);   
  }

  // 下一首、、、、、、、、、、、
  const nextFM = () => {
    // forEach没有return，普通for循环
    //  props.FMlist.forEach((item,index)=>{
    //     console.log(index,item.id);
    //   });
      // console.log(props.board.id);
    const needindex = FM.FMplayer.FMlist.findIndex((item) => {
      // eslint-disable-next-line eqeqeq
      return item.id == FM.FMplayer.FMsong.id
    })
    const jia1 = needindex + 1;
    const rightneed = FM.FMplayer.FMlist.find((item, index) => {
      // eslint-disable-next-line eqeqeq
      return jia1 === index
    })
    const firstsong = FM.FMplayer.FMlist.find((item, index) => {
      return index === 0
    })
    if (jia1 === FM.FMplayer.FMlist.length) {
      mywhereFM(firstsong.id)
      setlight(0)
      if (!FM.FMplayer.juststop) {
        FM.dispatch({
          type: 'FMplayer/PlayOrNot', 
        });
      }
    } else {
      mywhereFM(rightneed.id);
      setlight(light+1)
      if (!FM.FMplayer.juststop) {
        FM.dispatch({
          type: 'FMplayer/PlayOrNot', 
        });
      }
    }
  }

// 播放完成函数
function audioEnded() {
  if (audioRef) {
    audioRef.play();
  }
}
useEffect(() => {
  if (audioRef) {
    audioRef.addEventListener('ended', function () {
      if (FM.FMplayer.single===true) {  
       audioEnded();
       }else {
       nextFM();
       }
     }, false)
  }
})

// 列表高亮
useEffect(()=>{
  const lightindex = FM.FMplayer.FMlist.findIndex((item) => {
    // eslint-disable-next-line eqeqeq
    return item.id == FM.FMplayer.FMsong.id
  })
  if (lightindex >=0) {
    setlight(lightindex)
  }
},[ FM.FMplayer.FMlist])


  return (
<div>   
   {FM.FMplayer.FMsong.title ? 
  <div className={styles.player}>  
        <Link to={`/FMplayer/${FM.FMplayer.id}`}>
          <div className={styles.myimgbox}><img src={FM.FMplayer.FMsong.cover}  className={styles.myimg}/> </div>
      <div className={styles.song}>
     {/* <audio src={FM.FMplayer.FMsong.url} autoPlay={true}>
      </audio> */}
   <div className={styles.songt}>{FM.FMplayer.FMsong.title}</div>
      <div className={styles.songb}>{FM.FMplayer.FMsong.speak}</div>    
     </div>
     </Link>
     <div className={styles.westop}>
        {FM.FMplayer.play ? <PauseCircleOutlined onClick={()=>songstop()}></PauseCircleOutlined> : <PlayCircleOutlined onClick={()=>songplay()}></PlayCircleOutlined>}
      </div> 
     <div className={styles.listenlist}> <BarsOutlined onClick={needList}></BarsOutlined></div>

    {/* 弹出层 */}
    <Popup visible={visible1}
              onMaskClick={() => {
                setVisible1(false)
              }}>
              <div style={{ height: '60vh', overflowY: 'scroll' }}>
                <div className={styles.poplist}>
                  <div className={styles.popon}> 播放列表：{FM.FMplayer.FMlist && <span>{FM.FMplayer.FMlist.length}</span>}首</div>
                  {FM.FMplayer.FMlist && FM.FMplayer.FMlist.map((item,index) => {
                    return (<div key={index} className={styles.listsong} onClick={() => otherFM(item.id,index)}  style={light===index? { "color": "#ec7c70" }:{ "color": "#696969" } }>
                      <span className={styles.listsongtitle}>{item.title}</span>
                      <span className={styles.listsonger}>-{item.speak}</span>
                    </div>)
                  })}
                </div>
              </div>
            </Popup>
  </div>
  :
  <div className={styles.playernot}>聆听FM，世界和我爱着你</div>
   }
 </div>
   )
}


export default connect(({ FMplayer, loading }) => ({
  FMplayer,
  //表示user这个model有数据请求行为的时候，loading为true，没有请求的时候为false
  loading: loading.models.FMplayer, 
}))(Playbar);