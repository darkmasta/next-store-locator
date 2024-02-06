
# Next Store Locator 

A React component for easily integrating Google Maps Store Locator feature into Next.js applications.
Check [working example](https://next-store-locator-pibyka5be-darkmasta.vercel.app/).

## Installation

```bash
npm install next-store-locator
# or
yarn add next-store-locator
```

## Usage

First, import the CSS for `next-store-locator` at the top of your application or component to ensure the styles are loaded:

```javascript
import 'next-store-locator/dist/style.css';
```

Here's a basic example to integrate the `NextStoreLocator` component into your Next.js app:

```jsx
import React, { useEffect, useState } from 'react';
import NextStoreLocator from 'next-store-locator';

const mapOptions = {
  center: { lat: 40.7128, lng: -74.0060 },
  zoom: 10,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] }],
};

const Page = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      const response = await fetch('https://www.milestone.de/api/getstorelocatorlist');
      const data = await response.json();
      setLocations(data);
    }
    fetchLocations();
  }, []);

  return (
    <main className="w-full pt-8">
      <div className="w-full inline-flex justify-center pb-8">
        <h1 className="text-3xl font-bold">Next Store Locator</h1>
      </div>
      {locations.length > 0 && (
        <NextStoreLocator
          locationsProp={locations}
          mapOptionsProp={mapOptions}
          iconPaths={{ markerIcon: 'images/custom-marker.png' }}
          apiKey={"YOUR_GOOGLE_MAPS_API_KEY"}
        />
      )}
    </main>
  );
};

export default Page;
```

Replace `"YOUR_GOOGLE_MAPS_API_KEY"` with your actual Google Maps API key.

## Features

- Easily integrate a store locator in your Next.js projects.
- Customizable map options and styles.
- Dynamic loading of store locations.

For more advanced usage and customization options, please refer to the official documentation.

## License

Specify your package's license here, typically "MIT".
