import React from 'react';
import { Code } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import PaperCard from '../ui/PaperCard';

const TechStackSection = ({ skills = [] }) => {
    const { darkMode } = useTheme();

    return (
        <section className="py-12 border-b border-dashed border-stone-300/30">
            <h3 className={`font-serif text-2xl mb-8 italic ${darkMode ? 'text-stone-300' : 'text-stone-500'}`}>
                Core Competencies
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3">
                {skills.map((skill) => (
                    <PaperCard key={skill._id} hoverEffect={true} className="p-4 flex flex-col items-center justify-center gap-3 text-center group">
                        {skill.image ? (
                            <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                            />
                        ) : (
                            <Code size={24} className={`opacity-50 group-hover:opacity-100 transition-opacity ${darkMode ? 'text-stone-400' : 'text-stone-600'}`} />
                        )}
                        <span className={`text-xs font-medium tracking-wide ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}>
                            {skill.name}
                        </span>
                    </PaperCard>
                ))}
            </div>
        </section>
    );
};

export default TechStackSection;
