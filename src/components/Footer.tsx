import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <Link href="/" className="relative inline-block w-10 h-10 mb-2">
                            <Image
                                src="/logo.png"
                                alt="Space-G Logo"
                                fill
                                className="object-contain grayscale hover:grayscale-0 transition-all"
                            />
                        </Link>
                        <p className="text-white/40 text-xs mt-2">
                            Transformando o digital desde 2020.
                        </p>
                    </div>

                    <div className="flex gap-8 text-sm text-white/60">
                        <Link href="#servicos" className="hover:text-secondary transition-colors">Serviços</Link>
                        <Link href="#quem-somos" className="hover:text-secondary transition-colors">Sobre</Link>
                        <Link href="https://wa.link/aj2hro" className="hover:text-secondary transition-colors">Contato</Link>
                    </div>

                    <div className="text-white/40 text-[10px] tracking-widest uppercase">
                        © {new Date().getFullYear()} Space-G Agência. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
