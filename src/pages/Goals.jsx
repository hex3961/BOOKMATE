import React from 'react';
import goalsData from '../data/goals.json';
import Header from '../components/Header';
import GoalCard from '../components/GoalCard';
import '../index.css';

const Goals = () => {
  return (
    <div className="page-container">
      <Header title="Reading Goals" />
      <ul className="goals-list">
        {goalsData.map(goal => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </ul>
    </div>
  );
};

export default Goals;
