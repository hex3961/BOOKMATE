// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { BookOpen, Bookmark, Target, Star, Settings, HelpCircle, Info } from "lucide-react";

const Sidebar = () => {
  const linkClass = "flex items-center gap-3 p-2 px-4 rounded-md hover:bg-[#EDE8DB] text-black no-underline font-itim";

  return (
    <div className="w-[240px] h-full bg-[#DADAC8] p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-[20px] font-itim mb-6">📖 BOOKMATE</h1>

        <div className="mb-4">
          <p className="text-[17px] font-itim mb-2">DISCOVER</p>
          <NavLink to="/home" className={linkClass}>
            <BookOpen size={16} className="icon" /> Home
          </NavLink>
          <NavLink to="/highlights" className={linkClass}>
            <Star size={16} className="icon" /> Highlights
          </NavLink>
        </div>

        <div className="mb-4">
          <p className="text-[17px] font-itim mb-2">MY LIBRARY</p>
          <NavLink to="/library" className={linkClass}>
            <Bookmark size={16} className="icon" /> My Library
          </NavLink>
          <NavLink to="/goals" className={linkClass}>
            <Target size={16} className="icon" /> Reading Goals
          </NavLink>
        </div>

        <div className="mb-4">
          <p className="text-[17px] font-itim mb-2">VER LOG</p>
          <NavLink to="/version" className={linkClass}>
            <Info size={16} className="icon" /> Version Info
          </NavLink>
        </div>
      </div>

      <div>
        <NavLink to="/support" className={linkClass}>
          <HelpCircle size={16} className="icon" /> Support
        </NavLink>
        <NavLink to="/settings" className={linkClass}>
          <Settings size={16} className="icon" /> Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
