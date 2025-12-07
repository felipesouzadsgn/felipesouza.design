import React from 'react';
import BriefingForm from '../../components/briefing/BriefingForm';
import SectionWrapper from '../../components/ui/SectionWrapper';
import ProfileHeader from '../../components/ProfileHeader';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Reveal from '../../components/ui/Reveal';

export const metadata = {
    title: 'Briefing | Felipe Souza Design',
    description: 'Inicie seu projeto preenchendo o briefing interativo.',
};

export default function BriefingPage() {
    return (
        <main className="min-h-screen bg-[#020202] text-white selection:bg-white selection:text-black">
            <SectionWrapper id="briefing" className="pt-10 pb-20">
                {/* Custom Header Navigation */}
                <div className="flex items-center justify-between mb-16 max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono text-sm uppercase tracking-wider">Voltar</span>
                    </Link>

                    <ProfileHeader />

                    <div className="w-[88px] hidden md:block"></div> {/* Spacer for balance */}
                </div>

                <div className="flex flex-col items-center justify-center mb-16 text-center">
                    <Reveal>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Vamos construir algo <span className="text-gray-600">épico?</span>
                        </h1>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Este é o primeiro passo. Preencha o briefing com as informações essenciais para que eu possa entender sua visão e preparar uma proposta sob medida.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={200}>
                    <BriefingForm />
                </Reveal>
            </SectionWrapper>
        </main>
    );
}
