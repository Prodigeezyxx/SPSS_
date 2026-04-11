import React from 'react';
import { Microscope, Handshake, Box, Scale, Banknote, SearchX } from 'lucide-react';

export default function JoinMovement() {
  const roles = [
    {
      icon: <Microscope className="w-8 h-8 mx-auto" strokeWidth={1.5} />,
      title: "Researchers",
      desc: "Episodic computing, African NLP, community governance expertise."
    },
    {
      icon: <Handshake className="w-8 h-8 mx-auto" strokeWidth={1.5} />,
      title: "Community Partners",
      desc: "Your knowledge, constraints, and traditions are the design authority."
    },
    {
      icon: <Box className="w-8 h-8 mx-auto" strokeWidth={1.5} />,
      title: "Spatial & Embodied Engineers",
      desc: "Build the immersive layer: edge AI, robotics, offline AR, voice-first protocols."
    },
    {
      icon: <Scale className="w-8 h-8 mx-auto" strokeWidth={1.5} />,
      title: "Policymakers",
      desc: "Design legal frameworks for data trusts and indigenous intellectual property."
    },
    {
      icon: <Banknote className="w-8 h-8 mx-auto" strokeWidth={1.5} />,
      title: "Funders",
      desc: "Patient capital aligned with community benefit covenants. Partnership, not charity."
    },
    {
      icon: <SearchX className="w-8 h-8 mx-auto" strokeWidth={1.5} />,
      title: "Critics",
      desc: "Challenge every assumption. We grow stronger through stress-testing."
    }
  ];

  return (
    <section id="join" className="py-32 px-6 md:px-12 lg:px-20 border-b border-border bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
            This Is an Invitation
          </h2>
          <p className="text-subtle text-base max-w-xl mx-auto">
            SPSS Commons is a methodology becoming a movement. We need:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {roles.map((role, idx) => (
            <div 
              key={idx} 
              className="group bg-canvas border border-border/80 text-center p-10 rounded-2xl transition-all duration-300 hover:border-obsidian/40 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-obsidian mb-6 group-hover:scale-110 transition-transform duration-300">
                {role.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-obsidian mb-3">
                {role.title}
              </h3>
              <p className="font-sans text-sm text-subtle leading-relaxed">
                {role.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="mailto:contact@spsscommons.org" 
            className="inline-flex items-center justify-center px-10 py-4 bg-obsidian text-white text-sm font-semibold rounded shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            Get Involved Now
          </a>
          <p className="mt-4 text-xs text-subtle/80 font-mono">
            Or reach out directly via community channels
          </p>
        </div>
      </div>
    </section>
  );
}
