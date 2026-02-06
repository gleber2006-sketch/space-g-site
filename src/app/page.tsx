import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-secondary/30 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Footer />
    </main>
  );
}
