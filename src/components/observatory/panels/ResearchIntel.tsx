import React, { useState } from 'react';
import { RESEARCH_QS_DATA } from '../ObservatoryData';
const W = 'rgba(255,255,255,';
const BD = `${W}0.07)`;

export default function ResearchIntel({ scrollIdx }: { scrollIdx: number }) {
  const [expandedRQ, setExpandedRQ] = useState<number | null>(null);
  const [filterLayer, setFilterLayer] = useState<string>('All');
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formQ, setFormQ] = useState('');
  const [formLayer, setFormLayer] = useState('Physical');

  const filtered = filterLayer === 'All' ? RESEARCH_QS_DATA : RESEARCH_QS_DATA.filter(r => r.layer === filterLayer);

  return (
    <div className="space-y-0 h-full overflow-hidden">
      <div className="flex gap-1 mb-2">
        {['All', 'Physical', 'Spatial', 'Social'].map(f => (
          <button key={f} onClick={() => setFilterLayer(f)}
            className="font-mono text-[8px] px-1.5 py-0.5 border transition-all"
            style={filterLayer === f ? { borderColor: '#f5a623', color: '#f5a623', background: '#f5a62312' } : { borderColor: `${W}0.06)`, color: `${W}0.2)` }}>
            {f}
          </button>
        ))}
      </div>
      {filtered.map((rq, i) => {
        const origIdx = RESEARCH_QS_DATA.indexOf(rq);
        return (
          <div key={origIdx}>
            <div className="py-1.5 border-b font-mono text-[10px] leading-relaxed transition-all cursor-pointer hover:bg-white/[0.03]"
              style={{ borderColor: BD, color: origIdx === scrollIdx ? '#fff' : `${W}0.25)`, background: origIdx === scrollIdx ? `${W}0.04)` : 'transparent' }}
              onClick={() => setExpandedRQ(expandedRQ === origIdx ? null : origIdx)}>
              <span className="text-white/15 mr-1.5">RQ-{String(origIdx + 1).padStart(2, '0')}</span>{rq.q}
            </div>
            {expandedRQ === origIdx && (
              <div className="px-3 py-2 text-[9px] font-mono border-b" style={{ borderColor: BD, background: `${W}0.02)` }}>
                <div className="text-white/30">Status: <span className="text-white/50">Open</span> · Assigned: <span className="text-white/50">Unassigned</span></div>
                <div className="text-white/30">Linked Pilot: <span className="text-white/50">{rq.pilot}</span> · Linked Layer: <span style={{ color: rq.layer === 'Physical' ? '#00e5ff' : rq.layer === 'Social' ? '#ff6b6b' : '#f5a623' }}>{rq.layer}</span></div>
              </div>
            )}
          </div>
        );
      })}
      {!showForm ? (
        <button onClick={() => { setShowForm(true); setSubmitted(false); }} className="mt-2 font-mono text-[9px] text-[#f5a623] hover:text-[#f5a623cc] transition-colors">[+ Submit RQ]</button>
      ) : submitted ? (
        <div className="mt-2 font-mono text-[9px] text-[#00ff88] p-2 border rounded" style={{ borderColor: '#00ff8830' }}>Submitted to SPSS Commons working group. Thank you.</div>
      ) : (
        <div className="mt-2 p-2 border rounded space-y-2" style={{ borderColor: BD, background: `${W}0.02)` }}>
          <input value={formQ} onChange={e => setFormQ(e.target.value)} placeholder="Research question" className="w-full bg-[#111] border text-white/70 font-mono text-[9px] px-2 py-1 rounded" style={{ borderColor: BD }} />
          <div className="flex gap-2 items-center">
            <select value={formLayer} onChange={e => setFormLayer(e.target.value)} className="bg-[#111] border text-white/70 font-mono text-[9px] px-2 py-1 rounded" style={{ borderColor: BD }}>
              <option>Physical</option><option>Spatial</option><option>Social</option>
            </select>
            <button onClick={() => setSubmitted(true)} className="font-mono text-[9px] text-[#f5a623] hover:underline">Submit →</button>
          </div>
        </div>
      )}
    </div>
  );
}
