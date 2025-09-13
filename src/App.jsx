import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Mission from '@/components/Mission';
import Management from '@/components/Management';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Kimo's Computer Clinic - Professional Computer Repair & Parts | San Pablo City, Laguna</title>
        <meta name="description" content="Expert computer repair services and quality computer parts in San Pablo City, Laguna. Kimo's Computer Clinic provides reliable, health-focused tech solutions for all your computing needs." />
        <meta name="keywords" content="computer repair, computer parts, San Pablo City, Laguna, tech support, hardware repair, Kimo's Computer Clinic" />
        <meta property="og:title" content="Kimo's Computer Clinic - Professional Computer Repair & Parts" />
        <meta property="og:description" content="Expert computer repair services and quality computer parts in San Pablo City, Laguna." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Mission />
        <Management />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;