import React from 'react';

import { TextField } from '@mui/material';

// Components
import { FlightSearchStyles } from './FlightSearchStyles';

export default function FlightSearch() {
  return (
    <FlightSearchStyles>
      <TextField
        id="outlined-basic"
        label="Enter your destination"
        variant="outlined"
        fullWidth
        sx={{
          backgroundColor: 'primary.main.white',
          borderRadius: '999px',
        }}
      />
    </FlightSearchStyles>
  );
}
