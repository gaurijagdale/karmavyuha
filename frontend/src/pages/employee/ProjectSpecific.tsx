import React, { useState, useEffect } from 'react'
import TextGen from '@/components/TextGen'
import { useParams } from 'react-router-dom';

const ProjectSpecific = () => {
    const { id } = useParams<{ id: string }>(); // Extract project ID from URL
    const [projectData, setProjectData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/fetch/project/${id}`);
                const data = await response.json();
                setProjectData(data);
                console.log(data)
            } catch (error) {
                console.error("Error fetching project data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!projectData) {
        return <div>No project data available.</div>;
    }

    const { project, projectManager, projectEmployees } = projectData;

    return (
        <div>
            <div className="w-full h-screen p-10 space-y-3">
                {/* Project Header */}
                <div className="w-full py-6 bg-gray-900 rounded-xl text-center space-y-4">
                    <h1 className="text-xl font-semibold">{project.name}</h1>
                    <div className="flex justify-center text-sm text-zinc-300 space-x-3">
                        <h2>{project.status === "in progress" ? "In Progress" : "Not Started"}</h2>
                        <h2>
                            {new Date(project.endDate).getMonth() -
                                new Date(project.startDate).getMonth()}{" "}
                            months left
                        </h2>
                    </div>
                </div>

                {/* Project Details and Team */}
                <div className="w-full grid grid-cols-4 gap-4">
                    <div className="col-span-2 bg-gray-900 rounded-xl h-96 p-4">
                        <h2 className="text-lg font-semibold mb-2">Project Info</h2>
                        <p className="text-zinc-300">{project.description}</p>
                        <p className="text-zinc-300 mt-4">
                            Start Date: {new Date(project.startDate).toDateString()}
                        </p>
                        <p className="text-zinc-300">End Date: {new Date(project.endDate).toDateString()}</p>
                    </div>
                    <div className="col-span-1 bg-gray-900 rounded-xl h-96 p-4">
                        <h2 className="text-lg font-semibold mb-2">Project Manager</h2>
                        <p className="text-zinc-300">{projectManager.name}</p>
                    </div>
                    <div className="col-span-1 bg-gray-900 rounded-xl h-96 p-4">
                        <h2 className="text-lg font-semibold mb-2">Team Members</h2>
                        <ul className="space-y-2">
                            {projectEmployees.map((employee: any) => (
                                <li key={employee._id} className="text-zinc-300">
                                    {employee.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Additional Sections */}
                <div className="w-full grid grid-cols-3 gap-4">
                    <div className="col-span-2 bg-gray-900 rounded-xl h-96">
                        <h2 className="text-lg font-semibold p-4">Workspace</h2>
                    </div>
                    <TextGen />
                </div>
            </div>
        </div>
    );
};

export default ProjectSpecific