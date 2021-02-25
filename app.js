const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const Builder = require('./queryBuilder.js');
const sql = require('./db/conn')
app.get('/', (req, res) => {
    console.log('inside ');
    res.json({ name: 'bull' })
})
app.get('/emp', function (req, res) {
    console.log("inside Get Employee Request");
    try {
        let q = req.query.id == undefined ?
            Builder.getWithDepartment() : Builder.getWithDepartmentById(req.query.id);
        sql.connect();
        // console.log(query);
        // let response;
        sql.query(q, function (error, results, fields) {
            if (error) {
                sql.end();
                throw error;
            }
            res.send({
                status: "success",
                response: results
            });
            sql.end();
        })


    } catch (err) {
        res.send({
            status: "failed",
            response: `failed due to err ${err}`
        })
    }
})
app.get('/dep:depName', (req, res) => {
    //get
    let value = req.params.depName;

    res.send(value)
})
app.post('/', (req, res) => {
    //insert 10 records in DB
    const bodyRequest = req.body
    console.log(bodyRequest)
    res.json({ name: 'good' })
})






app.listen(3000, () => { console.log(`server listening at 3000`) });

/**
 *
 *root123
 */