import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMember = () => {
    const {user}=useAuth()
    const axiossecure = useAxiosSecure()
    const{data:isMember} = useQuery({
        queryKey:[user?.email,'isMember'],
        queryFn :async()=>{
             const res = await axiossecure.get(`/users/member/${user.email}`)
             console.log(res.data);
             return res.data?.member;
        }
    })
    return[isMember]
};

export default useMember;