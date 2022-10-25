import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function Terminal({ terminal }) {
  if (!terminal) {
    return null;
  }

  return (
    <div>
      <Typography variant="body1">Terminal</Typography>
      <Typography variant="bodySemi2">{terminal.gate}</Typography>
    </div>
  );
}

Terminal.propTypes = {
  terminal: PropTypes.object.isRequired,
};
