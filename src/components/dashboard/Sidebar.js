import { NavLink, useNavigate } from "react-router-dom";
import { Home, FileText, User, Settings, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <div className="h-screen w-72 bg-[#303A30] text-white flex flex-col p-8">
      <h2 className="text-4xl text-center mt-8 italic font-bold font-play mb-14">
        ELEVATE
      </h2>
      <nav className="flex flex-col space-y-8 flex-grow">
        <NavLink
          to="/dashboard/all-articles"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive ? "bg-[#5b5d57]" : "hover:bg-[#5b5d57]"
            }`
          }
        >
          <Home size={20} /> All articles
        </NavLink>
        <NavLink
          to="/dashboard/create-article"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive ? "bg-[#5b5d57]" : " hover:bg-[#5b5d57]"
            }`
          }
        >
          <FileText size={20} /> Create article
        </NavLink>
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive ? "bg-[#5b5d57]" : " hover:bg-[#5b5d57]"
            }`
          }
        >
          <User size={20} /> Profile
        </NavLink>
        {/* <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive ? "bg-[#5b5d57]" : " hover:bg-[#5b5d57]"
            }`
          }
        >
          <Settings size={20} /> Settings
        </NavLink> */}
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-auto flex items-center gap-2 p-2 rounded-lg transition-colors hover:bg-[#262626] hover:text-[#EEE9E1] bg-[#EEE9E1] text-[#262626]"
      >
        <LogOut size={20} /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
