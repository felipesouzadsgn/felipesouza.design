'use client';

import React, { useState, useMemo } from 'react';
import SectionWrapper from '../../components/ui/SectionWrapper';
import TemplateCard from '../../components/templates/TemplateCard';
import TemplateFilters from '../../components/templates/TemplateFilters';
import { TEMPLATES, TemplateProduct } from '../../lib/templates';
import Reveal from '../../components/ui/Reveal';
import ProfileHeader from '../../components/ProfileHeader';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Extract unique platforms/categories for filter
const CATEGORIES = ['All', 'Figma', 'Framer', 'Code', 'Webflow', 'Other'];

export default function TemplatesPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTemplates = useMemo(() => {
        return TEMPLATES.filter(template => {
            const matchesCategory = selectedCategory === 'All'
                ? true
                : selectedCategory === 'Code'
                    ? ['React', 'Next.js', 'HTML/CSS'].includes(template.platform)
                    : selectedCategory === 'Other'
                        ? ['Canva', 'Elementor'].includes(template.platform)
                        : template.platform === selectedCategory;

            const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                template.description.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <main className="min-h-screen bg-[#020202] text-white selection:bg-white selection:text-black">
            {/* Custom Header Navigation */}
            <div className="pt-32 px-6 md:px-8 max-w-7xl mx-auto flex items-center justify-between mb-8">
                <Link
                    href="/"
                    className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm uppercase tracking-wider">Voltar</span>
                </Link>
            </div>

            <SectionWrapper id="templates" className="pt-0 pb-20">

                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Templates & <span className="text-gray-600">Assets</span>
                        </h1>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            Recursos de design e código premium para acelerar seu fluxo de trabalho. De UI Kits no Figma a templates completos em Next.js.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={200}>
                    <TemplateFilters
                        categories={CATEGORIES}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                    />

                    {filteredTemplates.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredTemplates.map((template, index) => (
                                <TemplateCard key={template.id} template={template} />
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center">
                            <p className="text-gray-500">Nenhum template encontrado para sua busca.</p>
                            <button
                                onClick={() => { setSelectedCategory('All'); setSearchQuery('') }}
                                className="mt-4 text-white underline hover:text-gray-300"
                            >
                                Limpar filtros
                            </button>
                        </div>
                    )}
                </Reveal>

            </SectionWrapper>
        </main>
    );
}
