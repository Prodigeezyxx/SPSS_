import React, { useState, useMemo } from 'react';
import { COUNTRIES, computeSRI, LAYER_METRICS, GLOBAL_BASELINES } from '../ObservatoryData';

const W = 'rgba(255,255,255,';
const BD = `${W}0.07)`;
const A = '#F7931E';

export default function SRIPanel() {
  const [showSensitivity, setShowSensitivity] = useState(false);
  const [energyWeight, setEnergyWeight] = useState(0.40);
  const [showGlobal, setShowGlobal] = useState(false);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [mapPopupCb, setMapPopupCb] = useState<((c: typeof COUNTRIES[0]) => void) | null>(null);

  const sorted = useMemo(() => {
    return [...COUNTRIES].map(c => {
      const s = computeSRI(c, energyWeight);
      const layers = [
        { name: 'Physical', val: s.physical, color: '#00e5ff' },
        { name: 'Social', val: s.social, color: '#ff6b6b' },
        { name: 'Spatial', val: s.spatial, color: '#f5a623' },
      ];
      const lagging = layers.reduce((a, b) => a.val < b.val ? a : b);
      const others = layers.filter(l => l.name !== lagging.name);
      const avgOthers = (others[0].val + others[1].val) / 2;
      const dominant = layers.reduce((a, b) => a.val > b.val ? a : b);
      const sriIfFixed = (() => {
        const mod = { ...c };
        if (lagging.name === 'Physical') { mod.energy = Math.min(100, mod.energy + (avgOthers - lagging.val) * 0.7); mod.connect = Math.min(100, mod.connect + (avgOthers - lagging.val) * 0.5); }
        else if (lagging.name === 'Social') { mod.community = Math.min(100, mod.community + (avgOthers - lagging.val) * 0.6); mod.youth = Math.min(40, mod.youth + (avgOthers - lagging.val) * 0.1); }
        else { mod.compute = Math.min(100, mod.compute + (avgOthers - lagging.val) * 0.6); mod.aiTalent = Math.min(100, mod.aiTalent + (avgOthers - lagging.val) * 0.4); }
        return computeSRI(mod, energyWeight).sri;
      })();
      const uncertainty = Math.round(s.sri * 0.11);
      return { c, s, lagging, dominant, sriIfFixed, uncertainty, others, avgOthers };
    }).sort((a, b) => b.s.sri - a.s.sri);
  }, [energyWeight]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border-t" style={{ borderColor: BD }}>
      {/* Formula */}
      <div className="border-r p-6" style={{ borderColor: BD, background: '#0c0c0c' }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70">SPSS READINESS INDEX (SRI)</span>
          <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/40">v0.1 · <span className="obs-blink-amber">CALIBRATING</span></span>
        </div>
        <div className="font-mono text-base text-white mb-4 p-4 border rounded" style={{ borderColor: BD, background: 'rgba(0,0,0,0.3)' }}>
          <div className="text-white/60 text-[10px] mb-2">// The SPSS thesis encoded as mathematics</div>
          <div className="text-white">SRI = <span className="text-[#00e5ff]">GM</span>(P, S, Sp) × (1 + <span className="text-[#a78bfa]">B</span>) / 2 × 100</div>
        </div>

        {/* Lagging Layer Detector */}
        <div className="mb-3 p-3 border rounded" style={{ borderColor: '#f5a62330', background: '#f5a62308' }}>
          <div className="text-[9px] font-mono font-bold uppercase tracking-widest mb-2" style={{ color: A, fontVariant: 'small-caps' }}>LAGGING LAYER DETECTOR</div>
          <div className="text-[8px] font-mono text-white/30">Each country's weakest SPSS layer is tagged in the ranking table. The "Ceiling if Fixed" column shows projected SRI if the lagging layer were raised to match the average of the other two.</div>
        </div>

        <div className="space-y-2 text-[9px] font-mono text-white/40 leading-relaxed">
          <div><span className="text-white/60">P</span> = Physical Layer = {energyWeight.toFixed(2)} × energy + {(((1-energyWeight)*(0.35/0.60))).toFixed(2)} × connectivity + {(((1-energyWeight)*(0.25/0.60))).toFixed(2)} × device</div>
          <div><span className="text-white/60">S</span> = Social Layer = 0.35 × linguistic + 0.35 × youth + 0.30 × community</div>
          <div><span className="text-white/60">Sp</span> = Spatial Layer = 0.40 × compute + 0.30 × hubs + 0.30 × aiTalent</div>
          <div className="pt-2 border-t" style={{ borderColor: BD }}>
            <span className="text-[#00e5ff]">GM</span> = Geometric Mean = (P × S × Sp)<sup>1/3</sup> — if ANY layer = 0, SRI = 0
          </div>
          <div><span className="text-[#a78bfa]">B</span> = Balance Factor = 1 − CV(P,S,Sp) — penalizes lopsided development</div>
          <div className="pt-2 border-t" style={{ borderColor: BD }}>
            <span className="text-white/20">WHY GEOMETRIC MEAN?</span> Arithmetic mean hides imbalance. A country with 90% Physical but 5% Social gets rewarded by arithmetic mean (47.5). Geometric mean exposes it: ≈15. This IS the SPSS thesis — you cannot ignore a layer.
          </div>
        </div>

        {/* Sensitivity Analysis (A3) */}
        <div className="mt-3">
          <button onClick={() => setShowSensitivity(!showSensitivity)} className="font-mono text-[9px] text-[#f5a623] hover:text-[#f5a623cc] transition-colors">[± sensitivity analysis]</button>
          {showSensitivity && (
            <div className="mt-2 p-3 border rounded" style={{ borderColor: BD, background: `${W}0.02)` }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[9px] font-mono text-white/40">Energy weight (currently {energyWeight.toFixed(2)})</span>
              </div>
              <input type="range" min={0.30} max={0.50} step={0.01} value={energyWeight}
                onChange={e => setEnergyWeight(Number(e.target.value))} className="w-full obs-slider" />
              <div className="text-[8px] font-mono text-white/20 mt-1 italic">Move this slider. If rankings shift dramatically, the formula is fragile.</div>
            </div>
          )}
        </div>

        {/* Footnote (A5) */}
        <div className="mt-4 pt-3 border-t text-[8px] font-mono text-white/20 leading-relaxed" style={{ borderColor: BD }}>
          Weights are hypothesized, not empirically derived. Calibration requires pilot data from ≥3 field deployments. See: Lagging Layer Indicator above.
        </div>
      </div>

      {/* Country Ranking */}
      <div className="p-6 overflow-auto" style={{ background: '#0c0c0c', maxHeight: 500 }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70">COUNTRY SRI RANKING</span>
          <span className="text-[8px] font-mono text-white/20">{COUNTRIES.length} nations</span>
        </div>

        {/* Global Baseline Toggle (L1) */}
        <div className="flex gap-1 mb-2">
          <button onClick={() => setShowGlobal(false)} className="font-mono text-[8px] px-2 py-0.5 border transition-all"
            style={!showGlobal ? { borderColor: `${W}0.5)`, color: '#fff', background: `${W}0.08)` } : { borderColor: `${W}0.06)`, color: `${W}0.2)` }}>Africa Only</button>
          <button onClick={() => setShowGlobal(true)} className="font-mono text-[8px] px-2 py-0.5 border transition-all"
            style={showGlobal ? { borderColor: A, color: A, background: A + '12' } : { borderColor: `${W}0.06)`, color: `${W}0.2)` }}>+ Global Baseline</button>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b" style={{ borderColor: BD }}>
              {['#','Country','P','S','Sp','Bal','SRI','FLOOR→CEIL','CEIL IF FIXED'].map(h => (
                <th key={h} className="text-[7px] font-mono font-bold uppercase text-white/30 py-1.5 text-left px-1">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row, i) => {
              const { c, s, lagging, dominant, sriIfFixed, uncertainty } = row;
              const floor = s.sri - uncertainty, ceil = s.sri + uncertainty;
              const isExpanded = expandedRow === c.code;
              const delta = dominant.val - lagging.val;
              return (
                <React.Fragment key={c.code}>
                  <tr className="border-b hover:bg-white/[0.02] cursor-pointer transition-colors" style={{ borderColor: BD }}
                    onClick={() => setExpandedRow(isExpanded ? null : c.code)}>
                    <td className="text-[9px] font-mono text-white/20 py-1 px-1">{i+1}</td>
                    <td className="text-[9px] font-mono text-white/70 py-1 px-1">
                      {c.name}
                      <span className="ml-1 text-[7px] font-bold px-1 py-0.5 border rounded" style={{
                        borderColor: lagging.color + '60', color: lagging.color, fontSize: '0.6rem'
                      }}>↓ {lagging.name}</span>
                    </td>
                    <td className="text-[9px] font-mono py-1 px-1" style={{color: LAYER_METRICS.physical.color}}>{s.physical}</td>
                    <td className="text-[9px] font-mono py-1 px-1" style={{color: LAYER_METRICS.social.color}}>{s.social}</td>
                    <td className="text-[9px] font-mono py-1 px-1" style={{color: LAYER_METRICS.spatial.color}}>{s.spatial}</td>
                    <td className="text-[9px] font-mono text-white/30 py-1 px-1">{s.balance}%</td>
                    <td className="text-[10px] font-mono font-bold text-white py-1 px-1">
                      {s.sri} <span style={{ opacity: 0.5, fontSize: '0.75em' }}>±{uncertainty}</span>
                    </td>
                    <td className="text-[9px] font-mono py-1 px-1" style={{ color: '#555' }}>{floor}→{ceil}</td>
                    <td className="text-[9px] font-mono py-1 px-1" style={{ color: '#00ff88' }}>→ {sriIfFixed}</td>
                  </tr>
                  {isExpanded && (
                    <tr style={{ background: `${W}0.02)` }}>
                      <td colSpan={9} className="px-4 py-2 text-[9px] font-mono border-b" style={{ borderColor: BD }}>
                        <span className="text-white/30">Dominant Layer: </span><span style={{ color: dominant.color }}>{dominant.name}</span>
                        <span className="text-white/30 ml-3">Lagging Layer: </span><span style={{ color: lagging.color }}>{lagging.name}</span>
                        <span className="text-white/30 ml-3">Imbalance: </span>
                        <span className="text-white/50">{dominant.name}-heavy, {lagging.name}-deficient, Δ={delta}pts</span>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
            {showGlobal && (
              <>
                <tr><td colSpan={9} className="py-1"><div className="border-t border-dashed" style={{ borderColor: '#444' }} /></td></tr>
                {GLOBAL_BASELINES.map(g => (
                  <tr key={g.code} className="border-b" style={{ borderColor: BD, background: '#ffffff06' }}>
                    <td className="text-[9px] font-mono text-white/15 py-1 px-1 italic">—</td>
                    <td className="text-[9px] font-mono text-white/40 py-1 px-1 italic">{g.name}</td>
                    <td className="text-[9px] font-mono py-1 px-1 italic" style={{color: LAYER_METRICS.physical.color + '80'}}>{g.physical}</td>
                    <td className="text-[9px] font-mono py-1 px-1 italic" style={{color: LAYER_METRICS.social.color + '80'}}>{g.social}</td>
                    <td className="text-[9px] font-mono py-1 px-1 italic" style={{color: LAYER_METRICS.spatial.color + '80'}}>{g.spatial}</td>
                    <td className="text-[9px] font-mono text-white/20 py-1 px-1 italic">{g.balance}%</td>
                    <td className="text-[9px] font-mono text-white/40 py-1 px-1 italic">{g.sri}</td>
                    <td colSpan={2} className="text-[8px] font-mono text-white/25 py-1 px-1 italic">{g.note}</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
        {showGlobal && (
          <div className="mt-3 text-[8px] font-mono text-white/20 leading-relaxed">
            Global North scores high on Physical and Spatial but consistently underperform on Social layer — community sovereignty, indigenous knowledge integration, informal economy accommodation. SPSS was designed to fix this.
          </div>
        )}
      </div>
    </div>
  );
}
