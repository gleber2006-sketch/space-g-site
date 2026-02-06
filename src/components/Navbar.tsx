import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                            <span className="text-foreground">SPACE-</span>
                            <span className="text-secondary">G</span>
                        </Link>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#servicos" className="text-sm font-medium hover:text-secondary transition-colors">
                            Serviços
                        </Link>
                        <Link href="#quem-somos" className="text-sm font-medium hover:text-secondary transition-colors">
                            Quem somos
                        </Link>
                        <Link
                            href="http://wa.link/aj2hro"
                            className="px-6 py-2.5 bg-secondary text-white text-sm font-bold rounded-full hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,170,255,0.4)]"
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
