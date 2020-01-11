const express = require('express');

const app = express();

app.use(express.json());

require('./app/controllers')(app);

app.listen(3000);