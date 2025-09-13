import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, HardDrive, Wifi, Smartphone, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Computer Repair",
      description: "Complete diagnosis and repair of desktop and laptop computers",
      features: ["Hardware troubleshooting", "Software issues", "Performance optimization", "Virus removal"]
    },
    {
      icon: Cpu,
      title: "Hardware Upgrades",
      description: "Boost your computer's performance with quality hardware upgrades",
      features: ["RAM upgrades", "SSD installation", "Graphics card upgrade", "CPU replacement"]
    },
    {
      icon: HardDrive,
      title: "Data Recovery",
      description: "Professional data recovery services for lost or corrupted files",
      features: ["Hard drive recovery", "File restoration", "Backup solutions", "Data migration"]
    },
    {
      icon: Wifi,
      title: "Network Setup",
      description: "Home and office network installation and troubleshooting",
      features: ["WiFi setup", "Router configuration", "Network security", "Internet connectivity"]
    },
    {
      icon: Smartphone,
      title: "Mobile Device Repair",
      description: "Repair services for smartphones and tablets",
      features: ["Screen replacement", "Battery replacement", "Software issues", "Water damage repair"]
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Regular maintenance to keep your devices running smoothly",
      features: ["System cleaning", "Software updates", "Performance tuning", "Preventive care"]
    }
  ];

  const handleBookService = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Health Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Just like a medical clinic offers various treatments, we provide comprehensive 
            technology health services to diagnose, treat, and prevent computer problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={handleBookService}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Book Service
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Emergency Service Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Emergency Computer Care</h3>
          <p className="text-lg mb-6 opacity-90">
            Computer emergency? We're here to help! Call us for urgent repairs and same-day service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleBookService}
              variant="outline"
              className="bg-white text-red-600 hover:bg-gray-100 border-white"
            >
              Call Emergency Line
            </Button>
            <span className="text-lg font-semibold">📞 09459707013</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;