import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Heart, Shield, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://horizons-cdn.hostinger.com/831491a5-e5d1-461a-9b35-83c1e465490e/9cf6e0ebbf0eae951d2d013c0d07619e.jpg"
                alt="Kimo's Computer Clinic Logo"
                className="h-10 w-auto rounded-lg"
              />
              <div>
                <span className="text-lg font-bold text-red-400">Kimo's</span>
                <div className="text-sm text-gray-400">Computer Clinic</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted computer health specialists in San Pablo City, Laguna. 
              Providing professional repair services and quality parts since our founding.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <Heart className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Shield className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Zap className="h-4 w-4" />
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-4 block">Our Services</span>
            <ul className="space-y-2 text-gray-400">
              <li>Computer Repair</li>
              <li>Hardware Upgrades</li>
              <li>Data Recovery</li>
              <li>Network Setup</li>
              <li>Mobile Device Repair</li>
              <li>Maintenance Services</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-4 block">Contact Info</span>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>09459707013</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>kimobd73@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  <div>San Mateo</div>
                  <div>San Pablo City, Laguna</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-semibold mb-4 block">Business Hours</span>
            <div className="space-y-2 text-gray-400">
              <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
              <div>Saturday: 9:00 AM - 5:00 PM</div>
              <div>Sunday: Emergency only</div>
              <div className="mt-4 text-red-400 font-medium">
                24/7 Emergency Service Available
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Kimo's Computer Clinic. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6 text-gray-400">
              <span>Owned by Kim de Vera</span>
              <span>•</span>
              <span>San Pablo City, Laguna</span>
            </div>
          </div>
          <div className="text-center mt-4 text-gray-500 text-sm">
            <span>Professional Computer Health Services • Quality Parts • Trusted Repairs</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;