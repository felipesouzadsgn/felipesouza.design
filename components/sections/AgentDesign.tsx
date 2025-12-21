"use client";

import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabaseClient';
import {
  X,
  Send,
  Mic,
  Plus,
  Sparkles,
  Square,
  Settings,
  PanelLeftClose,
  PanelLeft,
  Image as ImageIcon,
  Code as CodeIcon,
  Globe,
  Paperclip,
  Maximize2,
  Minimize2,
  Zap,
  Trash2
} from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { ChatMessage } from '../../lib/types';
import MiniSphere from '../ui/MiniSphere';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import 'highlight.js/styles/atom-one-dark.css';

interface AgentDesignProps {
  onClose: () => void;
  isFullPage?: boolean;
}

interface ChatSession {
  id: string;
  title: string;
  created_at: string;
}

const AgentDesign: React.FC<AgentDesignProps> = ({ onClose, isFullPage = false }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  // Removed GoogleGenAI state

  // Persistence States
  const [userId, setUserId] = useState<string | null>(null);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);

  // UI States
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isInputExpanded, setIsInputExpanded] = useState(false);

  // Tool States
  const [isWebSearchEnabled, setIsWebSearchEnabled] = useState(false);
  const [isDeepThink, setIsDeepThink] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 1. Initialize User ID & Load Sessions (No changes)
  useEffect(() => {
    const initUser = async () => {
      let storedId = localStorage.getItem('agent_user_id');
      if (!storedId) {
        storedId = crypto.randomUUID();
        localStorage.setItem('agent_user_id', storedId);
      }
      setUserId(storedId);

      // Fetch Sessions
      const { data, error } = await supabase
        .from('chat_sessions')
        .select('*')
        .eq('user_id', storedId)
        .order('created_at', { ascending: false });

      if (data) setSessions(data);
    };
    initUser();
  }, []);

  // 2. Load Messages (No changes)
  useEffect(() => {
    const loadMessages = async () => {
      if (!currentSessionId) {
        setMessages([{
          id: 'init',
          role: 'model',
          text: 'At your service. What needs to be built?',
          timestamp: new Date()
        }]);
        return;
      }

      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('session_id', currentSessionId)
        .order('created_at', { ascending: true });

      if (data) {
        const formattedMessages: ChatMessage[] = data.map(m => ({
          id: m.id,
          role: m.role,
          text: m.content,
          timestamp: new Date(m.created_at)
        }));
        if (formattedMessages.length === 0) {
          setMessages([{
            id: 'init',
            role: 'model',
            text: 'At your service. What needs to be built?',
            timestamp: new Date()
          }]);
        } else {
          setMessages(formattedMessages);
        }
      }
    };
    loadMessages();
  }, [currentSessionId]);

  // Auto-scroll (No changes)
  useEffect(() => {
    if (scrollRef.current) {
      const isCloseToBottom = scrollRef.current.scrollHeight - scrollRef.current.scrollTop <= scrollRef.current.clientHeight + 100;
      if (isCloseToBottom || isTyping) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  useEffect(() => {
    if (isFocusMode) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isFocusMode]);

  const handleNewChat = () => {
    setCurrentSessionId(null);
    setMessages([{
      id: 'init',
      role: 'model',
      text: 'At your service. What needs to be built?',
      timestamp: new Date()
    }]);
  };

  const handleSendMessage = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || !userId) return;

    const tempUserMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, tempUserMsg]);
    setInput('');
    setIsTyping(true);
    if (textareaRef.current) textareaRef.current.style.height = 'auto';

    let activeSessionId = currentSessionId;

    try {
      // Create Session if needed
      if (!activeSessionId) {
        const { data: newSession } = await supabase
          .from('chat_sessions')
          .insert([{
            user_id: userId,
            title: textToSend.slice(0, 30) + (textToSend.length > 30 ? '...' : '')
          }])
          .select()
          .single();

        if (newSession) {
          activeSessionId = newSession.id;
          setCurrentSessionId(newSession.id);
          setSessions(prev => [newSession, ...prev]);
        }
      }

      // Save User Message
      if (activeSessionId) {
        await supabase.from('chat_messages').insert([{
          session_id: activeSessionId,
          role: 'user',
          content: textToSend
        }]);
      }

      const responseId = (Date.now() + 1).toString();
      const modelMsg: ChatMessage = {
        id: responseId,
        role: 'model',
        text: '',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, modelMsg]);

      if (isDeepThink) await new Promise(resolve => setTimeout(resolve, 1500));

      // NEW: Call Backend API (Groq)
      // Prepare context (last 5 messages)
      const contextMessages = messages.slice(-5).map(m => ({
        role: m.role === 'model' ? 'assistant' : 'user', // Map 'model' to 'assistant' for Groq/OpenAI
        content: m.text
      }));
      contextMessages.push({ role: 'user', content: textToSend });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: contextMessages })
      });

      if (!response.ok) throw new Error('API Error');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          fullText += chunk;

          setMessages(prev =>
            prev.map(msg =>
              msg.id === responseId
                ? { ...msg, text: fullText }
                : msg
            )
          );
        }
      }

      // Save Model Message
      if (activeSessionId) {
        await supabase.from('chat_messages').insert([{
          session_id: activeSessionId,
          role: 'model',
          content: fullText
        }]);
      }

    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Agent unreachable. Please check your connection.",
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleDeleteSession = async (e: React.MouseEvent, sessionId: string) => {
    e.stopPropagation();
    await supabase.from('chat_sessions').delete().eq('id', sessionId);
    setSessions(prev => prev.filter(s => s.id !== sessionId));
    if (currentSessionId === sessionId) handleNewChat();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestions = [
    { icon: <ImageIcon size={16} />, text: "Create Visuals" },
    { icon: <CodeIcon size={16} />, text: "Generate Code" },
    { icon: <Zap size={16} />, text: "Optimize Data" },
    { icon: <Sparkles size={16} />, text: "Surprise Me" },
  ];

  return (
    <div className={`fixed inset-0 z-50 flex flex-col bg-[#020202] text-white font-futuristic overflow-hidden transition-all duration-500 ${isFullPage ? '' : 'items-center justify-center'}`}>

      {/* Dynamic Background */}
      <div className={`absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-1000 ${isFocusMode ? 'opacity-30' : 'opacity-100'}`}>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[120px]" />
      </div>

      {/* Main Container */}
      <div className={`relative z-10 flex w-full h-full mx-auto transition-all duration-500 
          ${isFullPage
          ? 'max-w-full'
          : isFocusMode
            ? 'max-w-full h-full rounded-none'
            : 'max-w-6xl max-h-[85vh] rounded-3xl border border-white/5 bg-[#050505]/80 backdrop-blur-2xl shadow-2xl overflow-hidden'
        }`}
      >

        {/* Sidebar */}
        {!isFocusMode && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: isSidebarOpen ? 260 : 0, opacity: isSidebarOpen ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden md:flex flex-col border-r border-white/5 bg-black/20 backdrop-blur-xl overflow-hidden shrink-0"
          >
            <div className="p-4 flex items-center justify-between">
              <button
                onClick={handleNewChat}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs font-medium tracking-widest uppercase transition-all w-full justify-center border border-white/5 hover:border-white/20"
              >
                <Plus size={14} />
                <span>New Session</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-2 py-2 space-y-1">
              <div className="px-3 py-2 text-[10px] font-bold text-gray-600 uppercase tracking-widest">History</div>
              {sessions.map((session) => (
                <div key={session.id} className="relative group">
                  <button
                    onClick={() => setCurrentSessionId(session.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all truncate font-medium pr-8
                                    ${currentSessionId === session.id ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white hover:bg-white/5'}
                                `}
                  >
                    {session.title || 'Untitled Session'}
                  </button>
                  <button
                    onClick={(e) => handleDeleteSession(e, session.id)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
              {sessions.length === 0 && (
                <div className="px-3 py-4 text-center text-xs text-gray-700 italic">No history yet</div>
              )}
            </div>

            <div className="p-4 border-t border-white/5">
              <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-500 hover:text-white transition-all group">
                <Settings size={18} className="group-hover:rotate-90 transition-transform duration-500" />
                <span>Configuration</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col relative min-w-0 bg-[#050505]/50">

          {/* Top Bar */}
          <div className={`absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20 transition-all ${isFocusMode ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
            <div className="flex items-center gap-4">
              {!isFocusMode && (
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all hidden md:block"
                >
                  {isSidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeft size={20} />}
                </button>
              )}

              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isFocusMode ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-gray-600'}`} />
                <span className="font-futuristic text-xs tracking-[0.2em] text-gray-400 uppercase">
                  {isFocusMode ? 'FOCUSED' : 'AGENT READY'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFocusMode(!isFocusMode)}
                className={`p-2 rounded-full transition-all border border-transparent ${isFocusMode ? 'text-white bg-white/10 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                title={isFocusMode ? "Exit Focus" : "Enter Focus"}
              >
                {isFocusMode ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
              {!isFullPage && !isFocusMode && (
                <button onClick={onClose} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Chat Scroll Area */}
          <div
            ref={scrollRef}
            className="flex-1 w-full overflow-y-auto px-4 pt-20 pb-4 scroll-smooth nice-scrollbar"
          >
            {/* Empty State */}
            {messages.length <= 1 && (
              <div className="flex flex-col items-center justify-center h-[60vh] transition-all opacity-100">
                <div className="relative group cursor-pointer">
                  {/* Pulsing Aura */}
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-700" />
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full relative z-10 flex items-center justify-center">
                    <Canvas gl={{ alpha: true }}>
                      <ambientLight intensity={1.5} />
                      <pointLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
                      <MiniSphere scale={2.8} />
                    </Canvas>
                  </div>
                </div>
                <h2 className="mt-8 text-3xl font-futuristic text-white tracking-tighter opacity-90">Felipe Agent</h2>
                <p className="text-xs text-gray-500 tracking-[0.3em] uppercase mt-2">Systems Online</p>
              </div>
            )}

            <div className={`mx-auto space-y-8 px-2 md:px-0 transition-all duration-500 ${isFocusMode ? 'max-w-4xl' : 'max-w-3xl'}`}>
              <AnimatePresence mode='popLayout'>
                {messages.slice(1).map((msg) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} w-full group`}
                  >
                    {msg.role === 'model' && (
                      <div className="w-8 h-8 mr-4 rounded-full overflow-hidden shrink-0 mt-1 opacity-60 hidden md:block border border-white/10">
                        <Canvas gl={{ alpha: true }}>
                          <MiniSphere scale={1.2} />
                          <ambientLight />
                          <pointLight position={[10, 10, 10]} />
                        </Canvas>
                      </div>
                    )}
                    <div
                      className={`
                                        max-w-[90%] md:max-w-3xl p-4 md:p-6 rounded-2xl text-[15px] leading-7 shadow-sm
                                        ${msg.role === 'user'
                          ? 'bg-[#111] text-white border border-white/10 rounded-br-sm'
                          : 'bg-transparent text-gray-300 pl-0'
                        }
                                    `}
                    >
                      {msg.role === 'user' ? (
                        msg.text
                      ) : (
                        <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white prose-headings:font-futuristic prose-h1:text-2xl prose-h2:text-xl prose-ul:list-disc prose-ol:list-decimal prose-pre:bg-[#0A0A0A] prose-pre:border prose-pre:border-white/5 max-w-none">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeHighlight]}
                            components={{
                              code({ node, inline, className, children, ...props }: any) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                  <div className="relative group/code my-6 border border-white/5 rounded-lg overflow-hidden">
                                    <div className="flex items-center justify-between px-4 py-2 bg-[#151515] border-b border-white/5">
                                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">{match[1]}</span>
                                      <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500/20" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                                        <div className="w-2 h-2 rounded-full bg-green-500/20" />
                                      </div>
                                    </div>
                                    <code className={`${className} block p-4`} {...props}>
                                      {children}
                                    </code>
                                  </div>
                                ) : (
                                  <code className={`${className} bg-white/10 px-1.5 py-0.5 rounded text-sm text-gray-200`} {...props}>
                                    {children}
                                  </code>
                                )
                              }
                            }}
                          >
                            {msg.text}
                          </ReactMarkdown>
                          {isTyping && msg.id === messages[messages.length - 1].id && (
                            <span className="inline-block w-1.5 h-4 ml-1 align-middle bg-white animate-pulse" />
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* JARVIS Input Section */}
          <div className="w-full px-4 pb-6 pt-2 z-30">
            <div className={`mx-auto flex flex-col gap-4 transition-all duration-500 ${isFocusMode ? 'max-w-4xl' : 'max-w-3xl'}`}>

              {/* Suggestion Chips */}
              {messages.length <= 1 && !isFocusMode && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-2">
                  {suggestions.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(s.text)}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all text-left group backdrop-blur-sm"
                    >
                      <div className="text-gray-500 group-hover:text-white transition-colors">{s.icon}</div>
                      <span className="text-xs text-gray-400 group-hover:text-white font-medium">{s.text}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Input Bar */}
              <div className="relative group">
                <div className={`absolute -inset-[1px] rounded-[2rem] blur-md transition-opacity duration-500 ${isTyping ? 'bg-white/10 opacity-50' : 'bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-50'}`} />

                <div className={`relative bg-[#080808] rounded-[2rem] border transition-all duration-300 shadow-2xl px-2 py-2 flex items-end gap-2 
                                        ${isFocusMode ? 'border-white/10' : 'border-white/10'}`}>

                  {/* Expandable Tools */}
                  <div className="relative flex flex-col justify-end">
                    <AnimatePresence>
                      {isInputExpanded && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: -10, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute bottom-full left-0 mb-2 p-1.5 bg-[#111] rounded-xl border border-white/10 shadow-xl flex flex-col gap-1 z-40 min-w-[40px]"
                        >
                          <button
                            onClick={() => setIsWebSearchEnabled(!isWebSearchEnabled)}
                            className={`p-2 rounded-lg transition-all ${isWebSearchEnabled ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                            title="Web Search"
                          >
                            <Globe size={18} />
                          </button>
                          <button
                            onClick={() => setIsDeepThink(!isDeepThink)}
                            className={`p-2 rounded-lg transition-all ${isDeepThink ? 'bg-purple-500/20 text-purple-400' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                            title="DeepThink"
                          >
                            <Sparkles size={18} />
                          </button>
                          <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                            <Paperclip size={18} />
                          </button>
                          <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                            <ImageIcon size={18} />
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => setIsInputExpanded(!isInputExpanded)}
                      className={`p-3 rounded-full transition-all duration-300 ${isInputExpanded ? 'bg-white text-black rotate-45' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                    >
                      <Plus size={20} />
                    </button>
                  </div>

                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={isFocusMode ? "Type to start..." : "Ask Agent Design..."}
                    rows={1}
                    className="flex-1 bg-transparent border-none text-white focus:ring-0 placeholder:text-gray-600 px-2 py-3.5 text-base resize-none max-h-[200px] min-h-[48px] nice-scrollbar leading-relaxed"
                    style={{ height: 'auto' }}
                  />

                  <div className="flex items-center gap-1 pr-1 mb-1 shrink-0">
                    {!input.trim() && (
                      <button className="p-2.5 rounded-full text-gray-500 hover:text-white transition-all">
                        <Mic size={20} />
                      </button>
                    )}

                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!input.trim() && !isTyping}
                      className={`
                                        w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                                        ${input.trim()
                          ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105'
                          : 'bg-white/5 text-gray-600'
                        }
                                      `}
                    >
                      {isTyping ? <Square size={14} fill="currentColor" /> : <Send size={18} className={input.trim() ? 'ml-0.5' : ''} />}
                    </button>
                  </div>
                </div>

                {(isDeepThink || isWebSearchEnabled) && (
                  <div className="absolute top-[-10px] left-14 flex gap-2">
                    {isDeepThink && <div className="px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-[10px] text-purple-300 uppercase tracking-wider font-bold shadow-lg backdrop-blur-md">DeepThink</div>}
                    {isWebSearchEnabled && <div className="px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-[10px] text-blue-300 uppercase tracking-wider font-bold shadow-lg backdrop-blur-md">Web</div>}
                  </div>
                )}
              </div>

              <div className="text-center text-[10px] text-gray-700 font-medium tracking-widest uppercase opacity-50">
                Felipe Agent v2.0 • Systems Nominal
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AgentDesign;