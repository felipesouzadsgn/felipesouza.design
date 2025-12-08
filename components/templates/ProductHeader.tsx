'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Play, ShoppingCart } from 'lucide-react';
import { TemplateProduct } from '../../lib/templates';

interface ProductHeaderProps {
    template: TemplateProduct;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ template }) => {
    return (
        <div className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-500 font-mono uppercase tracking-wider mb-6">
                <Link href="/templates" className="hover:text-white transition-colors">Categories</Link>
                <span>&gt;</span>
                <span className="text-gray-400">{template.category}</span>
                <span>&gt;</span>
                <span className="text-white">{template.title.split(' - ')[0]}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {template.title}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
                {template.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
                <a
                    href={template.buyUrl}
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
                >
                    <ShoppingCart size={18} />
                    <span>Purchase for {typeof template.price === 'number' ? `$${template.price}` : 'Free'}</span>
                </a>

                {template.previewUrl && (
                    <a
                        href={template.previewUrl}
                        className="flex items-center gap-2 bg-white/5 text-white border border-white/10 px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
                    >
                        <Play size={18} />
                        <span>Preview</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProductHeader;
