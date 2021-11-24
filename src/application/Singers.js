import React from 'react';
import {Outlet} from 'react-router-dom'

function Singers() {
  return ( <div>singers<Outlet /></div> );
}

export default React.memo(Singers);