import axios from 'axios';
import React from 'react';
const axiospublic = axios.create({
    baseURL: 'https://skyline-server-nine.vercel.app',
    
  });
const useAxiosPublic = () => {
    return axiospublic
    
};

export default useAxiosPublic;