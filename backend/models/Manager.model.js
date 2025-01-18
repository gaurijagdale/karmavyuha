import mongoose from 'mongoose';
import Employee from './Employee.model'; // Assuming Employee model is available

const { Schema, model } = mongoose;

const ProjectManagerSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the User collection (the project manager's account)
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
    department: {
      type: String, // E.g., 'IT', 'Operations', 'Product Management'
    },
    assignedTeams: [
      {
        teamId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Employee', // Referring to the employees assigned to this manager
        },
        role: {
          type: String, // Role in the team (e.g., Developer, Designer, QA)
        },
        projectId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Project', // Reference to the project the employee is working on
        },
      },
    ],
   
  },
  { timestamps: true }
);

const ProjectManager = model('ProjectManager', ProjectManagerSchema);

export default ProjectManager;
