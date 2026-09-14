import React, { useEffect, useState } from "react";
import Card from "../../Shared/Card";
import ReactPaginate from "react-paginate";
import useApartment from "../../Hooks/useApartment";
import { RiArrowLeftSLine, RiArrowRightSLine, RiSearchLine, RiFilter3Line } from "react-icons/ri";

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
    <div className="w-full bg-white relative overflow-hidden pb-32 pt-24">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
      
      {/* Page Header & Filter Section */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-20">
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-12 mb-16">
          <span className="text-primary font-bold tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full inline-block">Properties</span>
          <h1 className="text-5xl md:text-7xl font-black text-text leading-tight">
            Discover Your <span className="text-primary">Next Home.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed font-light mx-auto max-w-2xl">
            Browse our exclusive collection of luxury apartments. Find the perfect space that matches your lifestyle.
          </p>
        </div>

        {/* Premium Filter Bar */}
        <div className="bg-white/80 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-6 items-center justify-between transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 w-full lg:w-auto">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl">
                    <RiFilter3Line />
                </div>
                <h3 className="text-xl font-bold text-text whitespace-nowrap">Filter Search</h3>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-auto gap-4 items-center flex-grow justify-center">
                <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-2 border border-gray-100 flex-grow lg:flex-grow-0">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-3">Rent</span>
                    <input
                        type="number"
                        placeholder="Min"
                        value={filters.minRent}
                        onChange={(e) => setFilters({ ...filters, minRent: e.target.value })}
                        className="w-20 bg-transparent border-none focus:ring-0 text-sm font-semibold text-text outline-none text-center"
                    />
                    <span className="text-gray-300">-</span>
                    <input
                        type="number"
                        placeholder="Max"
                        value={filters.maxRent}
                        onChange={(e) => setFilters({ ...filters, maxRent: e.target.value })}
                        className="w-20 bg-transparent border-none focus:ring-0 text-sm font-semibold text-text outline-none text-center pr-3"
                    />
                </div>

                <div className="flex gap-4 w-full lg:w-auto">
                    <select
                        value={filters.floor}
                        onChange={(e) => setFilters({ ...filters, floor: e.target.value })}
                        className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm font-bold text-gray-600 outline-none focus:ring-2 focus:ring-primary w-full lg:w-40 cursor-pointer appearance-none"
                    >
                        <option value="">Any Floor</option>
                        {[1, 2, 3, 4, 5].map((floor) => (
                        <option key={floor} value={floor}>{`Floor ${floor}`}</option>
                        ))}
                    </select>

                    <select
                        value={filters.block}
                        onChange={(e) => setFilters({ ...filters, block: e.target.value })}
                        className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm font-bold text-gray-600 outline-none focus:ring-2 focus:ring-primary w-full lg:w-40 cursor-pointer appearance-none"
                    >
                        <option value="">Any Block</option>
                        {["A", "B", "C"].map((block) => (
                        <option key={block} value={block}>{`Block ${block}`}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                onClick={applyFilters}
                className="w-full lg:w-auto bg-text text-white px-8 py-4 rounded-xl font-bold tracking-widest uppercase text-sm hover:bg-primary shadow-xl hover:shadow-primary/30 transform transition-all duration-300 flex items-center justify-center gap-2"
            >
                <RiSearchLine className="text-lg" />
                Search
            </button>
        </div>
      </div>

      {/* Apartment Grid */}
      <div className="container mx-auto px-6 md:px-12">
        {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
                {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="w-full h-[500px] bg-gray-200 rounded-[2rem]"></div>
                ))}
            </div>
        ) : (
            <>
                {currentItems.length > 0 ? (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {currentItems.map((apartment) => (
                        <div key={apartment.id} className="break-inside-avoid">
                            <Card apart={apartment} />
                        </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-400">No apartments found matching your criteria.</h3>
                        <p className="text-gray-400 mt-2">Try adjusting your filters to see more results.</p>
                    </div>
                )}

                {/* Styled Pagination */}
                {pageCount > 1 && (
                    <div className="mt-20">
                        <ReactPaginate
                            breakLabel={<span className="w-12 h-12 flex items-center justify-center text-gray-400 font-bold">...</span>}
                            nextLabel={
                            <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full text-text hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                                <RiArrowRightSLine className="text-2xl" />
                            </button>
                            }
                            previousLabel={
                            <button className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full text-text hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                                <RiArrowLeftSLine className="text-2xl" />
                            </button>
                            }
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={1}
                            pageCount={pageCount}
                            containerClassName="flex justify-center items-center gap-3"
                            pageClassName=""
                            pageLinkClassName="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full text-text font-bold hover:bg-gray-50 transition-colors shadow-sm"
                            activeClassName="!bg-text !text-white !border-text"
                            activeLinkClassName="!bg-text !text-white !border-text hover:!bg-text"
                        />
                    </div>
                )}
            </>
        )}
      </div>
    </div>
  );
};

export default Apartments;
