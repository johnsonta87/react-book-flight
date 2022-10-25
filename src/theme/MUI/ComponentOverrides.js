import { Palette } from './Palette';

export const MuiContainer = {
  styleOverrides: {
    root: {
      position: 'absolute',
      top: '50%',
      left: 0,
      right: 0,
      transform: 'translateY(-50%)',
    },
  },
};

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

export const MuiTypography = {
  variants: [
    {
      props: {
        variant: 'light',
      },
      style: {
        fontWeight: 'bold',
        color: Palette.primary.white,
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
          fontSize: '2.4rem',
        },
      },
    },
    {
      props: {
        variant: 'bodySemi1',
      },
      style: {
        fontWeight: 'bold',
        fontSize: '1.125rem',
        '@media (min-width:600px)': {
          fontSize: '1.55rem',
        },
      },
    },
    {
      props: {
        variant: 'bodySemi2',
      },
      style: {
        fontWeight: 'bold',
        fontSize: '1rem',
        '@media (min-width:600px)': {
          fontSize: '1.25rem',
        },
      },
    },
  ],
};
