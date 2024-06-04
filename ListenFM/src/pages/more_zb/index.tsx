import React, { useEffect, useState } from 'react';
import './index.less'   //不会给index.less开启模块化
import { useRequest,history } from '@umijs/max';
import { getZBList } from '@/services/more';
import { List, Switch, Image, NavBar, InfiniteScroll } from 'antd-mobile'
import style from './index.less'
import { EyeFill, StarFill } from 'antd-mobile-icons'

export default function Page() {
  const [offset, setOffset] = useState(0)
  const [list, setlist] = useState([] as any)
  const [hasMore, setHasMore] = useState([]) as any;
  const { data, loading, run } = useRequest(() => getZBList({
    offset: offset,
    limit: "10",
    key: "046b6a2a43dc6ff6e770255f57328f89"
  }), {
    manual: true,
    refreshDeps:[offset]
  });

  //上拉加载
  // let onPullData = () => {
  //   let scrollHeight = document.documentElement.scrollHeight;
  //   let scrollTop = document.documentElement.scrollTop;
  //   let clientHeight = document.documentElement.clientHeight
  //   if (scrollTop + clientHeight + 160 >= scrollHeight) {
  //     setPage(page + 1)
  //   }
  // }
  // useEffect(() => {
  //   run()
  // }, [page])

  // useEffect(() => {
  //   if (num === 1) {
  //     setlist(data)
  //   } else if (num > 1) {
  //     setlist([...list!, ...data])
  //   }
  //   setNum(num + 1)
  // }, [data])

const loadMore=async()=>{
  setOffset(offset+1)
  if(offset>1000){
    return setHasMore(false);
  }
  await run();
}

useEffect(()=>{
  if(!data) return setlist[list]
  setlist([...list,...data])
},[loading])


const zhuboJump=(args:any)=>{
// console.log(args);
history.push(`/zhubo/${args.id!}`)
}


  return (
    <div>
      {/* back不能用箭头函数方法写 */}
      <div onClick={history.back}><NavBar className={style.topbar} ></NavBar></div>
      {/* <NavBar className={style.topbar}></NavBar> */}
      <h1>更多主播</h1>
      <List>
      <div className={style.bgc}>
        {list && list.map((item:any, index:number) => (
          <div key={index} onClick={()=>zhuboJump(item)}>
            {/* {item.title}--{item.speak}-{item.viewnum} */}
            <List.Item
              key={item.title}
              prefix={
                <Image
                  src={item.cover}
                  style={{ borderRadius: 5 }}
                  fit='cover'
                  width={94}
                  height={80}
                />
              }
              description={
                <div>
                 <div className={style.autho1}><h4>{item.content}</h4></div>
                 <div className={style.autho2}><h4>{item.title}</h4></div>
                </div>
              }
              extra={
                <div className={style.extra}>
                  <p><StarFill />{item.favnum}</p>
                  <p><EyeFill />{item.viewnum}</p>
                </div>
              }>
            </List.Item>

          </div>
        ))}
      </div>
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}/>
    
    <footer>11111</footer>
    </div>
  );
}
