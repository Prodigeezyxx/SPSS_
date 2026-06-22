import React, { useState, useEffect } from 'react';

const REALITY = [
  { val: 600, unit: 'M', label: 'without reliable electricity', src: 'IEA 2024' },
  { val: 75, unit: '%', label: 'of population unconnected', src: 'GSMA 2025' },
  { val: 100, unit: '<', label: 'African languages in AI data', src: 'CIGI 2025' },
  { val: 85, unit: '%', label: 'of employment is informal', src: 'ILO 2023' },
];
const OPPORTUNITY = [
  { val: 1.4, unit: 'B', label: 'potential technology users', src: 'UN Population 2024' },
  { val: 2000, unit: '+', label: 'languages — untapped AI frontier', src: 'Ethnologue' },
  { val: 332, unit: 'B$', label: 'mobile money transactions/yr', src: 'GSMA 2024' },
  { val: 60, unit: '%', label: "of world's uncultivated arable land", src: 'McKinsey' },
];

function AnimNum({ target, suffix, dur=2000 }:{ target:number, suffix:string, dur?:number }) {
  const [v, setV] = useState(0);
  useEffect(()=>{
    const start = Date.now();
    const tick = () => {
      const t = Math.min((Date.now()-start)/dur, 1);
      const ease = 1-Math.pow(1-t, 3);
      setV(Math.round(target*ease*10)/10);
      if(t<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  },[target, dur]);
  const display = target>=100? Math.round(v) : v;
  return <span>{suffix==='<'?'<':''}{display}{suffix==='<'?'':suffix}</span>;
}

export default function RealityCounter() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-white/40" />
            <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">The Reality</span>
          </div>
          <div className="space-y-6">
            {REALITY.map((r,i)=>(
              <div key={i} className="border-l-2 border-white/20 pl-4">
                <div className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                  <AnimNum target={r.val} suffix={r.unit} />
                </div>
                <div className="text-sm text-white/50 mt-0.5">{r.label}</div>
                <div className="text-[10px] text-white/25 font-mono mt-0.5">{r.src}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-amber" />
            <span className="text-xs font-semibold text-amber uppercase tracking-widest">The Opportunity</span>
          </div>
          <div className="space-y-6">
            {OPPORTUNITY.map((r,i)=>(
              <div key={i} className="border-l-2 border-amber/40 pl-4">
                <div className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                  <AnimNum target={r.val} suffix={r.unit} />
                </div>
                <div className="text-sm text-white/50 mt-0.5">{r.label}</div>
                <div className="text-[10px] text-white/25 font-mono mt-0.5">{r.src}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-xs text-white/30 font-mono mt-6 text-center">
        Same continent. Two framings. SPSS designs from both simultaneously.
      </p>
    </div>
  );
}
