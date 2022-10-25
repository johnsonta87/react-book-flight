import React from 'react';
import PropTypes from 'prop-types';
import BoardingCard from '../Cards/BoardingCard';

export default function BoardingPassFull({ journey, showFullDetails }) {
  if (!journey) {
    return null;
  }

  return <BoardingCard journey={journey} showFullDetails={showFullDetails} />;
}

BoardingPassFull.propTypes = {
  journey: PropTypes.object.isRequired,
  showFullDetails: PropTypes.bool,
};
