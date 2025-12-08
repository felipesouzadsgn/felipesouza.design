'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import SectionWrapper from '../../../components/ui/SectionWrapper';
import ProductHeader from '../../../components/templates/ProductHeader';
import ProductStats from '../../../components/templates/ProductStats';
import ProductGallery from '../../../components/templates/ProductGallery';
import ProductContent from '../../../components/templates/ProductContent';
import TemplateCard from '../../../components/templates/TemplateCard';
import { TEMPLATES } from '../../../lib/templates';
import Reveal from '../../../components/ui/Reveal';
import Link from 'next/link'; // Import Link
import { ArrowLeft } from 'lucide-react'; // Import ArrowLeft


export default function TemplateDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const id = params?.id as string;

    const template = TEMPLATES.find(t => t.id === id);

    // Simple mock for related products (exclude current)
    const relatedTemplates = TEMPLATES.filter(t => t.id !== id && t.category === template?.category).slice(0, 3);
    // If not enough related by category, just take some others
    const fallbackRelated = TEMPLATES.filter(t => t.id !== id).slice(0, 3);
    const finalRelated = relatedTemplates.length > 0 ? relatedTemplates : fallbackRelated;

    if (!template) {
        return (
            <div className="min-h-screen bg-[#020202] text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Template not found</h1>
                    <button onClick={() => router.back()} className="text-gray-500 hover:text-white underline">Go back</button>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#020202] text-white selection:bg-white selection:text-black">
            {/* Back navigation */}
            <div className="pt-32 px-6 md:px-8 max-w-7xl mx-auto flex items-center justify-between mb-8">
                <Link
                    href="/templates"
                    className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm uppercase tracking-wider">Voltar</span>
                </Link>
            </div>

            <SectionWrapper id="product-details" className="pt-0 pb-20">
                <Reveal>
                    <ProductHeader template={template} />
                    <ProductStats metadata={template.metadata} />
                    <ProductGallery images={template.gallery} mainImage={template.imageUrl} title={template.title} />
                    <ProductContent template={template} />
                </Reveal>

                {/* Related Section */}
                <div className="border-t border-white/5 pt-20">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl font-bold text-white">Related Templates</h2>
                        <a href="/templates" className="text-sm text-gray-500 hover:text-white transition-colors">See All &rarr;</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {finalRelated.map(item => (
                            <TemplateCard key={item.id} template={item} />
                        ))}
                    </div>
                </div>

            </SectionWrapper>
        </main>
    );
}
