import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Badge from './ui/Badge';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const { darkMode } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure component is mounted before creating portal (client-side only)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen || !project || !mounted) return null;

    const modalContent = (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop with blur */}
            <div
                className="absolute inset-0 bg-stone-900/30 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Window Container */}
            <div
                className={`
                    relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col
                    transform transition-all duration-300 scale-100 opacity-100 backdrop-blur-2xl
                    ${darkMode
                        ? 'bg-[#1c1c1e]/85 border border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]'
                        : 'bg-white/80 border border-white/40 shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]'
                    }
                `}
                onClick={(e) => e.stopPropagation()}
            >
                {/* macOS Title Bar */}
                <div className={`
                    h-11 px-4 flex items-center justify-between shrink-0 border-b backdrop-blur-xl z-10
                    ${darkMode ? 'bg-white/5 border-white/5' : 'bg-white/40 border-black/5'}
                `}>
                    <div className="flex gap-2 group">
                        <button
                            onClick={onClose}
                            className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e] flex items-center justify-center hover:brightness-90 transition-all"
                            aria-label="Close"
                        >
                            <span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold text-[#5c0002]">✕</span>
                        </button>
                        <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24] flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold text-[#995700]">−</span>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29] flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 text-[8px] font-bold text-[#006500]">＋</span>
                        </div>
                    </div>
                    <div className={`text-xs font-medium tracking-wide opacity-80 ${darkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                        {project.title}
                    </div>
                    <div className="w-14" /> {/* Spacer for centering title */}
                </div>

                {/* Content Scrollable Area */}
                <div className="overflow-y-auto flex-1 custom-scrollbar">
                    {/* Hero Image */}
                    <div className="relative h-64 sm:h-80 w-full bg-stone-100 dark:bg-stone-800">
                        {project.coverImage ? (
                            <Image
                                src={project.coverImage}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full opacity-20">
                                <span className="text-4xl font-serif italic">No Image</span>
                            </div>
                        )}

                        {/* Floating Links */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                    className="p-2 bg-white/90 backdrop-blur text-black rounded-full shadow-lg hover:scale-110 transition-transform">
                                    <Github size={20} />
                                </a>
                            )}
                            {project.website && (
                                <a href={project.website} target="_blank" rel="noopener noreferrer"
                                    className="p-2 bg-black/90 backdrop-blur text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                                    <ExternalLink size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="p-8">
                        {/* Header Info */}
                        <div className="mb-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className={`text-xs font-bold tracking-wider uppercase px-2 py-1 rounded ${darkMode ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-600'}`}>
                                    {project.type}
                                </span>
                                {project.feature && (
                                    <span className="text-xs font-bold tracking-wider uppercase px-2 py-1 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
                                        Featured
                                    </span>
                                )}
                            </div>

                            <h2 className={`text-3xl sm:text-4xl font-serif mb-4 ${darkMode ? 'text-stone-100' : 'text-stone-900'}`}>
                                {project.title}
                            </h2>

                            {/* <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech, idx) => (
                                    <Badge key={idx}>{tech}</Badge>
                                ))}
                            </div> */}
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-8">
                                <div>
                                    <h3 className={`text-lg font-medium mb-3 flex items-center gap-2 ${darkMode ? 'text-stone-200' : 'text-stone-800'}`}>
                                        Overview
                                    </h3>
                                    <p className={`leading-relaxed ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                                        {project.description}
                                    </p>
                                </div>

                                {project.motivation && (
                                    <div>
                                        <h3 className={`text-lg font-medium mb-3 flex items-center gap-2 ${darkMode ? 'text-stone-200' : 'text-stone-800'}`}>
                                            Motivation
                                        </h3>
                                        <p className={`leading-relaxed ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                                            {project.motivation}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar Info */}
                            <div className={`p-6 rounded-xl ${darkMode ? 'bg-stone-800/50' : 'bg-stone-50'}`}>
                                <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-stone-500' : 'text-stone-400'}`}>
                                    Project Details
                                </h3>
                                <div className="space-y-5">
                                    {/* Tech Stack */}
                                    {project.technologies && project.technologies.length > 0 && (
                                        <div>
                                            <div className={`text-xs mb-2 ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>Tech Stack</div>
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-stone-700/50 text-stone-300' : 'bg-stone-200/70 text-stone-700'}`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Project Type */}
                                    {project.type && (
                                        <div>
                                            <div className={`text-xs mb-1 ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>Category</div>
                                            <div className={`text-sm ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}>{project.type}</div>
                                        </div>
                                    )}

                                    {/* Links Section */}
                                    <div className="pt-3 border-t border-stone-200/20 dark:border-stone-700/30 space-y-3">
                                        <div className={`text-xs ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>Links</div>

                                        {project.website && (
                                            <a
                                                href={project.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-2 text-sm hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                                            >
                                                <ExternalLink size={14} />
                                                <span>Live Demo</span>
                                            </a>
                                        )}

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-2 text-sm hover:underline ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}
                                            >
                                                <Github size={14} />
                                                <span>Source Code</span>
                                            </a>
                                        )}

                                        {project.appstore && (
                                            <a
                                                href={project.appstore}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-2 text-sm hover:underline ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}
                                            >
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                                </svg>
                                                <span>App Store</span>
                                            </a>
                                        )}

                                        {project.playstore && (
                                            <a
                                                href={project.playstore}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-2 text-sm hover:underline ${darkMode ? 'text-stone-300' : 'text-stone-700'}`}
                                            >
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                                </svg>
                                                <span>Play Store</span>
                                            </a>
                                        )}

                                        {project.testflight && (
                                            <a
                                                href={project.testflight}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-2 text-sm hover:underline ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}
                                            >
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                                </svg>
                                                <span>TestFlight</span>
                                            </a>
                                        )}

                                        {!project.website && !project.github && !project.appstore && !project.playstore && !project.testflight && (
                                            <span className={`text-sm ${darkMode ? 'text-stone-500' : 'text-stone-400'}`}>No links available</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Images Gallery if available */}
                        {project.images && project.images.length > 0 && (
                            <div className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800">
                                <h3 className={`text-xl font-serif mb-6 ${darkMode ? 'text-stone-200' : 'text-stone-800'}`}>
                                    Gallery
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.images.map((img, idx) => (
                                        <div key={idx} className="relative h-48 rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800">
                                            <Image
                                                src={img}
                                                alt={`${project.title} screenshot ${idx + 1}`}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default ProjectModal;
