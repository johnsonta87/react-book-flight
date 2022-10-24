import React from 'react';
import { ButtonGroup, Button } from '@mui/material';

export default function TripType() {
  const tripTypes = [
    {
      value: 'Round-Trip',
      isActive: true,
    },
    {
      value: 'One way',
      isActive: false,
    },
    {
      value: 'Multi-City',
      isActive: false,
    },
  ];

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <ButtonGroup variant="contained">
      {tripTypes &&
        tripTypes.length &&
        tripTypes.map((trip, index) => (
          <Button
            key={index}
            variant={trip.isActive ? 'contained' : 'outlined'}
            onClick={handleClick}
          >
            {trip.value}
          </Button>
        ))}
    </ButtonGroup>
  );
}
