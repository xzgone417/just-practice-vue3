import React from 'react'
import { useRequest, connect } from '@umijs/max';
import { Swiper } from 'antd-mobile'
import styles from "./index.less";
const Lunbo = ({ home, loadingList }) => {
  let { data, loading } = useRequest("/fm/home-list.json")
  if (data) {
    const { category, diantai, hotfm, newfm, newlesson, tuijian } = data;
    const lunbo = tuijian.map((item, index) => (
      <Swiper.Item key={index} >
        <img className={styles.lunbo} src={item.cover} alt="" />
      </Swiper.Item>
    ))
    return (
      <div>
        <Swiper loop>{lunbo}</Swiper>
      </div>
    );
  } else {
    return (
      <div className={styles.lunbo}>
        loading...
      </div>
    )
  }
}

export default connect(({ home, loading }) => ({
  home,
  loading: loading.models.home,
  loadingList: loading.effects['home/fetchHomeList']
}))(Lunbo);

