import { Flex, Text, Input, Button, useToast } from '@chakra-ui/react';
import { FetchContext } from '../App';
import { useContext } from 'react';
import createTodo from './utilities/createTodo';
import { createTodoToastSettings } from './utilities/toastSettings';

const Form = () => {
  const URL = 'http://localhost:8080/api/todos/';
  const context = useContext(FetchContext);

  const formSubmitted = (event) => {
    event.preventDefault();
    const target = document.getElementById('newTodo');
    const todo = target.value;
    target.value = '';
    if(todo.length !== 0) {
      createTodoToast();
      createTodo(URL, context.isFetching, context.setIsFetching, todo);
    }
  }
  const toast = useToast();
  const createTodoToast = () => {
    toast(createTodoToastSettings);
  };

  return (
    <Flex margin="3rem auto" justify="space-between" align="center" direction="column">
        <Text mb="1.5rem" htmlFor="newTodo" fontSize="3xl" >New todo:</Text>
        <Input mb="1.5rem" id="newTodo" placeholder="e.g Buy milk." />
        <Button mb="1.5rem" w="40%" colorScheme="green" variant="solid" onClick={ formSubmitted }>Add New Todo</Button>
    </Flex>
  );
};

export default Form;
