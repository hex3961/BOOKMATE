// src/components/Header.jsx
import React from "react";
import '../index.css';

const Header = ({ title }) => {
  return (
    <div className="w-full bg-[#D9D9D9] p-4 shadow-md">
      <h2 className="text-lg font-itim">{title || "Welcome to Bookmate 📚"}</h2>
    </div>
  );
};

export default Header;
