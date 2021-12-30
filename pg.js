
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
    try {
        console.log(await client.query('SELECT * from person;'));
    } finally {
        await client.end();
    }
};

main().catch(console.error);