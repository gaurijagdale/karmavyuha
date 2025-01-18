import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center p-4 bg-gray-900'>
            <Link to="/">
                <div>Logo</div>
            </Link>

            <Link to="/employeedashboard"><Button variant="outline">Overview Emp</Button></Link>
            <Link to="/employeeprojects"><Button variant="outline">Projects</Button></Link>
            <Link to="/employeeleaderboard"><Button variant="outline">Leaderboard</Button></Link>
            
            <Link to="/login"><Button variant="outline">Login</Button></Link>
        </div>
    )
}

export default Navbar
