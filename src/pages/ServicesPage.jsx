import brandLogo from '../../ext-resources/logos/essenziat-digital-logo.jpeg';
import SiteHeader from '../components/SiteHeader';

const services = [
  {
    n: '01',
    title: 'Website Design',
    text: 'Conversion-focused website systems built for clarity, trust, and action.'
  },
  {
    n: '02',
    title: 'UI/UX Design',
    text: 'Interface and journey design that balances premium aesthetics with practical usability.'
  },
  {
    n: '03',
    title: 'Visual Direction',
    text: 'Brand-level visual language across typography, layout rhythm, and content hierarchy.'
  },
  {
    n: '04',
    title: 'Motion & Interaction',
    text: 'Purposeful transitions and interactions that improve product feel and user continuity.'
  },
  {
    n: '05',
    title: 'Social Media Systems',
    text: 'Structured content direction and visual consistency for high-frequency brand presence.'
  },
  {
    n: '06',
    title: 'Video Editing',
    text: 'Performance-led editing workflows for retention, discoverability, and narrative impact.'
  },
  {
    n: '07',
    title: 'Frontend Development',
    text: 'Responsive, production-ready interfaces with clean architecture and performance-aware implementation.'
  },
  {
    n: '08',
    title: 'Landing Page Optimization',
    text: 'Focused page refinement for stronger messaging hierarchy, user flow, and conversion quality.'
  },
  {
    n: '09',
    title: 'SEO Foundations',
    text: 'On-page structure, metadata strategy, and indexing readiness to support long-term organic visibility.'
  },
  {
    n: '10',
    title: 'Content & Channel Operations',
    text: 'End-to-end planning, packaging, and publishing systems for consistent digital growth execution.'
  }
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#121414] px-6 pb-24 pt-32 text-[#e2e2e2]">
      <div className="pointer-events-none absolute left-[-110px] top-[190px] h-[320px] w-[320px] rounded-full bg-[#2d5bff]/20 blur-[100px]" />
      <div className="pointer-events-none absolute right-[-130px] top-[460px] h-[380px] w-[380px] rounded-full bg-[#2d5bff]/18 blur-[115px]" />
      <div className="pointer-events-none absolute bottom-[140px] left-1/2 h-[300px] w-[560px] -translate-x-1/2 rounded-full bg-[#2d5bff]/12 blur-[120px]" />

      <SiteHeader brandLogo={brandLogo} onContactClick={() => {}} />

      <section className="relative z-10 mx-auto max-w-6xl">
        <div className="rounded-2xl border border-white/10 bg-[#1a1c1c]/50 p-8 shadow-[0_16px_55px_rgba(45,91,255,0.13)] backdrop-blur-xl md:p-12">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Capabilities</p>
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">Services</h1>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#c4c5d9]">
            Every service is executed through a performance-first lens where creative quality, technical precision, and measurable outcomes are treated as one system. The stack below reflects complete delivery support across design, development, content, and growth operations.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.n} className="rounded-2xl border border-white/10 bg-[#1a1c1c]/45 p-6 shadow-[0_12px_38px_rgba(45,91,255,0.12)] backdrop-blur-lg md:p-8">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#b8c3ff]">{service.n}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#c4c5d9]">{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
