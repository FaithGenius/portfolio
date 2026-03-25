import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import BackToTop from '../components/BackToTop/BackToTop';
import Modal from '../components/Modal/Modal';

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('languages');

  const handleModalOpen = (tab) => {
    setActiveTab(tab);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="page-portfolio">
      <Navbar />
      <main className="main-content" id="home">
        <Hero />
        <About onModalOpen={handleModalOpen} />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Modal
        isOpen={isModalOpen}
        tab={activeTab}
        onClose={handleModalClose}
      />
      <Footer />
      <BackToTop />
    </div>
  );
}
