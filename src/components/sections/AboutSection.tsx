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
    <section ref={ref} className="section-padding-bottom bg-gray-50">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center section-title-spacing"
        >
          <motion.h2
            variants={itemVariants}
            className="mt-[100px] text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6"
          >
            Votre partenaire en domotique et sécurité
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-800 font-medium max-w-3xl mx-auto"
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

        
      </div>
    </section>
  );
};

export default AboutSection;