import React from 'react';

export default function ResearchAgenda() {
  const questions = [
    "How do we design episodic synchronization protocols that respect community governance — not just technical consistency?",
    "What mathematical frameworks best represent weighted community testimony in collective AI decision-making?",
    "How do Spatial & Embodied experiences need to be redesigned for oral-primary, multi-generational knowledge transmission?",
    "What legal structures best operationalize community data trusts across different African jurisdictions?",
    "How do we train language models that respect oral knowledge without extracting it from community control?",
    "What energy profiles make edge AI genuinely viable in 4-hour-solar-cycle environments?",
    "How do informal trust networks need to be represented in digital governance systems without formalizing them into rigidity?",
    "What role can Spatial Computing play in making distributed communities feel genuinely co-present in collective decision-making?"
  ];

  return (
    <section id="research" className="py-24 px-6 md:px-12 lg:px-20 bg-canvas border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-semibold text-obsidian tracking-tight mb-3">
            What We Don't Know Yet
          </h2>
          <p className="font-sans text-subtle text-base max-w-xl mx-auto">
            An Open Research Agenda. Help us solve the hardest theoretical and practical challenges in frontier tech.
          </p>
        </div>

        {/* Masonry or flexible grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {questions.map((q, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid bg-surface border-l-4 border border-border border-l-obsidian rounded-r-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="font-sans text-sm text-obsidian leading-relaxed font-medium">
                {q}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
