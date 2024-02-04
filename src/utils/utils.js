export const mapOptions = {
    center: { lat: 48.14, lng: 11.62 },
    zoom: 9,
    streetViewControl: false,
    fullscreenControl: true,
    geolocationControl: true,
    mapTypeControl: false,
    styles: [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [{ "visibility": "on" }, { "color": "#f0f0f0" }]
        },
        {
            "featureType": "road",
            "elementType": "labels.text",
            "stylers": [
                {"color": "#555555"},
                {"lightness": 20},
                {"weight": 0.5}
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon", // Style for label background
            "stylers": [
                {"visibility": "off"},
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
                { "visibility": "on" },
                { "color": "#575252" },
                { "lightness": 20 },
                { "weight": 0.5 }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "visibility": "on" }, { "color": "#aadaff" }]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{ "visibility": "on" }]
        }
    ],
};
