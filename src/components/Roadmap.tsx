import React from 'react';
import { Calendar, PenTool, Rocket } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      id: 1,
      title: 'Days 1-30: Convening',
      icon: <Calendar className="w-5 h-5 text-obsidian" />,
      items: [
        'Publish SPSS Commons Blueprint',
        'Launch co-creation call to hubs & universities',
        'Identify 3 community partners per pilot',
        'Establish Working Group',
        'Map resources (Masakhane, Zenzeleni, XR)'
      ]
    },
    {
      id: 2,
      title: 'Days 31-60: Designing',
      icon: <PenTool className="w-5 h-5 text-obsidian" />,
      items: [
        'Deep engagement for Pilot 1',
        'Scoping visits & stakeholder mapping',
        'Technical architecture design',
        'Governance framework workshops',
        'Spatial & Embodied prototype sketches'
      ]
    },
    {
      id: 3,
      title: 'Days 61-90: Building',
      icon: <Rocket className="w-5 h-5 text-obsidian" />,
      items: [
        'First prototype of offline Ag-AI',
        'Draft Community Data Trust legal framework',
        'Initiate Pilot 3 consent process',
        'Launch interactive SPSS Commons Portal v1',
        'Announce first Contributor Cohort'
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
            90 Days to First Pilot. Tracking the execution momentum of the SPSS Commons framework.
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
      </div>
    </section>
  );
}
