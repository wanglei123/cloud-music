/*
 * @Author: your name
 * @Date: 2021-12-06 15:19:58
 * @LastEditTime: 2021-12-06 16:40:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /cloud-music/src/components/list
 */

import React from 'react';
import { ListWrapper, ListItem, List } from './style';
import {getCount} from '../../api/utils'

function RecommendList(props) {
  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {props.recommendList.map((item, index) => {
          return (
            <ListItem key={item.id + index}>
              <div className="img_wrapper">
                <div className="decorate"></div>
                <img
                  src={item.picUrl + "?param=300*300"}
                  width="100%"
                  height="100%"
                  alt="music"
                />
                <div class="play_count">
                  <i class="iconfont play">&#xe885;</i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>
              <div className="desc">{item.name}</div>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
}

export default React.memo(RecommendList)
