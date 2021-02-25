let query = {};

query.pushTenEmp = (data) => {
    let query = ``
    return query;
}
query.getWithDepartmentById = (id) => {
    let query = `select * from employee e left join department d on e.department_id = d.id where e.id = ${id} `;
    return query;
}
query.getWithDepartment = () => {
    let query = `select * from employee e left join department d on e.department_id = d.id `;
    return query;
}



module.exports = query;