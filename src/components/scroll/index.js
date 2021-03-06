/*
 * @Author: your name
 * @Date: 2021-12-08 16:38:54
 * @LastEditTime : 2022-05-13 11:34:07
 * @LastEditors  : wanglei
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath     : /cloud-music/src/components/scroll/index.js
 */
import React, { useEffect, useState, useRef, forwardRef,useImperativeHandle } from 'react'
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import styled from 'styled-components'

const ScrollContainer = styled.div `
  width: 100%;
  height: 100%;
  overflow: hidden;
`


const Scroll = forwardRef((props, ref) => {
  const [bScroll,setBScroll] = useState();
  const scrollContaninerRef = useRef()
  const {direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop,bounceBottom} = props;
  const {pullUp, pullDown, onScroll} = props;

  useEffect(() => {
    const scroll = new BScroll (scrollContaninerRef.current, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null)
    }
  }, [])

  // 每次重新渲染都要刷新实例，防止无法滑动
  useEffect(() => {
    if (refresh && bScroll){
      bScroll.refresh();
    }
  })

  // 给实例绑定scroll事件
  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on('scroll',(scroll) => {
      onScroll(scroll)
    })
    return () => {
      bScroll.off('scroll')
    }
  }, [onScroll, bScroll])

  // 进行上拉到底的判断，调用上拉刷新函数
  useEffect(() => {
    if(!bScroll || !pullUp) return;
    bScroll.on('scrollEnd',() => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp();
      }
    })
    return () => {
      bScroll.off('scrollEnd')
    }

  }, [pullUp, bScroll])

  // 进行下拉刷新判断，调用下拉刷新的函数
  useEffect( () => {
    if (!bScroll || !pullDown) return;
    bScroll.on('touchEnd', (pos) => {
      // 判断用户的下拉动作
      if (pos.y < 50){
        pullDown()
      }
    });
    return () => {
      bScroll.off('touchEnd')
    }
  }, [pullDown, bScroll])

  useImperativeHandle(ref, () => ({
    refresh(){
      if (bScroll){
        bScroll.refresh();
        bScroll.scrollTo(0,0)
      }
    },
    // 给外界暴露getBScroll 方法，提供 bs实例
    getBScroll(){
      if(bScroll){
        return bScroll;
      }
    }
  }));

  return (
    <ScrollContainer ref={scrollContaninerRef}>
      {props.children}
    </ScrollContainer>
  )


})

Scroll.defaultProps = {
  direction: 'vertical',
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
}

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizental']), // 滚动的方向
  click: true, // 是否支持点击
  refresh: PropTypes.bool, // 是否刷新
  onScroll: PropTypes.func, // 滑动触发的回调函数
  pullUp: PropTypes.func, // 上拉加载逻辑
  pullDown: PropTypes.func, // 下拉加载逻辑
  pullUpLoading: PropTypes.bool, // 是否显示上拉loading动画
  pullDownLoading: PropTypes.bool, // 是否显示下拉loading 动画
  bounceTop: PropTypes.bool, // 是否支持向上吸顶
  bounceBottom: PropTypes.bool // 是否fcrftm下吸底
}

export default Scroll;

