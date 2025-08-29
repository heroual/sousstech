'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Zap, 
  Home, 
  Shield, 
  Network, 
  ArrowRight, 
  CheckCircle
} from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 'fttr',
      title: 'FTTR - Fiber to The Room',
      description: 'Connexion ultra-rapide sans perçage, invisible et esthétique. La fibre optique directement dans chaque pièce pour des performances maximales.',
      icon: Zap,
      image: '/images/technican-install-smart.jpg',
      features: [
        'Débit jusqu\'à 10 Gbit/s',
        'Installation sans perçage',
        'Design totalement invisible',
        'Latence ultra-faible'
      ]
    },
    {
      id: 'smart-home',
      title: 'Smart Home',
      description: 'Automatisation intelligente complète : éclairage, chauffage, volets, sécurité. Contrôlez tout depuis votre smartphone.',
      icon: Home,
      image: '/images/tablet-control.jpg',
      features: [
        'Application mobile intuitive',
        'Contrôle vocal intégré',
        'Automatisation avancée',
        'Économies d\'énergie garanties'
      ]
    },
    {
      id: 'security',
      title: 'Caméras & Sécurité',
      description: 'Surveillance intelligente 24/7 avec détection IA, accès distant sécurisé et alertes en temps réel pour une protection optimale.',
      icon: Shield,
      image: '/images/camera-outside.jpg',
      features: [
        'Accès distant sécurisé',
        'Détection IA avancée',
        'Alertes temps réel',
        'Stockage cloud sécurisé'
      ]
    },
    {
      id: 'network',
      title: 'Réseaux & IT',
      description: 'Conception et optimisation de réseaux professionnels. Solutions IoT personnalisées et support technique 24/7.',
      icon: Network,
      image: '/images/technican-install-control-panel.jpg',
      features: [
        'Réseau haute performance',
        'Solutions IoT complètes',
        'Support technique 24/7',
        'Maintenance préventive'
      ]
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
    },
  };

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-poppins text-center"
          >
            Nos Solutions
            <span className="block gradient-text">
              Technologiques
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center"
          >
            Découvrez notre gamme complète de services pour transformer 
            votre espace en environnement intelligent, sécurisé et connecté.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-10 hover:shadow-large transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                {/* Standardized Service Image */}
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="image-service"
                  />
                  <div className="absolute top-4 left-4">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center shadow-medium"
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-poppins text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg text-center">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 text-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center bg-gray-900 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-3300 shadow-medium hover:-translate-y-1 group"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16 lg:mt-20 bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-poppins text-center">
            Prêt à transformer votre espace ?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-center">
            Nos experts vous accompagnent de la conception à l'installation. 
            Demandez votre devis gratuit et personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-primary hover:-translate-y-1 flex items-center justify-center"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              Voir tous nos services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;