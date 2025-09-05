'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Zap, Shield, Users, Award } from 'lucide-react';

const AboutHero = () => {
  const values = [
    { icon: Zap, name: 'Rapidité' },
    { icon: Shield, name: 'Sécurité' },
    { icon: Users, name: 'Service' },
    { icon: Award, name: 'Excellence' },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/images/Apropos.png"
        alt="About Us Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-30 h-full w-full"
      />
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container-padding max-w-7xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-center">
            Pourquoi Choisir
            <span className="block gradient-text">
              SoussTech ?
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed text-center"
        >
          Découvrez ce qui fait de SoussTech le partenaire idéal pour vos projets 
          de technologies intelligentes. Innovation, expertise et satisfaction client 
          sont au cœur de notre mission.
        </motion.p>

        {/* Value Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center gap-8 flex-wrap"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl mb-2 group-hover:bg-blue-600 transition-all duration-300">
                <value.icon className="h-8 w-8 text-blue-300 group-hover:text-white" />
              </div>
              <span className="text-sm text-gray-300 text-center">{value.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;