import React from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import PaperCard from '../ui/PaperCard';

const CertificationsSection = ({ certifications = [] }) => {
    const { darkMode } = useTheme();

    return (
        <section className="py-16 md:py-24 border-t border-dashed border-stone-300/30">
            <div className="flex justify-between items-end mb-12">
                <h2 className={`text-3xl md:text-4xl font-serif ${darkMode ? 'text-stone-100' : 'text-stone-900'}`}>Certifications</h2>
                <Link
                    href="/certifications"
                    className={`hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:underline underline-offset-4 ${darkMode ? 'text-stone-400' : 'text-stone-500'}`}
                >
                    View All <ArrowRight size={14} />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {certifications.slice(0, 2).map((cert) => (
                    <PaperCard key={cert._id} hoverEffect={true} className="p-6 flex gap-6 items-start">
                        {cert.image && (
                            <img src={cert.image} alt={cert.title} className="w-20 h-20 object-contain rounded-md bg-white/5 p-2" />
                        )}
                        <div className="flex-1 min-w-0">
                            <h4 className={`text-lg font-medium font-serif leading-tight mb-2 ${darkMode ? 'text-stone-200' : 'text-stone-800'}`}>
                                {cert.title}
                            </h4>
                            <p className={`text-xs uppercase tracking-wider mb-4 ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>
                                {cert.date_str}
                            </p>
                            <div className="flex gap-4">
                                {cert.company_link && (
                                    <a
                                        href={cert.company_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-xs hover:underline ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}
                                    >
                                        Provider
                                    </a>
                                )}
                                {cert.certificate_link && (
                                    <a
                                        href={cert.certificate_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-xs flex items-center gap-1 hover:underline ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}
                                    >
                                        Credential <ExternalLink size={10} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </PaperCard>
                ))}
            </div>

            <Link
                href="/certifications"
                className={`md:hidden w-full py-4 text-center border text-sm uppercase tracking-widest block ${darkMode ? 'border-stone-700 text-stone-300' : 'border-stone-300 text-stone-600'}`}
            >
                View All Certifications
            </Link>
        </section>
    );
};

export default CertificationsSection;
