// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Highlights from "./pages/Highlights";
import Goals from "./pages/Goals";
import MyLibrary from "./pages/MyLibrary";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Version from "./pages/Version";
import "./index.css";

const App = () => {
  return (
    <div className="flex h-screen w-screen border border-red-500">
      <Sidebar />
      <div className="flex-1 border border-blue-500 overflow-y-auto p-6 bg-[#fdfdf8]">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/library" element={<MyLibrary />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/version" element={<Version />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;