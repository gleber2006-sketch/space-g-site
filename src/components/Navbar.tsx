import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="relative w-12 h-12 hover:opacity-80 transition-opacity">
                            <Image
                                src="/logo.png"
                                alt="Space-G Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#servicos" className="text-sm font-bold hover:text-secondary transition-colors text-white/50 hover:text-white">
                            Serviços
                        </Link>
                        <Link href="#portfolio" className="text-sm font-bold hover:text-secondary transition-colors text-white/50 hover:text-white">
                            Portfólio
                        </Link>
                        <Link href="#quem-somos" className="text-sm font-bold hover:text-secondary transition-colors text-white/50 hover:text-white">
                            Sobre
                        </Link>
                        <Link href="#contato" className="text-sm font-bold hover:text-secondary transition-colors text-white/50 hover:text-white">
                            Contato
                        </Link>
                        <Link
                            href="http://wa.link/aj2hro"
                            className="ml-4 px-6 py-2.5 bg-secondary text-white text-sm font-black rounded-full hover:bg-secondary/80 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,170,255,0.3)]"
                        >
                            <MessageCircle size={18} />
                            Fale conosco
                        </Link>
                    </div>

                    {/* Mobile Menu Button (Simplified for now) */}
                    <div className="md:hidden flex items-center">
                        <Link
                            href="http://wa.link/aj2hro"
                            className="p-2 bg-secondary text-white rounded-full"
                        >
                            <MessageCircle size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
