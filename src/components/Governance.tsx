import React from 'react';
import { BookOpen, Users, ShieldAlert, FileText, ArrowLeftRight } from 'lucide-react';

export default function Governance() {
  const protocols = [
    {
      title: 'Open Methodology',
      desc: 'The framework is open. Individual pilots and data are legally and functionally owned by their respective communities.',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: 'Tiered Participation',
      desc: 'Clear, documented pathways from Observer to Core Circle contributor. No opaque gatekeeping or walled gardens.',
      icon: <Users className="w-5 h-5" />
    },
    {
      title: 'Adversarial Review',
      desc: 'Every pilot must be aggressively stress-tested before deployment. Who could be harmed? What structural risks exist?',
      icon: <ShieldAlert className="w-5 h-5" />
    },
    {
      title: 'Living Documentation',
      desc: 'Failures are documented as prominently as successes. We share post-mortems transparently to build ecosystem resilience.',
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: 'Benefit Return',
      desc: 'Commercial applications utilizing the Commons must demonstrate explicit benefit return to originating communities.',
      icon: <ArrowLeftRight className="w-5 h-5" />
    }
  ];

  return (
    <section id="governance" className="py-24 px-6 md:px-12 lg:px-20 border-b border-border/60 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-semibold text-obsidian tracking-tight mb-3">
            The Commons Protocol
          </h2>
          <p className="font-sans text-subtle text-base max-w-xl mx-auto">
            Governing SPSS openly. A structural commitment to transparency, community ownership, and shared progress.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {protocols.map((item, idx) => (
            <div 
              key={idx} 
              className="w-full md:w-[calc(33%-1rem)] min-w-[280px] bg-canvas border border-border/80 rounded-xl p-6 transition-all duration-300 hover:border-obsidian/30 hover:shadow-md hover:-translate-y-1"
            >
              <div className="w-10 h-10 bg-surface border border-border rounded flex items-center justify-center text-obsidian mb-5 shadow-sm">
                {item.icon}
              </div>
              <h4 className="font-display text-lg font-semibold text-obsidian mb-2">
                {item.title}
              </h4>
              <p className="font-sans text-sm text-subtle leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
