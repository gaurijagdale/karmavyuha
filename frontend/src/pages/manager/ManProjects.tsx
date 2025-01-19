import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AvatarCircles from "@/components/magicui/avatar-circles";
import profile from "../../assets/profile2.png";

const ManProjects = () => {
  const avatars = [
    {
      imageUrl: { profile },
      profileUrl: "https://github.com/dillionverma",
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/59442788",
        profileUrl: "https://github.com/dillionverma",
      },
      {
        imageUrl: "https://avatars.githubusercontent.com/u/89768406",
        profileUrl: "https://github.com/dillionverma",
      },
  ];
  const [projects, setProjects] = useState<any[]>([]);
  const [allManagers, setAllManagers] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/fetch/projects`
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };

    const fetchManagers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/fetch/managers`
        );
        setAllManagers(response.data);
      } catch (error) {
        console.error("Error fetching managers", error);
      }
    };

    fetchManagers();
    fetchProjects();
  }, []);

  return (
    <div className="w-full grid grid-cols-3 gap-5 p-10">
      {projects.map((project) => {
        // Find the project manager by comparing projectManagerId with manager's user
        const manager = allManagers.find(
          (manager) => manager.user === project.projectManagerId
        );

        return (
          <Link to={`/projectspecific/${project._id}`} key={project._id}>
            <div className="w-96 h-64 flex flex-col bg-gray-900 rounded-xl p-4 space-y-3">
              <h1 className="text-white text-xl">{project.name} </h1>
              <span
                className={`rounded-full w-44 py-1 font-medium px-7 ${
                  project.status === "in progress"
                    ? "text-gray-600 bg-green-300"
                    : "text-gray-600 bg-red-300"
                }`}
              >
                {project.status}
              </span>
              <p className="text-gray-400">
                Deadline: {new Date(project.endDate).toLocaleDateString()}
              </p>

              {/* Display project manager's name */}
              {manager ? (
                <p className="text-gray-400">Project Manager: {manager.name}</p>
              ) : (
                <p className="text-gray-400">Project Manager: Not Found</p>
              )}

              <AvatarCircles numPeople={5} avatarUrls={avatars} />
              {/* Display employee names */}
              {/* {project.employees.map((employeeId: string, index: number) => (
                <p key={index} className="text-gray-300">
                  Employee {index + 1}
                </p>
              ))} */}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ManProjects;
