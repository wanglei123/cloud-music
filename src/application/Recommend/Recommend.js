/*
 * @Author: your name
 * @Date: 2021-11-24 10:15:52
 * @LastEditTime: 2021-11-26 17:21:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /cloud-music/src/application/Recommend/Recommend.js
 */
import React from 'react'

import Slider from '../../components/slider'


function Recommend() {
  // mock数据
  const bannerList = [1,2,3,4].map(item => {
    return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }

  })
  return ( <div>
    <Slider bannerList={bannerList}></Slider>
  </div> );
}

export default React.memo(Recommend);