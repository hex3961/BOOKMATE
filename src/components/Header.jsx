// src/components/Header.jsx
import React from 'react';
import { Flame } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-[#DADAC8] flex justify-between items-center shadow-sm">
      <h1 className="text-2xl font-bold font-itim text-gray-800">📚 Bookmate</h1>

      {/* Streak counter on the right */}
      <div
        title="You're on a 5-day reading streak!"
        className="flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow text-sm font-semibold text-red-500"
      >
        <Flame size={18} />
        5-day streak
      </div>
    </header>
  );
};

export default Header;
