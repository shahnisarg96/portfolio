import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CertificatesSection from './components/CertificatesSection';
import EducationSection from './components/EducationSection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';

const App = () => (
  <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-base-100 to-base-200">
    <Navigation />

    <main className="flex-1 pt-20 lg:pt-0 lg:ml-64 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <IntroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <EducationSection />
        <ContactSection />
      </div>
      <Footer />
    </main>

  </div>
);

export default App;





