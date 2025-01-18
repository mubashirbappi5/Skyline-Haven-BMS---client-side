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
import MemberProfile from '../Page/Dashboard/member/member Profile/MemberProfile';
import MakePay from '../Page/Dashboard/member/make Payment/MakePay';
import PayHistory from '../Page/Dashboard/member/Pay History/PayHistory';
import MamberAnnounce from '../Page/Dashboard/member/Annnouncement/MamberAnnounce';
import UserProfile from '../Page/Dashboard/user/UserProfile';
import UserAnnouncemet from '../Page/Dashboard/user/UserAnnouncemet';
import PayForm from '../Page/Dashboard/member/make Payment/PayForm';
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
         path:'adminprofile',
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
        },
        {
          path:'memberprofile',
          element:<MemberProfile/>
        },
        {
          path:'makepay',
          element:<MakePay/>,
      
        },
        {
         
          path:'makepay/payform/:id',
           element:<PayForm></PayForm>,
           

       },
        {
          path:'payhistory',
          element:<PayHistory/>
        },
        {
          path:'mamberAnnounce',
          element:<MamberAnnounce/>
        },
        {
          path:'userprofile',
          element:<UserProfile/>
        },
        {
          path:'userannounce',
          element:<UserAnnouncemet/>
        }
      ]
      
    }
  ]);


export default MainRoute;