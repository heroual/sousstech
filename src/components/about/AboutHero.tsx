'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Users, Award } from 'lucide-react';

const AboutHero = () => {
  const values = [
    { icon: Zap, name: 'Rapidité', color: 'text-yellow-400' },
    { icon: Shield, name: 'Sécurité', color: 'text-green-400' },
    { icon: Users, name: 'Service', color: 'text-blue-400' },
    { icon: Award, name: 'Excellence', color: 'text-purple-400' },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            Pourquoi Choisir
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              SoussTech ?
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
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
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl mb-2 group-hover:bg-white/20 transition-all duration-300">
                <value.icon className={`h-8 w-8 ${value.color}`} />
              </div>
              <span className="text-sm text-blue-100">{value.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;