'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Camera, 
  Smartphone, 
  Cloud, 
  Eye, 
  Bell,
  Lock,
  Users,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const SecuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const securitySolutions = [
    {
      icon: Camera,
      title: "Caméras Intelligentes",
      description: "Surveillance haute définition avec IA intégrée",
      features: ["4K Ultra HD", "Vision nocturne", "Détection de visages", "Zoom optique"]
    },
    {
      icon: Eye,
      title: "Détection Avancée",
      description: "Intelligence artificielle pour une surveillance précise",
      features: ["Détection de mouvement", "Reconnaissance faciale", "Analyse comportementale", "Fausses alertes minimisées"]
    },
    {
      icon: Smartphone,
      title: "Accès Mobile",
      description: "Surveillance en temps réel depuis votre smartphone",
      features: ["Live streaming", "Notifications push", "Contrôle PTZ", "Partage multi-utilisateurs"]
    },
    {
      icon: Cloud,
      title: "Stockage Sécurisé",
      description: "Sauvegarde automatique et accès aux enregistrements",
      features: ["Stockage cloud", "Sauvegarde locale", "Chiffrement AES", "Accès historique"]
    }
  ];

  const applications = [
    {
      icon: Users,
      title: "Résidentiel",
      description: "Protection complète de votre domicile et de votre famille",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Camera,
      title: "Cafés & Restaurants",
      description: "Surveillance des espaces de service et zones de stockage",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lock,
      title: "Entreprises",
      description: "Sécurisation des locaux et contrôle d'accès",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Shield,
      title: "Espaces Publics",
      description: "Surveillance de zones sensibles et espaces communs",
      color: "from-red-500 to-orange-500"
    }
  ];

  const features = [
    "Installation et configuration professionnelle",
    "Formation à l'utilisation incluse",
    "Maintenance et mise à jour automatique",
    "Support technique 24/7",
    "Garantie constructeur étendue",
    "Conformité RGPD et normes sécurité",
    "Solution évolutive et modulaire",
    "Intégration avec systèmes existants"
  ];

  return (
    <section id="security" ref={ref} className="py-20 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-6">
            Caméras de Surveillance & Sécurité
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Protégez vos biens avec nos solutions de surveillance intelligente. 
            Caméras haute définition, détection IA et accès distant pour une sécurité optimale.
          </p>
        </motion.div>

        {/* Security Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {securitySolutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 font-poppins">
            Applications & Secteurs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                <div className={`bg-gradient-to-r ${app.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <app.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h4>
                <p className="text-gray-600 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-poppins">
                Sécurité Professionnelle
              </h3>
              <p className="text-green-100 mb-6 leading-relaxed">
                Nos solutions de surveillance combinent haute technologie et facilité d'utilisation. 
                Installation professionnelle et support technique inclus.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300"
                >
                  Devis Gratuit
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300"
                >
                  Voir Projets
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-200 mr-3 flex-shrink-0" />
                  <span className="text-green-100 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;