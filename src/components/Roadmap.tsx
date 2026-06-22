import React from 'react';
import { Calendar, PenTool, Rocket } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      id: 1,
      title: 'Days 1-30: Convening',
      icon: <Calendar className="w-5 h-5 text-obsidian" />,
      items: [
        '✓ Publish SPSS Commons Blueprint & interactive portal',
        'Launch open co-creation call via community channels',
        'Identify potential community partners for first pilot',
        'Form initial Working Group from ARVR Africa & Africa Deep Tech networks',
        'Map existing resources and potential collaborators'
      ]
    },
    {
      id: 2,
      title: 'Days 31-60: Scoping',
      icon: <PenTool className="w-5 h-5 text-obsidian" />,
      items: [
        'Select and engage first pilot community partner',
        'Conduct stakeholder mapping and needs assessment',
        'Draft technical requirements for first pilot',
        'Begin governance framework discussions with community',
        'Sketch minimum viable prototypes grounded in physical constraints'
      ]
    },
    {
      id: 3,
      title: 'Days 61-90: Building',
      icon: <Rocket className="w-5 h-5 text-obsidian" />,
      items: [
        'Develop first minimum viable prototype for selected pilot domain',
        'Begin Community Data Trust consultation process',
        'Open applications for first Contributor Cohort',
        'Publish first progress report with honest assessment',
        'Identify funding requirements for sustained pilot operations'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-32 px-6 md:px-12 lg:px-20 bg-canvas border-b border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
            From Blueprint to Reality
          </h2>
          <p className="font-sans text-subtle text-base max-w-xl mx-auto">
            90-day roadmap for reaching the first pilot. Timelines are resource-dependent and will be updated transparently.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
          
          <div className="space-y-16 md:space-y-24">
            {phases.map((phase, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div key={phase.id} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Center Dot / Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-surface border border-border shadow-sm z-10">
                    {phase.icon}
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-[45%] pl-20 md:pl-0 flex ${isEven ? 'md:justify-start md:pl-16' : 'md:justify-end md:pr-16'}`}>
                    <div className="bg-surface border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 w-full group relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-border/40 group-hover:bg-obsidian/20 transition-colors duration-300"></div>
                      <h3 className="font-display text-2xl font-semibold text-obsidian mb-6">
                        {phase.title}
                      </h3>
                      <ul className="space-y-4">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-obsidian mt-2"></span>
                            <span className="font-sans text-sm text-subtle leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-mono text-xs text-subtle/60 max-w-lg mx-auto leading-relaxed">
            Resource dependency note: This roadmap assumes a working group of 3-5 active contributors and access to at least one willing community partner. Timelines will shift based on actual resources available. We will document delays as transparently as progress.
          </p>
        </div>
      </div>
    </section>
  );
}
