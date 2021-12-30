const express = require('express');
const port =process.env.PORT || 3000
const app = express();
app.get('/',(req,res)=> {
console.log("cycki");
res.send('hello');
})
app.listen(port);