import { IconStyle } from './assets/iconfont/iconfont';
import { GlocalStyle } from './style';
import React from 'react';
import Routes from './routes/index';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes />
      <GlocalStyle />
      <IconStyle />
    </HashRouter>
  );
}

export default App;
