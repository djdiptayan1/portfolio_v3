import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const { darkMode, toggleTheme } = useTheme();
    const router = useRouter();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experiences', path: '/experience' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => router.pathname === path;

    return (
        <nav className={`fixed top-0 w-full z-40 transition-all duration-300 border-b backdrop-blur-md ${darkMode ? 'bg-[#121212]/80 border-white/5' : 'bg-[#fdfbf7]/80 border-stone-200'}`}>
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className={`font-serif text-2xl font-bold cursor-pointer tracking-tight ${darkMode ? 'text-stone-100' : 'text-stone-900'}`}>
                    djdiptayan.
                </Link>

                <div className="hidden md:flex gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive(item.path)
                                ? (darkMode ? 'bg-white/10 text-stone-100' : 'bg-stone-200 text-stone-900')
                                : (darkMode ? 'text-stone-400 hover:text-stone-200' : 'text-stone-500 hover:text-stone-800')
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <button onClick={toggleTheme} className={`p-2 rounded-full transition-transform hover:rotate-12 ${darkMode ? 'text-stone-400' : 'text-stone-500'}`}>
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
