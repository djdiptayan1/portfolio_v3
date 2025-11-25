import React from 'react';
import { MapPin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { fetchFromApi, parseDate } from '../../lib/api';
import SEO from '../../components/SEO';

export default function Experience({ experiences }) {
    const { darkMode } = useTheme();

    return (
        <div className="max-w-3xl mx-auto animate-fade-in pt-10 pb-20">
            <h2 className={`text-5xl font-serif mb-16 ${darkMode ? 'text-stone-100' : 'text-stone-900'}`}>Experience</h2>
            <div className={`relative border-l ${darkMode ? 'border-white/10' : 'border-stone-300'} ml-3 space-y-16`}>
                {experiences.map((exp) => (
                    <div key={exp._id} className="relative pl-8 group">
                        <div className={`
              absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full border transition-colors duration-300
              ${darkMode ? 'bg-stone-900 border-stone-500 group-hover:bg-stone-100' : 'bg-white border-stone-400 group-hover:bg-stone-800'}
            `}></div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                            <h3 className={`text-2xl font-serif ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>
                                {exp.position}
                            </h3>
                            <span className={`text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>
                                {exp.date?.start} — {exp.date?.end || 'Present'}
                            </span>
                        </div>
                        <div className={`flex items-center gap-2 text-sm mb-6 font-medium uppercase tracking-wide ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                            <MapPin size={14} className="opacity-50" />
                            {exp.company}
                        </div>
                        <p className={`text-lg leading-relaxed font-light ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const experiences = await fetchFromApi('/experiences');
    const sortedExp = experiences.sort((a, b) => {
        const endA = parseDate(a.date?.end);
        const endB = parseDate(b.date?.end);
        return endB - endA;
    });

    return {
        props: { experiences: sortedExp },
        revalidate: 60
    };
}
