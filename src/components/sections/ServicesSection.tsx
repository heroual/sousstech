'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Home, 
  Shield, 
  Network, 
  ArrowRight, 
  Wifi,
  Smartphone,
  Camera,
  Settings
} from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 'fttr',
      title: 'FTTR - Fiber to The Room',
      description: 'Connexion ultra-rapide, sans perçage, invisible et esthétique. La fibre optique directement dans chaque pièce.',
      icon: Zap,
      features: ['Débit jusqu\'à 10 Gbit/s', 'Installation sans perçage', 'Design invisible', 'Latence ultra-faible'],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      id: 'smart-home',
      title: 'Smart Home',
      description: 'Automatisation intelligente : éclairage, chauffage, volets. Contrôlez tout depuis votre smartphone.',
      icon: Home,
      features: ['Application mobile', 'Contrôle vocal', 'Automatisation', 'Économies d\'énergie'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'security',
      title: 'Caméras & Sécurité',
      description: 'Surveillance intelligente avec détection de mouvement, accès distant et alertes en temps réel.',
      icon: Shield,
      features: ['Accès distant', 'Détection IA', 'Alertes temps réel', 'Stockage cloud'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'network',
      title: 'Réseaux & IT',
      description: 'Conception et optimisation de réseaux professionnels. Solutions IoT et support technique 24/7.',
      icon: Network,
      features: ['Réseau optimisé', 'Solutions IoT', 'Support 24/7', 'Maintenance préventive'],
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6"
          >
            Nos Solutions
            <span className="block gradient-text">
              Technologiques
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez notre gamme complète de services pour transformer 
            votre espace en environnement intelligent et connecté.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`${service.bgColor} ${service.borderColor} border-2 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/20 rounded-full transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/20 rounded-full transform -translate-x-8 sm:-translate-x-12 translate-y-8 sm:translate-y-12"></div>
              
              <div className="relative z-10">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className={`bg-gradient-to-r ${service.color} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 font-poppins">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-2 flex-shrink-0`}></div>
                      <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/services#${service.id}`}
                  className={`inline-flex items-center text-gray-700 font-semibold hover:gap-3 transition-all duration-300 group-hover:text-gray-900 text-sm sm:text-base min-h-[44px] py-2`}
                >
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <Link
            href="/services"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 min-h-[48px] w-full sm:w-auto justify-center max-w-sm sm:max-w-none"
          >
            Voir Tous nos Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;