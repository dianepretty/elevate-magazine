import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext"; // Import AuthContext to get/set user info
import Navbar from "../../components/website/Navbar"; // Import Navbar

const Profile = () => {
  const { user, logout } = useAuth(); // Get user info from context
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // If user info is available in localStorage, populate the form with it
    if (user) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setName(userInfo?.name || "");
      setEmail(userInfo?.email || "");
      setPassword(userInfo?.password || "");
    }
  }, [user]);

  const handleSave = (e) => {
    e.preventDefault();
    try {
      // Store the updated user info in localStorage
      const updatedUserInfo = { name, email, password };
      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

      setError(""); // Clear any previous errors
      alert("Profile updated successfully!"); // Notify the user
    } catch (error) {
      setError("There was an error updating your profile.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#EEE9E1] flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <p className="text-3xl font-play text-center mb-8">Edit Profile</p>
          <form onSubmit={handleSave} className="space-y-8">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="px-4 py-3 w-full rounded-lg border-gray-500 border text-gray-900 focus:outline-none"
                required
              />
            </div>
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
                Save Changes
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={logout}
                className="text-red-500 px-6 py-3 w-full rounded-lg hover:bg-[#e5ebda] transition duration-300"
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
