const express = require('express')
const mongoose = require('mongoose')
const routes = require('../src/routes')

const app = express()

mongoose.connect('mongodb+srv://wjas:meliodas@cluster0-lfnod.mongodb.net/dev?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(express.json())
app.use(routes);

app.listen(3333)