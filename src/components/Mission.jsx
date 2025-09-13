import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Mission & Vision</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guided by our commitment to technology health and customer care, 
            we strive to be the leading computer clinic in our community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-red-800">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide exceptional computer repair services and quality parts with a health-focused approach, 
              ensuring every customer's technology operates at peak performance. We are committed to diagnosing, 
              treating, and maintaining computer systems with the same care and precision as medical professionals 
              care for their patients.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-gray-700">Compassionate technical care</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-gray-700">Reliable and secure solutions</span>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-800">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become the most trusted computer clinic in San Pablo City and surrounding areas, 
              known for our innovative health-centered approach to technology repair. We envision 
              a future where every computer receives preventive care and expert treatment, 
              ensuring optimal digital health for our community.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <Target className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">Leading technology health provider</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">Community-focused service</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity",
                description: "Honest diagnosis and transparent pricing",
                icon: "🤝"
              },
              {
                title: "Excellence",
                description: "Superior quality in every repair",
                icon: "⭐"
              },
              {
                title: "Care",
                description: "Treating every device with compassion",
                icon: "❤️"
              },
              {
                title: "Innovation",
                description: "Staying current with technology trends",
                icon: "🚀"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;