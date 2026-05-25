import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import BrandMark from './BrandMark';
import homeLogo from '../../ext-resources/logos/home.png';
import servicesLogo from '../../ext-resources/logos/services.png';
import aboutLogo from '../../ext-resources/logos/info.png';
import contactLogo from '../../ext-resources/logos/phone.png';

export default function SiteHeader({ brandLogo, onContactClick }) {
  const location = useLocation();
  const [selectedNav, setSelectedNav] = useState('home');

  useEffect(() => {
    if (location.pathname === '/about') {
      setSelectedNav('about');
      return;
    }
    if (location.pathname === '/services') {
      setSelectedNav('services');
      return;
    }
    if (location.pathname === '/') {
      setSelectedNav((prev) => (prev === 'contact' ? prev : 'home'));
    }
  }, [location.pathname]);

  const getItemClass = (isSelected) =>
    isSelected
      ? 'shrink-0 whitespace-nowrap rounded-full bg-[#2d5bff] px-3 py-1.5 text-xs font-semibold text-white md:px-4 md:py-2 md:text-sm'
      : 'shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white md:px-4 md:py-2 md:text-sm';

  const renderNavLabel = (isSelected, logoSrc, label) =>
    isSelected ? <img src={logoSrc} alt={`${label} icon`} className="h-4 w-4 object-contain md:h-5 md:w-5" /> : label;

  return (
    <>
      <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between border-b border-white/10 bg-slate-950/40 px-6 md:px-12 backdrop-blur-lg">
        <BrandMark brandLogo={brandLogo} large />
        <motion.button onClick={onContactClick} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="rounded-full bg-[#2d5bff] px-4 py-2 text-sm font-bold text-white md:px-6 md:py-2.5 md:text-base">Get in Touch</motion.button>
      </nav>

      <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-16px)] max-w-max -translate-x-1/2">
        <div className="flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-full border border-white/15 bg-[#0e1014]/85 p-1.5 shadow-[0_10px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl md:gap-2 md:p-2">
          <NavLink to="/" end onClick={() => setSelectedNav('home')} className={getItemClass(selectedNav === 'home')}>
            {renderNavLabel(selectedNav === 'home', homeLogo, 'Home')}
          </NavLink>
          <NavLink to="/services" onClick={() => setSelectedNav('services')} className={getItemClass(selectedNav === 'services')}>
            {renderNavLabel(selectedNav === 'services', servicesLogo, 'Services')}
          </NavLink>
          <NavLink to="/about" onClick={() => setSelectedNav('about')} className={getItemClass(selectedNav === 'about')}>
            {renderNavLabel(selectedNav === 'about', aboutLogo, 'About')}
          </NavLink>
          <button
            type="button"
            onClick={() => {
              setSelectedNav('contact');
              onContactClick();
            }}
            className={getItemClass(selectedNav === 'contact')}
          >
            {renderNavLabel(selectedNav === 'contact', contactLogo, 'Contact')}
          </button>
        </div>
      </div>
    </>
  );
}
