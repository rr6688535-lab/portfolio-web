import { motion } from 'framer-motion';

export default function FinalCTASection({ onContactClick }) {
  return (
    <section className="relative overflow-hidden px-6 py-[120px]">
      <div className="pointer-events-none absolute inset-0 bg-[#2d5bff]/5" />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="mb-8 text-6xl font-extrabold leading-[1.1] text-white md:text-[96px]">Your story, well designed</h2>
        <p className="mx-auto mb-12 max-w-xl text-[#c4c5d9]">Ready to evolve your digital presence? Let's build something that lasts.</p>
        <div className="flex justify-center">
          <motion.button onClick={onContactClick} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="rounded-full bg-[#2d5bff] px-12 py-6 text-xl font-bold text-white">Start Your Project</motion.button>
        </div>
      </div>
    </section>
  );
}
