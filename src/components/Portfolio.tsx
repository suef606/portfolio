// src/components/Portfolio.tsx

"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import AboutSection from './AboutSection';
import AwardsSection from './AwardsSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection'; 
import ContactSection from './ContactSection';
import Footer from './Footer';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <AboutSection darkMode={darkMode} />
      
      <ProjectsSection darkMode={darkMode} />
      <SkillsSection darkMode={darkMode} />
      <AwardsSection darkMode={darkMode} />
      <ExperienceSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Portfolio;