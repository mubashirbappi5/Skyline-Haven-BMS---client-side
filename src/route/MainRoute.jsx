import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from '../Layouts/Root';
import Home from '../Page/Home/Home';
import Login from '../Page/Auth/Login/Login';
import Apartments from '../Page/Apartments/Apartments';
import Dashboard from '../Page/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
const MainRoute =  createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
        index:true,
        element:<Home/>
      },
        {
        path:'/login',
        element:<Login/>
      },
        {
        path:'/apartments',
        element:<Apartments/>
      },
    
    
    ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard/></PrivateRoute>
    }
  ]);


export default MainRoute;