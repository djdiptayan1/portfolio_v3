import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const PaperCard = ({ children, className = "", hoverEffect = true, ...props }) => {
    const { darkMode } = useTheme();

    return (
        <div
            className={`
        relative overflow-hidden transition-all duration-500 ease-out border
        ${darkMode ? 'bg-[#1e1e1e] border-white/10' : 'bg-white border-stone-200'}
        ${hoverEffect ? 'hover:-translate-y-1 hover:shadow-xl' : ''}
        ${darkMode ? 'shadow-[0_4px_20px_rgba(0,0,0,0.5)]' : 'shadow-[0_8px_30px_rgba(0,0,0,0.04)]'}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export default PaperCard;
