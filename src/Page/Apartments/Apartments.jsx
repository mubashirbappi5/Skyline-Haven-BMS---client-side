import React, { useEffect, useState } from "react";
import Card from "../../Shared/Card";
import ReactPaginate from "react-paginate";
import useApartment from "../../Hooks/useApartment";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
const Apartments = () => {
  const [apartments] = useApartment();
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState({
    minRent: "",
    maxRent: "",
    floor: "",
    block: "",
  });
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 6;

  const applyFilters = () => {
    let filtered = apartments;

    if (filters.minRent && filters.maxRent) {
      filtered = filtered.filter(
        (apartment) =>
          apartment.rent >= Number(filters.minRent) &&
          apartment.rent <= Number(filters.maxRent)
      );
    }

    if (filters.floor) {
      filtered = filtered.filter(
        (apartment) => apartment.floorNo === parseInt(filters.floor)
      );
    }

    if (filters.block) {
      filtered = filtered.filter(
        (apartment) => apartment.blockName === filters.block
      );
    }

    setFilteredApartments(filtered);
    setPageCount(Math.ceil(filtered.length / itemsPerPage));
    setCurrentItems(filtered.slice(0, itemsPerPage));
    setCurrentPage(0);
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * itemsPerPage;
    setCurrentPage(selectedPage);
    setCurrentItems(filteredApartments.slice(offset, offset + itemsPerPage));
  };

  useEffect(() => {
    if (apartments.length) {
      setFilteredApartments(apartments);
      setPageCount(Math.ceil(apartments.length / itemsPerPage));
      setCurrentItems(apartments.slice(0, itemsPerPage));
      setLoading(false);
    }
  }, [apartments]);

  useEffect(() => {
    applyFilters();
  }, [filters]);
  return (
    <div className="min-h-screen">
      <div className="bg-white border rounded-lg p-4 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-gray-600 font-semibold">Rent Range:</label>
          <input
            type="number"
            placeholder="Min"
            value={filters.minRent}
            onChange={(e) =>
              setFilters({ ...filters, minRent: e.target.value })
            }
            className="border border-gray-300 rounded-md p-2 w-20"
          />
          <span className="text-gray-500">to</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxRent}
            onChange={(e) =>
              setFilters({ ...filters, maxRent: e.target.value })
            }
            className="border border-gray-300 rounded-md p-2 w-20"
          />
          <button
            onClick={applyFilters}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>

        <h1>Find Your Apartments</h1>

        <div className="flex gap-4">
          <select
            value={filters.floor}
            onChange={(e) => setFilters({ ...filters, floor: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-40"
          >
            <option value="">Select Floor</option>
            {[1, 2, 3, 4, 5].map((floor) => (
              <option key={floor} value={floor}>{`Floor ${floor}`}</option>
            ))}
          </select>

          <select
            value={filters.block}
            onChange={(e) => setFilters({ ...filters, block: e.target.value })}
            className="border border-gray-300 rounded-md p-2 w-40"
          >
            <option value="">Select Block</option>
            {["A", "B", "C"].map((block) => (
              <option key={block} value={block}>{`Block ${block}`}</option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="container px-6 py-10 mx-auto animate-pulse">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-64 bg-gray-300 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-5 gap-4">
            {currentItems.map((apartment) => (
              <Card key={apartment.id} apart={apartment} />
            ))}
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <button
                className='  flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-accent  hover:text-white dark:hover:text-gray-200"
                         '
              >
                <RiArrowRightSLine className="text-2xl font-bold" />
              </button>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={
              <button
                className='flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-accent  hover:text-white dark:hover:text-gray-200"
                       '
              >
                <RiArrowLeftSLine className="text-2xl font-bold" />
              </button>
            }
            containerClassName="flex justify-center gap-2 my-4"
            activeClassName="bg-secondary text-white"
            pageClassName="px-4 py-2 border rounded"
          />
        </section>
      )}
    </div>
  );
};

export default Apartments;
