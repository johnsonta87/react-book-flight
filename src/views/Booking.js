import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Box, Button } from '@mui/material';
import HeroBanner from '../components/Banner/HeroBanner';
import FlightSearch from '../components/FlightSearch/FlightSearch';
import TripType from '../components/TripType/TripType';
import { BoardingPassMini } from '../components/BoardingPass';

export default function Booking({ journey, setView }) {
  return (
    <div>
      <HeroBanner title="Book a flight" align="center" variant="h1">
        <FlightSearch />
      </HeroBanner>

      <Box sx={{ p: 3 }}>
        <TripType />
      </Box>

      {journey && (
        <Box sx={{ p: 3, pt: 0 }}>
          <BoardingPassMini journey={journey} />
          <Button variant="text" onClick={() => setView('BoardingPass')}>
            View Boarding Pass
          </Button>
        </Box>
      )}
    </div>
  );
}

Booking.propTypes = {
  journey: PropTypes.object.isRequired,
  setView: PropTypes.func,
};
