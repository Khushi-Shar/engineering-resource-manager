import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  engineerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  allocationPercentage: { type: Number, required: true }, 
  startDate: Date,
  endDate: Date,
  role: String, 
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment;
