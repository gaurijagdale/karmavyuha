import React, { useState, useEffect } from "react";
import TextGen from "@/components/TextGen";
import { useParams } from "react-router-dom";
import profile from "../../assets/profile2.png";

const ProjectSpecific = () => {
  const { id } = useParams<{ id: string }>(); // Extract project ID from URL
  const [projectData, setProjectData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [projectStatus, setProjectStatus] = useState<string>("");

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

  // setProjectStatus(project.status);
  // console.log(projectStatus);
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
          <div className="col-span-1 bg-gray-900 rounded-xl h-96 p-4 space-y-7">
            <h2 className="text-lg font-semibold mb-2 text-center">
              Project Manager
            </h2>
            <div className="flex flex-col justify-center items-center space-y-5">
              <img
                src={profile}
                alt={projectManager.name}
                className="w-28 h-28 rounded-full"
              />
              <p className="text-zinc-300 text-lg font-semibold">
                {projectManager.name}
              </p>
              <div className="flex flex-col justify-center items-center space-y-1">
                <p className="text-zinc-400 font-semibold text-sm">
                  {projectManager.department}
                </p>
                <p className="text-zinc-400 font-semibold text-sm">
                  {projectManager.email}
                </p>
                <p className="text-zinc-400 font-semibold text-sm">
                  {projectManager.phoneNumber}
                </p>
              </div>
            </div>
          </div>
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
            <div>
              <button>Report</button>
            </div>
          </div>

          <div className="col-span-1 bg-gray-900 rounded-xl h-96 p-4">
            <h2 className="text-lg font-semibold mb-2">Team Members</h2>
            <ul className="space-y-2">
              {projectEmployees.map((employee: any) => (
                <li
                  key={employee._id}
                  className="text-zinc-300 font-semibold p-2"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={profile}
                      alt=""
                      className="rounded-full w-14 h-14"
                    />
                    <div>{employee.name}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="col-span-1 bg-gray-900 rounded-xl h-96">
            <h2 className="text-lg font-semibold p-4">Overview</h2>
            <div className=" py-3 px-7 space-y-3">
              <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
                Completed Work
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-green-600 h-2.5 rounded-full dark:bg-green-500"
                  style={{ width: "55%" }}
                ></div>
              </div>
              <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">
                Ongoing tasks
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
                Crossed deadline
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-red-600 h-2.5 rounded-full dark:bg-red-500"
                  style={{ width: "25%" }}
                ></div>
              </div>

              <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
                Tasks on hold
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                  className="bg-yellow-400 h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className=" col-span-1 bg-gray-900 p-7">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <img
                    className="rounded-full shadow-lg w-28"
                    src={profile}
                    alt="Bonnie image"
                  />
                </span>
                <div className="items-center justify-between p-4 bg-gray-700 border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                  <time className="mb-1 text-xs font-normal text-zinc-200 sm:order-last sm:mb-0">
                    just now
                  </time>
                  <div className="text-sm font-normal text-zinc-200 dark:text-gray-300">
                    Bonnie moved{" "}
                    <a
                      href="#"
                      className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Jese Leos
                    </a>{" "}
                    to{" "}
                    <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">
                      Funny Group
                    </span>
                  </div>
                </div>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <img
                    className="rounded-full shadow-lg"
                    src={profile}
                    alt="Thomas Lean image"
                  />
                </span>
                <div className="p-4 bg-gray-700 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                  <div className="items-center justify-between mb-3 sm:flex">
                    <time className="mb-1 text-xs font-normal text-zinc-200 sm:order-last sm:mb-0">
                      2 hours ago
                    </time>
                    <div className="text-sm font-normal text-zinc-200 lex dark:text-gray-300">
                      Thomas Lean commented on{" "}
                      <a
                        href="#"
                        className="font-semibold text-blue-600 dark:text-white hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </div>
                  </div>
                  <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                    Hi ya'll! I wanted to share a webinar zeroheight is having
                    regarding how to best measure your design system! This is
                    the second session of our new webinar series on
                    #DesignSystems discussions where we'll be speaking about
                    Measurement.
                  </div>
                </div>
              </li>
              <li className="ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <img
                    className="rounded-full shadow-lg"
                    src={profile}
                    alt="Jese Leos image"
                  />
                </span>
                <div className="items-center justify-between p-4 bg-gray-700 border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                  <time className="mb-1 text-xs font-normal text-zinc-200 sm:order-last sm:mb-0">
                    1 day ago
                  </time>
                  <div className="text-sm font-normal text-zinc-200 lex dark:text-gray-300">
                    Jese Leos has changed{" "}
                    <a
                      href="#"
                      className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Pricing page
                    </a>{" "}
                    task status to{" "}
                    <span className="font-semibold text-blue-600 dark:text-white">
                      Finished
                    </span>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectSpecific;
