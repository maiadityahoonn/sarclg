import { useState } from 'react';
import { FileText, Award, Landmark, HelpCircle, CheckCircle2, PhoneCall, HeartHandshake, ShieldCheck, ListChecks, HelpCircle as FaqIcon, Calculator, MessageSquare, Plus, Minus } from 'lucide-react';

export default function CreditCard() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  // Interactive Repayment Estimator states
  const [loanAmount, setLoanAmount] = useState(250000);
  const [gender, setGender] = useState("male"); // "male" or "female" (interest rate shifts: 4% vs 1%)
  const [repaymentYears, setRepaymentYears] = useState(5);

  // Interest calculation (Simple Interest)
  const interestRate = gender === "female" ? 0.01 : 0.04;
  const totalInterest = loanAmount * interestRate * repaymentYears;
  const totalRepayable = loanAmount + totalInterest;
  const monthlyInstallment = Math.round(totalRepayable / (repaymentYears * 12));

  const benefits = [
    { title: "Financial Support", desc: "Covers complete academic tuition fees, laptop costs, hostel dues, and textbook charges." },
    { title: "Affordable Interest", desc: "Extremely low-interest loan schemes financed by the Government of Bihar." },
    { title: "Step-by-Step Guidance", desc: "Dedicated counseling desk to help compile documents for submission." },
    { title: "DRCC Verification Assistance", desc: "Coordinating with District Registration and Counseling Centres (DRCC) for quick sanctions." }
  ];

  const processSteps = [
    { title: "College Admission", desc: "Secure provisional admission to BCA/BBA and obtain Bonafide certificate & Fee structure." },
    { title: "Document Compilation", desc: "Gather Aadhar, 10th/12th marksheets, parent income certificate, and photographs." },
    { title: "Online Registration", desc: "Register on the official Bihar Government portal (MNSSBY)." },
    { title: "DRCC Center Visit", desc: "Visit the local DRCC office for physical document verification & registration check." },
    { title: "Approval & Disbursement", desc: "Receive sanction letter and have fees disbursed directly to the college account." }
  ];

  const documentChecklist = [
    "Matriculation (10th) & Intermediate (12th) Board Marksheets & Passing Certificates.",
    "Provisional Admission Letter and Bonafide Certificate issued by Sarvadnya Vidyapeeth Patna.",
    "Official Course Fee Structure authorized by SV Patna College Administration.",
    "Aadhar Card of the Student (Applicant) and Parent/Guardian (Co-Applicant).",
    "Residential Certificate (Domicile Proof) of Bihar state.",
    "Bank Account Passbook showing applicant's name, bank account number, and IFSC code.",
    "PAN Card of the applicant (student) and co-applicant (parent).",
    "Passport size color photographs (3 copies each of applicant and co-applicant)."
  ];

  const districtContacts = [
    { district: "Patna District", address: "DRCC Patna, Near Collectorate, Patna - 800001", contact: "+91 9955330733" },
    { district: "Vaishali District", address: "DRCC Vaishali, Hajipur Headquarters, Vaishali", contact: "+91 7282831934" },
    { district: "Muzaffarpur District", address: "DRCC Muzaffarpur, Khabra Road, Muzaffarpur", contact: "+91 9955330733" },
    { district: "Saran District", address: "DRCC Saran, Chapra Headquarters, Saran", contact: "+91 7282831934" }
  ];

  const faqs = [
    {
      q: "What is the interest rate for the Bihar Student Credit Card loan?",
      a: "The scheme offers highly subsidized interest rates. For male candidates, the interest rate is 4% simple interest. For female candidates, differently-abled (Divyang), and transgender students of Bihar, the interest rate is further subsidized to just 1% simple interest."
    },
    {
      q: "When does the student have to start repaying the loan?",
      a: "The repayment starts after a moratorium period, which is defined as: Course Duration + 1 Year (e.g. for a 3-year BCA course, repayment starts 4 years from admission), or 6 months after securing a job, whichever is earlier."
    },
    {
      q: "Does the credit card cover textbook costs, laptop, and hostel charges?",
      a: "Yes. In addition to the academic tuition fee, students can request allocations for buying a laptop (up to ₹35,000-₹40,000), purchasing textbooks, and paying for hostel/mess lodging fees."
    },
    {
      q: "Can students apply if they have a gap year after intermediate (12th)?",
      a: "Yes. Students who have a gap year between intermediate completion and college admission are still eligible to apply, provided they satisfy the maximum age limit criteria (typically up to 25 years at the time of application)."
    },
    {
      q: "How does Sarvadnya Vidyapeeth Patna support the BSCCS process?",
      a: "Our dedicated Student Credit Card desk issues Bonafide Certificates and authorized fee charts immediately after provisional seat booking. Our coordinators review student document sheets, assist in portal uploads, and draft response letters for DRCC audits."
    }
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen relative text-slate-800 dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-20">
        
        {/* Intro Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center">
            <span className="section-tagline"><Landmark className="w-3.5 h-3.5 animate-pulse" /> Government Scheme Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Bihar Student Credit Card Scheme
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Study Today, Pay Later. Avail government-sponsored financing options to secure your degree without financial stress.
          </p>
        </div>

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text + Help Desk */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Empowering Students through MNSSBY
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
              The Bihar Student Credit Card Scheme (BSCCS), launched under the **Mukhyamantri Nischay Swayam Sahayata Bhatta Yojana (MNSSBY)**, aims to assist students who have passed 12th standard but are unable to pursue higher education due to financial constraints. 
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              At Sarvadnya Vidyapeeth, we facilitate complete verification support, generate official fee structures and bonafide certificates, and guide students through their local District Registration and Counseling Centre (DRCC) processes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-purple-50/50 dark:bg-purple-950/10 rounded-2xl border border-purple-100 dark:border-slate-800 flex gap-3.5">
                <HeartHandshake className="w-6 h-6 text-brand-purple shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white block uppercase">Zero-Collateral</span>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">
                    No family property collaterals. Repayments start after course completion plus a moratorium year.
                  </p>
                </div>
              </div>
              
              <div className="p-5 bg-amber-50/50 dark:bg-amber-950/10 rounded-2xl border border-amber-100 dark:border-slate-800 flex gap-3.5">
                <Landmark className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white block uppercase">Direct Disbursement</span>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">
                    Sanctioned loan amount is paid directly to the institute's verification account.
                  </p>
                </div>
              </div>
            </div>

            {/* Help Desk Callout */}
            <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 text-left space-y-4 shadow-lg relative overflow-hidden mt-4">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full"></div>
              
              <div className="flex items-center gap-3">
                <Landmark className="w-8 h-8 text-brand-gold" />
                <div>
                  <span className="text-[9px] text-brand-gold font-bold uppercase block">Student Desk</span>
                  <h3 className="text-xs font-bold text-slate-800 dark:text-white leading-tight">Student Credit Card Help Desk</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[10px] text-slate-600 dark:text-slate-400 font-bold border-t border-slate-100 dark:border-slate-800 pt-3">
                <p>• 10th & 12th Board Marksheets</p>
                <p>• Bonafide Certificate & Fee Estimate</p>
                <p>• Applicant & Co-applicant Aadhar Card</p>
                <p>• Resident Certificate of Bihar</p>
              </div>

              <a
                href="tel:+919955330733"
                className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors font-sans"
              >
                <PhoneCall className="w-4 h-4" /> Call Credit Card Expert
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5">
            <div className="w-full h-64 sm:h-80 md:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-800/80 shadow-2xl relative">
              <img 
                src="/images/credit_card_drcc.png" 
                alt="Student receiving Bihar Student Credit Card advice" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white text-left">
                <span className="bg-brand-gold text-brand-navy text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider block w-fit mb-2">
                  Bihar DRCC Approved
                </span>
                <h3 className="text-lg font-black font-display">Study Under Government Support</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Dedicated SV counselors help you submit bonafide documents to District Registration Centres without any delay.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Benefits Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Benefits of the Government Scheme
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              Significant financial advantages financed by the Government of Bihar:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((ben, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl text-left border border-slate-100 dark:border-slate-800/60 shadow">
                <h3 className="font-extrabold text-sm text-brand-navy dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" /> {ben.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{ben.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process Steps */}
        <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-150 dark:border-slate-800 text-left space-y-6 sm:space-y-8 shadow-sm">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-display">
              Official Application Workflow
            </h3>
            <p className="text-xs text-slate-400 font-medium">Following sequence defines how credentials are approved and loans are disbursed:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((pr, idx) => (
              <div key={idx} className="space-y-3">
                <span className="bg-purple-100 dark:bg-purple-950/40 text-brand-purple dark:text-brand-purple-light text-xs font-bold px-3 py-1 rounded-full w-fit block font-sans">
                  Step {idx + 1}
                </span>
                <h4 className="font-bold text-xs text-slate-850 dark:text-white">{pr.title}</h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Estimator / Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4 text-left">
          
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-lg font-display border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-brand-purple" /> Repayment Estimator
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Configure your expected loan parameters to estimate monthly installments (simple interest calculation):
              </p>

              <div className="space-y-4 text-xs">
                {/* Loan Amount Range */}
                <div className="space-y-1.5">
                  <div className="flex justify-between font-bold text-slate-700 dark:text-slate-350">
                    <span>Requested Loan Amount:</span>
                    <span className="text-brand-purple">₹{loanAmount.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100000" 
                    max="400000" 
                    step="25000" 
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                  />
                </div>

                {/* Repayment Years */}
                <div className="space-y-1.5">
                  <div className="flex justify-between font-bold text-slate-700 dark:text-slate-350">
                    <span>Repayment Period:</span>
                    <span className="text-brand-purple">{repaymentYears} Years</span>
                  </div>
                  <input 
                    type="range" 
                    min="3" 
                    max="10" 
                    step="1" 
                    value={repaymentYears}
                    onChange={(e) => setRepaymentYears(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                  />
                </div>

                {/* Subsidized Gender Interest Toggle */}
                <div className="space-y-2">
                  <span className="font-bold text-slate-700 dark:text-slate-350 block">Interest Rate Scheme:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button 
                      onClick={() => setGender("male")}
                      className={`flex-1 py-2 rounded-xl text-center text-[10px] font-black uppercase tracking-wider transition-colors border ${
                        gender === "male" 
                          ? 'bg-brand-navy border-brand-navy text-white' 
                          : 'bg-slate-50 border-slate-200 dark:bg-slate-850 dark:border-slate-800 text-slate-500'
                      }`}
                    >
                      Male Candidate (4% SI)
                    </button>
                    <button 
                      onClick={() => setGender("female")}
                      className={`flex-1 py-2 rounded-xl text-center text-[10px] font-black uppercase tracking-wider transition-colors border ${
                        gender === "female" 
                          ? 'bg-brand-navy border-brand-navy text-white' 
                          : 'bg-slate-50 border-slate-200 dark:bg-slate-850 dark:border-slate-800 text-slate-500'
                      }`}
                    >
                      Female / Divyang (1% SI)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/40 p-4 rounded-2xl border border-slate-150 dark:border-slate-800/80 space-y-2.5">
              <div className="flex justify-between text-xs font-bold text-slate-650 dark:text-slate-300">
                <span>Calculated Interest ({interestRate * 100}% SI):</span>
                <span>₹{totalInterest.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-650 dark:text-slate-300">
                <span>Total Repayable:</span>
                <span>₹{totalRepayable.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm font-black text-slate-900 dark:text-white border-t border-slate-250 dark:border-slate-800 pt-2">
                <span>Estimated EMI:</span>
                <span className="text-brand-purple dark:text-brand-purple-light">₹{monthlyInstallment} / Month</span>
              </div>
            </div>
          </div>

          {/* DRCC Required Document Checklist */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-md space-y-5">
            <h3 className="font-extrabold text-slate-900 dark:text-white text-lg font-display border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-emerald-500" /> Mandatory DRCC Document Checklist
            </h3>
            <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
              Before traveling to your district DRCC office for verification, ensure you have the original copy plus two self-attested photocopies of:
            </p>

            <ul className="space-y-3 font-semibold">
              {documentChecklist.map((item, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-650 dark:text-slate-350">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* DRCC District Addresses and Help Lines */}
        <div className="space-y-8 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><PhoneCall className="w-3.5 h-3.5" /> District Helpdesks</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Regional DRCC Centers & Helplines
            </h2>
            <p className="text-xs text-slate-400">
              Submit bonafide documents to the respective District Center based on your domicile district in Bihar:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {districtContacts.map((dist, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/65 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-left">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-display leading-tight">{dist.district}</h3>
                  <span className="text-[10px] text-slate-400 font-bold block leading-snug">{dist.address}</span>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-800 pt-3">
                  <a href={`tel:${dist.contact.replace(/\s+/g, '')}`} className="text-xs font-black text-brand-purple hover:underline flex items-center justify-center sm:justify-start gap-1.5 text-center sm:text-left">
                    <PhoneCall className="w-3.5 h-3.5 text-brand-gold-light shrink-0" /> {dist.contact}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked DRCC Questions */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><FaqIcon className="w-3.5 h-3.5 animate-pulse-subtle" /> FAQ desk</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Bihar Student Credit Card FAQs
            </h2>
            <p className="text-xs text-slate-400">
              Common questions answered regarding loan disbursement, moratorium, and applicant criteria:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 pt-2">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-display font-black text-slate-800 dark:text-white text-xs md:text-sm uppercase tracking-wide transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-350 rounded-lg border border-slate-150 dark:border-slate-700">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  
                  <div className={`transition-all duration-350 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-60 border-t border-slate-100 dark:border-slate-800/80' : 'max-h-0'
                  }`}>
                    <div className="px-6 py-5 text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
