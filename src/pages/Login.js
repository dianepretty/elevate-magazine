import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import Navbar from "../components/website/Navbar";
import { useAuth } from "../context/AuthContext"; // Import the useAuth hook

const Login = () => {
  const { login } = useAuth(); // Get login function from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      // Call login function from context to check credentials
      login(email, password);
      setError(""); // Clear any previous error
      navigate("/dashboard"); // Redirect the user to the dashboard
    } catch (error) {
      setError(error.message); // Set error if credentials don't match
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-[67vh] bg-[#EEE9E1] flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <p className="text-3xl font-play text-center mb-8">Login</p>
          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 w-full rounded-lg border-gray-500 border text-gray-900 focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="px-4 py-3 w-full rounded-lg border-gray-500 border text-gray-900 focus:outline-none"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <div>
              <button
                type="submit"
                className="bg-[#262626] text-white px-6 py-3 w-full rounded-lg hover:bg-[#303A30] transition duration-300"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
