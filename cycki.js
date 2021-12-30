const express = require('express');
const app = express();
const router = express.Router();

router.get('/home', (req,res) => {
 
const mysql = require('pg');

const DATABASE_HOST='localhost';
const DATABASE_USER='xyloh';
const DATABASE_PASSWORD='xylo1991';
const DATABASE_NAME='cycki';

const {Client} = require('pg');

const main = async () => {
 		const client = new Client({
        user: DATABASE_USER,
        password: DATABASE_PASSWORD,
        database: DATABASE_NAME,
        host: DATABASE_HOST,
    });
    await client.connect();
   
        console.log(await client.query('SELECT * from person;'));
    
};

main().catch(console.error);
});

router.get('/profile', (req,res) => {
    res.render('/home/xyloh/www/index.html');
});

router.get('/login', (req,res) => {
  res.send('  Hello World, This is login router');
});

router.get('/logout', (req,res) => {
  res.send('  Hello World, This is logout router ');
});

app.use('/', router);

app.listen(process.env.port || 3000);

console.log('Web Server is listening at port '+ (process.env.port || 3000));