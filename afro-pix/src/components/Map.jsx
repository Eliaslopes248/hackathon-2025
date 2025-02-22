import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
//const KEY = import.meta.env.GOOGLE_API_KEY;
const KEY = 'AIzaSyDjzR7ObluBBw0DAHqTMbldpAPiO9I2kC0'

const containerStyle = {
  width: "100%",
  height: "100%",
};

const mapStyles = [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [{ visibility: "off" }], // Hide all labels
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ visibility: "on" }], // Hide roads
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ visibility: "on" }], // Hide land
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ visibility: "on" }], // Hide points of interest
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ visibility: "on" }], // Hide water
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ visibility: "on" }], // Hide transit lines
    },
  ];
  

const center = {
  lat: 37.7748, // Example: San Francisco
  lng: -122.4194,
};

const Map = (props) => {

  return (
    <LoadScript googleMapsApiKey={KEY}>
      <GoogleMap mapContainerStyle={containerStyle} 
      center={props?.location || center} 
      zoom={12}
      options={{ styles: mapStyles }}
      >
      <Marker
  position={center}
  label={{
    text: "San Francisco",
    fontSize: "16px",
    fontWeight: "bold",
  }}
/>

      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
