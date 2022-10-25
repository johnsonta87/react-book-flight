import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';
import { BoardingCardStyles, InnerColumn } from './BoardingCardStyles';
import { PassengerDetail, JourneyInfo, Terminal } from '../Flight';

export default function BoardingCard({ journey, showFullDetails }) {
  if (!journey) {
    return null;
  }

  return (
    <BoardingCardStyles>
      {showFullDetails && (
        <InnerColumn className="rsp">
          <img
            className="logo-img"
            src="/logo.svg"
            alt="United"
            loading="lazy"
          />

          {journey.departDate && (
            <div className="departDate">{journey.departDate}</div>
          )}
        </InnerColumn>
      )}

      <InnerColumn>
        <Typography variant="body1">From</Typography>
        <Typography variant="body1">To</Typography>
      </InnerColumn>

      <InnerColumn>
        {journey.origin && <JourneyInfo journey={journey.origin} />}
        {journey.destination && <JourneyInfo journey={journey.destination} />}
      </InnerColumn>

      <InnerColumn>
        {journey.travellers && (
          <PassengerDetail travellers={journey.travellers} />
        )}

        {journey.terminal && <Terminal terminal={journey.terminal} />}
      </InnerColumn>
    </BoardingCardStyles>
  );
}

BoardingCard.propTypes = {
  journey: PropTypes.object.isRequired,
  showFullDetails: PropTypes.bool,
};
