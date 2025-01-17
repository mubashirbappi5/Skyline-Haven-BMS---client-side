import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCoupon = () => {
    const axiosPublic = useAxiosPublic()
  const {data:coupons=[]}=useQuery({
    queryKey:'coupons',
    queryFn:async()=>{
        const res = await axiosPublic.get('/coupons')
        return res.data
    }
  })
  return[coupons]
};

export default useCoupon;