import { Palette } from './Palette';

export const MuiButton = {
  styleOverrides: {
    root: {
      fontSize: '1rem',
      color: Palette.primary.black,
      backgroundColor: Palette.primary.white,
      border: `2px solid ${Palette.primary.dark}`,
      borderRadius: '999px',

      '&:hover, &:focus': {
        color: Palette.primary.white,
        backgroundColor: Palette.primary.main,
        borderColor: Palette.primary.dark,
      },
    },
  },
  variants: [
    {
      props: {
        variant: 'active',
      },
      style: {
        color: Palette.primary.white,
        backgroundColor: Palette.primary.dark,
      },
    },
  ],
};

export const MuiInputBase = {
  styleOverrides: {
    root: {
      fontSize: '1rem',
      backgroundColor: '#fff',
      borderRadius: '999px',
    },
  },
};
