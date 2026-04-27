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
    Wand2,
    Send,
    Hash,
    Users
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
        { label: "Blog", href: "/blog" },
        { label: "Projetos", href: "#projetos" },
    ];

    const links = [
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
            icon: <LayoutGrid size={24} />,
            label: "Templates Framer",
            subLabel: "Templates free e premium ($3-$18)",
            href: "/templates"
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
            title: "Como Construir um Agente Autônomo com Kimi e OpenClaw em 2026",
            excerpt: "Agentes de IA autônomos são a nova fronteira da produtividade em 2026. Neste guia completo, mostro como conectei Kimi, OpenClaw e GPT-5 em uma arquitetura que responde clientes, gera relatórios e toma decisões sem intervenção humana. O segredo está na infraestrutura: rodar tudo em um [VPS dedicado para agentes de IA](https://www.hostinger.com/br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf53-d52f-71ae-9a87-07f6a0b59c3e) garante latência baixa e uptime 24/7.\n\nStack recomendada: Iniciante → [hospedagem simples para testes](https://www.hostinger.com/br/cart?product=hosting%3Ahostinger_premium&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf50-9e17-73ea-939c-b98b535e64f9) | Profissional → [VPS ideal para rodar agentes](https://www.hostinger.com/br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf53-d52f-71ae-9a87-07f6a0b59c3e) | Escala → [infraestrutura cloud para escalar](https://www.hostinger.com/br/cart?product=hosting%3Acloud_professional&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf52-23b9-7163-9984-1e590182a132)",
            date: "24 Abr 2026",
            readTime: "14 min",
            tag: "Dev",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
            href: "/blog/agente-autonomo-kimi-openclaw-2026",
            affiliate: { label: "VPS para Agentes", href: "https://www.hostinger.com/br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf53-d52f-71ae-9a87-07f6a0b59c3e" }
        },
        {
            title: "Framer + IA Generativa: Criar Landing Pages que Convertem em 2026",
            excerpt: "A combinação de Framer com IA generativa revolucionou a criação de interfaces em 2026. Neste artigo, mostro como uso Kimi para gerar copy persuasiva e [criar interfaces profissionais sem código](https://framer.link/fsdsgn) em menos de 2 horas. O resultado são landing pages com taxa de conversão 3x maior que templates tradicionais.\n\nStack recomendada: Interface → [criar no Framer com IA](https://framer.link/fsdsgn) | Hospedagem → [estrutura robusta para landing pages](https://www.hostinger.com/br/cart?product=hosting%3Ahostinger_business&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf50-3cda-7140-8887-daf1aee8032b) | Escala → [cloud quando o tráfego crescer](https://www.hostinger.com/br/cart?product=hosting%3Acloud_professional&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf52-23b9-7163-9984-1e590182a132)",
            date: "18 Abr 2026",
            readTime: "10 min",
            tag: "No-Code",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
            href: "/blog/framer-ia-landing-pages-2026",
            affiliate: { label: "Framer + IA", href: "https://framer.link/fsdsgn" }
        },
        {
            title: "Pipeline CI/CD para Projetos de IA: Do Código ao Deploy em 2026",
            excerpt: "Automatizar o deploy de modelos de IA é obrigatório em 2026. Neste guia técnico, mostro como configurei um pipeline completo com GitHub Actions, Docker e testes automatizados para projetos que usam Kimi, Claude e GPT. A escolha da infraestrutura define se seu agente fica online ou cai no primeiro pico de tráfego. Use um [VPS dedicado para projetos de IA](https://www.hostinger.com/br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf53-d52f-71ae-9a87-07f6a0b59c3e) com root access e recursos garantidos.\n\nStack recomendada: Iniciante → [hospedagem com deploy simplificado](https://www.hostinger.com/br/cart?product=hosting%3Ahostinger_premium&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf50-9e17-73ea-939c-b98b535e64f9) | Profissional → [VPS com controle total](https://www.hostinger.com/br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf53-d52f-71ae-9a87-07f6a0b59c3e) | Escala → [cloud para alta disponibilidade](https://www.hostinger.com/br/cart?product=hosting%3Acloud_professional&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf52-23b9-7163-9984-1e590182a132)",
            date: "12 Abr 2026",
            readTime: "11 min",
            tag: "DevOps",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
            href: "/blog/pipeline-cicd-ia-2026",
            affiliate: { label: "VPS para CI/CD", href: "https://www.hostinger.com/br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf53-d52f-71ae-9a87-07f6a0b59c3e" }
        },
        {
            title: "Como Monetizar Prompts e Templates de IA: Guia do Criador Digital 2026",
            excerpt: "O mercado de prompts e templates de IA movimenta bilhões em 2026. Neste artigo, revelo como transformei prompts testados em produtos digitais que geram renda recorrente. A stack inclui [interfaces no Framer](https://framer.link/fsdsgn) para venda, automação com Kimi para entrega e uma [hospedagem confiável para escalar](https://www.hostinger.com/br/cart?product=hosting%3Ahostinger_business&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf50-3cda-7140-8887-daf1aee8032b) sem medo de downtime.\n\nStack recomendada: Iniciante → [hospedagem para começar](https://www.hostinger.com/br/cart?product=hosting%3Ahostinger_premium&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf50-9e17-73ea-939c-b98b535e64f9) | Profissional → [estrutura robusta para produtos digitais](https://www.hostinger.com/br/cart?product=hosting%3Ahostinger_business&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf50-3cda-7140-8887-daf1aee8032b) | Escala → [cloud quando o tráfego explode](https://www.hostinger.com/br/cart?product=hosting%3Acloud_professional&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf52-23b9-7163-9984-1e590182a132)",
            date: "05 Abr 2026",
            readTime: "9 min",
            tag: "Negócios",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
            href: "/blog/monetizar-prompts-ia-2026",
            affiliate: { label: "Hospedagem para Produtos", href: "https://www.hostinger.com/br/cart?product=hosting%3Ahostinger_business&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf50-3cda-7140-8887-daf1aee8032b" }
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

                    {/* Ver todos os artigos */}
                    <div className="mt-6 text-center">
                        <a
                            href="/blog"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all text-sm font-medium"
                        >
                            Ver todos os artigos <ArrowRight size={14} />
                        </a>
                    </div>
                </div>

                {/* Newsletter */}
                <div id="newsletter" className="w-full max-w-md mb-16 scroll-mt-32">
                    <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-6 sm:p-8">
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 mb-4">
                                <Send size={18} className="text-white" />
                            </div>
                            <h2 className="text-white font-bold text-lg mb-2">
                                Newsletter
                            </h2>
                            <p className="text-gray-500 text-xs leading-relaxed">
                                Receba toda semana conteudo sobre tecnologia, IA,
                                empreendedorismo e novidades da comunidade.
                            </p>
                        </div>

                        <form
                            className="flex flex-col gap-2 mb-4"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                type="email"
                                placeholder="seu@email.com"
                                className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20"
                            />
                            <button
                                type="submit"
                                className="w-full py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
                            >
                                Inscrever
                            </button>
                        </form>

                        <div className="flex flex-wrap items-center justify-center gap-2 text-gray-600 text-[10px]">
                            <span className="flex items-center gap-1">
                                <Hash size={8} className="text-emerald-400" /> Tecnologia
                            </span>
                            <span className="flex items-center gap-1">
                                <Hash size={8} className="text-emerald-400" /> IA
                            </span>
                            <span className="flex items-center gap-1">
                                <Hash size={8} className="text-emerald-400" /> Empreendedorismo
                            </span>
                            <span className="flex items-center gap-1">
                                <Hash size={8} className="text-emerald-400" /> Comunidade
                            </span>
                        </div>
                    </div>
                </div>

                {/* Comunidades */}
                <div id="comunidade" className="w-full max-w-md mb-16 scroll-mt-32">
                    <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                        <Users size={20} className="text-gray-500" />
                        Comunidades
                    </h2>
                    <div className="space-y-3">
                        <a
                            href="https://wa.me/5513996432357"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 hover:bg-white/10 transition-all"
                        >
                            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                                <MessageSquare size={20} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-white text-sm">WhatsApp</h3>
                                <p className="text-gray-500 text-xs">Networking rapido e oportunidades</p>
                            </div>
                            <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 hover:bg-white/10 transition-all"
                        >
                            <div className="w-11 h-11 rounded-xl bg-[#5865F2]/10 flex items-center justify-center border border-[#5865F2]/20 text-[#5865F2]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-white text-sm">Discord</h3>
                                <p className="text-gray-500 text-xs">Devs, designers e criadores de IA</p>
                            </div>
                            <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 hover:bg-white/10 transition-all"
                        >
                            <div className="w-11 h-11 rounded-xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20 text-sky-400">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-white text-sm">Telegram</h3>
                                <p className="text-gray-500 text-xs">Conteudo exclusivo e atualizacoes</p>
                            </div>
                            <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                        </a>
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
