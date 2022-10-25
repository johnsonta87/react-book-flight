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
        with Create React App.
        <br />
        <Link
          color="inherit"
          href="https://www.behance.net/gallery/154831459/024-Boarding-Pass-UI?tracking_source=search_projects%7Cboarding+pass"
          target="_blank"
          rel="noreferrer"
        >
          View inspiration
        </Link>
      </Typography>
    </footer>
  );
}
