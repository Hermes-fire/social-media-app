const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('DB Connected'))

const port = process.env.PORT || 8000

app.listen(port, ()=>{console.log(`Server is running on port ${port}`)})