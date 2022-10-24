import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Headings/Heading';

import { HeroBannerStyles } from './HeroBannerStyles';

export default function HeroBanner({ title, children, align }) {
  return (
    <HeroBannerStyles>
      {title && <Heading heading={title} align={align} />}

      {children}
    </HeroBannerStyles>
  );
}

HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array,
  align: PropTypes.string,
};
