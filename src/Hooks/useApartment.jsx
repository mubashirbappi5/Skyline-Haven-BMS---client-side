import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useApartment = () => {
    const axiospublic = useAxiosPublic()
    const { data:apartment=[],refetch } = useQuery({
        queryKey: ['apartment'],
        queryFn:async () =>{
          const res = await axiospublic.get('/apartments')
          return res.data
        }
       
      })
      return [apartment,refetch]
   
};

export default useApartment;