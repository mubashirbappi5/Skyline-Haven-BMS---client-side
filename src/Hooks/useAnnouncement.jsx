import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAnnouncement = () => {
  const axiosPublic = useAxiosPublic()
  const {data:notice=[]}=useQuery({
    queryKey:'notice',
    queryFn:async()=>{
        const res = await axiosPublic.get('/notice')
        return res.data
    }
  })
  return[notice]
};

export default useAnnouncement;