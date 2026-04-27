"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Wand2,
  Copy,
  Check,
  Search,
  ArrowLeft,
  Sparkles,
  PenTool,
  Palette,
  Code2,
  Clock,
  Briefcase,
  Type,
  Bug,
  ExternalLink,
} from "lucide-react";

type Category =
  | "Todos"
  | "Copywriting"
  | "Design"
  | "Dev"
  | "Produtividade"
  | "Negócios";

interface Prompt {
  id: number;
  title: string;
  category: Category;
  description: string;
  text: string;
  tags: string[];
}

const prompts: Prompt[] = [
  {
    id: 1,
    title: "Landing Page Converter",
    category: "Copywriting",
    description:
      "Gera copy de alta conversão para landing pages, com estrutura AIDA e gatilhos mentais.",
    text: `Atue como um copywriter sênior especialista em conversão. Crie a copy completa para uma landing page vendendo [PRODUTO/SERVIÇO].

Estruture em:
1. Headline poderosa com benefício principal
2. Subheadline que expande a promessa
3. Seção de dor/problema
4. Solução e proposta de valor única
5. Benefícios em bullet points
6. Prova social e autoridade
7. Oferta irresistível com escassez
8. CTA claro e urgente

Tom: [TOM DE VOZ]. Público-alvo: [PÚBLICO]. Inclua gatilhos mentais de escassez, autoridade e prova social.`,
    tags: ["copy", "landing page", "conversão", "AIDA"],
  },
  {
    id: 2,
    title: "UI Audit",
    category: "Design",
    description:
      "Revisa interfaces e sugere melhorias de usabilidade, hierarquia visual e acessibilidade.",
    text: `Atue como um UI/UX designer sênior. Analise a interface que vou descrever e faça um audit completo:

[DESCREVA A INTERFACE OU COLE PRINT/URL]

Avalie:
1. Hierarquia visual e contraste
2. Consistência tipográfica e espacial
3. Padrões de navegação e affordances
4. Acessibilidade (contraste, tamanhos, leitores de tela)
5. Microinterações e feedback ao usuário
6. Oportunidades de simplificação

Para cada ponto, classifique como: 🟢 Bom | 🟡 Melhorável | 🔴 Crítico. Dê recomendações práticas e priorizadas.`,
    tags: ["ui", "ux", "audit", "usabilidade"],
  },
  {
    id: 3,
    title: "Componente React",
    category: "Dev",
    description:
      "Gera componentes React funcionais com TypeScript e Tailwind CSS prontos para produção.",
    text: `Crie um componente React funcional em TypeScript para: [DESCREVA O COMPONENTE].

Requisitos:
- Use React 18+ com hooks modernos
- Estilize com Tailwind CSS (classes utilitárias)
- Props tipadas com interface clara
- Suporte a estados de loading, erro e vazio
- Acessibilidade: aria-labels, foco visível, semântica HTML
- Animações sutis com Tailwind (transition, animate)
- Responsivo por padrão
- Exporte como default

Retorne apenas o código completo do arquivo, com comentários explicando decisões importantes.`,
    tags: ["react", "typescript", "tailwind", "componente"],
  },
  {
    id: 4,
    title: "Resumidor de Reunião",
    category: "Produtividade",
    description:
      "Transforma transcrições longas em resumos executivos com decisões e próximos passos.",
    text: `Você é um assistente executivo. Resuma a transcrição da reunião abaixo no formato:

## 🎯 Resumo Executivo (3 bullets)
## ✅ Decisões Tomadas
## 📌 Próximos Passos (com responsável e prazo quando identificável)
## ❓ Dúvidas Pendentes
## 💡 Insights ou Oportunidades

Regras:
- Seja direto, sem fluff
- Preserve números, datas e compromissos exatos
- Destaque divergências de opinião se houver
- Se não souber o responsável, marque como "[A definir]"

Transcrição:
"""
[COLE A TRANSCRIÇÃO AQUI]
"""`,
    tags: ["reunião", "resumo", "produtividade", "transcrição"],
  },
  {
    id: 5,
    title: "Estratégia de Conteúdo",
    category: "Negócios",
    description:
      "Cria calendário editorial completo com temas, formatos e objetivos de negócio.",
    text: `Atue como estrategista de conteúdo. Crie um calendário editorial de [NÚMERO] semanas para [NICHO/MARCA].

Contexto:
- Público-alvo: [PÚBLICO]
- Objetivo de negócio: [OBJETIVO: awareness, leads, vendas]
- Canais: [INSTAGRAM / LINKEDIN / YOUTUBE / BLOG / EMAIL]
- Frequência: [X posts por semana]

Para cada peça de conteúdo inclua:
1. Tema/título
2. Formato (carrossel, reel, artigo, stories)
3. Gancho principal (hook)
4. CTA
5. Objetivo da etapa do funil
6. Sugestão de data de publicação

Distribua os conteúdos ao longo do funil (40% topo, 40% meio, 20% fundo).`,
    tags: ["conteúdo", "calendário editorial", "marketing", "estratégia"],
  },
  {
    id: 6,
    title: "Naming de Marca",
    category: "Copywriting",
    description:
      "Gera nomes de marca memoráveis, verificando domínio e conotações linguísticas.",
    text: `Atue como naming strategist. Preciso de nomes para uma marca de [SEGMENTO].

Posicionamento desejado: [DESCREVA A PERSONALIDADE: premium, jovem, técnica, humanizada etc.]
Público-alvo: [PÚBLICO]
Restrições: [EVITE X, PREFIRA Y, MÁXIMO Z SÍLABAS]

Gere 15 opções divididas em:
- 5 nomes criativos/abstractos
- 5 nomes descritivos/compostos
- 5 nomes com jogos de palavras ou neologismos

Para cada nome, informe:
1. Significado ou etimologia
2. Conotação emocional
3. Disponibilidade aproximada de domínio .com / .com.br (se souber)
4. Nota de 1-10 para memorabilidade
5. Riscos de conotação negativa em português ou inglês`,
    tags: ["naming", "marca", "branding", "posicionamento"],
  },
  {
    id: 7,
    title: "Paleta de Cores",
    category: "Design",
    description:
      "Gera paletas harmoniosas com regras de contraste, aplicações e tokens de design.",
    text: `Atue como designer de sistemas de design. Crie uma paleta de cores completa para [PROJETO/MARCA].

Contexto:
- Personalidade: [DESCREVA]
- Público: [PÚBLICO]
- Uso principal: [WEB / APP / IMPRESSO / TODOS]

Gere:
1. Cor primária (3 tons: base, hover, pressed)
2. Cor secundária (3 tons)
3. Cor de destaque/accent (3 tons)
4. Tons de cinza para textos e fundos (8 escalações de 50 a 950)
5. Cores semânticas: sucesso, aviso, erro, informação
6. Cores de fundo: surface, overlay, elevated

Para cada cor principal, forneça:
- HEX
- RGB
- Recomendação de contraste WCAG sobre branco e sobre preto
- Emoção/comportamento associado

Ao final, sugira 3 variações de estilo (ex: vibrante, sóbria, pastel).`,
    tags: ["cores", "paleta", "design system", "contraste"],
  },
  {
    id: 8,
    title: "Debug de Código",
    category: "Dev",
    description:
      "Analisa erros, identifica causas raiz e propõe correções com explicações didáticas.",
    text: `Você é um engenheiro sênior de software. Analise o código com erro abaixo e me ajude a debugar.

Tecnologias: [LISTE: React, Node, Python, etc.]
Erro observado: [COLE A MENSAGEM DE ERRO OU DESCREVA O COMPORTAMENTO]
Contexto adicional: [AMBIENTE, VERSÕES, QUANDO O ERRO OCORRE]

Código:
\`\`\`
[COLE O CÓDIGO AQUI]
\`\`\`

Responda no formato:
1. 🔍 Diagnóstico (causa raiz provável)
2. 🛠️ Correção (código corrigido completo)
3. 📖 Explicação (por que o erro ocorreu, em português claro)
4. 🧪 Teste (como validar que está funcionando)
5. 🚧 Prevenção (como evitar no futuro)

Seja didático. Se o erro for comum, mencione a documentação oficial relevante.`,
    tags: ["debug", "erro", "refatoração", "boas práticas"],
  },
];

const categories: Category[] = [
  "Todos",
  "Copywriting",
  "Design",
  "Dev",
  "Produtividade",
  "Negócios",
];

const categoryIcons: Record<Category, React.ReactNode> = {
  Todos: <Sparkles className="w-4 h-4" />,
  Copywriting: <Type className="w-4 h-4" />,
  Design: <Palette className="w-4 h-4" />,
  Dev: <Code2 className="w-4 h-4" />,
  Produtividade: <Clock className="w-4 h-4" />,
  Negócios: <Briefcase className="w-4 h-4" />,
};

const categoryColors: Record<Category, string> = {
  Todos: "bg-white/10 text-white border-white/10",
  Copywriting: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Design: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Dev: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Produtividade: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Negócios: "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export default function PromptsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredPrompts = useMemo(() => {
    return prompts.filter((prompt) => {
      const matchesCategory =
        activeCategory === "Todos" || prompt.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        prompt.text.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCopy = async (text: string, id: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // fallback silencioso
    }
  };

  return (
    <main className="min-h-screen bg-[#020202] text-gray-200">
      {/* Header */}
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Voltar</span>
          </Link>
          <div className="flex items-center gap-2 text-white">
            <Wand2 className="w-5 h-5" />
            <span className="font-semibold text-sm tracking-wide">
              Galeria de Prompts
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prompts prontos para usar</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-5">
            Galeria de Prompts
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Prompts testados e otimizados para extrair o máximo da IA. Copie,
            customize e coloque para trabalhar.
          </p>
        </div>
      </section>

      {/* Search + Filters */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar por título, tag ou conteúdo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border transition-all ${
                  activeCategory === cat
                    ? categoryColors[cat]
                    : "bg-transparent text-gray-400 border-white/10 hover:bg-white/5 hover:text-white"
                }`}
              >
                {categoryIcons[cat]}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-xs text-gray-500">
          {filteredPrompts.length} prompt{filteredPrompts.length !== 1 ? "s" : ""} encontrado
          {filteredPrompts.length !== 1 ? "s" : ""}
          {searchQuery && ` para "${searchQuery}"`}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        {filteredPrompts.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-10 h-10 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              Nenhum prompt encontrado.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Tente ajustar os filtros ou a busca.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredPrompts.map((prompt) => {
              const isExpanded = expandedId === prompt.id;
              const isCopied = copiedId === prompt.id;

              return (
                <article
                  key={prompt.id}
                  className="group flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl overflow-hidden transition-all hover:bg-white/[0.05] hover:border-white/15"
                >
                  {/* Card header */}
                  <div className="p-5 pb-0">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg font-semibold text-white leading-snug">
                        {prompt.title}
                      </h3>
                      <span
                        className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${categoryColors[prompt.category]}`}
                      >
                        {categoryIcons[prompt.category]}
                        {prompt.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      {prompt.description}
                    </p>
                  </div>

                  {/* Prompt text */}
                  <div className="px-5 flex-1">
                    <div className="relative rounded-xl bg-black/40 border border-white/5 overflow-hidden">
                      <pre
                        className={`text-xs leading-relaxed text-gray-300 font-mono p-4 overflow-x-auto whitespace-pre-wrap break-words transition-all ${
                          isExpanded ? "" : "max-h-48"
                        }`}
                      >
                        {prompt.text}
                      </pre>
                      {!isExpanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                      )}
                    </div>
                    <button
                      onClick={() =>
                        setExpandedId(isExpanded ? null : prompt.id)
                      }
                      className="mt-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {isExpanded ? "Mostrar menos" : "Mostrar mais"}
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="px-5 pt-4 pb-2 flex flex-wrap gap-2">
                    {prompt.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[11px] text-gray-400 bg-white/5 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-3 flex items-center gap-3">
                    <button
                      onClick={() => handleCopy(prompt.text, prompt.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                        isCopied
                          ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                          : "bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20"
                      }`}
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      {isCopied ? "Copiado!" : "Copiar prompt"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl p-8 sm:p-12 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Quer ir além dos prompts?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-4 leading-relaxed">
            Descubra ferramentas e métodos que uso no dia a dia para acelerar
            entregas de design, copy e código com IA. Para rodar seus agentes e
            automações em produção com latência baixa, uma infraestrutura própria
            faz toda a diferença.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <a
              href="https://app.orayon.ai/fs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Conheça as ferramentas
            </a>
            <a
              href="https://www.hostinger.com/br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf53-d52f-71ae-9a87-07f6a0b59c3e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white text-sm font-semibold border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              VPS para Agentes de IA
            </a>
          </div>
          <p className="text-gray-500 text-xs max-w-md mx-auto">
            Stack recomendada: Iniciante → Hostinger Premium |
            Profissional → VPS KVM 2 | Escala → Cloud Professional
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Felipe Souza. Todos os direitos
            reservados.
          </p>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a homepage
          </Link>
        </div>
      </footer>
    </main>
  );
}
