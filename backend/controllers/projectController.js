import Project from "../models/Project.js";

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("managerId", "name email");
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Error fetching projects" });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate("managerId", "name email");
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: "Error fetching project" });
  }
};

export const createProject = async (req, res) => {
  try {
    const newProject = new Project({ ...req.body, managerId: req.userId });
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: "Error creating project", error: err.message });
  }
};
