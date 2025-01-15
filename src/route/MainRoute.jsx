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
import Managemember from '../Page/Dashboard/Admin/Manage/Managemember';
import AdminProfile from '../Page/Dashboard/Admin/Adminprofile/AdminProfile';
import MakeAnnouncement from '../Page/Dashboard/Admin/Make Anoucment/MakeAnnouncement';
import AgreementReq from '../Page/Dashboard/Admin/AgreeRequest/AgreementReq';
import Managecoupon from '../Page/Dashboard/Admin/CouponsMake/Managecoupon';
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
      element:<PrivateRoute><Dashboard/></PrivateRoute>,
      children:[
        {
          index:true,
          element:<AdminProfile/>

        },
        {
          path:'managemember',
          element:<Managemember/>
        },
        {
          path:'makeannounce',
          element:<MakeAnnouncement/>
        },
        {
          path:'agreeRequest',
          element:<AgreementReq/>
        },
        {
          path:'manageCoupon',
          element:<Managecoupon/>
        }
      ]
      
    }
  ]);


export default MainRoute;