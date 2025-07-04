import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import User from "./models/User.js";
import Project from "./models/Project.js";
import Assignment from "./models/Assignment.js";

dotenv.config();

const connect = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("📦 Connected to MongoDB");
};

const seed = async () => {
  await connect();

  // Clear old data
  await User.deleteMany();
  await Project.deleteMany();
  await Assignment.deleteMany();

 
  const password = await bcrypt.hash("password123", 10);

  const manager = await User.create({
    name: "Alice Manager",
    email: "manager@example.com",
    password,
    role: "manager",
    department: "Engineering",
  });

  const engineers = await User.insertMany([
    {
      name: "John Doe",
      email: "john@example.com",
      password,
      role: "engineer",
      skills: ["React", "Node.js"],
      seniority: "mid",
      maxCapacity: 100,
      department: "Frontend",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      password,
      role: "engineer",
      skills: ["Python", "Node.js"],
      seniority: "senior",
      maxCapacity: 50,
      department: "Backend",
    },
    {
      name: "Sam Wilson",
      email: "sam@example.com",
      password,
      role: "engineer",
      skills: ["React", "Python"],
      seniority: "junior",
      maxCapacity: 100,
      department: "Fullstack",
    },
  ]);

  const projects = await Project.insertMany([
    {
      name: "Frontend Redesign",
      description: "Revamp the UI using Tailwind and React",
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-09-01"),
      requiredSkills: ["React"],
      teamSize: 2,
      status: "active",
      managerId: manager._id,
    },
    {
      name: "Backend Optimization",
      description: "Improve API performance",
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-08-01"),
      requiredSkills: ["Node.js", "Python"],
      teamSize: 2,
      status: "active",
      managerId: manager._id,
    },
    {
      name: "AI Integration",
      description: "Integrate AI suggestions into app",
      startDate: new Date("2024-08-01"),
      endDate: new Date("2024-12-01"),
      requiredSkills: ["Python"],
      teamSize: 1,
      status: "planning",
      managerId: manager._id,
    },
  ]);

  const assignments = await Assignment.insertMany([
    {
      engineerId: engineers[0]._id,
      projectId: projects[0]._id,
      allocationPercentage: 50,
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-08-15"),
      role: "Developer",
    },
    {
      engineerId: engineers[1]._id,
      projectId: projects[1]._id,
      allocationPercentage: 50,
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-07-31"),
      role: "Tech Lead",
    },
    {
      engineerId: engineers[2]._id,
      projectId: projects[0]._id,
      allocationPercentage: 30,
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-09-01"),
      role: "Developer",
    },
    {
      engineerId: engineers[0]._id,
      projectId: projects[1]._id,
      allocationPercentage: 30,
      startDate: new Date("2024-07-15"),
      endDate: new Date("2024-08-01"),
      role: "Support",
    },
    {
      engineerId: engineers[2]._id,
      projectId: projects[1]._id,
      allocationPercentage: 50,
      startDate: new Date("2024-06-10"),
      endDate: new Date("2024-07-20"),
      role: "Developer",
    },
    {
      engineerId: engineers[1]._id,
      projectId: projects[2]._id,
      allocationPercentage: 50,
      startDate: new Date("2024-08-01"),
      endDate: new Date("2024-12-01"),
      role: "AI Expert",
    },
  ]);

  console.log("Seeded successfully!");
  process.exit();
};

seed();
