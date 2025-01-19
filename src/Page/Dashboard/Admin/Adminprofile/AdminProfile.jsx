import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const AdminProfile = () => {
    const {user}=useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:report=[]}=useQuery({
      queryKey:'report',
      queryFn:async()=>{
        const res = await axiosSecure.get('/adminreport')
        return res.data
      }
    })
  const  availableApartmets = report.totalApartments - report.totalAgreement;
  const PercentageofAgreement = (report.totalAgreement/report.totalApartments)*100;
  const PercentageofavailableApartment = (availableApartmets/report.totalApartments)*100;
    return (
        <div>
           <section>
            <div className='border flex'>
           <img className='w-60' src={user.photoURL}alt="" />
           <div>
            <h1>{user.displayName}</h1>
            <h5>{user.email}</h5>

           </div>
           

            </div>
            <div>
            <div className="stats stats-vertical lg:stats-horizontal shadow">
  <div className="stat">
    <div className="stat-title">Users</div>
    <div className="stat-value">{report.totalUsers}</div>
  
  </div>

  <div className="stat">
    <div className="stat-title">Member</div>
    <div className="stat-value">{report.totalMembers}</div>
  
  </div>

  <div className="stat">
    <div className="stat-title">Total Apartments</div>
    <div className="stat-value">{report.totalApartments}</div>
   
  </div>
  <div className="stat">
    <div className="stat-title">Total Agreement</div>
    <div className="stat-value">{report.  totalAgreement}</div>
    <div className="stat-desc">↘︎ {report.totalApartments } ({PercentageofAgreement}%)</div>
   
  </div>
  <div className="stat">
    <div className="stat-title">Available Apartmets</div>
    <div className="stat-value">{availableApartmets}</div>
    <div className="stat-desc">↘︎ {report.totalApartments } ({PercentageofavailableApartment}%)</div>
   
  </div>
</div>
            </div>
           </section>
            
        </div>
    );
};

export default AdminProfile;