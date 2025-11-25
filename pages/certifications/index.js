import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import PaperCard from '../../components/ui/PaperCard';
import { fetchFromApi } from '../../lib/api';

export default function Certifications({ certifications }) {
    const { darkMode } = useTheme();

    return (
        <div className="max-w-4xl mx-auto animate-fade-in pt-10 pb-20">
            <h2 className={`text-5xl font-serif mb-16 ${darkMode ? 'text-stone-100' : 'text-stone-900'}`}>Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert) => (
                    <PaperCard key={cert._id} hoverEffect={true} className="p-6 flex gap-6 items-start">
                        {cert.image && (
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                width={80}
                                height={80}
                                className="object-contain rounded-md bg-white/5 p-2"
                            />
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
        </div>
    );
}

export async function getStaticProps() {
    const certifications = await fetchFromApi('/certifications');
    return {
        props: { certifications },
        revalidate: 60
    };
}
