import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { COUNTRIES } from './ObservatoryData';

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const LAYERS = [
  { id: 'physical', label: 'Physical', color: '#FF6B6B',
    info: 'Infrastructure: energy access, connectivity & device availability.',
    getVal: (c: typeof COUNTRIES[0]) => (c.energy + c.connect) / 2,
    getLabel: (c: typeof COUNTRIES[0]) => `⚡${c.energy}% 📶${c.connect}%` },
  { id: 'social', label: 'Social', color: '#A78BFA',
    info: 'Community: linguistic diversity, youth demographics & organization.',
    getVal: (c: typeof COUNTRIES[0]) => Math.min(c.lang / 5, 100),
    getLabel: (c: typeof COUNTRIES[0]) => `🗣️${c.lang} langs 👥${c.youth}%` },
  { id: 'spatial', label: 'Spatial', color: '#4ECDC4',
    info: 'Frontier tech: compute access, innovation hubs & AI talent.',
    getVal: (c: typeof COUNTRIES[0]) => (c.compute + c.aiTalent) / 2,
    getLabel: (c: typeof COUNTRIES[0]) => `💻${c.compute} compute 🧠${c.aiTalent} AI` },
];

export default function LayerPeelback() {
  const [visible, setVisible] = useState<string[]>(['physical']);
  const [hovered, setHovered] = useState<string | null>(null);
  const toggle = (id: string) => setVisible(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex gap-3 mb-4">
        {LAYERS.map(l => (
          <button key={l.id} onClick={() => toggle(l.id)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all flex items-center gap-2 ${visible.includes(l.id) ? 'text-white' : 'text-white/30 border-white/10'}`}
            style={visible.includes(l.id) ? { borderColor: l.color, background: l.color + '20', boxShadow: `0 0 12px ${l.color}30` } : {}}>
            <div className="w-2.5 h-2.5 rounded-full transition-all" style={{ background: visible.includes(l.id) ? l.color : 'rgba(255,255,255,0.15)' }} />
            {l.label}
          </button>
        ))}
      </div>
      <div className="flex-1 rounded-xl overflow-hidden border border-white/10 min-h-[400px] relative">
        <Map
          initialViewState={{ longitude: 20, latitude: 2, zoom: 2.8 }}
          style={{ width: '100%', height: '100%' }}
          mapStyle={MAP_STYLE}
          attributionControl={false}
          dragRotate={false}
        >
          {COUNTRIES.map(c => {
            const isH = hovered === c.code;
            return (
              <Marker key={c.code} longitude={c.lng} latitude={c.lat} anchor="center">
                <div className="relative cursor-pointer" onMouseEnter={() => setHovered(c.code)} onMouseLeave={() => setHovered(null)}>
                  {visible.map((lid, vi) => {
                    const layer = LAYERS.find(l => l.id === lid)!;
                    const val = layer.getVal(c);
                    const r = 6 + (val / 100) * 16;
                    const offset = vi * 4;
                    return (
                      <div key={lid} className="absolute rounded-full transition-all duration-300"
                        style={{
                          width: (isH ? r + 6 : r) * 2, height: (isH ? r + 6 : r) * 2,
                          top: `${-r - offset - (isH ? 3 : 0)}px`, left: `${-r + offset + (isH ? 3 : 0)}px`,
                          background: `${layer.color}${isH ? '50' : '25'}`,
                          border: `1.5px solid ${layer.color}${isH ? 'AA' : '44'}`,
                          boxShadow: isH ? `0 0 ${r}px ${layer.color}40` : 'none',
                        }}
                      />
                    );
                  })}
                  <span className="relative z-10 text-[8px] font-bold text-white/70" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}>
                    {c.code}
                  </span>
                </div>
              </Marker>
            );
          })}
        </Map>
        {hovered && (() => {
          const c = COUNTRIES.find(x => x.code === hovered);
          if (!c) return null;
          return (
            <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md border border-white/15 rounded-xl px-5 py-3 text-white shadow-2xl z-50 pointer-events-none">
              <div className="font-semibold text-sm mb-1.5">{c.name}</div>
              {visible.map(lid => {
                const layer = LAYERS.find(l => l.id === lid)!;
                return <div key={lid} className="text-xs mt-0.5" style={{ color: layer.color }}>{layer.label}: {layer.getLabel(c)}</div>;
              })}
            </div>
          );
        })()}
      </div>
      <div className="flex flex-wrap gap-4 mt-3">
        {LAYERS.filter(l => visible.includes(l.id)).map(l => (
          <p key={l.id} className="text-[10px]" style={{ color: l.color + '80' }}>{l.info}</p>
        ))}
      </div>
    </div>
  );
}
