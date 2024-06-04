import React, { FC, useState } from "react";
// import { List, Image, InfiniteScroll, PullToRefresh } from 'antd-mobile';
import { Image, List,InfiniteScroll, PullToRefresh} from 'antd-mobile'
import styles from './index.module.scss'


const TList: FC<More_keProItemIProps>= (props) => {
    return <>
        <PullToRefresh
            onRefresh={async () => props.reload()}
        >
            <List header='猜你喜欢'>
                {
                    props.list.map(item => <List.Item
                        key={item.id}
                        prefix={
                            <Image
                                src={item.cover}
                                width={94}
                                height={74}
                                fit="cover"
                                style={{ borderRadius: 4 }}
                            />
                        }
                        description={
                            <div>
                                {item.title}
                                <div className={styles.price}>{"￥" + item.id}</div>
                            </div>
                        }
                        extra={
                            <div className={styles.extra}>
                                <p>{item.favnum}</p>
                                <p>已售{item.viewnum}</p>
                            </div>
                        }
                    >
                        {item.title}
                    </List.Item>)
                }
            </List>
            <InfiniteScroll loadMore={() => props.getmore()} hasMore={props.hasmore} />
        </PullToRefresh>
    </>


}

export default TList;