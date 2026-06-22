import React, { useState } from 'react';

const QUESTIONS = [
  { q:'What are you building?', opts:[
    { label:'Hardware / IoT device', next:1, tags:['physical'] },
    { label:'Software / App / Platform', next:1, tags:['spatial'] },
  ]},
  { q:'Who is your primary user?', opts:[
    { label:'Individual consumers', next:2, tags:[] },
    { label:'Communities / cooperatives / groups', next:2, tags:['social'] },
  ]},
  { q:'What connectivity can you assume?', opts:[
    { label:'Reliable broadband / 4G+', next:3, tags:[] },
    { label:'Intermittent / 2G / offline periods', next:3, tags:['physical'] },
  ]},
  { q:'How is your solution governed?', opts:[
    { label:'Centralized — my team controls everything', next:4, tags:[] },
    { label:'Community input shapes decisions', next:4, tags:['social','principles'] },
  ]},
  { q:'Where does user data live?', opts:[
    { label:'Our cloud servers', next:-1, tags:[] },
    { label:'Locally / community-controlled', next:-1, tags:['spatial','principles'] },
  ]},
];

function getResult(tags:string[]) {
  const counts:{[k:string]:number} = {};
  tags.forEach(t=> counts[t]=(counts[t]||0)+1);
  const strong = Object.entries(counts).filter(([,v])=>v>=1).map(([k])=>k);
  const weak = ['physical','social','spatial','principles'].filter(l=>!strong.includes(l));
  return { strong, weak };
}

export default function DecisionTree() {
  const [step, setStep] = useState(0);
  const [tags, setTags] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const choose = (opt: typeof QUESTIONS[0]['opts'][0]) => {
    const newTags = [...tags, ...opt.tags];
    setTags(newTags);
    if(opt.next===-1) setDone(true);
    else setStep(opt.next);
  };
  const reset = () => { setStep(0); setTags([]); setDone(false); };

  if(done) {
    const {strong, weak} = getResult(tags);
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        <div className="text-2xl font-display font-bold text-white mb-6">Your SPSS Profile</div>
        <div className="grid grid-cols-2 gap-4 mb-8 max-w-md w-full">
          {['social','physical','spatial','principles'].map(l=>(
            <div key={l} className={`p-4 rounded-lg border ${strong.includes(l)?'border-[#4ECDC4] bg-[#4ECDC4]/10':'border-white/10 bg-white/5'}`}>
              <div className={`text-xs uppercase tracking-wider font-semibold mb-1 ${strong.includes(l)?'text-[#4ECDC4]':'text-white/30'}`}>
                {l}
              </div>
              <div className="text-sm text-white/70">
                {strong.includes(l)?'✓ Aligned':'⚠ Gap identified'}
              </div>
            </div>
          ))}
        </div>
        {weak.length>0 && (
          <p className="text-sm text-white/50 mb-6 max-w-sm">
            Focus areas: <span className="text-white/80">{weak.join(', ')}</span>. Run the full SPSS Checker below for detailed remediation steps.
          </p>
        )}
        <button onClick={reset} className="px-5 py-2 rounded border border-white/20 text-white/60 text-xs hover:text-white hover:border-white/40 transition-all">
          Start Over
        </button>
      </div>
    );
  }

  const q = QUESTIONS[step];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex gap-1 mb-8">
        {QUESTIONS.map((_,i)=>(
          <div key={i} className={`w-8 h-1 rounded-full transition-all ${i<step?'bg-[#4ECDC4]':i===step?'bg-white':'bg-white/15'}`} />
        ))}
      </div>
      <div className="text-xl md:text-2xl font-display font-semibold text-white text-center mb-10 max-w-lg">
        {q.q}
      </div>
      <div className="flex flex-col gap-3 w-full max-w-sm">
        {q.opts.map((opt,i)=>(
          <button key={i} onClick={()=>choose(opt)}
            className="w-full text-left px-6 py-4 rounded-lg border border-white/15 text-white/80 text-sm font-medium hover:border-white/40 hover:bg-white/5 hover:text-white transition-all">
            {opt.label}
          </button>
        ))}
      </div>
      <div className="text-[10px] text-white/25 mt-8 font-mono">
        Question {step+1} of {QUESTIONS.length}
      </div>
    </div>
  );
}
