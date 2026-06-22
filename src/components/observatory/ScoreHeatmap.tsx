import React from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';

const SAMPLE_DATA = [
  { id: 'AgriVoice', data: [{ x: 'Physical', y: 38 }, { x: 'Spatial', y: 42 }, { x: 'Social', y: 35 }, { x: 'Principles', y: 40 }] },
  { id: 'HealthKit', data: [{ x: 'Physical', y: 22 }, { x: 'Spatial', y: 45 }, { x: 'Social', y: 28 }, { x: 'Principles', y: 30 }] },
  { id: 'M-Shamba', data: [{ x: 'Physical', y: 44 }, { x: 'Spatial', y: 30 }, { x: 'Social', y: 48 }, { x: 'Principles', y: 45 }] },
  { id: 'EduLink', data: [{ x: 'Physical', y: 30 }, { x: 'Spatial', y: 40 }, { x: 'Social', y: 32 }, { x: 'Principles', y: 25 }] },
  { id: 'PayLocal', data: [{ x: 'Physical', y: 40 }, { x: 'Spatial', y: 35 }, { x: 'Social', y: 45 }, { x: 'Principles', y: 42 }] },
  { id: 'SolarGrid', data: [{ x: 'Physical', y: 48 }, { x: 'Spatial', y: 28 }, { x: 'Social', y: 40 }, { x: 'Principles', y: 38 }] },
  { id: 'LangAI', data: [{ x: 'Physical', y: 25 }, { x: 'Spatial', y: 50 }, { x: 'Social', y: 42 }, { x: 'Principles', y: 35 }] },
  { id: 'FarmTwin', data: [{ x: 'Physical', y: 35 }, { x: 'Spatial', y: 48 }, { x: 'Social', y: 30 }, { x: 'Principles', y: 28 }] },
];

export default function ScoreHeatmap() {
  return (
    <div className="w-full h-full flex flex-col">
      <p className="text-xs text-white/40 mb-4">Sample submissions showing where the ecosystem's strengths and blind spots cluster. Darker cells = stronger alignment.</p>
      <div className="flex-1 min-h-[420px]">
        <ResponsiveHeatMap
          data={SAMPLE_DATA}
          margin={{ top: 40, right: 30, bottom: 30, left: 90 }}
          valueFormat=">-.0f"
          axisTop={{
            tickSize: 0, tickPadding: 12,
            legend: '', legendOffset: 36,
          }}
          axisLeft={{
            tickSize: 0, tickPadding: 12,
            legend: '', legendOffset: -72,
          }}
          colors={{
            type: 'diverging',
            scheme: 'blue_green',
            minValue: 0,
            maxValue: 50,
          }}
          emptyColor="rgba(255,255,255,0.03)"
          borderWidth={1}
          borderColor="rgba(255,255,255,0.06)"
          enableLabels={true}
          labelTextColor={{ from: 'color', modifiers: [['brighter', 3]] }}
          animate={true}
          motionConfig="gentle"
          hoverTarget="cell"
          theme={{
            text: { fill: 'rgba(255,255,255,0.6)', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11 },
            axis: {
              ticks: { text: { fill: 'rgba(255,255,255,0.5)', fontSize: 11 } },
            },
            labels: { text: { fontSize: 12, fontWeight: 600 } },
            tooltip: {
              container: {
                background: '#111', color: '#fff', fontSize: 12,
                borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                fontFamily: "'Space Grotesk', sans-serif",
              }
            }
          }}
        />
      </div>
      <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-4">
        <span className="text-[10px] text-white/30 uppercase tracking-wider">0 = Not aligned</span>
        <div className="w-32 h-2 rounded-full" style={{ background: 'linear-gradient(to right, #1a1a2e, #0e6655, #1abc9c)' }} />
        <span className="text-[10px] text-white/30 uppercase tracking-wider">50 = Fully aligned</span>
      </div>
      <p className="text-[10px] text-white/20 font-mono mt-3 text-center">
        v0.1 — Sample data. Live aggregation available when SPSS Checker submissions are stored.
      </p>
    </div>
  );
}
