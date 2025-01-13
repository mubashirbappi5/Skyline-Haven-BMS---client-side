import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from '../Layouts/Root';
const MainRoute =  createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
  ]);


export default MainRoute;