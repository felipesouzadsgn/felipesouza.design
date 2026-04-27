import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Container,
  Cpu,
  GitBranch,
  Globe,
  Layers,
  Server,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Pipeline CI/CD para Projetos de IA: Do Código ao Deploy em 2026 | Felipe Souza",
  description:
    "Guia técnico 2026 de CI/CD para projetos de IA. GitHub Actions, Docker, testes automatizados, deploy de modelos Kimi/GPT-5 e infraestrutura VPS dedicada.",
  keywords: [
    "pipeline CI/CD IA 2026",
    "deploy modelo IA",
    "Docker IA produção",
    "GitHub Actions IA",
    "VPS para IA",
    "devops IA",
    "Kimi deploy",
    "GPT-5 produção",
  ],
  openGraph: {
    title:
      "Pipeline CI/CD para Projetos de IA: Do Código ao Deploy em 2026 | Felipe Souza",
    description:
      "Guia técnico 2026 de CI/CD para projetos de IA. GitHub Actions, Docker, testes automatizados, deploy de modelos Kimi/GPT-5 e infraestrutura VPS dedicada.",
    url: "https://felipesouza.dsgn/blog/pipeline-cicd-ia-2026",
    siteName: "Felipe Souza",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pipeline CI/CD para Projetos de IA em 2026",
      },
    ],
    locale: "pt_BR",
    type: "article",
    publishedTime: "2026-04-12T00:00:00.000Z",
    authors: ["Felipe Souza"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pipeline CI/CD para Projetos de IA: Do Código ao Deploy em 2026 | Felipe Souza",
    description:
      "Guia técnico 2026 de CI/CD para projetos de IA. GitHub Actions, Docker, testes automatizados, deploy de modelos Kimi/GPT-5 e infraestrutura VPS dedicada.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    ],
    creator: "@felipesouza",
  },
  alternates: {
    canonical: "https://felipesouza.dsgn/blog/pipeline-cicd-ia-2026",
  },
};

export default function PipelineCICDIA2026Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center px-6 py-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Voltar para homepage
          </Link>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-6 py-12">
        {/* Hero */}
        <header className="mb-12">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              <Zap className="h-3 w-3 text-emerald-400" />
              DevOps
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
              <Calendar className="h-3.5 w-3.5" />
              12 Abr 2026
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
              <Clock className="h-3.5 w-3.5" />
              11 min de leitura
            </span>
          </div>

          <h1 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Pipeline CI/CD para Projetos de IA: Do Código ao Deploy em 2026
          </h1>

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
            alt="Ilustração de circuitos e inteligência artificial representando pipelines de deploy"
            className="mb-4 h-64 w-full rounded-2xl object-cover sm:h-80"
          />
          <p className="text-center text-xs text-gray-600">
            Foto: Unsplash — circuitos e chips representando infraestrutura de IA
          </p>
        </header>

        {/* Introdução */}
        <section className="mb-12">
          <p className="mb-4 text-lg leading-relaxed text-gray-300">
            Em 2026, deploy de inteligência artificial deixou de ser um bônus e se
            tornou um requisito de mesa. Startups e empresas consolidadas competem
            pela menor latência e pela maior confiabilidade em seus agentes de IA.
            Mas, diferente de uma aplicação web tradicional, colocar um modelo de
            linguagem em produção exige cuidados especiais: gigabytes de pesos,
            dependências de GPU, validação de prompts e regressão de respostas.
          </p>
          <p className="leading-relaxed text-gray-400">
            Este guia mostra como montar uma pipeline CI/CD completa para projetos
            de IA — desde o commit no Git até o modelo respondendo requisições em
            um VPS dedicado. Se você trabalha com Kimi, GPT-5 ou modelos
            open-source, a estrutura é a mesma: automação, testes e rollback
            rápido.
          </p>
        </section>

        {/* O desafio */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Cpu className="h-5 w-5 text-emerald-400" />
            </div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              O desafio do deploy de IA em produção
            </h2>
          </div>
          <p className="mb-4 leading-relaxed text-gray-400">
            Deployar uma aplicação Next.js ou Node.js já é rotina. Mas quando
            entra um modelo de linguagem com dezenas de bilhões de parâmetros, a
            complexidade explode em três dimensões:
          </p>
          <ul className="mb-4 space-y-3">
            {[
              {
                icon: <Layers className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />,
                text: "Modelos grandes ocupam de 5 GB a 100 GB de disco. Uma imagem Docker mal otimizada pode passar de 15 GB, tornando o pull inviável em servidores com banda limitada.",
              },
              {
                icon: <Container className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />,
                text: "Dependências de GPU exigem drivers CUDA específicos, bibliotecas cuDNN e runtime compatíveis. Um container que roda perfeitamente na máquina local pode falhar silenciosamente no servidor por conta de uma versão divergente.",
              },
              {
                icon: <Zap className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />,
                text: "Latência crítica. Usuários esperam respostas em menos de 2 segundos. Seu pipeline precisa garantir que o modelo esteja pré-carregado na memória, com warm-up automático após cada deploy.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-400">
                {item.icon}
                <span className="leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="leading-relaxed text-gray-400">
            Sem uma pipeline robusta, você acaba fazendo deploy manual via SCP,
            reiniciando serviços na mão e rezando para que o modelo não falhe no
            primeiro pico de tráfego.
          </p>
        </section>

        {/* A arquitetura */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <GitBranch className="h-5 w-5 text-emerald-400" />
            </div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              A arquitetura do pipeline
            </h2>
          </div>
          <p className="mb-6 leading-relaxed text-gray-400">
            O fluxo que uso em produção segue cinco estágios sequenciais, cada um
            com gates de qualidade que impedem código ruim de chegar ao ambiente
            final:
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-5">
            {[
              { step: "1", label: "Git", desc: "Commit + PR" },
              { step: "2", label: "GitHub Actions", desc: "Lint + Testes" },
              { step: "3", label: "Docker", desc: "Build + Cache" },
              { step: "4", label: "Registry", desc: "Push da imagem" },
              { step: "5", label: "VPS", desc: "Deploy + Health" },
            ].map((s, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
              >
                <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-bold text-emerald-400">
                  {s.step}
                </span>
                <span className="text-sm font-medium text-white">{s.label}</span>
                <span className="mt-1 text-xs text-gray-500">{s.desc}</span>
                {i < 4 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-gray-600 sm:block" />
                )}
              </div>
            ))}
          </div>

          <p className="leading-relaxed text-gray-400">
            Cada pull request dispara o lint, testes unitários e testes de
            integração com o modelo. Se tudo passa, o GitHub Actions builda a
            imagem Docker em camadas otimizadas, faz push para um registry
            privado e notifica o servidor via webhook. O VPS baixa a nova imagem,
            executa health checks e substitui o container antigo apenas se o novo
            estiver saudável.
          </p>
        </section>

        {/* Docker para IA */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Container className="h-5 w-5 text-emerald-400" />
            </div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Docker para IA: como containerizar modelos de linguagem
            </h2>
          </div>
          <p className="mb-4 leading-relaxed text-gray-400">
            A chave para imagens enxutas é separar o runtime da aplicação dos
            pesos do modelo. Utilizo um Dockerfile multi-stage: a primeira etapa
            instala Python, PyTorch, transformers e dependências de inferência; a
            segunda copia apenas os artefatos necessários e expõe a porta da API.
          </p>
          <p className="mb-4 leading-relaxed text-gray-400">
            Os pesos do modelo ficam em um volume montado no host ou em um
            object storage S3, baixados no primeiro boot e mantidos em cache.
            Isso reduz a imagem de 18 GB para 2.3 GB, acelerando drasticamente o
            tempo de deploy. Para GPUs, uso a imagem base oficial da NVIDIA com
            CUDA 12.4 e cuDNN 9 — compatível com RTX 4090, A100 e H100.
          </p>
          <p className="leading-relaxed text-gray-400">
            Nunca commite pesos de modelo no repositório Git. Use Git LFS ou,
            preferencialmente, baixe via script de inicialização com checksum de
            integridade. Isso evita repositórios gigantes e garante reprodutibilidade.
          </p>
        </section>

        {/* Testes automatizados */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
            </div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Testes automatizados: validação de prompts e regressão de respostas
            </h2>
          </div>
          <p className="mb-4 leading-relaxed text-gray-400">
            Testar IA é diferente de testar CRUD. Respostas variam a cada
            execução, então precisamos de assertions probabilísticos e suites de
            benchmarking. Minha estratégia divide-se em três camadas:
          </p>
          <div className="mb-4 space-y-4">
            {[
              {
                title: "Testes de contrato",
                desc: "Verificam se a API responde com JSON válido, status 200 e campos obrigatórios preenchidos, independentemente do conteúdo gerado.",
              },
              {
                title: "Testes de consistência",
                desc: "Executam o mesmo prompt 10 vezes e medem a similaridade semântica entre as respostas. Se a coerência cair abaixo de 85%, o build falha.",
              },
              {
                title: "Testes de regressão",
                desc: "Comparam as respostas atuais com um golden dataset versionado. Diferenças significativas indicam drift no modelo ou no prompt engineering.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <h3 className="mb-1 text-sm font-semibold text-white">
                  {t.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="leading-relaxed text-gray-400">
            Esses testes rodam em GitHub Actions usando runners com 16 GB de RAM.
            Para modelos muito grandes, utilizo um runner self-hosted conectado a
            uma máquina com GPU, executando apenas os testes de regressão antes do
            merge.
          </p>
        </section>

        {/* Link contextual */}
        <section className="mb-12 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <Server className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
            <p className="leading-relaxed text-gray-300">
              A escolha da infraestrutura define se seu agente fica online ou cai
              no primeiro pico. Use um{" "}
              <a
                href="https://www.hostinger.com/br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf53-d52f-71ae-9a87-07f6a0b59c3e"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-400 underline underline-offset-4 transition-colors hover:text-emerald-300"
              >
                VPS dedicado para projetos de IA
              </a>{" "}
              com root access, recursos garantidos e uptime 99.9%.
            </p>
          </div>
        </section>

        {/* Monitoramento e rollback */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <TrendingUp className="h-5 w-5 text-emerald-400" />
            </div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Monitoramento e rollback
            </h2>
          </div>
          <p className="mb-4 leading-relaxed text-gray-400">
            Deploy sem observabilidade é voo às cegas. Após cada release, monitoro
            quatro sinais vitais: latência P95, taxa de erro, uso de GPU e custo
            por inferência. Esses dados são coletados por um sidecar leve que envia
            métricas para Prometheus e alertas para Slack.
          </p>
          <p className="mb-4 leading-relaxed text-gray-400">
            O rollback é automatizado: se a taxa de erro ultrapassar 2% em um
            período de 5 minutos, o sistema reverte para a imagem anterior em
            menos de 30 segundos. Isso é possível porque mantenho os dois últimos
            containers em standby, com health checks ativos e portas reservadas.
          </p>
          <p className="leading-relaxed text-gray-400">
            Logs estruturados em JSON facilitam a correlação entre requisições,
            prompts e respostas. Quando um usuário reporta uma resposta estranha,
            consigo rastrear exatamente qual versão do modelo, qual temperatura e
            qual contexto geraram aquela saída — essencial para debugging em
            produção.
          </p>
        </section>

        {/* Conclusão */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Globe className="h-5 w-5 text-emerald-400" />
            </div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Conclusão
            </h2>
          </div>
          <p className="mb-4 leading-relaxed text-gray-400">
            Em 2026, a diferença entre um agente de IA que funciona e um que
            brilha está na pipeline por trás dele. Automatizar build, testes e
            deploy não é luxo — é a única forma de escalar sem perder a sanidade
            mental da equipe.
          </p>
          <p className="mb-4 leading-relaxed text-gray-400">
            Comece pequeno: um Dockerfile otimizado, um workflow de GitHub Actions
            e um VPS confiável já colocam você à frente de 80% dos projetos no
            mercado. Depois, evolua para testes de regressão, blue-green deploy e
            métricas em tempo real. O importante é nunca fazer deploy manual de
            modelo em produção.
          </p>
          <p className="leading-relaxed text-gray-400">
            Se você está montando sua primeira infraestrutura de IA, invista em
            uma base sólida. O tempo economizado em troubleshooting será
            reinvestido em melhorar o modelo — e é isso que gera valor real para
            o usuário final.
          </p>
        </section>

        {/* Stack recomendada */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Server className="h-5 w-5 text-emerald-400" />
            </div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Stack recomendada por nível
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
              <h3 className="mb-2 text-sm font-semibold text-emerald-400">
                Iniciante
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                Ideal para MVPs e primeiros agentes. Deploy simplificado com
                painel intuitivo e suporte 24/7.
              </p>
              <a
                href="https://www.hostinger.com/br/cart?product=hosting%3Ahostinger_premium&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf50-9e17-73ea-939c-b98b535e64f9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-emerald-400"
              >
                Hospedagem com deploy simplificado
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
              <h3 className="mb-2 text-sm font-semibold text-emerald-400">
                Profissional
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                Controle total via SSH, Docker nativo e recursos dedicados para
                modelos de médio porte.
              </p>
              <a
                href="https://www.hostinger.com/br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf53-d52f-71ae-9a87-07f6a0b59c3e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-emerald-400"
              >
                VPS com controle total
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
              <h3 className="mb-2 text-sm font-semibold text-emerald-400">
                Escala
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                Alta disponibilidade, load balancing e recursos elásticos para
                agentes com milhares de usuários.
              </p>
              <a
                href="https://www.hostinger.com/br/cart?product=hosting%3Acloud_professional&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf52-23b9-7163-9984-1e590182a132"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-emerald-400"
              >
                Cloud para alta disponibilidade
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              © 2026 Felipe Souza. Todos os direitos reservados.
            </p>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Voltar para homepage
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
