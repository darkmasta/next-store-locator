import React, {useCallback, useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';
import MarkerClusterer from '@google/markerclustererplus';
import {debounce} from "lodash";
import {mapOptions} from "../utils/utils";
// import {apiGetStores} from "./store-locator-actions";
import defaultMarkerIcon from '../assets/mls-marker.png';
import defaultClusterIcon from '../assets/m2.png';
import bullsEyeIcon from '../assets/bullseye.png';

const StoreLocatorMap = React.memo(({ locations, setLocations, setVisibleStores, setSelectedShop, apiKey, mapOptionsProp, iconPaths }) => {
    const mapRef = useRef(null);
    const inputRef = useRef(null);
    const map = useRef(null);
    const markers = useRef([]);
    const markerCluster = useRef(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: apiKey,
            version: "weekly",
            libraries: ["places", "maps"]
        });

        loader.load().then(async () => {

            map.current = new google.maps.Map(mapRef.current, mapOptionsProp ?? mapOptions);


            const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
                componentRestrictions: { country: 'DE' },
                fields: ['geometry', 'name']
            });

            autocomplete.addListener('place_changed', () => {
                const place = autocomplete.getPlace();
                if (place.geometry) {
                    map.current.panTo(place.geometry.location);
                    map.current.setZoom(12);
                }
            });

            if (locations) {

                console.log(locations);



                const locationsData = locations.map(loc => ({
                    ...loc,
                    position: new google.maps.LatLng(parseFloat(loc.location.latitude), parseFloat(loc.location.longitude))
                }));

                console.log(locationsData);
                setLocations(locationsData);
                addMarkers(locationsData);
                updateVisibleMarkersAndStores(locationsData);
            }

            // apiGetStores().then(data => {
            //     const storeData = data.map(loc => ({
            //         ...loc,
            //         position: new google.maps.LatLng(parseFloat(loc.location.latitude), parseFloat(loc.location.longitude))
            //     }));
            //     setLocations(storeData);
            //     addMarkers(storeData);
            //     updateVisibleMarkersAndStores(storeData);
            // });
        });
    }, []);


    const debouncedUpdateVisibleMarkersAndStores = useCallback(
      debounce((locations) => {
          updateVisibleMarkersAndStores(locations);
      }, 500),
      []
    );

    useEffect(() => {
        if (!map.current) return;

        const boundsChangedListener = map.current.addListener('bounds_changed', () => {
            debouncedUpdateVisibleMarkersAndStores(locations);
        });

        return () => {
            google.maps.event.removeListener(boundsChangedListener);
        };
    }, [locations, debouncedUpdateVisibleMarkersAndStores]);

    const addMarkers = (storeData) => {
        storeData.forEach(location => {
            const marker = new google.maps.Marker({
                position: location.position,
                map: null,
                icon: iconPaths.markerIcon ?? defaultMarkerIcon,
                draggable: false
            });

            marker.addListener('click', () => setSelectedShop(location));
            markers.current.push(marker);
        });

        markerCluster.current = new MarkerClusterer(map.current, [], {
            styles: [{
                url: iconPaths.clusterIcon ?? defaultClusterIcon,
                width: 24,
                height: 24,
                textColor: '#fff',
                textSize: 12,
                anchorText: [10, 4],
                backgroundPosition: 'center center'
            }]
        });

        google.maps.event.addListener(markerCluster, 'clusterclick', (cluster) => {
            if (cluster && cluster.getCenter) {
                const center = cluster.getCenter();
                if (center) {
                    map.current.setCenter(center);
                    map.current.setZoom(map.current.getZoom() + 2);
                }
            }
        });
    };

    const updateVisibleMarkersAndStores = (storeData) => {
        const currentBounds = map.current.getBounds();
        const visibleMarkers = [];
        const visibleStores = [];

        storeData.forEach((location, index) => {
            if (currentBounds && currentBounds.contains(location.position)) {
                markers.current[index].setMap(map.current);
                visibleMarkers.push(markers.current[index]);
                visibleStores.push(location);
            } else {
                markers.current[index].setMap(null);
            }
        });

        setVisibleStores(visibleStores);
        markerCluster.current.clearMarkers();
        markerCluster.current.addMarkers(visibleMarkers);
    };

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                map.current.setCenter(userLocation);
                map.current.setZoom(12);
            }, (error) => {
                console.error('Error getting user location:', error);
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    return (
      <div className="col-span-6 lg:col-span-4">
          <div ref={mapRef} style={{ width: '100%', height: '80vh', backgroundColor: 'background-color: rgb(229, 227, 223)'}}  className="h-[40vh] lg:h-[80vh]" />
          <button onClick={getUserLocation} className="bg-white p-2 absolute top-[5px] left-[10px] lg:top-[10px] lg:left-[30px]">
              <img src={bullsEyeIcon} alt="Location" className="w-3 h-3 lg:w-4 lg:h-4" />
          </button>

          <div className="absolute top-[5px] left-[45px] lg:top-[10px] lg:left-[80px]">
              <input
                className="border-none p-1.5 w-36 lg:w-auto lg:p-2 relative z-20 cursor-pointer bg-white shadow rounded overflow-hidden text-black text-xs font-medium text-center"
                type="text"
                ref={inputRef}
                placeholder="Find location by city"
              />
          </div>
      </div>
    )
});

export default StoreLocatorMap;
