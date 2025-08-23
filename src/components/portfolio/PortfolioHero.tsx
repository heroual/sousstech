'use client';

import { motion } from 'framer-motion';
import { Camera, Home, Zap, Shield } from 'lucide-react';

const PortfolioHero = () => {
  const achievements = [
    { icon: Zap, label: 'FTTR', count: '150+', color: 'text-yellow-400' },
    { icon: Home, label: 'Smart Home', count: '200+', color: 'text-blue-400' },
    { icon: Shield, label: 'Sécurité', count: '100+', color: 'text-green-400' },
    { icon: Camera, label: 'Surveillance', count: '75+', color: 'text-purple-400' },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6">
            Nos Réalisations
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              & Projets
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Découvrez nos projets les plus marquants et les transformations 
          technologiques que nous avons réalisées pour nos clients.
        </motion.p>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center group"
            >
              <achievement.icon className={`h-8 w-8 mx-auto mb-3 ${achievement.color} group-hover:scale-110 transition-transform duration-300`} />
              <div className="text-3xl font-bold mb-2">{achievement.count}</div>
              <p className="text-blue-100 text-sm">{achievement.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-blue-200"
        >
          Plus de 500 projets réalisés avec succès depuis 2019
        </motion.p>
      </div>
    </section>
  );
};

export default PortfolioHero;