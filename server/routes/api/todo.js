const express = require('express');
const uuid = require('uuid');
const fs = require('fs');

const data = fs.readFileSync(__dirname + '/db.json');
const router = express.Router();
let todos = JSON.parse(data);

router.use(express.json()); 
router.use(express.urlencoded({ extended: true })); 
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
})


// Get all todos
router.get('/', (req, res) => {
  res.json(todos);
});

// Get one todo
router.get('/:id', (req, res) => {
  const found = todos.todos.some(todo => todo.id === req.params.id);
  if (found) {
    res.json(todos.todos.filter(todo => todo.id === req.params.id));
  } else {
    res.status(400).json({
      msg: `No member with the id of ${req.params.id}`,
    });
  }
});

// Delete one todo
router.delete('/:id', (req, res) => {
  const found = todos.todos.some(todo => todo.id === req.params.id);
  if(found) {
    todos.todos = todos.todos.filter(todo => todo.id !== req.params.id);
    updateData(todos);
    res.header("Access-Control-Allow-Origin", "*");
    res.json(todos);
  } else {
    res.status(400).json({
      msg: `Todo with id ${req.params.id} doesn't exist.`
    });
  }
});

function updateData (data) {
  data = JSON.stringify(data, null, 2);
  fs.writeFile(__dirname + '/db.json', data, (err) => {
    if (err) return console.log(err);
  });
} 

// Add a todo
router.post('/', (req, res) => {
  const newTodo = {
    id: uuid.v4(),
    todo: req.body.todo,
    done: false,
  };
  todos.todos.push(newTodo);
  updateData(todos);
  res.send(todos);
});

module.exports = router;
