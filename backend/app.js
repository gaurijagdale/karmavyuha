
const express = require('express');
const config = require('config');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const Employee = require('./models/Employee.model');
const Project = require('./models/Project.model');
const Task = require('./models/Task.model');
const Manager = require('./models/Manager.model');

const loginRouter = require('./routes/Login.route');
const worqhatRouter = require('./routes/Worqhat.route');

const PORT = config.get('SERVER.PORT') || 3000;

app.use(cors({
    origin: config.get('CLIENT.URL')
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGO_URI = config.get('MONGO.URI');

function connectToDB() {
    mongoose.connect(MONGO_URI)
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((error) => {
            console.error("Error connecting to DB:", error.message);
        });
}

connectToDB();

app.use('/api', loginRouter);
app.use('/api/models', worqhatRouter);

app.get('employee', async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

app.get('project', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

app.get('task', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.get('manager', async (req, res) => {
    const managers = await Manager.find();
    res.json(managers);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
