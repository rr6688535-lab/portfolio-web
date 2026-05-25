export default function TestimonialsSection() {
  return (
    <section className="bg-[#0c0f0f] px-6 py-[120px]">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-20 text-center text-5xl font-bold text-white md:text-[64px]">Collaboration, in their words</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col rounded-xl border border-white/10 bg-[#1a1c1c]/40 p-8">
            <p className="mb-8 text-base italic leading-relaxed text-[#e2e2e2]">"RuhVerse needed both strong product clarity and reliable execution. EssenziaT Digital delivered a focused Quran platform with smooth UX, clean structure, and dependable rollout quality from design through implementation."</p>
            <p className="text-sm font-bold text-white">Founder</p>
            <p className="text-xs text-[#b8c3ff]">RuhVerse</p>
          </div>
          <div className="flex flex-col rounded-xl border border-white/10 bg-[#1a1c1c]/40 p-8">
            <p className="mb-8 text-base italic leading-relaxed text-[#e2e2e2]">"From SEO planning to video editing, execution stayed consistent and strategic. The first edited long video reached around 1K views, multiple uploads crossed 500+, and the channel scaled to 240 subscribers in the early phase."</p>
            <p className="text-sm font-bold text-white">Adeem Raza</p>
            <p className="text-xs text-[#b8c3ff]">Owner, The Tabsarah Table</p>
          </div>
          <div className="flex flex-col rounded-xl border border-white/10 bg-[#1a1c1c]/40 p-8">
            <p className="mb-8 text-base italic leading-relaxed text-[#e2e2e2]">"For our educational channel, they managed everything end-to-end: scripting, editing, uploads, and SEO. That full-stack content workflow is what helped us reach 3.2K subscribers with stable growth."</p>
            <p className="text-sm font-bold text-white">CEO</p>
            <p className="text-xs text-[#b8c3ff]">Vital Facts</p>
          </div>
        </div>
      </div>
    </section>
  );
}