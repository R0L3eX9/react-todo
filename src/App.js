import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ShowTodos from './components/ShowTodos';
import NavBar from './components/NavBar';
import { Flex } from '@chakra-ui/react';

export const FetchContext = React.createContext();

function App() {
  const [isFetching, setIsFetching] = useState(true);

  return (
  <>
    <FetchContext.Provider value={ {isFetching, setIsFetching} }>
      <NavBar />
      <Flex direction="column" justify="center" align="center">
        <Form />
        <ShowTodos />
      </Flex>
    </FetchContext.Provider>
  </>
  );
}

export default App;
