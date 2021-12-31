const express = require('express');
const Datastore=require('nedb');
const port =process.env.PORT || 3000
const app = express();
app.set('view engine','hbs')
app.get('/',(req,res)=> {

let x;
const database = new Datastore('Persons.db');
database.loadDatabase();
database.insert({name:'Jada Facer',age:23});
database.findOne({ name: 'Jada Facer' }, function(err, doc) {
  console.log('Found user:', doc.name);
  res.render('index',{

    cycki:doc.name
  })
  
});


})
app.listen(port);