"use client";

import {
  ArrowLeft,
  Type,
  Palette,
  Image as ImageIcon,
  MessageSquareQuote,
  LayoutGrid,
  Mail,
  CreditCard,
  Smartphone,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function CopyHex({ hex }: { hex: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-2 flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
    >
      <span className="font-mono uppercase">{hex}</span>
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

export default function BrandbookPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <span className="text-sm font-medium text-gray-500">Brandbook</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/assets/fs-logo.svg"
            alt="Felipe Souza Logo"
            className="w-24 h-24 mx-auto mb-8"
          />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Felipe Souza
          </h1>
          <p className="text-xl md:text-2xl text-[#8b5cf6] font-medium mb-6">
            Design Estratégico & IA
          </p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Identidade visual construída para transmitir autoridade, inovação e
            clareza. Um sistema de marca que une estética minimalista com
            propósito estratégico.
          </p>
        </div>
      </section>

      {/* Paleta de Cores */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <Palette size={20} className="text-[#8b5cf6]" />
            </div>
            <h2 className="text-3xl font-bold">Paleta de Cores</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Preto", hex: "#000000", text: "white" },
              { name: "Branco", hex: "#FFFFFF", text: "black" },
              { name: "Cinza Escuro", hex: "#1a1a1a", text: "white" },
              { name: "Cinza Médio", hex: "#4f4f4f", text: "white" },
              { name: "Cinza Claro", hex: "#9b9b9b", text: "black" },
              { name: "Destaque", hex: "#8b5cf6", text: "white" },
            ].map((color) => (
              <div
                key={color.hex}
                className="rounded-2xl border border-white/10 overflow-hidden backdrop-blur-2xl bg-white/5"
              >
                <div
                  className="aspect-square w-full"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-4">
                  <p
                    className={`text-sm font-medium ${
                      color.hex === "#FFFFFF" || color.hex === "#9b9b9b"
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    {color.name}
                  </p>
                  <CopyHex hex={color.hex} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipografia */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <Type size={20} className="text-[#8b5cf6]" />
            </div>
            <h2 className="text-3xl font-bold">Tipografia</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Inter */}
            <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-mono text-gray-400">Inter</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400">
                  Primária
                </span>
              </div>
              <p className="text-5xl font-bold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                Aa
              </p>
              <div className="space-y-3">
                <p className="text-3xl font-bold">Heading 1</p>
                <p className="text-2xl font-semibold">Heading 2</p>
                <p className="text-base leading-relaxed text-gray-400">
                  Body text - legível e limpo para conteúdo longo.
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Caption / Label
                </p>
              </div>
            </div>

            {/* JetBrains Mono */}
            <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-mono text-gray-400">
                  JetBrains Mono
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400">
                  Código
                </span>
              </div>
              <p
                className="text-5xl font-bold mb-4"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                {"{ }"}
              </p>
              <div className="space-y-3">
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  const brand = &quot;FS&quot;;
                </p>
                <p
                  className="text-base leading-relaxed text-gray-400"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {/* Monospace body example */}
                  {"// Código, dados técnicos e métricas"}
                </p>
                <p
                  className="text-xs text-gray-500 uppercase tracking-wider"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  v2.0.0 — build 2024
                </p>
              </div>
            </div>

            {/* Space Grotesk */}
            <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-mono text-gray-400">
                  Space Grotesk
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400">
                  Display
                </span>
              </div>
              <p
                className="text-5xl font-bold mb-4"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Aa
              </p>
              <div className="space-y-3">
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Design Estratégico
                </p>
                <p
                  className="text-base leading-relaxed text-gray-400"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Display text para títulos de impacto e banners.
                </p>
              </div>
            </div>

            {/* Bebas Neue */}
            <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-mono text-gray-400">
                  Bebas Neue
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-400">
                  Impacto
                </span>
              </div>
              <p
                className="text-5xl font-bold mb-4"
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                Aa
              </p>
              <div className="space-y-3">
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                >
                  IMPACTO VISUAL
                </p>
                <p
                  className="text-base leading-relaxed text-gray-400"
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                >
                  HEADLINES, HERO TEXT E CHAMADAS DE AÇÃO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <ImageIcon size={20} className="text-[#8b5cf6]" />
            </div>
            <h2 className="text-3xl font-bold">Logo</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Logo sobre fundo escuro */}
            <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-12 flex items-center justify-center">
              <img
                src="/assets/fs-logo.svg"
                alt="Logo Felipe Souza"
                className="w-32 h-32"
              />
            </div>

            {/* Logo sobre fundo claro */}
            <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white p-12 flex items-center justify-center">
              <img
                src="/assets/fs-logo.svg"
                alt="Logo Felipe Souza"
                className="w-32 h-32"
              />
            </div>

            {/* Instruções de uso */}
            <div className="md:col-span-2 rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-8">
              <h3 className="text-xl font-bold mb-6">
                Diretrizes de Uso
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#8b5cf6] font-bold text-sm">
                    1
                  </div>
                  <p className="font-medium">Espaçamento Mínimo</p>
                  <p className="text-sm text-gray-400">
                    Mantenha ao redor da logo uma área de reserva equivalente à
                    metade da altura do símbolo.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#8b5cf6] font-bold text-sm">
                    2
                  </div>
                  <p className="font-medium">Fundo Adequado</p>
                  <p className="text-sm text-gray-400">
                    Use sobre fundos pretos, cinzas escuros ou brancos. Evite
                    fundos poluídos ou de baixo contraste.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#8b5cf6] font-bold text-sm">
                    3
                  </div>
                  <p className="font-medium">Proporção</p>
                  <p className="text-sm text-gray-400">
                    Nunca distorça, estique ou rotacione a logo. Preserve a
                    proporção original em todas as aplicações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tom de Voz */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <MessageSquareQuote size={20} className="text-[#8b5cf6]" />
            </div>
            <h2 className="text-3xl font-bold">Tom de Voz</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Direto e Objetivo",
                desc: "Comunicação sem rodeios. Cada palavra tem propósito e leva o leitor a uma conclusão clara.",
              },
              {
                title: "Técnico mas Acessível",
                desc: "Domínio profundo de conceitos complexos, traduzidos em linguagem que qualquer pessoa entende.",
              },
              {
                title: "Inspirador",
                desc: "Desafia o status quo e motiva à ação. Criação e inovação são valores centrais.",
              },
              {
                title: "Autoridade com Humildade",
                desc: "Confiança baseada em resultados, não em arrogância. Compartilha conhecimento generosamente.",
              },
              {
                title: "Precisão Visual",
                desc: "Até o texto carrega estética. Termos escolhidos com o mesmo cuidado de um grid de design.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-6 hover:bg-white/[0.07] transition-colors"
              >
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <LayoutGrid size={20} className="text-[#8b5cf6]" />
            </div>
            <h2 className="text-3xl font-bold">Aplicações</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Cartão de Visita */}
            <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard size={16} className="text-[#8b5cf6]" />
                <h3 className="font-bold">Cartão de Visita</h3>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
                <div className="aspect-[1.75/1] relative p-6 flex flex-col justify-between">
                  <img
                    src="/assets/fs-logo.svg"
                    alt="Logo"
                    className="w-10 h-10"
                  />
                  <div>
                    <p className="text-sm font-bold">Felipe Souza</p>
                    <p className="text-xs text-gray-500">
                      Design Estratégico & IA
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Frente minimalista com logo e identificação. Verso com QR code e
                contatos.
              </p>
            </div>

            {/* Assinatura de Email */}
            <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Mail size={16} className="text-[#8b5cf6]" />
                <h3 className="font-bold">Assinatura de Email</h3>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] p-6">
                <div className="flex items-center gap-4">
                  <img
                    src="/assets/fs-logo.svg"
                    alt="Logo"
                    className="w-12 h-12"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-bold">Felipe Souza</p>
                    <p className="text-xs text-gray-500">
                      Design Estratégico & IA
                    </p>
                    <p className="text-xs text-[#8b5cf6] mt-1">
                      felipesouza-dsgn.vercel.app
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Layout limpo com logo, nome, função e link para o site.
              </p>
            </div>

            {/* Perfil Social */}
            <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone size={16} className="text-[#8b5cf6]" />
                <h3 className="font-bold">Perfil Social</h3>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
                <div className="h-24 bg-gradient-to-r from-[#1a1a1a] to-[#4f4f4f]" />
                <div className="px-4 pb-4 -mt-10">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                    alt="Avatar"
                    className="w-20 h-20 rounded-full border-4 border-black object-cover"
                  />
                  <p className="text-sm font-bold mt-2">Felipe Souza</p>
                  <p className="text-xs text-gray-500">@felipesouzadsgn</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Avatar com fundo escuro, banner degradê e bio objetiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/assets/fs-logo.svg"
              alt="Felipe Souza"
              className="w-8 h-8"
            />
            <span className="text-sm text-gray-500">
              © {new Date().getFullYear()} Felipe Souza
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft size={14} />
              Homepage
            </Link>
            <a
              href="https://felipesouza-dsgn.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ExternalLink size={14} />
              Site
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
