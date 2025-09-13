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
            Votre Partenaire en Maison Intelligente et Domotique au Maroc
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Depuis plus de 5 ans, SoussTech accompagne particuliers et entreprises dans leur transformation numérique et l’installation de solutions connectées. Notre expertise en FTTR, domotique et sécurité intelligente fait de nous un leader des solutions connectées au Maroc.
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
        <div>
          <motion.h3
            variants={itemVariants}
            className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 font-poppins"
          >
            Notre Mission et Expertise
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start"
          >
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Chez SoussTech, nous rendons les technologies intelligentes accessibles et fiables pour tous au Maroc.
                Chaque espace mérite d’être connecté, sécurisé et optimisé. Nous accompagnons nos clients de la conception à l’installation, pour des solutions sur mesure, performantes et durables, partout au Maroc.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Notre équipe d’experts met son savoir-faire et son expérience au service de chaque projet pour vous offrir :
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "Expertise technique certifiée",
                  "Solutions personnalisées",
                  "Installation professionnelle",
                  "Garantie satisfaction et support inclus."
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
              <div className="rounded-lg overflow-hidden shadow-lg h-[390px]">
                <Image
                  src="/images/technican-install-smart.jpg"
                  alt="Technicien installant un système de maison intelligente"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;