import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  ArrowUpRight,
  Send,
  Hash,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Felipe Souza",
  description:
    "Artigos, guias e analises sobre agentes de IA, Kimi, OpenClaw, GPT-5, automacao, no-code, Framer e infraestrutura para criadores digitais em 2026.",
  keywords: [
    "blog IA 2026",
    "agentes autonomos",
    "Kimi tutorial",
    "OpenClaw guia",
    "GPT-5 deploy",
    "automacao inteligente",
    "no-code Framer",
    "pipeline CI/CD",
    "monetizar prompts",
    "Felipe Souza blog",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/blog",
    siteName: "Felipe Souza | Dev, IA & Automacao",
    title: "Blog | Felipe Souza",
    description:
      "Artigos, guias e analises sobre agentes de IA, automacao, no-code e infraestrutura para criadores digitais.",
    images: [
      {
        url: "/assets/fs-logo.svg",
        width: 1200,
        height: 630,
        alt: "Blog - Felipe Souza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Felipe Souza",
    description:
      "Artigos, guias e analises sobre agentes de IA, automacao, no-code e infraestrutura.",
    images: ["/assets/fs-logo.svg"],
  },
};

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  image: string;
  affiliateLabel: string;
}

const posts: Post[] = [
  {
    slug: "agente-autonomo-kimi-openclaw-2026",
    title: "Como Construir um Agente Autonomo com Kimi e OpenClaw em 2026",
    excerpt:
      "Agentes de IA autonomos sao a nova fronteira da produtividade em 2026. Neste guia completo, mostro como conectei Kimi, OpenClaw e GPT-5 em uma arquitetura que responde clientes, gera relatorios e toma decisoes sem intervencao humana.",
    date: "24 Abr 2026",
    readTime: "14 min",
    tag: "Dev",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    affiliateLabel: "VPS para Agentes",
  },
  {
    slug: "framer-ia-landing-pages-2026",
    title: "Framer + IA Generativa: Criar Landing Pages que Convertem em 2026",
    excerpt:
      "A combinacao de Framer com IA generativa revolucionou a criacao de interfaces em 2026. Neste artigo, mostro como uso Kimi para gerar copy persuasiva e criar interfaces profissionais sem codigo em menos de 2 horas.",
    date: "18 Abr 2026",
    readTime: "10 min",
    tag: "No-Code",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    affiliateLabel: "Framer + IA",
  },
  {
    slug: "pipeline-cicd-ia-2026",
    title: "Pipeline CI/CD para Projetos de IA: Do Codigo ao Deploy em 2026",
    excerpt:
      "Automatizar o deploy de modelos de IA e obrigatorio em 2026. Neste guia tecnico, mostro como configurei um pipeline completo com GitHub Actions, Docker e testes automatizados para projetos que usam Kimi, Claude e GPT.",
    date: "12 Abr 2026",
    readTime: "11 min",
    tag: "DevOps",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    affiliateLabel: "VPS para CI/CD",
  },
  {
    slug: "monetizar-prompts-ia-2026",
    title: "Como Monetizar Prompts e Templates de IA: Guia do Criador Digital 2026",
    excerpt:
      "O mercado de prompts e templates de IA movimenta bilhoes em 2026. Neste artigo, revelo como transformei prompts testados em produtos digitais que geram renda recorrente.",
    date: "05 Abr 2026",
    readTime: "9 min",
    tag: "Negocios",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    affiliateLabel: "Hospedagem para Produtos",
  },
];

const communities = [
  {
    name: "WhatsApp",
    description: "Networking rapido e oportunidades diarias",
    href: "https://wa.me/5513996432357",
  },
  {
    name: "Discord",
    description: "Comunidade de devs, designers e criadores de IA",
    href: "#",
  },
  {
    name: "Telegram",
    description: "Conteudo exclusivo e atualizacoes em primeira mao",
    href: "#",
  },
];

export default function BlogPage() {
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
          <span className="text-sm font-medium text-gray-500">Blog</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium mb-6">
            <BookOpen size={14} className="text-white" />
            Blog
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Artigos
            <span className="block text-gray-500">& Analises</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Guias praticos sobre agentes de IA, automacao, no-code, Framer e
            infraestrutura para criadores digitais que querem escalar em 2026.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 overflow-hidden transition-all hover:scale-[1.02] hover:bg-white/[0.07]"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-300 text-[10px] font-bold border border-white/10">
                      {post.tag}
                    </span>
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 backdrop-blur-md">
                      {post.affiliateLabel}
                    </span>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-gray-500 text-[10px] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime} de leitura
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-bold text-white text-lg leading-tight group-hover:text-gray-100 transition-colors mb-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-gray-400 font-medium text-xs group-hover:text-white transition-colors"
                  >
                    Ler artigo completo <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <Send size={20} className="text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Newsletter
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
                Receba toda semana conteudo selecionado sobre tecnologia,
                inteligencia artificial, empreendedorismo digital e novidades da
                comunidade. Sem spam, so valor.
              </p>
            </div>

            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
              action="#"
            >
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-5 py-3 rounded-xl bg-black/30 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
              >
                Inscrever
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-3 text-gray-500 text-xs">
              <span className="flex items-center gap-1.5">
                <Hash size={10} className="text-emerald-400" /> Tecnologia
              </span>
              <span className="flex items-center gap-1.5">
                <Hash size={10} className="text-emerald-400" /> IA & Agentes
              </span>
              <span className="flex items-center gap-1.5">
                <Hash size={10} className="text-emerald-400" /> Empreendedorismo
              </span>
              <span className="flex items-center gap-1.5">
                <Hash size={10} className="text-emerald-400" /> Comunidade
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Comunidades */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Comunidades
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
              Conecte-se com outros criadores, devs e entusiastas de IA. Troque
              experiencias, descubra oportunidades e evolua junto.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {communities.map((community) => (
              <a
                key={community.name}
                href={community.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 transition-all hover:scale-[1.02] hover:bg-white/[0.07]"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-gray-400 group-hover:text-white transition-colors mb-4">
                  <MessageSquare size={20} />
                </div>
                <h3 className="font-bold text-white mb-1">{community.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                  {community.description}
                </p>
                <span className="inline-flex items-center gap-1 text-gray-400 text-xs font-medium group-hover:text-white transition-colors">
                  Entrar <ArrowUpRight size={12} />
                </span>
              </a>
            ))}
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
              className="w-8 h-8 invert"
            />
            <span className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Felipe Souza
            </span>
          </div>
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft size={14} />
            Homepage
          </Link>
        </div>
      </footer>
    </main>
  );
}
