const deleteTodo = (URL, contextValue, contextMethod) => {
  fetch(URL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(contextMethod(!contextValue))
  .catch(err => console.log(err));
}

export default deleteTodo;