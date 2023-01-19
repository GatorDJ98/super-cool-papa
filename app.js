const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World! This is David!')
})

console.log('in the node console');

app.listen(PORT, () => {
  console.log(`Server is running & listening on port: ${PORT}`);
});