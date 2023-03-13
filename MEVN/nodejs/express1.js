/*const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.listen(3001, () => {
  console.log('Server started on port 3001');
});
*/


const express = require('express');
const app = express();
const dt = require('./ownModule');

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
   res.send("The date and time are: " + dt.getCurrentDate());
});

app.listen(8800, () => {
  console.log('Server started on port 8800');
});