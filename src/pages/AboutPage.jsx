import { useState } from 'react';
import brandLogo from '../../ext-resources/logos/essenziat-digital-logo.jpeg';
import ruhverseMain from '../../ext-resources/images/Ruhverse-main.png';
import tttMain from '../../ext-resources/images/TTT.png';
import vfMain from '../../ext-resources/images/VF.png';
import SiteHeader from '../components/SiteHeader';

export default function AboutPage() {
  const [expandedMedia, setExpandedMedia] = useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121414] px-6 pb-16 pt-32 text-[#e2e2e2]">
      <div className="pointer-events-none absolute left-[-120px] top-[180px] h-[320px] w-[320px] rounded-full bg-[#2d5bff]/20 blur-[95px]" />
      <div className="pointer-events-none absolute right-[-140px] top-[520px] h-[360px] w-[360px] rounded-full bg-[#2d5bff]/18 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[120px] left-1/2 h-[300px] w-[520px] -translate-x-1/2 rounded-full bg-[#2d5bff]/12 blur-[120px]" />

      <SiteHeader brandLogo={brandLogo} onContactClick={() => {}} />

      <section className="relative z-10 mx-auto max-w-6xl space-y-8">
        <div className="rounded-2xl border border-white/10 bg-[#1a1c1c]/50 p-8 shadow-[0_16px_55px_rgba(45,91,255,0.12)] backdrop-blur-xl md:p-12">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">The Story</p>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">About Essenziat Digital</h1>
          <p className="mt-4 text-sm font-medium text-slate-300">
            Led by <span className="font-semibold text-white">Mohd Rameez</span>, CEO and Founder.
          </p>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#c4c5d9]">
            Essenziat Digital began as a personal commitment to bridge creative storytelling with technical discipline. I saw too many brands invest in visuals that looked impressive but did not convert, and too many websites that were functional but had no emotional pull. This studio was built to close that gap through focused design, conversion-aware development, and messaging that moves people to act.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#c4c5d9]">
            Today, I partner with founders, creators, and growing teams who need more than digital decoration. Every project is approached as a business system: brand clarity at the top, strong user journey in the middle, and measurable outcomes at the end. The public face is premium creative direction; the engine underneath is a <span className="font-semibold text-white">performance-based agency mindset</span> where decisions are guided by attention, trust, and conversion quality.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-[#1a1c1c]/45 p-6 shadow-[0_12px_40px_rgba(45,91,255,0.10)] backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-white">Why This Exists</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#c4c5d9]">
              To build digital experiences that do not stop at aesthetics. The objective is clear communication, sharper positioning, and a stronger conversion path for every brand touchpoint.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[#1a1c1c]/45 p-6 shadow-[0_12px_40px_rgba(45,91,255,0.10)] backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-white">How I Work</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#c4c5d9]">
              Each project runs through strategy, narrative mapping, visual system design, build execution, and launch calibration with practical checks for SEO, performance, and maintainability.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-[#1a1c1c]/45 p-6 shadow-[0_12px_40px_rgba(45,91,255,0.10)] backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-white">What Matters Most</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#c4c5d9]">
              Clean delivery, measurable progress, and assets that scale. The goal is long-term value, not one-time design output that fades after launch.
            </p>
          </article>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#1a1c1c]/50 p-8 shadow-[0_16px_55px_rgba(45,91,255,0.12)] backdrop-blur-xl md:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Commercial Philosophy</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Aligned With Outcomes, Not Noise</h2>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#c4c5d9]">
            We structure engagements so compensation is tied to real delivery and verified progress, not activity for its own sake. In practice, the major value fee is connected to agreed milestones and outcomes, while we often absorb extra effort on our side when execution needs more depth than expected.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-400">
            Final commercial terms are defined per project scope and proposal.
          </p>
        </div>

        <div className="grid gap-6 rounded-2xl border border-white/10 bg-[#1a1c1c]/50 p-8 shadow-[0_16px_55px_rgba(45,91,255,0.12)] backdrop-blur-xl md:grid-cols-2 md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">What I Build</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">A Complete Growth-Oriented Creative Stack</h2>
            <p className="mt-4 text-base leading-relaxed text-[#c4c5d9]">
              Core work spans website design and development, UI/UX systems, visual direction, motion-aware interaction design, SEO-ready content structure, and production-grade video editing pipelines.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#c4c5d9]">
              Instead of treating web and content as separate functions, I build them as one connected system so the brand message, page flow, and media execution reinforce each other at every stage of the user journey.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 shadow-[0_10px_36px_rgba(45,91,255,0.18)]">
            <div className="group relative">
              <img src={ruhverseMain} alt="RuhVerse project interface" className="h-full w-full object-cover" />
              <a
                href="https://ruhverse.online"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/35 bg-black/55 px-4 py-2 text-sm font-semibold text-white"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1c1c]/75 via-[#1b1e22]/70 to-[#1a1c1c]/75 p-8 shadow-[0_20px_65px_rgba(45,91,255,0.18)] backdrop-blur-xl md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Images And Video Work</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Visual Storytelling Across Product And Content</h2>
            </div>
            <a href="https://www.youtube.com/@Vital-Facts" target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:border-blue-300/50 hover:text-blue-200">
              Watch Live Examples
            </a>
          </div>

          <p className="mt-4 max-w-4xl text-base leading-relaxed text-[#c4c5d9]">
            This layer combines static design credibility with video-led momentum. Product frames, thumbnails, editing rhythm, and channel packaging are shaped as one growth system to improve discoverability, retention, and trust.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-12">
            <button type="button" onClick={() => setExpandedMedia({ src: tttMain, alt: 'The Tabsarah Table content visuals' })} className="group overflow-hidden rounded-xl border border-white/10 text-left shadow-[0_10px_34px_rgba(45,91,255,0.16)] md:col-span-4" aria-label="Expand The Tabsarah Table image">
              <img src={tttMain} alt="The Tabsarah Table content visuals" className="h-56 w-full object-cover transition-transform duration-300 delay-500 group-hover:scale-[1.1]" />
            </button>
            <button type="button" onClick={() => setExpandedMedia({ src: vfMain, alt: 'VF educational channel performance visuals' })} className="group overflow-hidden rounded-xl border border-white/10 text-left shadow-[0_10px_34px_rgba(45,91,255,0.16)] md:col-span-4" aria-label="Expand VF educational channel image">
              <img src={vfMain} alt="VF educational channel performance visuals" className="h-56 w-full object-cover transition-transform duration-300 delay-500 group-hover:scale-[1.1]" />
            </button>
            <div className="rounded-xl border border-white/10 bg-[#141718]/90 p-5 shadow-[0_10px_34px_rgba(45,91,255,0.14)] md:col-span-4">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Editorial Intent</p>
              <h3 className="mt-3 text-xl font-semibold text-white">Performance-Led Video Direction</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#c4c5d9]">
                Each piece is shaped around opening-hook strength, narrative pacing, and retention checkpoints so creative output supports measurable channel progression.
              </p>
            </div>
          </div>

        </div>
      </section>

      {expandedMedia && (
        <button
          type="button"
          onClick={() => setExpandedMedia(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          aria-label="Close expanded image"
        >
          <img src={expandedMedia.src} alt={expandedMedia.alt} className="max-h-[88vh] w-auto max-w-[92vw] rounded-xl border border-white/20 object-contain" />
        </button>
      )}
    </main>
  );
}
