import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import FeaturedWork from './components/FeaturedWork';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ProjectModal from './components/ProjectModal';
import VideoModal from './components/VideoModal';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleOpenContact = (service = null) => {
    setSelectedService(service);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111111] selection:bg-[#111111] selection:text-white font-sans">
      {/* Navigation Header */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Page Content */}
      <main>
        {/* Hero Section with Layered Artistic Collage */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* End-to-End Digital Solutions Services Section */}
        <Services 
          onSelectService={(svc) => handleOpenContact(svc)}
          onOpenContact={() => handleOpenContact()} 
        />

        {/* From Idea to Impact - Our Approach Section */}
        <Approach onOpenVideo={() => setVideoOpen(true)} />

        {/* Featured Work - Ideas We've Brought to Life */}
        <FeaturedWork 
          onSelectProject={(proj) => setSelectedProject(proj)} 
          onOpenContact={() => handleOpenContact()}
        />

        {/* CTA Banner Section */}
        <CTA onOpenContact={() => handleOpenContact()} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Interactive Modals */}
      <ContactModal 
        isOpen={contactOpen} 
        onClose={() => setContactOpen(false)} 
        preselectedService={selectedService}
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onStartProject={() => handleOpenContact()}
      />

      <VideoModal 
        isOpen={videoOpen} 
        onClose={() => setVideoOpen(false)} 
      />
    </div>
  );
}
