'use client';

import React from 'react';
import { TemplateProduct } from '../../lib/templates';
import { Check, Figma, Layout, FileText, Code } from 'lucide-react';

interface ProductContentProps {
    template: TemplateProduct;
}

const ProductContent: React.FC<ProductContentProps> = ({ template }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mb-20">

            {/* Left Column: Description & Features */}
            <div className="lg:col-span-2 space-y-12">

                {/* Long Description */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">About this template</h3>
                    <div className="prose prose-invert text-gray-400 leading-relaxed whitespace-pre-line">
                        <p>{template.longDescription || template.description}</p>
                    </div>
                </div>

                {/* What makes it unique / Features */}
                {template.features && (
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">What makes {template.title.split(' - ')[0]} different?</h3>
                        <ul className="space-y-4">
                            {template.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-white"></div>
                                    </div>
                                    <span className="text-gray-400">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>


            {/* Right Column: Sidebar Specs */}
            <div className="space-y-10">

                {/* Platform Spec */}
                <div>
                    <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Platform</h4>
                    <div className="flex items-center gap-2 text-gray-400 p-3 rounded-lg bg-white/5 border border-white/5">
                        <Layout size={20} />
                        <span>{template.platform}</span>
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Category</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-sm text-gray-400 hover:text-white transition-colors cursor-default">
                            # {template.category}
                        </span>
                        {template.tags.map(tag => (
                            <span key={tag} className="text-sm text-gray-500 hover:text-white transition-colors cursor-default">
                                # {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Pages Included */}
                {template.includedPages && (
                    <div>
                        <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Pages Included</h4>
                        <ul className="space-y-2">
                            {template.includedPages.map((page, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-500 text-sm">
                                    <FileText size={14} />
                                    <span>{page}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ProductContent;
