import React, { useState } from 'react';
import { DATA_PROVENANCE, SOLUTION_TERRITORIES } from '../ObservatoryData';

const W = 'rgba(255,255,255,';
const A = '#F7931E';
const BD = `${W}0.07)`;

function Num({ val, suffix }: { val: number; suffix: string }) {
  return <span>{suffix === '<' ? '<' : ''}{val >= 100 ? Math.round(val) : val}{suffix === '<' ? '' : suffix}</span>;
}

function ProvenanceIcon({ tag }: { tag: string }) {
  const [show, setShow] = useState(false);
  const d = DATA_PROVENANCE[tag];
  if (!d) return null;
  return (
    <span className="relative inline-block ml-1" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <span className="text-[8px] text-white/20 cursor-help">ⓘ</span>
      {show && (
        <div className="obs-tooltip" style={{ left: 0, bottom: '100%', marginBottom: 4, whiteSpace: 'nowrap' }}>
          Source: {d.source} · Year: {d.year} · Confidence: {d.confidence}
        </div>
      )}
    </span>
  );
}

export default function RealityIndex({ onSolutionClick }: { onSolutionClick?: (nodeId: string) => void }) {
  const constraints = [
    { v: 600, s: 'M', l: 'no grid energy', tag: '600M' },
    { v: 75, s: '%', l: 'no cloud compute', tag: '75%' },
    { v: 97, s: '%', l: 'languages no AI model', tag: '97%' },
    { v: 85, s: '%', l: 'informal economy', tag: '85%' },
  ];
  const opportunities = [
    { v: 1.4, s: 'B', l: 'potential users', tag: '1.4B' },
    { v: 2000, s: '+', l: 'languages to model', tag: '2000+' },
    { v: 332, s: 'B$', l: 'mobile money/yr', tag: '332B$' },
    { v: 6.5, s: 'kWh', l: 'peak solar (compute power)', tag: '6.5kWh' },
  ];

  return (
    <div className="grid grid-cols-3 gap-x-3 gap-y-2">
      <div>
        <div className="text-[8px] font-mono uppercase tracking-widest mb-2" style={{ color: `${W}0.3)` }}>CONSTRAINTS</div>
        {constraints.map((d, i) => (
          <div key={i} className="mb-2 border-l pl-2" style={{ borderColor: `${W}0.1)` }}>
            <div className="font-mono text-base font-bold text-white leading-none"><Num val={d.v} suffix={d.s} /><ProvenanceIcon tag={d.tag} /></div>
            <div className="font-mono text-[8px] text-white/25">{d.l}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="text-[8px] font-mono uppercase tracking-widest mb-2" style={{ color: A + 'AA' }}>OPPORTUNITY</div>
        {opportunities.map((d, i) => (
          <div key={i} className="mb-2 border-l pl-2" style={{ borderColor: A + '30' }}>
            <div className="font-mono text-base font-bold text-white leading-none"><Num val={d.v} suffix={d.s} /><ProvenanceIcon tag={d.tag} /></div>
            <div className="font-mono text-[8px] text-white/25">{d.l}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="text-[8px] font-mono uppercase tracking-widest mb-2" style={{ color: '#f5a623AA' }}>SOLUTION TERRITORY</div>
        {SOLUTION_TERRITORIES.map((sol, i) => (
          <div key={i} className="mb-2">
            <button onClick={() => onSolutionClick?.(sol.node)}
              className="font-mono text-[8px] text-left px-2 py-1.5 border rounded transition-all hover:bg-[#f5a62315] hover:border-[#f5a62360] w-full"
              style={{ borderColor: BD, color: '#f5a623' }}>
              {sol.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
