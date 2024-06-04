import React, { useState, useEffect } from 'react';
import styles from './index.less';
import imgURL from '../../static/fabu.png'
import { useRequest } from '@umijs/max'
import { queryUserList } from '@/services/community';
import { useNavigate } from '@umijs/max';
import { UserOutlined, LaptopOutlined, NotificationOutlined, LeftOutlined, ConsoleSqlOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { Button, Input, List } from 'antd-mobile';
import { useParams } from '@umijs/max';
import { useSearchParams } from '@umijs/max';
export default function Page() {
    const [searchParams, setSearchParams] = useSearchParams()
    //    const idment2=parseInt(idment.id!)
    console.log(searchParams.get("id"), "ssssssssssssssssssssssssssssssssssssssssssss", searchParams.get("diantaiId"),);
    const id1 = parseInt(searchParams.get("id")!)
    const diantaiID = parseInt(searchParams.get("diantaiId")!)
    console.log(id1,"xxxxx,",diantaiID);
    
    //跳转
    const navigate = useNavigate();
    // const [page,setPage]=useState(0)
    //发送请求
    // const {data,loading}=useRequest({
    //     url:"/fm/comment-latest-list.json",
    //     method:"GET",
    //     params:{ 
    //     offset : 0,
    //     broadcast_id  :"99389004",
    //     limit:10,
    //     key:"046b6a2a43dc6ff6e770255f57328f89"}
    // });
    // console.log(data)
    const [page, setPage] = useState(0)
    let [jx, setJx] = useState(null);
    let [jxData, setJxData] = useState([] as any)
    // //请求参数
    let obj = {
        offset: page,
        broadcast_id: id1,
        limit: 10,
        key: "046b6a2a43dc6ff6e770255f57328f89"
    }
    // //发送请求
    const { data, run, refresh, loading, cancel } = useRequest({
        url: "/fm/comment-latest-list.json",
        method: "GET",
        params: obj
    }, {
        manual: true,
        loadingDelay: 200,
        refreshDeps: [page]
    })

    //post请求
    // const {data:data2,loading:loading2}=useRequest({
    //     url:"/fm/diantai-comment.json",
    //     methods:"POST",
    //     data:{
    //         diantai_id : 921,
    //         reply_object_id :3009990,
    //         key :"046b6a2a43dc6ff6e770255f57328f89",
    //         content :"好",
    //         token:"b845588abcf58804c99d289584cd6068"
    //     },
    //     headers:{
    //         'Content-Type': "application/json"
    //     }

    // })

    // console.log(data2)
    // //上拉加载
    // 上拉加载
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
        jx = data.map((item, index) => (<div key={jxData.length!-index}>
            <div className={styles.box} >
                <img src={item.user.avatar} alt="" className={styles.avatar} />
                <div className={styles.right}>
                    <div className={styles.nickname}>{item.user.nickname}</div>
                    <div className={styles.created_str}>{item.created_str}</div>
                </div>
                <div className={styles.content}>{item.content}</div>
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

    //
    const { data: data2, loading: loading2 } = useRequest({
        url: "/fm/diantai-detai.json",
        method: "GET",
        params: {
            id: diantaiID,
            key: "046b6a2a43dc6ff6e770255f57328f89"
        }
    })
    // console.log(data2,"yyyyyyyyyyyyyyyyyyyyy11111111111")
    //
    const [value, setValue] = useState('');
    const [listdata, setListData] = useState([{ avatar: "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png!80", nickname: "杨婷婷", time: "2022年8月8日", name: '' }])
    //  const removeTodo = index => {
    //    const todoList = [...list];
    //    todoList.splice(index,1);
    //    setList(todoList);
    //  }

    const publish = () => {
        setListData(listdata.concat([{ name: value, nickname: value, avatar: value, time: value }]));
        setValue('');
    }
    useEffect(() => {
        console.log('list变化了');
    }, [value])





    return (
        // onTouchMove={() => onPullData()} onScroll={() => onPullData()}
        <div className={styles.container}  >
            <h1 className={styles.title}>评论(10)</h1>

            {/* <div>{!loading2&&data2.map(item=>{
            <li>{item.content}------{item.created}</li>
          
          })}</div> */}
            <div className={styles.total}>
                <div className={styles.top}>
                    <img src={(!loading2 && data2).cover} alt="" />
                    <span className={styles.timu}>{(!loading2 && data2).content}</span>
                    <div className={styles.name}> {(!loading2 && data2).title}</div>

                </div>
                <div className={styles.tit}>节目评论</div>
                <div className={styles.comments} onTouchMove={() => onPullData()} onScroll={() => onPullData()}>{jxData}</div>

            </div>


            <div className={styles.bot}>
                <div className={styles.add}>
                    {listdata.map((item, index) => (
                        <div key={index}>
                            <div className={styles.con}>
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className={styles.bottomBar}>
                <div className={styles.mid}>
                    <Input type="text" value={value} placeholder='写下你的心情和故事' onChange={value => setValue(value)} />
                    <img src={require("@/assets/fa.png")} alt="" onClick={() => publish()} />
                </div>
            </div>
        </div>
    )
}
