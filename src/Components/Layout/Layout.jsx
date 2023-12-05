import React from 'react';
import Headers from '../Headers';

import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <div>
       <Headers/>
       <Outlet/>
    </div>
  )
}

export default Layout
