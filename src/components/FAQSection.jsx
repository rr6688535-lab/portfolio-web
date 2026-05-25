import { AnimatePresence, motion } from 'framer-motion';

export default function FAQSection({ faqs, openFaqIndex, setOpenFaqIndex }) {
  return (
    <section className="bg-[#121414] px-6 py-[120px]">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-16 text-center text-5xl font-bold text-white md:text-[64px]">Questions, answered.</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="rounded-lg border border-white/10 bg-[#1a1c1c]/40">
              <button onClick={() => setOpenFaqIndex((prev) => (prev === index ? -1 : index))} className="flex w-full items-center justify-between p-6 text-left">
                <span className="text-lg text-white">{faq.question}</span>
                <motion.span whileHover={{ scale: 1.08 }} className="inline-flex h-8 w-8 items-center justify-center rounded bg-[#2d5bff] text-sm text-white">
                  {openFaqIndex === index ? '-' : '+'}
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openFaqIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-[#c4c5d9]">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}