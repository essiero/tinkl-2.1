import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LogOutButton from './LogOutButton/LogOutButton';
import { MapContainer, Marker, useMap } from 'react-leaflet';
import { LeafletMap } from './LeafletMap/LeafletMap';

function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  // const user = useSelector((store) => store.user);
  const initialLocation = {
        lat: 44.9560534624369,
        lng: -93.16002444658359
    }
      const user = useSelector((store) => store.user);
  return (
    <div>
       <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LeafletMap/>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
