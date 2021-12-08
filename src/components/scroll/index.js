/*
 * @Author: your name
 * @Date: 2021-12-08 16:38:54
 * @LastEditTime: 2021-12-08 17:25:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /cloud-music/src/components/scroll/index.js
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
      scrollX: direction = 'horizental',
      scrollY: direction = 'vertical',
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

  useEffect(() => {
    if (refresh && bScroll){
      bScroll.refresh();
    }
  })

  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on('scroll',(scroll) => {
      onScroll(scroll)
    })
    return () => {
      bScroll.off('scroll')
    }
  }, [onScroll, bScroll])

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
  direction: PropTypes.oneOf(['vertical', 'horizental']),
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  pullUp: PropTypes.func,
  pullDown: PropTypes.func,
  pullUpLoading: PropTypes.bool,
  pullDownLoading: PropTypes.bool,
  bounceTop: PropTypes.bool,
  bounceBottom: PropTypes.bool
}

export default Scroll;
