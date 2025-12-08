'use client';

import React from 'react';

interface ProductGalleryProps {
    images?: string[];
    mainImage: string;
    title: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, mainImage, title }) => {
    const galleryImages = images && images.length > 0 ? images : [mainImage, mainImage]; // Fallback if no specific gallery

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20 animate-in slide-in-from-bottom-8 fade-in duration-700">
            {/* Main large image */}
            <div className="md:col-span-2 aspect-[16/9] rounded-2xl overflow-hidden border border-white/5 bg-[#0A0A0A] group">
                <img
                    src={galleryImages[0]}
                    alt={`${title} - Main View`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>
            {/* Secondary images grid */}
            {galleryImages.slice(1, 3).map((img, idx) => (
                <div key={idx} className="aspect-[16/9] rounded-2xl overflow-hidden border border-white/5 bg-[#0A0A0A] group">
                    <img
                        src={img}
                        alt={`${title} - Detail ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductGallery;
