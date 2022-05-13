/*
 * @Author: your name
 * @Date: 2021-11-24 10:15:52
 * @LastEditTime : 2022-05-13 14:16:01
 * @LastEditors  : wanglei
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath     : /cloud-music/src/application/Recommend/Recommend.js
 */
import React from 'react';

import Slider from '../../components/slider';
import RecommendList from '../../components/RecommendList';
import Scroll from '../../components/scroll';
import styled from 'styled-components';

const Content = styled.div `
  position: fixed;
  top: 90px;
  bottom: 0px;
  width: 100%;
`

function Recommend() {
  // mock数据
  const bannerList = [1, 2, 3, 4].map((item) => {
    return {
      imageUrl:
        'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg',
    };
  });

  const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
    return {
      id: 1,
      picUrl:
        'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
      playCount: 17171122,
      name: '朴树、许巍、李健、郑钧、老狼、赵雷',
    };
  });
  return (
    <Content>
      <Scroll>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
    </Content>
  );
}

export default React.memo(Recommend);
