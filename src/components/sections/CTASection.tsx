'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Réponse immédiate",
      action: "https://wa.me/212697342443",
      label: "Chatter maintenant",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Devis détaillé",
      action: "mailto:contact@soustech.ma",
      label: "contact@soustech.ma",
      color: "from-blue-400 to-blue-600"
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
    <section ref={ref} className="section-padding bg-gradient-to-br from-blue-900 via-blue-600 to-blue-900 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-cover opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 container-padding max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center section-title-spacing"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold font-poppins text-white mb-8"
            id="cta-heading"
          >
            Prêt à Transformer
            <span className="block gradient-text-enhanced text-5xl md:text-7xl mt-2" data-text="Votre Espace ?">
              Votre Espace ?
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 font-medium"
          >
            Obtenez un devis gratuit et personnalisé pour vos projets de 
            technologies intelligentes. Nos experts vous accompagnent de A à Z.
          </motion.p>
        </motion.div>

        {/* Standardized Image Gallery */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 section-spacing"
        >
          {[
            {
              src: '/images/connected-smart-home-.jpg',
              alt: 'Maison connectée'
            },
            {
              src: '/images/phone-control-sound.jpg',
              alt: 'Contrôle mobile'
            },
            {
              src: '/images/modern-smart-home-management-systems.jpg',
              alt: 'Systèmes de gestion'
            },
            {
              src: '/images/wireless-automation-control.jpg',
              alt: 'Automatisation sans fil'
            }
          ].map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-xl overflow-hidden shadow-large group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={250}
                height={160}
                className="image-gallery"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center section-spacing"
        >
          <Link
            href="/contact"
            className="relative inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-90 transition-opacity duration-500 rounded-full"></span>
            <span className="relative z-10 flex items-center">
              Demander un Devis Gratuit
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </span>
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
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group card-hover-effect shadow-lg relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('/images/circuit-pattern.png')] bg-cover opacity-5 mix-blend-overlay"></div>
              <div className="absolute -right-8 -top-8 w-16 h-16 bg-blue-light/10 rounded-full blur-md animate-pulse-glow"></div>
              <div className="relative z-10">
                <div className={`bg-gradient-to-r ${method.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 hover:lift ripple`} aria-hidden="true">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center drop-shadow-md text-contrast-white-strong">
                {method.title}
                <div className="h-0.5 w-8 bg-gradient-to-r from-white to-blue-400 rounded-full mt-2 mx-auto group-hover:w-16 transition-all duration-500 opacity-80"></div>
              </h3>
              <p className="text-gray-200 text-sm mb-3 text-center font-medium drop-shadow-sm">{method.description}</p>
              <span className="text-blue-300 font-semibold text-center text-lg block group-hover:text-white transition-colors duration-300">{method.label}</span>
              </div>
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
              { text: "Devis gratuit en 24h", icon: "✓" },
              { text: "Installation professionnelle", icon: "✓" },
              { text: "Garantie satisfaction", icon: "✓" },
              { text: "Support technique inclus", icon: "✓" }
            ].map((benefit, index) => (
              <div key={index} className="text-white text-center group hover:-translate-y-1 transition-transform duration-300 animate-text-pulse" style={{transitionDelay: `${index * 50}ms`}}>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg shadow-md hover:bg-white/20 transition-all duration-300 border border-white/10">
                  <span className="text-blue-300 font-bold mr-2" aria-hidden="true">{benefit.icon}</span>
                  <span className="font-semibold text-base sm:text-lg text-white">{benefit.text}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;