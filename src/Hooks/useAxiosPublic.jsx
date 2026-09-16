import axios from 'axios';
import React from 'react';
const axiospublic = axios.create({
    baseURL: 'http://localhost:7000',
    
  });
const useAxiosPublic = () => {
    return axiospublic
    
};

export default useAxiosPublic;