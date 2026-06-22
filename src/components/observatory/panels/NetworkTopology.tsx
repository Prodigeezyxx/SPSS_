import React, { useRef, useEffect, useState } from 'react';

const W = 'rgba(255,255,255,';
const R2 = '#ff3b3b';
const BD = `${W}0.07)`;

interface NodeData { x: number; y: number; vx: number; vy: number; type: string; connections: number; }

const NODE_TYPES = [
  { type: 'Innovation Hub', color: '#f5a623', size: 10 },
  { type: 'Community Node', color: '#ff6b6b', size: 7 },
  { type: 'Infrastructure Relay', color: '#00e5ff', size: 6 },
  { type: 'Regulatory Node', color: '#666', size: 5 },
];

function getCentrality(connections: number, total: number): string {
  const ratio = connections / total;
  return ratio > 0.4 ? 'high' : ratio > 0.2 ? 'medium' : 'low';
}

export default function NetworkTopology({ highlightNode }: { highlightNode?: string | null }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const anim = useRef(0);
  const [mode, setMode] = useState<'extraction' | 'spss'>('spss');
  const [tooltip, setTooltip] = useState<{ x: number; y: number; type: string; conn: number; centrality: string } | null>(null);
  const nodesRef = useRef<NodeData[]>([]);
  const edgesRef = useRef<[number, number][]>([]);

  const metrics = mode === 'extraction'
    ? { avgDegree: '11.2', clustering: '0.12', longestPath: '2 hops' }
    : { avgDegree: '3.4', clustering: '0.68', longestPath: '5 hops' };

  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d'); if (!ctx) return;
    const w = c.width = c.offsetWidth * 2, h = c.height = c.offsetHeight * 2;
    ctx.scale(2, 2); const W2 = w / 2, H = h / 2;
    const nodes: NodeData[] = [];
    const edges: [number, number][] = [];
    const typeAssign = (i: number) => NODE_TYPES[i % NODE_TYPES.length];
    for (let i = 0; i < 16; i++) {
      const t = typeAssign(i);
      nodes.push({ x: Math.random() * W2, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, type: t.type, connections: 0 });
    }
    if (mode === 'extraction') {
      nodes[0] = { x: W2 / 2, y: H / 2, vx: 0, vy: 0, type: 'Innovation Hub', connections: 0 };
      nodes[1] = { ...nodes[1], x: W2 / 3, y: H / 3, vx: 0, vy: 0, type: 'Innovation Hub', connections: 0 };
      for (let i = 2; i < 16; i++) { edges.push([i, i % 2 === 0 ? 0 : 1]); nodes[i].type = 'Community Node'; }
      nodes[0].connections = 7; nodes[1].connections = 7;
      for (let i = 2; i < 16; i++) nodes[i].connections = 1;
    } else {
      for (let i = 0; i < 16; i++) {
        const neighbors = [1, 2, 3, 4].map(d => (i + d) % 16).slice(0, 2 + Math.floor(Math.random() * 2));
        neighbors.forEach(n => { if (!edges.some(([a, b]) => (a === i && b === n) || (a === n && b === i))) edges.push([i, n]); });
      }
      nodes.forEach((n, i) => { n.connections = edges.filter(([a, b]) => a === i || b === i).length; });
    }
    nodesRef.current = nodes;
    edgesRef.current = edges;
    const particles = Array.from({ length: 16 }, () => ({ e: Math.floor(Math.random() * edges.length), t: Math.random(), s: 0.003 + Math.random() * 0.004 }));
    const color = mode === 'extraction' ? R2 : '#ffffff';
    const tick = () => {
      ctx.clearRect(0, 0, W2, H);
      nodes.forEach(n => { n.x += n.vx; n.y += n.vy; if (n.x < 15 || n.x > W2 - 15) n.vx *= -1; if (n.y < 15 || n.y > H - 15) n.vy *= -1; });
      edges.forEach(([a, b]) => { ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); ctx.strokeStyle = color + '18'; ctx.lineWidth = 0.5; ctx.stroke(); });
      particles.forEach(p => { p.t += p.s; if (p.t >= 1) { p.t = 0; p.e = (p.e + 1) % edges.length; } const [a, b] = edges[p.e]; const x = nodes[a].x + (nodes[b].x - nodes[a].x) * p.t, y = nodes[a].y + (nodes[b].y - nodes[a].y) * p.t; ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); });
      nodes.forEach((n, i) => {
        const nt = NODE_TYPES.find(t => t.type === n.type) || NODE_TYPES[0];
        const isHub = mode === 'extraction' && i < 2;
        const sz = isHub ? 8 : nt.size / 2;
        ctx.beginPath(); ctx.arc(n.x, n.y, sz, 0, Math.PI * 2);
        ctx.fillStyle = isHub ? R2 : nt.color + '90'; ctx.fill();
      });
      anim.current = requestAnimationFrame(tick);
    };
    anim.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(anim.current);
  }, [mode]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const c = ref.current; if (!c) return;
    const rect = c.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const nodes = nodesRef.current;
    const scale = c.offsetWidth / (c.width / 2);
    let found = false;
    for (const n of nodes) {
      const dx = mx - n.x * scale, dy = my - n.y * scale;
      if (dx * dx + dy * dy < 200) {
        setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top, type: n.type, conn: n.connections, centrality: getCentrality(n.connections, nodes.length) });
        found = true; break;
      }
    }
    if (!found) setTooltip(null);
  };

  return (
    <div>
      <div className="flex gap-1 mb-2">
        <button onClick={() => setMode('extraction')} className="font-mono text-[8px] px-2 py-0.5 border transition-all"
          style={mode === 'extraction' ? { borderColor: R2, color: R2, background: R2 + '12' } : { borderColor: `${W}0.06)`, color: `${W}0.2)` }}>⚠ EXTRACT</button>
        <button onClick={() => setMode('spss')} className="font-mono text-[8px] px-2 py-0.5 border transition-all"
          style={mode === 'spss' ? { borderColor: `${W}0.6)`, color: '#fff', background: `${W}0.08)` } : { borderColor: `${W}0.06)`, color: `${W}0.2)` }}>✓ SPSS</button>
      </div>
      {/* Banner */}
      <div className="font-mono text-[8px] px-2 py-1 mb-1 rounded" style={{ background: mode === 'extraction' ? '#ff3b3b12' : '#00e5ff12', color: mode === 'extraction' ? R2 : '#00e5ff' }}>
        {mode === 'extraction' ? 'Data flows OUT. Value extraction pattern detected.' : 'Data stays distributed. Value circulates locally.'}
      </div>
      <div className="h-36 rounded overflow-hidden relative" style={{ background: 'rgba(0,0,0,0.4)' }}>
        <canvas ref={ref} className="w-full h-full" onMouseMove={handleMouseMove} onMouseLeave={() => setTooltip(null)} />
        {tooltip && (
          <div className="obs-tooltip" style={{ left: tooltip.x + 8, top: tooltip.y - 30 }}>
            {tooltip.type} · Connections: {tooltip.conn} · Centrality: {tooltip.centrality}
          </div>
        )}
        {/* Legend */}
        <div className="absolute bottom-1 left-1 flex flex-col gap-0.5">
          {NODE_TYPES.map(nt => (
            <div key={nt.type} className="flex items-center gap-1">
              <div className="rounded-full" style={{ width: nt.size * 0.8, height: nt.size * 0.8, background: nt.color }} />
              <span className="text-[7px] font-mono" style={{ color: nt.color + '90' }}>{nt.type}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Metrics */}
      <div className="font-mono text-[8px] text-white/30 mt-1">
        Avg Degree: <span className="text-white/50">{metrics.avgDegree}</span> · Clustering: <span className="text-white/50">{metrics.clustering}</span> · Longest Path: <span className="text-white/50">{metrics.longestPath}</span>
      </div>
    </div>
  );
}
