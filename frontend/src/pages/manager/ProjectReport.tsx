import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from "react-markdown";
import axios from 'axios'

const ProjectReport = () => {
    const { id } = useParams()
    const [projectData, setProjectData] = useState<any>(null);
    const [report, setReport] = useState<any>(null);
    
    useEffect(() => {
        // Fetch the project data
        const fetchProjectData = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/api/fetch/project/${id}`,
                );
                // Handle the response (e.g., process the report)
                console.log("fetcched prooject:", response.data.project);
                setProjectData(response.data.project);
            } catch (error) {
                console.error("Error fetching performance report:", error);
            }
        }
        fetchProjectData();
    }, [id])

    const fetchProjectReport = async () => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/models/text/projectreportgen`,
                {
                    projectData: projectData,
                }
            );

            // Handle the response (e.g., process the report)
            console.log("Project Report:", response.data);
            setReport(response.data.content);
        } catch (error) {
            console.error("Error fetching performance report:", error);
        }
    };

    return (
        <div className="w-full h-auto p-10 space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl text-white">
                <h1 className="text-2xl font-bold">Project Report</h1>
                <button
                    onClick={() => fetchProjectReport()}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Generate Performance Report
                </button>
                <p>Generating report for project with ID: {id}</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl text-white">
                <p>
                    <ReactMarkdown>{report}</ReactMarkdown>
                </p>
            </div>
        </div>)
}

export default ProjectReport