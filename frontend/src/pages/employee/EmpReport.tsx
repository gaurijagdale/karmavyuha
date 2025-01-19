import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const EmpReport: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get the employee ID from the URL
    const [employee, setEmployee] = useState<any>(null);
    const [empProjects, setEmpProjects] = useState<any[]>([]);
    const [empTasks, setEmpTasks] = useState<any[]>([]);

    const [report, setReport] = useState<any>(null);

    const fetchPerformanceReport = async () => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/models/text/empreportgen`,
                {
                    employee,
                    empProjects,
                    empTasks
                }
            );

            // Handle the response (e.g., process the report)
            console.log("Performance Report:", response.data);
            setReport(response.data.content);
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


    return (
        <div className="w-full h-auto p-10 space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl text-white">
                <h1 className="text-2xl font-bold">Employee Report</h1>
                <button
                    onClick={() => fetchPerformanceReport()}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Generate Performance Report
                </button>
                <p>Generating report for employee with ID: {id}</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-white">
                <p>
                    <ReactMarkdown>{report}</ReactMarkdown>
                </p>
            </div>
        </div>
    );
};

export default EmpReport;
