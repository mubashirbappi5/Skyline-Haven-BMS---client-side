import React from 'react';
import useAxiosSecure from './../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Managemember = () => {
    const axiosSecure = useAxiosSecure();
    const {data:users=[],refetch}=useQuery({
        queryKey:'users',
        queryFn:async()=>{
            const res = await axiosSecure.get('/users')
            const alluser = res.data
          const members =  alluser.filter(user=>user.role==='member')
         return members
        }
    })
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user,idx)=><tr>
                <th>{idx+1}</th>
                <td>{user.userName}</td>
                <td>{user.userEmail}</td>
                <td><button className="btn">Remove</button></td>
              </tr>)
        }
     
      
     
     
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Managemember;