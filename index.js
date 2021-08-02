require('./models/db');
const express = require('express');
const employeeController = require('./controllers/employeeController');

const app = express();

app.listen(3000, () => {
    console.log('Server running on https://localhost:3000');
});

app.use('/employee', employeeController);