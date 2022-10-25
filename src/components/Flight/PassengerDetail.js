import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

export default function PassengerDetail({ travellers }) {
  if (!travellers && !travellers?.length) {
    return null;
  }

  return (
    <div>
      <Typography variant="body1">Passenger</Typography>
      {travellers.map((traveller, index) => (
        <Typography variant="bodySemi2" key={index}>
          {traveller.firstName} {traveller.lastName}
        </Typography>
      ))}
    </div>
  );
}

PassengerDetail.propTypes = {
  travellers: PropTypes.array.isRequired,
};
