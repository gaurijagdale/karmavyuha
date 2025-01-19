import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ManProjects = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [allManagers, setAllManagers] = useState<any[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/fetch/projects`);
                setProjects(response.data);
            } catch (error) {
                console.error("Error fetching projects", error);
            }
        };

        const fetchManagers = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/fetch/managers`);
                setAllManagers(response.data);
            } catch (error) {
                console.error("Error fetching managers", error);
            }
        }

        fetchManagers();
        fetchProjects();
    }, []);

    return (
        <div className='w-full flex flex-wrap gap-4 items-center justify-between p-10'>
            {projects.map((project) => {
                // Find the project manager by comparing projectManagerId with manager's user
                const manager = allManagers.find(manager => manager.user === project.projectManagerId);

                return (
                    <Link to={`/projectspecific/${project._id}`} key={project._id}>
                        <div className='w-96 h-64 bg-gray-900 rounded-xl p-4'>
                            <h1 className="text-white text-xl">{project.name} | <span className='text-zinc-400'> {project.status}</span></h1>
                            <p className="text-gray-400">Deadline: {new Date(project.endDate).toLocaleDateString()}</p>

                            {/* Display project manager's name */}
                            {manager ? (
                                <p className="text-gray-400">Project Manager: {manager.name}</p>
                            ) : (
                                <p className="text-gray-400">Project Manager: Not Found</p>
                            )}

                            {/* Display employee names */}
                            {project.employees.map((employeeId: string, index: number) => (
                                <p key={index} className="text-gray-300">Employee {index + 1}</p>
                            ))}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default ManProjects;
