import { createTheme } from '@mui/material/styles';
import { MuiButton, MuiInputBase } from './MUI/ComponentOverrides';
import { Palette } from './MUI/Palette';
import { Typography } from './MUI/Typography';

// A custom theme for this app
const theme = createTheme({
  palette: Palette,
  typography: Typography,
  components: {
    MuiButton,
    MuiInputBase,
  },
});

theme.typography.h1 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '2.4rem',
  },
};

theme.typography.h2 = {
  fontSize: '0.85rem',
  marginBottom: '0.35em !important',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
};

export default theme;
