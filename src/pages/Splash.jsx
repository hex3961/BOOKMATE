// src/pages/Splash.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ backgroundColor: "#53B2F1" }}
    >
      <h1 className="text-white text-6xl font-itim tracking-wider drop-shadow-lg">
        BOOKMATE
      </h1>
    </div>
  );
};

export default Splash;
