import React from 'react';
import styles from './index.less';
import { NavBar,Image} from 'antd-mobile';
import { useRequest ,history} from '@umijs/max';
import { queryMycare } from '@/services/cai'
import Playbar from '@/components/Playbar';


export default function Page() {

  const { data, loading } = useRequest(() => queryMycare());
  // console.log(data, loading)

  // console.log(data,"careDIANTAI")
  
  const zhuboJump=(args:any)=>{
    // console.log(args);
    history.push(`/zhubo/${args.id!}`)
    }

  const back = () => {
    history.go(-1)
  }


  return (
    <div>
      <NavBar onBack={back} >我关注的电台</NavBar>
      <div>
        {!loading && data.map((item: any) => (
          <div title={item.title} key={item.id} className={styles.list} onClick={()=>zhuboJump(item)}>
            <Image src={item.cover} className={styles.listimg}></Image>
            <ul>
              <li>{item.title}</li>
              <li>{item.content}</li>
            </ul>
          </div>
        ))}
      </div>

      <Playbar></Playbar>
    </div>
  );
}
