import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../application/Home';
import Recommend from '../application/Recommend';
import Singers from '../application/Singers';
import Rank from '../application/Rank';
import Recommend1 from '../application/Recommend1';

function Routes() {
  const routes = [
    {
      path: '/',
      element: <Home />,
      children: [
        { index:true,
          element: <Recommend />,
        },
        {
          path: '/singers',
          element: <Singers />,
          children: [
            {path: '/singers/recommend1', element: <Recommend1 />}
          ]
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
