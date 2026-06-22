import React, { useState, useEffect, useRef, useCallback } from 'react';
import Map, { Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as THREE from 'three';
import { COUNTRIES, METRIC_KEYS, COUNTRY_PROFILES, DEFAULT_PROFILE, computeSRI, LAYER_METRICS, PILOT_SITES } from './ObservatoryData';
import RealityIndex from './panels/RealityIndex';
import SPSSRadarPanel from './panels/SPSSRadarPanel';
import NetworkTopology from './panels/NetworkTopology';
import ResearchIntel from './panels/ResearchIntel';
import SRIPanel from './panels/SRIPanel';
import InterventionSim from './panels/InterventionSim';
import FailureArchive from './panels/FailureArchive';

const W = 'rgba(255,255,255,';
const A = '#F7931E';
const R2 = '#ff3b3b';
const C = '#00e5ff';
const BG = '#0a0a0a';
const BD = `${W}0.07)`;
const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

function Panel({ title, badge, info, children }: { title: string; badge?: string; info?: string; children: React.ReactNode }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="border flex flex-col overflow-hidden" style={{ borderColor: BD, background: '#0c0c0c' }}>
      <div className="flex items-center justify-between px-3 py-1.5 border-b" style={{ borderColor: BD, background: `${W}0.02)` }}>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/70">{title}</span>
          {info && (
            <button onClick={() => setShowInfo(!showInfo)} className="w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[8px] font-bold transition-all hover:bg-white/10"
              style={{ borderColor: `${W}0.2)`, color: `${W}0.4)` }}>i</button>
          )}
        </div>
        {badge && <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/60">{badge}</span>}
      </div>
      {showInfo && info && (
        <div className="px-3 py-2 text-[10px] leading-relaxed border-b" style={{ borderColor: BD, color: `${W}0.45)`, background: `${W}0.02)` }}>
          ℹ️ {info}
        </div>
      )}
      <div className="flex-1 overflow-hidden p-3">{children}</div>
    </div>
  );
}

/* ── 3D GLOBE (G1-G4) ── */
function Globe3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const animRef = useRef(0);
  const [layers, setLayers] = useState({ elec: true, sri: true, pop: true });

  useEffect(() => {
    const el = mountRef.current; if (!el) return;
    const w = el.offsetWidth, h = el.offsetHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.z = 2.8;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    el.appendChild(renderer.domElement);
    const globeGeo = new THREE.SphereGeometry(1, 32, 32);
    const globeMat = new THREE.MeshBasicMaterial({ color: 0x222222, wireframe: true, transparent: true, opacity: 0.3 });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);
    const innerGeo = new THREE.SphereGeometry(0.98, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0a });
    scene.add(new THREE.Mesh(innerGeo, innerMat));
    const latLngToVec3 = (lat: number, lng: number, r: number) => {
      const phi = (90 - lat) * Math.PI / 180, theta = (lng + 180) * Math.PI / 180;
      return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
    };
    const dots: THREE.Mesh[] = [];
    COUNTRIES.forEach(c => {
      const sri = computeSRI(c).sri;
      const t = c.energy / 100;
      const sriNorm = sri / 100;
      const popFactor = (1 - t) * 0.5 + 0.5;
      const baseSize = layers.pop ? 0.012 + popFactor * 0.025 : 0.02;
      const dotGeo = new THREE.SphereGeometry(baseSize, 8, 8);
      let hue: THREE.Color;
      if (layers.sri) {
        if (sriNorm < 0.33) hue = new THREE.Color('#ff2200');
        else if (sriNorm < 0.66) hue = new THREE.Color('#f5a623');
        else hue = new THREE.Color('#00c9b1');
      } else {
        hue = new THREE.Color().setHSL(0, 0, 0.6);
      }
      const brightness = layers.elec ? 0.3 + t * 0.7 : 0.6;
      hue.multiplyScalar(brightness);
      const dotMat = new THREE.MeshBasicMaterial({ color: hue });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      const pos = latLngToVec3(c.lat, c.lng, 1.01);
      dot.position.copy(pos);
      scene.add(dot);
      dots.push(dot);
    });
    // Pilot site pulsing rings
    PILOT_SITES.forEach(ps => {
      const ringGeo = new THREE.RingGeometry(0.03, 0.04, 16);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xf5a623, transparent: true, opacity: 0.8, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      const pos = latLngToVec3(ps.lat, ps.lng, 1.015);
      ring.position.copy(pos);
      ring.lookAt(0, 0, 0);
      scene.add(ring);
    });
    let isDragging = false, prevX = 0, prevY = 0, rotX = 0.1, rotY = -0.4;
    const onDown = (e: MouseEvent) => { isDragging = true; prevX = e.clientX; prevY = e.clientY; };
    const onUp = () => { isDragging = false; };
    const onMove = (e: MouseEvent) => { if (!isDragging) return; rotY += (e.clientX - prevX) * 0.005; rotX += (e.clientY - prevY) * 0.005; rotX = Math.max(-1.2, Math.min(1.2, rotX)); prevX = e.clientX; prevY = e.clientY; };
    el.addEventListener('mousedown', onDown); window.addEventListener('mouseup', onUp); window.addEventListener('mousemove', onMove);
    const tick = () => {
      if (!isDragging) rotY += 0.001;
      scene.rotation.x = rotX; scene.rotation.y = rotY;
      renderer.render(scene, camera);
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animRef.current);
      el.removeEventListener('mousedown', onDown); window.removeEventListener('mouseup', onUp); window.removeEventListener('mousemove', onMove);
      renderer.dispose(); if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [layers]);

  return (
    <div className="w-full h-full relative">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute top-3 left-3 z-10 font-mono text-[10px] text-white/30">
        <span className="text-white/60 font-bold">3D GLOBE</span><br />
        <span className="text-[8px]">Drag to rotate. Brightness = energy access · Color = SRI score · Size = population at risk.</span>
      </div>
      <div className="absolute bottom-3 left-3 z-10 flex gap-1">
        {[
          { key: 'elec' as const, label: 'Energy' },
          { key: 'sri' as const, label: 'SRI' },
          { key: 'pop' as const, label: 'Population' },
        ].map(l => (
          <button key={l.key} onClick={() => setLayers(p => ({ ...p, [l.key]: !p[l.key] }))}
            className="font-mono text-[7px] px-1.5 py-0.5 border rounded transition-all"
            style={layers[l.key] ? { borderColor: '#f5a623', color: '#f5a623', background: '#f5a62312' } : { borderColor: `${W}0.1)`, color: `${W}0.2)` }}>
            {layers[l.key] ? '✓' : '○'} {l.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SPSSObservatory() {
  const [metric, setMetric] = useState('elec');
  const [mapPopup, setMapPopup] = useState<typeof COUNTRIES[0] | null>(null);
  const [scrollIdx, setScrollIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('observatory');
  const [highlightNode, setHighlightNode] = useState<string | null>(null);
  const [showMomentum, setShowMomentum] = useState(false);

  useEffect(() => { const iv = setInterval(() => setScrollIdx(p => (p + 1) % 8), 4000); return () => clearInterval(iv); }, []);

  const vals = COUNTRIES.map(c => {
    if (metric === 'elec') return c.energy;
    return (c as any)[metric] as number;
  });
  const max = Math.max(...vals), min = Math.min(...vals);

  const getColor = useCallback((v: number) => {
    const t = max === min ? 1 : (v - min) / (max - min);
    if (showMomentum) {
      const momentum = v * 0.15;
      if (momentum > 8) return `rgba(0,255,136,${0.5 + t * 0.5})`;
      if (momentum > 4) return `rgba(128,128,128,${0.4 + t * 0.5})`;
      return `rgba(255,60,60,${0.4 + t * 0.5})`;
    }
    return `rgba(${Math.round(255 * t)},${Math.round(255 * t)},${Math.round(255 * t)},${0.4 + t * 0.6})`;
  }, [metric, max, min, showMomentum]);

  const getR = useCallback((v: number) => {
    const t = max === min ? 0.5 : (v - min) / (max - min);
    return 5 + t * 14;
  }, [max, min]);

  const getVal = (c: typeof COUNTRIES[0]) => {
    if (metric === 'elec') return c.energy;
    return (c as any)[metric] as number;
  };

  const TABS = [
    { id: 'observatory', label: 'OBSERVE' },
    { id: 'sim', label: 'SIM', badge: 'NEW' },
    { id: 'failures', label: 'FAILURES', badge: '6' },
  ];

  return (
    <section id="observatory" className="w-full relative" style={{ background: BG }}>
      {/* HEADER (J2) */}
      <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: BD, background: `${W}0.015)` }}>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold tracking-wider text-white/80">◈ SPSS OBSERVATORY</span>
          <span className="font-mono text-[10px] text-white/20">Spatial Physical Social Systems</span>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border relative group" style={{ borderColor: `${W}0.2)` }}>
            <div className="w-1.5 h-1.5 rounded-full obs-blink-amber-dot" style={{ background: A }} />
            <span className="font-mono text-[9px] font-bold obs-blink-amber">CALIBRATING v0.1</span>
            <div className="hidden group-hover:block obs-tooltip" style={{ top: '100%', left: 0, marginTop: 4, width: 280 }}>
              Live data pipeline not yet connected. Metrics reflect 2023–2025 institutional datasets. Pipeline status: pending pilot deployment.
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-white/25 font-mono text-[9px]">
          <span>● PHYSICAL</span><span>● SOCIAL</span><span>● SPATIAL</span>
        </div>
        <span className="font-mono text-[9px] text-white/10">{new Date().toUTCString()}</span>
      </div>

      {/* TAB NAVIGATION */}
      <div className="flex items-center gap-1 px-4 py-1 border-b" style={{ borderColor: BD, background: `${W}0.01)` }}>
        {TABS.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className="font-mono text-[9px] uppercase tracking-wider px-3 py-1 border transition-all flex items-center gap-1.5"
            style={activeTab === tab.id
              ? { borderColor: `${W}0.4)`, color: '#fff', background: `${W}0.06)` }
              : { borderColor: 'transparent', color: `${W}0.3)` }}>
            {tab.label}
            {tab.badge && <span className="text-[7px] font-mono px-1 py-0 rounded border" style={{ borderColor: A + '60', color: A }}>{tab.badge}</span>}
          </button>
        ))}
      </div>

      {activeTab === 'observatory' && (
        <>
          {/* MAP + GLOBE */}
          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ height: '55vh', minHeight: 380 }}>
            <div className="lg:col-span-2 relative border-r" style={{ borderColor: BD }}>
              <Map initialViewState={{ longitude: 20, latitude: 2, zoom: 3 }} style={{ width: '100%', height: '100%' }} mapStyle={MAP_STYLE} attributionControl={false} dragRotate={false}>
                {COUNTRIES.map(c => {
                  const v = getVal(c);
                  const r = getR(v);
                  const color = getColor(v);
                  return (
                    <Marker key={c.code} longitude={c.lng} latitude={c.lat} anchor="center">
                      <div onClick={(e) => { e.stopPropagation(); setMapPopup(c); }} className="cursor-pointer group" style={{ width: r * 2, height: r * 2 }}>
                        <div className="absolute inset-0 rounded-full opacity-30 group-hover:opacity-70 transition-opacity" style={{ background: color, boxShadow: `0 0 ${r}px ${color}` }} />
                        <div className="absolute inset-[2px] rounded-full flex items-center justify-center border" style={{ background: color, borderColor: `${W}0.2)` }}>
                          <span className="text-[7px] font-mono font-bold" style={{ color: BG, textShadow: 'none' }}>{c.code}</span>
                        </div>
                      </div>
                    </Marker>
                  );
                })}
              </Map>
              {/* Country detail side panel — fixed position, no popup clipping */}
              {mapPopup && (() => {
                const prof = COUNTRY_PROFILES[mapPopup.code] || DEFAULT_PROFILE;
                const scores = computeSRI(mapPopup);
                return (
                  <div className="absolute top-0 right-0 z-30 w-[320px] h-full overflow-y-auto border-l" style={{ borderColor: BD, background: '#111111ee', backdropFilter: 'blur(12px)' }}>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-mono font-bold text-sm text-white">{mapPopup.name}</div>
                        <button onClick={() => setMapPopup(null)} className="text-white/30 hover:text-white/60 font-mono text-xs transition-colors">✕</button>
                      </div>
                      <div className="text-[9px] font-mono text-white/30 mb-4">{prof.pop}M pop · {prof.hubs} tech hubs · {prof.connectivity}</div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[8px] font-mono uppercase tracking-widest text-white/40">SPSS READINESS INDEX</span>
                        <span className="font-mono text-xl font-bold text-white">{scores.sri}<span className="text-[10px] text-white/30">/100</span></span>
                      </div>
                      <div className="text-[8px] font-mono text-white/25 mb-3">Balance: {scores.balance}% · Formula: GM(P,S,Sp) × (1+B)/2</div>
                      {[{l:'Physical',v:scores.physical,c:LAYER_METRICS.physical.color},{l:'Social',v:scores.social,c:LAYER_METRICS.social.color},{l:'Spatial',v:scores.spatial,c:LAYER_METRICS.spatial.color}].map(s=>(
                        <div key={s.l} className="mb-2">
                          <div className="flex justify-between text-[9px] font-mono"><span className="text-white/40">{s.l}</span><span className="text-white/60">{s.v}%</span></div>
                          <div className="h-2 rounded-full bg-white/5 mt-0.5"><div className="h-full rounded-full transition-all" style={{width:`${s.v}%`, background: s.c + '80'}} /></div>
                        </div>
                      ))}
                      <div className="text-[9px] font-mono leading-relaxed text-white/40 border-t pt-3 mt-3" style={{borderColor:BD}}>
                        <span className="text-white/20">SPSS LENS:</span> {prof.spssNote}
                      </div>
                      <a href="https://chat.whatsapp.com/FHoPpRitKpgEKFbClcXGYX" target="_blank" rel="noopener noreferrer"
                        className="block mt-4 text-center font-mono text-[9px] font-bold uppercase tracking-wider py-2.5 border rounded transition-all hover:bg-white/10 text-white/50 hover:text-white"
                        style={{borderColor:BD}}>→ Join SPSS Co-Creation for {mapPopup.name}</a>
                    </div>
                  </div>
                );
              })()}

              {/* Metric buttons + Momentum toggle */}
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-10">
                {METRIC_KEYS.map(m => (
                  <button key={m.key} onClick={() => { setMetric(m.key); setShowMomentum(false); }}
                    className="px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider border transition-all"
                    style={metric === m.key && !showMomentum
                      ? { background: `${W}0.15)`, borderColor: `${W}0.5)`, color: '#fff' }
                      : { background: 'rgba(0,0,0,0.7)', borderColor: `${W}0.1)`, color: `${W}0.35)` }}>
                    {m.label.split(' ')[0]}
                  </button>
                ))}
                <button onClick={() => setShowMomentum(!showMomentum)}
                  className="px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider border transition-all"
                  style={showMomentum
                    ? { background: '#f5a62315', borderColor: '#f5a623', color: '#f5a623' }
                    : { background: 'rgba(0,0,0,0.7)', borderColor: `${W}0.1)`, color: `${W}0.35)` }}>
                  Δ MOMENTUM
                </button>
              </div>
              {showMomentum && (
                <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 font-mono text-[7px]">
                  <span className="w-3 h-2 rounded" style={{ background: '#ff3b3b' }} /> <span className="text-white/30">Declining</span>
                  <span className="w-3 h-2 rounded ml-1" style={{ background: '#888' }} /> <span className="text-white/30">Static</span>
                  <span className="w-3 h-2 rounded ml-1" style={{ background: '#00ff88' }} /> <span className="text-white/30">Accelerating</span>
                </div>
              )}
              <div className="absolute top-3 left-3 z-10 px-2.5 py-1.5 font-mono text-[9px] text-white/40 border" style={{ borderColor: BD, background: 'rgba(0,0,0,0.8)' }}>
                ℹ️ Click any country dot to see infrastructure data. Toggle metrics below.
              </div>
              <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)' }} />
            </div>
            <div className="relative hidden lg:block" style={{ background: '#080808' }}>
              <Globe3D />
            </div>
          </div>

          {/* BOTTOM PANELS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ borderTop: `1px solid ${BD}` }}>
            <Panel title="REALITY INDEX" badge="TENSION MAP" info="Africa's infrastructure constraints alongside its massive untapped potential — now with solution territories. The same data, framed three ways — SPSS designs from all simultaneously.">
              <RealityIndex onSolutionClick={setHighlightNode} />
            </Panel>
            <Panel title="SPSS RADAR" badge="COMPARE" info="Compare how different technology solutions score across the three SPSS layers. Toggle profiles or create custom archetypes.">
              <SPSSRadarPanel />
            </Panel>
            <Panel title="NETWORK TOPOLOGY" info="How does data flow? In the Extraction model, everything funnels to central nodes. In the SPSS model, communities keep their data and choose what to share.">
              <NetworkTopology highlightNode={highlightNode} />
            </Panel>
            <Panel title="RESEARCH INTEL" badge="8" info="Open research questions the SPSS framework cannot yet answer. These are active invitations for researchers, engineers, and community partners to contribute.">
              <ResearchIntel scrollIdx={scrollIdx} />
            </Panel>
          </div>

          {/* SRI FORMULA + RANKING */}
          <SRIPanel />
        </>
      )}

      {activeTab === 'sim' && <InterventionSim />}
      {activeTab === 'failures' && <FailureArchive />}

      {/* FOOTER */}
      <div className="flex items-center justify-between px-4 py-1.5 border-t" style={{ borderColor: BD, background: `${W}0.015)` }}>
        <span className="font-mono text-[8px] text-white/15">DATA: IEA · GSMA · ILO · CIGI · ETHNOLOGUE · AFRILABS · UN POP</span>
        <span className="font-mono text-[8px] text-white/15">SPSS COMMONS · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="hover:text-white/40 transition-colors underline">CC BY-SA 4.0</a> · ORIGINATED BY IYOBOSA REHOBOTH</span>
      </div>
    </section>
  );
}
