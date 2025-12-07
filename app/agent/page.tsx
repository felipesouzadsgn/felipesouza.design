"use client";

import React from 'react';
import AgentDesign from '../../components/sections/AgentDesign';

export default function AgentPage() {
    return (
        <main className="w-full h-screen bg-black">
            <AgentDesign onClose={() => { }} isFullPage={true} />
        </main>
    );
}
