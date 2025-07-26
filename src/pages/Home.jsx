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

        <motion.div
          className="reading-streak"
          variants={pulseAnimation}
          animate="animate"
        >
          <Flame color="#f66" size={24} />
          <span className="streak-count">5</span>
        </motion.div>
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
            <div className="main-menu">
              <div className="section">
                <h2>Quote of the Day</h2>
                <blockquote>{quote.text || 'Keep reading and stay curious.'}</blockquote>
                <p className="quote-author">{quote.author || 'Unknown'}</p>
              </div>

              <div className="section">
                <h2>Recommended Books</h2>
                <div className="book-grid">
                  {booksData && booksData.slice(0, 6).map((book) => (
                    <div
                      BookCard key={book.id}
                      book="book"
                      onClick={() => navigate(`/book/${book.id}`)}
                    >
                      <img src={book.cover} alt={book.title} />
                      <h3>{book.title}</h3>
                    </div>
                  ))}
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
