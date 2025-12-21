import React from 'react';
import { Instagram, Github, Layout, Figma, X } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { SOCIAL_LINKS } from '../../lib/constants';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/video/bg-video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10 pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-20 text-center max-w-3xl px-6 mt-20">
                <Reveal>
                    <span className="inline-block mb-6 text-xs tracking-[0.3em] text-gray-400 uppercase">
                        Bem-vindo
                    </span>
                    <h1 className="text-4xl md:text-5xl font-futuristic text-white mb-6 leading-tight">
                        Experiências Digitais <br />
                        <span className="text-gray-500">do Futuro</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-lg mb-12 max-w-2xl mx-auto">
                        Design minimalista, performance e inovação para sua marca.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 mb-12">
                        {[
                            { icon: <Instagram size={20} />, href: SOCIAL_LINKS.instagram },
                            { icon: <Github size={20} />, href: SOCIAL_LINKS.github },
                            { icon: <Layout size={20} />, href: "#" },
                            { icon: <Figma size={20} />, href: "#" },
                            { icon: <X size={20} />, href: "#" }
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all hover:scale-110"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </Reveal>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce-slow opacity-50">
                <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-scroll-down" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
