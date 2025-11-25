import React from 'react';
import { Globe, Camera, Coffee, MessageCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import PaperCard from '../ui/PaperCard';

const AboutSection = () => {
    const { darkMode } = useTheme();

    return (
        <section className="py-16 md:py-24 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Bio Card - Spans 2 columns */}
                <PaperCard className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className={`font-serif text-3xl italic mb-6 ${darkMode ? 'text-stone-200' : 'text-stone-800'}`}>
                        Beyond the Code
                    </h3>
                    <div className={`h-1 w-12 mb-6 ${darkMode ? 'bg-stone-700' : 'bg-stone-300'}`}></div>
                    <p className={`text-lg leading-relaxed ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                        While I speak Java and JavaScript fluently, my life isn't just syntax.
                        I believe that great engineering comes from understanding people and cultures.
                    </p>
                </PaperCard>

                {/* Interest Cards */}
                <PaperCard className="p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-stone-50/5 transition-colors">
                    <Globe size={24} />
                    <div>
                        <h4 className={`font-serif text-lg ${darkMode ? 'text-stone-200' : 'text-stone-800'}`}>Traveller</h4>
                        <p className={`text-xs mt-1 ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>Exploring new cultures</p>
                    </div>
                </PaperCard>

                <PaperCard className="p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-stone-50/5 transition-colors">
                    <Camera size={24} />
                    <div>
                        <h4 className={`font-serif text-lg ${darkMode ? 'text-stone-200' : 'text-stone-800'}`}>Photographer</h4>
                        <p className={`text-xs mt-1 ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>Capturing moments</p>
                    </div>
                </PaperCard>

                <PaperCard className="p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-stone-50/5 transition-colors">
                    <Coffee size={24} />
                    <div>
                        <h4 className={`font-serif text-lg ${darkMode ? 'text-stone-200' : 'text-stone-800'}`}>Foodie</h4>
                        <p className={`text-xs mt-1 ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>Taste is universal</p>
                    </div>
                </PaperCard>

                <PaperCard className="p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-stone-50/5 transition-colors">
                    <MessageCircle size={24} />
                    <div>
                        <h4 className={`font-serif text-lg ${darkMode ? 'text-stone-200' : 'text-stone-800'}`}>Connector</h4>
                        <p className={`text-xs mt-1 ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>Talking to people</p>
                    </div>
                </PaperCard>
            </div>
        </section>
    );
};

export default AboutSection;
