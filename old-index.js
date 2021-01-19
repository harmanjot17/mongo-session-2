const express = require('express');

const app = express();

// DB connect




const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://utmtest:4BG4F8gjFNj0yLCX@cluster0.exmeh.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object

  console.log(collection);



  client.close();
});






app.get('/test', (req, res)=>{

    res.json({ message : 'hello'})
});


app.listen(3000, (req, res)=>{
    console.log('server started');
});