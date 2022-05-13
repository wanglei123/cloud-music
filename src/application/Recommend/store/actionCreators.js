/*
 * @Author       : wanglei
 * @Date         : 2022-05-13 14:33:53
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-05-13 14:47:50
 * @FilePath     : /cloud-music/src/application/Recommend/store/actionCreators.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as actionTypes from './constants'
import { fromJS } from 'immutable'
import {getBannerRequest, getRecommendListRequest} from '../../../api/request'

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
})

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      dispatch(changeBannerList(data.banners))
    }).catch(() => {
      console.log('轮播图数据传输错误')
    })
  }
}

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest.then(data => {
      dispatch(changeRecommendList(data.result))
    }).catch(() => {
      console.log('推荐歌单传输错误')
    })
  }
}