/*
 * @Author: your name
 * @Date: 2021-11-26 16:44:31
 * @LastEditTime: 2021-11-26 16:47:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /cloud-music/src/store/index.js
 */

import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;