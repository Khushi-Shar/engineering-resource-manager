import { useEffect, useState } from "react";

const EngineerDashboard = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      const res = await fetch("http://localhost:5000/api/assignments", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      setAssignments(data);
    };

    fetchAssignments();
  }, []);

  return (
    <div>
      <h2>Engineer Dashboard</h2>
      <h3>My Assignments</h3>
      <ul>
        {assignments.map((a: any) => (
          <li key={a._id}>
            Project: {a.projectId?.name || a.projectId} — {a.allocationPercentage}% from{" "}
            {new Date(a.startDate).toLocaleDateString()} to{" "}
            {new Date(a.endDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EngineerDashboard;
