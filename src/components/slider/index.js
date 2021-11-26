/*
 * @Author: your name
 * @Date: 2021-11-26 16:57:29
 * @LastEditTime: 2021-11-26 17:29:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /cloud-music/src/components/slider/index.js
 */

import React, { useEffect, useState } from 'react';
import { SliderContainer } from './style';
import 'swiper/css/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import Swiper, {Navigation,Pagination} from 'swiper';

function Slider(props) {
  const [sliderSwiper, setSliderSwiper] = useState(null);
  const { bannerList } = props;
  useEffect(() => {
    if (bannerList.length && !sliderSwiper) {
      let newSliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: { el: '.swiper-pagination' },
      });
      setSliderSwiper(newSliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <SliderContainer>
      <div className="swiper-slider" key={sliderSwiper.imageUrl}>
        <div className="slider-nav">
          <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  );
}

export default React.memo(Slider)
