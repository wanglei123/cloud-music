/*
 * @Author: your name
 * @Date: 2021-11-24 09:59:10
 * @LastEditTime: 2021-11-26 16:54:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /cloud-music/src/routes/index.js
 */
import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../application/Home/Home';
import Recommend from '../application/Recommend/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';

function Routes() {
  const routes = [
    {
      path: '/',
      element: <Home />,
      children: [
        { index:true,
          path: '/recommend',
          element: <Recommend />,
        },
        {
          path: '/singers',
          element: <Singers />,
        },
        {
          path: '/rank',
          element: <Rank />,
        },
      ],
    },
  ];
  const element = useRoutes(routes)
  return (<>{element}</>)
}

export default Routes;
