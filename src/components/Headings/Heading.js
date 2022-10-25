import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

export default function Heading({ heading, align, variant, isLight }) {
  if (!heading) {
    return;
  }

  return (
    <Typography variant={isLight ? 'light' : variant} align={align} mb={3}>
      {heading}
    </Typography>
  );
}

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  align: PropTypes.string,
  variant: PropTypes.string,
  isLight: PropTypes.bool,
};
