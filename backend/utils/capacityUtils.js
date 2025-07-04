import User from "../models/User.js";
import Assignment from "../models/Assignment.js";

/**
 * Get how much capacity an engineer has left.
 * @param {ObjectId} engineerId
 */
export const getAvailableCapacity = async (engineerId) => {
  const engineer = await User.findById(engineerId);
  if (!engineer) return null;

  const activeAssignments = await Assignment.find({ engineerId });

  const totalAllocated = activeAssignments.reduce(
    (sum, a) => sum + a.allocationPercentage,
    0
  );

  return engineer.maxCapacity - totalAllocated;
};

/**
 * Find engineers who match at least one required skill for a project
 * @param {Array<String>} requiredSkills
 */
export const findSuitableEngineers = async (requiredSkills) => {
  const allEngineers = await User.find({ role: "engineer" });
  return allEngineers.filter((engineer) =>
    requiredSkills.some((skill) => engineer.skills.includes(skill))
  );
};
