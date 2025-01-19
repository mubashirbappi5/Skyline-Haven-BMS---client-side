import React from 'react';
import useAxiosPublic from './../../../../Hooks/useAxiosPublic';

const MakeAnnouncement = () => {
      const axiospublic = useAxiosPublic()
     const handleannounce = (e)=>{
        e.preventDefault()
        const form = e.target 
        const title = form.title.value
        const announce = form.announcement.value
      
        const announcement = {
             title:title,
             notice:announce
        }
        axiospublic.post('/notice',announcement)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                alert('notice sent')
            }
        })
     }
    return (
        <div>
         
<div className=" w-10/12 mx-auto my-7 bg-gradient-to-r from-[#94f08c] to-green-500 text-white py-8 px-10 rounded-lg shadow-lg text-center">
  <h1 className="text-3xl font-bold leading-tight">
    Make a New Announcement
  </h1>
  <p className="mt-4 text-lg font-semibold text-gray-100">
    Share important updates with your Apartment community in just a few steps!
  </p>
  <div className="mt-6 w-32 h-1 bg-white mx-auto rounded-full"></div>
</div>
      
<div className='w-10/12  md:w-7/12 mx-auto bg-gray-50 p-6 rounded-lg shadow-xl'>
  <form onSubmit={handleannounce} className="space-y-6">
    {/* Title Field */}
    <div className="form-control">
      <label className="label text-lg font-semibold text-gray-700">
        <span className="label-text">Title</span>
      </label>
      <input
        name='title'
        type="text"
        placeholder="Enter the announcement title"
        className="input input-bordered w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#94f08c] transition duration-200"
      />
    </div>

    {/* Description Field */}
    <div className="form-control">
      <label className="label text-lg font-semibold text-gray-700">
        <span className="label-text">Description</span>
      </label>
      <textarea
        name='announcement'
        className="textarea textarea-bordered w-full px-4 py-3 rounded-lg border-gray-300 focus:ring-2 focus:ring-[#94f08c] transition duration-200"
        rows={5}
        placeholder="Write your announcement here..."
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="form-control mt-4">
      <input
        type="submit"
        value="Submit"
        className="btn bg-[#94f08c] hover:bg-green-500 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300"
      />
    </div>
  </form>
</div>
            
        </div>
    );
};

export default MakeAnnouncement;