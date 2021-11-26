/*
 * @Author: wanglei
 * @Date: 2021-11-26 15:20:18
 * @LastEditTime: 2021-11-26 15:33:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /cloud-music/src/application/Home/style.js
 */

import styled from 'styled-components';
import style from '../../assets/global-style'

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["theme-color"]};
  &>span{
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`

// tab栏
export const Tab = styled.div `
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-bewteen;
  background: ${style['theme-color']};
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`

export const TabItem = styled.div `
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`