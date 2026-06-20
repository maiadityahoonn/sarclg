import { useState, useEffect } from 'react';
import { X, CheckCircle2, Download, Send, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AdmissionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'BCA',
    category: 'Gen',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = (e) => {
      if (e?.detail?.course) {
        setFormData(prev => ({ ...prev, course: e.detail.course }));
      }
      setIsOpen(true);
      setSubmitted(false);
    };
    window.addEventListener('open-admission-modal', handleOpen);
    return () => window.removeEventListener('open-admission-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Trigger success confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const handleDownloadBrochure = () => {
    // Generate a dummy downloadable PDF structure or mock text file
    const element = document.createElement("a");
    const file = new Blob([
      "SARVADNYA VIDYAPEETH - OFFICIAL BROCHURE 2026-27\n\n" +
      "Courses Offered:\n" +
      "1. BCA (Bachelor of Computer Applications) - 180 Intake\n" +
      "2. BBA (Bachelor of Business Administration) - 120 Intake\n\n" +
      "AICTE Approved & Affiliated to Aryabhatta Knowledge University, Patna.\n" +
      "Address: Beur-Betaura Road, Patna - 800002, Bihar\n" +
      "Call: 9955330733, 7282831934"
    ], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Sarvadnya_Vidyapeeth_Brochure_2026-27.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-lg max-h-[calc(100dvh-1.5rem)] overflow-y-auto bg-white dark:bg-brand-navy-light rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 animate-in zoom-in-95 duration-200">
        
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-brand-navy via-brand-purple to-indigo-900 p-4 sm:p-6 text-white relative">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 pr-8">
            <img 
              src="/logo.jpg" 
              alt="Sarvadnya Vidyapeeth Logo" 
              className="w-12 h-12 rounded-full border-2 border-brand-gold bg-white"
            />
            <div>
              <h3 className="font-extrabold text-lg tracking-tight font-display">Admissions Session 2026-27</h3>
              <p className="text-xs text-white/80">Submit inquiry to download Prospectus & Brochure</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Student Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Mobile Number *</label>
                  <input 
                    type="tel" 
                    required
                    maxLength="10"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email Address *</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Select Course *</label>
                  <select 
                    value={formData.course}
                    onChange={(e) => setFormData({...formData, course: e.target.value})}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  >
                    <option value="BCA">BCA (3 Years)</option>
                    <option value="BBA">BBA (3 Years)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Category</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  >
                    <option value="Gen">General</option>
                    <option value="OBC">OBC (10% Scholarship)</option>
                    <option value="SC_ST">SC/ST (15% Scholarship)</option>
                    <option value="EWS">EWS Scheme</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Message / Query</label>
                <textarea 
                  rows="2"
                  placeholder="Tell us about your questions or requirements"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-purple"
                ></textarea>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 my-4 pt-4"></div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-brand-navy hover:bg-brand-navy-light text-white text-center font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-navy/10 transition-colors disabled:opacity-50 dark:bg-brand-purple dark:hover:bg-brand-purple-light"
              >
                {submitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send className="w-4.5 h-4.5" /> Submit Enquiry & Get Brochure
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-6">
              <div className="flex justify-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Enquiry Submitted Successfully!</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                  Our counselors will call you shortly on <strong className="text-slate-800 dark:text-white">{formData.phone}</strong>.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-left">
                  <span className="text-xs font-bold text-brand-purple uppercase tracking-wider block">Official Prospectus</span>
                  <span className="text-xs text-slate-400">PDF Document • 1.2 MB</span>
                </div>
                <button
                  onClick={handleDownloadBrochure}
                  className="w-full md:w-auto bg-brand-gold hover:bg-brand-gold-dark text-white text-center text-xs font-bold px-4 py-2.5 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-3 pt-2">
                <a
                  href="tel:+919955330733"
                  className="flex-1 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-1.5 transition-all text-sm"
                >
                  <PhoneCall className="w-4 h-4 text-brand-gold" /> Call Counseling
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-center font-bold py-3 rounded-xl transition-all text-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
