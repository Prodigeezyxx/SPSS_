import React, { useState, useCallback } from 'react';
import Map, { Marker, Popup } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { COUNTRIES, METRIC_KEYS } from './ObservatoryData';

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

export default function ConstraintMap() {
  const [metric, setMetric] = useState<string>('elec');
  const [popup, setPopup] = useState<typeof COUNTRIES[0] | null>(null);
  const mk = METRIC_KEYS.find(m => m.key === metric)!;
  const vals = COUNTRIES.map(c => (c as any)[metric] as number);
  const max = Math.max(...vals), min = Math.min(...vals);

  const getColor = useCallback((v: number) => {
    const t = max === min ? 1 : (v - min) / (max - min);
    if (metric === 'lang' || metric === 'solar' || metric === 'youth') {
      return `rgba(${Math.round(30 + t * 200)},${Math.round(180 + t * 60)},${Math.round(100 + t * 80)},${0.6 + t * 0.4})`;
    }
    return `rgba(${Math.round(255 - t * 200)},${Math.round(80 + t * 150)},${Math.round(80 + t * 50)},${0.6 + t * 0.4})`;
  }, [metric, max, min]);

  const getRadius = useCallback((v: number) => {
    const t = max === min ? 0.5 : (v - min) / (max - min);
    return 8 + t * 18;
  }, [max, min]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-wrap gap-2 mb-4">
        {METRIC_KEYS.map(m => (
          <button key={m.key} onClick={() => { setMetric(m.key); setPopup(null); }}
            className={`px-3 py-1.5 rounded text-xs font-medium border transition-all ${metric === m.key ? 'bg-white text-[#0a0a0a] border-white' : 'border-white/20 text-white/60 hover:text-white hover:border-white/40'}`}>
            {m.label}
          </button>
        ))}
      </div>
      <div className="flex-1 rounded-xl overflow-hidden border border-white/10 min-h-[420px]">
        <Map
          initialViewState={{ longitude: 20, latitude: 2, zoom: 2.8 }}
          style={{ width: '100%', height: '100%' }}
          mapStyle={MAP_STYLE}
          attributionControl={false}
          dragRotate={false}
        >
          {COUNTRIES.map(c => {
            const v = (c as any)[metric] as number;
            const r = getRadius(v);
            const color = getColor(v);
            return (
              <Marker key={c.code} longitude={c.lng} latitude={c.lat} anchor="center">
                <div
                  onClick={(e) => { e.stopPropagation(); setPopup(c); }}
                  className="cursor-pointer transition-transform duration-200 hover:scale-125 group relative"
                  style={{ width: r * 2, height: r * 2 }}
                >
                  <div className="absolute inset-0 rounded-full animate-pulse opacity-30" style={{ background: color }} />
                  <div className="absolute inset-[3px] rounded-full flex items-center justify-center" style={{ background: color, boxShadow: `0 0 ${r}px ${color}` }}>
                    <span className="text-[9px] font-bold text-white drop-shadow-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                      {c.code}
                    </span>
                  </div>
                </div>
              </Marker>
            );
          })}
          {popup && (
            <Popup longitude={popup.lng} latitude={popup.lat} anchor="bottom" closeOnClick={false}
              onClose={() => setPopup(null)} offset={20}
              className="[&_.maplibregl-popup-content]:!bg-[#111] [&_.maplibregl-popup-content]:!text-white [&_.maplibregl-popup-content]:!border [&_.maplibregl-popup-content]:!border-white/20 [&_.maplibregl-popup-content]:!rounded-xl [&_.maplibregl-popup-content]:!shadow-2xl [&_.maplibregl-popup-content]:!px-5 [&_.maplibregl-popup-content]:!py-4 [&_.maplibregl-popup-tip]:!border-t-[#111] [&_.maplibregl-popup-close-button]:!text-white/50 [&_.maplibregl-popup-close-button]:!text-lg [&_.maplibregl-popup-close-button]:!right-2 [&_.maplibregl-popup-close-button]:!top-1"
            >
              <div className="font-display font-bold text-sm mb-2">{popup.name}</div>
              <div className="space-y-1 text-xs text-white/70 font-sans">
                <div className="flex justify-between gap-6"><span>Electricity</span><span className="font-mono text-white">{popup.elec}%</span></div>
                <div className="flex justify-between gap-6"><span>Internet</span><span className="font-mono text-white">{popup.inet}%</span></div>
                <div className="flex justify-between gap-6"><span>Languages</span><span className="font-mono text-white">{popup.lang}</span></div>
                <div className="flex justify-between gap-6"><span>Solar potential</span><span className="font-mono text-white">{popup.solar} kWh</span></div>
                <div className="flex justify-between gap-6"><span>Youth %</span><span className="font-mono text-white">{popup.youth}%</span></div>
              </div>
            </Popup>
          )}
        </Map>
      </div>
      <div className="flex items-center gap-3 mt-3">
        <span className="text-[10px] text-white/40 uppercase tracking-wider">Low</span>
        <div className="flex-1 h-2 rounded-full" style={{ background: `linear-gradient(to right, ${getColor(min)}, ${getColor(max)})` }} />
        <span className="text-[10px] text-white/40 uppercase tracking-wider">High</span>
      </div>
    </div>
  );
}
