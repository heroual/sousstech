import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold">SoussTech</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Votre partenaire en solutions technologiques intelligentes. 
              Nous transformons votre espace en environnement connecté et sécurisé.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/services#fttr" className="text-gray-400 hover:text-white transition-colors py-1 block">
                  FTTR - Fiber to The Room
                </Link>
              </li>
              <li>
                <Link href="/services#smart-home" className="text-gray-400 hover:text-white transition-colors py-1 block">
                  Smart Home
                </Link>
              </li>
              <li>
                <Link href="/services#security" className="text-gray-400 hover:text-white transition-colors py-1 block">
                  Caméras de Surveillance
                </Link>
              </li>
              <li>
                <Link href="/services#network" className="text-gray-400 hover:text-white transition-colors py-1 block">
                  Réseaux & IT
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors py-1 block">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors py-1 block">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors py-1 block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/devis" className="text-gray-400 hover:text-white transition-colors py-1 block">
                  Demander un Devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-3 text-sm sm:text-base">
              <a 
                href="tel:+212808551720" 
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors py-1 group"
              >
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>+212 808 551 720</span>
              </a>
              <a 
                href="https://wa.me/212697342443" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors py-1 group"
              >
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>WhatsApp: +212 697 342 443</span>
              </a>
              <a 
                href="mailto:contact@soustech.ma" 
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors py-1 group"
              >
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>contact@soustech.ma</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400 py-1">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  157 Mhaita<br />
                  Taroudant, Morocco
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <div className="mb-4">
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Created by <span className="text-white font-semibold">Elheroual Salah Eddine</span>
            </p>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            © 2024 SoussTech. Tous droits réservés. |{' '}
            <Link href="/privacy" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </Link>{' '}|{' '}
            <Link href="/terms" className="hover:text-white transition-colors">
              Conditions d'Utilisation
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;