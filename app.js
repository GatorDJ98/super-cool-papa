const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://David:Corinth1998!@cluster0.auvw22f.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



app.get('/', function (req, res) {
  res.send('Hello World! This is David!')
})

console.log('in the node console');

app.listen(PORT, () => {
  console.log(`Server is running & listening on port: ${PORT}`);
});