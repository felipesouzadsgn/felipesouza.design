<div align="center">
  
# 🎨 Felipe Souza Design

### Portfolio Profissional | UI/UX Design & Web Development

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[🌐 Ver Demo](https://felipesouza.design) • [📧 Contato](mailto:felipesouzadsgn@gmail.com)

</div>

---

## 📋 Sobre o Projeto

Portfolio profissional de última geração construído com **Next.js 14** e **TypeScript**, apresentando uma experiência interativa e moderna para showcasing de projetos de design e desenvolvimento web. O site combina elementos 3D, animações fluidas e integração com IA para criar uma experiência única para visitantes e potenciais clientes.

### ✨ Destaques

- 🤖 **Agent Design**: Assistente virtual inteligente powered by Groq AI (LLaMA 3.3)
- 🎯 **Briefing Interativo**: Sistema completo de coleta de informações de projetos
- 🎨 **Design System**: Interface dark mode com ambient cursor effects
- 📱 **Totalmente Responsivo**: Otimizado para todos os dispositivos
- ⚡ **Performance**: SSR com Next.js App Router
- 🎭 **Animações Avançadas**: Framer Motion e React Three Fiber
- 📊 **Calculadora de Projetos**: Estimativa dinâmica de valores

---

## 🚀 Tecnologias Utilizadas

### Core
- **Next.js 14.2** - React Framework com App Router
- **TypeScript 5.8** - Tipagem estática
- **React 18.3** - Biblioteca UI
- **Tailwind CSS 4.1** - Framework CSS utility-first

### UI/UX & Animações
- **Framer Motion 12.23** - Animações e transições
- **React Three Fiber 8.18** - Elementos 3D com Three.js
- **@react-three/drei 9.102** - Helpers para R3F
- **Lucide React 0.555** - Ícones modernos
- **React Icons 5.5** - Biblioteca de ícones

### IA & Backend
- **Groq SDK 0.37** - API para Agent Design (LLaMA 3.3)
- **@google/genai 1.31** - Google Generative AI
- **Supabase 2.89** - Database e autenticação

### Physics & Interatividade
- **Matter.js 0.20** - Engine de física 2D
- **Three.js 0.182** - Biblioteca 3D

### Content & Markdown
- **React Markdown 10.1** - Renderização de Markdown
- **Remark GFM 4.0** - GitHub Flavored Markdown
- **Rehype Highlight 7.0** - Syntax highlighting

---

## 📁 Estrutura do Projeto

```
felipesouza.design/
├── app/                          # App Router (Next.js 14)
│   ├── agent/                    # Página do Agent Design
│   ├── api/                      # API Routes
│   │   └── chat/                 # Endpoint de chat com IA
│   ├── briefing/                 # Formulário de briefing
│   ├── links/                    # Página de links sociais
│   ├── projects/                 # Páginas de projetos
│   ├── proposta/                 # Sistema de propostas
│   ├── styleguide/               # Guia de estilo
│   ├── templates/                # Templates de documentos
│   ├── layout.tsx                # Layout global
│   ├── page.tsx                  # Página inicial
│   └── globals.css               # Estilos globais
│
├── components/                   # Componentes React
│   ├── briefing/                 # Componentes do briefing
│   │   └── BriefingForm.tsx
│   ├── layout/                   # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── providers/                # Context providers
│   ├── sections/                 # Seções da landing page
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── AboutBento.tsx
│   │   ├── Calculator.tsx
│   │   ├── Contact.tsx
│   │   ├── AgentDesign.tsx
│   │   └── ...
│   ├── templates/                # Templates reutilizáveis
│   ├── ui/                       # Componentes UI
│   │   ├── ChatWidget.tsx        # Widget de chat flutuante
│   │   ├── AISphere.tsx          # Esfera 3D interativa
│   │   ├── Reveal.tsx            # Animações de reveal
│   │   └── ...
│   ├── HomeClient.tsx            # Client component principal
│   └── ProfileHeader.tsx         # Header do perfil
│
├── lib/                          # Utilitários e configurações
│   ├── constants.tsx             # Constantes e dados estáticos
│   ├── supabaseClient.ts         # Cliente Supabase
│   ├── templates.ts              # Templates de documentos
│   └── types.ts                  # Definições de tipos TS
│
├── public/                       # Assets estáticos
│   ├── assets/                   # Imagens e recursos
│   └── video/                    # Vídeos
│
├── next.config.mjs               # Configuração Next.js
├── tailwind.config.ts            # Configuração Tailwind
├── tsconfig.json                 # Configuração TypeScript
└── package.json                  # Dependências
```

---

## 🛠️ Instalação e Configuração

### Pré-requisitos

- **Node.js** 18.x ou superior
- **npm** ou **yarn** ou **pnpm**

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/seu-usuario/felipesouza.design.git
cd felipesouza.design
```

### 2️⃣ Instale as Dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3️⃣ Configure as Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Groq AI (Agent Design)
GROQ_API_KEY=your_groq_api_key_here

# Google Generative AI (Opcional)
GEMINI_API_KEY=your_gemini_api_key_here

# Supabase (Se utilizar)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**🔑 Como obter as API Keys:**
- **Groq**: [console.groq.com](https://console.groq.com)
- **Gemini**: [ai.google.dev](https://ai.google.dev)
- **Supabase**: [supabase.com](https://supabase.com)

### 4️⃣ Execute o Servidor de Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📦 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa ESLint
```

---

## 🎯 Funcionalidades Principais

### 🤖 Agent Design
Assistente virtual inteligente que auxilia visitantes a criar briefings de projetos. Utiliza Groq AI com modelo LLaMA 3.3 70B para conversas naturais e coleta estruturada de informações.

**Características:**
- Chat em tempo real com streaming de respostas
- Formatação de markdown com syntax highlighting
- Contexto persistente durante a conversa
- Interface minimalista e moderna

### 📋 Sistema de Briefing
Formulário interativo completo para coleta de informações de projetos, incluindo:
- Dados do cliente
- Tipo de serviço (UI/UX, Development, Mobile, IA)
- Orçamento e cronograma
- Referências e inspirações
- Requisitos técnicos

### 🎨 Portfolio Showcase
Exibição de projetos com:
- Cards interativos com hover effects
- Galeria de imagens
- Tags e categorias
- Links para demos e repositórios
- Descrições detalhadas com features

### 💰 Calculadora de Projetos
Sistema de estimativa dinâmica baseado em:
- Tipo de projeto
- Complexidade
- Número de páginas/telas
- Funcionalidades extras
- Prazo de entrega

### 🌐 Seções da Landing Page

1. **Hero** - Apresentação com efeitos visuais e CTA
2. **Projects** - Showcase de projetos em destaque
3. **About Bento** - Grid interativo com informações pessoais
4. **Calculator** - Calculadora de investimento
5. **Contact** - Formulário e informações de contato

---

## 🎨 Design System

### Paleta de Cores

```css
/* Background */
--bg-primary: #020202
--bg-secondary: #0a0a0a

/* Text */
--text-primary: #e5e5e5
--text-secondary: #a1a1a1
--text-muted: #737373

/* Accents */
--accent-white: #ffffff
--accent-glow: rgba(255, 255, 255, 0.05)
```

### Tipografia

- **Sans**: Inter (Body)
- **Mono**: JetBrains Mono (Code)
- **Display**: Space Grotesk (Headings)
- **Secondary**: Raleway, REM

### Efeitos

- **Ambient Cursor**: Efeito de luz seguindo o mouse
- **Glass Morphism**: Elementos com backdrop blur
- **Hover Effects**: Transformações sutis em cards
- **Scroll Reveal**: Animações on scroll com Framer Motion

---

## 🚀 Deploy

### Vercel (Recomendado)

O projeto está otimizado para deploy na Vercel:

1. Faça push do código para GitHub
2. Importe o projeto na Vercel
3. Configure as variáveis de ambiente
4. Deploy automático!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Outras Plataformas

O projeto também pode ser deployado em:
- **Netlify**
- **Railway**
- **AWS Amplify**
- **Google Cloud Run**

---

## 🔧 Personalização

### Alterando Informações Pessoais

Edite o arquivo `lib/constants.tsx`:

```typescript
export const SOCIAL_LINKS = {
  instagram: "seu_instagram",
  linkedin: "seu_linkedin",
  github: "seu_github",
  whatsapp: "seu_whatsapp",
  email: "seu_email@exemplo.com"
};
```

### Adicionando Projetos

```typescript
export const PROJECTS: Project[] = [
  {
    id: "projeto-exemplo",
    title: "Nome do Projeto",
    category: "Categoria / Tipo",
    image: "url_da_imagem",
    tags: ["Tag1", "Tag2", "Tag3"],
    longDescription: "Descrição detalhada...",
    features: ["Feature 1", "Feature 2"],
    gallery: ["img1.jpg", "img2.jpg"],
    liveUrl: "https://exemplo.com",
    repoUrl: "https://github.com/..."
  }
];
```

---

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Bundle Size**: Otimizado com code splitting
- **SEO**: Meta tags otimizadas

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto é de código aberto para fins educacionais. Sinta-se livre para usar como referência ou template para seu próprio portfolio.

---

## 📞 Contato

**Felipe Souza**

- 🌐 Website: [felipesouza.design](https://felipesouza.design)
- 📧 Email: felipesouzadsgn@gmail.com
- 💼 LinkedIn: [@felipesouzadsgn](https://linkedin.com/in/felipesouzadsgn)
- 📸 Instagram: [@felipesouzadsgn](https://instagram.com/felipesouzadsgn)
- 💬 WhatsApp: [+55 13 99643-2357](https://wa.me/5513996432357)

---

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) pela incrível framework
- [Vercel](https://vercel.com/) pelo hosting
- [Groq](https://groq.com/) pela API de IA
- [Unsplash](https://unsplash.com/) pelas imagens
- Comunidade open source pelos recursos

---

<div align="center">

**Feito com ❤️ e muito ☕ por Felipe Souza**

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>