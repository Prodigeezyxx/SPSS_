import React, { useEffect, useRef, useState } from 'react';
import ThreeBackground from './components/ThreeBackground';
import { CircleDashed, ArrowRight, GitBranch, History, FileText, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-5 md:px-12 flex justify-between items-center backdrop-blur-md border-b border-border/50 transition-all duration-300 ${scrolled ? 'bg-surface/90 shadow-sm' : 'bg-canvas/90'}`}>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-accent text-canvas flex items-center justify-center rounded-sm">
          <CircleDashed className="w-3 h-3" strokeWidth={3} />
        </div>
        <span className="font-display text-lg font-bold tracking-tight bg-gradient-to-r from-amber to-coral bg-clip-text text-transparent">
          SPSS COMMONS
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#case" className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors">The Case</a>
        <a href="#framework" className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors">Framework</a>
        <a href="#evidence" className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors">Evidence</a>
        <a href="#pilots" className="font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors">Pilots</a>
      </nav>

      <div className="flex items-center gap-5">
        <a href="#checker" className="hidden md:block font-sans text-xs font-medium text-subtle hover:text-obsidian transition-colors">
          SPSS Check ✓
        </a>
        <button className="group relative isolate overflow-hidden bg-coral text-white text-xs font-semibold px-6 py-2.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.04] hover:shadow-[0_8px_24px_-4px_rgba(255,107,107,0.4)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-coral/20 focus:ring-offset-1">
          <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent z-10"></div>
          <span className="relative z-20">Join Co-Creation</span>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-32 pb-20 gap-16">
      <div className="max-w-2xl space-y-10 relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface border border-border/60 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber"></span>
            <span className="font-sans text-[11px] font-medium text-amber tracking-tight">
              Originated by Iyobosa Rehoboth · Africa Deep Tech Summit 2026
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-obsidian leading-[1.1]">
            Building Frontier Technology
            <br />
            <span className="text-accent">From the Ground Up.</span>
          </h1>
          <p className="max-w-md font-sans text-base text-subtle leading-relaxed">
            A living framework for operationalizing frontier technologies through Africa's indigenous intelligences. With Africa, For the World.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button className="group relative isolate overflow-hidden bg-coral text-white text-sm font-semibold px-8 py-3.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(255,107,107,0.4)] hover:ring-white/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-coral/20 focus:ring-offset-2 flex items-center gap-2">
            <div className="shimmer-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent z-0 pointer-events-none"></div>
            <span className="relative z-10">Explore Blueprint</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button className="px-8 py-3.5 bg-transparent text-obsidian border border-border text-sm font-medium rounded shadow-sm transition-all duration-300 ease-out hover:bg-surface hover:border-obsidian/40 hover:shadow-md active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-obsidian/10 focus:ring-offset-2">
            Run SPSS Check
          </button>
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
                <path d="M50,150 C100,150 100,80 150,80" fill="none" stroke="#2a3655" strokeWidth="2"></path>
                <path d="M50,150 C100,150 100,220 150,220" fill="none" stroke="#2a3655" strokeWidth="2"></path>
                <path d="M150,80 C200,80 200,120 250,120" fill="none" stroke="#2a3655" strokeWidth="2"></path>
                <path d="M150,220 C200,220 200,180 250,180" fill="none" stroke="#2a3655" strokeWidth="2"></path>
                <path d="M250,120 L320,150" fill="none" stroke="#2a3655" strokeWidth="2"></path>
                <path d="M250,180 L320,150" fill="none" stroke="#2a3655" strokeWidth="2"></path>

                <path d="M50,150 C100,150 100,80 150,80 C200,80 200,120 250,120 L320,150" fill="none" stroke="#00c9b1" strokeWidth="2.5" strokeLinecap="round" className="signal-path"></path>

                <circle cx="50" cy="150" r="6" fill="#00c9b1" className="node-context"></circle>
                <text x="50" y="175" textAnchor="middle" fontFamily='"Space Grotesk", sans-serif' fontSize="10" fontWeight="600" fill="#fff">
                  Social
                </text>

                <rect x="150" y="70" width="80" height="20" rx="4" fill="#131a2d" stroke="#f5a623" strokeWidth="1.5" className="node-assumptions"></rect>
                <text x="190" y="83" textAnchor="middle" fontFamily='"Space Grotesk", sans-serif' fontSize="9" fontWeight="600" fill="#fff" dy="1">
                  Physical
                </text>

                <rect x="150" y="210" width="80" height="20" rx="4" fill="#131a2d" stroke="#2a3655"></rect>
                <rect x="250" y="170" width="60" height="20" rx="4" fill="#1e293b"></rect>

                <rect x="250" y="110" width="60" height="20" rx="4" fill="#131a2d" stroke="#ff6b6b" strokeWidth="1.5" className="node-evidence"></rect>
                <text x="280" y="123" textAnchor="middle" fontFamily='"Space Grotesk", sans-serif' fontSize="9" fontWeight="600" fill="#fff" dy="1">
                  Spatial
                </text>

                <circle cx="320" cy="150" r="12" fill="#00c9b1" className="node-outcome"></circle>
                <path d="M316 150l3 3 5-5" stroke="#131a2d" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="outcome-check"></path>
                <text x="320" y="178" textAnchor="middle" fontFamily='"Space Grotesk", sans-serif' fontSize="10" fontWeight="600" fill="#fff">
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
  return (
    <section className="border-y border-border/60 py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
        <p className="text-xs font-semibold text-subtle whitespace-nowrap md:w-auto w-full text-center md:text-left uppercase tracking-widest">
          Precedents That Prove The Pattern
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <span className="font-display text-lg font-bold text-obsidian tracking-tight">Masakhane</span>
          <span className="font-display text-lg font-bold text-obsidian tracking-tight">Zenzeleni</span>
          <span className="font-display text-lg font-bold text-obsidian tracking-tight">Zipline</span>
          <span className="font-display text-lg font-bold text-obsidian tracking-tight">BRCK</span>
          <span className="font-display text-lg font-bold text-obsidian tracking-tight">Hello Tractor</span>
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
        <div className="absolute inset-0 bg-[radial-gradient(#00c9b110_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
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

function Features() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="font-sans text-4xl md:text-5xl font-semibold text-obsidian tracking-tight mb-6 leading-[1.1]">
              Structured reasoning.
              <span className="text-subtle block">Not just data points.</span>
            </h2>
            <p className="text-subtle text-lg leading-relaxed">
              Bridge the gap between raw analytics and executive decisions
              with a platform designed for defensibility.
            </p>
          </div>
          <a href="#" className="pb-1 border-b border-obsidian text-sm font-medium hover:opacity-70 transition-opacity mb-2">
            Explore Platform Features
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative z-10 p-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="max-w-md">
                  <div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-obsidian mb-3">Decision Lineage</h3>
                  <p className="text-subtle leading-relaxed">
                    Traverse the reasoning graph from outcome to assumption.
                    Every node is traceable.
                  </p>
                </div>
                <div className="hidden lg:block">
                  <div className="px-3 py-1 bg-canvas border border-border rounded text-[10px] font-mono text-subtle uppercase tracking-wider group-hover:text-obsidian group-hover:border-obsidian/30 transition-colors">
                    Live Trace
                  </div>
                </div>
              </div>

              <div className="mt-12 h-32 w-full relative flex items-center border-t border-border/40 pt-6 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 600 100" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <marker id="arrow-head" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
                      <path d="M0,0 L4,2 L0,4" fill="#111"></path>
                    </marker>
                  </defs>
                  <path d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" stroke="#E5E5E5" strokeWidth="1.5" strokeDasharray="4 4"></path>
                  <path d="M20,50 C100,50 120,20 200,20 C280,20 300,80 380,80 C460,80 480,50 560,50" fill="none" stroke="#111" strokeWidth="1.5" strokeDasharray="600" strokeDashoffset="600" className="transition-all duration-[1500ms] ease-in-out group-hover:stroke-dashoffset-0" markerEnd="url(#arrow-head)"></path>
                  <g className="transition-all duration-500 delay-0 opacity-100 group-hover:scale-110 origin-center">
                    <circle cx="20" cy="50" r="4" fill="#111"></circle>
                    <text x="20" y="70" textAnchor="middle" className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">INPUT</text>
                  </g>
                  <g className="transition-all duration-500 delay-[400ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
                    <circle cx="200" cy="20" r="4" fill="#fff" stroke="#111" strokeWidth="1.5"></circle>
                    <text x="200" y="40" textAnchor="middle" className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">LOGIC A</text>
                  </g>
                  <g className="transition-all duration-500 delay-[800ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
                    <circle cx="380" cy="80" r="4" fill="#fff" stroke="#111" strokeWidth="1.5"></circle>
                    <text x="380" y="100" textAnchor="middle" className="text-[8px] font-mono fill-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300">LOGIC B</text>
                  </g>
                  <g className="transition-all duration-500 delay-[1200ms] opacity-50 scale-75 group-hover:opacity-100 group-hover:scale-100 origin-center">
                    <circle cx="560" cy="50" r="4" fill="#111"></circle>
                    <text x="560" y="70" textAnchor="middle" className="text-[8px] font-mono fill-obsidian font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">RESULT</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500 flex flex-col">
            <div className="p-10 relative z-10 flex flex-col h-full">
              <div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
                <History className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-obsidian mb-3">Immutable Audit</h3>
              <p className="text-sm text-subtle leading-relaxed mb-8">
                Time-travel through your strategy. Inspect past states with zero ambiguity.
              </p>
              <div className="mt-auto relative w-full h-32 flex flex-col justify-end items-center">
                <div className="absolute w-[80%] h-12 bg-border/30 border border-border rounded-t-md top-4 scale-90 opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-500 ease-out"></div>
                <div className="absolute w-[90%] h-12 bg-canvas border border-border rounded-t-md top-8 scale-95 opacity-50 group-hover:opacity-80 group-hover:top-6 transition-all duration-500 ease-out delay-75"></div>
                <div className="relative w-full h-16 bg-white border border-border rounded shadow-sm flex items-center px-4 gap-4 z-10 transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:shadow-md">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-bold text-obsidian uppercase tracking-wide">Current State</span>
                      <span className="text-[10px] font-mono text-subtle">v2.4.1</span>
                    </div>
                    <div className="h-1 w-full bg-canvas rounded overflow-hidden">
                      <div className="h-full w-2/3 bg-obsidian/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-12 group relative bg-white border border-border rounded-xl overflow-hidden hover:border-obsidian/30 transition-all duration-500">
            <div className="p-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 max-w-lg">
                <div className="w-10 h-10 bg-canvas border border-border rounded flex items-center justify-center mb-6 text-obsidian shadow-sm">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-obsidian mb-2">Automated Synthesis</h3>
                <p className="text-subtle leading-relaxed">
                  Turn complex graph data into plain-language briefing
                  documents automatically. Maintain a single source of truth.
                </p>
              </div>
              <div className="flex-1 w-full flex items-center justify-center gap-6 h-32 relative">
                <div className="flex flex-col gap-2 relative">
                  <div className="w-10 h-12 bg-white border border-border shadow-sm rounded-sm flex items-center justify-center transition-all duration-700 ease-in-out group-hover:translate-x-12 group-hover:opacity-0 group-hover:scale-50">
                    <div className="w-4 h-0.5 bg-subtle/20"></div>
                  </div>
                  <div className="w-10 h-12 bg-white border border-border shadow-sm rounded-sm flex items-center justify-center absolute top-2 left-2 transition-all duration-700 ease-in-out delay-100 group-hover:translate-x-10 group-hover:opacity-0 group-hover:scale-50">
                    <div className="w-4 h-0.5 bg-subtle/20"></div>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full border border-dashed border-border flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-t border-obsidian transparent animate-spin [animation-duration:3s] opacity-0 group-hover:opacity-100"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-subtle group-hover:text-obsidian transition-colors">
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"></path>
                    <path d="M3 3v9h9"></path>
                  </svg>
                </div>
                <div className="w-24 h-32 bg-white border border-border shadow-lg rounded-sm p-4 space-y-3 transition-all duration-500 group-hover:shadow-xl group-hover:scale-105">
                  <div className="w-6 h-6 rounded bg-obsidian/5"></div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full bg-obsidian/10 rounded overflow-hidden">
                      <div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-300 ease-out"></div>
                    </div>
                    <div className="h-1.5 w-3/4 bg-obsidian/10 rounded overflow-hidden">
                      <div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-500 ease-out"></div>
                    </div>
                    <div className="h-1.5 w-5/6 bg-obsidian/10 rounded overflow-hidden">
                      <div className="h-full w-0 bg-obsidian group-hover:w-full transition-all duration-700 delay-700 ease-out"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    { num: '01', title: 'Healthcare Diagnostics', desc: 'Applying the SPSS framework to deploy AI diagnostic tools in low-bandwidth environments, prioritizing local medical knowledge and offline capabilities.' },
    { num: '02', title: 'Agricultural Yield Prediction', desc: 'Integrating satellite imagery with indigenous farming practices to create predictive models that respect traditional land management.' },
    { num: '03', title: 'Financial Inclusion', desc: 'Designing decentralized financial protocols that map to existing community trust networks (like Ajo/Esusu) rather than imposing Western banking models.' },
    { num: '04', title: 'Urban Planning', desc: 'Using spatial computing to model informal settlements, ensuring that development plans are co-created with residents rather than imposed top-down.' },
    { num: '05', title: 'Language Preservation', desc: 'Building LLMs trained on low-resource African languages, ensuring data sovereignty and preventing linguistic extraction.' },
    { num: '06', title: 'Energy Distribution', desc: 'Optimizing micro-grids using community-owned data, balancing physical constraints with social equity.' }
  ];

  return (
    <section id="pilots" className="py-24 px-6 md:px-12 lg:px-20 border-b border-border/60 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-obsidian tracking-tight mb-4">
              Evidence in Action
            </h2>
            <p className="font-sans text-subtle text-base leading-relaxed">
              The framework applied to real-world challenges.
            </p>
          </div>
          <a href="#" className="pb-1 border-b border-accent text-sm font-medium text-accent hover:opacity-70 transition-opacity mb-2">
            View All Case Studies
          </a>
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
      quote: `"The SPSS framework gives us a vocabulary to discuss what was previously invisible—the social and physical realities that determine whether a technology actually works in our context."`,
      name: "Dr. Amina Diop",
      title: "Director, West African AI Policy Institute",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: `"We stopped trying to import Silicon Valley models and started building from our own ground truth. The difference in adoption and sustainability has been night and day."`,
      name: "Kwame Osei",
      title: "Founder, AgriTech Solutions",
      img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: `"This isn't just theory. It's a practical blueprint for how we ensure the next wave of frontier technology doesn't just extract from Africa, but empowers it."`,
      name: "Nneka Eze",
      title: "Venture Partner",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  const stats = [
    [
      { val: "3x", lbl: "Higher Adoption" },
      { val: "100%", lbl: "Data Sovereignty" },
      { val: "Zero", lbl: "Extraction" }
    ],
    [
      { val: "50+", lbl: "Active Pilots" },
      { val: "12", lbl: "Countries" },
      { val: "Full", lbl: "Alignment" }
    ],
    [
      { val: "10k+", lbl: "Community Nodes" },
      { val: "98%", lbl: "Uptime" },
      { val: "100%", lbl: "Trust" }
    ]
  ];

  useEffect(() => {
    setIsInit(false);
  }, [currentIndex]);

  return (
    <section className="py-32 bg-obsidian text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#00c9b1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
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
                    <img src={slide.img} alt={slide.name} className="w-12 h-12 rounded-full object-cover border border-accent/30 shadow-sm" />
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
                className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-accent/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setCurrentIndex(Math.min(slides.length - 1, currentIndex + 1))}
                disabled={currentIndex === slides.length - 1}
                className="group w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-accent/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-between gap-6 md:gap-0 md:space-y-12 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16">
            {stats[currentIndex].map((stat, i) => (
              <div key={i}>
                <div className={`font-display text-3xl md:text-4xl font-bold mb-1 transition-all duration-300 ease-out transform ${!isInit ? 'animate-in fade-in slide-in-from-bottom-2' : ''} ${i === 0 ? 'text-accent' : i === 1 ? 'text-amber' : 'text-coral'}`}>
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

function Pricing() {
  const [selectedId, setSelectedId] = useState('pricing-pro');

  const cards = [
    { id: 'pricing-hobby', title: 'Observer', price: 'Free', period: '', desc: 'For researchers and students exploring the SPSS framework.', features: ['Access to public blueprints', 'Community forum access', 'Standard documentation'], btnText: 'Join Community' },
    { id: 'pricing-pro', title: 'Co-Creator', price: 'Contribute', period: '', desc: 'For technologists actively building aligned solutions.', features: ['Submit to the blueprint registry', 'Peer review access', 'Working group participation'], btnText: 'Apply to Contribute' },
    { id: 'pricing-ent', title: 'Institutional', price: 'Partner', period: '', desc: 'For organizations deploying frontier tech in African contexts.', features: ['Dedicated framework guidance', 'Pilot program integration', 'Policy advocacy support'], btnText: 'Contact Partnerships' }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-20 border-b border-border bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian tracking-tight mb-4">
            Join the Commons
          </h2>
          <p className="text-subtle text-base">
            This is an open, collaborative effort. Find your place in the ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const isSelected = selectedId === card.id;
            const isPro = card.id === 'pricing-pro';
            
            return (
              <div 
                key={card.id}
                onClick={() => setSelectedId(card.id)}
                className={`pricing-card group relative p-8 rounded-xl flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent pricing-transition
                  ${isSelected ? 'scale-[1.02] shadow-2xl z-10 ring-1 ring-accent/20 opacity-100' : 'scale-[0.98] opacity-60 hover:opacity-90 hover:shadow-xl'}
                  ${isPro ? 'bg-obsidian text-white shadow-accent/10' : 'bg-canvas border text-obsidian'}
                  ${isSelected && !isPro ? 'border-accent' : (!isPro ? 'border-border' : 'border-transparent')}
                `}
                role="button" 
                tabIndex={0}
              >
                {!isPro && <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>}
                
                <div className="mb-4 relative z-10">
                  <span className={`font-semibold ${isPro ? 'text-white' : 'text-obsidian'}`}>{card.title}</span>
                </div>
                <div className="mb-4 flex items-baseline gap-1 relative z-10">
                  <span className={`font-display text-3xl font-semibold ${isPro ? 'text-accent' : 'text-obsidian'}`}>{card.price}</span>
                  {card.period && <span className={`text-sm ${isPro ? 'text-white/60' : 'text-subtle'}`}>{card.period}</span>}
                </div>
                <p className={`text-sm mb-8 leading-relaxed relative z-10 ${isPro ? 'text-white/60' : 'text-subtle'}`}>
                  {card.desc}
                </p>
                <ul className="space-y-4 mb-8 flex-1 relative z-10">
                  {card.features.map((feat, i) => (
                    <li key={i} className={`flex gap-3 text-sm ${isPro ? 'text-white/80' : 'text-subtle'}`}>
                      <span className={isPro ? 'text-accent' : 'text-accent'}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg text-xs font-semibold transition-all duration-300 ease-out active:scale-[0.97] active:duration-100 relative z-10
                  ${isPro ? 'bg-accent text-canvas hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,201,177,0.3)]' : 'border border-border text-obsidian bg-canvas hover:scale-[1.03] hover:border-accent hover:shadow-[0_0_15px_rgba(0,201,177,0.1)]'}
                `}>
                  {card.btnText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-canvas py-20 px-6 md:px-12 lg:px-20 relative z-10 border-t border-border/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-xs space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-accent rounded-sm"></div>
            <span className="font-display font-bold text-sm tracking-tight text-obsidian">SPSS COMMONS</span>
          </div>
          <p className="text-xs text-subtle leading-relaxed">
            A living framework for operationalizing frontier technologies through Africa's indigenous intelligences.
          </p>
          <div className="text-[10px] text-subtle/60">
            Originated by Iyobosa Rehoboth<br/>
            Africa Deep Tech Summit 2026
          </div>
        </div>

        <div className="flex gap-16">
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-obsidian">Framework</h4>
            <ul className="space-y-2 text-xs text-subtle">
              <li><a href="#" className="hover:text-accent transition-colors">Social Layer</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Physical Layer</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Spatial Layer</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-obsidian">Resources</h4>
            <ul className="space-y-2 text-xs text-subtle">
              <li><a href="#" className="hover:text-accent transition-colors">Blueprints</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">SPSS Checker</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-obsidian">Community</h4>
            <ul className="space-y-2 text-xs text-subtle">
              <li><a href="#" className="hover:text-accent transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contribute</a></li>
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
        <DecisionLifecycle />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}

