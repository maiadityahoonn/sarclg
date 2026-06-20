import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, Award, Zap, Users, GraduationCap,
  MapPin, BookOpen, Star, Sparkles, Calculator, Building, PhoneCall,
  CheckCircle, ArrowUpRight, ArrowDownRight, RefreshCw, LayoutGrid, ChevronRight,
  ChevronLeft, TrendingUp, Award as PrizeIcon, HelpCircle, ArrowRightLeft, BookMarked,
  Laptop, Briefcase, Lock, Globe, Mic, Landmark, ChevronDown
} from 'lucide-react';
import confetti from 'canvas-confetti';

function RecruiterLogo({ name }) {
  switch (name) {
    case 'TCS':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#004b87" />
          <path d="M6 8h4v2H8v6H6V8zm6 0h4v2h-2v1.5h2v2h-2V14h2v2h-4V8zm5 4a3 3 0 0 1 3 3v1h-2v-1a1 1 0 0 0-2 0v1h-2v-1a3 3 0 0 1 3-3z" fill="white" />
        </svg>
      );
    case 'Wipro':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="12" cy="5" r="1.5" fill="#e11d48" />
          <circle cx="17" cy="7" r="1.5" fill="#2563eb" />
          <circle cx="19" cy="12" r="1.5" fill="#16a34a" />
          <circle cx="17" cy="17" r="1.5" fill="#ca8a04" />
          <circle cx="12" cy="19" r="1.5" fill="#9333ea" />
          <circle cx="7" cy="17" r="1.5" fill="#0891b2" />
          <circle cx="5" cy="12" r="1.5" fill="#ea580c" />
          <circle cx="7" cy="7" r="1.5" fill="#4f46e5" />
          <circle cx="12" cy="12" r="3.5" fill="#3b82f6" />
        </svg>
      );
    case 'Infosys':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#007cc3" />
          <text x="12" y="16.5" fill="white" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Infy</text>
        </svg>
      );
    case 'Cognizant':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" strokeWidth="2.5" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#000048" />
          <path d="M7 12a5 5 0 0 1 10 0" stroke="#00b0f0" />
          <path d="M17 12a5 5 0 0 1-10 0" stroke="#00b080" />
        </svg>
      );
    case 'Accenture':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#1c1c1c" />
          <path d="M8 7l6 5-6 5" stroke="#a100ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'ICICI Bank':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#f58220" />
          <text x="12" y="16.5" fill="#54251b" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="serif">i</text>
        </svg>
      );
    case 'HDFC Bank':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#004c8f" />
          <rect x="4" y="4" width="5" height="5" fill="white" />
          <rect x="15" y="4" width="5" height="5" fill="white" />
          <rect x="4" y="15" width="5" height="5" fill="white" />
          <rect x="15" y="15" width="5" height="5" fill="white" />
          <rect x="9.5" y="9.5" width="5" height="5" fill="#e31b23" />
        </svg>
      );
    case 'HCL Tech':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#0f2c59" />
          <text x="12" y="15.5" fill="#00a3e0" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">HCL</text>
        </svg>
      );
    case 'Genpact':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#6f2da8" />
          <text x="12" y="16.5" fill="white" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">G</text>
        </svg>
      );
    case 'Axis Bank':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#97144d" />
          <path d="M7 17l5-10 5 10h-2.5l-2.5-5-2.5 5z" fill="white" />
        </svg>
      );
    case 'Airtel':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="#e40000" />
          <path d="M12 6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0v-3a2 2 0 0 1 4 0v3a1 1 0 0 0 2 0v-3a4 4 0 0 0-4-4z" fill="white" />
        </svg>
      );
    case 'Tech Mahindra':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#e51a24" />
          <text x="12" y="15.5" fill="white" fontSize="7.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">TechM</text>
        </svg>
      );
    default:
      return (
        <span className="w-2 h-2 rounded-full bg-brand-purple shrink-0"></span>
      );
  }
}

function FacilityCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-[24px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, idx) => (
        <div
          key={img}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
            }`}
        >
          <img
            src={img}
            alt={`${title} - Gallery Image ${idx + 1}`}
            className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out hover:scale-108"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none"></div>

      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/40 hover:bg-slate-950/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/40 hover:bg-slate-950/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10"
        aria-label="Next Image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-brand-gold w-4' : 'bg-white/40 hover:bg-white/70 w-1'
              }`}
            aria-label={`View slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const recruiters = [
    "TCS", "Wipro", "Infosys", "Cognizant", "Accenture",
    "ICICI Bank", "HDFC Bank", "HCL Tech", "Genpact",
    "Axis Bank", "Airtel", "Tech Mahindra"
  ];

  const [activeCourse, setActiveCourse] = useState('BCA');
  const [fees, setFees] = useState(65000);
  const [repaymentTerm, setRepaymentTerm] = useState(4);
  const [calculatedInstallment, setCalculatedInstallment] = useState(1350);

  // Interactive seats counters
  const [bcaSeats, setBcaSeats] = useState(136);
  const [bbaSeats, setBbaSeats] = useState(84);

  const [expandedFaq, setExpandedFaq] = useState(null);


  const heroSlides = [
    { image: "/images/campus_building.png", title: "Premium Patna Campus", desc: "State-of-the-art academic building with digital infrastructure" },
    { image: "/images/computer_lab.png", title: "Advanced Computer Labs", desc: "High-speed workstations with modern development IDEs" },
    { image: "/images/smart_classroom.png", title: "Smart Classrooms", desc: "Acoustically tuned learning halls with projector setups" },
    { image: "/images/library.png", title: "Central Reference Library", desc: "Over 5,000 reference directories and research journals" }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Lead Enquiry state
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadCourse, setLeadCourse] = useState('BCA');
  const [leadMessage, setLeadMessage] = useState('');
  const [submittingLead, setSubmittingLead] = useState(false);
  const [submittedLead, setSubmittedLead] = useState(false);

  useEffect(() => {
    // Calculate simulated student credit card installment
    const totalFees = fees * 3; // 3 years course
    const monthlyInstallment = Math.round(totalFees / (repaymentTerm * 12));
    setCalculatedInstallment(monthlyInstallment);
  }, [fees, repaymentTerm]);

  const handleApplyClick = (courseName = 'BCA') => {
    window.dispatchEvent(new CustomEvent('open-admission-modal', { detail: { course: courseName } }));
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!leadName || !leadPhone || !leadEmail) {
      alert("Please enter Name, Phone, and Email.");
      return;
    }
    setSubmittingLead(true);
    setTimeout(() => {
      setSubmittingLead(false);
      setSubmittedLead(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const facilities = {
    Labs: {
      title: "Advanced Programming Center",
      desc: "Fully air-conditioned computer center loaded with developer workstations, Linux servers, database compilers, and high-speed network gateways.",
      icon: Laptop,
      images: [
        "/images/facility_labs_ai_1.png",
        "/images/facility_labs_ai_2.png",
        "/images/facility_labs_ai_3.png",
        "/images/facility_labs_ai_4.png"
      ],
      specs: ["High-speed fiber", "Modern IDEs", "24/7 access"]
    },
    Classroom: {
      title: "Digital Smart Classrooms",
      desc: "Wide-span classrooms featuring high-resolution LCD projection modules, interactive whiteboards, acoustic sound reinforcement, and comfortable seating layouts.",
      icon: GraduationCap,
      images: [
        "/images/facility_classroom_ai_1.png",
        "/images/facility_classroom_ai_2.png",
        "/images/facility_classroom_ai_3.png",
        "/images/facility_classroom_ai_4.png"
      ],
      specs: ["Smart Boards", "Air Conditioned", "Ergonomic furniture"]
    },
    Library: {
      title: "Central Reference Library",
      desc: "Houses over 5,000 reference directories, national computer research journals, business periodicals, and digital search monitors.",
      icon: BookMarked,
      images: [
        "/images/facility_library_ai_1.png",
        "/images/facility_library_ai_2.png",
        "/images/library.png",
        "/images/campus_building.png"
      ],
      specs: ["E-Journal access", "Silent study desks", "Weekly journals"]
    },
    Seminar: {
      title: "Academic Conference Hall",
      desc: "Large auditorium fitted with surround-sound mixers and visual screens to support corporate guest panels, seminars, and Student Innovation workshops.",
      icon: Mic,
      images: [
        "/images/facility_seminar_ai_1.png",
        "/images/seminar_hall.png",
        "/images/placement_celebration.png",
        "/images/campus_building.png"
      ],
      specs: ["Acoustically tuned", "150+ seating", "Multi-input mics"]
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-navy-dark text-slate-800 dark:text-gray-100 antialiased font-sans">

      {/* 1. HERO BANNER - Premium Light Gradient Background */}
      <section className="relative bg-gradient-to-br from-slate-50 via-purple-50/20 to-indigo-50/20 text-slate-800 pt-32 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/60">
        {/* Glow ambient background lights */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] bg-indigo-900/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-overlay pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Hero Texts */}
          <div className="lg:col-span-7 text-left space-y-6">

            <div className="inline-flex items-center gap-2 bg-brand-purple/5 border border-brand-purple/10 px-4 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
              <span className="text-[11px] font-extrabold text-brand-purple uppercase tracking-wider">
                Admissions Session 2026-27 Open
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display text-slate-900 leading-tight lg:leading-[1.1] tracking-tight">
              Empowering Youth Through <br />
              <span className="bg-gradient-to-r from-brand-purple via-indigo-600 to-brand-gold text-transparent bg-clip-text">
                Quality Higher Education
              </span>
            </h1>

            <p className="text-xs sm:text-sm font-bold text-slate-650 uppercase tracking-wider flex items-start sm:items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-purple shrink-0" />
              AICTE APPROVED • AFFILIATED TO ARYABHATTA KNOWLEDGE UNIVERSITY, PATNA
            </p>

            <p className="text-base text-slate-600 max-w-xl leading-relaxed">
              Unlock career opportunities in tech and business with Patna's leading institution. Get practical training, startup mentorship under MoE IIC, and 100% placement support.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => handleApplyClick('BCA')}
                className="bg-brand-purple hover:bg-brand-purple-light text-white text-center text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-xl shadow-lg shadow-brand-purple/10 transition-all flex items-center justify-center gap-2"
              >
                Apply Online Now <ArrowRight className="w-4.5 h-4.5 text-brand-gold" />
              </button>
              <button
                onClick={() => handleApplyClick('BBA')}
                className="bg-transparent hover:bg-slate-100 text-brand-navy text-center border border-slate-250 font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-xl transition-all"
              >
                Admission Enquiry
              </button>
            </div>
          </div>

          {/* Right Hero Image Slideshow (Full Height) */}
          <div className="lg:col-span-5">
            <div className="w-full h-72 sm:h-96 lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/80 relative group">
              {heroSlides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transform scale-102 group-hover:scale-105 transition-transform duration-[4000ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white text-left space-y-1.5 z-20">
                    <span className="bg-brand-gold text-brand-navy text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-2">
                      Campus Life & Infrastructure
                    </span>
                    <h4 className="font-black text-xl lg:text-2xl font-display leading-tight">{slide.title}</h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-sans">{slide.desc}</p>
                  </div>
                </div>
              ))}

              {/* Slide dots */}
              <div className="absolute bottom-4 right-6 z-20 flex gap-1.5">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-brand-gold w-3.5' : 'bg-white/50 hover:bg-white'
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Marquee / Corporate Partners */}
      <div className="bg-white/60 dark:bg-brand-navy-light/20 border-y border-slate-200/50 dark:border-slate-800/50 py-5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-3 text-left flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-ping"></span>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-400">Our Leading Recruiters & Corporate Partners</span>
        </div>
        <div className="marquee-container">
          <div className="marquee-track gap-5">
            {recruiters.map((item, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 px-5 py-2 rounded-2xl shadow-md text-xs font-bold text-slate-705 dark:text-slate-200 flex items-center justify-center gap-2.5 h-11 transition-all hover:border-brand-purple/20 whitespace-nowrap shrink-0">
                <RecruiterLogo name={item} />
                <span className="whitespace-nowrap">{item}</span>
              </div>
            ))}
            {/* Duplicated list for seamless scroll */}
            {recruiters.map((item, index) => (
              <div key={`dup-${index}`} className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 px-5 py-2 rounded-2xl shadow-md text-xs font-bold text-slate-705 dark:text-slate-200 flex items-center justify-center gap-2.5 h-11 transition-all hover:border-brand-purple/20 whitespace-nowrap shrink-0">
                <RecruiterLogo name={item} />
                <span className="whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. STATS OVERVIEW - Clean Modern Counters */}
      <section className="relative mt-6 sm:mt-8 mb-6 sm:mb-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-white dark:bg-brand-navy-light rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-150 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-slate-800">
          {[
            { value: "300+", label: "Intake capacity", sub: "Approved by AICTE" },
            { value: "180", label: "BCA Seats", sub: "Computer Applications" },
            { value: "120", label: "BBA Seats", sub: "Business Administration" },
            { value: "100%", label: "Career Help", sub: "Corporate Relations" },
            { value: "24x7", label: "Desk Support", sub: "Admission Helplines" }
          ].map((st, idx) => (
            <div key={idx} className="flex flex-col justify-center py-4 lg:py-0 lg:px-4 text-slate-900 dark:text-white">
              <span className="text-3xl md:text-4xl font-black font-display text-brand-purple dark:text-brand-purple-light block mb-1">
                {st.value}
              </span>
              <span className="text-[11px] font-extrabold uppercase tracking-wider block text-slate-700 dark:text-slate-200">
                {st.label}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                {st.sub}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 2.5 WHY CHOOSE US - Academic Pillars */}
      <section className="bg-white dark:bg-brand-navy-light/10 text-slate-800 py-12 border-y border-slate-100 dark:border-slate-800/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex justify-center">
              <span className="section-tagline"><Award className="w-3.5 h-3.5 animate-blink" /> College Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-slate-905 dark:text-white font-display tracking-tight">
              Why Sarvadnya Vidyapeeth?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              A modern and skill-based educational experience designed to empower students and foster innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "MoE Innovation Council",
                desc: "Active participation in Ministry of Education's IIC initiatives, fostering entrepreneurship and startup mindsets.",
                color: "text-brand-purple bg-brand-purple/5 border-brand-purple/10"
              },
              {
                icon: Landmark,
                title: "DRCC Credit Card Helpdesk",
                desc: "Dedicated support team assisting students through the entire application process of the Bihar Student Credit Card Scheme.",
                color: "text-brand-gold-dark bg-brand-gold/5 border-brand-gold/10"
              },
              {
                icon: ShieldCheck,
                title: "AKU Affiliated Degrees",
                desc: "High-quality academic curriculums regulated by Aryabhatta Knowledge University to ensure credible career credentials.",
                color: "text-emerald-600 bg-emerald-500/5 border-emerald-500/10"
              },
              {
                icon: Users,
                title: "Holistic Placement Cell",
                desc: "Dedicated training and mock interview bootcamps leading to employment opportunities in premium multinational companies.",
                color: "text-indigo-600 bg-indigo-500/5 border-indigo-500/10"
              }
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <span className={`w-10 h-10 rounded-2xl flex items-center justify-center border font-bold ${pillar.color}`}>
                      <IconComp className="w-5 h-5" />
                    </span>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white font-display">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. CORE PROGRAMS SECTION - Redesigned Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 text-left space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex justify-center">
            <span className="section-tagline"><GraduationCap className="w-3.5 h-3.5 animate-blink" /> Academic Degrees</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Undergraduate Offerings
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Highly structured 3-year professional programs designed to prepare students for corporate roles and startup ventures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* BCA Card */}
          <div className="glass-card hover:bg-white dark:hover:bg-slate-900/60 p-6 md:p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <span className="bg-purple-50 dark:bg-purple-950/20 text-brand-purple dark:text-brand-purple-light text-[10px] font-extrabold uppercase px-3.5 py-1.5 rounded-xl border border-brand-purple/10 flex items-center gap-1.5">
                  <Laptop className="w-3.5 h-3.5" /> Computer Sciences
                </span>
                <span className="text-xs text-slate-400 font-bold font-mono">180 Annual Intake</span>
              </div>
              <h3 className="text-2xl font-black text-slate-905 dark:text-white font-display">
                BCA (Bachelor of Computer Applications)
              </h3>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Build foundational skills in software development, cloud databases, and programming. Our curriculum focuses heavily on C, C++, Java, Python, and DBMS systems in compliance with AKU Patna rules.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500" /> Python & Java Coding</div>
                <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500" /> Web App Development</div>
                <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500" /> Software Engineering</div>
                <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500" /> Database Management</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:flex sm:items-center gap-3 pt-8 border-t border-slate-100 dark:border-slate-800/50 mt-6">
              <button
                onClick={() => handleApplyClick('BCA')}
                className="bg-brand-navy hover:bg-brand-navy-light text-white text-center text-xs font-extrabold uppercase px-5 py-3 rounded-xl transition-all dark:bg-brand-purple dark:hover:bg-brand-purple-light"
              >
                Apply Online
              </button>
              <Link
                to="/courses"
                className="border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-white text-center text-xs font-bold px-5 py-3 rounded-xl transition-all"
              >
                Curriculum Syllabus
              </Link>
            </div>
          </div>

          {/* BBA Card */}
          <div className="glass-card hover:bg-white dark:hover:bg-slate-900/60 p-6 md:p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <span className="bg-amber-50 dark:bg-amber-950/20 text-brand-gold dark:text-brand-gold-light text-[10px] font-extrabold uppercase px-3.5 py-1.5 rounded-xl border border-brand-gold/10 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" /> Business Studies
                </span>
                <span className="text-xs text-slate-400 font-bold font-mono">120 Annual Intake</span>
              </div>
              <h3 className="text-2xl font-black text-slate-905 dark:text-white font-display">
                BBA (Bachelor of Business Administration)
              </h3>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Develop management acumen, financial intelligence, marketing strategies, and organizational leadership capabilities. Fits perfectly for students looking to lead corporate sectors or launch startups.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500" /> Principles of Management</div>
                <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500" /> Corporate Relations</div>
                <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500" /> Marketing & Sales</div>
                <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-500" /> Financial Accounting</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:flex sm:items-center gap-3 pt-8 border-t border-slate-100 dark:border-slate-800/50 mt-6">
              <button
                onClick={() => handleApplyClick('BBA')}
                className="bg-brand-navy hover:bg-brand-navy-light text-white text-center text-xs font-extrabold uppercase px-5 py-3 rounded-xl transition-all dark:bg-brand-purple dark:hover:bg-brand-purple-light"
              >
                Apply Online
              </button>
              <Link
                to="/courses"
                className="border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-white text-center text-xs font-bold px-5 py-3 rounded-xl transition-all"
              >
                Curriculum Syllabus
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. DRCC CREDIT CARD CALCULATOR WIDGET */}
      <section className="bg-gradient-to-br from-slate-50 via-indigo-50/10 to-slate-100/40 text-slate-800 py-12 border-y border-slate-200 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex justify-center lg:justify-start">
              <span className="section-tagline"><Landmark className="w-3.5 h-3.5 animate-blink" /> Bihar Student Credit Card Support</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black font-display text-slate-900 leading-tight">
              Study Today, Pay Later
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Pursue your BCA or BBA degree at Sarvadnya Vidyapeeth without any immediate financial strain. The Bihar Student Credit Card Scheme (BSCCS) provides zero-collateral loan packages covering tuition fees, hostel, textbooks, and computer laptop costs.
            </p>
            <div className="space-y-3 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" /> Zero collateral property checks</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" /> Simple 1% interest rate for female and 4% for male candidates</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" /> Repayments begin only after completion of the course</div>
            </div>
            <div className="pt-2">
              <Link
                to="/credit-card"
                className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold-dark text-white text-center font-extrabold text-xs uppercase px-6 py-3.5 rounded-xl shadow transition-all inline-flex items-center justify-center gap-1"
              >
                View Credit Card Process <ArrowUpRight className="w-4.5 h-4.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-6 md:p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 space-y-6 text-left shadow-xl relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full"></div>
            <h3 className="font-extrabold text-sm border-b border-slate-100 pb-3 flex items-center gap-2 text-slate-800">
              <Calculator className="w-5 h-5 text-brand-gold" /> DRCC Calculator Widget
            </h3>

            <div className="space-y-4">
              {/* Fee Range Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-550">
                  <span>Estimated Annual Tuition Fee</span>
                  <span className="text-brand-gold font-mono font-bold">₹ {fees.toLocaleString()} / year</span>
                </div>
                <input
                  type="range" min="40000" max="100000" step="5000"
                  value={fees} onChange={(e) => setFees(Number(e.target.value))}
                  className="w-full accent-brand-gold bg-slate-100 h-1.5 rounded-lg cursor-pointer"
                />
              </div>

              {/* Repayment Term Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-550">
                  <span>Loan Repayment Period (Post Graduation)</span>
                  <span className="text-brand-gold font-mono font-bold">{repaymentTerm} Years (48 Months)</span>
                </div>
                <input
                  type="range" min="2" max="7" step="1"
                  value={repaymentTerm} onChange={(e) => setRepaymentTerm(Number(e.target.value))}
                  className="w-full accent-brand-gold bg-slate-100 h-1.5 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Results Block */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/85 text-center space-y-1.5">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">ESTIMATED INTEREST-FREE INSTALLMENT</span>
              <span className="text-2xl md:text-3xl font-black text-brand-purple block">~ ₹ {calculatedInstallment} / month</span>
              <span className="text-[10px] text-slate-500 block leading-relaxed font-semibold">
                * Note: Simple interest of 1% is charged for girls, transpersons, and divyang candidates. 4% simple interest applies to boys. Calculations are estimates.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CAMPUS INFRASTRUCTURE - Listed Grid Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 text-left space-y-20 relative overflow-hidden">
        {/* Glow ambient background lights */}
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-brand-purple/[0.03] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-brand-gold/[0.03] rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center max-w-2xl mx-auto space-y-3 relative z-10">
          <div className="flex justify-center">
            <span className="section-tagline"><Building className="w-3.5 h-3.5 animate-blink" /> Campus Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-slate-905 dark:text-white font-display tracking-tight">
            World-Class Campus Facilities
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Explore our state-of-the-art infrastructure designed to provide a premium academic experience.
          </p>
        </div>

        {/* Facilities Grid Rows */}
        <div className="space-y-24 relative z-10">
          {Object.keys(facilities).map((key, index) => {
            const facility = facilities[key];
            const isEven = index % 2 === 0;
            return (
              <div
                key={key}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image side - alternates left and right on desktop */}
                <div className={`lg:col-span-6 relative group overflow-hidden rounded-[24px] border border-slate-200/60 dark:border-slate-800/65 aspect-[16/10] ${!isEven ? 'lg:order-last' : ''
                  }`}>
                  <FacilityCarousel
                    images={facility.images}
                    title={facility.title}
                  />
                </div>

                {/* Details side */}
                <div className="lg:col-span-6 space-y-5 text-left">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-purple/5 dark:bg-brand-purple/10 border border-brand-purple/15 text-brand-purple dark:text-brand-purple-light font-extrabold text-[10px] uppercase tracking-widest rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse"></span>
                    {key} Facility
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-tight">
                    {facility.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-550 dark:text-slate-400 leading-relaxed font-medium">
                    {facility.desc}
                  </p>
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {facility.specs.map((sp) => (
                      <span
                        key={sp}
                        className="flex items-center gap-1.5 bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] border border-emerald-500/15 text-emerald-800 dark:text-emerald-350 text-[10px] md:text-xs font-bold px-3.5 py-2 rounded-xl hover:border-emerald-500/30 transition-colors"
                      >
                        <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[9px] font-bold">✓</span>
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 6. REDESIGNED PREMIUM PLACEMENT CELL PORTAL - LIGHT THEME */}
      <section className="relative bg-gradient-to-br from-slate-50 via-purple-50/20 to-indigo-50/20 text-slate-800 py-12 overflow-hidden border-y border-slate-200/60">
        {/* Glow ambient background lights */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-10 sm:space-y-12">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="flex justify-center">
              <span className="bg-brand-gold/10 border border-brand-gold/20 px-4 py-1.5 rounded-full text-brand-gold-dark text-[10px] font-extrabold uppercase tracking-wider block flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 animate-blink" /> Corporate Relations Desk
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black font-display tracking-tight text-slate-900 leading-tight">
              Placement & <span className="bg-gradient-to-r from-brand-purple via-indigo-600 to-brand-gold text-transparent bg-clip-text">Career Development Cell</span>
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
              Bridging the gap between academic training and global corporate success. Prepare for top vacancies under MoE guided mentoring.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

            {/* Left Side: Placement Dashboard & Training */}
            <div className="lg:col-span-6 bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/60 flex flex-col justify-between space-y-8 shadow-xl relative group hover:border-brand-purple/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-bl-full pointer-events-none"></div>

              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 bg-brand-purple rounded-full animate-ping"></span>
                  <h3 className="text-base font-extrabold font-display uppercase tracking-wider text-slate-800">
                    SV Placement Analytics
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Rigorous mock preparation, industry alignment workshops, and placement counseling starting from the first semester.
                </p>
              </div>

              {/* Progress bars / Ratios */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Technical & Coding Roles (BCA)</span>
                    <span className="text-brand-purple font-extrabold">94% Selection Ratio</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-purple h-full rounded-full w-[94%] transition-all duration-[2000ms] ease-out"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Business & Corporate Management (BBA)</span>
                    <span className="text-brand-gold-dark font-extrabold">91% Selection Ratio</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-brand-gold h-full rounded-full w-[91%] transition-all duration-[2000ms] ease-out"></div>
                  </div>
                </div>
              </div>

              {/* Quick Services list */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-left">
                {[
                  { title: "CV Coaching", desc: "Crafting modern portfolio designs." },
                  { title: "Mock Bootcamps", desc: "Rigorous corporate interview simulations." },
                  { title: "Global English", desc: "Technical speech & writing training." }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                      <span className="text-brand-gold">✓</span> {item.title}
                    </h4>
                    <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Global Linkages Map / Country Cards */}
            <div className="lg:col-span-6 bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/60 flex flex-col justify-between space-y-6 shadow-xl hover:border-brand-gold/20 transition-all duration-300 relative group">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-brand-gold animate-pulse" />
                  <h3 className="text-base font-extrabold font-display uppercase tracking-wider text-slate-800">
                    International Linkages
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Opportunities in international tech and retail hubs. Assisting in document verification and visa processing.
                </p>
              </div>

              {/* Country Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  { country: "UAE (Dubai)", desc: "IT Services / Finance", color: "hover:border-purple-500/30" },
                  { country: "Singapore", desc: "Software & Coding", color: "hover:border-blue-500/30" },
                  { country: "Qatar (Doha)", desc: "Logistics Management", color: "hover:border-amber-500/30" },
                  { country: "Malaysia (KL)", desc: "Web Development Hub", color: "hover:border-emerald-500/30" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-slate-50/60 p-4 rounded-2xl border border-slate-150 text-left space-y-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${item.color}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold block mb-1"></span>
                    <h4 className="font-extrabold text-xs text-slate-800">{item.country}</h4>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/placements"
                  className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white text-xs font-extrabold uppercase py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5"
                >
                  Explore Placement Workflows <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6.5 ADMISSION ROADMAP - 4-Step Process */}
      <section className="bg-white dark:bg-brand-navy-light/10 text-slate-800 py-12 border-t border-slate-200/50 dark:border-slate-800/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex justify-center">
              <span className="section-tagline"><ArrowRightLeft className="w-3.5 h-3.5 animate-blink" /> Admission Steps</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-slate-905 dark:text-white font-display tracking-tight">
              Guided 4-Step Admission Journey
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Clear, transparent, and structured path to secure your seat and begin classes at our Patna campus.
            </p>
          </div>

          <div className="relative">
            {/* Connector line for desktop */}
            <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-purple/20 via-brand-gold/30 to-brand-purple/20 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Enquiry & Interest",
                  desc: "Fill our digital inquiry form or visit Beur-Betaura Road campus. Register basic details about course preference.",
                  color: "bg-brand-purple text-white shadow-brand-purple/25"
                },
                {
                  step: "02",
                  title: "Counseling Call",
                  desc: "Discuss course outlines, career benefits, fee payment structures, and eligibility criteria with our advisors.",
                  color: "bg-brand-gold text-white shadow-brand-gold/25"
                },
                {
                  step: "03",
                  title: "DRCC Verification",
                  desc: "Receive bonafide and fee layout documents. Secure approval under the Bihar Student Credit Card loan scheme.",
                  color: "bg-emerald-600 text-white shadow-emerald-500/25"
                },
                {
                  step: "04",
                  title: "Enroll & Start",
                  desc: "Complete the document submission, finalize your registration details, and attend the academic induction program.",
                  color: "bg-brand-navy text-white shadow-brand-navy/25"
                }
              ].map((stepObj, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 text-left space-y-4 hover:border-brand-purple/20"
                >
                  <div className="flex justify-between items-center">
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm tracking-wide shadow-md ${stepObj.color}`}>
                      {stepObj.step}
                    </span>
                    <span className="text-[10px] text-slate-350 font-bold font-mono uppercase tracking-wider">Step {idx + 1}</span>
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white font-display">
                    {stepObj.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {stepObj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. INTEGRATED LEAD GENERATION FORM & BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">

        {/* Left Column (Benefits & Testimonial) */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-center lg:justify-start">
              <span className="section-tagline"><Users className="w-3.5 h-3.5 animate-blink" /> Enrollment Desk</span>
            </div>
            <h3 className="text-3xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
              Begin Your Admission Today
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Submit your enquiry. Our academic counselors will get back to you within 24 hours to schedule a campus tour or evaluate Student Credit Card eligibility.
            </p>
          </div>

          <div className="space-y-3.5">
            <div className="flex items-start sm:items-center gap-3 text-xs font-bold text-slate-700 dark:text-slate-200">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>Full compliance with Aryabhatta Knowledge University regulations</span>
            </div>
            <div className="flex items-start sm:items-center gap-3 text-xs font-bold text-slate-700 dark:text-slate-200">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>SC/ST and OBC category fee concessions guidance</span>
            </div>
            <div className="flex items-start sm:items-center gap-3 text-xs font-bold text-slate-700 dark:text-slate-200">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>State-of-the-art campus computer lab and smart classroom tour</span>
            </div>
          </div>

          {/* Student quote */}
          <div className="p-5 bg-purple-50/50 dark:bg-slate-900 rounded-3xl border border-purple-100 dark:border-slate-800">
            <p className="text-xs text-slate-600 dark:text-slate-400 italic">
              "The credit card support here is excellent. The counselors generated all bonafide certificate details immediately, helping me secure DRCC verification for my BCA course without delay."
            </p>
            <span className="block text-[10px] text-slate-900 dark:text-white font-bold mt-2">— Second Year BCA Student</span>
          </div>
        </div>

        {/* Right Column (Lead Form Card) */}
        <div className="lg:col-span-7">
          <div className="glass-card p-6 md:p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-2xl">

            {!submittedLead ? (
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <h3 className="font-extrabold text-base border-b border-slate-100 dark:border-slate-800/50 pb-3 mb-2 block">
                  Quick Admission Inquiry Form
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Student Name *</label>
                    <input
                      type="text" required placeholder="Enter student's name"
                      value={leadName} onChange={(e) => setLeadName(e.target.value)}
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Mobile Number *</label>
                    <input
                      type="tel" required maxLength="10" placeholder="10-digit number"
                      value={leadPhone} onChange={(e) => setLeadPhone(e.target.value)}
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Email ID *</label>
                  <input
                    type="email" required placeholder="name@example.com"
                    value={leadEmail} onChange={(e) => setLeadEmail(e.target.value)}
                    className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Course of Interest *</label>
                  <select
                    value={leadCourse} onChange={(e) => setLeadCourse(e.target.value)}
                    className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none"
                  >
                    <option value="BCA">BCA (Bachelor of Computer Applications)</option>
                    <option value="BBA">BBA (Bachelor of Business Administration)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Message / Query</label>
                  <textarea
                    rows="3" placeholder="Any specific questions regarding fee structure, hostels, or scholarships?"
                    value={leadMessage} onChange={(e) => setLeadMessage(e.target.value)}
                    className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit" disabled={submittingLead}
                  className="w-full bg-brand-purple hover:bg-brand-purple-light text-white text-center font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition-all"
                >
                  {submittingLead ? "Submitting Details..." : "Submit Enquiry & Start Admission"}
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-6">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <div className="space-y-1">
                  <h4 className="font-extrabold text-lg text-slate-900 dark:text-white font-display">Inquiry Registered!</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                    Thank you, <strong className="text-slate-950 dark:text-white">{leadName}</strong>. Our Patna counseling desk will contact you on <strong className="text-slate-950 dark:text-white">{leadPhone}</strong> shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmittedLead(false)}
                  className="border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-white text-center font-semibold px-6 py-2.5 rounded-xl text-xs transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}

          </div>
        </div>

      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section className="bg-white dark:bg-brand-navy-light/10 text-slate-800 py-12 border-t border-slate-100 dark:border-slate-800/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-12">

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="flex justify-center">
              <span className="section-tagline"><HelpCircle className="w-3.5 h-3.5 animate-blink" /> FAQ Helpdesk</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-slate-905 dark:text-white font-display tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Clear answers to the most common questions regarding admissions, DRCC, and academics.
            </p>
          </div>

          <div className="space-y-4 text-left">
            {[
              {
                q: "What programs are offered by Sarvadnya Vidyapeeth, Patna?",
                a: "We offer two highly employment-oriented 3-year undergraduate programs: Bachelor of Computer Applications (BCA) and Bachelor of Business Administration (BBA). Both degrees are designed in strict alignment with academic standards."
              },
              {
                q: "Is Sarvadnya Vidyapeeth affiliated with a recognized university?",
                a: "Yes, our programs are affiliated with Aryabhatta Knowledge University (AKU), Patna. The college conforms to all state academic regulations to deliver highly valid and valuable degree qualifications."
              },
              {
                q: "How does the Bihar Student Credit Card (BSCCS) loan scheme support work?",
                a: "Our dedicated on-campus DRCC helpdesk assists students through every phase. We provide the certified bonafide letters, fee structures, and paperwork required at your local District Registration and Counseling Center (DRCC)."
              },
              {
                q: "What is the annual seat capacity and fee structure?",
                a: "The annual intake capacity is 180 seats for BCA and 120 seats for BBA. The estimated tuition fee ranges around ₹ 65,000 per year, which is fully coverable by the Bihar Student Credit Card loan scheme."
              },
              {
                q: "What placement assistance is provided to final year students?",
                a: "Our Corporate Relations Desk coordinates mock coding interviews, communication training, and direct recruitment drives. We maintain linkages with top tech companies and business partners to maximize placement opportunities."
              }
            ].map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-3 font-extrabold text-sm md:text-base text-slate-800 dark:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center border border-slate-200/50 dark:border-slate-700/80 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-brand-purple' : 'text-slate-450'
                      }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 border-t border-slate-200/50 dark:border-slate-850' : 'max-h-0'
                    }`}>
                    <p className="px-4 sm:px-6 py-4 sm:py-5 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold bg-white/50 dark:bg-slate-900/30">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}

