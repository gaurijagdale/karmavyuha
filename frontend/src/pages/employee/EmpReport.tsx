import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmpReport: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the employee ID from the URL
  const [employee, setEmployee] = useState<any>(null);
  const [empProjects, setEmpProjects] = useState<any[]>([]);
  const [empTasks, setEmpTasks] = useState<any[]>([]);

  const fetchPerformanceReport = async (performancePrompt: string) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/model/text`,
        {
          question: performancePrompt,
        }
      );

      // Handle the response (e.g., process the report)
      console.log("Performance Report:", response.data);
    } catch (error) {
      console.error("Error fetching performance report:", error);
    }
  };

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/fetch/employee/${id}`
        );
        const { employee, employeeTasks, employeeProjects } = response.data;
        setEmployee(employee);
        setEmpProjects(employeeProjects);
        setEmpTasks(employeeTasks);
      } catch (error) {
        console.error("Error fetching employee data", error);
      }
    };
    fetchEmployeeData();
  }, [id]);

  // Generate performance report only if the employee data is loaded
  const performancePrompt = employee ? `
    Employee Name: ${employee.name}
    Employee ID: ${employee.user}
    Email: ${employee.email}
    Phone Number: ${employee.phoneNumber}
    Date of Birth: ${employee.dateOfBirth}
    Hire Date: ${employee.hireDate}
    Department: ${employee.department}
    Salary: ${employee.salary}
    Leave Balance: ${employee.leaveBalance}
    Employment Status: ${employee.employmentStatus}

    Performance Overview:
    - Quality of Work: ${employee.performance.qualityOfWork}
    - Timeliness: ${employee.performance.timeliness}

    Performance Metrics:
    - Completed Tasks: ${employee.performanceMetrics.completedTasks}
    - Average Task Completion Time: ${employee.performanceMetrics.averageTaskCompletionTime}
    - Task Failure Rate: ${employee.performanceMetrics.taskFailureRate}
    - Feedback Rating: ${employee.performanceMetrics.feedbackRating}

    GitHub Profile:
    - GitHub Username: ${employee.githubProfile.githubUsername}
    - Total Commits: ${employee.githubProfile.totalCommits}

    Skills:
    ${employee.skills.map(
      (skill: any) => `- ${skill.skillName} (Proficiency Level: ${skill.proficiencyLevel})`
    ).join("\n")}

    Projects Assigned:
    ${empProjects.map(
      (project: any) => `
      - Project Name: ${project.name}
      - Description: ${project.description}
      - Start Date: ${project.startDate}
      - End Date: ${project.endDate}
      - Status: ${project.status}
      - Skills Required: ${project.skillsRequired.join(", ")}
      `
    ).join("\n")}

    Employee Tasks:
    ${empTasks.length > 0
      ? empTasks
          .map(
            (task: any) => `
      - Task Title: ${task.title}
      - Task Description: ${task.description}
      - Status: ${task.status}
      `
          )
          .join("\n")
      : "No tasks assigned to the employee"}

    Please evaluate the employee's overall performance, including strengths, areas for improvement, and any recommended training. Based on the tasks completed, skill proficiency, and feedback, assess whether the employee is performing well, if they are struggling with certain tasks, and if they need additional training or skill development.
  ` : '';

  return (
    <div className="w-full h-auto p-10 space-y-6">
      <div className="bg-gray-900 p-6 rounded-xl text-white">
        <h1 className="text-2xl font-bold">Employee Report</h1>
        <button
          onClick={() => fetchPerformanceReport(performancePrompt)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Generate Performance Report
        </button>
        <p>Generating report for employee with ID: {id}</p>
      </div>
    </div>
  );
};

export default EmpReport;
