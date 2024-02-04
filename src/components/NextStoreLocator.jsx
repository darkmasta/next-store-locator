import React, {useEffect, useState} from 'react';
import StoreLocatorMap from "./StoreLocatorMap.jsx";
import StoreSearch from "./StoreSearch.jsx";
import ShopDetail from "./ShopDetail.jsx";
import '../styles.css'

const NextStoreLocator = ({locationsProp, apiKey, mapOptionsProp, iconPaths}) => {
    const [locations, setLocations] = useState(locationsProp ?? []);
    const [visibleStores, setVisibleStores] = useState([]);
    const [selectedShop, setSelectedShop] = useState(null);

    const handleShopSelect = (shop) => setSelectedShop(shop)
    const handleCloseDetail = () => setSelectedShop(null);

    return(
      <div className="relative grid grid-cols-6 overflow-hidden">
          <StoreLocatorMap
            locations={locations} setLocations={setLocations}
            setVisibleStores={setVisibleStores}
            setSelectedShop={setSelectedShop}
            apiKey={apiKey}
            mapOptionsProp={mapOptionsProp}
            iconPaths={iconPaths}
          />

          <div className="relative h-[60vh] lg:h-[80vh] col-span-6 lg:col-span-2">
              <StoreSearch
                visibleStores={visibleStores}
                handleShopSelect={handleShopSelect}
              />

              <ShopDetail
                selectedShop={selectedShop}
                handleCloseDetail={handleCloseDetail}
              />
          </div>
      </div>
    );
};

export default NextStoreLocator;
