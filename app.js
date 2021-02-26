const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const Builder = require('./db/queryBuilder.js');
const sql = require('./db/conn')



//this Api simply Returns employees with department Names
app.get('/emp', function (req, res) {
    console.log("inside Get Employee Request");
    try {
        let q = req.query.id == undefined ?
            Builder.getWithDepartment() : Builder.getWithDepartmentById(req.query.id);
        sql.getConnection((err, conn) => {
            if (err) {
                throw err;
            }
            conn.query(q, (err, rows) => {
                conn.release();
                if (err) {
                    throw err
                }
                res.send({
                    status: "success",
                    response: rows
                });
            })
        })
    } catch (err) {
        res.send({
            status: "failed",
            response: `failed due to err ${err}`
        })
    }
})

app.post('/p', function (req, res) {
    console.log("inside insert employee Function");
    try {
        let q = Builder.pushTenEmp(req.body);
        sql.getConnection((err, conn) => {
            if (err) {
                throw err;
            }
            conn.query(q, (err, rows) => {
                conn.release();
                if (err) {
                    throw err
                }
                res.send({
                    status: "success",
                    rowsAffected: rows.affectedRows
                });
            })
        })

    } catch (err) {
        res.send({
            status: "failed",
            response: `failed due to err ${err}`
        })
    }
})
app.get('/dep', (req, res) => {
    console.log("inside getting Count of department");
    try {
        let q = req.query.id == undefined ?
            Builder.getCount() : Builder.getCountByDepId(req.query.id);
        sql.getConnection((err, conn) => {
            if (err) {
                throw err;
            }
            conn.query(q, (err, rows) => {
                conn.release();
                if (err) {
                    throw err
                }
                res.send({
                    status: "success",
                    response: rows
                });
            })
        })
    } catch (err) {
        res.send({
            status: "failed",
            response: `failed due to err ${err}`
        })
    }
})







app.listen(3000, () => { console.log(`server listening at 3000`) });

/**
 *
 * sql.query(q, function (error, results, fields) {
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
 */

 /**
  * 
  * 
  * 
select e.id,e.title,e.full_name as emp_name,d.full_name as department_name  from employee e
                 left join department d on e.department_id = d.id ;
                 
                 
select full_name as department_name ,COUNT(*) From department Group By full_name;


-- 
select d.id ,d.full_name ,Count(*) from employee e left join department d on e.department_id=d.id group by d.full_name;



select d.id as department_id ,d.full_name as department_name ,
                Count(*) as number_of_employee from employee e left join department d
                 on e.department_id=d.id where d.id=2 group by d.full_name 



  */