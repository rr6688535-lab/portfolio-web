import { AnimatePresence, motion } from 'framer-motion';

export function FullscreenPreviewModal({ isOpen, project, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseLeave={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(45,91,255,0.22),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(184,195,255,0.18),transparent_40%),radial-gradient(circle_at_55%_40%,rgba(45,91,255,0.1),transparent_50%)]" />
          <motion.div
            initial={{ scale: 0.96, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-5xl"
          >
            <button
              onClick={onClose}
              aria-label="Close preview"
              className="absolute right-3 top-3 z-10 rounded-full border border-white/25 bg-black/60 px-3 py-1 text-sm text-white transition duration-200 hover:scale-105 hover:border-[#b8c3ff] hover:bg-[#2d5bff]/30"
            >
              &times;
            </button>
            <img src={project.image} alt={project.alt} className="mx-auto max-h-[80vh] w-full rounded-xl border border-white/20 object-contain" />
            <a href={project.siteUrl || ''} target="_blank" rel="noopener noreferrer" className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/35 bg-black/55 px-5 py-2 text-sm font-semibold text-white">
              View Site
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ContactModal({ isOpen, onClose, contactIntent, setContactIntent, contactForm, setContactForm, onSubmit, isSubmitting }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <motion.div initial={{ y: 26, opacity: 0, scale: 0.96 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 18, opacity: 0, scale: 0.96 }} transition={{ duration: 0.32, ease: 'easeOut' }} className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-[#13181f] p-6 md:p-8">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_15%_20%,rgba(45,91,255,0.22),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(184,195,255,0.16),transparent_45%)] blur-xl" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-[#2d5bff]/30 shadow-[0_0_48px_-14px_rgba(45,91,255,0.55)]" />
            <button onClick={onClose} className="absolute right-4 top-4 rounded-full border border-white/20 px-3 py-1 text-white transition hover:scale-105 hover:border-[#b8c3ff]" aria-label="Close contact form">&times;</button>
            <h3 className="text-3xl font-bold text-white">Let&apos;s Build Your Next Growth Story</h3>
            <p className="mt-2 text-sm text-[#c4c5d9]">Share your goals and I&apos;ll personally respond with the best next step.</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" onClick={() => setContactIntent('request-call')} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${contactIntent === 'request-call' ? 'bg-[#2d5bff] text-white' : 'border border-white/20 text-[#c4c5d9]'}`}>Request Call/Text</button>
              <button type="button" onClick={() => setContactIntent('book-appointment')} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${contactIntent === 'book-appointment' ? 'bg-[#2d5bff] text-white' : 'border border-white/20 text-[#c4c5d9]'}`}>Book Appointment</button>
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <input type="text" required placeholder="Your Name" value={contactForm.name} onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))} className="w-full rounded-xl border border-white/15 bg-[#0f141b] px-4 py-3 text-white placeholder:text-slate-500 focus:border-[#2d5bff] focus:outline-none" />
              {contactIntent === 'request-call' ? (
                <>
                  <input type="text" required placeholder="Enter contact number/ email address" value={contactForm.contact} onChange={(e) => setContactForm((prev) => ({ ...prev, contact: e.target.value }))} className="w-full rounded-xl border border-white/15 bg-[#0f141b] px-4 py-3 text-white placeholder:text-slate-500 focus:border-[#2d5bff] focus:outline-none" />
                  <input type="text" required placeholder="Service you need query about" value={contactForm.service} onChange={(e) => setContactForm((prev) => ({ ...prev, service: e.target.value }))} className="w-full rounded-xl border border-white/15 bg-[#0f141b] px-4 py-3 text-white placeholder:text-slate-500 focus:border-[#2d5bff] focus:outline-none" />
                  <div className="rounded-xl border border-white/15 bg-[#0f141b] px-4 py-3">
                    <p className="mb-2 text-sm text-[#c4c5d9]">What do you prefer?</p>
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2 text-sm text-white transition duration-200 hover:scale-105 hover:text-[#b8c3ff]"><input type="radio" name="contactPreference" value="call" checked={contactForm.contactPreference === 'call'} onChange={(e) => setContactForm((prev) => ({ ...prev, contactPreference: e.target.value }))} />Call</label>
                      <label className="flex items-center gap-2 text-sm text-white transition duration-200 hover:scale-105 hover:text-[#b8c3ff]"><input type="radio" name="contactPreference" value="text" checked={contactForm.contactPreference === 'text'} onChange={(e) => setContactForm((prev) => ({ ...prev, contactPreference: e.target.value }))} />Text</label>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <input type="email" required placeholder="Your Email" value={contactForm.email} onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))} className="w-full rounded-xl border border-white/15 bg-[#0f141b] px-4 py-3 text-white placeholder:text-slate-500 focus:border-[#2d5bff] focus:outline-none" />
                  <textarea required placeholder="Tell me about your project..." rows={5} value={contactForm.message} onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))} className="w-full rounded-xl border border-white/15 bg-[#0f141b] px-4 py-3 text-white placeholder:text-slate-500 focus:border-[#2d5bff] focus:outline-none" />
                </>
              )}
              <motion.button disabled={isSubmitting} whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }} type="submit" className="w-full rounded-full bg-[#2d5bff] px-6 py-3 text-base font-bold text-white disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? 'Sending...' : contactIntent === 'request-call' ? contactForm.contactPreference === 'text' ? 'Request a Text' : 'Request a Call' : 'Send Message'}</motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function RequestSubmittedModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[95] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <motion.div initial={{ y: 20, opacity: 0, scale: 0.96 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 14, opacity: 0, scale: 0.96 }} className="w-full max-w-md rounded-2xl border border-white/15 bg-[#13181f] p-6 text-center">
            <h4 className="text-2xl font-bold text-white">Request Submitted</h4>
            <p className="mt-3 text-sm text-[#c4c5d9]">Your request is submitted. We will shortly connect with you. Thank you.</p>
            <button onClick={onClose} className="mt-6 rounded-full bg-[#2d5bff] px-6 py-2.5 font-semibold text-white transition hover:scale-105">OK</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
