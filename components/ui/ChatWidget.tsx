"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';
import { SOCIAL_LINKS } from '../../lib/constants';
import * as THREE from 'three';

// --- Mini 3D Sphere for the Widget Icon ---
const MiniSphere = ({ scale = 1.4 }: { scale?: number }) => {
    const meshRef = useRef<THREE.Points>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Slow, elegant rotation
        meshRef.current.rotation.y = time * 0.1;
        meshRef.current.rotation.x = time * 0.05;

        // Subtle breathing
        const s = scale + Math.sin(time * 0.8) * 0.05;
        meshRef.current.scale.set(s, s, s);
    });

    return (
        <points ref={meshRef}>
            {/* Reduced segment count for minimalist "dot" look */}
            <sphereGeometry args={[1, 32, 32]} />
            <pointsMaterial
                color="#ffffff"
                size={0.12} // Larger dots for better visibility
                sizeAttenuation={true}
                transparent={true}
                opacity={0.8}
            />
        </points>
    );
};

// --- Types ---
type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
};

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Olá! Sou a IA do Felipe. Como posso ajudar você hoje?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const newUserMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, newUserMessage]);
        setInputValue('');

        // Simulate Bot Response and WhatsApp Handoff
        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: 'Entendi! Para um atendimento mais rápido e personalizado, vamos continuar no WhatsApp?',
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    const handleWhatsAppRedirect = () => {
        const message = encodeURIComponent("Olá! Vim através do site e gostaria de saber mais.");
        window.open(`https://wa.me/${SOCIAL_LINKS.whatsapp}?text=${message}`, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            {/* The container needs pointer-events-none to not block clicks behind it, 
            but children need pointer-events-auto */}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-6 w-[380px] max-w-[calc(100vw-32px)] flex flex-col pointer-events-auto bg-[#050505]/60 backdrop-blur-2xl border border-white/10 rounded-[32px] overflow-hidden shadow-2xl relative"
                    >
                        {/* Gradient Glow Border Overlay */}
                        <div className="absolute inset-0 z-0 pointer-events-none rounded-[32px] border border-white/5" />

                        {/* Header/Title - Optional but adds to widget feel */}
                        <div className="pt-6 px-6 pb-2 z-10 flex justify-between items-center">
                            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Jarvis OS</span>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto max-h-[350px] p-6 space-y-6 nice-scrollbar relative z-10">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id}
                                    className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                                >
                                    {/* Bot Avatar (Animated Sphere) - Larger & More Evident */}
                                    {msg.sender === 'bot' && (
                                        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 relative bg-black/20 mt-1 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                            <Canvas gl={{ alpha: true }} camera={{ position: [0, 0, 4] }}>
                                                <MiniSphere scale={2.5} />
                                                <ambientLight intensity={1.5} />
                                                <pointLight position={[5, 5, 5]} intensity={3} color="#ffffff" />
                                            </Canvas>
                                        </div>
                                    )}

                                    <div
                                        className={`max-w-[75%] px-5 py-4 text-sm md:text-base ${msg.sender === 'user'
                                            ? 'bg-white text-black rounded-2xl rounded-tr-sm font-medium'
                                            : 'bg-white/5 text-gray-200 rounded-2xl rounded-tl-sm border border-white/5'
                                            } shadow-sm`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {messages.length > 2 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start pl-11" // Indent to align with bot text
                                >
                                    <button
                                        onClick={handleWhatsAppRedirect}
                                        className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-2.5 px-5 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-green-900/20"
                                    >
                                        <MessageSquare size={20} />
                                        WhatsApp
                                    </button>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Separator */}
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        {/* Input Area (Integrated) */}
                        <div className="p-4 z-10 bg-white/5">
                            <div className="relative bg-black/50 rounded-full p-1.5 flex items-center gap-2 border border-white/10 transition-colors focus-within:border-white/20">
                                {/* Plus Menu */}
                                <button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 transition-colors shrink-0">
                                    <span className="text-lg leading-none mb-0.5">+</span>
                                </button>

                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask Jarvis..."
                                    className="flex-1 bg-transparent border-none text-white text-sm focus:ring-0 placeholder:text-gray-500 px-2 min-w-[50px]"
                                />

                                {/* Send Button (only appears when typing or always visible styling) */}
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300 ${inputValue.trim() ? 'bg-white text-black scale-100' : 'bg-transparent text-gray-500 scale-90'}`}
                                >
                                    <Send size={16} className={inputValue.trim() ? "translate-x-0.5" : ""} />
                                </button>
                            </div>

                            {/* Footer Badges */}
                            <div className="flex justify-between items-center mt-3 px-2">
                                <div className="flex gap-2">
                                    <span className="text-[9px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">GPT-4o</span>
                                    <span className="text-[9px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">Private</span>
                                </div>
                                <div className="text-[9px] text-gray-600 flex items-center gap-1.5 cursor-pointer hover:text-gray-400 transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    Online
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger Button (3D Sphere) */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full relative group cursor-pointer pointer-events-auto"
            >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/40 transition-all duration-500 animate-pulse" />

                {/* Ring Animation */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-ping opacity-20" />

                <div className="w-full h-full rounded-full overflow-hidden relative z-10">
                    <Canvas gl={{ alpha: true }}>
                        <ambientLight intensity={1.5} />
                        <pointLight position={[5, 5, 5]} intensity={3} color="#ffffff" />
                        <MiniSphere scale={1.4} />
                    </Canvas>
                </div>

                {/* Close Icon Overlay when Open */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 rounded-full backdrop-blur-sm"
                        >
                            <X size={24} className="text-white" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default ChatWidget;
