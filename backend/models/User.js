import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  password: { type: String, required: true },
  role: { type: String, enum: ["engineer", "manager"], required: true },
  skills: [String],
  seniority: { type: String, enum: ["junior", "mid", "senior"] },
  maxCapacity: Number,
  department: String,
});

const User = mongoose.model("User", userSchema);

export default User;
