"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    TrendingUp,
    MessageSquare,
    Instagram,
    Layout,
    Smartphone,
    Calendar,
    ExternalLink
} from 'lucide-react';

const services = [
    {
        title: "Tráfego Pago",
        description: "Anunciamos no Google Ads e Facebook Ads para aumentar suas vendas de forma estratégica e eficiente. Maximize seu retorno e alcance mais clientes.",
        icon: TrendingUp,
        link: "https://wa.link/w5ul8m"
    },
    {
        title: "Automação de WhatsApp",
        description: "A melhor ferramenta de automação de WhatsApp do mercado. Com uma interface intuitiva e fácil de usar teste grátis e comprove a eficiência hoje mesmo!",
        icon: MessageSquare,
        link: "https://nextgozap.com/space/",
        isExternal: true
    },
    {
        title: "Gestão de Redes Sociais",
        description: "Gerenciamos suas redes sociais com estratégia e criatividade. Criamos conteúdos de qualidade, e respondemos comentários e mensagens.",
        icon: Instagram,
        link: "https://wa.link/dy0go4"
    },
    {
        title: "Landing Pages",
        description: "Criamos sites institucionais e landing pages responsivas, com design moderno, rápido e focado em conversão. Seu site será leve e eficiente.",
        icon: Layout,
        link: "https://wa.link/40v9xj"
    },
    {
        title: "Sites Mobile",
        description: "Desenvolvemos sites mobile como uma alternativa econômica aos tradicionais, com soluções como cardápios digitais e sistemas de agendamento.",
        icon: Smartphone,
        link: "https://wa.link/tu2tf1"
    },
    {
        title: "Agendamento Online",
        description: "Sistema completo e 100% online. Seus clientes agendam com poucos cliques e recebem lembretes automáticos via WhatsApp.",
        icon: Calendar,
        link: "https://wa.link/l2p5a4"
    }
];

const Services = () => {
    return (
        <section id="servicos" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h6
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-xs mb-2"
                    >
                        Conheça nossos serviços
                    </motion.h6>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black tracking-tight"
                    >
                        Soluções digitais que <br />
                        <span className="text-white/60">geram resultados</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-secondary/50 transition-all duration-500 relative flex flex-col justify-between"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ExternalLink size={20} className="text-secondary" />
                            </div>

                            <div>
                                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <service.icon size={28} className="text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-8">
                                    {service.description}
                                </p>
                            </div>

                            <Link
                                href={service.link}
                                target={service.isExternal ? "_blank" : "_self"}
                                className="w-full py-3 text-center text-sm font-bold border border-white/10 rounded-xl hover:bg-white hover:text-black transition-all duration-300"
                            >
                                {service.title === "Automação de WhatsApp" ? "Quero testar grátis" : "Saiba mais"}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
