import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

export default function Heading({ heading }) {
  if (!heading) {
    return;
  }

  return <Typography variant="h1">{heading}</Typography>;
}

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};
