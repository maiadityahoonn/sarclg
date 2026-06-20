import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleApplyClick = () => {
    window.dispatchEvent(new CustomEvent('open-admission-modal'));
  };

  return (
    <footer className="bg-brand-purple-dark text-purple-200 border-t border-brand-purple-light/30 transition-colors duration-300">
      
      {/* Newsletter / Quick Helpline Bar */}
      <div className="border-b border-brand-purple-light/20 py-5 sm:py-7 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6">
        <div className="flex flex-col text-left w-full lg:w-auto">
          <span className="text-xl md:text-2xl font-bold text-white font-display">Need assistance with Admissions?</span>
          <span className="text-sm text-purple-300/80">Our admission counseling team is here to guide you 24x7.</span>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 w-full lg:w-auto justify-start lg:justify-end">
          <a 
            href="tel:+919955330733" 
            className="flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-light text-white font-semibold px-5 py-3 rounded-xl transition-all border border-brand-purple-light/25"
          >
            <Phone className="w-4.5 h-4.5 text-brand-gold-light" />
            +91 9955330733
          </a>
          <button 
            onClick={handleApplyClick}
            className="bg-brand-gold hover:bg-brand-gold-dark text-white font-bold px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-brand-gold/15"
          >
            Enquire Now <ArrowUpRight className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        
        {/* Info Column */}
        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.jpg" 
              alt="Sarvadnya Vidyapeeth Logo" 
              className="w-12 h-12 rounded-full border border-brand-gold bg-white"
            />
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-white font-display tracking-tight leading-tight">
                SARVADNYA VIDYAPEETH
              </span>
              <span className="text-[10px] text-brand-gold-light font-semibold uppercase tracking-wider">
                Patna, Bihar
              </span>
            </div>
          </div>
          <p className="text-sm text-purple-200/80 mt-2 leading-relaxed">
            Empowering youth through premium computer application and business management training. AICTE Approved and Affiliated to Aryabhatta Knowledge University, Patna.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2.5 bg-brand-purple border border-brand-purple-light/20 hover:bg-brand-purple-light hover:text-white text-purple-100 rounded-lg transition-colors flex items-center justify-center" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V2h-3a4.5 4.5 0 00-4.5 4.5V8z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2.5 bg-brand-purple border border-brand-purple-light/20 hover:bg-brand-purple-light hover:text-white text-purple-100 rounded-lg transition-colors flex items-center justify-center" aria-label="Youtube">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.6a3 3 0 00-2-2C19.7 4 12 4 12 4s-7.7 0-9.5.5a3 3 0 00-2 2A31.8 31.8 0 000 12a31.8 31.8 0 00.5 5.4 3 3 0 002 2c1.8.5 9.5.5 9.5.5s7.7 0 9.5-.5a3 3 0 002-2A31.8 31.8 0 0024 12a31.8 31.8 0 00-.5-5.4zM9.5 15.5V8.5l6.5 3.5-6.5 3.5z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 bg-brand-purple border border-brand-purple-light/20 hover:bg-brand-purple-light hover:text-white text-purple-100 rounded-lg transition-colors flex items-center justify-center" aria-label="Linkedin">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.96 0-1.75-.79-1.75-1.76s.79-1.76 1.75-1.76 1.75.79 1.75 1.76-.79 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-3.34-4-3.1-4 0v5.6h-3v-11h3v1.76c1.4-2.58 7-2.78 7 2.47v6.77z"/></svg>
            </a>
            <a href="https://wa.me/919955330733" target="_blank" rel="noreferrer" className="p-2.5 bg-brand-purple border border-brand-purple-light/20 hover:bg-brand-purple-light hover:text-white text-purple-100 rounded-lg transition-colors flex items-center justify-center" aria-label="WhatsApp">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.262-4.103c1.652.981 3.57 1.498 5.523 1.499 5.626 0 10.203-4.58 10.207-10.21.002-2.727-1.058-5.292-2.986-7.222C17.135 2.035 14.57 1.002 11.99 1.002 6.368 1.002 1.79 5.58 1.787 11.21c-.001 1.954.512 3.864 1.49 5.516L2.302 20.894l4.017-.997zM17.485 14.53c-.3-.15-1.771-.875-2.04-.972-.27-.099-.465-.148-.66.15-.195.298-.758.943-.93 1.14-.173.199-.347.223-.647.074-.3-.15-1.267-.467-2.414-1.49-1.894-1.692-2.147-1.983-2.447-2.48-.302-.5-.032-.77.268-1.07.27-.27.6-.7.9-1.05.097-.105.195-.21.285-.315.09-.105.15-.225.225-.375.075-.15.037-.285-.018-.399-.056-.114-.465-1.122-.638-1.54-.168-.405-.333-.35-.465-.357h-.39c-.15 0-.39.056-.6.284-.21.228-.795.777-.795 1.895 0 1.118.81 2.198.922 2.35.112.15 1.59 2.43 3.852 3.407.538.232 1.037.382 1.4.498.54.173 1.03.148 1.417.09.432-.066 1.771-.724 2.02-.1426.248-.699.248-1.192 0-.27z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-left">
          <h3 className="text-white font-bold font-display text-sm tracking-wider uppercase mb-6 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold">
            Quick Links
          </h3>
          <ul className="space-y-3.5 text-sm">
            <li>
              <Link to="/about" className="hover:text-brand-gold-light text-purple-200/80 hover:underline transition-colors flex items-center gap-1">About Us</Link>
            </li>

            <li>
              <Link to="/hostel" className="hover:text-brand-gold-light text-purple-200/80 hover:underline transition-colors flex items-center gap-1">Hostel Facilities</Link>
            </li>
            <li>
              <Link to="/placements" className="hover:text-brand-gold-light text-purple-200/80 hover:underline transition-colors flex items-center gap-1">Placements Cell</Link>
            </li>
            <li>
              <Link to="/rnd" className="hover:text-brand-gold-light text-purple-200/80 hover:underline transition-colors flex items-center gap-1">Research & Development</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-brand-gold-light text-purple-200/80 hover:underline transition-colors flex items-center gap-1">Photo Gallery</Link>
            </li>
            <li>
              <Link to="/disclosure" className="hover:text-brand-gold-light text-red-300 hover:underline transition-colors flex items-center gap-1 font-semibold">Mandatory Disclosure</Link>
            </li>
          </ul>
        </div>

        {/* Academic Offerings */}
        <div className="text-left">
          <h3 className="text-white font-bold font-display text-sm tracking-wider uppercase mb-6 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold">
            Courses & Aid
          </h3>
          <ul className="space-y-3.5 text-sm">
            <li>
              <Link to="/courses" className="hover:text-brand-gold-light text-purple-200/80 hover:underline transition-colors">BCA (Bachelor of Computer Applications)</Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-brand-gold-light text-purple-200/80 hover:underline transition-colors">BBA (Bachelor of Business Administration)</Link>
            </li>
            <li>
              <Link to="/credit-card" className="hover:text-brand-gold-light text-purple-200/80 hover:underline transition-colors">Bihar Student Credit Card Support</Link>
            </li>

            <li>
              <Link to="/iic" className="hover:text-brand-gold-light text-purple-200/80 hover:underline transition-colors">Institution Innovation Council (IIC)</Link>
            </li>
            <li>
              <Link to="/downloads" className="hover:text-brand-gold-light text-purple-200/80 hover:underline transition-colors">Downloads & Resources</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h3 className="text-white font-bold font-display text-sm tracking-wider uppercase mb-6 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-brand-gold-light shrink-0" />
              <span className="leading-relaxed text-purple-200/85">
                Beur-Betaura Road, Patna – 800002, Bihar, India
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-brand-gold-light shrink-0" />
              <div className="flex flex-col text-purple-200/85">
                <a href="tel:+919955330733" className="hover:text-brand-gold-light transition-colors">+91 9955330733</a>
                <a href="tel:+917282831934" className="hover:text-brand-gold-light transition-colors">+91 7282831934</a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-brand-gold-light shrink-0" />
              <a href="mailto:sarvadnyaavidyapeeth11@gmail.com" className="hover:text-brand-gold-light transition-colors text-purple-200/85 break-all">
                sarvadnyaavidyapeeth11@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copy & Compliance Bar */}
      <div className="border-t border-brand-purple-light/20 bg-brand-purple-dark/50 py-6 px-6 md:px-8 text-xs text-purple-300 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <span className="flex flex-wrap items-center justify-center md:justify-start gap-1">
              <span>Copyright © {currentYear} Sarvadnya Vidyapeeth. All Rights Reserved.</span>
              <span className="text-purple-300/50 hidden md:inline">|</span>
              <span className="flex items-center gap-1">
                Made with <span className="text-red-500 animate-pulse">❤️</span> by <a href="https://internshipcatalyst.in" target="_blank" rel="noreferrer" className="text-brand-gold-light hover:underline font-bold">Internship Catalyst</a>
              </span>
            </span>
            <span className="text-[10px] text-purple-300/70">Affiliated to Aryabhatta Knowledge University (Patna) and Approved by AICTE, New Delhi.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link to="/disclosure" className="hover:underline hover:text-white">AICTE Disclosures</Link>
            <span>•</span>
            <Link to="/downloads" className="hover:underline font-semibold text-brand-gold-light hover:text-white">Approval Certificates</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
