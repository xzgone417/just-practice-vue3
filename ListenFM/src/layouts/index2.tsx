import { FC, RefObject, useEffect, useRef, useState } from "react";
import { history } from '@umijs/max';
//一旦使用了@umijs/max之后，那么就是 import all from '@umijs/max'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, NavLink, Outlet } from "@umijs/max";
import styles from '@/layouts/index.less';
import { connect } from '@umijs/max';
import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import Listen from "@/components/Listen";
import Playbar from "@/components/Playbar";

const Layout: FC = (FM:any) => {
// const [whostop, setStop] = useState<boolean>(true);
// const audioRef: RefObject<HTMLAudioElement> = useRef<HTMLAudioElement>(null);
    // 初始直接跳转home
    // useEffect(()=>{
    //     history.push('/home');
    // },[])
    // console.log(FM,"sssssuuuuuuuuuu");
    
    // const changefunc = () => {
    //     // 改变播放/暂停图片,类型断言要放在后面
    //     if (audioRef.current!.paused) {
    //       setStop(true)
    //       audioRef.current!.play();
    //     } else {
    //       setStop(false)
    //       audioRef.current!.pause();
    //     }  
    //   }
    return <div className={styles.layout2}>
        <Outlet/>  
        <Listen></Listen>    
    </div>
}

// export default Layout
export default connect(({ FMplayer, loading }) => ({
    FMplayer,
    //表示user这个model有数据请求行为的时候，loading为true，没有请求的时候为false
    loading: loading.models.FMplayer, 
  }))(Layout);