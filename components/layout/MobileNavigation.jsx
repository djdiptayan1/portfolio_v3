import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const MobileNavigation = () => {
    const { darkMode } = useTheme();
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path) => router.pathname === path;

    const mainItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experiences', path: '/experience' },
    ];

    const menuItems = [
        { name: 'Certifications', path: '/certifications' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className={`md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4`}>

            {/* Popup Menu */}
            {mobileMenuOpen && (
                <div className={`
          absolute bottom-full right-0 mb-4 min-w-[160px] p-2 rounded-2xl shadow-2xl border backdrop-blur-xl flex flex-col gap-1 animate-fade-in origin-bottom-right
          ${darkMode ? 'bg-[#1e1e1e]/95 border-white/10' : 'bg-white/95 border-stone-200'}
        `}>
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`px-6 py-3 text-sm font-medium rounded-xl transition-all w-full text-left block ${isActive(item.path)
                                ? (darkMode ? 'bg-stone-100 text-stone-900' : 'bg-stone-900 text-white')
                                : (darkMode ? 'text-stone-400 hover:bg-white/5' : 'text-stone-500 hover:bg-stone-50')
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}

            {/* Bottom Bar */}
            <div className={`relative flex gap-2 p-2 rounded-full shadow-2xl border backdrop-blur-xl ${darkMode ? 'bg-[#1e1e1e]/90 border-white/10' : 'bg-white/90 border-stone-200'
                }`}>
                {mainItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-2 text-xs font-medium rounded-full transition-all whitespace-nowrap ${isActive(item.path)
                            ? (darkMode ? 'bg-stone-100 text-stone-900' : 'bg-stone-900 text-white')
                            : (darkMode ? 'text-stone-400' : 'text-stone-500')
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}

                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`px-3 py-2 text-xs font-medium rounded-full transition-all flex items-center justify-center ${mobileMenuOpen
                            ? (darkMode ? 'bg-stone-800 text-stone-100' : 'bg-stone-200 text-stone-900')
                            : (darkMode ? 'text-stone-400' : 'text-stone-500')
                        }`}
                >
                    {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
                </button>
            </div>
        </div>
    );
};

export default MobileNavigation;
