const express = require('express');
const app = express();


//Import the mongoose module
var mongoose = require('mongoose');


var mongoDB = 'mongodb://127.0.0.1/91w1'; //Set up default mongoose connection
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection; //Get the default connection

db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function(){
  console.log("Connected to DB");
  //do operations which involve interacting with DB.
});


// Define schema
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  id : String,
  title : String,
  author : String,
  content: String,
  created: Date
});

var bookModel = mongoose.model('bookModel', bookSchema ); // Compile model from schema

console.log(bookModel);

// const bookdata = new bookModel( { title : 'Zero to One', author : "abcd"});
// const bookdata2 = new bookModel( { id : '10', title : 'Zero to One', author : "abcd"});


// bookdata.save(function(err){
// })


// bookdata2.save(function(err){
// });


bookModel.findOne({ id : '10'}, function(err, obj){
  console.log(obj);
});



app.listen(4000, ()=>{
    console.log('server started');
}) 