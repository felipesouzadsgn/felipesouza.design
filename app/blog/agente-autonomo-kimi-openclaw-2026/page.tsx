import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Server,
  Shield,
  TrendingUp,
  Clock,
  Cpu,
  Layers,
  Terminal,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Como Construir um Agente Autônomo com Kimi e OpenClaw em 2026 | Felipe Souza",
  description:
    "Guia completo 2026 para construir agentes de IA autônomos com Kimi, OpenClaw e GPT-5. Arquitetura, deploy, infraestrutura VPS e automação inteligente sem intervenção humana.",
  keywords: [
    "agente autônomo IA 2026",
    "Kimi AI tutorial",
    "OpenClaw guia",
    "GPT-5 deploy",
    "automação inteligente",
    "VPS para agentes",
    "IA produção",
    "agente 24/7",
  ],
  openGraph: {
    title: "Como Construir um Agente Autônomo com Kimi e OpenClaw em 2026 | Felipe Souza",
    description:
      "Guia completo 2026 para construir agentes de IA autônomos com Kimi, OpenClaw e GPT-5. Arquitetura, deploy, infraestrutura VPS e automação inteligente sem intervenção humana.",
    type: "article",
    publishedTime: "2026-04-24T00:00:00.000Z",
    authors: ["Felipe Souza"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Agente autônomo com Kimi e OpenClaw em 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Como Construir um Agente Autônomo com Kimi e OpenClaw em 2026 | Felipe Souza",
    description:
      "Guia completo 2026 para construir agentes de IA autônomos com Kimi, OpenClaw e GPT-5. Arquitetura, deploy, infraestrutura VPS e automação inteligente sem intervenção humana.",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

export default function AgenteAutonomoPostPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="mx-auto max-w-3xl px-6 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a homepage
        </Link>
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-3xl px-6 pt-12">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            <Terminal className="h-3 w-3" />
            Dev
          </span>
          <span className="text-sm text-gray-500">24 Abr 2026</span>
          <span className="text-sm text-gray-500">·</span>
          <span className="inline-flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-3.5 w-3.5" />
            14 min de leitura
          </span>
        </div>

        <h1 className="mb-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Como Construir um Agente Autônomo com Kimi e OpenClaw em 2026
        </h1>

        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
          alt="Ilustração de inteligência artificial e automação"
          className="mb-2 w-full rounded-2xl border border-white/10 object-cover"
        />
        <p className="mb-12 text-xs text-gray-500">
          Ilustração conceitual: agentes de IA autônomos orquestrando tarefas complexas em 2026.
        </p>
      </header>

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-6 pb-24">
        {/* Introdução */}
        <section className="mb-14">
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            Agentes de IA autônomos são a nova fronteira da produtividade em 2026. O que era
            ficção científica virou ferramenta de trabalho. Hoje, qualquer desenvolvedor com um
            VPS acessível e conhecimento básico de APIs pode colocar no ar um sistema que
            raciocina, toma decisões e executa ações sem precisar de intervenção humana a cada
            passo.
          </p>
          <p className="text-base leading-relaxed text-gray-400">
            Neste guia, vou mostrar exatamente como construí meu próprio agente autônomo usando
            três peças-chave: o modelo de raciocínio Kimi, a plataforma de ações OpenClaw e a
            geração de linguagem do GPT-5. O resultado é um sistema 24/7 que reduziu em 70% o
            tempo que eu gastava em tarefas operacionais repetitivas.
          </p>
        </section>

        {/* O que é um agente autônomo? */}
        <section className="mb-14">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <Bot className="h-6 w-6 text-gray-300" />
            O que é um agente autônomo?
          </h2>
          <p className="mb-5 text-base leading-relaxed text-gray-400">
            Um agente autônomo de IA é um sistema software que percebe o ambiente, toma decisões
            com base em objetivos pré-definidos e executa ações para atingir esses objetivos —
            tudo isso sem precisar que um humano digite um prompt a cada interação.
          </p>
          <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Chatbot vs. Agente Autônomo
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/5 bg-black/30 p-5">
                <div className="mb-2 text-sm font-medium text-white">Chatbot tradicional</div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-600" />
                    Responde apenas quando questionado
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-600" />
                    Não inzia ações por conta própria
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-600" />
                    Contexto limitado à conversa atual
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-600" />
                    Depende de input humano contínuo
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/5 bg-black/30 p-5">
                <div className="mb-2 text-sm font-medium text-white">Agente autônomo</div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    Inicia tarefas sozinho com base em gatilhos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    Executa ações em ferramentas externas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    Mantém memória de longo prazo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    Opera 24/7 sem supervisão direta
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-base leading-relaxed text-gray-400">
            Exemplos práticos incluem: um agente que monitora o preço de ativos e executa
            ordens automaticamente; um agente de suporte que lê tickets, busca na base de
            conhecimento e responde sozinho; ou um agente de marketing que gera conteúdo,
            publica e analisa métricas sem parar.
          </p>
        </section>

        {/* Arquitetura */}
        <section className="mb-14">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <Layers className="h-6 w-6 text-gray-300" />
            A arquitetura que uso
          </h2>
          <p className="mb-5 text-base leading-relaxed text-gray-400">
            A arquitetura do meu agente é modular. Cada componente tem uma responsabilidade única
            e se comunica via APIs RESTful. Essa separação permite trocar peças facilmente — se
            amanhã surgir um modelo melhor que o Kimi, a substituição leva minutos, não dias.
          </p>
          <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Diagrama conceitual
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Zap className="h-5 w-5 text-yellow-400" />
                </div>
                <div>
                  <div className="font-medium text-white">Kimi — Motor de Raciocínio</div>
                  <div className="text-sm text-gray-400">
                    Responsável pelo planejamento, decomposição de tarefas e tomada de decisões
                    estratégicas.
                  </div>
                </div>
              </div>
              <div className="ml-6 h-6 w-px bg-white/10" />
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Cpu className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-medium text-white">OpenClaw — Orquestrador de Ações</div>
                  <div className="text-sm text-gray-400">
                    Conecta o raciocínio à execução: chamadas de API, manipulação de banco de
                    dados, automação de browser.
                  </div>
                </div>
              </div>
              <div className="ml-6 h-6 w-px bg-white/10" />
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Bot className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <div className="font-medium text-white">GPT-5 — Geração de Linguagem</div>
                  <div className="text-sm text-gray-400">
                    Produz textos naturais, respostas a clientes, relatórios e documentação com
                    tom e contexto apropriados.
                  </div>
                </div>
              </div>
              <div className="ml-6 h-6 w-px bg-white/10" />
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Server className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="font-medium text-white">VPS — Infraestrutura 24/7</div>
                  <div className="text-sm text-gray-400">
                    Servidor dedicado que mantém o agente rodando continuamente, com acesso root
                    e recursos garantidos.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-base leading-relaxed text-gray-400">
            O fluxo funciona assim: um gatilho (cron, webhook ou evento de sistema) aciona o
            Kimi, que planeja os passos necessários. Cada passo é traduzido em uma ação
            executável pelo OpenClaw. Se a ação exigir comunicação humana, o GPT-5 gera a
            mensagem. Tudo é logado e monitorado em tempo real.
          </p>
        </section>

        {/* Passo a passo */}
        <section className="mb-14">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <Terminal className="h-6 w-6 text-gray-300" />
            Passo a passo do setup
          </h2>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white">
                1
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-white">
                  Provisione um VPS com recursos garantidos
                </h3>
                <p className="text-base leading-relaxed text-gray-400">
                  Um agente autônomo não pode dormir. Escolha um VPS com pelo menos 2 vCPU e 4GB
                  de RAM. Para rodar isso em produção com latência baixa e uptime garantido, use
                  um{" "}
                  <a
                    href="https://www.hostinger.com/br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf53-d52f-71ae-9a87-07f6a0b59c3e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline underline-offset-4 transition-opacity hover:opacity-80"
                  >
                    VPS dedicado para agentes de IA
                  </a>{" "}
                  com recursos garantidos e root access. Instale o Node.js, Docker e configure o
                  PM2 para gerenciamento de processos.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white">
                2
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-white">
                  Configure as credenciais de API
                </h3>
                <p className="text-base leading-relaxed text-gray-400">
                  Crie contas na plataforma da Moonshot AI (Kimi), na OpenClaw e na OpenAI
                  (GPT-5). Armazene as chaves em variáveis de ambiente nunca no código. Use um
                  arquivo <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm">.env</code>{" "}
                  com permissões restritas e considere um vault como o HashiCorp Vault para
                  ambientes de produção.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white">
                3
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-white">
                  Desenvolva o loop de raciocínio
                </h3>
                <p className="text-base leading-relaxed text-gray-400">
                  O coração do agente é o loop: observar → planejar → agir → verificar. Use o
                  Kimi para gerar planos estruturados em JSON a partir de objetivos em linguagem
                  natural. Cada tarefa deve ter campos claros: ação, parâmetros, dependências e
                  critério de sucesso.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white">
                4
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-white">
                  Integre o OpenClaw para execução
                </h3>
                <p className="text-base leading-relaxed text-gray-400">
                  Mapeie cada tipo de ação do seu plano para uma função do OpenClaw. Isso inclui
                  requisições HTTP, interações com banco de dados, envio de e-mails e
                  automação de navegador. Teste cada ação isoladamente antes de conectar ao
                  loop principal.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white">
                5
              </div>
              <div>
                <h3 className="mb-2 text-lg font-medium text-white">Deploy e monitoramento</h3>
                <p className="text-base leading-relaxed text-gray-400">
                  Suba o código para o VPS usando Git. Configure o PM2 para manter o processo
                  vivo, o Nginx como reverse proxy e o SSL via Certbot. Implemente logs
                  estruturados e alertas (Telegram, Slack ou e-mail) para quando o agente
                  encontrar erros ou situações inesperadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* O gargalo da infraestrutura */}
        <section className="mb-14">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <Server className="h-6 w-6 text-gray-300" />
            O gargalo da infraestrutura
          </h2>
          <p className="mb-5 text-base leading-relaxed text-gray-400">
            O erro mais comum entre desenvolvedores que estão começando com agentes autônomos é
            achar que rodar em localhost é suficiente. Não é. Um agente que depende do seu
            notebook está sujeito a quedas de Wi-Fi, desligamento do computador, oscilação de IP
            e limitação de recursos.
          </p>
          <div className="mb-5 rounded-2xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-2xl">
            <p className="text-base leading-relaxed text-gray-300">
              Para rodar isso em produção com latência baixa e uptime garantido, use um{" "}
              <a
                href="https://www.hostinger.com/br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf53-d52f-71ae-9a87-07f6a0b59c3e"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white underline underline-offset-4 transition-opacity hover:opacity-80"
              >
                VPS dedicado para agentes de IA
              </a>{" "}
              com recursos garantidos e root access.
            </p>
          </div>
          <p className="text-base leading-relaxed text-gray-400">
            Um VPS dedicado oferece IP fixo, banda garantida, uptime de 99,9% e isolamento de
            recursos. Isso significa que seu agente nunca será interrompido porque outro usuário
            no mesmo servidor consumiu toda a CPU. Além disso, o acesso root permite instalar
            qualquer dependência, configurar cron jobs personalizados e otimizar o kernel para
            baixa latência.
          </p>
        </section>

        {/* Segurança e monitoramento */}
        <section className="mb-14">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <Shield className="h-6 w-6 text-gray-300" />
            Segurança e monitoramento
          </h2>
          <p className="mb-5 text-base leading-relaxed text-gray-400">
            Um agente autônomo tem poder de executar ações no mundo real. Isso é ótimo para a
            produtividade, mas perigoso se mal configurado. A primeira regra é: nunca dê ao
            agente mais permissões do que o necessário. Use o princípio do menor privilégio em
            todas as integrações.
          </p>
          <ul className="mb-5 space-y-3 text-base text-gray-400">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
              <span>
                <strong className="text-white">Escopo rígido:</strong> defina exatamente quais
                ações são permitidas e bloqueie tudo o mais via whitelist.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
              <span>
                <strong className="text-white">Rate limiting:</strong> limite o número de ações
                por minuto para evitar loops infinitos ou gastos excessivos com APIs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
              <span>
                <strong className="text-white">Logs auditáveis:</strong> registre cada decisão,
                cada ação e cada erro com timestamp e contexto completo.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
              <span>
                <strong className="text-white">Kill switch:</strong> mantenha um mecanismo para
                interromper o agente remotamente em segundos, caso algo saia do controle.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
              <span>
                <strong className="text-white">Revisão humana periódica:</strong> mesmo
                autônomo, o agente deve ter checkpoints onde um humano valida decisões críticas.
              </span>
            </li>
          </ul>
          <p className="text-base leading-relaxed text-gray-400">
            Monitore o agente com dashboards em tempo real. Eu uso uma stack simples: Grafana
            para visualização, Loki para logs e Uptime Kuma para alertas de disponibilidade.
            O custo é baixo e a visibilidade é total.
          </p>
        </section>

        {/* Resultados reais */}
        <section className="mb-14">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <TrendingUp className="h-6 w-6 text-gray-300" />
            Resultados reais
          </h2>
          <p className="mb-6 text-base leading-relaxed text-gray-400">
            Depois de 3 meses rodando o agente autônomo em produção, os números são claros:
          </p>
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-2xl">
              <div className="mb-1 text-3xl font-bold text-white">70%</div>
              <div className="text-sm text-gray-400">Redução de tarefas operacionais</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-2xl">
              <div className="mb-1 text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Disponibilidade contínua</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-2xl">
              <div className="mb-1 text-3xl font-bold text-white">&lt;2s</div>
              <div className="text-sm text-gray-400">Tempo médio de resposta</div>
            </div>
          </div>
          <p className="text-base leading-relaxed text-gray-400">
            O agente processa em média 400 ações por dia, desde responder e-mails até gerar
            relatórios de desempenho. O tempo que eu dedicava a essas tarefas agora vai para
            estratégia, desenvolvimento de novos produtos e criatividade. O ROI do projeto se
            pagou no primeiro mês, considerando apenas o valor do meu tempo libertado.
          </p>
        </section>

        {/* Conclusão */}
        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-semibold text-white">Conclusão</h2>
          <p className="mb-5 text-base leading-relaxed text-gray-400">
            Construir um agente autônomo em 2026 não é mais uma questão de se, mas de quando.
            As ferramentas estão maduras, a infraestrutura é acessível e o conhecimento necessário
            está ao alcance de qualquer desenvolvedor com vontade de aprender.
          </p>
          <p className="mb-5 text-base leading-relaxed text-gray-400">
            O caminho que tracei aqui — Kimi para raciocínio, OpenClaw para ações, GPT-5 para
            linguagem e VPS para hospedagem — é apenas uma das possíveis configurações. O
            importante é começar com um problema real, construir iterativamente e nunca ignorar
            a segurança.
          </p>
          <p className="text-base leading-relaxed text-gray-400">
            Próximos passos sugeridos: escolha uma tarefa repetitiva do seu dia a dia, desenhe
            o fluxo de decisão em papel, monte um MVP em um fim de semana e coloque para rodar
            em um ambiente controlado. A partir daí, é só escalar.
          </p>
        </section>

        {/* Stack recomendada */}
        <section className="mb-14">
          <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
            <Cpu className="h-6 w-6 text-gray-300" />
            Stack recomendada
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition-colors hover:bg-white/[0.07]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-400">
                1
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Iniciante</div>
                <a
                  href="https://www.hostinger.com/br/cart?product=hosting%3Ahostinger_premium&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf50-9e17-73ea-939c-b98b535e64f9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-medium text-white underline underline-offset-4 transition-opacity hover:opacity-80"
                >
                  hospedagem simples para testes
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition-colors hover:bg-white/[0.07]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-400">
                2
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Profissional</div>
                <a
                  href="https://www.hostinger.com/br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf53-d52f-71ae-9a87-07f6a0b59c3e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-medium text-white underline underline-offset-4 transition-opacity hover:opacity-80"
                >
                  VPS ideal para rodar agentes
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl transition-colors hover:bg-white/[0.07]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-400">
                3
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500">Escala</div>
                <a
                  href="https://www.hostinger.com/br/cart?product=hosting%3Acloud_professional&period=12&referral_type=cart_link&REFERRALCODE=6KVFELIPESPY&referral_id=019dcf52-23b9-7163-9984-1e590182a132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-medium text-white underline underline-offset-4 transition-opacity hover:opacity-80"
                >
                  infraestrutura cloud para escalar
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a homepage
          </Link>
        </footer>
      </article>
    </main>
  );
}
