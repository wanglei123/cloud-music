/*
 * @Author       : wanglei
 * @Date         : 2022-05-13 14:28:11
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-05-13 14:31:40
 * @FilePath     : /cloud-music/src/api/config.js
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

export const baseUrl = 'http://localhost'

const axiosInstance = axios.create({baseURL: baseUrl})

axiosInstance.interceptors.response.use(res => res.data,err => {
  console.log(err, '网络错误')
})

export {
  axiosInstance
}