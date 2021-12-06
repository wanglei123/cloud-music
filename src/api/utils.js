/*
 * @Author: your name
 * @Date: 2021-12-06 15:28:23
 * @LastEditTime: 2021-12-06 15:30:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /cloud-music/src/api/utils.js
 */
export const getCount = (count) => {
  if(count < 0) return;
  if(count < 10000) {
    return count;
  } else if(Math.floor(count/10000) < 10000){
    return Math.floor(count/1000)/10 + '万';
  } else {
    return Math.floor(count/10000000)/10 + '亿' 
  }
}