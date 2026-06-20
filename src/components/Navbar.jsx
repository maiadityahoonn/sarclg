import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap, Phone, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [collegeLifeOpen, setCollegeLifeOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  const announcements = [
    "Enroll for BBA & BCA Academic Session 2026-27!",
    "Bihar Student Credit Card (DRCC) fully accepted here.",
    "Separate boys & girls hostel facilities with 24x7 security.",
    "100% Career Placement assistance & startup incubation support."
  ];
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Placements', path: '/placements' },
    { name: 'R&D Cell', path: '/rnd' },
    { name: 'IIC', path: '/iic' },
  ];

  const collegeLifeLinks = [
    { name: 'Hostel Facilities', path: '/hostel' },
    { name: 'Events & Fests', path: '/events' },
    { name: 'Sports Facilities', path: '/sports' },
    { name: 'Student Clubs & NSS', path: '/clubs' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Blogs & Updates', path: '/blogs' },
  ];

  const resourceLinks = [
    { name: 'Student Credit Card', path: '/credit-card' },
    { name: 'Mandatory Disclosure', path: '/disclosure' },
    { name: 'Downloads Centre', path: '/downloads' },
  ];

  const handleApplyClick = () => {
    window.dispatchEvent(new CustomEvent('open-admission-modal'));
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Banner Alert (Slides out on scroll) */}
      <div className={`bg-slate-50 border-b border-slate-200/80 text-slate-650 text-[11px] z-50 transition-all duration-300 origin-top overflow-hidden ${
        scrolled ? 'max-h-0 py-0 border-b-0 opacity-0' : 'max-h-11 md:max-h-12 py-2 md:py-2.5 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 h-5 overflow-hidden relative w-full md:w-[480px] min-w-0">
            <span className="bg-brand-purple text-white text-[9px] px-2 py-0.5 rounded-full font-bold animate-pulse-subtle shrink-0">ADMISSIONS OPEN</span>
            <div className="relative w-full h-full flex items-center">
              {announcements.map((text, idx) => (
                <span
                  key={idx}
                  className={`absolute left-0 top-[2px] w-full font-bold text-slate-700 transition-all duration-700 ease-in-out whitespace-nowrap overflow-hidden text-ellipsis ${
                    idx === tickerIndex ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden md:flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-1 shrink-0">
            <a href="tel:+919955330733" className="flex items-center gap-1 text-slate-700 hover:text-brand-purple transition-colors font-semibold">
              <Phone className="w-3.5 h-3.5 text-brand-gold" /> +91 9955330733
            </a>
            <span className="hidden md:inline text-slate-200">|</span>
            <div className="flex items-center gap-1 text-slate-500 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" /> AICTE Approved • AKU Affiliated
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 px-4 sm:px-6 md:px-8 py-3 ${
        scrolled 
          ? 'glass-nav shadow-lg border-b border-gray-200/50' 
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo and Brand Title */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
            <img 
              src="/logo.jpg" 
              alt="Sarvadnya Vidyapeeth Logo" 
              className="w-11 h-11 rounded-full border border-brand-gold shadow-md group-hover:scale-105 transition-transform duration-300 bg-white"
            />
            <div className="flex flex-col text-left min-w-0">
              <span className="text-xs min-[360px]:text-sm md:text-base font-extrabold tracking-tight text-brand-navy font-display leading-tight">
                SARVADNYA VIDYAPEETH
              </span>
              <span className="text-[9px] min-[360px]:text-[10px] font-bold text-brand-gold leading-tight">
                Patna • AICTE Approved • AKU Affiliated
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-extrabold tracking-wide uppercase transition-all duration-200 hover:text-brand-purple ${
                  location.pathname === link.path
                    ? 'text-brand-purple border-b-2 border-brand-purple pb-1'
                    : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* College Life Dropdown */}
            <div 
              className="relative"
              onMouseLeave={() => setCollegeLifeOpen(false)}
            >
              <button
                onMouseEnter={() => { setCollegeLifeOpen(true); setMoreOpen(false); }}
                onClick={() => setCollegeLifeOpen(true)}
                className="flex items-center gap-1 text-xs font-extrabold tracking-wide uppercase text-slate-700 hover:text-brand-purple transition-all"
              >
                College Life <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${collegeLifeOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Items Box */}
              {collegeLifeOpen && (
                <div className="absolute top-full right-0 pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-2">
                    {collegeLifeLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setCollegeLifeOpen(false)}
                        className={`block px-4 py-2.5 text-[11px] font-extrabold hover:bg-slate-50 transition-colors text-left ${
                          location.pathname === item.path
                            ? 'text-brand-purple bg-purple-50/50'
                            : 'text-slate-600'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                onMouseEnter={() => { setMoreOpen(true); setCollegeLifeOpen(false); }}
                onClick={() => setMoreOpen(true)}
                className="flex items-center gap-1 text-xs font-extrabold tracking-wide uppercase text-slate-700 hover:text-brand-purple transition-all"
              >
                More <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Items Box */}
              {moreOpen && (
                <div className="absolute top-full right-0 pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-2">
                    {resourceLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setMoreOpen(false)}
                        className={`block px-4 py-2.5 text-[11px] font-extrabold hover:bg-slate-50 transition-colors text-left ${
                          location.pathname === item.path
                            ? 'text-brand-purple bg-purple-50/50'
                            : 'text-slate-600'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={handleApplyClick}
              className="bg-brand-navy hover:bg-brand-navy-light text-white text-center text-xs font-extrabold uppercase px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 group"
            >
              <GraduationCap className="w-4.5 h-4.5 group-hover:rotate-12 transition-transform" />
              Apply Now
            </button>
          </div>

          {/* Mobile Navigation Header Buttons */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-3 right-3 sm:left-4 sm:right-4 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 max-h-[75vh] overflow-y-auto p-4 z-50 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2 text-left">
            <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase px-2 py-1">MAIN MENU</span>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                  location.pathname === link.path
                    ? 'bg-purple-50 text-brand-purple'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-gray-100 my-2"></div>
            <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase px-2 py-1">COLLEGE LIFE</span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {collegeLifeLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-xs font-semibold ${
                    location.pathname === item.path
                      ? 'text-brand-purple bg-purple-50/50'
                      : 'text-slate-655 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 my-2"></div>
            <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase px-2 py-1">RESOURCES & FAQS</span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {resourceLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-xs font-semibold ${
                    location.pathname === item.path
                      ? 'text-brand-purple bg-purple-50/50'
                      : 'text-slate-650 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-gray-100 my-3"></div>

            <button
              onClick={handleApplyClick}
              className="w-full bg-brand-navy hover:bg-brand-navy-light text-white text-center font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <GraduationCap className="w-5 h-5" />
              Apply Now 2026-27
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
