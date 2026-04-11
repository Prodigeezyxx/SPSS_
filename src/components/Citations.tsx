import React from 'react';

export default function Citations() {
  const citations = [
    "IEA Financing Electricity Access in Africa, 2024",
    "ILO Africa Regional Informality Statistical Profile, 2025",
    "GSMA Mobile Economy Africa, 2025",
    "Adebara, I. AI and Language Data Flaring in Africa. CIGI Policy Brief No. 216, 2025",
    "Masakhane. masakhane.io, est. 2019",
    "Zenzeleni Networks. zenzeleni.net",
    "Zipline. Rwanda national drone delivery. Gavi/ITU, 2016–2024",
    "BRCK Education. Kio Kit case study. Academia.edu / Forbes, 2015",
    "Hello Tractor. Harvard Ministerial Leadership / MIT Solve",
    "Mozilla Foundation. Common Voice African Language Datasets, 2022",
    "Africa XR. The Africa XR Report, 2022. africaxrreport.com",
    "UNESCO. From Promise to Practice: Harnessing Generative AI in Sub-Saharan Africa, 2024",
    "UNESCO. The Cultural Cost of AI in Africa's Education Systems, 2025",
    "Nekoto, W. et al. Participatory Research for Low-Resourced Machine Translation. EMNLP Findings, 2020",
    "Mohamed, S., Png, M-T., & Isaac, W. Decolonial AI. Philosophy & Technology, 2020",
    "Internet Society. Understanding Community Networks in Africa, 2017",
    "GIZ. XR in VET Development Projects, 2023",
    "Games for Change. XR for Social Impact: A Landscape Review, 2022"
  ];

  return (
    <section className="bg-canvas border-t border-border/60 py-16 px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h3 className="font-display text-xl font-semibold text-obsidian tracking-tight mb-8">
          Selected References
        </h3>
        <div className="columns-1 md:columns-2 gap-12 font-sans text-xs text-subtle leading-loose">
          {citations.map((citation, idx) => (
            <p key={idx} className="mb-3 break-inside-avoid">
              {citation}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
