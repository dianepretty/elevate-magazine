import { Menu, Bell, User } from "lucide-react";

const TopBar = ({ toggleSidebar }) => {
  return (
    <div className=" w-full bg-white  text-[#303A30] flex items-center h-20 justify-between p-4 shadow-md">
      <button onClick={toggleSidebar} className="md:hidden p-2">
        <Menu size={24} />
      </button>
      <h2 className="text-lg font-bold">Dashboard</h2>
      <div className="flex items-center gap-4">
        <Bell size={24} className="cursor-pointer" />
        <User size={24} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default TopBar;
