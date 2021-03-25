const createTodo = (URL, contextValue, contextMethod, todo) => {
  fetch(URL, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      todo: todo
    })
  })
  .then(contextMethod(!contextValue))
  .catch(err => console.log(err));
}

export default createTodo;