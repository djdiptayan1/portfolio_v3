import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const HeroSection = ({ resumeUrl }) => {
    const { darkMode } = useTheme();

    return (
        <section className="space-y-8 md:space-y-12 py-12 md:py-20 border-b border-dashed border-stone-300/30">
            <div className="space-y-6">
                <div className="inline-block">
                    <h1 className={`text-6xl md:text-8xl font-serif font-medium tracking-tight leading-none ${darkMode ? 'text-stone-100' : 'text-stone-900'}`}>
                        Diptayan Jash
                    </h1>
                    <p className={`text-xl md:text-2xl mt-4 font-serif italic ${darkMode ? 'text-stone-500' : 'text-stone-400'}`}>
                        Full Stack Engineer
                    </p>
                </div>

                <p className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                    Crafting digital architectures with clarity and precision.
                    I build scalable backend systems and minimal interfaces that feel tangible.
                </p>
            </div>

            <div className="flex flex-wrap gap-4">
                <Link
                    href="/projects"
                    className={`flex items-center gap-2 px-8 py-3 transition-colors text-sm uppercase tracking-widest font-bold ${darkMode
                        ? 'bg-stone-100 text-stone-900 hover:bg-white'
                        : 'bg-stone-900 text-white hover:bg-black'
                        }`}
                >
                    View Work <ArrowRight size={16} />
                </Link>
                <Link
                    href="/contact"
                    className={`flex items-center gap-2 px-8 py-3 border transition-colors text-sm uppercase tracking-widest font-bold ${darkMode
                        ? 'border-stone-700 text-stone-300 hover:border-stone-500'
                        : 'border-stone-300 text-stone-600 hover:border-stone-900'
                        }`}
                >
                    Contact
                </Link>
                <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-8 py-3 border transition-colors text-sm uppercase tracking-widest font-bold ${darkMode
                        ? 'border-stone-700 text-stone-300 hover:border-stone-500'
                        : 'border-stone-300 text-stone-600 hover:border-stone-900'
                        }`}
                >
                    Resume <FileText size={16} />
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
