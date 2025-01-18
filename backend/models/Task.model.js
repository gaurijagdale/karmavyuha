import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const TaskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        assignedTo: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Employee', // Reference to the employee assigned to this task
            },
        ],
        projectId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project', // Reference to the project this task belongs to
        },
        dueDate: {
            type: Date, // Deadline for the task
        },
        skills: [
            {
                type: String, // Each skill is a string (e.g., 'ReactJS', 'TailwindCSS', etc.)
                required: true, // Ensures that each task has skills listed
            },
        ],
        status: {
            type: String,
            enum: ['pending', 'in-progress', 'completed', 'overdue'],
            default: 'pending',
        },
        priority: {
            type: String,
            enum: ['low', 'medium', 'high'],
            default: 'medium',
        },
        completed: {
            type: Boolean,
            default: false, // Indicates if the task is completed
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProjectManager', // Reference to the project manager who created the task
            required: true,
        }
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Task = model('Task', TaskSchema);

export default Task;
