// src/components/GoalCard.jsx
import React from 'react';
import { TrendingUp } from 'lucide-react';
import '../index.css';

const GoalCard = ({ goal }) => {
  const progress = Math.min(100, Math.round((goal.streak / goal.target) * 100));

  return (
   <li className="goal-item flex justify-between items-center p-3 border rounded-lg shadow-sm mb-2 bg-white">
    <div className="flex items-center gap-2">
      <TrendingUp size={16} />
      <span className="font-medium">{goal.title}</span>
    </div>
    <span className="text-sm text-gray-600">{progress}%</span>
  </li>

  );
};

export default GoalCard;
