import React, { useEffect, useState } from 'react';
import Card from '../../Shared/Card';
import ReactPaginate from "react-paginate";
import useApartment from '../../Hooks/useApartment';
const Apartments = () => {
  const [apartment]=useApartment()
    const [aparts,setaparts] =useState([]) 
    const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [minRent, setMinRent] = useState('');
  const [maxRent, setMaxRent] = useState('');
  const [floor, setFloor] = useState('');
  const [block, setBlock] = useState('');
  const[searchitem,setsearchitem]=useState([])
  const [filteredAparts, setFilteredAparts] = useState([]);
  const [loading,setloading]=useState(true)

  const itemsPerPage = 6;
    
      
      
  useEffect(() => {
       
       if(apartment){
        setaparts(apartment)
        setFilteredAparts(apartment);
        setPageCount(Math.ceil(apartment.length / itemsPerPage));
        setCurrentItems(apartment.slice(0, itemsPerPage));
        setloading(false)
       }
      }, [apartment]);
    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % aparts.length;
        
        setCurrentItems(aparts.slice(newOffset, newOffset + itemsPerPage));
      };
      const handleSearch = () => {
        if (minRent !== '' && maxRent !== '') {
          const filteredAparts = aparts.filter(
            (apart) => apart.rent >= Number(minRent) && apart.rent <= Number(maxRent)
          );
          setsearchitem(filteredAparts)
          setPageCount(Math.ceil(searchitem.length / itemsPerPage));
          setCurrentItems(searchitem.slice(0, itemsPerPage));
        }
      };


      const filterByFloor = (e) => {
        console.log(e)
        
        setFloor(e);
        const result = aparts.filter(apart => apart.floorNo === parseInt(e));
        console.log(result)
        setFilteredAparts(result);
        setPageCount(Math.ceil(result.length / itemsPerPage));
        setCurrentItems(result.slice(0, itemsPerPage));
      };
    
      const filterByBlock = (selectedBlock) => {
        setBlock(selectedBlock);
        const result = aparts.filter(apart => apart.blockName === selectedBlock);
        setFilteredAparts(result);
        setPageCount(Math.ceil(result.length / itemsPerPage));
        setCurrentItems(result.slice(0, itemsPerPage));
      };
    return (
        <div className='min-h-screen'>
            
           
            <div className="bg-white  border rounded-lg p-4 flex flex-wrap justify-between items-center gap-4">
         
      <div className="flex items-center gap-2">
        <label className="text-gray-600 font-semibold">Rent Range:</label>
        <input
          type="number"
          placeholder="Min"
          onChange={(e) => setMinRent(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="text-gray-500">to</span>
        <input
          type="number"
          placeholder="Max"
          onChange={(e) => setMaxRent(e.target.value)}
          
          className="border border-gray-300 rounded-md p-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
      onClick={handleSearch}
      className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Search
    </button>
      </div>
      <h1> Find Your Apartments</h1>
    
     < div className='flex gap-4'>
     <div>
        <select
         value={floor} 
            onChange={(e) => filterByFloor(e.target.value)}
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
        value={block}
           onChange={(e) => filterByBlock(e.target.value)}
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

   {
    loading?<section className="bg-white dark:bg-gray-900">
    <div className="container px-6 pb-10 mx-auto animate-pulse">
      

      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="w-full">
            <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
            <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
            <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          </div>
        ))}
      </div>
    </div>
  </section>:<section>
    <section className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-5 gap-4'>
     {
         currentItems.map(apart=><Card apart={apart}></Card>)
     }
     </section>
     <ReactPaginate
         breakLabel="..."
         nextLabel={<button
             className={`${loading&& 'hidden'}   flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-accent  hover:text-white dark:hover:text-gray-200"
             `}>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="w-5 h-5"
               viewBox="0 0 20 20"
               fill="currentColor"
             >
               <path
                 fillRule="evenodd"
                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                 clipRule="evenodd"
               />
             </svg>
           </button>}
         onPageChange={handlePageClick}
         pageRangeDisplayed={5}
         pageCount={pageCount}
         previousLabel={<button
             className={`flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-accent  hover:text-white dark:hover:text-gray-200"
           
             ${loading&& 'hidden'}`}>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="w-5 h-5"
               viewBox="0 0 20 20"
               fill="currentColor"
             >
               <path
                 fillRule="evenodd"
                 d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                 clipRule="evenodd"
               />
             </svg>
           </button>
           }
         containerClassName="flex justify-center gap-2 my-4"
         pageClassName="px-4 py-2 border rounded cursor-pointer hover:bg-gray-200"
         activeClassName="bg-secondary  text-white"
       />
    </section>
   }
            
        </div>
    );
};

export default Apartments;