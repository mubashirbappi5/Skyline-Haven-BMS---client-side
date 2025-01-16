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
          <div className='w-7/12 mx-auto'>
            <form onSubmit={handleannounce}>
            <div className="form-control">
            <label className="label">
            <span className="label-text">Title</span>
          </label>
            <input name='title' type="text" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            <div className="form-control">
            <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea name='announcement' className="textarea textarea-bordered" rows={5} placeholder="Type announcement.."></textarea>
            </div>
           <div className='form-control mt-4'>
            <input type="submit" className='btn' value="Submit" />

           </div>

            </form>
        
          </div>
            
        </div>
    );
};

export default MakeAnnouncement;