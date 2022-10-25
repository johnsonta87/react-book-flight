import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

export default function JourneyInfo({ journey }) {
  if (!journey) {
    return null;
  }

  return (
    <div>
      {journey.city && <Typography variant="body1">{journey.city}</Typography>}
      {journey.airportCode && (
        <Typography variant="bodySemi1">{journey.airportCode}</Typography>
      )}
    </div>
  );
}

JourneyInfo.propTypes = {
  journey: PropTypes.object.isRequired,
};
