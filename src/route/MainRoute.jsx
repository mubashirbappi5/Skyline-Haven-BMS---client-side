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
import Confimpay from '../Page/Dashboard/member/make Payment/Confimpay';
import AdminRoute from './AdminRoute';
import MemberRoute from './MemberRoute';
import Error from '../Page/Error';
import ContactPage from '../Page/ContactPage';
import AboutPage from '../Page/AboutPage';
const MainRoute =  createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<Error/>,
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
    
        {
        path:'/contact',
        element:<ContactPage/>
      },
    
        {
        path:'/about',
        element:<AboutPage/>
      },
    
    
    ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard/></PrivateRoute>,
      children:[
       
        {
         path:'adminprofile',
          element:<AdminRoute><PrivateRoute><AdminProfile/></PrivateRoute></AdminRoute>
        },
        {
          path:'managemember',
          element:<AdminRoute><PrivateRoute><Managemember/></PrivateRoute></AdminRoute>
        },
        {
          path:'makeannounce',
          element:<AdminRoute><PrivateRoute><MakeAnnouncement/></PrivateRoute></AdminRoute>
        },
        {
          path:'agreeRequest',
          element:<AdminRoute><PrivateRoute><AgreementReq/></PrivateRoute></AdminRoute>
        },
        {
          path:'manageCoupon',
          element:<AdminRoute><PrivateRoute><Managecoupon/></PrivateRoute></AdminRoute>
        },
        {
          path:'memberprofile',
          element:<MemberRoute><PrivateRoute><MemberProfile/></PrivateRoute></MemberRoute>
        },
        {
          path:'makepay',
          element:<MemberRoute><PrivateRoute><MakePay/></PrivateRoute></MemberRoute>
      
        },
        {
         
          path:'makepay/payform/:id',
           element:<MemberRoute><PrivateRoute><PayForm></PayForm></PrivateRoute></MemberRoute>,
           

       },
       {
        path:'makepay/payform/:id/confimpay',
        element:<MemberRoute><PrivateRoute><Confimpay/></PrivateRoute></MemberRoute>
       },
        {
          path:'payhistory',
          element:<MemberRoute><PrivateRoute><PayHistory/></PrivateRoute></MemberRoute>
        },
        {
          path:'mamberAnnounce',
          element:<MemberRoute><PrivateRoute><MamberAnnounce/></PrivateRoute></MemberRoute>
        },
        {
          path:'userprofile',
          element:<PrivateRoute><UserProfile/></PrivateRoute>
        },
        {
          path:'userannounce',
          element:<PrivateRoute><UserAnnouncemet/></PrivateRoute>
        }
      ]
      
    }
  ]);


export default MainRoute;