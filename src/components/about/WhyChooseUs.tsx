'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, 
  Shield, 
  Rocket, 
  Headphones, 
  CheckCircle,
  Clock,
  Star,
  Award
} from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Zap,
      title: "Rapidité ⚡",
      description: "Installation ultra-rapide sans interruption",
      details: "Nos équipes d'experts réalisent vos installations en un temps record, avec un minimum de dérangement pour votre quotidien.",
      color: "from-yellow-500 to-orange-500",
      stats: "Installation en 24h"
    },
    {
      icon: Shield,
      title: "Sécurité 🔒",
      description: "Technologies de pointe et normes strictes",
      details: "Toutes nos solutions respectent les normes de sécurité les plus strictes avec des composants certifiés et une maintenance préventive.",
      color: "from-green-500 to-emerald-500",
      stats: "Norme ISO 27001"
    },
    {
      icon: Rocket,
      title: "Innovation 🚀",
      description: "Solutions d'avant-garde et technologies émergentes",
      details: "Nous intégrons les dernières innovations technologiques pour vous offrir des solutions futureproof et évolutives.",
      color: "from-blue-500 to-cyan-500",
      stats: "Technologie Wi-Fi 7"
    },
    {
      icon: Headphones,
      title: "Support 24/7 📞",
      description: "Assistance technique disponible en permanence",
      details: "Notre équipe de support technique est disponible 24h/24 et 7j/7 pour résoudre vos problèmes et répondre à vos questions.",
      color: "from-purple-500 to-violet-500",
      stats: "Temps de réponse < 2min"
    }
  ];

  const advantages = [
    {
      icon: Star,
      title: "Satisfaction Garantie",
      description: "98% de nos clients recommandent nos services",
      stat: "98%"
    },
    {
      icon: Award,
      title: "Expertise Certifiée",
      description: "Techniciens certifiés et formation continue",
      stat: "5+ ans"
    },
    {
      icon: Clock,
      title: "Intervention Rapide",
      description: "Délai d'intervention garanti sous 4h",
      stat: "< 4h"
    },
    {
      icon: CheckCircle,
      title: "Garantie Étendue",
      description: "Garantie constructeur + garantie installation",
      stat: "10 ans"
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
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Nos Valeurs
            <span className="block gradient-text">
              & Engagements
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ce qui nous distingue : un engagement total envers l'excellence, 
            l'innovation et la satisfaction de nos clients.
          </motion.p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="relative z-10">
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <p className="text-gray-500 text-sm mb-4">
                  {feature.details}
                </p>

                <div className={`inline-block bg-gradient-to-r ${feature.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  {feature.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{advantage.stat}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h4>
              <p className="text-gray-600 text-sm">{advantage.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;