import express from "express";
import { createProject, getAllProjects, getProjectById } from "../controllers/projectController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getAllProjects);
router.get("/:id", verifyToken, getProjectById);
router.post("/", verifyToken, createProject);

export default router;
