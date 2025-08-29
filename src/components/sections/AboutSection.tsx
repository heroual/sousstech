'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Award, Users, Zap, Target } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "500+", label: "Projets Réalisés", icon: Target },
    { number: "98%", label: "Clients Satisfaits", icon: Users },
    { number: "5+", label: "Années d'Expérience", icon: Award },
    { number: "24/7", label: "Support Technique", icon: Zap },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center section-title-spacing"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6"
          >
            Votre Partenaire en
            <span className="block gradient-text">
              Innovation Technologique
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Depuis plus de 5 ans, SoussTech accompagne particuliers et entreprises 
            dans leur transformation numérique. Notre expertise en FTTR, domotique 
            et sécurité intelligente fait de nous le leader des solutions connectées.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"
}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 section-spacing"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white rounded-2xl p-4 sm:p-6 shadow-medium hover:shadow-large transition-all duration-300 group"
            >
              <div className="bg-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins">
              Notre Mission
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Démocratiser l'accès aux technologies intelligentes en proposant 
              des solutions sur-mesure, performantes et évolutives. Nous croyons 
              que chaque espace mérite d'être connecté, sécurisé et optimisé.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {[
                "Expertise technique certifiée",
                "Solutions personnalisées",
                "Support client réactif",
                "Garantie satisfaction"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative order-1 lg:order-2"
          >
            {/* Standardized Professional Work Gallery */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-medium">
                  <Image
                    src="/images/technican-install-camera.jpg"
                    alt="Installation caméra de sécurité"
                    width={250}
                    height={120}
                    className="image-about"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-medium">
                  <Image
                    src="/images/technican-install-control-panel.jpg"
                    alt="Installation panneau de contrôle"
                    width={250}
                    height={120}
                    className="image-about"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-lg overflow-hidden shadow-medium">
                  <Image
                    src="/images/technican-install-camera2.jpg"
                    alt="Installation système de surveillance"
                    width={250}
                    height={120}
                    className="image-about"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-medium">
                  <Image
                    src="/images/control-panel-on-a-wall.jpeg"
                    alt="Panneau de contrôle installé"
                    width={250}
                    height={120}
                    className="image-about"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full transform translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full transform -translate-x-8 sm:-translate-x-12 translate-y-8 sm:translate-y-12"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-poppins">
                  Innovation & Qualité
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                  Nos équipes d'experts utilisent les dernières technologies 
                  pour vous offrir des installations durables et performantes. 
                  Chaque projet est unique et bénéficie d'un suivi personnalisé.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;