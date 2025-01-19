import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ManEmployees = () => {
    const [employees, setEmployees] = useState<any[]>([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/fetch/employees`);
                setEmployees(response.data);
            } catch (error) {
                console.error("Error fetching employees", error);
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div className='w-full flex flex-wrap gap-4 items-center justify-between p-10'>
            {employees.map((employee) => (
                <Link to={`/empprofile/${employee.user}`} key={employee._id}>
                    <div className='w-96 h-64 bg-gray-900 rounded-xl p-4'>
                        <h3 className="text-white text-xl">{employee.name}</h3>
                        <p className="text-gray-400">{employee.department}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ManEmployees
