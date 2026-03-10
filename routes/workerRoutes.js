import express from "express";
import { createWorker, getWorkers } from "../controllers/workerController.js";

const router = express.Router();

router.post("/", createWorker);
router.get("/", getWorkers);

export default router;