import React, { useState } from 'react';

const NODES = [
  { id:'checker',label:'SPSS Checker',x:250,y:60,type:'tool',color:'#4ECDC4' },
  { id:'physical',label:'Physical Layer',x:100,y:160,type:'layer',color:'#FF6B6B' },
  { id:'social',label:'Social Layer',x:250,y:160,type:'layer',color:'#A78BFA' },
  { id:'spatial',label:'Spatial Layer',x:400,y:160,type:'layer',color:'#4ECDC4' },
  { id:'principles',label:'Core Principles',x:250,y:260,type:'layer',color:'#FFE66D' },
  { id:'rq1',label:'Episodic protocols',x:50,y:320,type:'research',color:'#F7931E' },
  { id:'rq2',label:'Data trusts',x:170,y:340,type:'research',color:'#F7931E' },
  { id:'rq3',label:'Language models',x:310,y:340,type:'research',color:'#F7931E' },
  { id:'rq4',label:'Edge AI energy',x:430,y:320,type:'research',color:'#F7931E' },
  { id:'governance',label:'Commons Protocol',x:80,y:60,type:'governance',color:'#FFE66D' },
  { id:'roadmap',label:'90-Day Roadmap',x:420,y:60,type:'governance',color:'#FFE66D' },
];

const EDGES = [
  ['checker','physical'],['checker','social'],['checker','spatial'],['checker','principles'],
  ['physical','principles'],['social','principles'],['spatial','principles'],
  ['physical','social'],['social','spatial'],
  ['rq1','physical'],['rq2','social'],['rq3','spatial'],['rq4','physical'],
  ['governance','checker'],['roadmap','checker'],
  ['governance','principles'],['roadmap','spatial'],
];

export default function DependencyGraph() {
  const [hovered, setHovered] = useState<string|null>(null);
  const connected = hovered ? EDGES.filter(e=>e.includes(hovered)).flat().filter(x=>x!==hovered) : [];

  return (
    <div className="w-full h-full flex flex-col">
      <p className="text-xs text-white/40 mb-4">How SPSS components depend on each other. Hover to trace connections.</p>
      <div className="flex-1 flex items-center justify-center min-h-[350px]">
        <svg viewBox="0 0 500 400" className="w-full max-w-[560px] h-auto">
          {EDGES.map(([from,to],i)=>{
            const a = NODES.find(n=>n.id===from)!;
            const b = NODES.find(n=>n.id===to)!;
            const isLit = hovered && (from===hovered||to===hovered);
            return (
              <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke={isLit?'rgba(255,255,255,0.4)':'rgba(255,255,255,0.08)'} strokeWidth={isLit?1.5:0.5}
                style={{transition:'all 0.3s ease'}} />
            );
          })}
          {NODES.map(n=>{
            const isH = hovered===n.id;
            const isConn = connected.includes(n.id);
            const opacity = !hovered? 0.7 : isH? 1 : isConn? 0.8 : 0.15;
            const r = n.type==='layer'?24:n.type==='tool'?20:14;
            return (
              <g key={n.id} onMouseEnter={()=>setHovered(n.id)} onMouseLeave={()=>setHovered(null)} style={{cursor:'pointer'}}>
                <circle cx={n.x} cy={n.y} r={isH?r+4:r} fill={n.color+'20'} stroke={n.color}
                  strokeWidth={isH?2:1} opacity={opacity} style={{transition:'all 0.3s ease'}} />
                <text x={n.x} y={n.y+r+14} textAnchor="middle" fill="rgba(255,255,255,0.6)"
                  fontSize={9} fontWeight={500} fontFamily="'Space Grotesk',sans-serif" opacity={opacity}
                  style={{transition:'opacity 0.3s ease', pointerEvents:'none'}}>
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="flex flex-wrap gap-4 mt-2 justify-center">
        {[{type:'layer',label:'Layers',color:'#A78BFA'},{type:'tool',label:'Tools',color:'#4ECDC4'},{type:'research',label:'Research',color:'#F7931E'},{type:'governance',label:'Governance',color:'#FFE66D'}].map(t=>(
          <div key={t.type} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{background:t.color}} />
            <span className="text-[10px] text-white/40">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
