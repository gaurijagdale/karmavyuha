import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from '../contexts/AuthContext';
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

interface LoginResponse {
    message: string;
    // Add other properties that your response may contain
}

const Login = () => {
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [loginMessage, setLoginMessage] = useState<string>("");
    const authContext = useContext(AuthContext);
    const setIsLoggedIn = authContext?.setIsLoggedIn;
    const setEmail = authContext?.setEmail;
    const navigate = useNavigate();

    // Define the type of the response you expect from the server
    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent form from submitting and reloading the page

        try {
            // Send a POST request using axios
            const response = await axios.post<LoginResponse>(
                `${VITE_BACKEND_URL}/api/login`,
                {
                    email: userEmail,
                    password: userPassword,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            // Handle response data
            console.log("Login successful:", response.data);
            setLoginMessage(response.data.message); // Assuming 'message' is in the response
            if (setIsLoggedIn) {
                setIsLoggedIn(true);
            }
            if (setEmail) {
                setEmail(userEmail);
            }
            navigate('/');

        } catch (error: unknown) {
            console.error("Error logging in:", error);
            setLoginMessage("Login failed. Please try again."); // Handle failure
        }
    };

    return (
        <div className="p-10 text-white">
          <Link to="/">
            Back
          </Link>
            <form method="post" onSubmit={handleLogin} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@gmail.com"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        placeholder="Password"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                {/* <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
        </div> */}
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
            {loginMessage && (
                <p className="mt-3 text-center text-sm text-red-500 dark:text-red-400">
                    {loginMessage}
                </p>
            )}


            <p className="text-xl">Manager credentials</p>
            <p>Email: amit.sharma@gmail.com</p>
            <p>Password: hashed_password_1</p>
<br /><br />
            <p className="text-xl">Employee credentials</p>
            <p>Email: pooja.verma@gmail.com</p>
            <p>Password: hashed_password_2</p>
        </div>
    );
};

export default Login;
