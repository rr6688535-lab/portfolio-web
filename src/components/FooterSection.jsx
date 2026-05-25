import { motion } from 'framer-motion';

export default function FooterSection({ BrandMarkComponent, brandLogo, socialLinks }) {
  return (
    <footer className="w-full border-t border-white/5 bg-slate-950 py-16 text-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-12 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <BrandMarkComponent brandLogo={brandLogo} />
          <p className="text-slate-500">&copy; 2026 ESSENZIAT DIGITAL. ALL RIGHTS RESERVED.</p>
          <p className="text-slate-400">Made by Mohd Rameez</p>
        </div>
        <div className="flex items-center gap-5 text-slate-400">
          {socialLinks.map((item) => (
            <motion.a key={item.name} href={item.href} aria-label={item.name} whileHover={{ scale: 1.12, y: -1 }} whileTap={{ scale: 0.96 }} className="rounded-full border border-white/15 p-2.5 hover:text-white">
              {item.icon}
            </motion.a>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2 md:items-end">
          <span className="text-slate-400">Client Support & Inquiries</span>
          <a className="text-blue-500" href="mailto:essenziatdigital@gmail.com">essenziatdigital@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
