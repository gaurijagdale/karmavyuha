import mongoose from "mongoose";
import User from "./Users.model"; // Assuming your User schema is exported from this file

const { Schema, model } = mongoose;

const EmployeeSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // Reference to the Users collection
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phoneNumber: {
            type: String,
        },
        dateOfBirth: {
            type: Date,
        },
        address: {
            type: String,
        },
        hireDate: {
            type: Date,
        },
        salary: {
            type: Number,
        },
        department: {
            type: String, // E.g., 'IT', 'HR', 'Sales'
        },
        skills: [
            {
                skillName: {
                    type: String,
                    required: true,
                },
                proficiencyLevel: {
                    type: String,
                    enum: ['Beginner', 'Intermediate', 'Advanced'],
                    default: 'Intermediate',
                },
            },
        ], performance: {
            qualityOfWork: {
                type: Number,
                min: 0,
                max: 10,
                default: 0,
            },
            timeliness: {
                type: Number,
                min: 0,
                max: 10,
                default: 0,
            },
        },
        tasks: [
            {
                taskId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Task', // Reference to the Task model
                },
                status: {
                    type: String, // E.g., 'Completed', 'In Progress', 'Pending'
                    default: 'In Progress',
                },
                completionTime: {
                    type: Number, // Time taken to complete the task in hours
                },
            },
        ],
        projects: [
            {
                projectId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Project", // Reference to the Projects collection
                },
                status: {
                    type: String,
                    enum: ["ongoing", "completed"],
                    default: "ongoing",
                },
            },
        ],
        pastProjects: [
            {
                projectId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Project", // Reference to the Projects collection
                },
                status: {
                    type: String,
                    enum: ["completed"],
                    default: "completed",
                },
            },
        ],
        performanceMetrics: {
            completedTasks: {
                type: Number, // Number of tasks completed
                default: 0,
            },
            averageTaskCompletionTime: {
                type: Number, // Average time taken to complete tasks
                default: 0,
            },
            taskFailureRate: {
                type: Number, // Percentage of tasks not completed or failed
                default: 0,
            },
            feedbackRating: {
                type: Number, // Rating from manager or AI feedback
                default: 0,
            },
        },
        projectSuitability: [
            {
                projectId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Project', // Reference to the Project model
                },
                suitabilityScore: {
                    type: Number, // Suitability score for the project based on skills and past performance
                },
            },
        ],
        recommendedTraining: [
            {
                type: String, // E.g., 'React JS', 'Node JS', 'Python'
            },
        ], // List of recommended training courses or skills
        githubProfile: {
            githubUsername: {
                type: String,
                default: "",
            },
            totalCommits: {
                type: Number,
                default: 0,
            },
        },
        leaveBalance: {
            type: Number,
            default: 0, // Number of remaining leaves
        },
        leaveHistory: [
            {
                type: Date,
                leaveType: {
                    type: String,
                    enum: ["sick", "vacation", "personal"],
                },
                status: {
                    type: String,
                    enum: ["approved", "pending", "rejected"],
                },
            },
        ],
        projectHistory: [
            {
                projectId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Project",
                },
                role: {
                    type: String,
                    default: "member",
                },
                contributions: {
                    type: String,
                    default: "",
                },
            },
        ],
        salaryHistory: [
            {
                dateOfChange: {
                    type: Date,
                },
                reasonForChange: {
                    type: String,
                },
                newSalary: {
                    type: Number,
                },
            },
        ],
        exitInterview: {
            type: String, // Notes on the exit interview if applicable
        },
        terminationReason: {
            type: String, // Reason for termination
        },
        employmentStatus: {
            type: String,
            enum: ["active", "resigned", "terminated", "probation"],
            default: "active",
        },
    },
    { timestamps: true }
);

const Employee = model("Employee", EmployeeSchema);

export default Employee;
