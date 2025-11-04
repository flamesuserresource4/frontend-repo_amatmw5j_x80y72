import React from 'react';
import Hero3D from './components/Hero3D';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 antialiased">
      {/* Ambient gradient lights */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <Hero3D />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="py-8 text-center text-sm text-slate-400/80">
        © {new Date().getFullYear()} P. Sathish Kumar. All rights reserved.
      </footer>
    </div>
  );
}
