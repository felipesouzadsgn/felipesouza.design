import React, { useState, useEffect } from 'react';
import { Calculator as CalculatorIcon, Check, Zap, Clock, DollarSign } from 'lucide-react';
import Reveal from '../ui/Reveal';
import SectionWrapper from '../ui/SectionWrapper';

const Calculator: React.FC = () => {
    const [serviceType, setServiceType] = useState<'design' | 'dev' | 'both'>('both');
    const [pages, setPages] = useState(5);
    const [addons, setAddons] = useState({
        content: false,
        seo: false
    });
    const [speed, setSpeed] = useState<'regular' | 'fast' | 'turbo'>('regular');
    const [total, setTotal] = useState(0);

    // Pricing Constants
    const PRICES = {
        base: {
            design: 100,
            dev: 150,
            both: 200
        },
        addon: {
            content: 50,
            seo: 50
        },
        speed: {
            regular: 0,
            fast: 25,
            turbo: 100
        }
    };

    useEffect(() => {
        let basePrice = PRICES.base[serviceType];

        if (addons.content) basePrice += PRICES.addon.content;
        if (addons.seo) basePrice += PRICES.addon.seo;

        basePrice += PRICES.speed[speed];

        setTotal(basePrice * pages);
    }, [serviceType, pages, addons, speed]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(value);
    };

    return (
        <SectionWrapper id="calculator" className="bg-[#020202] relative py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-[#020202] to-[#020202] pointer-events-none"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <Reveal>
                    <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10">

                            {/* Configuration Panel */}
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                        <CalculatorIcon className="text-gray-400" />
                                        Estimate seu Projeto
                                    </h2>

                                    {/* Service Type */}
                                    <div className="space-y-4 mb-8">
                                        <h3 className="text-lg text-gray-300 font-medium">Qual tipo de serviço você precisa?</h3>
                                        <div className="space-y-3">
                                            {[
                                                { id: 'design', label: 'Apenas Design' },
                                                { id: 'dev', label: 'Apenas Desenvolvimento' },
                                                { id: 'both', label: 'Design + Desenvolvimento' }
                                            ].map((option) => (
                                                <label key={option.id} className="flex items-center gap-3 cursor-pointer group">
                                                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${serviceType === option.id ? 'border-white bg-white' : 'border-gray-600 group-hover:border-gray-400'}`}>
                                                        {serviceType === option.id && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                                                    </div>
                                                    <input
                                                        type="radio"
                                                        name="serviceType"
                                                        className="hidden"
                                                        checked={serviceType === option.id}
                                                        onChange={() => setServiceType(option.id as any)}
                                                    />
                                                    <span className={`${serviceType === option.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'} transition-colors`}>{option.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Pages Slider */}
                                    <div className="space-y-4 mb-8">
                                        <div className="flex justify-between items-end">
                                            <h3 className="text-lg text-gray-300 font-medium">Número de páginas:</h3>
                                            <span className="text-3xl font-bold text-white font-mono">{pages}</span>
                                        </div>
                                        <div className="relative pt-2">
                                            <input
                                                type="range"
                                                min="1"
                                                max="30"
                                                value={pages}
                                                onChange={(e) => setPages(parseInt(e.target.value))}
                                                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-white"
                                            />
                                            <div className="flex justify-between text-xs text-gray-600 mt-2 font-mono">
                                                <span>1</span>
                                                <span>30</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Add-ons */}
                                    <div className="space-y-4 mb-8">
                                        <h3 className="text-lg text-gray-300 font-medium">Extras:</h3>
                                        <div className="space-y-3">
                                            <label className="flex items-center gap-3 cursor-pointer group justify-between hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${addons.content ? 'border-white bg-white' : 'border-gray-600 group-hover:border-gray-400'}`}>
                                                        {addons.content && <Check size={14} className="text-black" />}
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        className="hidden"
                                                        checked={addons.content}
                                                        onChange={() => setAddons(prev => ({ ...prev, content: !prev.content }))}
                                                    />
                                                    <span className={`${addons.content ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'} transition-colors`}>Ajuda com Conteúdo (Copy)</span>
                                                </div>
                                                <span className="text-red-500 text-sm font-mono">+${PRICES.addon.content}/pág</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group justify-between hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${addons.seo ? 'border-white bg-white' : 'border-gray-600 group-hover:border-gray-400'}`}>
                                                        {addons.seo && <Check size={14} className="text-black" />}
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        className="hidden"
                                                        checked={addons.seo}
                                                        onChange={() => setAddons(prev => ({ ...prev, seo: !prev.seo }))}
                                                    />
                                                    <span className={`${addons.seo ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'} transition-colors`}>Otimização de SEO</span>
                                                </div>
                                                <span className="text-red-500 text-sm font-mono">+${PRICES.addon.seo}/pág</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Speed */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg text-gray-300 font-medium">Urgência:</h3>
                                        <div className="space-y-3">
                                            {[
                                                { id: 'regular', label: 'Normal (Baseado na discussão)', price: 0 },
                                                { id: 'fast', label: 'Em até 14 Dias', price: PRICES.speed.fast },
                                                { id: 'turbo', label: 'Em até 7 Dias', price: PRICES.speed.turbo }
                                            ].map((option) => (
                                                <label key={option.id} className="flex items-center gap-3 cursor-pointer group justify-between hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${speed === option.id ? 'border-white bg-white' : 'border-gray-600 group-hover:border-gray-400'}`}>
                                                            {speed === option.id && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                                                        </div>
                                                        <input
                                                            type="radio"
                                                            name="speed"
                                                            className="hidden"
                                                            checked={speed === option.id}
                                                            onChange={() => setSpeed(option.id as any)}
                                                        />
                                                        <span className={`${speed === option.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'} transition-colors`}>{option.label}</span>
                                                    </div>
                                                    {option.price > 0 && <span className="text-red-500 text-sm font-mono">+${option.price}/pág</span>}
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Result Panel */}
                            <div className="flex flex-col justify-center">
                                <h2 className="text-3xl font-bold text-white mb-6">Investimento Estimado</h2>
                                <p className="text-gray-500 mb-8">
                                    Esta é uma estimativa instantânea para te dar uma ideia de quanto você pode economizar trabalhando comigo.
                                </p>

                                <div className="space-y-6">
                                    {/* Agency */}
                                    <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 opacity-60 hover:opacity-100 transition-opacity">
                                        <h4 className="text-gray-400 text-sm mb-2">Agência Típica cobra no mínimo</h4>
                                        <div className="text-3xl font-bold text-white mb-1 font-mono">{formatCurrency(total * 10)}</div>
                                        <p className="text-xs text-gray-600">+ Custos adicionais de gestão & overhead</p>
                                    </div>

                                    {/* Freelancer */}
                                    <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 opacity-60 hover:opacity-100 transition-opacity">
                                        <h4 className="text-gray-400 text-sm mb-2">Freelancer Experiente cobra no mínimo</h4>
                                        <div className="text-3xl font-bold text-white mb-1 font-mono">{formatCurrency(total * 4)}</div>
                                        <p className="text-xs text-gray-600">+ Dor de cabeça & falta de processos</p>
                                    </div>

                                    {/* Me */}
                                    <div className="bg-gradient-to-br from-white/10 to-black border border-white/20 rounded-2xl p-8 relative overflow-hidden group shadow-2xl">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-white/10 transition-colors"></div>

                                        <h4 className="text-gray-200 text-sm mb-2 relative z-10">Com Felipe Souza Design</h4>
                                        <div className="text-5xl font-bold text-white mb-4 font-mono relative z-10 tracking-tight">{formatCurrency(total)}</div>
                                        <p className="text-sm text-gray-400 relative z-10">Economize dinheiro, tempo & evite dores de cabeça.</p>

                                        <div className="mt-8 relative z-10">
                                            <a href="#contact" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-80 transition-opacity">
                                                <span>Iniciar Projeto</span>
                                                <Zap size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </SectionWrapper>
    );
};

export default Calculator;
