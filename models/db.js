const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, { useUnifiedTopology: true }, (err) => {
    if (!err) { console.log('Connection Successful'); } else {
        console.error(err);
    }
});

require('./employee.model');