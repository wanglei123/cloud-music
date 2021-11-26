/*
 * @Author: wanglei
 * @Date: 2021-11-23 15:34:36
 * @LastEditTime: 2021-11-26 16:49:27
 * @LastEditors: Please set LastEditors
 * @Description: app 页面
 * @FilePath: /cloud-music/src/App.js
 */
// iconfont
import { IconStyle } from './assets/iconfont/iconfont';
// style
import { GlobalStyle } from './style';
// react
import React from 'react';
// routes
import Routes from './routes/index';
import { HashRouter } from 'react-router-dom';
// redux
import {Provider} from 'react-redux';
import store from './store/index';


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes />
        <GlobalStyle />
        <IconStyle />
      </HashRouter>
    </Provider>
    
  );
}

export default App;
