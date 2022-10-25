import React from 'react';
import { Typography } from '@mui/material';
import { BoardingCardStyles, InnerColumn } from './BoardingCardStyles';

export default function BoardingCard() {
  return (
    <BoardingCardStyles>
      <InnerColumn>
        <Typography variant="body1">From</Typography>
        <Typography variant="body1">To</Typography>
      </InnerColumn>

      <InnerColumn>
        <div>
          <Typography variant="body1">Lagos</Typography>
          <Typography variant="body2">
            <strong>LAG</strong>
          </Typography>
        </div>

        <div>
          <Typography variant="body1">Dubai</Typography>
          <Typography variant="body2">
            <strong>DUB</strong>
          </Typography>
        </div>
      </InnerColumn>

      <InnerColumn>
        <div>
          <Typography variant="body1">Passenger</Typography>
          <Typography variant="body2">
            <strong>Tommy Grey</strong>
          </Typography>
        </div>

        <div>
          <Typography variant="body1">Terminal</Typography>
          <Typography variant="body2">
            <strong>3 Gate 4C</strong>
          </Typography>
        </div>
      </InnerColumn>
    </BoardingCardStyles>
  );
}
