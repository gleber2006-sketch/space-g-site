"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="quem-somos" className="py-32 bg-white/[0.01] border-y border-white/5">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h6 className="text-secondary font-bold tracking-widest uppercase text-xs mb-4">
                            Quem nós somos
                        </h6>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                            Seu Futuro Digital, <br />
                            Nossa Expertise: <br />
                            <span className="text-secondary">Space-G</span> Impulsiona <br />
                            Seu Sucesso. 🚀
                        </h2>
                        <p className="text-white/60 text-lg mb-8 leading-relaxed">
                            A Space-G é uma agência digital fundada em 2020 com a missão de transformar negócios por meio da tecnologia, inovação e estratégias avançadas de marketing digital, ajudando empresas a crescer e se destacar no ambiente online.
                        </p>
                        <Link
                            href="https://wa.link/d3hggh"
                            className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors"
                        >
                            Saiba mais sobre nossa história
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                            <Zap className="text-secondary mb-4" />
                            <h4 className="font-bold mb-2">Velocidade</h4>
                            <p className="text-white/40 text-sm">Entrega ágil com foco em prazos reais.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 mt-8">
                            <ShieldCheck className="text-secondary mb-4" />
                            <h4 className="font-bold mb-2">Confiança</h4>
                            <p className="text-white/40 text-sm">Transparência em cada etapa do projeto.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
