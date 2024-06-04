import React, { FC, useEffect, useRef, useState } from 'react'
import styles from "./index.less"
import Nav from '@/components/nav'
import { connect, useLocation, useRequest,history } from '@umijs/max'
import { Tabs } from 'antd-mobile'
import font from "@/assets/font/iconfont.css"
import Playbar from '@/components/Playbar'

const Category = ({ home, loading,FMplayer,dispatch }) => {
  const categoryData = home.category.map((item, index) => {
    return (<Tabs.Tab title={item.name} key={index}></Tabs.Tab>)
  })

  const [index, setIndex] = useState(0)
  const [page, setPage] = useState(0)
  const [myquery, setquery] = useState(0)  // 路由跳转判断

  let list = null;
  let [categoryList, setCategoryList] = useState([] as any)

  let obj = {
    category_id: index + 1,
    offset: page,
    limit: 10,
    key: "046b6a2a43dc6ff6e770255f57328f89"
  }

  const { data, loading: cloading, run } = useRequest({
    url: "/fm/category-jiemu-list.json",
    method: "GET",
    params: obj
  }, {
    manual: true,
    loadingDelay: 200
  })


  useEffect(() => {
    run()
  }, [page | index])


  useEffect(() => {
    if (categoryList.length === 0 && list !== null) {
      setCategoryList(list)
    }
  }, [data])


  const changeIndex = (key) => {
    console.log(index)
    setPage(0)
    setCategoryList([])
    setIndex(key)
  }

 // 上拉加载
 let timerT = null;
 const onPullData = () => {
   let scrollHeight = document.documentElement.scrollHeight;
   let scrollTop = document.documentElement.scrollTop;
   let clientHeight = document.documentElement.clientHeight
   if (scrollTop + clientHeight + 160 >= scrollHeight) {
     if (timerT) return
     timerT = setTimeout(() => {
       setPage(page + 1)
       if (list !== null && page) {
         setCategoryList([...categoryList, ...list])
       }
       clearTimeout(timerT)
       timerT = null;
     }, 300);
   }
 }

 useEffect(() => {
   window.addEventListener("scroll", onPullData);
   return () => { window.removeEventListener("scroll", onPullData) };
 })

// 存歌曲列表
 // 播放歌曲，并更改dva状态。存数组，存歌曲？、、、、、、、、、、、、、、、、、、、
 const nowFM = (args:any) => {
  // console.log(args,"olool");
dispatch({
    type: "FMplayer/FMjump",
    payload: args
  });
  if (data !== []) {
   dispatch({
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


  if (data && !loading) {
    console.log(data, "data")
    list = data.map((item) => (
    <div key={item.id + Math.random()} onClick={()=>nowFM(item)}>
      <div className={styles.cover}>
        <img src={item.cover} alt="" />
      </div>
      <div className={styles.info}> <div className={styles.catit}>{item.title}</div>
        <div className={styles.speak}>
          <span className={font.iconfont + " " + font.iconHr + " " + styles.icon}></span>
          {item.speak}</div>
      </div>
    </div >
    ))
  }

  // 
  return (
    <div className={styles.page}>
      <Nav></Nav>
      <Tabs activeKey={index.toString()} onChange={(key) => changeIndex(parseInt(key))}>
        {categoryData}
      </Tabs>
      <div className={styles.content} onTouchMove={() => { onPullData() }}>
        {categoryList}
      </div>
      <Playbar></Playbar>
    </div>
  )
}

export default connect(({ home, loading,FMplayer }) => ({
  home,
  FMplayer,
  loading: loading.models.home,
  loadingList: loading.effects["home/fetchHomeList"]
}))(Category);