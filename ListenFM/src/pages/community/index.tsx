/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React,{useState,useEffect} from 'react';
import styles from './index.less';
import imgURL from '../../static/fabu.png'
import {useRequest} from '@umijs/max'
import { queryUserList } from '@/services/community';
import { useNavigate,history} from '@umijs/max';
import  { UserOutlined, LaptopOutlined, NotificationOutlined, LeftOutlined, ConsoleSqlOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import {Button, Input, List} from 'antd-mobile';


export default function Page() {
  //tab切换
  const { TabPane } = Tabs;
  const onChange = (key: string) => {
    console.log(key);
  };
  //跳转
  const navigate=useNavigate();
  // const [page,setPage]=useState(0)
  //发送请求
  const {data,loading}=useRequest(()=>queryUserList({
    flag:0,
    offset:0,
    limit:10,
    type:1,
    key:"046b6a2a43dc6ff6e770255f57328f89" 
  }));
  
  const {data:data2,loading:loading2}=useRequest(()=>queryUserList({
    flag:0,
    offset:10,
    limit:10,
    type:1,
    key:"046b6a2a43dc6ff6e770255f57328f89" 
  }));
 const[n,setN]=useState(10)

 const [list, setList] = useState([{name:'真不错！'}]);
 const [value, setValue] = useState('');
 const removeTodo = index => {
   const todoList = [...list];
   todoList.splice(index,1);
   setList(todoList);
 }
 
 const publish = () => {
   setList(list.concat([{name:value}]));
   setValue('');
 }
//  useEffect(()=>{
//    console.log('list变化了');
//  }, [list])
function backClick(){
  navigate('/')
}
function handleClick(id) {
  console.log(id)
navigate(`/community/${id}/comment`)
}
  return (
    <div>
         <h1 className={styles.h}>
         <LeftOutlined className={styles.left}  onClick={()=>backClick()}/>
          心理社区</h1>
        <div className={styles.tabs}>
        <Tabs defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="精华" key="1"  id="jinhua">
    <div>
      {!loading && data.map(item=>(
        // <img src= {require('{item.user.avatar}')} />
       <div className={styles.box}  key={item.id} >
        <div className={styles.top}>
        <img src={item.user.avatar} alt="" />
         <span className={styles.name}>{item.user.nickname}</span>
         <span className={styles.time}>最近更新{item.updated} &nbsp;&nbsp;&nbsp;创建{item.created}</span>
        </div>
    <div>
     <h1> {item.title}</h1>
      </div>
    <div className={styles.content}>{item.content}</div>
   
    <div className={styles.comment}> 
       <img onClick={()=>{handleClick(item.id)}} src={require("@/assets/pinlun.png")} style={{marginLeft:"10px"}} alt="" />
       
       <span>{item.commentnum}</span>
       <img src={require("@/assets/zan.png")} alt="" className={styles.zan} onClick={()=>{setN(n+1||n-1)}}></img> {n}
       <div style={{marginTop:"15px"}}>
     
     {list.map((item,index) => <div key={index} style={{marginLeft:"10px"}}>{item.name} <img style={{marginLeft:"50px"}} src={require('@/assets/delete.png')} onClick={() => removeTodo(index)}/></div>)}
   </div>
       {/* <textarea className={styles.txt} id="lang" />
     <button  onClick={()=>{handleSubmit()}} id="btn">提交评论</button>
     <div className="div1" id="div1"></div> */}
       </div>
       <div style={{margin: "0 30px"}}>
      <List style={{margin:'10px auto'}}>
        <Input value={value} placeholder="请输入评论内容" onChange={value => setValue(value)} style={{display:"block",width:"200px",height:"40px",lineHeight:"60px", margin:"0 auto",fontSize:"14px"}}/> 
     <br />
      </List>
      <button  onClick={()=>publish()}  style={{display:"block", margin:"0 auto"}}>提交</button>
     
    </div>
       {/* <div  style={{float:"right",color:"orange",marginTop:"100px"}}>详情...</div> */}
    
    
       </div>
      ))}

{/* {list.map((item,index) => <div key={index}>{item.name} <img style={{marginLeft:"20px"}} src={require('@/assets/delete.png')} onClick={() => removeTodo(index)}/></div>)} */}
      </div>
   
    </TabPane>
    <TabPane tab="热门" key="2" id="remen">
    <div>
    {/* !loading2 && */}
      { !loading2 &&data2.map(item=>(
        // <img src= {require('{item.user.avatar}')} />
       <div className={styles.box}  key={item.id} >
        <div className={styles.top}>
        <img src={item.user.avatar} alt="" />
         <span className={styles.name}>{item.user.nickname}</span>
         <span className={styles.time}>最近更新{item.updated} &nbsp;&nbsp;&nbsp;创建{item.created}</span>
        </div>
    <div>
     <h1> {item.title}</h1>
      </div>
    <div className={styles.content}>{item.content}</div>
   
    <div className={styles.comment}> 
       <img onClick={()=>{handleClick(item.id)}} src={require("@/assets/pinlun.png")} style={{marginLeft:"10px"}} alt="" />
       
       <span>{item.commentnum}</span>
       <img src={require("@/assets/zan.png")} alt=""  style={{marginLeft:"30px",marginTop:"-2px"}} onClick={()=>{setN(n+1||n-1)}}></img> {n}
       <div style={{marginTop:"15px"}}>
     
     {list.map((item,index) => <div key={index} style={{marginLeft:"20px"}}>{item.name} <img style={{marginLeft:"20px"}} src={require('@/assets/delete.png')} onClick={() => removeTodo(index)}/></div>)}
   </div>
      
       </div>
       <div style={{margin: "0 30px"}}>
      <List style={{margin:'10px auto'}}>
        <Input value={value} placeholder="请输入评论内容" onChange={value => setValue(value)} style={{display:"block",width:"200px",height:"40px",lineHeight:"60px", margin:"0 auto"}}/> 
     <br />
      </List>
      <button  onClick={()=> publish()}  style={{display:"block", margin:"0 auto"}}>评论</button>
     
    </div>
     
    
    
       </div>
      ))}


      </div>
   
    </TabPane>
  </Tabs>  
     
        </div>
     
   
    </div>
  );
}



