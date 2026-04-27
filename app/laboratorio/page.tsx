"use client";

import React, { useState } from "react";
import {
  FlaskConical,
  Copy,
  Check,
  RefreshCw,
  Sliders,
  Type,
  AlignLeft,
  Hash,
  Paintbrush,
  Text,
  ArrowUpRight,
  Home,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ─── Helpers ─── */
const generateRandomColor = () => {
  const hex = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  return `#${hex}`;
};

const toTitleCase = (str: string) =>
  str
    .toLowerCase()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const toCamelCase = (str: string) => {
  const words = str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "";
  return (
    words[0] +
    words
      .slice(1)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("")
  );
};

const toSlug = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const LOREM_PARAGRAPHS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
  "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
];

const loremIpsum = (count: number) => {
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(LOREM_PARAGRAPHS[i % LOREM_PARAGRAPHS.length]);
  }
  return result;
};

/* ─── Copy Hook ─── */
const useCopy = () => {
  const [copied, setCopied] = useState(false);
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };
  return { copied, copy };
};

/* ─── Componente Principal ─── */
export default function LaboratorioPage() {
  /* ─ Experimento 1: Gerador de Paleta ─ */
  const [palette, setPalette] = useState<string[]>(() =>
    Array.from({ length: 5 }, generateRandomColor)
  );
  const { copied: copiedPalette, copy: copyPalette } = useCopy();

  /* ─ Experimento 2: Conversor de Texto ─ */
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const { copied: copiedText, copy: copyText } = useCopy();

  /* ─ Experimento 3: Contador de Caracteres ─ */
  const [countText, setCountText] = useState("");
  const CHAR_LIMIT = 280;

  /* ─ Experimento 4: Glassmorphism Generator ─ */
  const [bgOpacity, setBgOpacity] = useState(5);
  const [blur, setBlur] = useState(16);
  const [radius, setRadius] = useState(16);
  const [borderOpacity, setBorderOpacity] = useState(10);
  const { copied: copiedCSS, copy: copyCSS } = useCopy();

  /* ─ Experimento 5: Lorem Ipsum ─ */
  const [paragraphs, setParagraphs] = useState(3);
  const [loremOutput, setLoremOutput] = useState<string[]>([]);
  const { copied: copiedLorem, copy: copyLorem } = useCopy();

  /* ─ Área de Teste Livre ─ */
  const [freeText, setFreeText] = useState("");

  /* ─ Contadores ─ */
  const charCount = countText.length;
  const wordCount = countText.trim() === "" ? 0 : countText.trim().split(/\s+/).length;
  const lineCount = countText === "" ? 0 : countText.split("\n").length;
  const progress = Math.min((charCount / CHAR_LIMIT) * 100, 100);
  const overLimit = charCount > CHAR_LIMIT;

  /* ─ Handlers ─ */
  const handleConvert = (mode: string) => {
    if (!inputText) return;
    switch (mode) {
      case "upper":
        setOutputText(inputText.toUpperCase());
        break;
      case "lower":
        setOutputText(inputText.toLowerCase());
        break;
      case "title":
        setOutputText(toTitleCase(inputText));
        break;
      case "camel":
        setOutputText(toCamelCase(inputText));
        break;
      case "slug":
        setOutputText(toSlug(inputText));
        break;
    }
  };

  const generateLorem = () => {
    setLoremOutput(loremIpsum(paragraphs));
  };

  const glassCSS = `background: rgba(255, 255, 255, ${(bgOpacity / 100).toFixed(
    2
  )});
backdrop-filter: blur(${blur}px);
-webkit-backdrop-filter: blur(${blur}px);
border-radius: ${radius}px;
border: 1px solid rgba(255, 255, 255, ${(borderOpacity / 100).toFixed(2)});`;

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans antialiased selection:bg-white/20 selection:text-white">
      {/* Background glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </div>

      {/* Header */}
      <header className="relative z-10 fixed top-0 left-0 right-0 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 py-3 rounded-full border border-white/10 backdrop-blur-2xl bg-black/40">
          <a href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Home size={16} />
            <span className="text-xs font-medium hidden sm:inline">Início</span>
          </a>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
              <FlaskConical size={16} className="text-gray-300" />
            </div>
            <span className="text-sm font-bold text-white tracking-tight">Laboratório</span>
          </div>
          <a
            href="https://app.orayon.ai/hub-ai/fs"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-xs font-medium hidden sm:inline">Hub AI</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-16">
        {/* Hero */}
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-400 text-xs font-medium mb-2">
            <Sparkles size={12} />
            <span>Experimentos Digitais</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Laboratório
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Espaço para testar ideias, componentes e interações em tempo real
          </p>
        </section>

        {/* Grid de Experimentos */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ─── Experimento 1: Gerador de Paleta ─── */}
          <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <Paintbrush size={18} className="text-gray-300" />
              </div>
              <div>
                <h2 className="text-white font-bold text-base">Gerador de Paleta</h2>
                <p className="text-gray-500 text-xs">Cores aleatórias em hex</p>
              </div>
            </div>

            <div className="flex gap-2">
              {palette.map((color, i) => (
                <button
                  key={i}
                  onClick={() => copyPalette(color)}
                  className="flex-1 aspect-square rounded-xl border border-white/10 transition-transform hover:scale-105 active:scale-95 relative group"
                  style={{ backgroundColor: color }}
                  title={color}
                >
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Copy size={14} className="text-white drop-shadow-md" />
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-1.5 flex-wrap">
                {palette.map((color, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono text-gray-400 bg-black/30 px-2 py-1 rounded-md border border-white/5"
                  >
                    {color}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => copyPalette(palette.join(", "))}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all text-xs font-medium"
                >
                  {copiedPalette ? <Check size={12} /> : <Copy size={12} />}
                  Copiar HEX
                </button>
                <button
                  onClick={() => setPalette(Array.from({ length: 5 }, generateRandomColor))}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all text-xs font-medium"
                >
                  <RefreshCw size={12} />
                  Gerar
                </button>
              </div>
            </div>
          </div>

          {/* ─── Experimento 2: Conversor de Texto ─── */}
          <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <Type size={18} className="text-gray-300" />
              </div>
              <div>
                <h2 className="text-white font-bold text-base">Conversor de Texto</h2>
                <p className="text-gray-500 text-xs">Transforme formatos rapidamente</p>
              </div>
            </div>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Digite ou cole seu texto aqui..."
              className="w-full h-24 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-white/20 resize-none"
            />

            <div className="flex flex-wrap gap-2">
              {[
                { label: "MAIÚSCULAS", mode: "upper" },
                { label: "minúsculas", mode: "lower" },
                { label: "Title Case", mode: "title" },
                { label: "camelCase", mode: "camel" },
                { label: "slugify", mode: "slug" },
              ].map((btn) => (
                <button
                  key={btn.mode}
                  onClick={() => handleConvert(btn.mode)}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all text-xs font-medium"
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <textarea
                value={outputText}
                readOnly
                placeholder="Resultado..."
                className="w-full h-24 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none resize-none"
              />
              {outputText && (
                <button
                  onClick={() => copyText(outputText)}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  title="Copiar resultado"
                >
                  {copiedText ? <Check size={14} /> : <Copy size={14} />}
                </button>
              )}
            </div>
          </div>

          {/* ─── Experimento 3: Contador de Caracteres ─── */}
          <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <Hash size={18} className="text-gray-300" />
              </div>
              <div>
                <h2 className="text-white font-bold text-base">Contador de Caracteres</h2>
                <p className="text-gray-500 text-xs">Análise em tempo real</p>
              </div>
            </div>

            <textarea
              value={countText}
              onChange={(e) => setCountText(e.target.value)}
              placeholder="Comece a digitar..."
              className="w-full h-32 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-white/20 resize-none"
            />

            {/* Barra de progresso */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">
                  {charCount} / {CHAR_LIMIT}
                </span>
                <span className={`font-medium ${overLimit ? "text-red-400" : "text-gray-400"}`}>
                  {overLimit ? `${charCount - CHAR_LIMIT} acima do limite` : `${Math.round(progress)}%`}
                </span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    overLimit ? "bg-red-400" : progress > 80 ? "bg-amber-400" : "bg-emerald-400"
                  }`}
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Caracteres", value: charCount },
                { label: "Palavras", value: wordCount },
                { label: "Linhas", value: lineCount },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl bg-black/30 border border-white/5"
                >
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Experimento 4: Glassmorphism Generator ─── */}
          <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <Sliders size={18} className="text-gray-300" />
              </div>
              <div>
                <h2 className="text-white font-bold text-base">Glassmorphism Generator</h2>
                <p className="text-gray-500 text-xs">Ajuste e copie o CSS</p>
              </div>
            </div>

            {/* Preview */}
            <div className="flex items-center justify-center py-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/5">
              <div
                className="w-40 h-24 flex items-center justify-center text-xs font-medium text-gray-300"
                style={{
                  background: `rgba(255,255,255,${bgOpacity / 100})`,
                  backdropFilter: `blur(${blur}px)`,
                  WebkitBackdropFilter: `blur(${blur}px)`,
                  borderRadius: `${radius}px`,
                  border: `1px solid rgba(255,255,255,${borderOpacity / 100})`,
                }}
              >
                Preview
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-3">
              {[
                { label: "Opacidade do fundo", value: bgOpacity, max: 100, setter: setBgOpacity, unit: "%" },
                { label: "Blur", value: blur, max: 40, setter: setBlur, unit: "px" },
                { label: "Raio da borda", value: radius, max: 32, setter: setRadius, unit: "px" },
                { label: "Opacidade da borda", value: borderOpacity, max: 100, setter: setBorderOpacity, unit: "%" },
              ].map((s) => (
                <div key={s.label} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">{s.label}</span>
                    <span className="text-gray-300 font-mono">
                      {s.value}
                      {s.unit}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={s.max}
                    value={s.value}
                    onChange={(e) => s.setter(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-white"
                  />
                </div>
              ))}
            </div>

            <div className="relative">
              <pre className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-[11px] font-mono text-gray-400 overflow-x-auto whitespace-pre-wrap">
                {glassCSS}
              </pre>
              <button
                onClick={() => copyCSS(glassCSS)}
                className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                title="Copiar CSS"
              >
                {copiedCSS ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* ─── Experimento 5: Lorem Ipsum Generator ─── */}
          <div className="md:col-span-2 rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <AlignLeft size={18} className="text-gray-300" />
              </div>
              <div>
                <h2 className="text-white font-bold text-base">Lorem Ipsum Generator</h2>
                <p className="text-gray-500 text-xs">Gere parágrafos de placeholder</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="number"
                min={1}
                max={20}
                value={paragraphs}
                onChange={(e) => setParagraphs(Math.max(1, Math.min(20, Number(e.target.value))))}
                className="w-20 bg-black/30 border border-white/10 rounded-xl px-4 py-2 text-sm text-gray-200 focus:outline-none focus:border-white/20"
              />
              <span className="text-gray-500 text-sm">parágrafos</span>
              <button
                onClick={generateLorem}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all text-xs font-medium"
              >
                <RefreshCw size={12} />
                Gerar
              </button>
            </div>

            {loremOutput.length > 0 && (
              <div className="relative">
                <div className="w-full h-48 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 overflow-y-auto space-y-3">
                  {loremOutput.map((p, i) => (
                    <p key={i} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                <button
                  onClick={() => copyLorem(loremOutput.join("\n\n"))}
                  className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  title="Copiar texto"
                >
                  {copiedLorem ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Área de Teste Livre */}
        <section className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
              <Text size={18} className="text-gray-300" />
            </div>
            <div>
              <h2 className="text-white font-bold text-base">Área de Teste Livre</h2>
              <p className="text-gray-500 text-xs">Cole código, texto ou ideias aqui...</p>
            </div>
          </div>
          <textarea
            value={freeText}
            onChange={(e) => setFreeText(e.target.value)}
            placeholder="Cole código, texto ou ideias aqui..."
            className="w-full h-40 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-white/20 resize-none"
          />
        </section>

        {/* CTA */}
        <section className="text-center space-y-4 py-8">
          <p className="text-gray-500 text-sm">
            Quer mais ferramentas como essas?
          </p>
          <a
            href="https://app.orayon.ai/hub-ai/fs"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-colors"
          >
            Acessar Hub AI
            <ArrowUpRight size={16} />
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-2xl">
        <div className="max-w-5xl mx-auto px-6 py-12">
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
            <a
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-all text-sm font-medium"
            >
              <Home size={16} />
              Voltar para a homepage
            </a>
            <div className="w-full h-px bg-white/10" />
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Felipe Souza. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
