const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('./starter'));

app.listen(80);