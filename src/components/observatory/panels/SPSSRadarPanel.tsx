import React, { useState } from 'react';
import { RADAR_TAB_DATA } from '../ObservatoryData';

const W = 'rgba(255,255,255,';
const BD = `${W}0.07)`;
const TABS = Object.keys(RADAR_TAB_DATA);
const TAB_COLORS: Record<string, string> = { 'App': '#FF6B6B', 'P-Mus': '#4ECDC4', 'NLP': '#FFE66D', 'Drones': '#A78BFA', 'Exemplar': '#F7931E' };

function drawRadar(ctx: CanvasRenderingContext2D, w: number, h: number, data: [number, number, number], color: string, label: string) {
  const cx = w / 2, cy = h / 2, R = Math.min(cx, cy) - 30;
  const axes = ['Social', 'Physical', 'Spatial'];
  // Grid
  for (let lev = 1; lev <= 5; lev++) {
    ctx.beginPath();
    const r = (lev / 5) * R;
    for (let i = 0; i <= 3; i++) {
      const a = (Math.PI * 2 * (i % 3)) / 3 - Math.PI / 2;
      const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }
  // Axis labels
  ctx.font = '9px monospace';
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  for (let i = 0; i < 3; i++) {
    const a = (Math.PI * 2 * i) / 3 - Math.PI / 2;
    const x = cx + (R + 18) * Math.cos(a), y = cy + (R + 18) * Math.sin(a);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(axes[i], x, y);
  }
  // Polygon
  ctx.beginPath();
  for (let i = 0; i <= 3; i++) {
    const a = (Math.PI * 2 * (i % 3)) / 3 - Math.PI / 2;
    const v = data[i % 3] / 10;
    const x = cx + R * v * Math.cos(a), y = cy + R * v * Math.sin(a);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = color + '20';
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  // Dots
  for (let i = 0; i < 3; i++) {
    const a = (Math.PI * 2 * i) / 3 - Math.PI / 2;
    const v = data[i] / 10;
    const x = cx + R * v * Math.cos(a), y = cy + R * v * Math.sin(a);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

export default function SPSSRadarPanel() {
  const [activeTab, setActiveTab] = useState('App');
  const [customMode, setCustomMode] = useState(false);
  const [customData, setCustomData] = useState<[number, number, number]>([5, 5, 5]);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const currentData = customMode ? customData : (RADAR_TAB_DATA[activeTab] || [5, 5, 5]);
  const currentColor = customMode ? '#00ff88' : (TAB_COLORS[activeTab] || '#fff');

  // Check exemplar qualification
  const qualifyCount = Object.values(RADAR_TAB_DATA).filter(d => d[0] >= 8 && d[1] >= 8 && d[2] >= 8).length;
  const totalArchetypes = Object.keys(RADAR_TAB_DATA).length - 1; // exclude Exemplar

  React.useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const w = c.offsetWidth, h = c.offsetHeight;
    c.width = w * dpr;
    c.height = h * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);
    drawRadar(ctx, w, h, currentData, currentColor, activeTab);
  }, [currentData, currentColor, activeTab]);

  return (
    <div>
      <div className="relative" style={{ height: 192 }}>
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      {/* Legend */}
      <div className="font-mono text-[9px] text-white/40 text-center mb-2">
        Social: <span className="text-white/70">{currentData[0]}</span> · Physical: <span className="text-white/70">{currentData[1]}</span> · Spatial: <span className="text-white/70">{currentData[2]}</span>
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-1 mt-1">
        {TABS.map(t => (
          <button key={t} onClick={() => { setActiveTab(t); setCustomMode(false); }}
            className="font-mono text-[8px] px-1.5 py-0.5 border transition-all relative group"
            style={!customMode && activeTab === t ? { borderColor: TAB_COLORS[t], color: TAB_COLORS[t], background: TAB_COLORS[t] + '12' } : { borderColor: `${W}0.06)`, color: `${W}0.2)` }}>
            {t}
            {t === 'Exemplar' && (
              <span className="hidden group-hover:block obs-tooltip" style={{ bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 4 }}>
                Exemplar requires no layer below 8. Currently {qualifyCount} of {totalArchetypes} archetypes qualify.
              </span>
            )}
          </button>
        ))}
        <button onClick={() => setCustomMode(true)}
          className="font-mono text-[8px] px-1.5 py-0.5 border transition-all"
          style={customMode ? { borderColor: '#00ff88', color: '#00ff88', background: '#00ff8812' } : { borderColor: `${W}0.06)`, color: `${W}0.2)` }}>
          + Custom
        </button>
      </div>
      {customMode && (
        <div className="mt-2 p-2 border rounded" style={{ borderColor: BD, background: `${W}0.02)` }}>
          <div className="text-[8px] font-mono text-white/30 mb-2">Test your own technology archetype.</div>
          {['Social', 'Physical', 'Spatial'].map((l, i) => (
            <div key={l} className="flex items-center gap-2 mb-1">
              <span className="text-[8px] font-mono text-white/40 w-12">{l}</span>
              <input type="range" min={0} max={10} value={customData[i]}
                onChange={e => { const n = [...customData] as [number, number, number]; n[i] = Number(e.target.value); setCustomData(n); }}
                className="flex-1 obs-slider" />
              <span className="text-[9px] font-mono text-white/60 w-4">{customData[i]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
