const connectDB = require('./db/tasks');
const express = require('express');
const app = express();
const router = require('./router/tasks');
require('dotenv').config();

app.use(express.json());

app.use('/api/v1/tasks', router);

app.use(express.static('./public'));

const start = async () => {
    try {
        await connectDB(process.env.URI);
        app.listen(80, () => console.log('connected to server'));
    } catch (err) {
        console.log(err);
    }
}

start();