import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,  // Ensures no two projects have the same name
    },
    description: {
      type: String, // Description of the project
      required: true,
    },
    startDate: {
      type: Date, // The start date of the project
      required: true,
    },
    endDate: {
      type: Date, // The end date of the project
    },
    status: {
      type: String,
      enum: ['not started', 'in progress', 'completed', 'on hold'], // Current project status
      default: 'not started', // Default value if not provided
    },
    projectManagerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProjectManager', // References the ProjectManager model
      required: true,
    },
    employees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', // References the Employee model (employees assigned to this project)
      },
    ],
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task', // References the Task model (tasks related to this project)
      },
    ],
    skillsRequired: [
      {
        type: String, // List of skills required for this project
      },
    ],
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps automatically
);

const Project = model('Project', ProjectSchema);

export default Project;
