import { motion } from 'framer-motion';

export default function BrandMark({ brandLogo, large = false }) {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest" className="group inline-flex items-center">
      <span className={`${large ? 'text-xl' : 'text-lg'} font-black tracking-widest text-white`}>ESSENZIAT DIGITAL</span>
      <span className="relative ml-2 inline-flex h-10 w-10 overflow-hidden">
        <a href="" aria-label="Go to About section">
          <motion.img
            variants={{
              rest: { x: -22, rotate: -220, opacity: 0, scale: 0.72 },
              hover: { x: 0, rotate: 0, opacity: 1, scale: 1.1 }
            }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            src={brandLogo}
            alt="EssenziaT Digital logo"
            className="h-10 w-10 rounded-full border border-white/20 object-cover"
          />
        </a>
      </span>
    </motion.div>
  );
}