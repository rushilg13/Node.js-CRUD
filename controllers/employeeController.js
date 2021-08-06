const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');

router.get('/', (req, res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee"
    });
})

router.post('/', (req, res) => {
    insertRecord(req, res);
    res.redirect('/employee');
})

function insertRecord(res, req) {
    console.log(req.req.body);
    var employee = new Employee();
    employee.fullName = req.req.body.fullName;
    employee.email = req.req.body.email;
    employee.mobile = req.req.body.mobile;
    employee.city = req.req.body.city;
    employee.save((err, doc) => {
        if (!err) { res.render('employee/list'); } else {
            console.error("Error while Inserting Record: " + err);
        }
    });
}

router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render("employee/list", { list: docs });
        } else {
            console.error("Error in retriving records " + err);
        }
    }).lean();
})

// router.get('/:id', (req, res) => {
//     Employee.findById(req.params.id, (err, doc) => {
//         if (!err) {
//             res.render('employee/addOrEdit', {
//                 viewTitle: "Update Employee",
//                 employee: doc
//             })
//         }
//     })
// })

module.exports = router;