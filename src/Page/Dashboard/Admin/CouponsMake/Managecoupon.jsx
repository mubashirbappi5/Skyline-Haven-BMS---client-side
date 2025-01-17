import React from 'react';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';

const Managecoupon = () => {
  const axiospublic = useAxiosPublic()
    const handlecoupon = (e)=>{
        e.preventDefault()
        const form = e.target
        const couponCode =form.coupon_code.value
        const discountPars = form.discount.value
        const couponDescription = form.description.value
        console.log(couponCode,discountPars,couponDescription)
       const couponinfo = {
        coupon_code: couponCode,
        discountPercentage:discountPars,
        Description:couponDescription
       }
        axiospublic.post('/coupons',couponinfo)
        .then(res=>{
            console.log(res.data)
            const modal = document.getElementById('my_modal_5')
            modal.close()
           
        })
        form.reset()

      

    }
    return (
        <div>
           <h1 className='text-center'>Manage coupons</h1>
            <section>
   <div className='flex justify-between items-center'>
    <h1>Total Coupons:</h1>
    <button onClick={()=>document.getElementById('my_modal_5').showModal()} className='btn'>Add Coupon</button>
   </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>coupon code</th>
        <th> Discount percentage</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
     
    </tbody>
  </table>
</div>


  {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-center">Add coupon</h3>
    <form onSubmit={handlecoupon}>
    <div className="form-control">
            <label className="label">
            <span className="label-text">Coupon Code</span>
          </label>
            <input name='coupon_code' type="text" placeholder="Type here" className="input input-bordered w-full " />
            </div>
    <div className="form-control">
            <label className="label">
            <span className="label-text">Discount</span>
          </label>
            <input name='discount' type="number" placeholder="discount percentage" className="input input-bordered w-full " />
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea name='description' className="textarea textarea-bordered" rows={2} placeholder="Type announcement.."></textarea>
            </div>
           <div className='form-control mt-4  '>
            <input type="submit" className='btn ' value="Submit" />

           </div>

  
    </form>
    <div className="modal-action flex justify-center  ">
        
        <form method="dialog">
         
          <button className="btn btn-wide ">Close</button>
        </form>
      </div>
   
  </div>
</dialog>


            </section>
        </div>
    );
};

export default Managecoupon;