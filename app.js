import express from "express";
import cors from "cors";

import projectRoutes from "./routes/projectRoutes.js";
import workerRoutes from "./routes/workerRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api/workers", workerRoutes);
app.use("/api/attendance", attendanceRoutes);

export default app;