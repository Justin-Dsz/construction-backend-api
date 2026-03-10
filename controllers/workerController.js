import { db } from "../config/db.js";

export const createWorker = (req, res) => {
  const { name } = req.body;

  const sql = "INSERT INTO workers (name) VALUES (?)";

  db.query(sql, [name], (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "Worker added",
      id: result.insertId
    });
  });
};

export const getWorkers = (req, res) => {
  db.query("SELECT * FROM workers", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};