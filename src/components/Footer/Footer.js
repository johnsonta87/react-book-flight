import React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <footer className="footer-app">
      <Typography variant="body2" color="text.secondary" align="center">
        &copy; {new Date().getFullYear()} - Built by{' '}
        <Link
          color="inherit"
          href="https://github.com/johnsonta87"
          target="_blank"
          rel="noreferrer"
        >
          @johnsonta87
        </Link>{' '}
        .
      </Typography>
    </footer>
  );
}
