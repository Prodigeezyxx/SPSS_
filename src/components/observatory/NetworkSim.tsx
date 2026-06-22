import React, { useRef, useEffect, useState } from 'react';

interface Node { x:number; y:number; vx:number; vy:number; id:number; }
interface Edge { from:number; to:number; }

function createNetwork(mode:'extraction'|'spss', w:number, h:number) {
  const nodes:Node[] = [];
  const edges:Edge[] = [];
  const n = mode==='extraction'? 16 : 16;
  for(let i=0;i<n;i++){
    nodes.push({ id:i, x:Math.random()*w, y:Math.random()*h, vx:(Math.random()-0.5)*0.5, vy:(Math.random()-0.5)*0.5 });
  }
  if(mode==='extraction'){
    nodes[0] = { id:0, x:w/2, y:h/2, vx:0, vy:0 };
    for(let i=1;i<n;i++) edges.push({ from:i, to:0 });
  } else {
    for(let i=0;i<n;i++){
      const neighbors = [((i+1)%n), ((i+3)%n), ((i+5)%n)];
      neighbors.forEach(j=>{ if(j!==i) edges.push({ from:i, to:j }); });
    }
  }
  return { nodes, edges };
}

export default function NetworkSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<'extraction'|'spss'>('extraction');
  const animRef = useRef<number>(0);
  const netRef = useRef<ReturnType<typeof createNetwork>|null>(null);
  const particlesRef = useRef<{x:number;y:number;edge:number;t:number;speed:number}[]>([]);

  useEffect(()=>{
    const canvas = canvasRef.current; if(!canvas) return;
    const ctx = canvas.getContext('2d'); if(!ctx) return;
    const w=canvas.width=600, h=canvas.height=400;
    const net = createNetwork(mode, w, h);
    netRef.current = net;
    const particles:{x:number;y:number;edge:number;t:number;speed:number}[] = [];
    for(let i=0;i<20;i++){
      particles.push({ x:0, y:0, edge:Math.floor(Math.random()*net.edges.length), t:Math.random(), speed:0.003+Math.random()*0.005 });
    }
    particlesRef.current = particles;
    const tick = () => {
      ctx.clearRect(0,0,w,h);
      net.nodes.forEach(n=>{ n.x+=n.vx; n.y+=n.vy;
        if(n.x<30||n.x>w-30) n.vx*=-1; if(n.y<30||n.y>h-30) n.vy*=-1;
        n.x=Math.max(30,Math.min(w-30,n.x)); n.y=Math.max(30,Math.min(h-30,n.y));
      });
      net.edges.forEach(e=>{
        const a=net.nodes[e.from], b=net.nodes[e.to];
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
        ctx.strokeStyle = mode==='extraction'?'rgba(255,107,107,0.15)':'rgba(78,205,196,0.15)';
        ctx.lineWidth=1; ctx.stroke();
      });
      particles.forEach(p=>{
        p.t+=p.speed; if(p.t>=1){ p.t=0; p.edge=(p.edge+1)%net.edges.length; }
        const e=net.edges[p.edge], a=net.nodes[e.from], b=net.nodes[e.to];
        p.x=a.x+(b.x-a.x)*p.t; p.y=a.y+(b.y-a.y)*p.t;
        ctx.beginPath(); ctx.arc(p.x,p.y,3,0,Math.PI*2);
        ctx.fillStyle=mode==='extraction'?'#FF6B6B':'#4ECDC4'; ctx.fill();
        ctx.beginPath(); ctx.arc(p.x,p.y,6,0,Math.PI*2);
        ctx.fillStyle=mode==='extraction'?'rgba(255,107,107,0.2)':'rgba(78,205,196,0.2)'; ctx.fill();
      });
      net.nodes.forEach((n,i)=>{
        const isCenter = mode==='extraction'&&i===0;
        ctx.beginPath(); ctx.arc(n.x,n.y,isCenter?10:5,0,Math.PI*2);
        ctx.fillStyle=isCenter?'#FF6B6B':mode==='extraction'?'rgba(255,255,255,0.5)':'rgba(78,205,196,0.7)';
        ctx.fill();
        if(isCenter){ ctx.strokeStyle='rgba(255,107,107,0.4)'; ctx.lineWidth=2; ctx.stroke(); }
      });
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return ()=> cancelAnimationFrame(animRef.current);
  },[mode]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex gap-3 mb-4">
        <button onClick={()=>setMode('extraction')}
          className={`px-4 py-2 rounded text-xs font-semibold border transition-all ${mode==='extraction'?'bg-[#FF6B6B] text-white border-[#FF6B6B]':'border-white/20 text-white/50 hover:text-white'}`}>
          ⚠ Extraction Model
        </button>
        <button onClick={()=>setMode('spss')}
          className={`px-4 py-2 rounded text-xs font-semibold border transition-all ${mode==='spss'?'bg-[#4ECDC4] text-[#111] border-[#4ECDC4]':'border-white/20 text-white/50 hover:text-white'}`}>
          ✓ SPSS Model
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center bg-black/30 rounded-lg overflow-hidden border border-white/10">
        <canvas ref={canvasRef} className="w-full max-w-[600px]" style={{aspectRatio:'3/2'}} />
      </div>
      <p className="text-xs text-white/40 mt-3 text-center">
        {mode==='extraction'
          ? 'Extraction: all data flows to a central node. Community nodes have no sovereignty.'
          : 'SPSS: data stays distributed. Communities govern their own nodes and choose what to share.'}
      </p>
    </div>
  );
}
