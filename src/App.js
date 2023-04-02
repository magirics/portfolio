import {
  ChakraProvider,
} from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider>
      <Header></Header>
    </ChakraProvider>
  );
}

export default App;
