import { Container } from '@mui/material';
import Footer from './components/Footer/Footer';
import Booking from './views/Booking';
import { AppStyles } from './theme/AppStyles';

function App() {
  const journey = {
    origin: {
      airportCode: 'LAG',
      city: 'Lagos',
    },
    destination: {
      airportCode: 'DUB',
      city: 'Dubai',
    },
    terminal: {
      gate: '3 Gate 4C',
    },
    travellers: [
      {
        firstName: 'Tommy',
        lastName: 'Grey',
      },
    ],
  };

  return (
    <Container maxWidth="sm" variant="app-container">
      <AppStyles>
        <Booking journey={journey} />

        <Footer />
      </AppStyles>
    </Container>
  );
}

export default App;
