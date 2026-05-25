import { AnimatePresence, motion } from 'framer-motion';

export default function ProjectsSection({
  projects,
  activeProject,
  direction,
  isPreviewEnabled,
  hoverPreviewTimerRef,
  setIsFullscreenPreviewOpen,
  prevProject,
  nextProject,
  setDirection,
  setActiveProject
}) {
  return (
    <section className="bg-[#121414] px-6 py-[120px]">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-5xl font-bold text-white md:text-[64px]">Things I've Designed</h2>
        <div className="grid gap-8 rounded-2xl border border-white/10 bg-[#1a1c1c]/40 p-4 backdrop-blur-[20px] md:grid-cols-[320px_minmax(0,1fr)] md:p-6">
          <div className="relative mx-auto w-[260px] md:mx-0 md:w-[300px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.a
                key={projects[activeProject].title}
                href={projects[activeProject].siteUrl}
                target={projects[activeProject].siteUrl ? '_blank' : undefined}
                rel={projects[activeProject].siteUrl ? 'noopener noreferrer' : undefined}
                onHoverStart={() => {
                  if (isPreviewEnabled) {
                    if (hoverPreviewTimerRef.current) clearTimeout(hoverPreviewTimerRef.current);
                    hoverPreviewTimerRef.current = setTimeout(() => {
                      setIsFullscreenPreviewOpen(true);
                    }, 500);
                  }
                }}
                onHoverEnd={() => {
                  if (hoverPreviewTimerRef.current) {
                    clearTimeout(hoverPreviewTimerRef.current);
                    hoverPreviewTimerRef.current = null;
                  }
                }}
                custom={direction}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="group relative z-10 block h-[380px] w-[250px] overflow-hidden rounded-xl border border-white/15 bg-[#1e2020] md:h-[430px] md:w-[290px]"
              >
                <img
                  src={projects[activeProject].image}
                  alt={projects[activeProject].alt}
                  className={`h-full w-full transition-all duration-500 ${projects[activeProject].title === 'The Tabsarah Table'
                      ? 'object-cover group-hover:object-contain group-hover:scale-100'
                      : 'object-cover group-hover:scale-[1.03]'
                    }`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                {projects[activeProject].siteUrl && (
                  <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-black/45 px-4 py-1.5 text-xs font-semibold tracking-wide text-white opacity-0 transition duration-300 group-hover:opacity-100">
                    View Site
                  </div>
                )}
              </motion.a>
            </AnimatePresence>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-[34px] font-semibold text-white">{projects[activeProject].title}</h3>
              <span className="mt-3 inline-flex rounded-full border border-[#b8c3ff]/30 px-3 py-1 text-xs text-[#b8c3ff]">{projects[activeProject].tag.replace(/\uFFFD/g, '|')}</span>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#c4c5d9]">
                {projects[activeProject].title === 'RuhVerse'
                  ? 'A focused product experience for Quran reading, verse exploration, and smooth user flows with strong visual clarity and performance-first development.'
                  : projects[activeProject].title === 'The Tabsarah Table'
                    ? 'For The Tabsarah Table (channel owner: Adeem Raza), I managed SEO strategy and long-form video editing to improve early reach. A newly published long video crossed around 1K views, other edited uploads consistently passed 500+ views, and the channel reached 240 subscribers at that stage.'
                    : 'For this educational channel, I managed the entire production and growth workflow: scripting, editing, upload operations, metadata planning, and SEO execution. Consistent publishing quality and discovery optimization helped scale the channel to 3.2K subscribers.'}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} onClick={prevProject} className="rounded-full border border-white/20 p-2.5 text-white" aria-label="Previous project">
                &#8592;
              </motion.button>
              <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} onClick={nextProject} className="rounded-full bg-[#2d5bff] p-2.5 text-white" aria-label="Next project">
                &#8594;
              </motion.button>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  onClick={() => {
                    setDirection(index > activeProject ? 1 : -1);
                    setActiveProject(index);
                    setIsFullscreenPreviewOpen(false);
                  }}
                  className={`h-2.5 rounded-full transition-all ${activeProject === index ? 'w-8 bg-[#2d5bff]' : 'w-2.5 bg-white/35'}`}
                  aria-label={`Go to ${project.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


