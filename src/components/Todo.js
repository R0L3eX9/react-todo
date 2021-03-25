import { FetchContext } from '../App';
import { useState, useContext } from 'react';
import { CheckIcon, DeleteIcon, MinusIcon } from '@chakra-ui/icons'
import { Text, Flex, Spacer, IconButton, useToast } from '@chakra-ui/react'
import { deleteTodoToastSettings } from './utilities/toastSettings';
import deleteTodo from './utilities/deleteTodo';

const Todo = ({todoValue, todoId}) => {
  const URL = 'http://localhost:8080/api/todos/';
  const context = useContext(FetchContext);

  const handleDelete = (event) => {
    let id = event.target.id;
    if(id === "") {
      id = event.target.viewportElement.id;
    }
    deleteTodo(`${URL}${id}`, context.isFetching, context.setIsFetching);
    deleteTodoToast();
  }
  
  const [checked, setChecked] = useState(false);
  const checkClicked = () => {
    setChecked(!checked);
  }

  const toast = useToast();
  const deleteTodoToast = () => {
    toast(deleteTodoToastSettings);
  };

  return (
    <Flex className="todo" boxShadow="md" p="1.3rem" _hover={{boxShadow: "xl",}}>
      <Text fontSize="xl" cursor="default" as={checked ? "del" : ""} >{todoValue}</Text>
      <Spacer/>
      {checked ? <IconButton
        onClick={ checkClicked }
        colorScheme="facebook"
        aria-label="Check Todo"
        size="sm"
        ml="1.5rem"
        icon={<MinusIcon />}
        /> : <IconButton
        onClick={ checkClicked }
        colorScheme="green"
        aria-label="Check Todo"
        size="sm"
        ml="1.5rem"
        icon={<CheckIcon />}
        />}
      <IconButton
        id={ todoId }
        onClick= { handleDelete }
        colorScheme="red"
        aria-label="Check Todo"
        size="sm"
        ml="1rem"
        icon={<DeleteIcon id={ todoId } />}
      />
    </Flex>
  );
};

export default Todo
