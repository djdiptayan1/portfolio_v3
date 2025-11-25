import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Twitter, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { fetchFromApi } from '../../lib/api';

const Footer = () => {
    const { darkMode } = useTheme();
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        const loadSocials = async () => {
            const data = await fetchFromApi('/socials');
            // Handle messy keys in socials API
            const cleanSocials = (data || []).map(s => ({
                id: s._id,
                name: s.name,
                url: s.url || s["  url"] || s[" url"],
                icon: s.Icon || s["  Icon"] || s[" Icon"]
            }));
            setSocials(cleanSocials);
        };
        loadSocials();
    }, []);

    const getSocialIcon = (name) => {
        const n = name?.toLowerCase().trim();
        if (n === 'github') return <Github size={20} />;
        if (n === 'linkedin') return <Linkedin size={20} />;
        if (n === 'instagram') return <Instagram size={20} />;
        return <ExternalLink size={20} />;
    };

    return (
        <footer className={`border-t py-16 mt-12 ${darkMode ? 'border-white/5 bg-[#0a0a0a]' : 'border-stone-200 bg-stone-100'}`}>
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h4 className={`font-serif text-xl font-bold mb-2 ${darkMode ? 'text-stone-200' : 'text-stone-800'}`}>Diptayan Jash</h4>
                    <p className={`text-sm ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}> © {new Date().getFullYear()}</p>
                </div>

                <div className="flex gap-6">
                    {socials.map((social) => (
                        <a
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className={`p-2 rounded-full transition-all hover:-translate-y-1 ${darkMode ? 'text-stone-400 hover:text-white hover:bg-white/10' : 'text-stone-500 hover:text-black hover:bg-stone-200'}`}
                            title={social.name}
                        >
                            {getSocialIcon(social.name)}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
