CREATE DATABASE construction_db;
USE construction_db;

CREATE TABLE projects (
 id INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(100)
);

CREATE TABLE workers (
 id INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(100)
);

CREATE TABLE attendance (
 id INT PRIMARY KEY AUTO_INCREMENT,
 worker_id INT,
 project_id INT,
 date DATE,
 FOREIGN KEY(worker_id) REFERENCES workers(id),
 FOREIGN KEY(project_id) REFERENCES projects(id)
);