import React from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/Banner/HeroBanner';
import FlightSearch from '../components/FlightSearch/FlightSearch';
import TripType from '../components/TripType/TripType';
import BoardingPassMini from '../components/BoardingPass/BoardingPassMini';

export default function Booking() {
  return (
    <div>
      <HeroBanner title="Book a flight" align="center" variant="h1">
        <FlightSearch />
      </HeroBanner>

      <Box sx={{ p: 3 }}>
        <TripType />
      </Box>

      <Box sx={{ pl: 3, pr: 3 }}>
        <BoardingPassMini />
      </Box>
    </div>
  );
}
