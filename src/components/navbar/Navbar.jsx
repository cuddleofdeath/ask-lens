import React from 'react';
import { Button, Navbar, Text } from '@nextui-org/react';
import ConnectBtn from '../connectbtn/Connectbtn';

const Navb = () => (
  <Navbar
    isCompact
    variant={'sticky'}
    css={{
      width: '105%',
      height: '50px',
      marginLeft: '-2rem',
    }}
  >
    <Navbar.Brand
      css={{
        marginLeft: '1.5rem',
      }}
    >
      <Text b color='primary'>
        AskLens
      </Text>
    </Navbar.Brand>
    <Navbar.Content
      hideIn={'xs'}
      css={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '1.5rem',
      }}
    >
      <Navbar.Link href='#'>Trending</Navbar.Link>
      <Navbar.Link href='#'>About</Navbar.Link>
      <Navbar.Link href='#'>Repo</Navbar.Link>
    </Navbar.Content>
    <Navbar.Content
      css={{
        marginRight: '1rem',
      }}
    >
      <ConnectBtn />
    </Navbar.Content>
  </Navbar>
);

export default Navb;
