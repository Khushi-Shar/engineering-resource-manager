import express from "express";
const router = express.Router();

import { login, getProfile } from "../controllers/authControllers.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

router.post("/login", login);
router.get("/profile", verifyToken, getProfile);

export default router;
