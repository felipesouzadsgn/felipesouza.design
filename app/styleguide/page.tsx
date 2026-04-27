"use client";

import React, { useState } from 'react';
import {
    ArrowUpRight,
    Copy,
    Check,
    Type,
    Palette,
    Layers,
    Grid3X3,
    AlertCircle,
    CheckCircle2,
    XCircle,
    MousePointer2,
    Sparkles
} from 'lucide-react';

const StyleguidePage = () => {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedColor(text);
        setTimeout(() => setCopiedColor(null), 1500);
    };

    const colors = [
        { name: "Background", hex: "#000000", usage: "Fundo principal" },
        { name: "Surface", hex: "#0a0a0a", usage: "Cards e elevações" },
        { name: "Surface Elevated", hex: "#111111", usage: "Hover states" },
        { name: "Primary Text", hex: "#ffffff", usage: "Títulos e texto principal" },
        { name: "Secondary Text", hex: "#a1a1aa", usage: "Subtítulos e descrições" },
        { name: "Muted Text", hex: "#52525b", usage: "Texto desabilitado" },
        { name: "Border", hex: "#27272a", usage: "Bordas e divisores" },
        { name: "Border Hover", hex: "#3f3f46", usage: "Bordas em hover" },
        { name: "Accent White", hex: "#ffffff", usage: "Botões primários, ícones ativos" },
        { name: "Accent Emerald", hex: "#10b981", usage: "Badges de gratuito, sucesso" },
        { name: "Glass", hex: "rgba(255,255,255,0.05)", usage: "Fundo glassmorphism" },
        { name: "Glass Border", hex: "rgba(255,255,255,0.10)", usage: "Bordas glassmorphism" },
    ];

    const typography = [
        { name: "Inter", variable: "var(--font-inter)", usage: "Texto base, UI, parágrafos", sample: "The quick brown fox jumps over the lazy dog." },
        { name: "Space Grotesk", variable: "var(--font-space-grotesk)", usage: "Headings, display, títulos de seção", sample: "Design Estratégico & IA" },
        { name: "JetBrains Mono", variable: "var(--font-jetbrains)", usage: "Código, labels técnicos, badges", sample: "console.log('Hello World');" },
        { name: "Bebas Neue", variable: "var(--font-bebas)", usage: "Títulos impactantes, números grandes", sample: "2025 / PORTFOLIO" },
        { name: "Raleway", variable: "var(--font-raleway)", usage: "Texto alternativo, subtítulos elegantes", sample: "Criando experiências digitais" },
    ];

    const spacing = [
        { token: "space-1", value: "4px", usage: "Ícones pequenos, gaps mínimos" },
        { token: "space-2", value: "8px", usage: "Badges, pills, ícones" },
        { token: "space-3", value: "12px", usage: "Padding interno compacto" },
        { token: "space-4", value: "16px", usage: "Padding padrão de cards" },
        { token: "space-6", value: "24px", usage: "Padding de seções, gaps médios" },
        { token: "space-8", value: "32px", usage: "Margens entre seções" },
        { token: "space-12", value: "48px", usage: "Espaçamento de seções grandes" },
        { token: "space-16", value: "64px", usage: "Hero spacing, seções principais" },
    ];

    const borderRadius = [
        { token: "rounded-sm", value: "2px", usage: "Tags técnicas, badges minimal" },
        { token: "rounded-md", value: "6px", usage: "Botões pequenos, inputs" },
        { token: "rounded-lg", value: "8px", usage: "Cards padrão" },
        { token: "rounded-xl", value: "12px", usage: "Ícones boxes, botões principais" },
        { token: "rounded-2xl", value: "16px", usage: "Cards principais, links" },
        { token: "rounded-3xl", value: "24px", usage: "Banners, carousels" },
        { token: "rounded-full", value: "9999px", usage: "Avatares, pills, widgets" },
    ];

    const dosDonts = [
        {
            do: "Use glassmorphism com backdrop-blur para cards",
            dont: "Use fundos sólidos claros ou sem transparência",
            good: true
        },
        {
            do: "Mantenha contraste alto entre texto e fundo",
            dont: "Use cinza claro sobre preto para texto principal",
            good: true
        },
        {
            do: "Use bordas sutis (white/10) para separar elementos",
            dont: "Use bordas grossas ou cores chamativas em bordas",
            good: true
        },
        {
            do: "Aplique grayscale em imagens com hover para cor",
            dont: "Deixe imagens sempre coloridas ou sempre cinza",
            good: true
        },
        {
            do: "Use ícones do Lucide com stroke consistente",
            dont: "Misture ícones de diferentes bibliotecas ou estilos",
            good: true
        },
    ];

    return (
        <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-white/20 selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white font-bold">
                            FS.
                        </div>
                        <div>
                            <h1 className="font-bold text-sm">Brandbook & Styleguide</h1>
                            <p className="text-gray-500 text-[10px]">Felipe Souza — v1.0</p>
                        </div>
                    </div>
                    <a
                        href="/links"
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white text-xs font-medium transition-all"
                    >
                        Voltar <ArrowUpRight size={12} />
                    </a>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">

                {/* Hero */}
                <section>
                    <div className="relative p-12 rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="relative">
                            <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                                Identidade Visual
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                Design System
                            </h2>
                            <p className="text-gray-400 text-base max-w-lg">
                                Fundamento visual para todas as interfaces. Dark, minimalista e imersivo — 
                                priorizando clareza, hierarquia e experiência.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Colors */}
                <section id="cores">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                            <Palette size={18} className="text-gray-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Cores</h2>
                            <p className="text-gray-500 text-xs">Paleta principal e tokens de cor</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {colors.map((color) => (
                            <button
                                key={color.name}
                                onClick={() => copyToClipboard(color.hex)}
                                className="group relative p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all text-left"
                            >
                                <div
                                    className="w-full h-16 rounded-xl mb-3 border border-white/10"
                                    style={{ backgroundColor: color.hex }}
                                />
                                <h3 className="font-bold text-sm mb-0.5">{color.name}</h3>
                                <p className="text-gray-500 text-[10px] font-mono mb-1">{color.hex}</p>
                                <p className="text-gray-600 text-[10px]">{color.usage}</p>
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {copiedColor === color.hex ? (
                                        <Check size={14} className="text-emerald-400" />
                                    ) : (
                                        <Copy size={14} className="text-gray-500" />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </section>

                {/* Typography */}
                <section id="tipografia">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                            <Type size={18} className="text-gray-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Tipografia</h2>
                            <p className="text-gray-500 text-xs">Famílias e hierarquia de texto</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {typography.map((font) => (
                            <div
                                key={font.name}
                                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="font-bold text-base mb-1">{font.name}</h3>
                                        <p className="text-gray-500 text-xs font-mono">{font.variable}</p>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px]">
                                        {font.usage}
                                    </span>
                                </div>
                                <p
                                    className="text-2xl md:text-3xl text-white/90"
                                    style={{ fontFamily: font.variable }}
                                >
                                    {font.sample}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Type Scale */}
                    <div className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                        <h3 className="font-bold text-sm mb-6 text-gray-400 uppercase tracking-wider">Escala de Tamanhos</h3>
                        <div className="space-y-4">
                            {[
                                { size: "text-xs", label: "12px", example: "Badges, metadata, captions" },
                                { size: "text-sm", label: "14px", example: "Botões, labels, descrições curtas" },
                                { size: "text-base", label: "16px", example: "Parágrafos, texto de corpo" },
                                { size: "text-lg", label: "18px", example: "Subtítulos de seção" },
                                { size: "text-xl", label: "20px", example: "Títulos de cards, headings H3" },
                                { size: "text-2xl", label: "24px", example: "Títulos de seção, headings H2" },
                                { size: "text-3xl", label: "30px", example: "Títulos de página, headings H1" },
                                { size: "text-4xl", label: "36px", example: "Hero titles, display text" },
                            ].map((item) => (
                                <div key={item.size} className="flex items-baseline gap-4">
                                    <span className="text-gray-600 text-xs font-mono w-16">{item.label}</span>
                                    <span className={`text-white ${item.size}`}>{item.example}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Spacing */}
                <section id="espacamento">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                            <Grid3X3 size={18} className="text-gray-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Espaçamento & Radius</h2>
                            <p className="text-gray-500 text-xs">Tokens de espaço e arredondamento</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <h3 className="font-bold text-sm mb-4 text-gray-400 uppercase tracking-wider">Espaçamento</h3>
                            <div className="space-y-3">
                                {spacing.map((s) => (
                                    <div key={s.token} className="flex items-center gap-4">
                                        <div
                                            className="h-4 bg-white/20 rounded-sm"
                                            style={{ width: s.value }}
                                        />
                                        <span className="text-gray-500 text-xs font-mono w-16">{s.token}</span>
                                        <span className="text-gray-400 text-xs">{s.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <h3 className="font-bold text-sm mb-4 text-gray-400 uppercase tracking-wider">Border Radius</h3>
                            <div className="space-y-3">
                                {borderRadius.map((r) => (
                                    <div key={r.token} className="flex items-center gap-4">
                                        <div
                                            className="w-12 h-12 bg-white/10 border border-white/20"
                                            style={{ borderRadius: r.value }}
                                        />
                                        <div>
                                            <p className="text-gray-400 text-xs font-mono">{r.token}</p>
                                            <p className="text-gray-600 text-[10px]">{r.usage}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Components */}
                <section id="componentes">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                            <Layers size={18} className="text-gray-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Componentes</h2>
                            <p className="text-gray-500 text-xs">Padrões de UI reutilizáveis</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Cards */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-4">
                            <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider">Cards</h3>
                            
                            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl">
                                <p className="text-xs text-gray-500">Card padrão (bg-white/5 + border-white/10)</p>
                            </div>
                            
                            <div className="p-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl">
                                <p className="text-xs text-gray-400">Card destacado (bg-white/10 + border-white/20)</p>
                            </div>
                            
                            <div className="p-4 rounded-[2rem] border border-white/10 bg-black overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                <p className="relative text-xs text-gray-400">Banner/Card grande (rounded-[2rem])</p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-4">
                            <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider">Botões & Badges</h3>
                            
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold">
                                    Primário
                                </span>
                                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-medium hover:bg-white/10 transition-all">
                                    Secundário
                                </span>
                                <span className="px-4 py-2 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                                    Badge Sucesso
                                </span>
                                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-300 text-xs font-bold border border-white/10">
                                    Tag Glass
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:bg-white hover:text-black transition-all">
                                    <ArrowUpRight size={14} />
                                </button>
                                <button className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                    <Sparkles size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Inputs */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-4">
                            <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider">Inputs</h3>
                            
                            <div className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 text-sm">
                                Input padrão
                            </div>
                            
                            <div className="px-4 py-3 rounded-xl border border-white/20 bg-white/[0.07] text-white text-sm">
                                Input focus / ativo
                            </div>
                        </div>

                        {/* Widgets */}
                        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-4">
                            <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider">Widgets</h3>
                            
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md bg-white/5 text-gray-400">
                                <MousePointer2 size={14} />
                                <div className="text-xs text-left">
                                    <div className="opacity-60">Label</div>
                                    <div className="font-bold text-white">Valor</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Do's and Don'ts */}
                <section id="diretrizes">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                            <AlertCircle size={18} className="text-gray-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Diretrizes</h2>
                            <p className="text-gray-500 text-xs">Do's and Don'ts da identidade</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {dosDonts.map((item, index) => (
                            <div
                                key={index}
                                className="grid md:grid-cols-2 gap-4"
                            >
                                <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1 block">Fazer</span>
                                        <p className="text-sm text-gray-300">{item.do}</p>
                                    </div>
                                </div>
                                <div className="p-5 rounded-2xl border border-red-500/20 bg-red-500/[0.03] flex items-start gap-3">
                                    <XCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1 block">Evitar</span>
                                        <p className="text-sm text-gray-300">{item.dont}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Logo Usage */}
                <section id="logo">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                            <Sparkles size={18} className="text-gray-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Uso da Marca</h2>
                            <p className="text-gray-500 text-xs">Logo e assinatura visual</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col items-center justify-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-2xl">
                                FS.
                            </div>
                            <p className="text-gray-500 text-xs">Fundo escuro</p>
                        </div>
                        <div className="p-8 rounded-2xl border border-white/10 bg-white flex flex-col items-center justify-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-2xl">
                                FS.
                            </div>
                            <p className="text-gray-400 text-xs">Fundo claro (inverso)</p>
                        </div>
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col items-center justify-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-white/20 to-white/5 backdrop-blur-xl flex items-center justify-center font-bold text-xl text-white border border-white/10">
                                FS
                            </div>
                            <p className="text-gray-500 text-xs">Variação glassmorphism</p>
                        </div>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-black/40 backdrop-blur-2xl">
                <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-xs">
                        © 2025 Felipe Souza. Styleguide v1.0
                    </p>
                    <div className="flex items-center gap-4 text-gray-600 text-xs">
                        <span>@felipesouzadsgn</span>
                        <span>@felipesouza.ia</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default StyleguidePage;
