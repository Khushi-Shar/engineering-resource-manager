import express from "express";
import {
  getAllAssignments,
  createAssignment,
  updateAssignment,
  deleteAssignment,
} from "../controllers/assignmentController.js";

import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getAllAssignments);
router.post("/", verifyToken, createAssignment);
router.put("/:id", verifyToken, updateAssignment);
router.delete("/:id", verifyToken, deleteAssignment);

export default router;
