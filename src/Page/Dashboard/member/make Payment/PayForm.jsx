import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useCoupon from '../../../../Hooks/useCoupon';

const PayForm = () => {
    const { id } = useParams();
    const [coupons] = useCoupon()
    const [discout, setdiscount]=useState()
    const [applycoupons, setapplycoupons]=useState()
    const axiosSecure = useAxiosSecure()
    const  navigate = useNavigate()
    const {data}=useQuery({
      queryKey:'myrequest',
      queryFn:async()=>{
         const res = await axiosSecure.get(`/accept/${user.email}`)

       const allagreemet = res.data
          const agreement =  allagreemet.find(agree=>agree._id===id)
      
         return agreement|| null
      }
    })
    console.log(data)
    const agreement = Array.isArray(data) ? data[0] : data;
    console.log(agreement)

  
   console.log(applycoupons)

   
   const handleapplycoupon = ()=>{
    const coupon = coupons.find(coupon=> coupon.coupon_code === applycoupons )
   if(!coupon){
   
    setdiscount(0)
   
   }
   else{
    setdiscount(coupon.discountPercentage)
   }
  
   }

   const handlepay = (e)=>{
    e.preventDefault();
    const form = e.target
    const apartmentNo = form.apartmentNo.value
    const floorNo = form.floorNo.value
    const Rent = agreement?.rent
    const month = form.month.value
    const discoutprice = discout 
    const blockName = form.block.value
    const email = form.email.value
    const totalPay= Rent - (Rent*parseInt(discoutprice)/100)
    const agreementconfim_id=id
    const payinfo = {
        apartmentNo,
        floorNo,
        Rent,
        month,
        discoutprice,
        blockName,
        email,
       totalPay,
       agreementconfim_id

    }
    console.log(payinfo)
    console.log(discoutprice,month)

    navigate('confimpay', { state:payinfo });
   }


    return (
        <div>

<section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Make Payment
          </h2>

          <form onSubmit={handlepay}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="username"
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                 value={agreement?.userName}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                >
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={agreement?.userEmail}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="password"
                >
                  Floor
                </label>
                <input
                  name="floorNo"
                  type="number"
                  value={agreement?.floorNo}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Block name
                </label>
                <input
                  name="block"
                  type="text"
                  value={agreement?.blockName}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Apartment no
                </label>
                <input
                  name="apartmentNo"
                  type="number"
                  value={agreement?.apartmentNo}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  {" "}
                  Rent
                </label>
                <input
                  name="rent"
                  type="number"
                  value={agreement?.rent }
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
               
                <select
           name='month'
         
          className="border border-gray-300 rounded-md p-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
           Month
          </option>
          <option value="jan">January</option>
          <option value="feb">February</option>
          <option value="mar">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="jun">June</option>
          <option value="jul">July</option>
          <option value="aug">August</option>
          <option value="sep">Septembur</option>
          <option value="oct">October</option>
          <option value="nov">November</option>
          <option value="dec">December</option>
        </select>
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  {" "}
                 Coupon
                </label>
                <input
                  name="rent"
                  type="text"
                onChange=  {(e) => setapplycoupons(e.target.value)}
                  onBlur={handleapplycoupon}
                 placeholder='Apply coupon'
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <input
                type="submit"
                value={"Pay"}
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              />
            </div>
          </form>
        </section> 
            
        </div>
    );
};

export default PayForm;