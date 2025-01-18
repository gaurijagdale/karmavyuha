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

const App = () => {
  const location = useLocation(); 

  return (
    <>
      {location.pathname !== "/login" && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingMain />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
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
