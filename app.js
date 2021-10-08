const { Router } = require('express');
const express = require('express');
const app = express();
const router = require('./router/tasks');

app.use(express.json());

app.use('/api/v1/tasks', router);

app.use(express.static('./public'));



app.listen(80);