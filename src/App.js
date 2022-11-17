import logo from './logo.svg';
import './App.css';
import Navb from './components/navbar/Navbar';

import { Container, Grid, Navbar, Text } from '@nextui-org/react';
import ChoiceCard from './components/choicecard/ChoiceCard';
import Btn from './components/button/Btn';
import Prompts from './components/prompts/Prompts';

function App() {
  return (
    <div className='App'>
      {/* Container */}
      <Container
        css={{
          background: 'radial-gradient(ellipse at center, #7DE048, #20C8C4)',
          height: '100vh',
        }}
      >
        {/* Navbar */}

        <Navb />

        {/* MVP: prompt box */}
        {/* <Grid.Container gap={2} justify='center'>
          <Grid xs={6}>
            <ChoiceCard text='Ask a question' emoji='❓' />
          </Grid>
          <Grid xs={6}>
            <ChoiceCard text='Answer a question' emoji='😎' />
          </Grid>
          <Btn text='GO' />
        </Grid.Container>
        <Grid.Container gap={4} justify='center'>
          <Grid xs={12}></Grid>
        </Grid.Container> */}
        <Prompts />
      </Container>

      {/* Footer */}
    </div>
  );
}

export default App;
