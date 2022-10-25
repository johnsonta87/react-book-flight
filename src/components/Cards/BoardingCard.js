import React from 'react';
import { Typography } from '@mui/material';
import { BoardingCardStyles, InnerColumn } from './BoardingCardStyles';
import PassengerDetail from '../Flight/PassengerDetail';
import Terminal from '../Flight/Terminal';
import JourneyInfo from '../Flight/JourneyInfo';

export default function BoardingCard() {
  const journey = {
    origin: {
      airportCode: 'LAG',
      city: 'Lagos',
    },
    destination: {
      airportCode: 'DUB',
      city: 'Dubai',
    },
    terminal: {
      gate: '3 Gate 4C',
    },
    travellers: [
      {
        firstName: 'Tommy',
        lastName: 'Grey',
      },
    ],
  };

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
