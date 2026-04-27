"use client";

import React, { useState, useEffect } from 'react';
import {
    Github,
    Linkedin,
    Instagram,
    Globe,
    ArrowUpRight,
    MessageSquare,
    FileText,
    Music,
    MapPin,
    Sparkles,
    Zap,
    Gift,
    ShoppingBag,
    Menu,
    X,
    BookOpen,
    Calendar,
    Clock,
    ArrowRight,
    Heart,
    Server,
    FlaskConical,
    Paintbrush,
    LayoutGrid,
    Wand2
} from 'lucide-react';

const LinksPage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [menuOpen, setMenuOpen] = useState(false);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Auto-scroll logic
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scroll = () => {
            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: scrollContainer.clientWidth * 0.85, behavior: 'smooth' });
            }
        };

        const intervalId = setInterval(scroll, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const leftNavLinks = [
        { label: "Início", href: "#inicio" },
        { label: "Links", href: "#links" },
    ];

    const rightNavLinks = [
        { label: "Blog", href: "#blog" },
        { label: "Projetos", href: "#projetos" },
    ];

    const links = [
        {
            icon: <Globe size={24} />,
            label: "Portfolio Oficial",
            subLabel: "Ver meus projetos recentes",
            href: "#inicio"
        },
        {
            icon: <Paintbrush size={24} />,
            label: "Brandbook",
            subLabel: "Identidade visual e diretrizes de marca",
            href: "/brandbook"
        },
        {
            icon: <LayoutGrid size={24} />,
            label: "Styleguides",
            subLabel: "Sistema de design e componentes",
            href: "/styleguides"
        },
        {
            icon: <Wand2 size={24} />,
            label: "Galeria de Prompts",
            subLabel: "Prompts otimizados para IA",
            href: "/prompts"
        },
        {
            icon: <FlaskConical size={24} />,
            label: "Laboratório",
            subLabel: "Experimentos e testes interativos",
            href: "/laboratorio"
        },
        {
            icon: <FileText size={24} />,
            label: "Proposta Comercial",
            subLabel: "Landing Pages de Alta Conversão",
            href: "https://wa.me/5513996432357",
            highlight: true
        },
        {
            icon: <MessageSquare size={24} />,
            label: "WhatsApp",
            subLabel: "Vamos fechar um projeto?",
            href: "https://wa.me/5513996432357"
        },
        {
            icon: <Linkedin size={24} />,
            label: "LinkedIn",
            subLabel: "Conecte-se comigo",
            href: "https://linkedin.com/in/felipesouzadsgn"
        },
        {
            icon: <Github size={24} />,
            label: "GitHub",
            subLabel: "Veja meu código",
            href: "https://github.com/felipesouzadsgn"
        },
        {
            icon: <Instagram size={24} />,
            label: "Instagram",
            subLabel: "Bastidores e Design",
            href: "https://instagram.com/felipesouzadsgn"
        }
    ];

    const widgets = [
        {
            icon: <MapPin size={16} />,
            label: "Santos, SP",
            value: "Brasil"
        },
        {
            icon: <Music size={16} />,
            label: "Ouvindo",
            value: "Lo-Fi Beats"
        }
    ];

    const recommendations = [
        {
            category: "Métodos",
            icon: <Zap size={22} />,
            label: "Método 3P — Escala com IA",
            subLabel: "Estratégia completa para crescer com inteligência artificial",
            href: "https://app.orayon.ai/fs",
            badge: "Gratuito"
        },
        {
            category: "Métodos",
            icon: <Zap size={22} />,
            label: "Franquia Digital",
            subLabel: "Modelo de negócio replicável e escalável",
            href: "https://app.orayon.ai/franquiadigital/fs"
        },
        {
            category: "Métodos",
            icon: <Zap size={22} />,
            label: "Código Residual",
            subLabel: "Construindo fontes de renda passiva com tecnologia",
            href: "https://app.orayon.ai/codigoresidual/fs"
        },
        {
            category: "Gratuitos",
            icon: <Gift size={22} />,
            label: "Start AI",
            subLabel: "Primeiros passos práticos com inteligência artificial",
            href: "https://app.orayon.ai/start-ai/fs",
            badge: "Gratuito"
        },
        {
            category: "Ferramentas",
            icon: <ShoppingBag size={22} />,
            label: "Hub AI",
            subLabel: "Central de automação para produtividade",
            href: "https://app.orayon.ai/hub-ai/fs"
        },
        {
            category: "Ferramentas",
            icon: <ShoppingBag size={22} />,
            label: "Money AI",
            subLabel: "Monetização inteligente com automação",
            href: "https://app.orayon.ai/money-ai/fs"
        }
    ];

    const blogPosts = [
        {
            title: "Como IA está mudando o design de interfaces em 2025",
            excerpt: "As ferramentas de inteligência artificial não substituem designers, mas multiplicam sua capacidade de entregar valor. Ainda mais quando combinamos IA generativa com plataformas como Framer para protótipos imersivos.",
            date: "15 Abr 2025",
            readTime: "5 min",
            tag: "Design",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
            href: "#blog",
            affiliate: { label: "Parceiro Framer", href: "https://framer.link/fsdsgn" }
        },
        {
            title: "Do zero ao primeiro cliente com Landing Pages",
            excerpt: "O passo a passo que usei para construir páginas que convertem visitantes em clientes pagantes. Hospede sua página na Hostinger com domínio grátis e escale com o Método 3P da Orayon.",
            date: "02 Abr 2025",
            readTime: "8 min",
            tag: "Negócios",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            href: "#recomendacoes",
            affiliate: { label: "Hostinger", href: "https://www.hostinger.com/br?REFERRALCODE=6KVFELIPESPY" }
        },
        {
            title: "Automação criativa: fluxos que economizam horas",
            excerpt: "Como construir sistemas automatizados que liberam seu tempo para o que realmente importa: criar. As ferramentas do Hub AI e Money AI aceleram esse processo de forma inteligente.",
            date: "20 Mar 2025",
            readTime: "6 min",
            tag: "Produtividade",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
            href: "#recomendacoes",
            affiliate: { label: "Hub AI", href: "https://app.orayon.ai/hub-ai/fs" }
        },
        {
            title: "Construindo uma identidade visual consistente",
            excerpt: "Por que ter um styleguide próprio faz toda a diferença na percepção de valor da sua marca. Veja nosso Brandbook e Styleguide para referências práticas.",
            date: "10 Mar 2025",
            readTime: "7 min",
            tag: "Branding",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
            href: "/brandbook",
            affiliate: { label: "Ver Brandbook", href: "/brandbook" }
        }
    ];

    const socials = [
        {
            icon: <Instagram size={20} />,
            label: "@felipesouzadsgn",
            href: "https://instagram.com/felipesouzadsgn"
        },
        {
            icon: <Instagram size={20} />,
            label: "@felipesouza.ia",
            href: "https://instagram.com/felipesouza.ia"
        },
        {
            icon: <Linkedin size={20} />,
            label: "LinkedIn",
            href: "https://linkedin.com/in/felipesouzadsgn"
        },
        {
            icon: <Github size={20} />,
            label: "GitHub",
            href: "https://github.com/felipesouzadsgn"
        }
    ];

    return (
        <div className="min-h-screen font-sans overflow-x-hidden selection:bg-white/20 selection:text-white" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div
                    className="absolute w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] mix-blend-screen transition-transform duration-1000 ease-out"
                    style={{
                        left: mousePosition.x * 0.05,
                        top: mousePosition.y * 0.05,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
                <div
                    className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] mix-blend-screen transition-transform duration-1000 ease-out"
                    style={{
                        right: mousePosition.x * 0.05,
                        bottom: mousePosition.y * 0.05,
                        transform: 'translate(50%, 50%)'
                    }}
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            </div>

            {/* Modern Menu - Logo Centered */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-between px-5 py-3 rounded-full border border-white/10 backdrop-blur-2xl bg-black/40">
                        
                        {/* Left Links - Desktop */}
                        <div className="hidden md:flex items-center gap-6 flex-1">
                            {leftNavLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white text-xs font-medium transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Center Logo */}
                        <a 
                            href="#inicio" 
                            className="flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                <img 
                                    src="/assets/fs-logo.svg" 
                                    alt="FS Logo" 
                                    className="w-6 h-6 invert"
                                />
                            </div>
                        </a>

                        {/* Right Links - Desktop */}
                        <div className="hidden md:flex items-center gap-6 flex-1 justify-end">
                            {rightNavLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white text-xs font-medium transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                        >
                            {menuOpen ? <X size={16} /> : <Menu size={16} />}
                        </button>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    {menuOpen && (
                        <div className="md:hidden mt-2 p-4 rounded-2xl border border-white/10 backdrop-blur-2xl bg-black/60 space-y-1">
                            {[...leftNavLinks, { label: "Recomendações", href: "#recomendacoes" }, ...rightNavLinks].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            <main className="relative z-10 min-h-screen flex flex-col items-center py-32 px-6">

                {/* Profile Section */}
                <div id="inicio" className="text-center mb-12 scroll-mt-32">
                    <div className="relative w-32 h-32 mx-auto mb-6 group">
                        <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                        <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-tr from-white/20 to-white/5 backdrop-blur-xl overflow-hidden">
                            <img
                                src="https://github.com/felipesouzadsgn.png"
                                alt="Felipe Souza"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-1 right-1 bg-white text-black p-1.5 rounded-full border-4 border-black">
                            <Sparkles size={14} fill="currentColor" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Felipe Souza</h1>
                    <p className="text-gray-500 text-sm max-w-xs mx-auto">
                        Designer & Developer criando experiências digitais imersivas.
                    </p>

                    {/* Widgets Grid */}
                    <div className="flex justify-center gap-3 mt-6">
                        {widgets.map((widget, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 transition-all"
                            >
                                {widget.icon}
                                <div className="text-xs text-left">
                                    <div className="opacity-60">{widget.label}</div>
                                    <div className="font-bold text-white">{widget.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Banners Carousel */}
                <div
                    ref={scrollRef}
                    className="w-full max-w-md mb-8 overflow-x-auto pb-4 snap-x snap-mandatory flex gap-4 no-scrollbar scroll-smooth"
                >

                    {/* Framer Banner */}
                    <a
                        href="https://framer.link/fsdsgn"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex-shrink-0 w-[85%] aspect-[2/1] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] snap-center"
                    >
                        <div className="absolute inset-0 bg-black">
                            <img
                                src="https://framerusercontent.com/images/48ha9TP325zS5V9N8hB5M8S8.png"
                                alt="Framer"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-300 text-xs font-bold border border-white/10">
                                    Parceiro
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Framer</h3>
                            <p className="text-gray-400 text-xs mb-3 line-clamp-2">A ferramenta no-code mais poderosa.</p>
                            <div className="flex items-center gap-2 text-gray-300 font-medium text-xs group-hover:text-white transition-colors">
                                Testar Grátis <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </a>

                    {/* Hostinger Banner */}
                    <a
                        href="https://www.hostinger.com/br?REFERRALCODE=6KVFELIPESPY"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex-shrink-0 w-[85%] aspect-[2/1] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] snap-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 grayscale" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-md text-purple-300 text-xs font-bold border border-purple-500/20">
                                    Indicação
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Hostinger</h3>
                            <p className="text-gray-400 text-xs mb-3 line-clamp-2">Hospedagem rápida, segura e confiável. Domínio grátis + e-mail profissional.</p>
                            <div className="flex items-center gap-2 text-gray-300 font-medium text-xs group-hover:text-white transition-colors">
                                <Server size={14} /> Ganhe 20% de desconto <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </a>

                    {/* Framer Templates Banner */}
                    <a
                        href="https://framer.com/templates"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex-shrink-0 w-[85%] aspect-[2/1] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] snap-center"
                    >
                        <div className="absolute inset-0 bg-black">
                            <img
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                                alt="Templates"
                                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-300 text-xs font-bold border border-white/10">
                                    Recursos
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Templates</h3>
                            <p className="text-gray-400 text-xs mb-3 line-clamp-2">Templates premium para acelerar.</p>
                            <div className="flex items-center gap-2 text-gray-300 font-medium text-xs group-hover:text-white transition-colors">
                                Ver Coleção <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </a>

                    {/* Behance Banner */}
                    <a
                        href="https://www.behance.net/felipesouzadsgn"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex-shrink-0 w-[85%] aspect-[2/1] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] snap-center"
                    >
                        <div className="absolute inset-0 bg-black">
                            <img
                                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
                                alt="Behance"
                                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-300 text-xs font-bold border border-white/10">
                                    Portfolio
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Behance</h3>
                            <p className="text-gray-400 text-xs mb-3 line-clamp-2">Estudos de caso detalhados.</p>
                            <div className="flex items-center gap-2 text-gray-300 font-medium text-xs group-hover:text-white transition-colors">
                                Seguir <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </a>

                    {/* BlackSheep Club Banner */}
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative flex-shrink-0 w-[85%] aspect-[2/1] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] active:scale-[0.98] snap-center"
                    >
                        <div className="absolute inset-0 bg-black">
                            <img
                                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
                                alt="BlackSheep"
                                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-300 text-xs font-bold border border-white/10">
                                    Comunidade
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">BlackSheep</h3>
                            <p className="text-gray-400 text-xs mb-3 line-clamp-2">O clube mais exclusivo.</p>
                            <div className="flex items-center gap-2 text-gray-300 font-medium text-xs group-hover:text-white transition-colors">
                                Saiba Mais <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </a>

                </div>

                {/* Links List */}
                <div id="links" className="w-full max-w-md space-y-3 mb-10 scroll-mt-32">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : '_self'}
                            rel={link.href.startsWith('http') ? 'noreferrer' : ''}
                            className={`group relative flex items-center gap-4 p-4 rounded-2xl border border-white/10 backdrop-blur-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] ${link.highlight
                                ? 'bg-white/10 border-white/20'
                                : 'bg-white/5 hover:bg-white/10'
                                }`}
                        >
                            {/* Icon Box */}
                            <div className="relative w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                                {link.icon}
                            </div>

                            {/* Text */}
                            <div className="relative flex-1">
                                <h3 className="font-bold text-white text-base leading-tight group-hover:text-gray-100 transition-colors">
                                    {link.label}
                                </h3>
                                <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                    {link.subLabel}
                                </p>
                            </div>

                            {/* Arrow */}
                            <div className="relative w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                <ArrowUpRight size={16} />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Recommendations Section (Disguised Affiliates) */}
                <div id="recomendacoes" className="w-full max-w-md mb-16 scroll-mt-32">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-white font-bold text-xl flex items-center gap-2">
                            <Heart size={20} className="text-gray-500" />
                            Recomendações
                        </h2>
                    </div>
                    <p className="text-gray-500 text-xs mb-6 ml-7">
                        Ferramentas e recursos que uso no dia a dia
                    </p>

                    {/* Category: Métodos */}
                    <div className="mb-4">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1 mb-2 block">
                            Métodos
                        </span>
                        <div className="space-y-2">
                            {recommendations
                                .filter(l => l.category === "Métodos")
                                .map((link, index) => (
                                    <a
                                        key={`met-${index}`}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative flex items-center gap-4 p-4 rounded-2xl border border-white/10 backdrop-blur-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] bg-white/5 hover:bg-white/10"
                                    >
                                        <div className="relative w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                                            {link.icon}
                                        </div>
                                        <div className="relative flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <h3 className="font-bold text-white text-sm leading-tight group-hover:text-gray-100 transition-colors truncate">
                                                    {link.label}
                                                </h3>
                                                {link.badge && (
                                                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 shrink-0">
                                                        {link.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors truncate">
                                                {link.subLabel}
                                            </p>
                                        </div>
                                        <div className="relative w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </a>
                                ))}
                        </div>
                    </div>

                    {/* Category: Gratuitos */}
                    <div className="mb-4">
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1 mb-2 block">
                            Gratuitos
                        </span>
                        <div className="space-y-2">
                            {recommendations
                                .filter(l => l.category === "Gratuitos")
                                .map((link, index) => (
                                    <a
                                        key={`grat-${index}`}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative flex items-center gap-4 p-4 rounded-2xl border border-white/10 backdrop-blur-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] bg-white/5 hover:bg-white/10"
                                    >
                                        <div className="relative w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                                            {link.icon}
                                        </div>
                                        <div className="relative flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <h3 className="font-bold text-white text-sm leading-tight group-hover:text-gray-100 transition-colors truncate">
                                                    {link.label}
                                                </h3>
                                                {link.badge && (
                                                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 shrink-0">
                                                        {link.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors truncate">
                                                {link.subLabel}
                                            </p>
                                        </div>
                                        <div className="relative w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </a>
                                ))}
                        </div>
                    </div>

                    {/* Category: Ferramentas */}
                    <div>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1 mb-2 block">
                            Ferramentas
                        </span>
                        <div className="space-y-2">
                            {recommendations
                                .filter(l => l.category === "Ferramentas")
                                .map((link, index) => (
                                    <a
                                        key={`ferr-${index}`}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group relative flex items-center gap-4 p-4 rounded-2xl border border-white/10 backdrop-blur-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] bg-white/5 hover:bg-white/10"
                                    >
                                        <div className="relative w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                                            {link.icon}
                                        </div>
                                        <div className="relative flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <h3 className="font-bold text-white text-sm leading-tight group-hover:text-gray-100 transition-colors truncate">
                                                    {link.label}
                                                </h3>
                                                {link.badge && (
                                                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 shrink-0">
                                                        {link.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors truncate">
                                                {link.subLabel}
                                            </p>
                                        </div>
                                        <div className="relative w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </a>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Blog Section */}
                <div id="blog" className="w-full max-w-md mb-16 scroll-mt-32">
                    <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                        <BookOpen size={20} className="text-gray-500" />
                        Últimos Artigos
                    </h2>

                    {/* Featured Post */}
                    <a
                        href={blogPosts[0].href}
                        className="group block rounded-2xl border border-white/10 backdrop-blur-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] bg-white/5 hover:bg-white/10 mb-4"
                    >
                        <div className="relative h-52 overflow-hidden">
                            <img
                                src={blogPosts[0].image}
                                alt={blogPosts[0].title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-300 text-[10px] font-bold border border-white/10">
                                {blogPosts[0].tag}
                            </span>
                            {blogPosts[0].affiliate && (
                                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 backdrop-blur-md">
                                    {blogPosts[0].affiliate.label}
                                </span>
                            )}
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-3 text-gray-500 text-[10px] mb-3">
                                <span className="flex items-center gap-1">
                                    <Calendar size={10} />
                                    {blogPosts[0].date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={10} />
                                    {blogPosts[0].readTime} de leitura
                                </span>
                            </div>
                            <h3 className="font-bold text-white text-base leading-tight group-hover:text-gray-100 transition-colors mb-2">
                                {blogPosts[0].title}
                            </h3>
                            <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors line-clamp-2 mb-3">
                                {blogPosts[0].excerpt}
                            </p>
                            {blogPosts[0].affiliate && (
                                <div className="mb-3">
                                    <a
                                        href={blogPosts[0].affiliate.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="inline-flex items-center gap-1.5 text-emerald-400 font-medium text-xs hover:text-emerald-300 transition-colors"
                                    >
                                        <ArrowUpRight size={12} /> {blogPosts[0].affiliate.label}
                                    </a>
                                </div>
                            )}
                            <div className="flex items-center gap-1 text-gray-400 font-medium text-xs group-hover:text-white transition-colors">
                                Ler mais <ArrowRight size={12} />
                            </div>
                        </div>
                    </a>

                    {/* Post List */}
                    <div className="space-y-3">
                        {blogPosts.slice(1).map((post, index) => (
                            <a
                                key={index}
                                href={post.href}
                                className="group flex gap-4 p-3 rounded-2xl border border-white/10 backdrop-blur-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] bg-white/5 hover:bg-white/10"
                            >
                                <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                </div>
                                <div className="flex-1 min-w-0 py-1">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="px-2 py-0.5 rounded-full bg-white/10 text-gray-300 text-[10px] font-bold border border-white/10">
                                            {post.tag}
                                        </span>
                                        <span className="text-gray-600 text-[10px] flex items-center gap-1">
                                            <Calendar size={10} /> {post.date}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-white text-sm leading-tight group-hover:text-gray-100 transition-colors mb-1 truncate">
                                        {post.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors line-clamp-2 mb-2">
                                        {post.excerpt}
                                    </p>
                                    {post.affiliate && (
                                        <span className="inline-flex items-center gap-1 text-emerald-400 text-[10px] font-medium">
                                            <ArrowUpRight size={10} /> {post.affiliate.label}
                                        </span>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Projects Bento Grid */}
                <div id="projetos" className="w-full max-w-md scroll-mt-32">
                    <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                        <Sparkles size={20} className="text-gray-500" />
                        Projetos Recentes
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2 aspect-video rounded-2xl overflow-hidden border border-white/10 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                                alt="Project 1"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <span className="text-xs font-bold text-gray-400 bg-white/10 px-2 py-1 rounded-full border border-white/10 mb-2 inline-block">UI Design</span>
                                <h3 className="text-white font-bold">Neon Bank App</h3>
                            </div>
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
                                alt="Project 2"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3">
                                <h3 className="text-white font-bold text-sm">Arkitect</h3>
                            </div>
                        </div>
                        <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
                                alt="Project 3"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-3 left-3">
                                <h3 className="text-white font-bold text-sm">HealthAI</h3>
                            </div>
                        </div>
                        <div className="col-span-2 aspect-[2/1] rounded-2xl overflow-hidden border border-white/10 relative group">
                            <img
                                src="https://images.unsplash.com/photo-1481487484168-9b9307a5296d?q=80&w=1000&auto=format&fit=crop"
                                alt="Project 4"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <span className="text-xs font-bold text-gray-400 bg-white/10 px-2 py-1 rounded-full border border-white/10 mb-2 inline-block">Web Dev</span>
                                <h3 className="text-white font-bold">TechFlow SaaS</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-2xl">
                <div className="max-w-md mx-auto px-6 py-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-4">
                            <img 
                                src="/assets/fs-logo.svg" 
                                alt="FS Logo" 
                                className="w-7 h-7 invert"
                            />
                        </div>
                        <p className="text-gray-500 text-sm max-w-xs mb-6">
                            Designer & Developer criando experiências digitais imersivas.
                        </p>

                        {/* Social Links */}
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                                >
                                    {social.icon}
                                    <span className="text-xs font-medium">{social.label}</span>
                                </a>
                            ))}
                        </div>

                        <div className="w-full h-px bg-white/10 mb-6" />

                        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-gray-600 text-xs">
                            <p>© 2025 Felipe Souza. Todos os direitos reservados.</p>
                            <div className="flex items-center gap-4">
                                <a href="#" className="hover:text-gray-400 transition-colors">Privacidade</a>
                                <a href="#" className="hover:text-gray-400 transition-colors">Termos</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LinksPage;
