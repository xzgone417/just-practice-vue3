import React, { useEffect, useState } from 'react';
import { run, useRequest,history } from '@umijs/max';
import { getFMList } from '@/services/more';
import { List, Switch, Image, NavBar, InfiniteScroll } from 'antd-mobile'
import style from './index.less'
import { EyeFill, StarFill } from 'antd-mobile-icons'
import { connect } from '@umijs/max';

function Page(FM:any) {
    const [offset, setOffset] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const [list, setlist] = useState([] as any)
    const [myquery, setquery] = useState(0)  // 路由跳转判断

    const { data, loading, run } = useRequest(() => getFMList({
        offset: offset,
        limit: "10",
        key: "046b6a2a43dc6ff6e770255f57328f89"
    }), {
        manual: true,
        refreshDeps: [offset]
    });



    const loadMore = async () => {
        setOffset(offset + 1)
        if (offset > 1000) {
            return setHasMore(false);
        }
        await run();
    }

    useEffect(() => {
        if (!data)
            return setlist[list]
        setlist([...list, ...data])

    }, [loading])


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


    return (
        <div className={style.container}>
      <div onClick={history.back}><NavBar className={style.topbar} ></NavBar></div>
            <h1>更多FM</h1>
            <List>
                <div className={style.bgc}>
                    {list && list.map((item: any, index: number) => (
                        <div key={index} onClick={()=>nowFM(item)}>
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
                                        <div className={style.autho1}><h4>{item.title}</h4></div>
                                        <div className={style.autho2}><h4>{item.speak}</h4></div>
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
                    ))}
                </div>
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
    );
}

export default connect(({ FMplayer, loading }) => ({
    FMplayer,
    loading: loading.models.FMplayer,
    loadingList: loading.effects['FMplayer/fetchFMplayer']
  }))(Page);
