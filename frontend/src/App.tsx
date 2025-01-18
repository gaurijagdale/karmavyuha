import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "@/components/Navbar";
import LandingMain from "@/pages/landing/LandingMain";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext"; 
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import EmpProjects from "./pages/employee/EmpProjects";
import EmpLeaderboard from "./pages/employee/EmpLeaderboard";
import ProjectSpecific from "./pages/employee/ProjectSpecific";

const App = () => {
  const location = useLocation(); 

  return (
    <div className="w-full">
      {location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingMain />} />
        <Route path="/projectspecific" element={<ProjectSpecific/>} />
        <Route path="/employeedashboard" element={<EmployeeDashboard />} />
        <Route path="/employeeprojects" element={<EmpProjects />} />
        <Route path="/employeeleaderboard" element={<EmpLeaderboard />} />
        <Route path="/employeedashboard" element={<EmployeeDashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

function AppWrapper() {
  return (
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  );
}

export default AppWrapper;
