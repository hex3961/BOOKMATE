// src/pages/Support.jsx
import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";

const Support = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />

      <motion.div
        className="flex-1 p-6 bg-[#FAFAF5] rounded-xl shadow-inner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-itim mb-4">🛟 Support</h2>
        <p className="text-lg mb-4">
          Need help or want to report a bug? Reach out to our team through the following contact:
        </p>

        <motion.div
          className="bg-[#EDE8DB] p-4 rounded-md shadow-lg max-w-md mx-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-md font-itim">📧 Email us at:</p>
          <a
            href="mailto:bookmate.team.reach@gmail.com"
            className="block text-blue-600 underline mt-2 break-all text-lg font-semibold"
          >
            support@bookmate.app
          </a>
        </motion.div>

        <p className="text-sm mt-6 text-gray-600 text-center">
          We usually respond within 24–48 hours. Thank you for being a part of Bookmate 💙
        </p>
      </motion.div>
    </div>
  );
};

export default Support;
