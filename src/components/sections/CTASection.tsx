'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Phone,
      title: "Appelez-nous",
      description: "Consultation gratuite",
      action: "tel:+212808551720",
      label: "+212 808 551 720",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Réponse immédiate",
      action: "https://wa.me/212697342443",
      label: "Chatter maintenant",
      color: "from-green-600 to-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Devis détaillé",
      action: "mailto:contact@soustech.ma",
      label: "contact@soustech.ma",
      color: "from-blue-500 to-cyan-500"
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

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6"
          >
            Prêt à Transformer
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Votre Espace ?
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-12"
          >
            Obtenez un devis gratuit et personnalisé pour vos projets de 
            technologies intelligentes. Nos experts vous accompagnent de A à Z.
          </motion.p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 group"
          >
            Demander un Devis Gratuit
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${method.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-blue-100 text-sm mb-3">{method.description}</p>
              <span className="text-cyan-300 font-semibold">{method.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "✓ Devis gratuit en 24h",
              "✓ Installation professionnelle",
              "✓ Garantie satisfaction",
              "✓ Support technique inclus"
            ].map((benefit, index) => (
              <div key={index} className="text-blue-100">
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;