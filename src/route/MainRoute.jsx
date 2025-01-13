import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from '../Layouts/Root';
import Home from '../Page/Home/Home';
const MainRoute =  createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[{
        index:true,
        element:<Home/>
      },]
    },
  ]);


export default MainRoute;