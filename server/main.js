const express = require('express');

const app = express();

app.use('/api/todos', require('./routes/api/todo.js'))


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}/`)
});
