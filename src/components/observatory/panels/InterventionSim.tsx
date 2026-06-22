import React, { useState, useMemo } from 'react';
import { COUNTRIES, computeSRI } from '../ObservatoryData';

const W = 'rgba(255,255,255,';
const BD = `${W}0.07)`;

export default function InterventionSim() {
  const [selectedCode, setSelectedCode] = useState(COUNTRIES[0].code);
  const [solar, setSolar] = useState(0);
  const [langModels, setLangModels] = useState(0);
  const [dataTrusts, setDataTrusts] = useState(0);

  const country = COUNTRIES.find(c => c.code === selectedCode) || COUNTRIES[0];
  const baseSRI = computeSRI(country).sri;

  const projected = useMemo(() => {
    const mod = { ...country };
    mod.energy = Math.min(100, mod.energy + (solar / 100) * 0.08 * 100);
    mod.aiTalent = Math.min(100, mod.aiTalent + langModels * 0.15 * 100 / 100);
    mod.community = Math.min(100, mod.community + (dataTrusts / 10) * 0.10 * 100 / 100);
    return computeSRI(mod).sri;
  }, [country, solar, langModels, dataTrusts]);

  const delta = projected - baseSRI;
  const yearToTarget = delta > 0 ? Math.round(2025 + (80 - baseSRI) / delta) : 0;
  const barWidth = Math.min(100, Math.max(0, (projected / 100) * 100));

  const resetAll = () => { setSolar(0); setLangModels(0); setDataTrusts(0); };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6" style={{ background: '#0a0a0a', minHeight: 300 }}>
      {/* Left — selector */}
      <div>
        <div className="text-[8px] font-mono uppercase tracking-widest text-white/30 mb-2">SELECT COUNTRY</div>
        <select value={selectedCode} onChange={e => setSelectedCode(e.target.value)}
          className="w-full bg-[#111] border text-white/80 font-mono text-[11px] px-3 py-2 rounded mb-4" style={{ borderColor: BD }}>
          {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
        </select>

        <div className="space-y-4">
          {[
            { label: '+ Energy installations', value: solar, set: setSolar, min: 0, max: 500, step: 10, unit: '' },
            { label: '+ Language models trained', value: langModels, set: setLangModels, min: 0, max: 20, step: 1, unit: '' },
            { label: '+ Community data trusts', value: dataTrusts, set: setDataTrusts, min: 0, max: 100, step: 5, unit: '%' },
          ].map(s => (
            <div key={s.label}>
              <div className="flex justify-between text-[9px] font-mono text-white/40 mb-1">
                <span>{s.label}</span><span className="text-white/60">{s.value}{s.unit}</span>
              </div>
              <input type="range" min={s.min} max={s.max} step={s.step} value={s.value}
                onChange={e => s.set(Number(e.target.value))}
                className="w-full obs-slider" />
            </div>
          ))}
        </div>

        <button onClick={resetAll} className="mt-4 font-mono text-[9px] text-white/30 hover:text-white/60 transition-colors border px-3 py-1 rounded" style={{ borderColor: BD }}>
          ↺ Reset interventions
        </button>
      </div>

      {/* Right — results */}
      <div className="flex flex-col justify-center">
        <div className="text-[8px] font-mono uppercase tracking-widest text-white/30 mb-4">PROJECTION</div>
        <div className="flex items-end gap-3 mb-4">
          <div>
            <div className="text-[9px] font-mono text-white/30">Current SRI</div>
            <div className="font-mono text-2xl font-bold text-white">{baseSRI}</div>
          </div>
          <div className="font-mono text-white/20 text-lg pb-1">→</div>
          <div>
            <div className="text-[9px] font-mono text-white/30">Projected</div>
            <div className="font-mono text-2xl font-bold" style={{ color: '#00ff88' }}>{projected}</div>
          </div>
          <div className="font-mono text-lg pb-1" style={{ color: delta > 0 ? '#00ff88' : delta < 0 ? '#ff3b3b' : 'rgba(255,255,255,0.3)' }}>
            {delta > 0 ? `+${delta}` : delta}
          </div>
        </div>

        {/* Bar */}
        <div className="h-3 rounded-full bg-white/5 mb-3 overflow-hidden relative">
          <div className="h-full rounded-full transition-all duration-500 absolute left-0 top-0" style={{ width: `${(baseSRI / 100) * 100}%`, background: 'rgba(255,255,255,0.15)' }} />
          <div className="h-full rounded-full transition-all duration-500 absolute left-0 top-0" style={{ width: `${barWidth}%`, background: '#00ff88' }} />
        </div>

        {delta > 0 && yearToTarget > 2025 && yearToTarget < 2100 && (
          <div className="font-mono text-[10px] text-white/40 mb-4">
            At this intervention rate → SRI target reached by: <span className="text-white/70 font-bold">{yearToTarget}</span>
          </div>
        )}

        <div className="font-mono text-[8px] text-white/20 leading-relaxed mt-4 border-t pt-3" style={{ borderColor: BD }}>
          Predictions are linear projections only. Real outcomes depend on governance, community adoption, and compounding factors not modeled here. This tool is for planning, not forecasting.
        </div>
      </div>
    </div>
  );
}
