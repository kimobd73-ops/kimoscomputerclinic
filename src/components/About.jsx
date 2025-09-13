import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Zap, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Health-Focused Approach",
      description: "We treat your computer like a patient, diagnosing issues with care and precision."
    },
    {
      icon: Shield,
      title: "Reliable Protection",
      description: "Your data security and privacy are our top priorities in every repair."
    },
    {
      icon: Zap,
      title: "Quick Recovery",
      description: "Fast turnaround times to get your technology back to optimal health."
    },
    {
      icon: Users,
      title: "Expert Care Team",
      description: "Experienced technicians dedicated to providing the best service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Kimo's Computer Clinic</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in San Mateo, San Pablo City, Laguna, we're your trusted technology health specialists. 
            Just like a medical clinic cares for your physical health, we care for your computer's digital health.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Choose Our Clinic?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Professional Diagnosis</h4>
                    <p className="text-gray-600">Comprehensive computer health checkups and accurate problem identification.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Quality Parts & Service</h4>
                    <p className="text-gray-600">Only genuine, high-quality computer parts and components for lasting repairs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Local Expertise</h4>
                    <p className="text-gray-600">Serving San Pablo City and surrounding areas with personalized care.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                className="w-full h-auto rounded-xl shadow-lg"
                alt="Computer repair workshop with modern equipment"
               src="https://images.unsplash.com/photo-1620306823142-5b253c457fd5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;