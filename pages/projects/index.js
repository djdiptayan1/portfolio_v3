import React from 'react';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import PaperCard from '../../components/ui/PaperCard';
import Badge from '../../components/ui/Badge';
import { fetchFromApi } from '../../lib/api';
import SEO from '../../components/SEO';

export default function Projects({ projects }) {
    const { darkMode } = useTheme();

    return (
        <div className="max-w-6xl mx-auto animate-fade-in pt-10 pb-20">
            <SEO
                title="Projects"
                description="Explore the projects of Diptayan Jash, featuring web and app development work using React, Next.js, and more."
            />
            <h2 className={`text-5xl font-serif mb-16 ${darkMode ? 'text-stone-100' : 'text-stone-900'}`}>All Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <PaperCard key={project._id} className="flex flex-col h-full group">
                        <div className="h-48 overflow-hidden relative border-b border-gray-100/10">
                            {project.coverImage ? (
                                <Image
                                    src={project.coverImage}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-stone-800' : 'bg-stone-100'}`}>
                                    <span className="opacity-20 font-serif text-4xl italic">No Image</span>
                                </div>
                            )}
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        className="p-2 bg-white text-black rounded-full shadow-lg hover:scale-110 transition-transform">
                                        <Github size={18} />
                                    </a>
                                )}
                                {project.website && (
                                    <a href={project.website} target="_blank" rel="noopener noreferrer"
                                        className="p-2 bg-black text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className={`text-xl font-medium font-serif mb-2 ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>{project.title}</h3>
                            <p className={`text-sm leading-relaxed mb-6 flex-grow line-clamp-3 ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.technologies?.slice(0, 3).map((tech, idx) => (
                                    <Badge key={idx}>{tech}</Badge>
                                ))}
                            </div>
                        </div>
                    </PaperCard>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const projects = await fetchFromApi('/projects');
    return {
        props: { projects },
        revalidate: 60
    };
}
