import React, { useState } from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { RADAR_PRESETS } from './ObservatoryData';

export default function SPSSRadar() {
  const [active, setActive] = useState<number[]>([0, 4]);
  const toggle = (i: number) => {
    setActive(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const data = [
    { layer: 'Social' },
    { layer: 'Physical' },
    { layer: 'Spatial' },
  ].map(d => {
    const row: any = { ...d };
    active.forEach(idx => {
      const p = RADAR_PRESETS[idx];
      row[p.name] = d.layer === 'Social' ? p.social : d.layer === 'Physical' ? p.physical : p.spatial;
    });
    return row;
  });

  const keys = active.map(idx => RADAR_PRESETS[idx].name);
  const colors = active.map(idx => RADAR_PRESETS[idx].color);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-6">
      <div className="flex-1 min-h-[400px]">
        <ResponsiveRadar
          data={data}
          keys={keys}
          indexBy="layer"
          maxValue={100}
          margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
          curve="linearClosed"
          borderWidth={2}
          borderColor={{ from: 'color' }}
          gridLevels={4}
          gridShape="circular"
          gridLabelOffset={20}
          enableDots={true}
          dotSize={8}
          dotColor={{ theme: 'background' }}
          dotBorderWidth={2}
          dotBorderColor={{ from: 'color' }}
          colors={colors}
          fillOpacity={0.15}
          blendMode="screen"
          animate={true}
          motionConfig="gentle"
          isInteractive={true}
          theme={{
            text: { fill: 'rgba(255,255,255,0.6)', fontFamily: "'Space Grotesk', sans-serif" },
            grid: { line: { stroke: 'rgba(255,255,255,0.08)', strokeWidth: 1 } },
            dots: { text: { fill: 'rgba(255,255,255,0.5)' } },
            tooltip: {
              container: {
                background: '#111', color: '#fff', fontSize: 12,
                borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                fontFamily: "'Space Grotesk', sans-serif",
              }
            }
          }}
        />
      </div>
      <div className="lg:w-52 flex lg:flex-col flex-wrap gap-2">
        <span className="text-[10px] text-white/40 uppercase tracking-widest block mb-2 w-full">Compare Profiles</span>
        {RADAR_PRESETS.map((p, i) => (
          <button key={i} onClick={() => toggle(i)}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-medium border transition-all text-left ${active.includes(i) ? 'border-white/30 text-white bg-white/8' : 'border-white/8 text-white/35 hover:text-white/60'}`}>
            <div className="w-3 h-3 rounded-full shrink-0 transition-all" style={{ background: active.includes(i) ? p.color : 'rgba(255,255,255,0.1)', boxShadow: active.includes(i) ? `0 0 8px ${p.color}60` : 'none' }} />
            {p.name}
          </button>
        ))}
        {active.length > 0 && (
          <div className="mt-4 space-y-1.5 w-full border-t border-white/10 pt-3">
            {active.map(idx => {
              const p = RADAR_PRESETS[idx];
              return (
                <div key={idx} className="flex justify-between text-xs">
                  <span style={{ color: p.color }}>{p.name}</span>
                  <span className="text-white/40 font-mono">{Math.round((p.social + p.physical + p.spatial) / 3)}%</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
