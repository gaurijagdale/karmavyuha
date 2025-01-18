import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar  from "@/components/Navbar";
import LandingMain from "@/pages/landing/LandingMain";
import Login from './components/Login';

const App = () => {
  const location = useLocation(); // Get the current route

  return (
    <>
      {location.pathname !== '/login' && <Navbar />}
      <Routes>
      <Route path='/' element={< LandingMain/>} />
      <Route path='/login' element={< Login/>} />
      </Routes>
    </>
  )
}

function AppWrapper() {
  return (
      <Router>
          <App />
      </Router>
  );
}

export default AppWrapper
