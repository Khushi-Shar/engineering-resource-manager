import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login/Login";
import ManagerDashboard from "./views/ManagerDashboard/ManagerDashboard";
import EngineerDashboard from "./views/EngineerDashboard/EngineerDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/engineer" element={<EngineerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
