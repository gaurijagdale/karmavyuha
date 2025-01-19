Here's a comprehensive guide and README file for your KarmaVyuha AI-driven workforce management platform project. This guide will help anyone who is unfamiliar with the project to set up and run it successfully.

---

# KarmaVyuha

**KarmaVyuha** is an AI-driven workforce and project management platform designed for startups and companies. It helps optimize operations by automating the allocation of employees to projects based on skills and experience. It also provides project managers with tools to monitor team performance, task progress, and productivity. Employees benefit from personalized insights, feedback, and recommendations to enhance their skills and efficiency.

## Features

- **Employee Allocation**: Automatically allocate employees to projects based on skills and experience.
- **Project Management**: Project heads can monitor tasks and employee performance.
- **Personalized Insights**: Employees receive feedback and recommendations to enhance their efficiency.
- **AI-powered Optimization**: Streamlines resource management, task distribution, and reporting.
- **Scalable for Startups**: Ideal for companies to scale efficiently while maximizing workforce potential.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Requirements](#requirements)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Login Credentials](#login-credentials)
6. [Running the Project](#running-the-project)
7. [Deployment](#deployment)
8. [API Endpoints](#api-endpoints)
9. [License](#license)

---

## Getting Started

### Prerequisites

To get started with this project, you need the following tools installed on your local machine:

- **Node.js** (Version 14 or later)
- **npm** (Node package manager)
- **MongoDB** (or MongoDB Atlas if you are using a cloud database)
- **Git** (for version control)

---

## Requirements

- **MongoDB**: The project uses MongoDB to store data (including users, tasks, and projects).
- **Node.js**: The backend is built using Node.js and Express.
- **Vite**: The frontend is developed using Vite for fast development.
- **React.js**: The frontend is built with React.

---

## Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/gaurijagdale/karmavyuha.git
   cd karmavyuha
   ```

2. **Install dependencies**:

   Navigate to the backend folder and install dependencies.

   ```bash
   cd backend
   npm install
   ```

3. **No need to create .env as we used config

4. **Start the Backend Server**:

   Run the following command to start the backend server:

   ```bash
   npm run dev
   ```

   The server will be running on `http://localhost:3000` by default.

---

## Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd frontend
   ```

2. **Install dependencies**:

   Install the required frontend dependencies using npm.

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the frontend directory and add the following:

   ```env
   VITE_BACKEND_URL=http://localhost:3000
   ```
or you can give deployed link

   This sets the backend URL for the frontend.
  ```env
   VITE_BACKEND_URL=http://localhost:3000
   ```

4. **Start the Frontend Server**:

   Run the following command to start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`.

---

## Login Credentials

For testing purposes, there are two types of login credentials available: **Manager** and **Employee**.

### **Manager Login:**

- **Email**: `amit.sharma@gmail.com`
- **Password**: `hashed_password_1`

### **Employee Login:**

- **Email**: `pooja.verma@gmail.com `
- **Password**: `hashed_password_2`

---

## Running the Project

### Step 1: Start Backend Server
- Open a terminal and navigate to the backend directory of the project.
- Run the following command to install dependencies and start the backend server:

  ```bash
  npm install
  npm run dev
  ```

### Step 2: Start Frontend Server
- Open another terminal window and navigate to the frontend directory of the project.
- Run the following command to install dependencies and start the frontend server:

  ```bash
  npm install
  npm run dev
  ```

### Step 3: Access the Website
- After running the above commands, open your browser and go to `http://localhost:5173` to view the frontend.
- You can log in using the provided credentials.

---


