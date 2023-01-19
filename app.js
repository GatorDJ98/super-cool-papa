const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World! This is David!')
})

console.log('in the node console');

app.listen(3000)