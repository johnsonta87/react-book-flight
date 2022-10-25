import React, { useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';

export default function TripType() {
  const [active, setActive] = useState(0);

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

  return (
    <ButtonGroup fullWidth>
      {tripTypes &&
        tripTypes.length &&
        tripTypes.map((trip, index) => (
          <Button
            key={index}
            variant={active === index && 'active'}
            onClick={() => {
              setActive(index);
            }}
          >
            {trip.value}
          </Button>
        ))}
    </ButtonGroup>
  );
}
