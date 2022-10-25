import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

export default function Heading({ heading, align, variant }) {
  if (!heading) {
    return;
  }

  return (
    <Typography variant={variant} align={align} mb={3}>
      {heading}
    </Typography>
  );
}

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  align: PropTypes.string,
  variant: PropTypes.string,
};
