import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Headings/Heading';

import { HeroBannerStyles } from './HeroBannerStyles';

export default function HeroBanner({ title, children, align, variant }) {
  return (
    <HeroBannerStyles>
      {title && (
        <Heading heading={title} align={align} variant={variant} isLight />
      )}

      {children}
    </HeroBannerStyles>
  );
}

HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
  align: PropTypes.string,
  variant: PropTypes.string,
};
