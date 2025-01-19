import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'
import GPT from './GPT'
import logo from '../assets/Logo.png'
import logoo from '../assets/Logoo.jpg'

import { AuthContext } from "../contexts/AuthContext";

interface User {
    _id: string;
    email: string;
    password: string;
    role: string;
}

const Navbar = () => {

    const authContext = useContext(AuthContext);
    const { isLoggedIn, setIsLoggedIn, email, setEmail } = authContext;
    const [user, setUser] = useState<User | null>(null);
    const role = user?.role;

    useEffect(() => {
        if (email) {
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/fetch/user/${email}`)
                .then(response => setUser(response.data))
                .catch(error => console.error('Error fetching user:', error));
        }
    }, [email]);

    console.log('user:', user?.role);

    const empID = '678c35d42382e89dad523e48';
    return (
        <div className='w-full flex justify-between items-center p-4 bg-gray-900'>
            <Link to="/">
                <img src={logo} alt="" className='w-28 rounded-full object-cover'/>
            </Link>
            <button><GPT /></button>

            {role === 'employee' ?
                (
                    <>
                        <Link to="/employeedashboard"><Button variant="outline">Overview Emp</Button></Link>
                        <Link to="/employeeprojects"><Button variant="outline">Projects</Button></Link>
                        <Link to="/employeeleaderboard"><Button variant="outline">Leaderboard</Button></Link>

                        <Link to={`/empprofile/${empID}`}><Button variant="outline">Profile</Button></Link>
                    </>

                ) : (
                    <>
                        <Link to="/manager/allemployees"><Button variant="outline">All Employees</Button></Link>
                        <Link to="/manager/projects"><Button variant="outline">Projects</Button></Link>
                    </>
                )}

            <Link to="/login"><Button variant="outline">Login</Button></Link>
        </div>
    )
}

export default Navbar
