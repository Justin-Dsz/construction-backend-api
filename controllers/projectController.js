import { db } from "../config/db.js";

export const createProject = (req, res) => {
  const { name } = req.body;

  const sql = "INSERT INTO projects (name) VALUES (?)";

  db.query(sql, [name], (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "Project created",
      id: result.insertId
    });
  });
};

export const getProjects = (req, res) => {
  db.query("SELECT * FROM projects", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};