import { FetchContext } from '../App';
import { Heading, Divider, Stack, Flex } from '@chakra-ui/react';
import { useState, useEffect, useContext } from 'react';
import Todo from './Todo';
import getTodos from './utilities/getTodos';

const ShowTodos = () => {
  const [todos, setTodos] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const context = useContext(FetchContext);
  const URL = 'http://localhost:8080/api/todos/';

  useEffect(() => {
    getTodos(URL, setTodos, setIsPending);
  }, [context.isFetching]) 

  return (
    <div>
      <Flex mb="1.5rem" direction="column" align="center">
        <Heading as="h1" size="2xl">Todo List</Heading>
        <Divider />
      </Flex>
      {isPending ? <div>Loading...</div> :
        <Stack mt="2rem" className="todos" spacing={5}>
          { todos.map(todo => {
            return <Todo todoId={todo.id} key={todo.id} todoValue={todo.todo} />
          })}
        </Stack> 
      }
    </div>
  );
};

export default ShowTodos;