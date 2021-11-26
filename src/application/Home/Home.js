/*
 * @Author: your name
 * @Date: 2021-11-24 10:02:10
 * @LastEditTime: 2021-11-26 16:32:31
 * @LastEditors: Please set LastEditors
 * @Description: Home组件
 * @FilePath: /cloud-music/src/application/Home/Home.js
 */
import React from 'react';
import {Top,Tab, TabItem} from './style'
import {Outlet,NavLink} from 'react-router-dom'


function Home(props) {
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c</span>
        <span className="title">WebApp</span>
        <span className="iconfont search">&#xe62b</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" activeClassName="selected">
          <TabItem><span>推荐</span></TabItem>
        </NavLink>
        <NavLink to="/singers" activeClassName="selected">
          <TabItem><span>歌手</span></TabItem>
        </NavLink>
        <NavLink to="/rank" activeClassName="selected">
          <TabItem><span>排行榜</span></TabItem>
        </NavLink>
      </Tab>
      <Outlet />
    </div>
  );
}

export default React.memo(Home);
