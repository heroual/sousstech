'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Wifi, Eye, Gauge, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const FTTRSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const advantages = [
    {
      icon: Gauge,
      title: "Vitesse Ultra-Rapide",
      description: "Jusqu'à 10 Gbit/s symétrique pour tous vos appareils",
      stat: "10x plus rapide"
    },
    {
      icon: Eye,
      title: "Installation Invisible",
      description: "Câblage esthétique sans perçage ni goulotte apparente",
      stat: "0 perçage"
    },
    {
      icon: Wifi,
      title: "Couverture Totale",
      description: "Signal optimal dans toutes les pièces de votre habitation",
      stat: "100% couverture"
    },
    {
      icon: CheckCircle,
      title: "Latence Minimale",
      description: "Performance optimale pour gaming et télétravail",
      stat: "< 1ms latence"
    }
  ];

  const features = [
    "Débit symétrique jusqu'à 10 Gbit/s",
    "Installation sans perçage ni dégradation",
    "Câblage invisible et esthétique",
    "Compatible avec tous les opérateurs",
    "Évolutif et modulaire",
    "Garantie 10 ans sur l'installation",
    "Support technique inclus",
    "Certification professionnelle"
  ];

  return (
    <section id="fttr" ref={ref} className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-2xl">
              <Zap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            FTTR - Fiber to The Room
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            La révolution de la fibre optique ! Contrairement au câblage classique, 
            notre solution FTTR apporte la fibre optique directement dans chaque pièce 
            pour une performance inégalée.
          </p>
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Traditional vs FTTR */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-800 mb-4">Câblage Traditionnel</h3>
            <ul className="space-y-3">
              {[
                "Perçage et goulotte visibles",
                "Débit limité par le cuivre",
                "Perte de signal sur distance",
                "Installation complexe et salissante"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Notre Solution FTTR</h3>
            <ul className="space-y-3">
              {[
                "Installation invisible sans perçage",
                "Débit full fibre dans chaque pièce",
                "Signal parfait partout",
                "Installation propre et rapide"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-green-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <advantage.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{advantage.stat}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h4>
              <p className="text-gray-600 text-sm">{advantage.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-poppins">
                Pourquoi Choisir Notre FTTR ?
              </h3>
              <p className="text-yellow-100 mb-6 leading-relaxed">
                Notre technologie FTTR représente l'avenir de la connectivité résidentielle. 
                Plus besoin de compromis entre esthétique et performance !
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-yellow-50 transition-colors duration-300"
              >
                Demander un Devis
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-200 mr-3 flex-shrink-0" />
                  <span className="text-yellow-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FTTRSection;