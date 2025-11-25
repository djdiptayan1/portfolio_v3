import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const LatestExperience = ({ experiences = [] }) => {
    const { darkMode } = useTheme();
    const latest = experiences[0];

    if (!latest) return null;

    return (
        <section className="py-16 md:py-24 border-t border-dashed border-stone-300/30">
            <div className="flex justify-between items-end mb-12">
                <h2 className={`text-3xl md:text-4xl font-serif ${darkMode ? 'text-stone-100' : 'text-stone-900'}`}>Current Status</h2>
                <Link
                    href="/experience"
                    className={`hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:underline underline-offset-4 ${darkMode ? 'text-stone-400' : 'text-stone-500'}`}
                >
                    Full Timeline <ArrowRight size={14} />
                </Link>
            </div>

            <div className={`relative border-l ${darkMode ? 'border-white/10' : 'border-stone-300'} ml-3 pl-8 group`}>
                <div className={`
            absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full border transition-colors duration-300
            ${darkMode ? 'bg-stone-900 border-stone-500' : 'bg-white border-stone-400'}
          `}></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                    <h3 className={`text-2xl font-serif ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>
                        {latest.position}
                    </h3>
                    <span className={`text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>
                        {latest.date?.start} — {latest.date?.end || 'Present'}
                    </span>
                </div>
                <div className={`flex items-center gap-2 text-sm mb-6 font-medium uppercase tracking-wide ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                    <MapPin size={14} className="opacity-50" />
                    {latest.company}
                </div>
                <p className={`text-lg leading-relaxed font-light ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                    {latest.description}
                </p>
            </div>
        </section>
    );
};

export default LatestExperience;
