import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'BCA',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-16">
        
        {/* Intro Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex justify-center">
            <span className="section-tagline"><PhoneCall className="w-3.5 h-3.5 animate-blink" /> Connect With Us</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Contact Our Admissions Team
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Have questions regarding courses, eligibility, hostel, or scholarships? Reach out to us.
          </p>
        </div>

        {/* Contact Info & Form Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Info Details */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
                Campus Location & Desk
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Our campus counseling desk is open from **Monday to Saturday (9:00 AM – 5:00 PM)**. We recommend calling in advance to book a dedicated counselor slot.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-2xl h-fit shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white">Postal Address</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    SARVADNYA VIDYAPEETH<br/>
                    Beur-Betaura Road, Patna – 800002, Bihar, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-2xl h-fit shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white">Admission Helplines</h4>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 space-y-1">
                    <a href="tel:+919955330733" className="hover:underline block">+91 9955330733</a>
                    <a href="tel:+917282831934" className="hover:underline block">+91 7282831934</a>
                    <a href="tel:+916205431678" className="hover:underline block">+91 6205431678</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-2xl h-fit shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white">Email Address</h4>
                  <a href="mailto:sarvadnyavidyapeeth11@gmail.com" className="text-xs text-slate-500 dark:text-slate-400 mt-1 hover:underline block">
                    sarvadnyavidyapeeth11@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-xl text-left">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-extrabold text-lg text-slate-900 dark:text-white font-display mb-4 pb-3 border-b border-slate-100 dark:border-slate-800/40">
                    Admission Enquiry Form
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Your Name *</label>
                      <input 
                        type="text" required placeholder="Enter full name"
                        value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Phone Number *</label>
                      <input 
                        type="tel" required maxLength="10" placeholder="10-digit number"
                        value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Email ID *</label>
                    <input 
                      type="email" required placeholder="name@example.com"
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Course of Interest *</label>
                    <select 
                      value={formData.course} onChange={(e) => setFormData({...formData, course: e.target.value})}
                      className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    >
                      <option value="BCA">BCA (Bachelor of Computer Applications)</option>
                      <option value="BBA">BBA (Bachelor of Business Administration)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Message / Question</label>
                    <textarea 
                      rows="3" placeholder="Write your questions here..."
                      value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full text-xs px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                    ></textarea>
                  </div>

                  <button
                    type="submit" disabled={submitting}
                    className="w-full bg-brand-navy hover:bg-brand-navy-light text-white text-center font-bold py-3.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md dark:bg-brand-purple dark:hover:bg-brand-purple-light transition-all"
                  >
                    {submitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5" /> Send Enquiry Message
                      </>
                    )}
                  </button>

                </form>
              ) : (
                <div className="text-center py-8 space-y-6">
                  <div className="flex justify-center">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-lg text-slate-900 dark:text-white font-display">Message Sent!</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto">
                      Thank you for contacting us. Our counseling team will review your enquiry and respond to <strong className="text-slate-800 dark:text-white">{formData.email}</strong> or call you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-white text-center font-semibold px-6 py-2.5 rounded-xl transition-all text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Map Placeholder */}
        <div className="space-y-4">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-display text-center">
            Find Us on Google Maps
          </h3>
          <div className="w-full h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800/80 shadow-md bg-slate-100 dark:bg-slate-900 flex items-center justify-center relative">
            {/* Custom Mock Map Frame */}
            <div className="absolute inset-0 bg-slate-900/10 flex flex-col justify-center items-center text-center p-6 space-y-3 z-10">
              <MapPin className="w-12 h-12 text-brand-gold fill-brand-gold animate-bounce" />
              <div className="space-y-1">
                <span className="font-extrabold text-slate-900 dark:text-white block text-sm">SARVADNYA VIDYAPEETH</span>
                <span className="text-xs text-slate-600 dark:text-slate-400 block max-w-sm">Beur-Betaura Road, Patna – 800002, Bihar, India</span>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-brand-navy dark:bg-brand-purple text-white text-center text-xs font-bold px-4 py-2 rounded-xl flex items-center justify-center gap-1.5 shadow"
              >
                Open in Google Maps <PhoneCall className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

