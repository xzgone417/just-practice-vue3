import { FC } from 'react'
import { SearchOutline } from 'antd-mobile-icons'
import { NavLink, Outlet, history } from '@umijs/max';
import styles from "./index.less"
const TabBar: FC = () => {
  const active = ({ isActive }) => isActive ? styles.bar + ' ' + styles.active : styles.bar
  return (
    <div>
      <div className={styles.tabbar}>
        <NavLink to="/find" className={active}>发现</NavLink>
        <NavLink to="/" className={active}>首页</NavLink>
        <NavLink to="/my" className={active}>我的</NavLink>
        <SearchOutline className={styles.icon} onClick={() => { history.push("/search") }} />
      </div>
      <div className={styles.box}></div>
      <Outlet />
    </div>
  )
}

export default TabBar;