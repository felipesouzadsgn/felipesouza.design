'use client';

import React from 'react';
import Link from 'next/link';
import { TemplateProduct } from '../../lib/templates';
import { Figma, Code, Layout, Smartphone, Globe, PenTool, Database, Layers } from 'lucide-react';
import { SiFramer, SiReact, SiNextdotjs, SiWebflow, SiHtml5, SiCanva, SiElementor } from 'react-icons/si';

interface TemplateCardProps {
    template: TemplateProduct;
}

const getPlatformIcon = (platform: string) => {
    switch (platform) {
        case 'Figma': return <Figma size={16} />;
        case 'Framer': return <SiFramer size={16} />;
        case 'React': return <SiReact size={16} />;
        case 'Next.js': return <SiNextdotjs size={16} />;
        case 'Webflow': return <SiWebflow size={16} />;
        case 'HTML/CSS': return <SiHtml5 size={16} />;
        case 'Canva': return <SiCanva size={16} />;
        case 'Elementor': return <SiElementor size={16} />;
        default: return <Code size={16} />;
    }
};

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
    return (
        <div className="group relative h-full">
            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                {/* Thumbnail */}
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                    <img
                        src={template.imageUrl}
                        alt={template.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Platform Badge (Overlay) */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 text-white rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs font-medium z-10">
                        {getPlatformIcon(template.platform)}
                        <span>{template.platform}</span>
                    </div>
                    {template.featured && (
                        <div className="absolute top-4 left-4 bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide z-10">
                            Featured
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{template.category}</span>
                        <span className={`text-sm font-bold ${typeof template.price === 'string' && template.price === 'Free' ? 'text-green-400' : 'text-white'}`}>
                            {typeof template.price === 'number' ? `$${template.price}` : template.price}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">{template.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow line-clamp-2">
                        {template.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {template.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Full Card Link Overlay */}
            <Link href={`/templates/${template.id}`} className="absolute inset-0 z-20" aria-label={`View details for ${template.title}`}>
                <span className="sr-only">View details</span>
            </Link>
        </div>
    );
};

export default TemplateCard;
