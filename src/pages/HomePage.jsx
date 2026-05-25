import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import brandLogo from '../../ext-resources/logos/essenziat-digital-logo.jpeg';
import ruhverseMain from '../../ext-resources/images/Ruhverse-main.png';
import tttMain from '../../ext-resources/images/TTT.png';
import vfMain from '../../ext-resources/images/VF.png';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import { ContactModal, FullscreenPreviewModal, RequestSubmittedModal } from '../components/Modals';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';
import SiteHeader from '../components/SiteHeader';

const services = [
  { n: '01', icon: 'web', title: 'Website Design', text: 'Custom, high-conversion landing pages and complex digital platforms built for impact.' },
  { n: '02', icon: 'dashboard', title: 'UI/UX Design', text: 'User-centric interfaces that blend intuitive navigation with sophisticated aesthetics.' },
  { n: '03', icon: 'palette', title: 'Visual Direction', text: 'Defining the soul of your brand through color, typography, and atmospheric language.' },
  { n: '04', icon: 'animation', title: 'Motion & Interaction', text: 'Breathing life into interfaces with purposeful transitions and micro-interactions.' },
  { n: '05', icon: 'share', title: 'Social Media', text: 'Curated content systems that maintain brand integrity across all social touchpoints.' },
  { n: '06', icon: 'movie_edit', title: 'Video Editing', text: 'High-fidelity motion graphics and cinematic cuts for professional brand storytelling.' }
];

const projects = [
  { title: 'RuhVerse', tag: 'Quran Platform | Full-Stack Product', image: ruhverseMain, alt: 'RuhVerse Web Interface', siteUrl: 'https://ruhverse.online' },
  { title: 'The Tabsarah Table', tag: 'YouTube Growth | SEO & Video Editing', image: tttMain, alt: 'The Tabsarah Table YouTube channel analytics and thumbnails', siteUrl: '' },
  { title: 'VF Educational Channel', tag: 'YouTube Education | End-to-End Channel Ops', image: vfMain, alt: 'VF educational channel performance and content snapshot', siteUrl: 'https://www.youtube.com/@Vital-Facts' }
];


const faqs = [
  { question: 'What is your typical project timeline from kickoff to launch?', answer: 'Most projects run between 2 to 6 weeks based on scope. A focused landing page can move faster, while multi-section websites with advanced interactions and integrations take longer.' },
  { question: 'What exactly is included in your pricing, and what counts as extra scope?', answer: 'Pricing covers strategy, design, development, and agreed delivery milestones. Extra scope includes major feature additions, new page groups, or revisions outside approved rounds.' },
  { question: 'Will I fully own the website files, content, and design assets after delivery?', answer: 'Yes. After final payment, you receive ownership of the delivered website files, content structure, and custom assets created for your project.' },
  { question: 'How many revision rounds are included, and how do feedback cycles work?', answer: 'Revision rounds are defined in the proposal before start. Feedback is collected in structured batches per phase so decisions stay fast and the timeline remains stable.' },
  { question: 'Do you handle SEO setup and performance optimization before launch?', answer: 'Yes. Baseline SEO structure, metadata setup, indexing readiness, and performance-focused frontend practices are included to ensure clean launch quality.' },
  { question: 'What post-launch support and maintenance do you provide?', answer: 'Post-launch support includes bug fixes, minor content updates, and technical guidance for a defined period. Ongoing growth and maintenance plans can be added monthly.' }
];

const trustStats = {
  clients: '10+ Clients Served'
};

const clientLogos = ['RUHVERSE', 'TABSARAH TABLE', 'VF EDUCATION', 'DIGITAL BRANDS'];
const RATING_LOCK_KEY = 'essenziat_rating_submitted';
const CONTACT_SUBMIT_AT_KEY = 'essenziat_contact_submit_at';
const CONTACT_COOLDOWN_MS = 60 * 1000;


export default function HomePage() {
  const heroRef = useRef(null);
  const hoverPreviewTimerRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFullscreenPreviewOpen, setIsFullscreenPreviewOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingRating, setIsSubmittingRating] = useState(false);
  const [contactIntent, setContactIntent] = useState('request-call');
  const [isRequestSubmitted, setIsRequestSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', contact: '', service: '', contactPreference: 'call', email: '', message: '' });
  const [ratingSummary, setRatingSummary] = useState({ average: '4.7', count: 7 });

  const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

  // Animate hero content once after mount.
  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out' });
    }
  }, []);

  // Auto-open contact modal shortly after page load.
  useEffect(() => {
    const introTimer = setTimeout(() => setIsContactOpen(true), 900);
    return () => clearTimeout(introTimer);
  }, []);

  // Auto-rotate projects while fullscreen preview is closed.
  useEffect(() => {
    if (isFullscreenPreviewOpen) return undefined;
    const timer = setTimeout(() => {
      setDirection(1);
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [activeProject, isFullscreenPreviewOpen]);

  // Load persisted rating summary from backend on first render.
  useEffect(() => {
    const loadRatings = async () => {
      try {
        const response = await fetch('/api/ratings/');
        const data = await response.json();
        if (response.ok && data.ok && data.summary) {
          setRatingSummary(data.summary);
        }
      } catch (_error) {
        // Keep default summary if backend is temporarily unavailable.
      }
    };
    loadRatings();
  }, []);

  const nextProject = () => {
    setDirection(1);
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const isPreviewEnabled = projects[activeProject].title === 'The Tabsarah Table' || projects[activeProject].title === 'VF Educational Channel';
  const handleRateService = async (value) => {
    if (isSubmittingRating) return;
    const alreadyRated = localStorage.getItem(RATING_LOCK_KEY) === '1';
    if (alreadyRated) {
      window.alert('You can submit rating only once from this browser.');
      return;
    }
    setIsSubmittingRating(true);
    try {
      const response = await fetch('/api/ratings/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value })
      });
      const data = await response.json();
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Failed to submit rating.');
      }
      if (data.summary) {
        setRatingSummary(data.summary);
      }
      localStorage.setItem(RATING_LOCK_KEY, '1');
    } catch (_error) {
      window.alert('Rating could not be submitted right now. Please try again.');
    } finally {
      setIsSubmittingRating(false);
    }
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const now = Date.now();
    const lastSubmitAt = Number(localStorage.getItem(CONTACT_SUBMIT_AT_KEY) || '0');
    if (lastSubmitAt && now - lastSubmitAt < CONTACT_COOLDOWN_MS) {
      const secondsLeft = Math.ceil((CONTACT_COOLDOWN_MS - (now - lastSubmitAt)) / 1000);
      window.alert(`Please wait ${secondsLeft}s before submitting again.`);
      return;
    }

    setIsSubmittingContact(true);
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error('Form service is not configured.');
      }

      const payload = {
        access_key: accessKey,
        subject: `New Portfolio Lead: ${contactForm.service || 'General Inquiry'}`,
        from_name: 'Essenziat Digital Website',
        contactIntent,
        name: contactForm.name,
        contact: contactForm.contact,
        service: contactForm.service,
        contactPreference: contactForm.contactPreference,
        email: contactForm.email,
        message: contactForm.message || 'No detailed message provided. User requested direct call/text follow-up.',
        botcheck: ''
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit contact request.');
      }

      localStorage.setItem(CONTACT_SUBMIT_AT_KEY, String(now));
      setIsContactOpen(false);
      setIsRequestSubmitted(true);
      setContactForm({ name: '', contact: '', service: '', contactPreference: 'call', email: '', message: '' });
    } catch (error) {
      window.alert(error?.message || 'Your request could not be sent right now. Please try again.');
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <main className="bg-[#121414] text-[#e2e2e2] [&_h1]:transition-transform [&_h1]:duration-300 [&_h1:hover]:scale-[1.01] [&_h2]:transition-transform [&_h2]:duration-300 [&_h2:hover]:scale-[1.01] [&_h3]:transition-transform [&_h3]:duration-300 [&_h3:hover]:scale-[1.01] [&_p]:transition-transform [&_p]:duration-300 [&_p:hover]:scale-[1.01] [&_span]:transition-transform [&_span]:duration-300 [&_span:hover]:scale-[1.01] [&_a]:transition-transform [&_a]:duration-300 [&_a:hover]:scale-[1.01]">
      <SiteHeader brandLogo={brandLogo} onContactClick={() => setIsContactOpen(true)} />

      <HeroSection
        heroRef={heroRef}
        fadeUp={fadeUp}
        stagger={stagger}
        trustStats={trustStats}
        clientLogos={clientLogos}
        brandLogo={brandLogo}
        ratingSummary={ratingSummary}
        onRateService={handleRateService}
        isSubmittingRating={isSubmittingRating}
        onContactClick={() => setIsContactOpen(true)}
      />
      <ServicesSection services={services} fadeUp={fadeUp} stagger={stagger} />

      <ProjectsSection
        projects={projects}
        activeProject={activeProject}
        direction={direction}
        isPreviewEnabled={isPreviewEnabled}
        hoverPreviewTimerRef={hoverPreviewTimerRef}
        setIsFullscreenPreviewOpen={setIsFullscreenPreviewOpen}
        prevProject={prevProject}
        nextProject={nextProject}
        setDirection={setDirection}
        setActiveProject={setActiveProject}
      />

      <FullscreenPreviewModal isOpen={isPreviewEnabled && isFullscreenPreviewOpen} project={projects[activeProject]} onClose={() => setIsFullscreenPreviewOpen(false)} />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        contactIntent={contactIntent}
        setContactIntent={setContactIntent}
        contactForm={contactForm}
        setContactForm={setContactForm}
        onSubmit={handleContactSubmit}
        isSubmitting={isSubmittingContact}
      />

      <RequestSubmittedModal isOpen={isRequestSubmitted} onClose={() => setIsRequestSubmitted(false)} />

      <TestimonialsSection />
      <FAQSection faqs={faqs} openFaqIndex={openFaqIndex} setOpenFaqIndex={setOpenFaqIndex} />
      <FinalCTASection onContactClick={() => setIsContactOpen(true)} />
    </main>
  );
}




