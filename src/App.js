import {
  ChakraProvider,
} from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
