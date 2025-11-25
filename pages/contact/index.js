import React, { useState } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import PaperCard from '../../components/ui/PaperCard';

export default function Contact() {
    const { darkMode } = useTheme();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate network request
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-2xl mx-auto animate-fade-in pt-10 pb-20">
            <PaperCard className="p-8 md:p-12">
                <div className="text-center mb-10">
                    <h2 className={`text-4xl font-serif mb-4 ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>
                        Get in Touch
                    </h2>
                    <p className={`text-lg ${darkMode ? 'text-stone-400' : 'text-stone-600'}`}>
                        Have a project in mind or just want to say hi?
                    </p>
                </div>

                {status === 'success' ? (
                    <div className="text-center py-12 space-y-6 animate-fade-in">
                        <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                            <MessageCircle size={32} />
                        </div>
                        <h3 className={`text-2xl font-serif ${darkMode ? 'text-stone-100' : 'text-stone-800'}`}>Message Sent!</h3>
                        <p className={darkMode ? 'text-stone-400' : 'text-stone-600'}>
                            Thanks for reaching out. I'll get back to you as soon as possible.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className={`mt-6 px-8 py-3 text-sm uppercase tracking-widest font-bold border transition-colors ${darkMode
                                ? 'border-stone-700 text-stone-300 hover:border-stone-500'
                                : 'border-stone-300 text-stone-600 hover:border-stone-900'
                                }`}
                        >
                            Send Another
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className={`text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full p-3 bg-transparent border outline-none transition-colors focus:border-stone-500 ${darkMode ? 'border-white/10 text-stone-200' : 'border-stone-200 text-stone-800'
                                        }`}
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className={`text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full p-3 bg-transparent border outline-none transition-colors focus:border-stone-500 ${darkMode ? 'border-white/10 text-stone-200' : 'border-stone-200 text-stone-800'
                                        }`}
                                    placeholder="jane@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className={`text-xs font-bold uppercase tracking-widest ${darkMode ? 'text-stone-500' : 'text-stone-500'}`}>
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full p-3 bg-transparent border outline-none transition-colors focus:border-stone-500 resize-none ${darkMode ? 'border-white/10 text-stone-200' : 'border-stone-200 text-stone-800'
                                    }`}
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className={`flex items-center gap-2 px-10 py-4 text-sm uppercase tracking-widest font-bold transition-all ${darkMode
                                    ? 'bg-stone-100 text-stone-900 hover:bg-white disabled:bg-stone-800 disabled:text-stone-600'
                                    : 'bg-stone-900 text-white hover:bg-black disabled:bg-stone-200 disabled:text-stone-400'
                                    }`}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                {status !== 'submitting' && <ArrowRight size={16} />}
                            </button>
                        </div>
                    </form>
                )}
            </PaperCard>
        </div>
    );
}
