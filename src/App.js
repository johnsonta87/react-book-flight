import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Container } from '@mui/material';
import Footer from './components/Footer/Footer';
import { Booking, BoardingPass } from './views';
import { AppStyles } from './theme/AppStyles';
import { journeyState, viewState } from './recoil/atoms';
import { journey as journeyData } from './data/mock';

function App() {
  const [journey, setJourney] = useRecoilState(journeyState);
  const [view, setView] = useRecoilState(viewState);

  useEffect(() => {
    setJourney(journeyData);
  }, []);

  return (
    <Container maxWidth="sm" variant="app-container">
      <AppStyles>
        {view === 'Booking' && <Booking journey={journey} setView={setView} />}
        {view === 'BoardingPass' && (
          <BoardingPass journey={journey} setView={setView} />
        )}

        <Footer />
      </AppStyles>
    </Container>
  );
}

export default App;
