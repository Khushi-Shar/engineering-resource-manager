import Assignment from "../models/Assignment.js";

// GET all assignments
export const getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find()
      .populate("engineerId", "name skills")
      .populate("projectId", "name status");

    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: "Error fetching assignments" });
  }
};

// POST create a new assignment
export const createAssignment = async (req, res) => {
  try {
    const assignment = new Assignment(req.body);
    await assignment.save();
    res.status(201).json(assignment);
  } catch (err) {
    res.status(400).json({ message: "Error creating assignment", error: err });
  }
};

// PUT update an assignment
export const updateAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(assignment);
  } catch (err) {
    res.status(400).json({ message: "Error updating assignment" });
  }
};

// DELETE an assignment
export const deleteAssignment = async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    res.json({ message: "Assignment deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting assignment" });
  }
};
