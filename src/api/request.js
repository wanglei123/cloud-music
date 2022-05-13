/*
 * @Author       : wanglei
 * @Date         : 2022-05-13 14:31:53
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-05-13 14:33:10
 * @FilePath     : /cloud-music/src/api/request.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { axiosInstance } from "./config";
export const getBannerRequest = () => {
  return axiosInstance.get('/banner')
}
export const getRecommendListRequest = () => {
  return axiosInstance.get('/personalized')
}