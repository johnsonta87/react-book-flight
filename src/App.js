import Container from '@mui/material/Container';
import Footer from './components/Footer/Footer';
import Booking from './views/Booking';
import { AppStyles } from './theme/AppStyles';

function App() {
  return (
    <Container maxWidth="sm" variant="app-container">
      <AppStyles>
        <Booking />

        <Footer />
      </AppStyles>
    </Container>
  );
}

export default App;
