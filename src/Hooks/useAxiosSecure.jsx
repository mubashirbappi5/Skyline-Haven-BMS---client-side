import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
const axiosSecure = axios.create({
    baseURL: 'http://localhost:7000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
  const {  signoutUser} = useAuth();
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        console.log(token)
        if (token) {
          config.headers.authorization = `Bearer ${token}`;
      } else {
          console.warn('No token found in localStorage');
      }
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log('status error in the interceptor', status);
    //     // for 401 or 403 logout the user and move the user to the login
    //     if (status === 401 || status === 403) {
    //       await signoutUser();
    //       navigate('/login');
    //   }
        return Promise.reject(error);
    })
    return axiosSecure
   
};

export default useAxiosSecure;