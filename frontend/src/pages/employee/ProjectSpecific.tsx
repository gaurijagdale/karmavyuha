import React, { useState, useEffect } from "react";
import TextGen from "@/components/TextGen";
import { useParams } from "react-router-dom";
import profile from "../../assets/profile2.png";

const ProjectSpecific = () => {
  const { id } = useParams<{ id: string }>(); // Extract project ID from URL
  const [projectData, setProjectData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/fetch/project/${id}`
        );
        const data = await response.json();
        setProjectData(data);
        console.log(data);
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
console.log(projectManager.email)

  return (
    <div>
      <div className="w-full h-screen p-10 space-y-3">
        {/* Project Header */}
        <div className="w-full py-6 bg-gray-900 rounded-xl text-center space-y-4">
          <h1 className="text-xl font-semibold">{project.name}</h1>
          <div className="flex justify-center text-sm text-zinc-300 space-x-3">
            <h2>
              {project.status === "in progress" ? "In Progress" : "Not Started"}
            </h2>
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
            <div className="space-y-4 bg-slate-700 rounded-xl p-5">
              <p className="text-zinc-300">{project.description}</p>
            </div>
            <div className="flex space-x-4">
              <p className="text-black text-sm bg-green-300 py-1 px-3 rounded-full mt-4">
                Start Date: {new Date(project.startDate).toDateString()}
              </p>
              <p className="text-black text-sm bg-red-300 py-1 px-3 rounded-full mt-4">
                End Date: {new Date(project.endDate).toDateString()}
              </p>
            </div>
          </div>
          <div className="col-span-1 bg-gray-900 rounded-xl h-96 p-4 space-y-7">
            <h2 className="text-lg font-semibold mb-2">Project Manager</h2>
            <div className="flex flex-col justify-center items-center space-y-5">
              <img
                src={profile}
                alt={projectManager.name}
                className="w-28 h-28 rounded-full"
              />
              <p className="text-zinc-300 text-lg font-semibold">{projectManager.name}</p>
              <p className="text-zinc-300 text-lg font-semibold">{projectManager.email}</p>

            </div>
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

export default ProjectSpecific;
