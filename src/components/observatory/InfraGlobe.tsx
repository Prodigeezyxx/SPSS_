import React, { useRef, useEffect, useState } from 'react';
import { COUNTRIES } from './ObservatoryData';

export default function InfraGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [metric, setMetric] = useState<'energy'|'connect'|'compute'>('energy');
  const animRef = useRef<number>(0);

  useEffect(()=>{
    const canvas = canvasRef.current; if(!canvas) return;
    const ctx = canvas.getContext('2d'); if(!ctx) return;
    const w=canvas.width=500, h=canvas.height=500;
    const cx=w/2, cy=h/2, R=180;
    let angle = 0;

    const tick = () => {
      angle += 0.003;
      ctx.clearRect(0,0,w,h);
      ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2);
      ctx.strokeStyle='rgba(255,255,255,0.1)'; ctx.lineWidth=1; ctx.stroke();
      for(let i=0;i<6;i++){
        const a = i*Math.PI/3+angle;
        ctx.beginPath(); ctx.moveTo(cx+Math.cos(a)*R,cy+Math.sin(a)*R);
        ctx.lineTo(cx-Math.cos(a)*R,cy-Math.sin(a)*R);
        ctx.strokeStyle='rgba(255,255,255,0.04)'; ctx.stroke();
      }
      for(let r=40;r<R;r+=40){
        ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
        ctx.strokeStyle='rgba(255,255,255,0.04)'; ctx.stroke();
      }
      COUNTRIES.forEach((c, idx)=>{
        const baseAngle = ((idx*40+idx*17)%360)*Math.PI/180 + angle;
        const dist = 40 + ((idx % 7)/7)*140;
        if(dist>R) return;
        const px = cx + Math.cos(baseAngle)*dist;
        const py = cy + Math.sin(baseAngle)*dist;
        const val = (c as any)[metric] as number;
        const t = val/100;
        const r2 = 3+t*6;
        ctx.beginPath(); ctx.arc(px,py,r2+4,0,Math.PI*2);
        const g = ctx.createRadialGradient(px,py,0,px,py,r2+4);
        g.addColorStop(0, `rgba(255,255,255,${t*0.3})`);
        g.addColorStop(1,'rgba(0,0,0,0)');
        ctx.fillStyle=g; ctx.fill();
        ctx.beginPath(); ctx.arc(px,py,r2,0,Math.PI*2);
        ctx.fillStyle = `rgba(255,255,255,${0.2+t*0.6})`;
        ctx.fill();
        if(r2>5){
          ctx.fillStyle='rgba(255,255,255,0.6)';
          ctx.font="7px monospace";
          ctx.textAlign='center';
          ctx.fillText(c.code,px,py+r2+10);
        }
      });
      ctx.fillStyle='rgba(255,255,255,0.15)';
      ctx.font="bold 11px monospace";
      ctx.textAlign='center';
      ctx.fillText('AFRICA',cx,cy+4);
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(animRef.current);
  },[metric]);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex gap-2 mb-4">
        {[{k:'energy' as const,l:'Energy'},{k:'connect' as const,l:'Connectivity'},{k:'compute' as const,l:'Compute'}].map(m=>(
          <button key={m.k} onClick={()=>setMetric(m.k)}
            className={`px-3 py-1.5 rounded text-xs font-mono border transition-all ${metric===m.k?'bg-white/10 border-white/30 text-white':'border-white/10 text-white/40'}`}>
            {m.l}
          </button>
        ))}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <canvas ref={canvasRef} className="w-full max-w-[400px]" style={{aspectRatio:'1'}} />
      </div>
    </div>
  );
}
