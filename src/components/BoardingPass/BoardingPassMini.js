import React from 'react';
import PropTypes from 'prop-types';
import BoardingCard from '../Cards/BoardingCard';
import Heading from '../Headings/Heading';

export default function BoardingPassMini({ journey }) {
  if (!journey) {
    return null;
  }

  return (
    <div>
      <Heading heading="Boarding Pass" variant="h2" />

      <BoardingCard journey={journey} />
    </div>
  );
}

BoardingPassMini.propTypes = {
  journey: PropTypes.object.isRequired,
};
