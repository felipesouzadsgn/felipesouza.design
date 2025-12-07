'use client';

import React, { useState } from 'react';
import { Send, FileText, Link as LinkIcon, Plus, X, Globe, Layout, Building2, Timer, Wallet, Palette, Zap } from 'lucide-react';
import { SOCIAL_LINKS } from '../../lib/constants';

interface ReferenceLink {
    id: string;
    url: string;
}

const BriefingForm: React.FC = () => {
    const [formData, setFormData] = useState({
        clientName: '',
        companyName: '',
        email: '',
        projectType: 'landing-page',
        deadline: '1-mes',
        budget: '2k-5k',
        branding: 'preciso-criar',
        description: ''
    });

    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
    const [links, setLinks] = useState<ReferenceLink[]>([{ id: '1', url: '' }]);

    const FEATURES = [
        { id: 'blog', label: 'Blog / Notícias' },
        { id: 'cms', label: 'Painel Admin (CMS)' },
        { id: 'multi-language', label: 'Multi-idioma' },
        { id: 'api', label: 'Integrações (API)' },
        { id: 'analytics', label: 'Analytics Avançado' },
        { id: 'motion', label: 'Animações 3D/Motion' },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectionChange = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleFeatureToggle = (id: string) => {
        setSelectedFeatures(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
    };

    const handleLinkChange = (id: string, value: string) => {
        setLinks(prev => prev.map(link => link.id === id ? { ...link, url: value } : link));
    };

    const addLinkField = () => {
        setLinks(prev => [...prev, { id: Math.random().toString(36).substr(2, 9), url: '' }]);
    };

    const removeLinkField = (id: string) => {
        if (links.length > 1) {
            setLinks(prev => prev.filter(link => link.id !== id));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validLinks = links.filter(l => l.url.trim() !== '').map(l => l.url).join('%0D%0A- ');
        const linksText = validLinks ? `%0D%0A%0D%0AReferências:%0D%0A- ${validLinks}` : '';
        const featuresText = selectedFeatures.length > 0 ? selectedFeatures.map(f => FEATURES.find(item => item.id === f)?.label).join(', ') : 'Nenhuma específica';

        const subject = `Briefing: ${formData.projectType.toUpperCase()} - ${formData.companyName || formData.clientName}`;

        const body =
            `Nome: ${formData.clientName}%0D%0A\
Empresa: ${formData.companyName}%0D%0A\
Email: ${formData.email}%0D%0A\
%0D%0A\
Tipo de Projeto: ${formData.projectType}%0D%0A\
Prazo: ${formData.deadline}%0D%0A\
Orçamento Aproximado: ${formData.budget}%0D%0A\
Status da Marca: ${formData.branding}%0D%0A\
Funcionalidades: ${featuresText}%0D%0A\
%0D%0A\
Descrição:%0D%0A\
${formData.description}${linksText}`;

        window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                <div className="relative z-10 mb-12">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        <FileText size={24} className="text-white" />
                        <span>Briefing do Projeto</span>
                    </h3>
                    <p className="text-gray-500 max-w-lg">
                        Preencha os detalhes abaixo para que possamos entender a visão do seu novo site.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-12 relative z-10">

                    {/* Section 1: Project Type */}
                    <div className="space-y-4">
                        <label className="text-xs font-mono text-gray-600 uppercase tracking-widest block">01 // TIPO DE PROJETO</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { id: 'landing-page', label: 'Landing Page', desc: 'Foco em conversão e campanhas', icon: <Layout size={24} /> },
                                { id: 'site-institucional', label: 'Site Institucional', desc: 'Apresentação completa da marca', icon: <Building2 size={24} /> }
                            ].map(type => (
                                <button
                                    key={type.id}
                                    type="button"
                                    onClick={() => handleSelectionChange('projectType', type.id)}
                                    className={`group flex items-center gap-4 p-6 rounded-2xl border text-left transition-all duration-300 ${formData.projectType === type.id
                                            ? 'bg-white text-black border-white shadow-lg scale-[1.02]'
                                            : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${formData.projectType === type.id ? 'bg-black text-white' : 'bg-white/10 text-current'
                                        }`}>
                                        {type.icon}
                                    </div>
                                    <div>
                                        <span className="block font-bold text-lg mb-1">{type.label}</span>
                                        <span className={`text-xs ${formData.projectType === type.id ? 'text-gray-600' : 'text-gray-500'}`}>
                                            {type.desc}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Section 2: Details Checks */}
                    <div className="space-y-8">
                        <label className="text-xs font-mono text-gray-600 uppercase tracking-widest block">02 // DETALHES ESCOPO</label>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Deadline */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 mb-2 text-white font-bold">
                                    <Timer size={16} className="text-gray-500" />
                                    <span>Prazo Ideal</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {[
                                        { id: 'urgente', label: 'Urgente (ASAP)' },
                                        { id: '1-mes', label: '1 Mês' },
                                        { id: 'flexivel', label: 'Flexível' }
                                    ].map(opt => (
                                        <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.deadline === opt.id ? 'border-white bg-white' : 'border-white/20 bg-transparent group-hover:border-white/50'
                                                }`}>
                                                {formData.deadline === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                                            </div>
                                            <input
                                                type="radio"
                                                name="deadline"
                                                value={opt.id}
                                                checked={formData.deadline === opt.id}
                                                onChange={(e) => handleSelectionChange('deadline', e.target.value)}
                                                className="hidden"
                                            />
                                            <span className={`${formData.deadline === opt.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'} transition-colors`}>{opt.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Budget */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 mb-2 text-white font-bold">
                                    <Wallet size={16} className="text-gray-500" />
                                    <span>Orçamento</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {[
                                        { id: 'menos-2k', label: '< R$ 2k' },
                                        { id: '2k-5k', label: 'R$ 2k - 5k' },
                                        { id: '5k-10k', label: 'R$ 5k - 10k' },
                                        { id: 'mais-10k', label: '> R$ 10k' }
                                    ].map(opt => (
                                        <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.budget === opt.id ? 'border-white bg-white' : 'border-white/20 bg-transparent group-hover:border-white/50'
                                                }`}>
                                                {formData.budget === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                                            </div>
                                            <input
                                                type="radio"
                                                name="budget"
                                                value={opt.id}
                                                checked={formData.budget === opt.id}
                                                onChange={(e) => handleSelectionChange('budget', e.target.value)}
                                                className="hidden"
                                            />
                                            <span className={`${formData.budget === opt.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'} transition-colors`}>{opt.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Branding */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 mb-2 text-white font-bold">
                                    <Palette size={16} className="text-gray-500" />
                                    <span>Identidade Visual</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {[
                                        { id: 'tenho-tudo', label: 'Já tenho logotipo e cores' },
                                        { id: 'preciso-criar', label: 'Preciso criar do zero' },
                                        { id: 'redesign', label: 'Tenho, mas quero redesign' }
                                    ].map(opt => (
                                        <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.branding === opt.id ? 'border-white bg-white' : 'border-white/20 bg-transparent group-hover:border-white/50'
                                                }`}>
                                                {formData.branding === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                                            </div>
                                            <input
                                                type="radio"
                                                name="branding"
                                                value={opt.id}
                                                checked={formData.branding === opt.id}
                                                onChange={(e) => handleSelectionChange('branding', e.target.value)}
                                                className="hidden"
                                            />
                                            <span className={`${formData.branding === opt.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'} transition-colors`}>{opt.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Features Checkbox */}
                        <div className="pt-4 border-t border-white/5">
                            <div className="flex items-center gap-2 mb-4 text-white font-bold">
                                <Zap size={16} className="text-gray-500" />
                                <span>Funcionalidades Desejadas</span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {FEATURES.map(feat => (
                                    <button
                                        key={feat.id}
                                        type="button"
                                        onClick={() => handleFeatureToggle(feat.id)}
                                        className={`px-4 py-2 rounded-lg border text-sm transition-all ${selectedFeatures.includes(feat.id)
                                                ? 'bg-white text-black border-white'
                                                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                                            }`}
                                    >
                                        {feat.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Client Data */}
                    <div className="space-y-6">
                        <label className="text-xs font-mono text-gray-600 uppercase tracking-widest block mb-2">03 // DADOS DE CONTATO</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <div className="flex items-center bg-[#0A0A0A] border-b border-white/20 focus-within:border-white transition-colors">
                                    <span className="pl-4 text-gray-600 font-mono text-sm">{`>`}</span>
                                    <input
                                        type="text"
                                        name="clientName"
                                        value={formData.clientName}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent p-4 text-white placeholder-gray-700 font-mono focus:outline-none"
                                        placeholder="SEU NOME"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center bg-[#0A0A0A] border-b border-white/20 focus-within:border-white transition-colors">
                                    <span className="pl-4 text-gray-600 font-mono text-sm">{`#`}</span>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent p-4 text-white placeholder-gray-700 font-mono focus:outline-none"
                                        placeholder="NOME DA EMPRESA"
                                    />
                                </div>
                            </div>
                            <div className="group md:col-span-2">
                                <div className="flex items-center bg-[#0A0A0A] border-b border-white/20 focus-within:border-white transition-colors">
                                    <span className="pl-4 text-gray-600 font-mono text-sm">{`@`}</span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent p-4 text-white placeholder-gray-700 font-mono focus:outline-none"
                                        placeholder="SEU EMAIL"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Description */}
                    <div className="space-y-4">
                        <label className="text-xs font-mono text-gray-600 uppercase tracking-widest block">04 // SOBRE O PROJETO</label>
                        <div className="bg-[#0A0A0A] border border-white/10 rounded-none focus-within:border-white transition-colors relative min-h-[160px]">
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20"></div>

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="w-full h-full bg-transparent p-6 text-white placeholder-gray-700 font-mono focus:outline-none resize-none text-sm leading-relaxed"
                                placeholder="Conte mais detalhes sobre sua ideia, inspirações, funcionalidades específicas que não estão listadas..."
                                required
                            ></textarea>
                        </div>
                    </div>

                    {/* Section 5: References */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-xs font-mono text-gray-600 uppercase tracking-widest block">05 // REFERÊNCIAS VISUAIS</label>
                            <button
                                type="button"
                                onClick={addLinkField}
                                className="text-xs flex items-center gap-1 text-white hover:text-gray-300 transition-colors"
                            >
                                <Plus size={14} />
                                <span>ADICIONAR LINK</span>
                            </button>
                        </div>

                        <div className="space-y-3">
                            {links.map((link, index) => (
                                <div key={link.id} className="flex items-center gap-2 group animate-in slide-in-from-left-2 fade-in duration-300">
                                    <div className="flex-1 flex items-center bg-[#0A0A0A] border-b border-white/20 focus-within:border-white transition-colors">
                                        <span className="pl-4 text-gray-600 font-mono text-sm">
                                            <LinkIcon size={14} />
                                        </span>
                                        <input
                                            type="url"
                                            value={link.url}
                                            onChange={(e) => handleLinkChange(link.id, e.target.value)}
                                            className="w-full bg-transparent p-3 text-white placeholder-gray-800 font-mono text-sm focus:outline-none"
                                            placeholder="https://exemplo.com.br"
                                        />
                                    </div>
                                    {links.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeLinkField(link.id)}
                                            className="p-3 hover:bg-white/10 rounded-lg text-gray-600 hover:text-red-400 transition-colors"
                                        >
                                            <X size={16} />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full group relative bg-white text-black font-bold py-5 px-6 overflow-hidden transition-all hover:bg-gray-200 rounded-xl hover:shadow-2xl hover:shadow-white/10"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <div className="flex items-center justify-center gap-3 relative z-10 font-mono tracking-wider text-lg">
                            <span>ENVIAR BRIEFING COMPLETO</span>
                            <Send size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default BriefingForm;
