import React from 'react';
import { motion } from 'framer-motion';
import { User, Wrench, DollarSign, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Management = () => {
  const teamMembers = [
    {
      name: 'Kim de Vera',
      role: 'Owner & Founder',
      icon: User,
      image: null,
      profileLink: 'https://www.facebook.com/kimbalgoma.devera/', // added link
      description:
        "Kim brings years of experience in computer technology and business management to Kimo's Computer Clinic. With a passion for technology health and customer service, Kim has built a reputation for excellence.",
    },
    {
      name: 'Maria Coleen',
      role: 'Cashier & Manager',
      icon: DollarSign,
      image: null,
      profileLink: null,
      description:
        'Maria ensures smooth operations and excellent customer service. She manages appointments, billing, and makes sure every client has a positive experience at our clinic.',
    },
    {
      name: 'Flavi Emmanuel',
      role: 'Technician',
      icon: Wrench,
      image:
        'https://horizons-cdn.hostinger.com/831491a5-e5d1-461a-9b35-83c1e465490e/32b8177cce4bbf19e84ced05e54afe8e.png',
      profileLink: null,
      description:
        'Flavi is our expert technician, skilled in diagnosing and repairing a wide range of computer issues. His precision and technical knowledge ensure your devices are in great hands.',
    },
  ];

  const handleContact = () => {
    toast({
      title:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by experienced professionals dedicated to providing the best
            computer health services in San Pablo City, Laguna.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover flex flex-col"
            >
              <div className="relative h-48 bg-gradient-to-br from-red-500 to-blue-600 rounded-t-xl flex items-center justify-center">
                {member.image ? (
                  member.profileLink ? (
                    <a
                      href={member.profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 object-contain rounded-full bg-white p-2 shadow-lg"
                      />
                    </a>
                  ) : (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 object-contain rounded-full bg-white p-2 shadow-lg"
                    />
                  )
                ) : (
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <member.icon className="h-16 w-16 text-gray-600" />
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-red-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {member.description}
                </p>
                <div className="mt-6 border-t pt-4 flex justify-around">
                  <Button variant="ghost" size="sm" onClick={handleContact}>
                    <Phone className="h-4 w-4 mr-2" /> Call
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleContact}>
                    <Mail className="h-4 w-4 mr-2" /> Email
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            Our Leadership Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold mb-2">Customer-First Approach</h4>
              <p className="text-gray-600 text-sm">
                Every decision is made with our customers' best interests in
                mind.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="font-semibold mb-2">Technical Excellence</h4>
              <p className="text-gray-600 text-sm">
                Continuous learning and improvement in technical skills and
                knowledge.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-semibold mb-2">Community Partnership</h4>
              <p className="text-gray-600 text-sm">
                Building lasting relationships within the San Pablo City
                community.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Management;
