import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import Link from 'next/link';
import { PROJECTS } from '../../lib/constants';
import { ArrowUpRight, Figma, Code, Smartphone, Layout, Cpu, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const ProjectCarousel = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
    const [carouselProjects, setCarouselProjects] = useState([...PROJECTS, ...PROJECTS, ...PROJECTS, ...PROJECTS]);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);



    // Filter Logic
    useEffect(() => {
        const filtered = activeCategory === "All"
            ? PROJECTS
            : PROJECTS.filter(p => p.category?.includes(activeCategory));

        setFilteredProjects(filtered);

        // Ensure we have enough items loop smoothly (at least 4 sets if small number of items)
        // If filtered list is small, we duplicate more times to fill width
        const duplicationFactor = filtered.length < 3 ? 8 : 4;
        const looped = Array(duplicationFactor).fill(filtered).flat();
        setCarouselProjects(looped);

        // Reset position when filter changes
        x.set(0);
    }, [activeCategory, x]);


    // Calculate dimensions
    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
            // Verify content width based on children or calculated size
            // Approximate width: (Card Width + Gap) * Number of items
            // Card width: mobile 85vw (~340px) or 400px. Gap: 32px (gap-8)
            // Ideally we measure the scrollWidth of the motion div, but we can rely on re-render
        }
    }, [filteredProjects]); // Recalculate when projects change

    // Measure content width after render
    const itemsRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (itemsRef.current) {
            setContentWidth(itemsRef.current.scrollWidth);
        }
    }, [carouselProjects, containerWidth]);


    // Auto-scroll animation
    useEffect(() => {
        if (contentWidth === 0) return;

        const controls = animate(x, -contentWidth / 2, {
            duration: Math.max(20, carouselProjects.length * 5), // Adjust speed based on content length
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            onUpdate: (latest) => {
                // Reset if we've scrolled past the first set
                if (latest <= -contentWidth / 2) {
                    x.set(0);
                }
            }
        });

        if (isHovered) {
            controls.stop();
        } else {
            controls.play();
        }

        return () => controls.stop();
    }, [x, contentWidth, isHovered, carouselProjects]);

    const handleDragEnd = () => {
        setIsHovered(false);
    };

    const scrollLeft = () => {
        const currentX = x.get();
        animate(x, currentX + 300, { duration: 0.5, ease: "easeInOut" });
    };

    const scrollRight = () => {
        const currentX = x.get();
        animate(x, currentX - 300, { duration: 0.5, ease: "easeInOut" });
    };

    // Map tags to icons
    const getTechIcon = (tag: string) => {
        const lowerTag = tag.toLowerCase();
        if (lowerTag.includes('figma')) return <Figma size={16} />;
        if (lowerTag.includes('react')) return <Code size={16} />;
        if (lowerTag.includes('next')) return <Code size={16} />;
        if (lowerTag.includes('mobile') || lowerTag.includes('app')) return <Smartphone size={16} />;
        if (lowerTag.includes('ai') || lowerTag.includes('openai')) return <Cpu size={16} />;
        return <Layout size={16} />;
    };

    return (
        <div className="w-full py-20 overflow-hidden bg-transparent relative group/carousel">

            {/* Header / Filters */}
            <div className="text-center mb-12 relative z-10 px-6 max-w-7xl mx-auto">
                <Link href="/projects/neon-bank-app">
                    <h2 className="text-4xl font-bold text-white mb-8 hover:text-gray-300 transition-colors">Select Works</h2>
                </Link>

                {/* Scrollable Categories for Mobile */}
                <div className="relative group/filters">
                    <div
                        className="flex justify-start md:justify-center gap-4 overflow-x-auto pb-4 px-2 no-scrollbar md:flex-wrap snap-x snap-mandatory mask-linear-fade"
                        style={{
                            maskImage: 'linear-gradient(to right, black 85%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)'
                        }}
                    >
                        {["All", "Branding", "UI Design", "Website", "Social Media"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveCategory(filter)}
                                className={`flex-shrink-0 snap-center px-6 py-2 rounded-full border text-sm transition-all whitespace-nowrap ${activeCategory === filter
                                    ? 'bg-white text-black border-white font-bold'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Carousel Track */}
            <div
                className="relative w-full"
                ref={containerRef}
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}
            >
                <motion.div
                    ref={itemsRef}
                    className="flex gap-4 md:gap-8 px-4 md:px-8 cursor-grab active:cursor-grabbing"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: -contentWidth + containerWidth, right: 0 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onDragStart={() => setIsHovered(true)}
                    onDragEnd={handleDragEnd}
                >
                    {carouselProjects.map((project, index) => (
                        <Link
                            href={`/projects/${project.id}`}
                            key={`${project.id}-${index}`}
                            className="relative group shrink-0 w-[85vw] md:w-[400px] aspect-[4/5] rounded-3xl overflow-hidden bg-[#0A0A0A]"
                            draggable={false}
                        >
                            <motion.div
                                className="w-full h-full"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

                                {/* Content - Top (Icons) */}
                                <div className="absolute top-6 left-0 w-full flex justify-center gap-2 opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    {project.tags.slice(0, 3).map((tag, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                                            {getTechIcon(tag)}
                                        </div>
                                    ))}
                                </div>

                                {/* Content - Bottom (Title & Link) */}
                                <div className="absolute bottom-0 left-0 w-full p-8 text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                    <div className="w-12 h-12 mx-auto mb-4 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                        <span className="font-bold text-white text-lg">Fs</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <div className="flex items-center justify-center gap-1 text-gray-400 text-sm group-hover:text-white transition-colors">
                                        <span>View Project</span>
                                        <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden md:flex justify-center gap-4 mt-12 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                <button
                    onClick={scrollLeft}
                    className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={scrollRight}
                    className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 transition-all"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Mobile Scroll Indicator */}
            <div className="md:hidden flex justify-center mt-6 text-gray-500 text-xs animate-pulse">
                Swipe to explore
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default ProjectCarousel;
