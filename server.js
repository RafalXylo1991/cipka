var express = require('express');  
var app = express();  
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const flash = require('connect-flash');
const session= require('express-session')
//import index rout
const routes = require('./routes/index')
const pagesController = require('./controlers/PagesController')
const port = process.env.PORT || 3000;

app.set('views',path.join(__dirname,'views'));
//ejs render engin
app.set('view engine','ejs');

app.use(express.static('views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(flash())
app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        // secure: true, // becareful set this option, check here: https://www.npmjs.com/package/express-session#cookiesecure. In local, if you set this to true, you won't receive flash as you are using `http` in local, but http is not secure
      },
    })
)
//use '/' routes
try{
app.use('/',routes); 
}catch(err){

  console.log(err)
}

app.listen(port);

 