
import styles from './index.less';
import {useRequest,history} from '@umijs/max'
import { queryCommentList } from '@/services/comment';
import { useNavigate } from '@umijs/max';
import  {  BlockOutlined, LeftOutlined } from '@ant-design/icons';
import  { Component } from 'react'
import  { useState, useEffect,useRef} from 'react';
import {Button, Input, List} from 'antd-mobile';
import { Carousel } from 'antd';

export default function Page() {
    // const {data,loading}=useRequest(()=>queryCommentList({
    //     post_id:697,
    //     offset:0,
    //     limit:10,
    //     key:"046b6a2a43dc6ff6e770255f57328f89",
    //   }));
    const [page, setPage] = useState(0)
    let [jx, setJx] = useState(null);
    let [jxData, setJxData] = useState([] as any)
    // //请求参数
    let obj = {
        offset: page,
        post_id:697,
        limit:10,
        key:"046b6a2a43dc6ff6e770255f57328f89" 
    }
    // //发送请求
    const { data, run, refresh, loading, cancel } = useRequest({
        url: "/fm/forum-comment-list.json",
        method: "GET",
        params: obj
    }, {
        manual: true,
        loadingDelay: 200,
        // refreshDeps: [page] 有了手动依赖就没用了
    })
     //上拉加
     let timerT=null;
     let onPullData = () => {
         let scrollHeight = document.documentElement.scrollHeight;
         let scrollTop = document.documentElement.scrollTop;
         let clientHeight = document.documentElement.clientHeight
         if (scrollTop + clientHeight + 160 >= scrollHeight) {
             if (timerT) return
             timerT = setTimeout(() => {
                 setPage(page + 1)
                 if (jx !== null) {
                     setJxData([...jxData, ...jx])
                 }
                 clearTimeout(timerT);
                 timerT = null;
             }, 500);
         }
     }
 
     useEffect(() => {
         window.addEventListener("scroll", onPullData);
         return () => { window.removeEventListener("scroll", onPullData) };
     })

    // //遍历数据
    if (data) {
        jx = data.map((item) => (<div key={item.id+Math.random()}>


<div  className={styles.commentBox}>
            <img src={item.user.avatar} alt="" />
       <span>{item.user.nickname}</span>
       <span>{item.user.phone}</span>
     
        <div className={styles.create}>{item.created}</div>
      
        <div className={styles.content}>
     说的真不错~~~~
      </div>
          
       
        <div>
     
      </div>
        </div>
        </div>
       
       
        ))
        
    }
    
   
    if (jxData.length === 0 && jx !== null) {
        setJxData(jx)
    }
    // //page变化时发送请求
    useEffect(() => {
        run()
    }, [page])
     
   
const backh=()=>{
  console.log("xx");
  history.go(-1)
}
   
  
  
  return(
    <div className={styles.container} onTouchMove={() => onPullData()} >
<h1>
  <LeftOutlined className={styles.left}  onClick={()=>backh()} /> 
       社区详情</h1>
       <Carousel autoplay  style={{height:"220px"}}>
  <div>
    <h3  style={{height:"220px"}}>
    <img src={require("@/assets/lunbo.jpg")} alt="" style={{width:"100%",height:"220px",marginBottom:"12px"}}/>
    </h3>
  </div>
  <div>
    <h3 style={{height:"220px"}}>
    <img src={require("@/assets/lunbo2.jpg")} alt="" style={{width:"100%",height:"220px",marginBottom:"12px"}}/>
    </h3>
  </div>
  <div>
    <h3 style={{height:"220px"}}>
    <img src={require("@/assets/lunbo3.webp")} alt="" style={{width:"100%",height:"220px",marginBottom:"12px"}}/>
    </h3>
  </div>
  <div>
    <h3 style={{height:"180px"}}>
    <img src={require("@/assets/lunbo4.webp")} alt="" style={{width:"100%",height:"340px",marginBottom:"12px"}}/>
    </h3>
  </div>
</Carousel>
<div className={styles.top}>
          <img src={require("@/assets/avatar.jpg") }  alt=""/>
          <span  className={styles.yue}>月影青空</span>
          <span className={styles.qi}>7年前</span>
          <div className={styles.shi}>拾取正能量中。。。。。。</div>
       </div>
       <div className={styles.pl}>评论</div>
<div>{jxData}</div>
    </div>
  )}

 