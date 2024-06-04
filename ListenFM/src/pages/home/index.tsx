import React, { useEffect, useState } from 'react';
import styles from './index.less'
import Lunbo from '@/components/swiper';
import Classify from '@/components/classify';
import TjList from '@/components/tjlist';
import XlList from '@/components/xllist';
import JxList from '@/components/jxlist';
import { connect, useRequest } from '@umijs/max';
import { queryHomeList } from '@/services/home';
import Playbar from '@/components/Playbar';
// import { TabBar } from 'antd-mobile/es/components/tab-bar/tab-bar';
import TabBar from "@/components/tabbar"
function Page({ home, dispatch, loadingList }) {
  const { data, loading, run } = useRequest(() => queryHomeList())
  useEffect(() => {
    if (!data) return;
    dispatch({
      type: "home/fetchHomeList",
      payload: data
    })


  }, [data])

  // if (data) {
  //   localStorage.setItem("home", JSON.stringify(home))
  //   console.log(localStorage.getItem("home"))
  // }


  return (
    <div className={styles.homepages}>
      <TabBar></TabBar>
      <Lunbo></Lunbo>
      <Classify></Classify>
      <TjList></TjList>
      <XlList></XlList>
      <JxList></JxList>
      <Playbar></Playbar>
    </div>)
}


export default connect(({ home, loading, loadingList }) => ({
  home,
  loading: loading.models.home,
  loadingList: loading.effects['home/fetchHomeList']
}))(Page);