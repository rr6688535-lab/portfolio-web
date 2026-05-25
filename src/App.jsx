import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import brandLogo from '../ext-resources/logos/essenziat-digital-logo.jpeg';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FooterSection from './components/FooterSection';
import BrandMark from './components/BrandMark';

const socialLinks = [
  { name: 'Instagram', href: '', icon: <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.62a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" /></svg> },
  { name: 'Facebook', href: '', icon: <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.6V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8v3h2.6v8h2.9Z" /></svg> },
  { name: 'LinkedIn', href: '', icon: <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M6.5 8.5A1.75 1.75 0 1 1 6.5 5a1.75 1.75 0 0 1 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.7V19h-3v-4c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V19h-3v-9Z" /></svg> },
  { name: 'X', href: '', icon: <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="m4 4 6.2 8.3L4.4 20h2.2l4.6-6 4.5 6h4.3l-6.5-8.6L19 4h-2.2l-4.2 5.5L8.4 4H4Z" /></svg> }
];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="bg-[#121414] text-[#e2e2e2]">
      <AnimatedRoutes />
      <FooterSection BrandMarkComponent={BrandMark} brandLogo={brandLogo} socialLinks={socialLinks} />
    </div>
  );
}
