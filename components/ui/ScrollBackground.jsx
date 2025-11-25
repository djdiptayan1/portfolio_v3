import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

const ScrollBackground = () => {
    const { darkMode } = useTheme();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`fixed inset-0 pointer-events-none opacity-[0.03] z-50`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div
                className={`fixed -bottom-20 -right-20 z-0 pointer-events-none ${darkMode ? 'opacity-5' : 'opacity-10'} transition-transform duration-75 ease-out`}
                style={{ transform: `rotate(${scrollY * 0.05}deg)` }}
            >
                <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="300" cy="300" r="299" stroke={darkMode ? "white" : "black"} strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="300" cy="300" r="250" stroke={darkMode ? "white" : "black"} strokeWidth="0.5" />
                    <circle cx="300" cy="300" r="200" stroke={darkMode ? "white" : "black"} strokeWidth="1" strokeDasharray="10 10" />
                    <line x1="300" y1="0" x2="300" y2="600" stroke={darkMode ? "white" : "black"} strokeWidth="0.5" />
                    <line x1="0" y1="300" x2="600" y2="300" stroke={darkMode ? "white" : "black"} strokeWidth="0.5" />
                </svg>
            </div>
        </>
    );
};

export default ScrollBackground;
