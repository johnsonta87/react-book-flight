import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Box } from '@mui/material';
import HeroBanner from '../components/Banner/HeroBanner';
import { BoardingPassFull } from '../components/BoardingPass';

export default function BoardingPass({ journey }) {
  return (
    <div>
      <HeroBanner title="Boarding Pass" align="center" variant="h1" />

      {journey && (
        <Box sx={{ p: 3, pt: 0, mt: -2, mb: -2 }}>
          <BoardingPassFull journey={journey} showFullDetails />
        </Box>
      )}
    </div>
  );
}

BoardingPass.propTypes = {
  journey: PropTypes.object.isRequired,
};
