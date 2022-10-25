import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';
import { BoardingCardStyles, InnerColumn } from './BoardingCardStyles';
import { PassengerDetail, JourneyInfo, Terminal } from '../Flight';

export default function BoardingCard({ journey }) {
  if (!journey) {
    return null;
  }

  return (
    <BoardingCardStyles>
      <InnerColumn>
        <Typography variant="body1">From</Typography>
        <Typography variant="body1">To</Typography>
      </InnerColumn>

      <InnerColumn>
        <JourneyInfo journey={journey.origin} />
        <JourneyInfo journey={journey.destination} />
      </InnerColumn>

      <InnerColumn>
        <PassengerDetail travellers={journey.travellers} />

        <Terminal terminal={journey.terminal} />
      </InnerColumn>
    </BoardingCardStyles>
  );
}

BoardingCard.propTypes = {
  journey: PropTypes.object.isRequired,
};
