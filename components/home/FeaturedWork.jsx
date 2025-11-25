import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import PaperCard from '../ui/PaperCard';

const FeaturedWork = ({ projects = [], loading = false }) => {
    const { darkMode } = useTheme();

    return (
        <section className="py-16 md:py-24 border-t border-dashed border-stone-300/30">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className={`text-3xl md:text-4xl font-serif ${darkMode ? 'text-stone-100' : 'text-stone-900'}`}>Selected Work</h2>
                </div>
                <Link
                    href="/projects"
                    className={`hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:underline underline-offset-4 ${darkMode ? 'text-stone-400' : 'text-stone-500'}`}
                >
                    All Projects <ArrowRight size={14} />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {loading ? [1, 2].map(i => <div key={i} className="h-80 bg-stone-200/20 animate-pulse"></div>) :
                    projects.slice(0, 2).map((project) => (
                        <Link key={project._id} href="/projects">
                            <PaperCard className="group cursor-pointer h-full" hoverEffect={false}>
                                <div className="h-full flex flex-col">
                                    <div className="h-64 overflow-hidden relative">
                                        {project.coverImage ? (
                                            <img
                                                src={project.coverImage}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                                            />
                                        ) : (
                                            <div className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-stone-800' : 'bg-stone-100'}`}>
                                                <span className="opacity-20 font-serif text-2xl italic">No Preview</span>
                                            </div>
                                        )}
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center ${darkMode ? 'bg-black/40' : 'bg-white/40'}`}>
                                            <span className={`px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest`}>View Details</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className={`text-xl font-medium font-serif mb-2 ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>{project.title}</h3>
                                        <p className={`text-sm line-clamp-2 ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>{project.description}</p>
                                    </div>
                                </div>
                            </PaperCard>
                        </Link>
                    ))}
            </div>

            <Link
                href="/projects"
                className={`md:hidden w-full py-4 text-center border text-sm uppercase tracking-widest block ${darkMode ? 'border-stone-700 text-stone-300' : 'border-stone-300 text-stone-600'}`}
            >
                View All Projects
            </Link>
        </section>
    );
};

export default FeaturedWork;
