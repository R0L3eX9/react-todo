const getTodos = (URL, setData, setIsPending) => {
  fetch(URL)
  .then(res => res.json())
  .then(data => {
    setData(data.todos);
    setIsPending(false);  
  })
  .catch(err => console.log(err));
}

export default getTodos;