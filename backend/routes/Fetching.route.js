const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Project = require("../models/Project.model");
const Manager = require("../models/Manager.model");
const Task = require("../models/Task.model");
const Employee = require("../models/Employee.model");
const User = require("../models/Users.model");


router.get("/user/:email", async (req, res) => {
    try {
        const email = req.params.email;

        // Fetch the user details
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/projects", async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/employees", async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/managers", async (req, res) => {   
    try {
        const managers = await Manager.find();
        res.status(200).json(managers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get("/employee/:id", async (req, res) => {
    try {
        const employeeID = req.params.id;

        // Fetch the employee details
        const employee = await Employee.find({ user: employeeID });

        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        // Fetch tasks assigned to the employee
        const employeeTasks = await Task.find(
            { assignedTo: employeeID }, // Match the employee ID
            { title: 1, description: 1, status: 1 } // Project relevant fields
        );

        // Fetch projects the employee is working on
        const employeeProjects = await Project.find(
            { employees: employeeID }, // Match the employee ID
        );

        res.status(200).json({
            employee,
            employeeTasks,
            employeeProjects,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get("/project/:id", async (req, res) => {
    try {
        const projectID = req.params.id;

        // Fetch the project details
        const project = await Project.findById(projectID);

        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        // Fetch employees working on the project
        const projectEmployees = await Employee.find(
            { user: { $in: project.employees } }, // Match employee IDs
            { user: 1, name: 1 } // Project only _id and name fields
        );

        // Fetch the project manager
        const projectManager = await Manager.findOne(
            { user: project.projectManagerId }, // Match the manager ID
        );

        res.status(200).json({
            project,
            projectManager,
            projectEmployees,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




module.exports = router;