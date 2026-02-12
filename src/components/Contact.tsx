"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contato" className="py-32 relative overflow-hidden bg-background">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h6 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
                            Vamos conversar?
                        </h6>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                            Pronto para o <br />
                            <span className="text-secondary">próximo nível?</span>
                        </h2>
                        <p className="text-white/60 text-lg mb-12 leading-relaxed">
                            Estamos ansiosos para ouvir sobre seu projeto e como a Space-G pode transformar sua presença digital.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                                    <Phone className="text-secondary" size={24} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-widest font-bold">WhatsApp</p>
                                    <p className="text-white font-bold">(11) 99999-9999</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-widest font-bold">E-mail</p>
                                    <p className="text-white font-bold">contato@space-g.com.br</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-sm"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Nome</label>
                                    <input
                                        type="text"
                                        placeholder="Seu nome"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Empresa</label>
                                    <input
                                        type="text"
                                        placeholder="Sua empresa"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Mensagem</label>
                                <textarea
                                    rows={4}
                                    placeholder="Como podemos ajudar?"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-secondary transition-colors resize-none"
                                />
                            </div>
                            <button className="w-full py-5 bg-secondary text-white font-black rounded-2xl hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,170,255,0.3)]">
                                Enviar Proposta
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
