'use client';

import React from 'react';

interface TemplateFiltersProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
}

const TemplateFilters: React.FC<TemplateFiltersProps> = ({
    categories,
    selectedCategory,
    onSelectCategory,
    searchQuery,
    onSearchChange
}) => {
    return (
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between py-6 border-b border-white/5">
            {/* Categories (Scrollable on mobile) */}
            <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                <div className="flex items-center gap-2">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => onSelectCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === category
                                ? 'bg-white text-black'
                                : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Search */}
            <div className="w-full md:w-auto relative">
                <input
                    type="text"
                    placeholder="Search templates..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full md:w-64 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                />
            </div>
        </div>
    );
};

export default TemplateFilters;
