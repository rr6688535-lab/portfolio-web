import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SERVICE_ICONS = {
  web: (
    <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current" aria-hidden="true">
      <path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75Zm1.5 3.5h15v9a1.25 1.25 0 0 1-1.25 1.25H5.75A1.25 1.25 0 0 1 4.5 18.25v-9Zm1.25-4.75A1.25 1.25 0 0 0 4.5 5.75v2h15v-2a1.25 1.25 0 0 0-1.25-1.25H5.75Z" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current" aria-hidden="true">
      <path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h4.5A2.75 2.75 0 0 1 13 5.75v4.5A2.75 2.75 0 0 1 10.25 13h-4.5A2.75 2.75 0 0 1 3 10.25v-4.5Zm10 0A2.75 2.75 0 0 1 15.75 3h2.5A2.75 2.75 0 0 1 21 5.75v2.5A2.75 2.75 0 0 1 18.25 11h-2.5A2.75 2.75 0 0 1 13 8.25v-2.5ZM3 15.75A2.75 2.75 0 0 1 5.75 13h2.5A2.75 2.75 0 0 1 11 15.75v2.5A2.75 2.75 0 0 1 8.25 21h-2.5A2.75 2.75 0 0 1 3 18.25v-2.5ZM13 15.75A2.75 2.75 0 0 1 15.75 13h2.5A2.75 2.75 0 0 1 21 15.75v2.5A2.75 2.75 0 0 1 18.25 21h-2.5A2.75 2.75 0 0 1 13 18.25v-2.5Z" />
    </svg>
  ),
  palette: (
    <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current" aria-hidden="true">
      <path d="M12 3C6.48 3 2 7.03 2 12c0 2.63 1.27 5.03 3.29 6.77 1.14.98 2.57 1.23 3.72.74.83-.35 1.31-1.16 1.31-2.02v-.91c0-1.06.86-1.92 1.92-1.92h2.08A6.68 6.68 0 0 0 21 8c0-2.76-2.26-5-5.05-5H12Zm-4.25 7A1.25 1.25 0 1 1 7.75 7.5 1.25 1.25 0 0 1 7.75 10Zm3.5-2A1.25 1.25 0 1 1 11.25 5.5 1.25 1.25 0 0 1 11.25 8Zm3.5 2A1.25 1.25 0 1 1 14.75 7.5 1.25 1.25 0 0 1 14.75 10Zm3.5 0A1.25 1.25 0 1 1 18.25 7.5 1.25 1.25 0 0 1 18.25 10Z" />
    </svg>
  ),
  animation: (
    <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current" aria-hidden="true">
      <path d="M4.75 3h14.5A1.75 1.75 0 0 1 21 4.75v14.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25V4.75A1.75 1.75 0 0 1 4.75 3Zm1.75 3.25v11.5h11.5V6.25H6.5Zm3 1.75L15 12l-5.5 4V8Z" />
    </svg>
  ),
  share: (
    <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current" aria-hidden="true">
      <path d="M18 15.5a3.5 3.5 0 0 0-2.84 1.46l-5.04-2.5a3.55 3.55 0 0 0 0-1.92l5.03-2.5A3.5 3.5 0 1 0 14.5 8a3.53 3.53 0 0 0 .1.82l-5.02 2.5a3.5 3.5 0 1 0 0 5.36l5.03 2.5a3.5 3.5 0 1 0 3.39-3.68Z" />
    </svg>
  ),
  movie_edit: (
    <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current" aria-hidden="true">
      <path d="M4.75 3h14.5A1.75 1.75 0 0 1 21 4.75v14.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25V4.75A1.75 1.75 0 0 1 4.75 3Zm-.25 4h15V4.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25V7Zm0 1.5v10.75c0 .14.11.25.25.25h14.5a.25.25 0 0 0 .25-.25V8.5h-15ZM8 11l6 3-6 3v-6Z" />
    </svg>
  )
};

export default function ServicesSection({ services, fadeUp, stagger }) {
  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="bg-[#121414] px-6 py-[120px]">
      <div className="mx-auto max-w-6xl">
        <motion.div variants={fadeUp} className="mb-24 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-6 text-5xl font-bold text-white md:text-[64px]">What I can help with</h2>
            <p className="text-[#c4c5d9]">Comprehensive digital solutions engineered for scale and aesthetic excellence.</p>
          </div>
          <span className="hidden pb-4 text-xs text-slate-600 md:block">EST. 2026 / ESSENZIAT DIGITAL</span>
        </motion.div>
        <motion.div variants={stagger} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <motion.div key={s.n} variants={fadeUp} whileHover={{ y: -6, scale: 1.01 }} className="relative overflow-hidden rounded-xl border border-white/10 bg-[#1a1c1c]/40 p-10 backdrop-blur-[20px]">
              <span className="absolute -right-4 -top-4 select-none text-9xl font-black text-white/10">{s.n}</span>
              <span className="mb-8 block text-[#b8c3ff]">{SERVICE_ICONS[s.icon]}</span>
              <h3 className="mb-4 text-[32px] font-semibold text-white">{s.title}</h3>
              <p className="text-sm text-[#c4c5d9]">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 flex justify-center">
          <Link to="/services" className="group inline-flex items-center gap-4 rounded-full bg-[#1a1c1c]/60 px-6 py-3 text-sm font-semibold text-[#b8c3ff] transition hover:scale-[1.02] hover:text-white">
            <span className="h-px w-10 bg-[#2d5bff]" />
            <span>Explore More</span>
            <span className="h-px w-10 bg-[#2d5bff]" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
