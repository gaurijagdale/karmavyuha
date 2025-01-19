import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GPT from "./GPT";
// import logo from "../assets/Logo.png";
import logoo from "../assets/Logoo.jpg";

import { AuthContext } from "../contexts/AuthContext";


const Navbar = () => {
  const authContext = useContext(AuthContext);
  const email = authContext?.email;
  const [userRole, setUserRole] = useState<string>("");
  interface User {
    email: string;
    role: string;
    // Add other user properties here
  }

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (email) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/fetch/user/${email}`
          );
          setUser(response.data);
          setUserRole(response.data.role);
          // Set the user data after fetching
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchUserData(); // Call the async function
  }, [email]); // This hook will run every time email changes

  const empID = "678c35d42382e89dad523e48";
  return (
    <div className="w-full flex justify-between items-center py-2 px-16 bg-gray-900">
      <Link to="/">
        <img src={logoo} alt="" className="w-20 rounded-full object-cover" />
      </Link>

      {userRole === "employee" ? (
        <>
          <Link to="/employeedashboard">
            <Button variant="outline">Overview Emp</Button>
          </Link>
          
          {/* <Link to="/employeeleaderboard">
            <Button variant="outline">Leaderboard</Button>
          </Link> */}

          <Link to={`/empprofile/${empID}`}>
            <Button variant="outline">Profile</Button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/manager/allemployees">
            <Button variant="outline">All Employees</Button>
          </Link>
          <Link to="/manager/projects">
            <Button variant="outline">Projects</Button>
          </Link>
        </>
      )}
      <button>
        <GPT />
      </button>

      <Link to="/login">
        <Button variant="outline">Login</Button>
      </Link>
    </div>
  );
};

export default Navbar;
