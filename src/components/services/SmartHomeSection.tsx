'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Home, 
  Lightbulb, 
  Thermometer, 
  Shield, 
  Smartphone, 
  CheckCircle,
  Zap,
  Clock
} from 'lucide-react';
import Link from 'next/link';

const SmartHomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const smartFeatures = [
    {
      icon: Lightbulb,
      title: "Éclairage Intelligent",
      description: "Contrôle et programmation de tous vos éclairages",
      features: ["Variation d'intensité", "Programmation horaire", "Contrôle vocal", "Économie d'énergie"]
    },
    {
      icon: Thermometer,
      title: "Climatisation",
      description: "Gestion automatique de la température",
      features: ["Température optimale", "Programmation zones", "Détection présence", "Économies jusqu'à 30%"]
    },
    {
      icon: Shield,
      title: "Sécurité Intégrée",
      description: "Capteurs et alarmes intelligents",
      features: ["Détection intrusion", "Alertes temps réel", "Caméras connectées", "Accès sécurisé"]
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Contrôle total depuis votre smartphone",
      features: ["Interface intuitive", "Contrôle à distance", "Notifications push", "Multi-utilisateurs"]
    }
  ];

  const scenarios = [
    {
      name: "Réveil Matin",
      icon: Clock,
      description: "Réveil progressif avec lumière, musique douce et température optimale",
      color: "from-blue-500 to-blue-400"
    },
    {
      name: "Mode Absence",
      icon: Shield,
      description: "Simulation de présence, activation sécurité et économies d'énergie",
      color: "from-blue-600 to-blue-500"
    },
    {
      name: "Soirée Cinéma",
      icon: Home,
      description: "Éclairage tamisé, fermeture volets et ambiance parfaite",
      color: "from-blue-700 to-blue-600"
    },
    {
      name: "Mode Nuit",
      icon: Lightbulb,
      description: "Extinction progressive, verrouillage et activation alarme",
      color: "from-gray-800 to-gray-700"
    }
  ];

  return (
    <section id="smart-home" ref={ref} className="section-padding bg-gray-50">
      <div className="container-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-primary p-4 rounded-2xl">
              <Home className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-800 mb-6 text-center">
            Smart Home - Maison Intelligente
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
            Transformez votre maison en espace intelligent avec notre solution domotique complète. 
            Contrôlez lumières, chauffage, sécurité et bien plus depuis votre smartphone.
          </p>
        </motion.div>

        {/* Smart Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {smartFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 mb-4 text-sm text-center">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-gray-600 text-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12 font-poppins">
            Scénarios Intelligents
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className={`bg-gradient-to-r ${scenario.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <scenario.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">{scenario.name}</h4>
                <p className="text-gray-600 text-sm text-center">{scenario.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6 font-poppins text-center">
            Prêt pour une Maison Intelligente ?
          </h3>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed text-center">
            Nos experts vous accompagnent dans la conception et l'installation 
            de votre solution domotique sur-mesure. Installation professionnelle 
            et formation incluses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 text-center"
            >
              Demander un Devis
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 text-center"
            >
              Voir nos Réalisations
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartHomeSection;