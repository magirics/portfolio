import {
  ChakraProvider,
} from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <ChakraProvider>
      <Header></Header>
      <Main></Main>
    </ChakraProvider>
  );
}

export default App;
