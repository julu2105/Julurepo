const express = require('express');
const body-parser = require('body-parser');

const app = express();
const port = 3000
app.use.(body-parser.json());

app.get('/',(req, res) => {
  res.send('Hello World');
});
