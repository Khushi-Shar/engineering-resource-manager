import express from "express";
import { getAllEngineers } from "../controllers/engineerController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", verifyToken, getAllEngineers);

export default router;
