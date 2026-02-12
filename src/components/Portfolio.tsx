"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Trophy } from 'lucide-react';

const projects = [
    {
        title: "E-commerce de Alta Conversão",
        client: "Moda Fashion",
        impact: "+150% em Vendas",
        description: "Reestruturação completa da jornada do usuário e implementação de tráfego pago estratégico.",
        tags: ["Tráfego Pago", "UI/UX"]
    },
    {
        title: "Automação de Atendimento",
        client: "Clínica Saúde",
        impact: "Redução de 80% na fila",
        description: "Implementação de chatbot inteligente via WhatsApp para agendamentos automáticos.",
        tags: ["Automação", "WhatsApp"]
    },
    {
        title: "Landing Page de Lançamento",
        client: "Infoprodutor X",
        impact: "ROI de 12x",
        description: "Criação de página ultra-rápida focada em captura de leads e conversão imediata.",
        tags: ["LP", "Copywriting"]
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-32 bg-background relative z-10 border-t border-white/5">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <motion.h6
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-secondary font-bold tracking-widest uppercase text-xs mb-2"
                        >
                            Nosso Portfólio
                        </motion.h6>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black tracking-tight"
                        >
                            Cases que <span className="gradient-text">fazem história</span>
                        </motion.h2>
                    </div>
                    <p className="text-white/40 max-w-md text-sm md:text-right">
                        Transformamos desafios complexos em soluções digitais de alto impacto. Veja alguns de nossos resultados reais.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-primary/10 rounded-2xl">
                                    <Trophy size={24} className="text-primary" />
                                </div>
                                <div className="text-[10px] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full text-white/60">
                                    {project.impact}
                                </div>
                            </div>

                            <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">{project.client}</h4>
                            <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                            <p className="text-white/60 text-sm mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-[10px] border border-white/10 px-2 py-1 rounded-lg text-white/40 group-hover:text-white/80 transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
