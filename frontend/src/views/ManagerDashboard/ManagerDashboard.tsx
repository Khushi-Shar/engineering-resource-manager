import { useEffect, useState } from "react";
import "./ManagerDashboard.css";

const ManagerDashboard = () => {
  const [engineers, setEngineers] = useState([]);

  useEffect(() => {
    const fetchEngineers = async () => {
      const res = await fetch("http://localhost:5000/api/engineers", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      setEngineers(data);
    };

    fetchEngineers();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">👨‍💼 Manager Dashboard</h2>
      <h3 className="section-title">👥 Engineers</h3>
      <ul className="engineer-list">
        {engineers.map((eng: any) => (
          <li className="engineer-card" key={eng._id}>
            <div className="engineer-name">{eng.name}</div>
            <div className="engineer-info">
              <span>Skills: {eng.skills.join(", ")}</span>
              <span>Seniority: {eng.seniority}</span>
              <span>Capacity: {eng.maxCapacity}%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagerDashboard;
