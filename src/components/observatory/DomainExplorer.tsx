import React, { useState } from 'react';
import { DOMAIN_DATA } from './ObservatoryData';

export default function DomainExplorer() {
  const [active, setActive] = useState<number|null>(null);
  return (
    <div className="w-full h-full flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {DOMAIN_DATA.map((d,i)=>(
          <button key={i} onClick={()=>setActive(active===i?null:i)}
            className={`text-left p-4 rounded-lg border transition-all ${active===i?'border-white/40 bg-white/10':'border-white/10 bg-white/5 hover:border-white/20'}`}>
            <div className="text-2xl mb-2">{d.icon}</div>
            <div className="text-sm font-semibold text-white">{d.title}</div>
          </button>
        ))}
      </div>
      {active!==null && (
        <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <h4 className="text-lg font-display font-semibold text-white mb-4">{DOMAIN_DATA[active].icon} {DOMAIN_DATA[active].title} — SPSS Lens</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {label:'Physical Layer',value:DOMAIN_DATA[active].physical,color:'#FF6B6B'},
              {label:'Social Layer',value:DOMAIN_DATA[active].social,color:'#A78BFA'},
              {label:'Spatial Layer',value:DOMAIN_DATA[active].spatial,color:'#4ECDC4'},
            ].map((l,j)=>(
              <div key={j} className="border-l-2 pl-3" style={{borderColor:l.color}}>
                <div className="text-[10px] uppercase tracking-wider font-semibold mb-1" style={{color:l.color}}>{l.label}</div>
                <p className="text-xs text-white/60 leading-relaxed">{l.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {active===null && (
        <div className="flex-1 flex items-center justify-center text-white/20 text-sm">
          Select a domain to see the SPSS analysis
        </div>
      )}
    </div>
  );
}
