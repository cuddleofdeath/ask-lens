import React from 'react';

import { Container, Grid, Navbar, Text } from '@nextui-org/react';
import ChoiceCard from '../choicecard/ChoiceCard';
import Btn from '../button/Btn';

const Prompts = () => {
  return (
    <Grid.Container gap={2} justify='center'>
      <Grid xs={6}>
        <ChoiceCard text='I want to ask a question' emoji='🤔' />
      </Grid>
      <Grid xs={6}>
        <ChoiceCard text='I want to answer a question' emoji='👨‍💻' />
      </Grid>
      <Btn text='GO' />
    </Grid.Container>
  );
};

export default Prompts;
