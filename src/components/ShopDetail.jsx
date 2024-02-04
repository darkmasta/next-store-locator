import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import googleMapsIcon from '../assets/google_maps_logo.png';
import CloseIcon from "./icons/CloseIcon.jsx";


const ShopDetail = ({ selectedShop, handleCloseDetail }) => {
    return (
      <AnimatePresence>
          {selectedShop && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 h-full bg-white p-4 z-20 shadow-lg border-b-2 border-gray-300"
            >
                <div className="w-full flex justify-between">
                    <div className="text-lg font-semibold ml-2 pt-2">Shop</div>
                    <div onClick={handleCloseDetail}  className="cursor-pointer p-3 rounded-full bg-gray-100 hover:bg-gray-200 inline-flex justify-center items-center">
                        {/*<div className="i-regular:close size-4" ></div>*/}
                        <CloseIcon className="w-4 h-4" />
                    </div>
                </div>

                <div className="ml-2">
                    <h3 className="text-2xl font-semibold mt-4">{selectedShop.company}</h3>

                    <div className="mt-12">
                        <div className="ml-1 text-sm text-gray-600 capitalize"><span className="text-black font-semibold">Address:</span> {selectedShop.address} {selectedShop.state} {selectedShop.land} {selectedShop.postcode}</div>
                        <div className="ml-1 text-sm text-gray-600"><span className="text-black font-semibold">Phone: </span> {selectedShop.phone}</div>
                        <div className="ml-1 text-sm text-gray-600"><span className="text-black font-semibold">Email: </span> <a href={`mailto:${selectedShop.email}`} className="text-blue-600">{selectedShop.email}</a></div>
                        <div className="ml-1 text-sm text-gray-600"><span className="text-black font-semibold">Website: </span> <a href={selectedShop.web} target="_blank" rel="noopener noreferrer" className="text-blue-600">{selectedShop.web}</a></div>
                    </div>

                    <div className="w-full h-12 flex justify-center items-center mt-12">
                        <a href={selectedShop.mapsLink} target="_blank" className="flex justify-center items-center h-full">
                            <img src={googleMapsIcon} alt="Google Maps Logo" className="block mr-4" width={180} height="auto" />
                        </a>
                    </div>

                </div>
            </motion.div>
          )}
      </AnimatePresence>
    );
};

export default ShopDetail;
