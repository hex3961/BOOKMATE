import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, TrendingUp } from 'lucide-react';
import booksData from '../data/books.json';
import goalsData from '../data/goals.json';
import quotesData from '../data/quotes.json';
import "../index.css";

const tabs = ['Main Menu', 'Goals Progress', 'Currently Reading'];

const Home = () => {
  const [activeTab, setActiveTab] = useState('Main Menu');
  const [quote, setQuote] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (quotesData.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotesData.length);
      setQuote(quotesData[randomIndex]);
    }
  }, []);

  return (
    <div className="home-container px-6 py-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        {/* Toggle Tabs */}
        <div className="w-full md:w-auto flex justify-center">
          <div className="relative bg-[#EDE8DB] rounded-full flex p-1 gap-1 shadow-inner">
            {tabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative z-10 px-4 py-1.5 text-sm rounded-full transition-colors duration-300 ${
                    isActive ? 'text-black font-semibold' : 'text-gray-500'
                  }`}
                >
                  {tab}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white rounded-full shadow z-[-1]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Streak Display */}
        <div className="reading-streak flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow text-sm font-semibold text-red-500 justify-center md:justify-end">
          <Flame size={18} />
          5-day streak
        </div>
      </div>

      {/* Animated Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="tab-content"
        >
          {activeTab === 'Main Menu' && (
            <div className="main-menu grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Recommended Books (2/3 width) */}
              <div className="md:col-span-2 bg-[#F2EFE5] rounded-xl shadow-md p-6 h-full">
                <h2 className="text-xl font-semibold mb-4">📚 Recommended Books</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {booksData && booksData.slice(0, 6).map((book) => (
                    <div
                      key={book.id}
                      onClick={() => navigate(`/book/${book.id}`)}
                      className="cursor-pointer bg-white rounded-lg shadow overflow-hidden hover:scale-105 transition-transform"
                    >
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full aspect-[2/3] object-cover"
                      />
                      <div className="p-2">
                        <h3 className="text-sm font-semibold truncate">{book.title}</h3>
                        <p className="text-xs text-gray-500 truncate">{book.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote of the Day (1/3 width) */}
              <div className="bg-[#F2EFE5] rounded-xl shadow-md p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-semibold mb-4">📖 Quote of the Day</h2>
                  <blockquote className="italic text-lg text-gray-700 mb-2">
                    “{quote.text || 'Keep reading and stay curious.'}”
                  </blockquote>
                  <p className="text-right text-sm text-gray-600">— {quote.author || 'Unknown'}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Goals Progress' && (
            <div className="goals-section bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">🎯 Reading Goals</h2>
              <ul className="space-y-3">
                {goalsData && goalsData.map((goal) => (
                  <li
                    key={goal.title}
                    className="flex items-center gap-3 bg-[#F5F5EF] p-3 rounded shadow-sm"
                  >
                    <TrendingUp size={18} className="text-green-600" />
                    <span>{goal.title} – {goal.progress}%</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'Currently Reading' && (
            <div className="current-section bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">📘 Currently Reading</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {booksData && booksData.filter((b) => b.status === 'reading').map((book) => (
                  <div key={book.id} className="text-center">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="h-40 w-full object-cover rounded-lg shadow"
                    />
                    <h3 className="mt-2 text-sm font-semibold">{book.title}</h3>
                    <p className="text-xs text-gray-500">{book.progress}% done</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
