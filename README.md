# Construction Project Backend API

A RESTful backend API for managing construction projects, workers, and daily attendance records.
Built using Node.js, Express, and MySQL to demonstrate backend architecture, relational database design, and API development.

---

## Tech Stack

* Node.js
* Express.js
* MySQL
* REST API Architecture

---

## Features

* Create and manage construction projects
* Add and manage workers
* Track worker attendance per project
* Retrieve attendance records using SQL joins
* Structured backend architecture with routes and controllers

---

## Project Structure

```
backend
│
├── controllers
│   ├── projectController.js
│   ├── workerController.js
│   └── attendanceController.js
│
├── routes
│   ├── projectRoutes.js
│   ├── workerRoutes.js
│   └── attendanceRoutes.js
│
├── config
│   └── db.js
│
├── database
│   └── schema.sql
│
├── app.js
├── server.js
└── package.json
```

---

## API Endpoints

### Projects

| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| POST   | `/api/projects` | Create a new project  |
| GET    | `/api/projects` | Retrieve all projects |

### Workers

| Method | Endpoint       | Description          |
| ------ | -------------- | -------------------- |
| POST   | `/api/workers` | Add a worker         |
| GET    | `/api/workers` | Retrieve all workers |

### Attendance

| Method | Endpoint                      | Description                  |
| ------ | ----------------------------- | ---------------------------- |
| POST   | `/api/attendance`             | Mark worker attendance       |
| GET    | `/api/attendance?projectId=1` | Get attendance for a project |

---

## Database Setup

Install MySQL and run the schema file included in the repository.

```
mysql -u root -p < database/schema.sql
```

This will create the required tables:

* projects
* workers
* attendance

---

## Installation

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/construction-backend-api.git
```

Install dependencies:

```
npm install
```

Start the server:

```
node server.js
```

The API will run on:

```
http://localhost:3000
```

---

## Example Request

Create a new project:

```
POST /api/projects
```

Body:

```json
{
  "name": "Metro Bridge Construction"
}
```

---

## Future Improvements

* JWT authentication
* Role-based access control
* Project material tracking
* Invoice generation
* API documentation with Swagger

---

## Author

Justin D'souza
Computer Engineering Student | Backend Development Enthusiast
