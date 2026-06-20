import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Where is Sarvadnya Vidyapeeth located and how can I visit?",
      a: "The institution is located at Beur-Betaura Road, Patna – 800002, Bihar. You can easily visit via local transport or auto services running from Patna Junction or Anisabad bypass directions."
    },
    {
      q: "Is Sarvadnya Vidyapeeth approved by the Government?",
      a: "Yes, the institution is approved by the All India Council for Technical Education (AICTE), New Delhi, and is affiliated to Aryabhatta Knowledge University (AKU), Patna, Bihar."
    },
    {
      q: "What is the approved student intake for BBA and BCA?",
      a: "For the academic session 2026-27, the approved annual intake is 180 seats for Bachelor of Computer Applications (BCA) and 120 seats for Bachelor of Business Administration (BBA)."
    },
    {
      q: "Can I pay my academic fees using the Bihar Student Credit Card Scheme?",
      a: "Yes! Students can fully avail the Bihar Student Credit Card Scheme (BSCCS). Our administration helps in generating the required Bonafide and fee estimates for DRCC approval."
    },
    {
      q: "What are the scholarship criteria for SC/ST and OBC students?",
      a: "We offer direct fee waivers: SC/ST candidates receive a 15% waiver on academic fees, while OBC students receive a 10% waiver. Proof of verified category/income certificate is required."
    },
    {
      q: "Are separate hostel facilities available for boys and girls?",
      a: "Yes, we provide secure, separate hostels for boys and girls with wardens, hygienic meals, 24/7 CCTV surveillance, housekeeping, and study halls."
    },
    {
      q: "What training does the placement cell offer for jobs?",
      a: "The Career Relations Cell organizes regular technical mock interviews, coding sessions, soft skills counseling, public speaking training, and resume formatting support."
    },
    {
      q: "Does the institution coordinate international job opportunities?",
      a: "Yes, we provide overseas counseling and documentation guidelines for corporate opportunities in Gulf countries (UAE, Qatar, Oman, Bahrain, Kuwait, Saudi Arabia) and Southeast Asia (Singapore, Malaysia)."
    },
    {
      q: "What is the online admission application process?",
      a: "You can apply online directly by clicking the 'Apply Now' button on our header menu. This opens our digital admission form modal. Fill in your details, and our counselor will call you to confirm registration."
    },
    {
      q: "How can I download the prospectus, brochure, and approval letters?",
      a: "All official documents, including the prospectus, course brochure, AICTE approvals, and IIC certifications, are available for download in our dedicated Downloads Centre page."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-12">
        
        {/* Intro Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex justify-center">
            <span className="section-tagline"><HelpCircle className="w-3.5 h-3.5 animate-blink" /> Got Questions?</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Find immediate answers regarding admissions, course structures, credit cards, scholarships, and campus life.
          </p>
        </div>

        {/* Accordions */}
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl border border-slate-100 dark:border-slate-800/80 shadow overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 font-bold text-sm text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors text-left"
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-5 h-5 text-brand-purple shrink-0" />
                  {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === idx && (
                <div className="px-4 sm:px-6 pb-5 pt-3 sm:pt-1 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/40">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
