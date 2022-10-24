import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Footer from './components/Footer/Footer';
import Booking from './views/Booking';
import { AppStyles } from './theme/AppStyles';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <AppStyles>
          <Booking />

          <Footer />
        </AppStyles>
      </Box>
    </Container>
  );
}

export default App;
