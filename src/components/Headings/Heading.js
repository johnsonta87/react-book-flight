import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

export default function Heading({ heading, align }) {
  if (!heading) {
    return;
  }

  return (
    <Typography variant="h1" align={align} mb={3}>
      {heading}
    </Typography>
  );
}

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
  align: PropTypes.string,
};
