import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Constants from "./config/constants.js"; 
import authRoutes from "./routes/authRoutes.js";
import engineerRoutes from "./routes/engineerRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(Constants.AUTH, authRoutes);
app.use(Constants.ENGINEERS, engineerRoutes);
app.use(Constants.PROJECTS, projectRoutes);
app.use(Constants.ASSIGNMENTS, assignmentRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
