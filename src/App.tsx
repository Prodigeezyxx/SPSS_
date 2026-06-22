import React, { useEffect, useRef, useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import { CircleDashed, ArrowRight, GitBranch, History, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import SPSSChecker from './components/SPSSChecker';
import SpatialEmbodiedLayer from './components/SpatialEmbodiedLayer';
import Roadmap from './components/Roadmap';
import Governance from './components/Governance';
import ResearchAgenda from './components/ResearchAgenda';
import JoinMovement from './components/JoinMovement';
import Citations from './components/Citations';
import SPSSObservatory from './components/observatory/SPSSObservatory';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 md:px-12 flex justify-between items-center backdrop-blur-md border-b transition-all duration-300 ${scrolled ? 'bg-surface/95 border-border/60 shadow-sm' : 'bg-canvas/90 border-transparent'}`}>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-obsidian text-canvas flex items-center justify-center rounded-sm">
          <CircleDashed className="w-2.5 h-2.5" strokeWidth={3} />
        </div>
        <span className="font-mono text-sm font-semibold tracking-tight text-obsidian">
          SPSS
        </span>
        <span className="font-mono text-[9px] text-subtle/40 tracking-wider uppercase hidden sm:inline">
          Commons
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <a href="#case" className="font-mono text-[10px] font-medium text-subtle uppercase tracking-wider hover:text-obsidian transition-colors">Case</a>
        <a href="#framework" className="font-mono text-[10px] font-medium text-subtle uppercase tracking-wider hover:text-obsidian transition-colors">Framework</a>
        <a href="#evidence" className="font-mono text-[10px] font-medium text-subtle uppercase tracking-wider hover:text-obsidian transition-colors">Evidence</a>
        <a href="#pilots" className="font-mono text-[10px] font-medium text-subtle uppercase tracking-wider hover:text-obsidian transition-colors">Pilots</a>
        <a href="#observatory" className="font-mono text-[10px] font-medium text-obsidian uppercase tracking-wider hover:text-obsidian transition-colors border-b border-obsidian pb-0.5">Observatory</a>
      </nav>

      <div className="flex items-center gap-4">
        <a href="#checker" className="hidden md:block font-mono text-[10px] font-medium text-subtle uppercase tracking-wider hover:text-obsidian transition-colors">
          SPSS Check
        </a>
        <a href="https://chat.whatsapp.com/FHoPpRitKpgEKFbClcXGYX" target="_blank" rel="noopener noreferrer" className="bg-obsidian text-white text-[10px] font-mono font-medium uppercase tracking-wider px-5 py-2 rounded transition-all duration-300 hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.3)] active:scale-[0.98]">
          Join Co-Creation
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-28 pb-16 gap-12">
      <div className="max-w-2xl space-y-8 relative z-10">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] font-medium text-subtle tracking-widest uppercase">
              Research Framework · v0.1
            </span>
            <span className="w-px h-3 bg-border"></span>
            <span className="font-mono text-[10px] text-subtle/60 tracking-wide">
              Originated by Iyobosa Rehoboth
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tighter text-obsidian leading-[1.08]">
            Spatial, Physical &amp;
            <br />
            Social Systems
          </h1>
          <p className="max-w-lg font-sans text-[15px] text-subtle leading-[1.7] tracking-tight">
            A living framework for operationalizing frontier technologies through Africa's indigenous intelligences. Designing with communities, not for them.
          </p>

        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a href="#observatory" className="group relative isolate overflow-hidden bg-obsidian text-white text-xs font-mono font-medium uppercase tracking-wider px-7 py-3 rounded transition-all duration-300 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.3)] active:scale-[0.98] flex items-center gap-2">
            <span>Enter Observatory</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="#checker" className="px-7 py-3 bg-transparent text-obsidian border border-border text-xs font-mono font-medium uppercase tracking-wider rounded transition-all duration-300 hover:bg-surface hover:border-obsidian/30">
            Run SPSS Check
          </a>
        </div>
      </div>

      <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-canvas via-accent/10 to-canvas opacity-50 blur-3xl"></div>
        <div className="premium-card w-full h-full p-6 relative overflow-hidden rounded-xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-amber to-coral"></div>
          <div className="h-full w-full flex flex-col">
            <div className="flex justify-between items-center mb-8 border-b border-border/50 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-subtle">
                  SPSS Architecture
                </span>
              </div>
              <div className="flex gap-2">
                <span className="w-12 h-1.5 rounded-full bg-border/50"></span>
              </div>
            </div>
            <div className="flex-1 relative">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <path d="M50,150 C100,150 100,80 150,80" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M50,150 C100,150 100,220 150,220" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M150,80 C200,80 200,120 250,120" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M150,220 C200,220 200,180 250,180" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M250,120 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>
                <path d="M250,180 L320,150" fill="none" stroke="#E5E5E5" strokeWidth="2"></path>

                <path d="M50,150 C100,150 100,80 150,80 C200,80 200,120 250,120 L320,150" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" className="signal-path"></path>

                <circle cx="50" cy="150" r="6" fill="#111" className="node-context"></circle>
                <text x="50" y="175" textAnchor="middle" fontFamily='"Space Grotesk", sans-serif' fontSize="10" fontWeight="600" fill="#111">
                  Social
                </text>

                <rect x="150" y="70" width="80" height="20" rx="4" fill="#FFFFFF" stroke="#333333" strokeWidth="1.5" className="node-assumptions"></rect>
                <text x="190" y="83" textAnchor="middle" fontFamily='"Space Grotesk", sans-serif' fontSize="9" fontWeight="600" fill="#111" dy="1">
                  Physical
                </text>

                <rect x="150" y="210" width="80" height="20" rx="4" fill="#FFFFFF" stroke="#E5E5E5"></rect>
                <rect x="250" y="170" width="60" height="20" rx="4" fill="#F5F5F7"></rect>

                <rect x="250" y="110" width="60" height="20" rx="4" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" className="node-evidence"></rect>
                <text x="280" y="123" textAnchor="middle" fontFamily='"Space Grotesk", sans-serif' fontSize="9" fontWeight="600" fill="#111" dy="1">
                  Spatial
                </text>

                <circle cx="320" cy="150" r="12" fill="#111" className="node-outcome"></circle>
                <path d="M316 150l3 3 5-5" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="outcome-check"></path>
                <text x="320" y="178" textAnchor="middle" fontFamily='"Space Grotesk", sans-serif' fontSize="10" fontWeight="600" fill="#111">
                  SPSS
                </text>
              </svg>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface border border-accent text-accent text-[10px] font-medium px-3 py-1.5 rounded shadow-xl">
                Framework Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Logos() {
  const orgs = [
    { name: 'Masakhane', desc: 'Community-owned NLP for 2,000+ African languages', url: 'https://masakhane.io' },
    { name: 'Imisi3D / ARVR Africa', desc: 'XR creation lab building Africa\'s spatial computing ecosystem', url: 'https://imisi3d.com' },
    { name: 'Africa Deep Tech', desc: 'Foundation incubating deep technology research across the continent', url: 'https://africadeeptech.com' },
    { name: 'Deep Learning Indaba', desc: '2026 theme: "Sovereign Intelligence — Africa\'s Path in Frontier AI"', url: 'https://deeplearningindaba.com' },
    { name: 'Zenzeleni', desc: 'Community-owned ISPs in rural South Africa', url: 'https://zenzeleni.net' },
    { name: 'Zipline', desc: 'Drone logistics serving 2,000+ health facilities across 3 African nations', url: 'https://flyzipline.com' },
    { name: 'Ushahidi', desc: 'Open-source crisis mapping — community data for collective action', url: 'https://ushahidi.com' },
    { name: 'Code for Africa', desc: 'Civic tech and AI for Good fellowship across 22 African countries', url: 'https://codeforafrica.org' },
  ];
  return (
    <section className="border-y border-border/60 py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs font-semibold text-subtle whitespace-nowrap text-center md:text-left uppercase tracking-widest mb-8">
          African Institutions That Demonstrate The Thesis (growing list)
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {orgs.map(o => (
            <a key={o.name} href={o.url} target="_blank" rel="noopener noreferrer"
              className="group border border-border/50 rounded-lg px-4 py-3 hover:border-obsidian/30 hover:bg-canvas transition-all duration-300">
              <span className="font-display text-sm font-bold text-obsidian tracking-tight block">{o.name}</span>
              <span className="text-[10px] text-subtle leading-snug block mt-1 group-hover:text-obsidian/70 transition-colors">{o.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function DecisionLifecycle() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !headerRef.current || !lineRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const travelDistance = rect.height - viewH;
      const scrolled = -rect.top;
      let progress = scrolled / travelDistance;
      progress = Math.max(0, Math.min(1, progress));

      if (progress > 0.02) headerRef.current.style.opacity = '1';
      else headerRef.current.style.opacity = '0';
      
      lineRef.current.style.height = (progress * 100) + '%';

      stepsRef.current.forEach((step) => {
        if (!step) return;
        const t = parseFloat(step.dataset.threshold || '0');
        if (progress >= t) {
          if (progress < t + 0.15) {
            step.classList.add('active');
            step.classList.replace('opacity-30', 'opacity-100');
            step.style.transform = 'scale(1.05)';
          } else {
            step.classList.add('active');
            step.classList.replace('opacity-30', 'opacity-50');
            step.style.transform = 'scale(1)';
          }
        } else {
          step.classList.remove('active');
          step.classList.replace('opacity-100', 'opacity-30');
          step.classList.replace('opacity-50', 'opacity-30');
          step.style.transform = 'scale(1)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="framework" className="relative w-full bg-canvas border-b border-border/60" style={{ height: '400vh' }}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(#11111110_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="max-w-4xl w-full px-6 md:px-12 relative z-10 flex flex-col items-center h-full py-20">
          <div ref={headerRef} className="text-center mb-12 shrink-0 opacity-0 transition-opacity duration-700">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-obsidian tracking-tight mb-3">
              The SPSS Architecture
            </h2>
            <p className="text-subtle text-sm max-w-md mx-auto">
              Three Interdependent Layers — One Integrated Design Philosophy.
            </p>
          </div>
          <div className="relative w-full max-w-2xl flex-1 flex flex-col justify-center my-auto">
            <div className="absolute left-1/2 top-4 bottom-4 w-px bg-border/60 -translate-x-1/2"></div>
            <div ref={lineRef} className="absolute left-1/2 top-4 w-px bg-accent -translate-x-1/2 transition-all duration-75 ease-linear h-0 max-h-[calc(100%-2rem)]"></div>
            <div className="space-y-16 py-8 relative">
              
              <div ref={el => stepsRef.current[0] = el} className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.1">
                <div className="w-[42%] text-right pr-8">
                  <span className="font-mono text-[10px] text-accent uppercase tracking-wider block mb-1">01 Social</span>
                  <h3 className="font-display text-base font-semibold text-obsidian">Community Intelligence</h3>
                  <p className="text-xs text-subtle mt-1 hidden md:block">Indigenous Knowledge, Trust Networks, Collective Decisions.</p>
                </div>
                <div className="relative shrink-0 z-10">
                  <div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-accent group-[.active]:bg-accent transition-colors duration-300"></div>
                </div>
                <div className="w-[42%] pl-8">
                  <div className="bg-surface border border-border p-3 rounded shadow-sm inline-block">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-obsidian">What technology should do, and for whom.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={el => stepsRef.current[1] = el} className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.3">
                <div className="w-[42%] text-right pr-8">
                  <div className="bg-surface border border-border p-3 rounded shadow-sm inline-block text-left">
                    <span className="text-[10px] text-amber block mb-1">Constraint</span>
                    <span className="text-xs font-medium text-obsidian">Energy, Networks, Hardware</span>
                  </div>
                </div>
                <div className="relative shrink-0 z-10">
                  <div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-amber group-[.active]:bg-amber transition-colors duration-300"></div>
                </div>
                <div className="w-[42%] pl-8">
                  <span className="font-mono text-[10px] text-amber uppercase tracking-wider block mb-1">02 Physical</span>
                  <h3 className="font-display text-base font-semibold text-obsidian">Actual Conditions</h3>
                  <p className="text-xs text-subtle mt-1 hidden md:block">What's achievable, not what's assumed.</p>
                </div>
              </div>

              <div ref={el => stepsRef.current[2] = el} className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.5">
                <div className="w-[42%] text-right pr-8">
                  <span className="font-mono text-[10px] text-coral uppercase tracking-wider block mb-1">03 Spatial</span>
                  <h3 className="font-display text-base font-semibold text-obsidian">Frontier Tech</h3>
                  <p className="text-xs text-subtle mt-1 hidden md:block">AI, LLMs, World Models, XR.</p>
                </div>
                <div className="relative shrink-0 z-10">
                  <div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-coral group-[.active]:bg-coral transition-colors duration-300"></div>
                </div>
                <div className="w-[42%] pl-8">
                  <div className="bg-surface border border-border p-3 rounded shadow-sm inline-flex items-center gap-3">
                    <div>
                      <div className="text-[10px] text-coral">The Intelligence Substrate</div>
                      <div className="text-xs font-bold text-obsidian">Creates new spaces for thought.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div ref={el => stepsRef.current[3] = el} className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.7">
                <div className="w-[42%] text-right pr-8">
                  <div className="bg-surface border border-border p-3 rounded shadow-sm inline-block max-w-[200px] text-left">
                    <div className="flex gap-1 mb-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-amber"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-coral"></div>
                    </div>
                    <span className="text-xs font-medium text-obsidian">Relationality Over Individualism. Sovereignty Over Extraction.</span>
                  </div>
                </div>
                <div className="relative shrink-0 z-10">
                  <div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-accent group-[.active]:bg-accent transition-colors duration-300"></div>
                </div>
                <div className="w-[42%] pl-8">
                  <span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">04 Principles</span>
                  <h3 className="font-display text-base font-semibold text-obsidian">Core Values</h3>
                  <p className="text-xs text-subtle mt-1 hidden md:block">The foundation of the framework.</p>
                </div>
              </div>

              <div ref={el => stepsRef.current[4] = el} className="lifecycle-step group flex items-center justify-between w-full opacity-30 transition-all duration-500" data-threshold="0.85">
                <div className="w-[42%] text-right pr-8">
                  <span className="font-mono text-[10px] text-subtle uppercase tracking-wider block mb-1">05 Result</span>
                  <h3 className="font-display text-base font-semibold text-obsidian">Integration</h3>
                  <p className="text-xs text-subtle mt-1 hidden md:block">Sustainability Over Scale.</p>
                </div>
                <div className="relative shrink-0 z-10">
                  <div className="w-3 h-3 rounded-full border border-border bg-canvas group-[.active]:border-accent group-[.active]:bg-accent transition-colors duration-300"></div>
                </div>
                <div className="w-[42%] pl-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-accent text-canvas text-xs font-semibold shadow-lg shadow-accent/20">
                    <span>SPSS Aligned</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TheCase() {
  return (
    <section id="case" className="py-32 px-6 md:px-12 lg:px-20 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-obsidian tracking-tight mb-6">
            The Evidence That Demands a Different Approach
          </h2>
          <p className="text-subtle text-lg max-w-2xl mx-auto">
            Why we cannot simply copy-paste global technology models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { val: "~600M", desc: "Africans lack reliable electricity access (IEA, 2024)" },
            { val: "85%", desc: "Sub-Saharan employment is informal (ILO, 2023)" },
            { val: "416M", desc: "Mobile users, yet 75% population unconnected (GSMA, 2025)" },
            { val: "2,000+", desc: "Languages, <100 in AI training data (Masakhane/CIGI, 2025)" }
          ].map((stat, i) => (
            <div key={i} className="bg-surface border border-border p-8 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:-translate-y-1 hover:border-obsidian/30">
              <div className="absolute top-0 left-0 w-full h-1 bg-obsidian rounded-t-xl opacity-20"></div>
              <span className="block font-display text-4xl font-bold text-obsidian mb-3">{stat.val}</span>
              <span className="block font-sans text-sm text-subtle leading-relaxed">{stat.desc}</span>
            </div>
          ))}
        </div>

        <div className="bg-surface border border-border rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-obsidian"></div>
          <p className="font-sans text-lg md:text-xl text-obsidian leading-relaxed max-w-4xl mx-auto pl-4">
            Standard technology frameworks assume constant electricity, high-speed internet, formal economic systems, and text-based interaction. These assumptions exclude the majority of Africa's 1.4 billion people from both participating in and benefiting from the frontier technology revolution. The SPSS framework inverts this logic: design for actual conditions first. The constraint becomes the innovation driver. The excluded community becomes the design authority.
          </p>
        </div>

        <div className="mt-12 bg-surface border border-border rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber"></div>
          <div className="pl-4">
            <h3 className="font-display text-lg font-semibold text-obsidian mb-3">What SPSS Integrates</h3>
            <p className="font-sans text-sm text-subtle leading-relaxed">
              SPSS draws from established traditions: the Appropriate Technology movement (Schumacher, 1970s), Participatory Design, Decolonial AI (Mohamed et al., 2020), and Data Sovereignty principles. Its specific contribution is integrating physical infrastructure constraints, frontier technology affordances, and community governance into a single evaluative architecture. Existing frameworks address these dimensions individually. SPSS treats them as interdependent — a technology that is physically viable but socially extractive, or socially grounded but physically impossible, fails the framework by design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const gridRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let current = 0;
        setActiveIndex(0);

        const interval = setInterval(() => {
          current++;
          if (current >= 6) {
            clearInterval(interval);
          } else {
            setActiveIndex(current);
          }
        }, 900);

        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lineRef.current) {
      const percentage = activeIndex <= 0 ? 0 : (activeIndex / 5) * 100;
      lineRef.current.style.width = percentage + '%';
    }
  }, [activeIndex]);

  const steps = [
    { num: '01', title: 'Healthcare Diagnostics', desc: 'How would AI diagnostic tools work in low-bandwidth environments? SPSS would prioritize local medical knowledge, offline capability, and community-governed health data.' },
    { num: '02', title: 'Agricultural Yield', desc: 'How would satellite imagery integrate with indigenous farming practices? SPSS would require predictive models that respect traditional land management and local data sovereignty.' },
    { num: '03', title: 'Financial Inclusion', desc: 'How would decentralized financial protocols map to existing community trust networks like Ajo and Esusu? SPSS designs from informal systems up, not banking models down.' },
    { num: '04', title: 'Urban Planning', desc: 'How would spatial computing model informal settlements? SPSS would require development plans co-created with residents, not imposed top-down.' },
    { num: '05', title: 'Language Preservation', desc: 'How would LLMs be trained on low-resource African languages without linguistic extraction? SPSS requires community data sovereignty and local governance of training corpora.' },
    { num: '06', title: 'Energy Distribution', desc: 'How would micro-grids be optimized using community-owned data? SPSS would balance physical constraints with social equity through community governance.' }
  ];

  return (
    <section id="pilots" className="py-24 px-6 md:px-12 lg:px-20 border-b border-border/60 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-obsidian tracking-tight mb-4">
              Where SPSS Should Be Tested
            </h2>
            <p className="font-sans text-subtle text-base leading-relaxed">
              Priority domains where the framework's thesis can be validated. These are not active pilots — they are target application areas.
            </p>
          </div>
          <span className="pb-1 border-b border-border text-sm font-medium text-subtle mb-2">
            Proposed Domains
          </span>
        </div>

        <div className="relative w-full">
          <div className="absolute top-[1.125rem] left-0 right-0 h-px bg-border/60 hidden lg:block z-0">
            <div ref={lineRef} className="h-full bg-accent w-0 transition-all duration-700 ease-in-out"></div>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12 relative z-10">
            {steps.map((step, i) => (
              <div 
                key={i} 
                className={`def-step group flex flex-col gap-4 ${activeIndex === i ? 'def-active' : 'def-inactive'}`}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <div className="flex items-center gap-4">
                  <div className="def-num w-9 h-9 bg-surface border border-border rounded flex items-center justify-center text-[10px] font-mono font-medium text-subtle shadow-sm transition-all duration-500 z-10">
                    {step.num}
                  </div>
                  <div className="h-px flex-1 bg-border/60 lg:hidden"></div>
                </div>
                <div className="def-content transition-all duration-500">
                  <h3 className="font-display text-sm font-semibold text-obsidian mb-1.5">{step.title}</h3>
                  <p className="text-xs text-subtle leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInit, setIsInit] = useState(true);

  const slides = [
    {
      quote: `"The combination of digital technology and human creativity in deploying it will revolutionize life by overcoming isolation, speeding up change, and taking success to scale."`,
      name: "Sam Dryden",
      title: "Director of Agricultural Development",
      img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: `"In my experience, in Africa there is space for innovation. And you don't have to look far... Look around you. You might be experiencing a problem that is a need in the community."`,
      name: "Sizwe Nzima",
      title: "Founder, Iyeza Health",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: `"Constraints are the most wonderful things in business, because constraints allow you to be innovative and come up with different solutions."`,
      name: "Michael Jordaan",
      title: "CEO, MonteGray Capital",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  const stats = [
    [
      { val: "20", lbl: "Assessment Questions" },
      { val: "4", lbl: "Evaluation Layers" },
      { val: "CC BY-SA 4.0", lbl: "Open License" }
    ],
    [
      { val: "8", lbl: "Open Research Questions" },
      { val: "18", lbl: "Academic Citations" },
      { val: "v0.1", lbl: "Framework Version" }
    ],
    [
      { val: "2", lbl: "Incubation Partners" },
      { val: "5", lbl: "Governance Protocols" },
      { val: "90", lbl: "Days to First Pilot" }
    ]
  ];

  useEffect(() => {
    setIsInit(false);
  }, [currentIndex]);

  return (
    <section className="py-32 bg-obsidian text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16">
          <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-4">
            Not endorsements — intellectual foundations
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
            Thinking That Shaped This Work
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative w-full" style={{ display: 'grid', gridTemplateAreas: '"stack"' }}>
              {slides.map((slide, i) => (
                <div 
                  key={i} 
                  className={`transition-all duration-700 ease-in-out flex flex-col justify-center ${currentIndex === i ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
                  style={{ gridArea: 'stack' }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tighter mb-8 leading-tight">{slide.quote}</h2>
                  <div className="flex items-center gap-4">
                    <img src={slide.img} alt={slide.name} className="w-12 h-12 rounded-full object-cover border border-white/30 shadow-sm" />
                    <div>
                      <div className="font-sans font-medium text-white">{slide.name}</div>
                      <div className="font-sans text-sm text-white/50">{slide.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-10">
              <button 
                onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setCurrentIndex(Math.min(slides.length - 1, currentIndex + 1))}
                disabled={currentIndex === slides.length - 1}
                className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-between gap-6 md:gap-0 md:space-y-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16">
            {stats[currentIndex].map((stat, i) => (
              <div key={i}>
                <div className={`font-display text-3xl md:text-4xl font-bold mb-1 transition-all duration-300 ease-out transform ${!isInit ? 'animate-in fade-in slide-in-from-bottom-2' : ''}`}>
                  {stat.val}
                </div>
                <div className={`font-sans text-sm text-white/50 transition-opacity duration-300 ease-out ${!isInit ? 'animate-in fade-in' : ''}`}>
                  {stat.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



function Limitations() {
  const tradeoffs = [
    { title: 'Slower Deployment', desc: 'SPSS-aligned solutions require deeper community engagement before building. This means longer development cycles and higher coordination costs compared to move-fast approaches.' },
    { title: 'Not For Emergencies', desc: 'Time-critical emergency deployments where speed outweighs sovereignty may not benefit from full SPSS alignment. The framework is designed for sustained infrastructure, not crisis response.' },
    { title: 'Scoring Is Provisional', desc: 'The Compliance Checker uses v0.1 scoring with equal layer weighting and arbitrary thresholds. These need empirical calibration through actual pilot data — which does not yet exist.' },
    { title: 'Synthesis, Not Invention', desc: 'SPSS integrates existing ideas (Appropriate Technology, Participatory Design, Decolonial AI, Data Sovereignty) into a combined evaluative lens. It does not claim to originate these individual concepts.' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-canvas border-b border-border/60">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-semibold text-obsidian tracking-tight mb-3">
            Limitations & Trade-offs
          </h2>
          <p className="font-sans text-subtle text-base max-w-xl mx-auto">
            Where this framework is weakest, and what it costs to use it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tradeoffs.map((item, idx) => (
            <div key={idx} className="bg-surface border border-border rounded-xl p-6 shadow-sm">
              <h4 className="font-display text-base font-semibold text-obsidian mb-2">{item.title}</h4>
              <p className="font-sans text-sm text-subtle leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-canvas py-20 px-6 md:px-12 lg:px-20 relative z-10 border-t border-border/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-sm space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-accent text-canvas flex items-center justify-center rounded-sm">
              <CircleDashed className="w-3 h-3" strokeWidth={3} />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-obsidian">
              SPSS COMMONS
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-obsidian">
              SPSS Commons · Originated by Iyobosa Rehoboth
            </p>
            <p className="text-xs font-mono text-subtle leading-relaxed mt-4 pt-4 border-t border-border/60">
              This document is open. Share it. Challenge it. Build on it.
            </p>
            <p className="text-[10px] text-subtle/70 mt-2 flex flex-col gap-2">
              <span>Licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline hover:text-obsidian transition-colors">Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</a></span>
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <img 
                  src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg" 
                  alt="Creative Commons Attribution-ShareAlike 4.0 International License" 
                  className="h-8 w-auto"
                />
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-obsidian uppercase tracking-wider">Framework</h4>
            <ul className="space-y-3 text-sm text-subtle">
              <li><a href="#case" className="hover:text-obsidian transition-colors">The Case</a></li>
              <li><a href="#framework" className="hover:text-obsidian transition-colors">Layers & Principles</a></li>
              <li><a href="#evidence" className="hover:text-obsidian transition-colors">Evidence Base</a></li>
              <li><a href="#observatory" className="hover:text-obsidian transition-colors">Observatory</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-obsidian uppercase tracking-wider">Initiatives</h4>
            <ul className="space-y-3 text-sm text-subtle">
              <li><a href="#pilots" className="hover:text-obsidian transition-colors">Pilot Programs</a></li>
              <li><a href="#governance" className="hover:text-obsidian transition-colors">Commons Protocol</a></li>
              <li><a href="#checker" className="hover:text-obsidian transition-colors">Compliance Checker <span className="ml-1 text-accent font-bold">✓</span></a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-obsidian uppercase tracking-wider">Community</h4>
            <ul className="space-y-3 text-sm text-subtle">
              <li><a href="#" className="hover:text-obsidian transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-obsidian transition-colors">Notion Wiki</a></li>
              <li><a href="#" className="hover:text-obsidian transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="w-full relative bg-canvas">
      <div className="fixed inset-0 z-0 technical-grid pointer-events-none"></div>
      <ThreeBackground />
      <Header />
      <div className="z-10 flex flex-col w-full relative">
        <Hero />
        <Logos />
        <SPSSObservatory />
        <DecisionLifecycle />
        <Governance />
        <TheCase />
        <HowItWorks />

        <Testimonials />
        <Limitations />
        <ResearchAgenda />
        <JoinMovement />
        <SPSSChecker />
        <Citations />
        <Footer />
      </div>
    </div>
  );
}

