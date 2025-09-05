'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/images/sousstech.png"
        alt="Smart Home Technology"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-30 h-full w-full"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-poppins"
        >
          Le Futur de la Maison Connectée
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Découvrez nos solutions de pointe pour une maison plus intelligente, plus sûre et plus efficace.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <Link href="/services" className="btn-futuristic-primary">
            Nos Services
          </Link>
          <Link href="/portfolio" className="btn-futuristic-secondary">
            Voir nos projets
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;