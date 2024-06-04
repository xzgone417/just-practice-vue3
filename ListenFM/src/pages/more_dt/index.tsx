import React, { useEffect, useState } from 'react';
import './index.less'   //不会给index.less开启模块化
import { useRequest,history } from '@umijs/max';
import { getDTList } from '@/services/more';
import Loading from '@/loading';
import { List, Image, NavBar } from 'antd-mobile';
import style from './index.less';
import {  EyeFill, RedoOutline, StarFill } from 'antd-mobile-icons'
import { connect } from '@umijs/max';



 function Page(FM:any) {
  const [offset,setOffset]=useState(7)
  const { data, loading } = useRequest(() => getDTList({
  
    key: "046b6a2a43dc6ff6e770255f57328f89"
  }));
  // console.log(loading);


  // if (loading === false) {
  //   console.log(data, loading, "daddddddddd")
  // }
const nowzhubo=(args:any)=>{
  history.push(`/zhubo/${args.id!}`)
}

  return (
    <div>
      <div onClick={history.back}><NavBar className={style.topbar} ></NavBar></div>
      <h1>推荐列表</h1>
      <div className={style.bgc}>
      {loading === false && data.tuijian!.map(item => {
        return <div key={item.id} onClick={()=>nowzhubo(item)}>
          {/* {item.title}-{item.id} */}
          <List.Item
            key={item.title}
            prefix={
              <Image
                src={item.cover}
                style={{ borderRadius: 5 }}
                // fit='cover'
                width={94}
                height={80}
              />
            }
            description={
              <div>
                
                {/* <div className='autho1'><h4>{item.content}</h4></div>
                <h4 className='autho'>{item.title}</h4> */}
                <div className={style.autho1}><h4>{item.content}</h4></div>
                      <div className={style.autho2}><h4>{item.title}</h4></div>
              </div>
            }
            extra={
              <div className={style.extra}>
                <p><StarFill />{item.favnum}</p>
                <p><EyeFill />{item.viewnum}</p>
              </div>
            }
          >
          </List.Item>
        </div>
      })
      
      }
      </div>
  
    

      <h1>最新精选</h1>
      <div  className={'jingxuan'}>
      {loading === false && data.newlist.map(item => {
        return <div key={item.id} onClick={()=>nowzhubo(item)}>
          {/* {item.title}-{item.id} */}
          <div className='ImageItem'>
            <div className='ImageItem1'>
            <Image
                src={item.cover}
                style={{ borderRadius: 5 }}
                fit='cover'
                width={140}
                height={120}
              />
              <div className='wenzi'>{item.content}</div>
            </div>
          </div>
        </div>
      }
    )
  }
      </div>
 
 
      <h1>热播节目</h1>
      <div className={style.bgc}>
      {loading === false && data.hotlist.map(item => {
        return <div key={item.id} onClick={()=>nowzhubo(item)}>
          {/* {item.title}-{item.id} */}
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
                
                {/* <div className='autho1'><h4>{item.content}</h4></div>
                <h4 className='autho'>{item.title}</h4> */}
               <div className={style.autho1}><h4>{item.content}</h4></div>
                      <div className={style.autho2}><h4>{item.title}</h4></div>
              </div>
            }
            extra={
              <div className={style.extra}>
                <p><StarFill />{item.favnum}</p>
                <p><EyeFill />{item.viewnum}</p>
              </div>
            }
          >
          </List.Item>
        </div>
      })
      
      }
      </div>
     <div>
       </div>
      <div>
      </div>
    </div>
  );
}

export default connect(({ FMplayer, loading }) => ({
  FMplayer,
  loading: loading.models.FMplayer,
  loadingList: loading.effects['FMplayer/fetchFMplayer']
}))(Page);