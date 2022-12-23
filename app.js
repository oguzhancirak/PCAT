const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/benzin', (req, res) => {
  res.send('hüüsooooo');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
