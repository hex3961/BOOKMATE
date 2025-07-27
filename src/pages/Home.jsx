// Home.jsx - Updated Home Screen with Animations, Real Data, and Routing

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Flame, TrendingUp } from 'lucide-react';
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      transition: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' },
    },
  };

  return (
    <div className="home-container">
      <div className="header">
        <div className="toggle-tabs">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              layout
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <div className="reading-streak flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow text-sm font-semibold text-red-500">
          <Flame size={18} />
          5-day streak
        </div>

      </div>

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
              {/* Left: Recommended Books (spans 2 cols) */}
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

              {/* Right: Quote of the Day (1 column, full height) */}
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
            <div className="goals-section">
              <h2>Reading Goals</h2>
              <ul className="goals-list">
                {goalsData && goalsData.map((goal) => (
                  <GoalCard goal={goal}>
                    <TrendingUp /> {goal.title} – {goal.progress}%
                  </GoalCard>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'Currently Reading' && (
            <div className="current-section">
              <h2>Currently Reading</h2>
              <div className="book-grid">
                {booksData && booksData.filter((b) => b.status === 'reading').map((book) => (
                  <div key={book.id} className="book-card">
                    <img src={book.cover} alt={book.title} />
                    <h3>{book.title}</h3>
                    <p>{book.progress}% done</p>
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
