import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const handleGetStarted = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden tech-pattern">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full floating-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-500/10 rounded-full floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Heart className="h-4 w-4" />
              <span>Healthy Tech Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Your Computer's
              <span className="gradient-text block">Health Clinic</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 mb-8 max-w-lg"
            >
              Professional computer repair and quality parts in San Pablo City, Laguna. 
              We diagnose, treat, and restore your technology to perfect health.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                onClick={handleGetStarted}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                onClick={handleGetStarted}
                className="border-2 border-gray-300 hover:border-red-600 hover:text-red-600 px-8 py-3 rounded-lg font-semibold"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-red-600">500+</div>
                <div className="text-sm text-gray-600">Repairs Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img 
                src="https://horizons-cdn.hostinger.com/831491a5-e5d1-461a-9b35-83c1e465490e/288246f107e769c5ba345a71ff2dfac8.png"
                alt="Computer repair technician with tools"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 glass-effect rounded-xl p-4 shadow-lg"
              >
                <Shield className="h-8 w-8 text-green-600 mb-2" />
                <div className="text-sm font-semibold">Secure</div>
                <div className="text-xs text-gray-600">Data Protection</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -right-4 glass-effect rounded-xl p-4 shadow-lg"
              >
                <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                <div className="text-sm font-semibold">Fast</div>
                <div className="text-xs text-gray-600">Quick Repairs</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;