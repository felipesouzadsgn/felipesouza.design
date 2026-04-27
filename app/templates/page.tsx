import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Star,
  Check,
  Layout,
  Smartphone,
  Zap,
  Eye,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

interface Template {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number | "Free";
  image: string;
  tags: string[];
  features: string[];
  demoUrl: string;
  buyUrl: string;
  badge?: string;
}

const templates: Template[] = [
  {
    id: 1,
    name: "Neon Link",
    description:
      "Página de links estilo bento grid com animações suaves e glassmorphism. Perfeito para criadores e agências.",
    category: "Link in Bio",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tags: ["Gratuito", "Dark", "Animado"],
    features: ["Bento Grid", "Glassmorphism", "Mobile First"],
    demoUrl: "#",
    buyUrl: "#",
    badge: "Mais Popular",
  },
  {
    id: 2,
    name: "Minimal Folio",
    description:
      "Portfolio clean e minimalista para designers e desenvolvedores. Foco no conteúdo com tipografia refinada.",
    category: "Portfolio",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    tags: ["Gratuito", "Minimal", "Tipografia"],
    features: ["Seções CMS", "Filtros", "Light/Dark"],
    demoUrl: "#",
    buyUrl: "#",
  },
  {
    id: 3,
    name: "Launchpad",
    description:
      "Landing page de alta conversão para lançamentos e waitlists. Copy otimizada e CTAs estratégicos.",
    category: "Landing Page",
    price: 3,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["$3", "Conversão", "Waitlist"],
    features: ["Formulário CMS", "Countdown", "Social Proof"],
    demoUrl: "#",
    buyUrl: "#",
    badge: "Best Seller",
  },
  {
    id: 4,
    name: "Agency Pro",
    description:
      "Site completo para agências digitais. Páginas de serviços, portfolio, depoimentos e contato.",
    category: "Agência",
    price: 3,
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    tags: ["$3", "Multi-página", "CMS"],
    features: ["5 Páginas", "CMS Blog", "Formulários"],
    demoUrl: "#",
    buyUrl: "#",
  },
  {
    id: 5,
    name: "SaaS Dash",
    description:
      "Landing page para produtos SaaS com seções de features, pricing, FAQ e integrações. Design moderno e profissional.",
    category: "SaaS",
    price: 8,
    image:
      "https://images.unsplash.com/photo-1481487484168-9b9307a5296d?q=80&w=800&auto=format&fit=crop",
    tags: ["$8", "SaaS", "Pricing Table"],
    features: ["Pricing CMS", "FAQ Accordion", "Integrações"],
    demoUrl: "#",
    buyUrl: "#",
  },
  {
    id: 6,
    name: "Creator OS",
    description:
      "Página pessoal completa para criadores de conteúdo. Links, blog, newsletter, shop e sobre em um só lugar.",
    category: "Creator",
    price: 8,
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    tags: ["$8", "Creator", "Blog"],
    features: ["Blog CMS", "Newsletter", "Shop"],
    demoUrl: "#",
    buyUrl: "#",
  },
  {
    id: 7,
    name: "Escala Agency",
    description:
      "Site enterprise para agências que querem escalar. Páginas de cases, metodologia, time e careers.",
    category: "Agência",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    tags: ["$12", "Enterprise", "Cases"],
    features: ["10+ Páginas", "CMS Cases", "Careers"],
    demoUrl: "#",
    buyUrl: "#",
    badge: "Premium",
  },
  {
    id: 8,
    name: "Startup Kit",
    description:
      "Kit completo para startups: landing, dashboard preview, pitch deck interativo e investor page.",
    category: "Startup",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop",
    tags: ["$12", "Startup", "Investor"],
    features: ["Pitch Deck", "Dashboard Preview", "Investor Page"],
    demoUrl: "#",
    buyUrl: "#",
  },
  {
    id: 9,
    name: "Monetize Pro",
    description:
      "Template completo para vender produtos digitais. Curso, ebook, template ou comunidade — tudo em um só lugar.",
    category: "Produtos Digitais",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1553729459-afe8f2cda472?q=80&w=800&auto=format&fit=crop",
    tags: ["$18", "E-commerce", "Curso"],
    features: ["Checkout", "Área de Membros", "Aulas CMS"],
    demoUrl: "#",
    buyUrl: "#",
    badge: "Mais Completo",
  },
];

function PriceTag({ price }: { price: number | "Free" }) {
  if (price === "Free") {
    return (
      <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold border border-emerald-500/20">
        Free
      </span>
    );
  }
  return (
    <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold border border-white/10">
      ${price}
    </span>
  );
}

export default function TemplatesPage() {
  const freeTemplates = templates.filter((t) => t.price === "Free");
  const paidTemplates = templates.filter((t) => t.price !== "Free");

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
          <span className="text-sm font-medium text-gray-500">Templates</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium mb-6">
            <Sparkles size={14} className="text-white" />
            Templates para Framer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Templates
            <span className="block text-gray-500">Premium</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Designs profissionais prontos para publicar. De landing pages a
            sites completos, todos otimizados para conversão e construídos com
            as melhores práticas de 2026.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Check size={14} className="text-emerald-400" /> Free & Premium
            </span>
            <span className="flex items-center gap-2">
              <Check size={14} className="text-emerald-400" /> CMS Integrado
            </span>
            <span className="flex items-center gap-2">
              <Check size={14} className="text-emerald-400" /> Mobile First
            </span>
            <span className="flex items-center gap-2">
              <Check size={14} className="text-emerald-400" /> Animações
            </span>
          </div>
        </div>
      </section>

      {/* Free Templates */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <Star size={20} className="text-emerald-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Gratuitos</h2>
              <p className="text-gray-500 text-sm">
                Para começar sem investir
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {freeTemplates.map((template) => (
              <article
                key={template.id}
                className="group rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 overflow-hidden transition-all hover:scale-[1.02] hover:bg-white/[0.07]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-300 text-[10px] font-bold border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {template.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/20 backdrop-blur-md">
                      {template.badge}
                    </div>
                  )}
                  <PriceTag price={template.price} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout size={14} className="text-gray-500" />
                    <span className="text-xs text-gray-500">
                      {template.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{template.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {template.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {template.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 rounded-lg bg-white/5 text-gray-400 text-[10px] border border-white/5"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={template.demoUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 text-white text-sm font-medium border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <Eye size={14} />
                      Preview
                    </a>
                    <a
                      href={template.buyUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Baixar Free
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Templates */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 rounded-xl bg-white/5 border border-white/10">
              <Zap size={20} className="text-[#8b5cf6]" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Premium</h2>
              <p className="text-gray-500 text-sm">
                De $3 a $18 — invista no seu projeto
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paidTemplates.map((template) => (
              <article
                key={template.id}
                className="group rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 overflow-hidden transition-all hover:scale-[1.02] hover:bg-white/[0.07]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-gray-300 text-[10px] font-bold border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {template.badge && (
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#8b5cf6]/15 text-[#8b5cf6] text-[10px] font-bold border border-[#8b5cf6]/20 backdrop-blur-md">
                      {template.badge}
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3">
                    <PriceTag price={template.price} />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone size={12} className="text-gray-500" />
                    <span className="text-xs text-gray-500">
                      {template.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1.5">
                    {template.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
                    {template.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {template.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-0.5 rounded-lg bg-white/5 text-gray-400 text-[10px] border border-white/5"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={template.demoUrl}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 text-white text-xs font-medium border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <Eye size={12} />
                      Preview
                    </a>
                    <a
                      href={template.buyUrl}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-colors"
                    >
                      <ShoppingBag size={12} />
                      Comprar ${template.price}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Framer CTA */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl p-8 sm:p-12 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mb-6">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Por que Framer?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-6 leading-relaxed">
              Framer é a ferramenta no-code mais poderosa para criar sites
              profissionais. Com integração nativa de IA, CMS robusto e
              animações fluidas, você publica em minutos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://framer.link/fsdsgn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Testar Framer Grátis
              </a>
              <a
                href="https://www.hostinger.com/br/cart?product=hosting%3Ahostinger_business&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf50-3cda-7140-8887-daf1aee8032b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white text-sm font-semibold border border-white/10 hover:bg-white/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Hospedar meu Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Dúvidas Frequentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Posso usar os templates em projetos comerciais?",
                a: "Sim. Todos os templates incluem licença comercial. Você pode usar em projetos pessoais e de cliente sem restrições.",
              },
              {
                q: "Preciso saber código para usar?",
                a: "Não. Os templates são 100% no-code no Framer. Basta duplicar, customizar o conteúdo e publicar.",
              },
              {
                q: "Como recebo o template após a compra?",
                a: "Você recebe um link de duplicação do Framer. Basta clicar e o template será copiado para sua conta.",
              },
              {
                q: "Tem suporte se eu tiver dúvidas?",
                a: "Sim. Todos os templates premium incluem documentação passo a passo e suporte por email.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-white/10 backdrop-blur-2xl bg-white/5 p-6"
              >
                <h3 className="font-bold text-white mb-2">{item.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
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
              href="https://framer.link/fsdsgn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ArrowUpRight size={14} />
              Framer
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
