import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import MobileNavigation from './layout/MobileNavigation';
import ScrollBackground from './ui/ScrollBackground';
import { useTheme } from '../context/ThemeContext';

const Layout = ({ children }) => {
    const { darkMode } = useTheme();

    return (
        <div className={`min-h-screen transition-colors duration-700 ease-in-out font-sans selection:bg-stone-300 selection:text-black ${darkMode ? 'bg-[#121212] text-stone-200' : 'bg-[#fdfbf7] text-stone-800'}`}>
            <ScrollBackground />

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        .font-serif { font-family: 'Crimson Text', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>

            <Navbar />

            <main className="max-w-6xl mx-auto px-6 pt-32 min-h-screen">
                {children}
            </main>

            <Footer />
            <MobileNavigation />
        </div>
    );
};

export default Layout;
