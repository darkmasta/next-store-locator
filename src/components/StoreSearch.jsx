import React, {useCallback, useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {debounce} from "lodash";
import SearchIcon from "./icons/SearchIcon.jsx";

const StoreSearch = ({handleShopSelect, visibleStores}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [filteredStores, setFilteredStores] = useState([]);

    const toggleSearchVisibility = () => setIsSearchVisible(!isSearchVisible);

    const handleSearch = useCallback(debounce(query => {
        const lowerCaseQuery = query.toLowerCase();
        const filtered = visibleStores.filter(store =>
          store.company.toLowerCase().includes(lowerCaseQuery) ||
          store.address.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredStores(filtered);
    }, 500), [visibleStores]);

    useEffect(() => {
        handleSearch(searchQuery);
    }, [searchQuery, handleSearch]);

    useEffect(() => {
        return () => handleSearch.cancel();
    }, [handleSearch]);

    return (
      <div className="h-[60vh] lg:h-[80vh] border-1-2 border-gray-300 z-10 bg-white overflow-hidden pb-14">
          <div className="w-full flex justify-between items-center border-b">
              <h2 className="block text-xl font-semibold py-4 ml-4">Shops <span className="text-xs text-gray-300">({filteredStores.length})</span></h2>
              <div className="p-2 bg-gray-100 mr-4 rounded-full cursor-pointer hover:bg-gray-200" onClick={toggleSearchVisibility}>
                  <div className="i-regular:search size-5 text-black" style={{ transform: 'rotateY(180deg)' }}>
                        <SearchIcon className="w-5 h-5" />
                  </div>

              </div>
          </div>
          <AnimatePresence>
              {isSearchVisible && (
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="h-18 bg-white z-20"
                >
                    <input
                      type="text"
                      placeholder="Search visible stores..."
                      className="border border-black border-l-8 py-3 pl-2 w-full focus:outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </motion.div>
              )}
          </AnimatePresence>
          <ul className="overflow-y-auto h-full scrollbar">
              {filteredStores.map((store, index) => (
                <div className="cursor-pointer hover:bg-gray-100 pl-4" onClick={() => handleShopSelect(store)} key={index}>
                    <div className="py-4 border-b last:border-b-0 ">
                        <div className="py-4 border-b last:border-b-0 ">
                            <div className="font-semibold text-lg">{store.company}</div>
                            <div className="ml-1 text-sm text-gray-600 capitalize"><span className="text-black font-semibold">Address:</span> {store.address} {store.state} {store.land} {store.postcode}</div>
                            <div className="ml-1 text-sm text-gray-600"><span className="text-black font-semibold">Phone:</span> {store.phone}</div>
                            <div className="ml-1 text-sm text-gray-600"><span className="text-black font-semibold">Email:</span> <a href={`mailto:${store.email}`} className="text-blue-600">{store.email}</a></div>
                            <div className="ml-1 text-sm text-gray-600"><span className="text-black font-semibold">Website:</span> <a href={store.web} target="_blank" rel="noopener noreferrer" className="text-blue-600">{store.web}</a></div>
                        </div>
                    </div>
                </div>
              ))}
          </ul>
      </div>
    );
};

export default StoreSearch;
