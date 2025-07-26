// src/pages/Highlights.jsx
import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";

const sampleHighlights = [
  {
    id: 1,
    quote: "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    author: "Antoine de Saint-Exupéry",
    book: "The Little Prince",
  },
  {
    id: 2,
    quote: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien",
    book: "The Fellowship of the Ring",
  },
  {
    id: 3,
    quote: "So many things are possible just as long as you don’t know they’re impossible.",
    author: "Norton Juster",
    book: "The Phantom Tollbooth",
  },
];

const Highlights = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />

      <motion.div
        className="flex-1 p-6 bg-[#FAFAF5] rounded-xl shadow-inner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-itim mb-4">📌 Highlights</h2>
        <p className="text-lg mb-6">
          Your saved highlights, favorite quotes, and memorable moments will appear here.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleHighlights.map((item) => (
            <motion.div
              key={item.id}
              className="bg-[#EDE8DB] p-4 rounded-lg shadow hover:scale-[1.02] transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-md font-itim italic mb-2">“{item.quote}”</p>
              <p className="text-sm text-right font-itim">– {item.author}</p>
              <p className="text-xs text-gray-600 mt-1 text-right">📖 {item.book}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Highlights;
