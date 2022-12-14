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
      display: 'flex',
      margin: '0 auto',
      fontSize: '1rem',
      color: Palette.primary.black,
      backgroundColor: Palette.primary.white,
      border: `2px solid ${Palette.primary.dark}`,
      borderRadius: '999px',

      '&:hover': {
        color: Palette.primary.white,
        backgroundColor: Palette.primary.light,
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
    },
    input: {
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
        variant: 'h2',
      },
      style: {
        color: Palette.primary.white,
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
        lineHeight: '1.125',
        '@media (min-width:600px)': {
          fontSize: '1.25rem',
        },
      },
    },
    {
      props: {
        variant: 'bodySmall',
      },
      style: {
        margin: '0 auto',
        width: '100%',
        color: `${Palette.primary.white} !important`,
        fontSize: '0.7rem',
      },
    },
  ],
};
