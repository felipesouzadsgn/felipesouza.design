"use client";

import React from "react";
import {
  ArrowLeft,
  Type,
  LayoutGrid,
  Palette,
  Component,
  Ruler,
  Sparkles,
  MousePointerClick,
  Move,
  Zap,
  Check,
  Search,
  Bell,
  Home,
  MapPin,
} from "lucide-react";

const SectionTitle = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-gray-400">
      {icon}
    </div>
    <h2 className="text-white font-bold text-xl">{label}</h2>
  </div>
);

const CodeTag = ({ children }: { children: React.ReactNode }) => (
  <code className="px-1.5 py-0.5 rounded-md bg-white/10 text-gray-300 text-xs font-mono border border-white/10">
    {children}
  </code>
);

const StyleguidesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 selection:text-white">
      {/* Background ambient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between px-5 py-3 rounded-full border border-white/10 backdrop-blur-2xl bg-black/40">
            <a
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white text-xs font-medium transition-colors"
            >
              <ArrowLeft size={14} />
              Voltar
            </a>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                <img
                  src="/assets/fs-logo.svg"
                  alt="FS Logo"
                  className="w-5 h-5 invert"
                />
              </div>
              <span className="text-xs font-bold text-white hidden sm:inline">
                Styleguide
              </span>
            </div>
            <div className="w-16" />
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-3xl mx-auto px-6 py-32 space-y-20">
        {/* Hero */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            <Sparkles size={10} />
            Design System
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Styleguide
          </h1>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            Sistema de design e componentes visuais
          </p>
        </section>

        {/* Grid & Layout */}
        <section>
          <SectionTitle icon={<LayoutGrid size={16} />} label="Grid & Layout" />
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            O layout utiliza um sistema de container centralizado com larguras
            máximas definidas e padding lateral consistente. Isso garante
            legibilidade e alinhamento em todos os breakpoints.
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-400">Container Mobile</span>
                <CodeTag>max-w-md</CodeTag>
              </div>
              <div className="h-8 rounded-lg bg-white/10 border border-white/10 border-dashed" />
            </div>
            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-400">Container Desktop</span>
                <CodeTag>max-w-3xl</CodeTag>
              </div>
              <div className="h-8 rounded-lg bg-white/10 border border-white/10 border-dashed" />
            </div>
            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-400">Padding Lateral</span>
                <CodeTag>px-6</CodeTag>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-8 rounded bg-white/10 border border-white/10 border-dashed" />
                <div className="flex-1 h-8 rounded-lg bg-white/10 border border-white/10 border-dashed" />
                <div className="w-6 h-8 rounded bg-white/10 border border-white/10 border-dashed" />
              </div>
            </div>
          </div>
        </section>

        {/* Tipografia Escalada */}
        <section>
          <SectionTitle icon={<Type size={16} />} label="Tipografia Escalada" />
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            A escala tipográfica segue uma hierarquia clara, do display ao
            badge, garantindo consistência em todos os níveis de informação.
          </p>

          <div className="space-y-3">
            {[
              { label: "Display", class: "text-3xl font-bold", sample: "Título em destaque" },
              { label: "H1", class: "text-2xl font-bold", sample: "Cabeçalho principal" },
              { label: "H2", class: "text-xl font-bold", sample: "Subtítulo da seção" },
              { label: "Body", class: "text-sm", sample: "Texto de parágrafo padrão com boa legibilidade." },
              { label: "Caption", class: "text-xs", sample: "Legenda ou metadados secundários" },
              { label: "Badge", class: "text-[10px]", sample: "ETIQUETA" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl"
              >
                <CodeTag>{item.class}</CodeTag>
                <span className={`${item.class} text-white`}>{item.sample}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Cores Semânticas */}
        <section>
          <SectionTitle icon={<Palette size={16} />} label="Cores Semânticas" />
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            A paleta é intencionalmente reduzida. O preto absoluto serve de
            fundo, enquanto tons de cinza e branco criam hierarquia. O verde
            esmeralda é usado com parcimônia para destaque de status positivos.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { name: "Primary", color: "bg-white", text: "text-black", label: "white" },
              { name: "Secondary", color: "bg-gray-400", text: "text-black", label: "gray-400" },
              { name: "Muted", color: "bg-gray-500", text: "text-white", label: "gray-500" },
              { name: "Accent", color: "bg-emerald-400", text: "text-black", label: "emerald-400" },
              { name: "Border", color: "bg-white/10", text: "text-white", label: "white/10", border: true },
              { name: "Background", color: "bg-white/5", text: "text-white", label: "white/5", border: true },
            ].map((c) => (
              <div
                key={c.name}
                className={`p-4 rounded-2xl border ${c.border ? "border-white/10" : "border-transparent"} bg-white/5 backdrop-blur-2xl`}
              >
                <div
                  className={`w-full h-12 rounded-xl mb-3 ${c.color} ${c.border ? "border border-white/10" : ""}`}
                />
                <div className="text-xs font-bold text-white mb-0.5">
                  {c.name}
                </div>
                <CodeTag>{c.label}</CodeTag>
              </div>
            ))}
          </div>
        </section>

        {/* Componentes */}
        <section>
          <SectionTitle icon={<Component size={16} />} label="Componentes" />
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Conjunto de componentes base reutilizáveis, construídos com
            glassmorphism e estados de interação bem definidos.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Botão primário */}
            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block">
                Botão Primário
              </span>
              <button className="w-full px-5 py-3 rounded-2xl border border-white/10 bg-white/5 text-white text-sm font-medium backdrop-blur-2xl hover:bg-white/10 transition-all duration-300 active:scale-[0.98]">
                Ação principal
              </button>
              <CodeTag>rounded-2xl border bg-white/5 hover:bg-white/10</CodeTag>
            </div>

            {/* Card padrão */}
            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block">
                Card Padrão
              </span>
              <div className="p-4 rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5">
                <h3 className="text-sm font-bold text-white mb-1">
                  Título do card
                </h3>
                <p className="text-xs text-gray-500">
                  Conteúdo secundário com descrição breve.
                </p>
              </div>
              <CodeTag>rounded-2xl border border-white/10 backdrop-blur-2xl</CodeTag>
            </div>

            {/* Badge */}
            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block">
                Badge
              </span>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/10">
                  Padrão
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                  Gratuito
                </span>
              </div>
              <CodeTag>rounded-full px-3 py-1 bg-white/10</CodeTag>
            </div>

            {/* Input fictício */}
            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block">
                Input
              </span>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-400 text-sm">
                <Search size={14} />
                <span className="text-gray-600">Buscar...</span>
              </div>
              <CodeTag>rounded-xl border bg-white/5</CodeTag>
            </div>

            {/* Ícone em círculo */}
            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block">
                Ícone em círculo
              </span>
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
                  <Bell size={20} />
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
                  <Home size={20} />
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
                  <Zap size={20} />
                </div>
              </div>
              <CodeTag>w-12 h-12 rounded-xl bg-white/5 border</CodeTag>
            </div>

            {/* Widget */}
            <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block">
                Widget
              </span>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300 transition-all">
                <MapPin size={14} />
                <div className="text-xs text-left">
                  <div className="opacity-60">Localização</div>
                  <div className="font-bold text-white">Santos, SP</div>
                </div>
              </div>
              <CodeTag>rounded-full border backdrop-blur-md bg-white/5</CodeTag>
            </div>
          </div>
        </section>

        {/* Espaçamento */}
        <section>
          <SectionTitle icon={<Ruler size={16} />} label="Espaçamento" />
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            As escalas de espaçamento seguem os valores do Tailwind, aplicadas
            em gap, padding e margin para manter ritmo visual consistente.
          </p>

          <div className="space-y-4">
            {[
              { label: "gap-2 (0.5rem)", width: "w-2" },
              { label: "gap-3 (0.75rem)", width: "w-3" },
              { label: "gap-4 (1rem)", width: "w-4" },
              { label: "p-4 (1rem)", width: "w-4", padded: true },
              { label: "py-3 (0.75rem vertical)", width: "w-full", tall: true },
            ].map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 p-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl"
              >
                <div
                  className={`${s.padded ? "p-4" : ""} ${s.tall ? "py-3 px-0" : ""} rounded-xl bg-white/10 border border-white/10 flex items-center`}
                >
                  <div className={`${s.width} ${s.tall ? "h-3" : "h-4"} bg-emerald-400/60 rounded`} />
                </div>
                <CodeTag>{s.label}</CodeTag>
              </div>
            ))}
          </div>
        </section>

        {/* Animações */}
        <section>
          <SectionTitle icon={<Sparkles size={16} />} label="Animações" />
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            As transições são suaves e propositalmente lentas, criando uma
            sensação premium e fluida nas interações.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "transition-all", desc: "Transição em todas as propriedades", demo: "transition-all duration-300 hover:bg-white/10" },
              { label: "duration-300", desc: "Transição rápida (300ms)", demo: "transition-all duration-300 hover:bg-white/10" },
              { label: "duration-500", desc: "Transição média (500ms)", demo: "transition-all duration-500 hover:bg-white/10" },
              { label: "duration-700", desc: "Transição lenta (700ms)", demo: "transition-all duration-700 hover:bg-white/10" },
              { label: "hover:scale-[1.02]", desc: "Leve aumento no hover", demo: "transition-all duration-300 hover:scale-[1.02]" },
              { label: "hover:grayscale-0", desc: "Remove escala de cinza", demo: "grayscale hover:grayscale-0 transition-all duration-700" },
            ].map((a) => (
              <div
                key={a.label}
                className={`p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl ${a.demo}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Check size={12} className="text-emerald-400" />
                  <CodeTag>{a.label}</CodeTag>
                </div>
                <p className="text-xs text-gray-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-2xl">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
              <img
                src="/assets/fs-logo.svg"
                alt="FS Logo"
                className="w-7 h-7 invert"
              />
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Designer & Developer criando experiências digitais imersivas.
            </p>
            <p className="text-gray-500 text-xs max-w-sm">
              Para hospedar seus projetos com performance e CDN global,
              recomendo uma stack que escala com você.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://www.hostinger.com/br/cart?product=hosting%3Ahostinger_premium&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf50-9e17-73ea-939c-b98b535e64f9"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all text-sm font-medium"
              >
                Premium
              </a>
              <a
                href="https://www.hostinger.com/br/cart?product=hosting%3Ahostinger_business&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf50-3cda-7140-8887-daf1aee8032b"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
              >
                Business
              </a>
            </div>
            <a
              href="/"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300 text-sm font-medium"
            >
              <Home size={14} />
              Voltar para a homepage
            </a>
            <div className="w-full h-px bg-white/10" />
            <p className="text-gray-600 text-xs">
              © 2025 Felipe Souza. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StyleguidesPage;
