import React, { useEffect, useState } from 'react';
import Card from '../../Shared/Card';
import ReactPaginate from "react-paginate";
const Apartments = () => {
    const [aparts,setaparts] =useState([]) 
    const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const itemsPerPage = 6;
    useEffect(()=>{
      fetch('/public/aprt.json')
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        setaparts(data)
        setPageCount(Math.ceil(data.length / itemsPerPage));
        setCurrentItems(data.slice(0, itemsPerPage));
      })
    },[])
    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % aparts.length;
        
        setCurrentItems(aparts.slice(newOffset, newOffset + itemsPerPage));
      };
    return (
        <div className='min-h-screen'>
            
           
            <div className="bg-white  border rounded-lg p-4 flex flex-wrap justify-between items-center gap-4">
         
      <div className="flex items-center gap-2">
        <label className="text-gray-600 font-semibold">Rent Range:</label>
        <input
          type="number"
          placeholder="Min"
        
          className="border border-gray-300 rounded-md p-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-500">to</span>
        <input
          type="number"
          placeholder="Max"
        
          
          className="border border-gray-300 rounded-md p-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
      
      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Search
    </button>
      </div>
      <h1> Find Your Apartments</h1>
    
     < div className='flex gap-4'>
     <div>
        <select
         
          className="border border-gray-300 rounded-md p-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select Floor
          </option>
          <option value="1">Floor 1</option>
          <option value="2">Floor 2</option>
          <option value="3">Floor 3</option>
          <option value="4">Floor 4</option>
          <option value="5">Floor 5</option>
        </select>
      </div>

      
      <div>
        <select
         
          className="border border-gray-300 rounded-md p-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select Block
          </option>
          <option value="A">Block A</option>
          <option value="B">Block B</option>
          <option value="C">Block C</option>
        </select>
      </div>

     
     </div>
      
      
    </div>

    <section className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-5 gap-4'>
    {
        currentItems.map(apart=><Card apart={apart}></Card>)
    }
    </section>
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName="flex justify-center gap-2 my-4"
        pageClassName="px-4 py-2 border rounded cursor-pointer hover:bg-gray-200"
        activeClassName="bg-blue-500 text-white"
      />
            
        </div>
    );
};

export default Apartments;