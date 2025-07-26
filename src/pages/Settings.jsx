// src/pages/Settings.jsx
import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";

const Settings = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />

      <motion.div
        className="p-6 bg-[#FAFAF5] rounded-xl shadow-inner flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-itim mb-4">⚙️ Settings</h2>
        <p className="text-lg mb-6">
          Personalize your experience here. UI themes, account info, and more will go here.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between bg-[#EDE8DB] p-4 rounded-md shadow-sm">
            <span className="text-md font-itim">Enable Notifications</span>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only" />
              <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner relative transition-all duration-300">
                <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow-md transition-all duration-300" />
              </div>
            </label>
          </div>

          <div className="flex items-center justify-between bg-[#EDE8DB] p-4 rounded-md shadow-sm">
            <span className="text-md font-itim">Dark Mode (Coming Soon)</span>
            <div className="px-3 py-1 bg-gray-200 text-gray-600 rounded text-sm">Beta 1.3</div>
          </div>

          <div className="flex items-center justify-between bg-[#EDE8DB] p-4 rounded-md shadow-sm">
            <span className="text-md font-itim">Language</span>
            <select className="bg-white border border-gray-300 rounded px-2 py-1 text-sm font-itim">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;
