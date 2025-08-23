'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Zap, Home, Shield, Network, Grid } from 'lucide-react';

const ProjectCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    {
      id: 'all',
      name: 'Tous les Projets',
      icon: Grid,
      count: 525,
      color: 'from-gray-500 to-gray-600'
    },
    {
      id: 'fttr',
      name: 'FTTR',
      icon: Zap,
      count: 150,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'smart-home',
      name: 'Smart Home',
      icon: Home,
      count: 200,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'security',
      name: 'Sécurité',
      icon: Shield,
      count: 100,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'network',
      name: 'Réseaux IT',
      icon: Network,
      count: 75,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Explorez Nos
            <span className="block gradient-text">
              Domaines d'Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Filtrez nos réalisations par catégorie pour découvrir 
            nos solutions dans votre domaine d'intérêt.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveFilter(category.id)}
              className={`p-6 rounded-2xl transition-all duration-300 text-center group ${
                activeFilter === category.id
                  ? 'bg-white shadow-xl scale-105'
                  : 'bg-white shadow-md hover:shadow-lg'
              }`}
            >
              <div className={`bg-gradient-to-r ${category.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                activeFilter === category.id ? 'shadow-lg' : ''
              }`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className={`text-lg font-bold mb-2 ${
                activeFilter === category.id ? 'text-gray-900' : 'text-gray-700'
              }`}>
                {category.name}
              </h3>
              
              <div className={`text-2xl font-bold mb-1 ${
                activeFilter === category.id ? 'text-blue-600' : 'text-gray-600'
              }`}>
                {category.count}
              </div>
              
              <p className="text-gray-500 text-sm">
                projet{category.count > 1 ? 's' : ''}
              </p>
              
              {activeFilter === category.id && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className={`h-1 bg-gradient-to-r ${category.color} rounded-full mt-4`}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Info */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {activeFilter === 'all' ? (
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Tous nos Projets</h3>
              <p className="text-blue-100 max-w-3xl mx-auto">
                Découvrez l'ensemble de nos réalisations across tous nos domaines d'expertise : 
                FTTR, Smart Home, Sécurité et Réseaux IT.
              </p>
            </div>
          ) : (
            <div className={`bg-gradient-to-r ${categories.find(c => c.id === activeFilter)?.color} rounded-2xl p-8 text-white`}>
              <h3 className="text-2xl font-bold mb-4">
                Projets {categories.find(c => c.id === activeFilter)?.name}
              </h3>
              <p className="max-w-3xl mx-auto opacity-90">
                {activeFilter === 'fttr' && "Installations FTTR avec câblage invisible pour une connectivité ultra-rapide dans chaque pièce."}
                {activeFilter === 'smart-home' && "Solutions domotiques complètes pour l'automatisation et le contrôle intelligent de votre habitat."}
                {activeFilter === 'security' && "Systèmes de surveillance et sécurité intelligents avec accès distant et détection avancée."}
                {activeFilter === 'network' && "Infrastructures réseau professionnelles et solutions IoT pour entreprises et particuliers."}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCategories;