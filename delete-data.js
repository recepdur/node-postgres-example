const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: '1234abcd',
    port: 5432,
});

client.connect()

const query = `
DELETE FROM users
WHERE email = 'johndoe@gmail.com'
`

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }

    if (err) {
        console.error(err);
        return;
    }

    console.log('Data delete successful');
});