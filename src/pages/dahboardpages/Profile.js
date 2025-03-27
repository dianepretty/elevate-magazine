import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react"; // Import icons for password visibility toggle
import { useAuth } from "../../context/AuthContext"; // Import AuthContext to get/set user info
import TopBar from "../../components/dashboard/Topbar";
import Sidebar from "../../components/dashboard/Sidebar";

const Profile = () => {
  const { user, updateUserInfo } = useAuth(); // Get user info and update function from context
  const [email, setEmail] = useState(user?.email || ""); // Initialize with user email
  const [password, setPassword] = useState(user?.password || ""); // Initialize with user password
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [error, setError] = useState("");

  useEffect(() => {
    // If the user object is available in context, initialize the form values
    if (user) {
      setEmail(user.email);
      setPassword(user.password);
    }
  }, [user]);

  const handleSave = (e) => {
    e.preventDefault();
    try {
      // Update the user info in context and localStorage
      const updatedUserInfo = { email, password };
      updateUserInfo(updatedUserInfo); // Update context

      // Store the updated user info in localStorage
      localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

      setError(""); // Clear any previous errors
      alert("Profile updated successfully!"); // Notify the user
    } catch (error) {
      setError("There was an error updating your profile.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState); // Toggle password visibility
  };

  return (
    <div className="flex h-screen bg-[#f5f9ee]">
      {/* Sidebar (Fixed) */}
      <div className="w-64 fixed h-screen bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col ml-72">
        {/* Top Bar (Sticky) */}
        <div className="sticky top-0 bg-white shadow-md z-10">
          <TopBar />
        </div>

        <div className="flex justify-center items-center mt-28">
          <div className="bg-white p-8 py-16 rounded-lg shadow-md w-full sm:w-5/12">
            <p className="text-2xl font-semibold font-play text-center mb-8">Edit Profile</p>
            <form onSubmit={handleSave} className="space-y-8">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Allow email to be editable
                  placeholder="Enter your email"
                  className="px-4 py-3 w-full rounded-lg border-gray-500 border text-gray-900 focus:outline-none"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"} // Toggle between text and password type
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="px-4 py-3 w-full rounded-lg border-gray-500 border text-gray-900 focus:outline-none"
                  required
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 cursor-pointer"
                >
                  {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
