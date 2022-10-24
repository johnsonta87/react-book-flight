import React from 'react';
import HeroBanner from '../components/Banner/HeroBanner';
import FlightSearch from '../components/FlightSearch/FlightSearch';

export default function Booking() {
  return (
    <div>
      <HeroBanner title="Book a flight">
        <FlightSearch />
      </HeroBanner>
    </div>
  );
}
