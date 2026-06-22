import React, { useState } from 'react';
import { FAILURE_ARCHIVE } from '../ObservatoryData';

const W = 'rgba(255,255,255,';
const BD = `${W}0.07)`;
const LAYER_COLORS: Record<string, string> = { Physical: '#00e5ff', Social: '#ff6b6b', Spatial: '#f5a623' };

export default function FailureArchive() {
  const [sortLayer, setSortLayer] = useState<string | null>(null);
  const layers = ['Physical', 'Spatial', 'Social'];
  const cycleSortLayer = () => {
    if (!sortLayer) setSortLayer('Physical');
    else if (sortLayer === 'Physical') setSortLayer('Spatial');
    else if (sortLayer === 'Spatial') setSortLayer('Social');
    else setSortLayer(null);
  };
  const sorted = sortLayer ? [...FAILURE_ARCHIVE].sort((a, b) => (a.layer === sortLayer ? -1 : b.layer === sortLayer ? 1 : 0)) : FAILURE_ARCHIVE;

  return (
    <div className="p-4" style={{ background: '#0a0a0a', minHeight: 300 }}>
      <div className="font-mono text-[10px] text-white/50 mb-3 leading-relaxed">
        Failures are data. These cases are documented at the same prominence as successes.{' '}
        <a href="mailto:spss-commons@proton.me" className="text-[#f5a623] hover:underline">Submit a new case →</a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b" style={{ borderColor: BD }}>
              {['PROJECT', 'REGION'].map(h => (
                <th key={h} className="text-[8px] font-mono font-bold uppercase text-white/30 py-1.5 text-left px-2">{h}</th>
              ))}
              <th className="text-[8px] font-mono font-bold uppercase text-white/30 py-1.5 text-left px-2 cursor-pointer hover:text-white/60 transition-colors" onClick={cycleSortLayer}>
                LAYER VIOLATED {sortLayer ? `(${sortLayer})` : '↕'}
              </th>
              {['ROOT CAUSE', 'LESSON'].map(h => (
                <th key={h} className="text-[8px] font-mono font-bold uppercase text-white/30 py-1.5 text-left px-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((f, i) => (
              <tr key={i} className="border-b hover:bg-white/[0.02] transition-colors" style={{ borderColor: BD }}>
                <td className="text-[9px] font-mono text-white/70 py-2 px-2">{f.project}</td>
                <td className="text-[9px] font-mono text-white/40 py-2 px-2">{f.region}</td>
                <td className="py-2 px-2">
                  <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 border rounded" style={{ borderColor: LAYER_COLORS[f.layer], color: LAYER_COLORS[f.layer] }}>{f.layer}</span>
                </td>
                <td className="text-[9px] font-mono text-white/50 py-2 px-2 max-w-[200px]">{f.root}</td>
                <td className="text-[9px] font-mono text-white/60 py-2 px-2 max-w-[250px] italic">{f.lesson}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
