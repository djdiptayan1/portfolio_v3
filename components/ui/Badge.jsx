import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const Badge = ({ children }) => {
    const { darkMode } = useTheme();

    return (
        <span className={`
      px-3 py-1 text-xs font-medium tracking-wide border
      ${darkMode
                ? 'bg-white/5 border-white/10 text-stone-300'
                : 'bg-stone-50 border-stone-200 text-stone-600'}
    `}>
            {children}
        </span>
    );
};

export default Badge;
