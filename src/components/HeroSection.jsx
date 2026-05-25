import { motion } from 'framer-motion';
import ruhverseLogo from '../../ext-resources/logos/RuhVerse.jpg';
import tabsarahLogo from '../../ext-resources/logos/Tabsarah Table.jpeg';
import vfLogo from '../../ext-resources/logos/VF LOGO 3.png';
import verdripLogo from '../../ext-resources/logos/Verdrip.jpeg';

export default function HeroSection({ heroRef, fadeUp, stagger, trustStats, clientLogos, brandLogo, ratingSummary, onRateService, isSubmittingRating, onContactClick }) {
  const backgroundLogos = [
    { src: ruhverseLogo, alt: 'RuhVerse logo' },
    { src: tabsarahLogo, alt: 'Tabsarah Table logo' },
    { src: vfLogo, alt: 'Vital Facts logo' },
    { src: verdripLogo, alt: 'Verdrip logo' }
  ];
  const slidingLogos = [...backgroundLogos, ...backgroundLogos];

  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="relative flex min-h-screen items-start justify-center overflow-hidden px-6 pb-16 pt-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2d5bff]/10 blur-[120px]" />
      <motion.div ref={heroRef} className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.span whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }} variants={fadeUp} className="mb-8 block text-xs uppercase tracking-[0.3em] text-[#b8c3ff]">Architecture of the Digital Age</motion.span>
        <div className="relative mb-8">
          <img src={brandLogo} alt="" aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover opacity-20 blur-2xl md:h-72 md:w-72" />
          <motion.h1 whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }} variants={fadeUp} className="relative z-10 text-6xl font-extrabold leading-[1.05] text-white md:text-[120px]">
            Strategy.<br />
            <span className="bg-gradient-to-r from-[#b8c3ff] to-blue-400 bg-clip-text text-transparent">Design. Growth.</span>
          </motion.h1>
        </div>
        <motion.p whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }} variants={fadeUp} className="mx-auto mb-12 max-w-2xl text-lg text-[#c4c5d9]">
          We craft visionary digital experiences for brands that demand more than just a presence. High-performance design meets technical precision.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col justify-center gap-6 md:flex-row">
          <motion.button onClick={onContactClick} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="rounded-full bg-[#2d5bff] px-10 py-5 text-lg font-bold text-white">Start Your Project</motion.button>
          <motion.button onClick={onContactClick} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="rounded-full border border-white/20 px-10 py-5 text-lg font-bold text-white">Work With Us</motion.button>
        </motion.div>
        <motion.p whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }} variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-sm font-medium text-[#b8c3ff]">
          Performance-first partnership: we charge full payment when your project delivers real results.
        </motion.p>
        <motion.div variants={fadeUp} className="relative mx-auto mt-10 w-full max-w-3xl overflow-hidden rounded-full border border-white/15 bg-[#0f131a]/70 px-6 py-3">
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 flex w-[200%] items-center gap-6 px-6 opacity-20"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            {slidingLogos.map((logo, index) => (
              <img
                key={`${logo.alt}-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="h-9 w-9 shrink-0 rounded-full object-cover blur-[0.4px] md:h-10 md:w-10"
              />
            ))}
          </motion.div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2d5bff]/25 blur-2xl" />
          <div className="relative z-10 flex items-center justify-center gap-5 text-sm md:text-base">
            <span className="font-semibold text-white">{trustStats.clients}</span>
            <span className="text-white/35">|</span>
            <span className="font-semibold text-white">{ratingSummary.average}/5 Average Rating ({ratingSummary.count})</span>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-4 flex items-center justify-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b8c3ff]">Rate Service</span>
          <div className="flex items-end gap-1.5">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                disabled={isSubmittingRating}
                onClick={() => onRateService(value)}
                className={`text-[#ffd36b] transition hover:scale-110 disabled:cursor-not-allowed disabled:opacity-60 ${
                  value === 3 ? 'text-4xl' : value === 2 || value === 4 ? 'text-3xl' : 'text-2xl'
                }`}
                aria-label={`Rate ${value} out of 5`}
              >
                &#9733;
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
