const express = require('express');
const axios = require('axios');
const router = express.Router();
const config = require('config');
const worqhatapikey = config.get('WORQHAT.APIKEY');

// Define your routes here
router.post('/text', async (req, res) => {
  // Extract data from the request body
  const { question } = req.body;

  // Create the payload for the external API
  const data = JSON.stringify({
    question,
    model: "aicon-v4-nano-160824",
    randomness: 0.5,
    stream_data: false,
    training_data: "",
    response_type: "text",
  });

  // Configure the external API request
  const config = {
    method: 'post',
    url: 'https://api.worqhat.com/api/ai/content/v4',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${worqhatapikey}` ,
    },
    data: data,
  };

  try {
    // Send the request to the external API
    const response = await axios(config);

    // Send the API's response back to the frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    // Handle errors and respond with a meaningful message
    res.status(500).json({
      error: 'An error occurred while processing your request.',
      details: error.message,
    });
  }
});


router.post('/text/empreportgen', async (req, res) => {
  // Extract data from the request body
  let { employee, empProjects, empTasks } = req.body;
    employee = employee[0];
  const performancePrompt = `
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
      (skill) => `- ${skill.skillName} (Proficiency Level: ${skill.proficiencyLevel})`
    ).join("\n")}

    Projects Assigned:
    ${empProjects.map(
      (project) => `
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
            (task) => `
      - Task Title: ${task.title}
      - Task Description: ${task.description}
      - Status: ${task.status}
      `
          )
          .join("\n")
      : "No tasks assigned to the employee"}

    Please evaluate the employee's overall performance, including strengths, areas for improvement, and any recommended training. Based on the tasks completed, skill proficiency, and feedback, assess whether the employee is performing well, if they are struggling with certain tasks, and if they need additional training or skill development.
  `;

  // Create the payload for the external API
  const data = JSON.stringify({
    question: performancePrompt,
    model: "aicon-v4-nano-160824",
    randomness: 0.5,
    stream_data: false,
    training_data: "",
    response_type: "text",
  });

  // Configure the external API request
  const config = {
    method: 'post',
    url: 'https://api.worqhat.com/api/ai/content/v4',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${worqhatapikey}` ,
    },
    data: data,
  };

  try {
    // Send the request to the external API
    const response = await axios(config);

    // Send the API's response back to the frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    // Handle errors and respond with a meaningful message
    res.status(500).json({
      error: 'An error occurred while processing your request.',
      details: error.message,
    });
  }
});


// Export the router
module.exports = router;