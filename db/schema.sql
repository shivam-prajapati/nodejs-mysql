
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_id INT ,
  title  VARCHAR(100)  NOT NULL,
  full_name  VARCHAR(100)
);
INSERT INTO employee (department_id,title,full_name)
VALUES 
(1,'Developer','john Beckhum'),
(1,'Tester','Leatrice Honeycutt'),
(2,'Web Designer','Rona Alles'),
(2,'Developer','Janina Sullivan'),
(3,'Tester','Rosa Lambdin');
INSERT INTO employee (department_id,title,full_name)
VALUES 
(4,'Manager','Georgiana Cornman'),
(4,'Tester','Stan Chartrand'),
(4,'System Engineer','Beatrice Yard'),
(5,'Developer','Tracy Currin'),
(5,'Tester','amit saini');


CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  full_name  VARCHAR(100)  NOT NULL
);
INSERT INTO department (id,full_name)
VALUES 
(1,'Medicine Management'),
(2,'income-tax'),
(3,'Front end mng'),
(4,'Marketing'),
(5,'app developer');

-- run below commands in case of Auth problem
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root123';
-- flush privileges;


