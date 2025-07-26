// src/pages/Version.jsx
import React from "react";
import Header from "../components/Header";

const Version = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <div className="p-6 bg-[#FAFAF5] rounded-xl shadow-inner flex-1">
        <h2 className="text-3xl font-itim mb-4">ℹ️ Version Info</h2>
        <p className="text-lg mb-2">You’re using BookMate <strong>Beta v1.2</strong>.</p>
        <ul className="list-disc pl-6 text-md">
          <li>📚 Added Reading Goals and Highlights tracking</li>
          <li>🎨 Improved UI with custom sidebar and animations</li>
          <li>🌙 Dark mode support coming in Beta v1.3</li>
          <li>🐞 Bug fixes and performance improvements</li>
        </ul>
      </div>
    </div>
  );
};

export default Version;
