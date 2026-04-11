import React from 'react';
import { Network, PenTool, Home, MessageSquare } from 'lucide-react';

export default function SpatialEmbodiedLayer() {
  const concepts = [
    {
      title: "Spatial Heritage Engines",
      icon: <Network className="w-5 h-5" />,
      desc: "AR/MR systems and spatial computing environments that allow communities to document, navigate, and share indigenous knowledge in spatial form. Elders walk through virtual reconstructions of traditional practices while youth co-create the archive.",
    },
    {
      title: "Embodied Skills Transfer",
      icon: <PenTool className="w-5 h-5" />,
      desc: "Offline-capable embodied AI and robotics simulations for training healthcare workers, agricultural extensionists, and technical skills across remote areas. Locally-deployed, device-shared, available in local languages with zero connectivity required.",
    },
    {
      title: "Spatial Community Twins",
      icon: <Home className="w-5 h-5" />,
      desc: "Community-governed spatial overlays of physical spaces—markets, farms, clinics—that function as living digital twins. Fed by community-owned sensor data and navigable through embodied voice interfaces in local languages.",
    },
    {
      title: "Spatial Governance Chambers",
      icon: <MessageSquare className="w-5 h-5" />,
      desc: "Immersive spatial environments designed for community deliberation. These enable distributed communities to gather in shared virtual space for collective decision-making, using culturally appropriate formats that respect oral traditions.",
    }
  ];

  return (
    <section id="spatial-embodied" className="py-24 px-6 md:px-12 lg:px-20 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-obsidian tracking-tight">
            The Spatial & Embodied Layer
          </h2>
          <p className="font-sans text-lg text-subtle leading-relaxed">
            Where Spatial Computing Meets Indigenous Intelligence
          </p>
          <p className="font-sans text-sm text-subtle leading-relaxed mt-4">
            Spatial & Embodied Computing—encompassing computer vision, spatial sensing, embodied AI, robotics, and XR—is not merely one tool within the SPSS framework. It is the most direct bridge between the Spatial Layer's technological capability and the Social Layer's relational, experiential, and oral knowledge systems. Spatial computing creates embodied experiences that mirror how indigenous knowledge is actually transmitted: through demonstration, immersion, and shared presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {concepts.map((concept, idx) => (
             <div 
               key={idx} 
               className="group relative bg-canvas border border-border/80 rounded-2xl p-8 transition-all duration-500 hover:border-obsidian/30 hover:shadow-lg hover:-translate-y-1"
             >
               <div className="w-12 h-12 bg-surface border border-border rounded flex items-center justify-center text-obsidian mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                 {concept.icon}
               </div>
               <h4 className="font-display text-xl font-semibold text-obsidian mb-3">
                 {concept.title}
               </h4>
               <p className="font-sans text-sm text-subtle leading-relaxed">
                 {concept.desc}
               </p>
             </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-xs font-mono text-subtle/60 uppercase tracking-wider">
          Bridging the Digital and Physical Divide
        </div>
      </div>
    </section>
  );
}
