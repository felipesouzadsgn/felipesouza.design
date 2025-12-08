'use client';

import React from 'react';
import { TemplateMetadata } from '../../lib/templates';
import { User, Clock, Layers, Eye } from 'lucide-react';

interface ProductStatsProps {
    metadata?: TemplateMetadata;
}

const ProductStats: React.FC<ProductStatsProps> = ({ metadata }) => {
    if (!metadata) return null;

    return (
        <div className="flex flex-wrap items-center justify-between gap-8 py-8 my-8 border-y border-white/5">
            <div className="flex flex-col items-center gap-2">
                <User size={20} className="text-gray-400" />
                <div className="text-center">
                    <span className="block font-bold text-white">{metadata.creator}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Creator</span>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <Clock size={20} className="text-gray-400" />
                <div className="text-center">
                    <span className="block font-bold text-white">{metadata.updatedAt}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Updated</span>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <Layers size={20} className="text-gray-400" />
                <div className="text-center">
                    <span className="block font-bold text-white">{metadata.pagesCount}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Pages</span>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <Eye size={20} className="text-gray-400" />
                <div className="text-center">
                    <span className="block font-bold text-white">{metadata.views}</span>
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Views</span>
                </div>
            </div>
        </div>
    );
};

export default ProductStats;
