import { ReactNode } from 'react';

export type TemplatePlatform = 'Figma' | 'Framer' | 'Next.js' | 'React' | 'Webflow' | 'HTML/CSS' | 'Canva' | 'Elementor';

export interface TemplateMetadata {
    creator: string;
    updatedAt: string;
    pagesCount: number;
    views: string;
    version: string;
}

export interface TemplateProduct {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    price: number | 'Free';
    platform: TemplatePlatform;
    category: 'Business' | 'Creative' | 'E-commerce' | 'Portfolio' | 'SaaS' | 'Landing Page';
    imageUrl: string;
    gallery?: string[];
    buyUrl: string;
    previewUrl?: string;
    tags: string[];
    featured?: boolean;
    features?: string[];
    includedPages?: string[];
    metadata?: TemplateMetadata;
}

export const TEMPLATES: TemplateProduct[] = [
    {
        id: '1',
        title: 'Lumina - SaaS Dark Mode',
        description: 'Template moderno para startups SaaS com foco em conversão e estética dark.',
        longDescription: `
            Lumina é um template SaaS premium projetado para fundadores ocupados que desejam lançar rápido e obter mais usuários em horas, não semanas. 
            É criado para manter sua impressionante textura visual mesmo depois de você carregar seus próprios ativos.
            
            Construído com estética moderna e princípios de conversão comprovados, ele mantém seu apelo visual impressionante mesmo após a personalização com seu próprio conteúdo e ativos.
            
            O que torna o Lumina diferente?
            Não é apenas um template. É tudo o que você precisa para lançar seu SaaS.
        `,
        price: 49,
        platform: 'Framer',
        category: 'SaaS',
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
        gallery: [
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
        ],
        buyUrl: '#',
        previewUrl: '#',
        tags: ['Dark Mode', 'SaaS', 'Modern'],
        featured: true,
        features: [
            "Site deslumbrante que converte visitantes em clientes",
            "Copywriting de landing page de alta conversão: Estrutura delineada com fórmulas comprovadas",
            "Página de lead magnet pré-lançamento: Não está pronto para lançar? Sem problemas.",
            "Fluxo de trabalho de aprimoramento visual",
            "CMS integrado para Blog e Atualizações"
        ],
        includedPages: [
            "Landing Page (Conversion-optimized)",
            "Pricing Page (Comparison table)",
            "About Section",
            "Blog Index & Detail",
            "Updates Index & Detail",
            "Waitlist Page",
            "Careers Index & Detail",
            "Contact",
            "Privacy Policy"
        ],
        metadata: {
            creator: "Felipe Souza",
            updatedAt: "2 days ago",
            pagesCount: 12,
            views: "2.4K",
            version: "1.2.0"
        }
    },
    {
        id: '2',
        title: 'Aspect - Minimal Portfolio',
        description: 'Portfolio minimalista para designers e fotógrafos. Foco em tipografia.',
        longDescription: 'Um portfolio limpo e direto ao ponto, ideal para criativos que querem deixar seu trabalho falar por si só. Focado em tipografia suíça e espaços em branco.',
        price: 'Free',
        platform: 'Figma',
        category: 'Portfolio',
        imageUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2680&auto=format&fit=crop',
        buyUrl: '#',
        tags: ['Minimal', 'Clean', 'Portfolio'],
        metadata: {
            creator: "Felipe Souza",
            updatedAt: "5 days ago",
            pagesCount: 5,
            views: "1.1K",
            version: "1.0.0"
        }
    },
    {
        id: '3',
        title: 'Nexus - Admin Dashboard',
        description: 'Dashboard administrativo completo com gráficos, tabelas e autenticação.',
        price: 79,
        platform: 'React',
        category: 'Business',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
        buyUrl: '#',
        tags: ['Dashboard', 'Admin', 'React'],
        featured: true,
        metadata: {
            creator: "Felipe Souza",
            updatedAt: "1 week ago",
            pagesCount: 20,
            views: "3.2K",
            version: "2.1.0"
        }
    },
    {
        id: '4',
        title: 'Ventura - Agency Landing',
        description: 'Landing page de alta conversão para agências digitais e estúdios.',
        price: 29,
        platform: 'Webflow',
        category: 'Landing Page',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        buyUrl: '#',
        tags: ['Agency', 'Colorful', 'Animation'],
        metadata: {
            creator: "NextLevel",
            updatedAt: "3 weeks ago",
            pagesCount: 1,
            views: "850",
            version: "1.0.0"
        }
    },
    {
        id: '5',
        title: 'Orbital - 3D Landing Page',
        description: 'Template com integrações Three.js e animações de scroll avançadas.',
        price: 59,
        platform: 'Next.js',
        category: 'Creative',
        imageUrl: 'https://images.unsplash.com/photo-1634024520978-2c25608c02c6?q=80&w=2576&auto=format&fit=crop',
        buyUrl: '#',
        tags: ['3D', 'Three.js', 'Next.js'],
        metadata: {
            creator: "Felipe Souza",
            updatedAt: "1 month ago",
            pagesCount: 3,
            views: "5.6K",
            version: "1.5.0"
        }
    },
    {
        id: '6',
        title: 'Estate - Real Estate Kit',
        description: 'Kit completo de UI para plataformas imobiliárias. +50 telas.',
        price: 39,
        platform: 'Figma',
        category: 'Business',
        imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop',
        buyUrl: '#',
        tags: ['Real Estate', 'UI Kit', 'Mobile'],
        metadata: {
            creator: "Felipe Souza",
            updatedAt: "2 months ago",
            pagesCount: 50,
            views: "900",
            version: "1.0.0"
        }
    },
    {
        id: '7',
        title: 'Mono - Blog Template',
        description: 'Template de blog clean focado em leitura e SEO. Markdown nativo.',
        price: 'Free',
        platform: 'HTML/CSS',
        category: 'Business',
        imageUrl: 'https://images.unsplash.com/photo-1499750310159-5254f41265aa?q=80&w=2667&auto=format&fit=crop',
        buyUrl: '#',
        tags: ['Blog', 'SEO', 'Fast'],
        metadata: {
            creator: "SimpleCode",
            updatedAt: "1 day ago",
            pagesCount: 4,
            views: "450",
            version: "1.1.0"
        }
    },
    {
        id: '8',
        title: 'Fashion - E-commerce',
        description: 'Loja virtual moderna com galeria de produtos e carrinho funcional.',
        price: 69,
        platform: 'Elementor',
        category: 'E-commerce',
        imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop',
        buyUrl: '#',
        tags: ['Shop', 'Fashion', 'Wordpress'],
        metadata: {
            creator: "WPPro",
            updatedAt: "4 days ago",
            pagesCount: 8,
            views: "1.2K",
            version: "2.0.0"
        }
    },
    {
        id: '9',
        title: 'Social - Media Kit',
        description: 'Pacote de templates para redes sociais editáveis no Canva.',
        price: 19,
        platform: 'Canva',
        category: 'Creative',
        imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop',
        buyUrl: '#',
        tags: ['Social Media', 'Instagram', 'Canva'],
        metadata: {
            creator: "CreateDaily",
            updatedAt: "1 week ago",
            pagesCount: 30,
            views: "3.0K",
            version: "1.0.0"
        }
    }
];
