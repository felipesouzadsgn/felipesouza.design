"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import AgentDesign from "../components/sections/AgentDesign";
import Hero from "../components/sections/Hero";
import AboutBento from "../components/sections/AboutBento";
import Projects from "../components/sections/Projects";
import AgentPromo from "../components/sections/AgentPromo";
import Workflow from "../components/sections/Workflow";
import Testimonials from "../components/sections/Testimonials";
import Calculator from "../components/sections/Calculator";
import Contact from "../components/sections/Contact";
import { SOCIAL_LINKS } from "../lib/constants";

type ViewMode = "landing" | "agent";

const HomeClient: React.FC = () => {
    const [currentView, setCurrentView] = useState<ViewMode>("landing");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Check URL for view parameter on mount
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get("view") === "agent") {
            setCurrentView("agent");
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    if (currentView === "agent") {
        return (
            <AgentDesign
                onClose={() => setCurrentView("landing")}
                isFullPage={true}
            />
        );
    }

    return (
        <div
            className="min-h-screen font-sans selection:bg-black/10 dark:selection:bg-white/20 selection:text-black dark:selection:text-white overflow-x-hidden relative transition-colors duration-300"
            style={{ backgroundColor: "#020202", color: "#e5e5e5" }}
        >
            {/* Global Ambient Cursor Light */}
            <div
                className="fixed w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-transform duration-100 ease-out"
                style={{ left: mousePosition.x, top: mousePosition.y }}
            />

            <main>
                <Hero />
                <Projects />
                {/* <Workflow /> */}
                <AboutBento />
                <Calculator />
                <Contact />
            </main>
        </div>
    );
};

export default HomeClient;
