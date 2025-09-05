'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const ContactHero = () => {
  const quickActions = [
    {
      icon: Phone,
      title: 'Appel Direct',
      description: 'Conseil immédiat',
      action: 'tel:+212808551720',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat en direct',
      action: 'https://wa.me/212697342443',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Devis détaillé',
      action: 'mailto:contact@soustech.ma',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Image */}
      <Image
        src="/images/contact.png"
        alt="Contact Us Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-30 h-full w-full"
        priority
      />
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container-padding max-w-7xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-center">
            Contactez
            <span className="block gradient-text">
              Nos Experts
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-center"
        >
          Parlons de votre projet ! Nos experts sont à votre disposition pour vous 
          conseiller et établir un devis personnalisé gratuit.
        </motion.p>

        {/* Quick Contact Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          {quickActions.map((action, index) => (
            <motion.a
              key={index}
              href={action.action}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${action.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="h-8 w-8 text-white" />
              </div>
            <h3 className="text-xl font-bold text-center text-white">{action.title}</h3>
              <p className="text-gray-300 text-sm text-center">{action.description}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Availability Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <Clock className="h-6 w-6 text-blue-400 mr-3" />
            <h3 className="text-xl font-bold text-center text-white">Disponibilité</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="text-center">
              <h4 className="font-semibold text-blue-400 mb-2">Horaires Bureau</h4>
              <p className="text-gray-300">Lun - Ven : 9h - 18h</p>
              <p className="text-gray-300">Sam : 9h - 12h</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-blue-400 mb-2">Support Urgence</h4>
              <p className="text-gray-300">7j/7 - 24h/24</p>
              <p className="text-gray-300">WhatsApp privilégié</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;