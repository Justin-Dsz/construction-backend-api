import { db } from "../config/db.js";

export const markAttendance = (req, res) => {
  const { worker_id, project_id, date } = req.body;

  const sql =
    "INSERT INTO attendance (worker_id, project_id, date) VALUES (?, ?, ?)";

  db.query(sql, [worker_id, project_id, date], (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "Attendance marked"
    });
  });
};

export const getAttendance = (req, res) => {
  const { projectId } = req.query;

  const sql = `
  SELECT workers.name, attendance.date
  FROM attendance
  JOIN workers ON attendance.worker_id = workers.id
  WHERE attendance.project_id = ?
  `;

  db.query(sql, [projectId], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};