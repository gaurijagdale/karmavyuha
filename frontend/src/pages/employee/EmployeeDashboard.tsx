import React, { useEffect, useState } from "react";
import axios from "axios";
import TextGen from "@/components/TextGen";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Link } from "react-router-dom";
import Notification from "../../components/Notification";
import { Calendar } from "@/components/ui/calendar";

interface Project {
    _id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
    projectManagerId: string;
    employees: string[];
    tasks: string[];
    skillsRequired: string[];
}

const EmployeeDashboard = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [projects, setProjects] = useState<Project[]>([]);
    const empID = '678c35d42382e89dad523e48';

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/fetch/employee/${empID}`);
                setProjects(response.data.employeeProjects);
                console.log(response.data.employeeProjects);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="w-full grid grid-cols-3 p-10 h-screen gap-4">
            <div aria-label="left" className="flex flex-col col-span-2 gap-4">
                <div className="h-96 p-7 bg-gray-900 rounded-xl space-y-10">
                    <h1 className="text-2xl font-semibold">All Projects</h1>

                    <div className="flex flex-col gap-4 h-52 overflow-y-auto ">
                        {projects.map((project) => (
                            <div key={project._id}>
                                <div className="flex justify-between">
                                    <Link to={`/projectspecific/${project._id}`} className="text-xl font-medium">
                                        {project.name}
                                    </Link>
                                    <h2 className="text-base text-zinc-200">
                                        {project.status === "in progress" ? "75% Complete" : "Not Started"}
                                    </h2>
                                </div>
                                <hr className="h-px bg-gray-500 border-0 dark:bg-gray-700" />
                            </div>
                        ))}
                    </div>



                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 bg-gray-900 h-96 p-7">
                        <h1 className="text-2xl font-semibold">Upcoming Projects</h1>
                        <div></div>
                    </div>
                    <div className="col-span-1 p-7 bg-gray-900 h-96 space-y-3">
                        <h1 className="text-2xl font-semibold">To Do</h1>
                        <div className="text-black space-y-3 h-72 overflow-y-auto scrollbar-hide">
                            <ol className="space-y-4 w-full">
                                <li>
                                    <div
                                        className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
                                        role="alert"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="sr-only">User info</span>
                                            <h3 className="font-medium">1. User info</h3>
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 16 12"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5.917 5.724 10.5 15 1.5"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
                                        role="alert"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="sr-only">Account info</span>
                                            <h3 className="font-medium">2. Account info</h3>
                                            <svg
                                                className="w-4 h-4"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 16 12"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5.917 5.724 10.5 15 1.5"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400"
                                        role="alert"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="sr-only">Social accounts</span>
                                            <h3 className="font-medium">3. Social accounts</h3>
                                            <svg
                                                className="rtl:rotate-180 w-4 h-4"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                        role="alert"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="sr-only">Review</span>
                                            <h3 className="font-medium">4. Review</h3>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                        role="alert"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="sr-only">Confirmation</span>
                                            <h3 className="font-medium">5. Confirmation</h3>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div aria-label="right" className="col-span-1 flex flex-col gap-4">
                <div className="h-96 p-5 bg-gray-900 rounded-xl space-y-3">
                    <h1 className="text-2xl font-semibold">Notifications</h1>
                    <div className="text-black space-y-3 h-72 overflow-y-auto scrollbar-hide">
                        <Notification
                            name="Sample Notification"
                            description="This is a sample notification"
                            icon="info"
                            color="green"
                            time="10:00 AM"
                        />
                        <Notification
                            name="Another Notification"
                            description="This is another sample notification"
                            icon="alert"
                            color="red"
                            time="11:00 AM"
                        />
                        <Notification
                            name="Another Notification"
                            description="This is another sample notification"
                            icon="alert"
                            color="red"
                            time="11:00 AM"
                        />
                        <Notification
                            name="Another Notification"
                            description="This is another sample notification"
                            icon="alert"
                            color="red"
                            time="11:00 AM"
                        />
                        <Notification
                            name="Another Notification"
                            description="This is another sample notification"
                            icon="alert"
                            color="red"
                            time="11:00 AM"
                        />
                    </div>
                </div>
                <div className="h-96  flex items-center justify-center">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="p-7 h-80 rounded-md border text-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default EmployeeDashboard;
