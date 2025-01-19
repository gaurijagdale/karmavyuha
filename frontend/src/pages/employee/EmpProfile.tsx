import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import profile from "../../assets/profile2.png";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const EmpProfile: React.FC = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  const { id } = useParams<{ id: string }>(); // Get the employee ID from the URL
  const [employeeData, setEmployeeData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate(); // Hook to navigate to other pages

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/fetch/employee/${id}`
        );
        const data = await response.json();
        setEmployeeData(data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!employeeData) {
    return <div>No employee data available.</div>;
  }

  const { employee, employeeTasks, employeeProjects } = employeeData;
  const emp = employee[0]; // Assuming only one employee object is returned

  const handleGenReport = () => {
    // Navigate to the EmpReport page and pass the employee ID as a parameter
    navigate(`/empreport/${id}`);
  };

  return (
    <div className="w-full h-auto p-10 space-y-6 ">
      <div className="bg-gray-900 p-6 rounded-xl text-white space-y-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Employee Profile</h1>
        <button
          className="text-2xl font-semibold rounded-full py-2 px-5 bg-slate-500"
          onClick={handleGenReport}
        >
        Report
        </button>
      </div>

      {/* Employee Basic Info */}
      <div className="grid grid-cols-2 gap-14">
        <div className=" col-span-1 flex flex-col justify-center items-center bg-gray-900 p-8 rounded-xl text-white space-y-4">
          <img src={profile} alt="" className="w-52 h-52 rounded-full" />
          <div className="flex flex-col justify-center items-center space-y-3">
            <h1 className="text-2xl font-bold">{emp.name}</h1>
            <div className="flex flex-col text-base text-zinc-300 justify-center items-center">
              <p>Email: {emp.email}</p>
              <p>Phone: {emp.phoneNumber}</p>
              <p>Date of Birth: {new Date(emp.dateOfBirth).toDateString()}</p>
              <p>Address: {emp.address}</p>
              <p>Department: {emp.department}</p>
              <p>Salary: ₹{emp.salary}</p>
              <p>Employment Status: {emp.employmentStatus}</p>
            </div>
          </div>
        </div>
        <div className=" col-span-1 bg-gray-900 rounded-xl p-5 flex flex-col space-y-6 items-center justify-center">
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
          <h1 className="text-xl text-start">Progress Graph</h1>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-3 gap-5">
        <div className=" col-span-1 bg-gray-900 p-6 rounded-xl text-white space-y-4">
          <h2 className="text-xl font-bold">Performance</h2>
          <p>Quality of Work: {emp.performance.qualityOfWork}/10</p>
          <p>Timeliness: {emp.performance.timeliness}/10</p>
          <p>Completed Tasks: {emp.performanceMetrics.completedTasks}</p>
          <p>Task Failure Rate: {emp.performanceMetrics.taskFailureRate}%</p>
          <p>Feedback Rating: {emp.performanceMetrics.feedbackRating}/10</p>
        </div>

        {/* GitHub Profile */}
        <div className=" col-span-1 bg-gray-900 p-6 rounded-xl text-white space-y-4">
          <h2 className="text-xl font-bold">GitHub Profile</h2>
          <p>Username: {emp.githubProfile.githubUsername}</p>
          <p>Total Commits: {emp.githubProfile.totalCommits}</p>
        </div>

        {/* Skills */}
        <div className=" col-span-1 bg-gray-900 p-6 rounded-xl text-white space-y-4">
          <h2 className="text-xl font-bold">Skills</h2>
          <ul className="list-disc list-inside">
            {emp.skills.map((skill: any) => (
              <li key={skill._id}>
                {skill.skillName} - {skill.proficiencyLevel}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="bg-gray-900 p-6 rounded-xl text-white space-y-4">
        <h2 className="text-xl font-bold">Projects</h2>
        {employeeProjects.length === 0 ? (
          <p>No projects assigned.</p>
        ) : (
          employeeProjects.map((project: any) => (
            <div key={project._id} className="mb-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p>{project.description}</p>
              <p>Status: {project.status}</p>
              <p>
                Duration: {new Date(project.startDate).toDateString()} -{" "}
                {new Date(project.endDate).toDateString()}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Tasks */}
      <div className="bg-gray-900 p-6 rounded-xl text-white space-y-4">
        <h2 className="text-xl font-bold">Tasks</h2>
        {employeeTasks.length === 0 ? (
          <p>No tasks assigned.</p>
        ) : (
          employeeTasks.map((task: any) => (
            <div key={task._id} className="mb-4">
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EmpProfile;
