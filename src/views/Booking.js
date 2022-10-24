import React from 'react';
import HeroBanner from '../components/Banner/HeroBanner';
import FlightSearch from '../components/FlightSearch/FlightSearch';
import TripType from '../components/TripType/TripType';

export default function Booking() {
  return (
    <div>
      <HeroBanner title="Book a flight" align="center">
        <FlightSearch />
        <TripType />
      </HeroBanner>
    </div>
  );
}
