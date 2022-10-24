import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Headings/Heading';

export default function HeroBanner({ title, children }) {
  return (
    <div>
      {title && <Heading heading={title} />}

      {children}
    </div>
  );
}

HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object,
};
