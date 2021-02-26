let query = {};

// query.pushTenEmp = (data) => {
query.pushTenEmp = (data) => {
    let query = `INSERT INTO employee (department_id,title,full_name)
    VALUES `;
    // let data = [];
    const rowCount = data.length;
    for (let id = 1; id < rowCount; ++id) {
        const element = data[id];
        query += `(${element.department_id || 0},'${element.title || 'default'}','${element.full_name || 'default_name'}'),`
    }
    const element = data[data.length - 1]
    query += `(${element.department_id || 0},'${element.title || 'default'}','${element.full_name || 'default_name'}');`
    return query;
}
query.getCount = () => {
    let query = `select d.id as department_id ,d.full_name as department_name ,
                Count(*) as number_of_employee from employee e left join department d
                 on e.department_id=d.id group by d.full_name`;
    return query;
}
query.getWithDepartmentById = (id) => {
    let query = `select e.id , e.title , e.full_name as emp_name,d.full_name as department_name from employee e
                 left join department d on e.department_id = d.id where e.id = ${id} `;
    return query;
}
query.getWithDepartment = () => {
    let query = `select e.id,e.title,e.full_name as emp_name,d.full_name as department_name from employee e
                 left join department d on e.department_id = d.id `;
    return query;
}
query.getCountByDepId = (id) => {
    let query = `select d.id as department_id ,d.full_name as department_name ,
                Count(*) as number_of_employee from employee e left join department d
                on e.department_id=d.id where d.id=${id} group by d.full_name `;
    return query;
}


module.exports = query;