import User from "../models/User.js";

export const getAllEngineers = async (req, res) => {
  try {
    const engineers = await User.find({ role: "engineer" }).select("-password");
    res.json(engineers);
  } catch (err) {
    console.error("Error fetching engineers:", err);
    res.status(500).json({ message: "Server error" });
  }
};
