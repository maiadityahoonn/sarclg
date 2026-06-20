import { useState } from 'react';
import { BookOpen, GraduationCap, Clock, Award, CheckCircle, ArrowRight, Laptop, Briefcase, Calendar, Cpu, Compass, Users, ChevronDown, HelpCircle } from 'lucide-react';

export default function Courses() {
  const [courseFaqIndex, setCourseFaqIndex] = useState(null);
  
  const toggleCourseFaq = (idx) => {
    setCourseFaqIndex(courseFaqIndex === idx ? null : idx);
  };

  const handleApplyClick = (courseName) => {
    window.dispatchEvent(new CustomEvent('open-admission-modal', { detail: { course: courseName } }));
  };

  const bcaDetails = {
    title: "Bachelor of Computer Applications (BCA)",
    code: "AICTE Program Code: BCA-SV26",
    duration: "3 Years (6 Semesters)",
    intake: "180 Seats",
    affiliation: "Affiliated to Aryabhatta Knowledge University (AKU), Patna",
    eligibility: "12th Pass (Any stream with basic mathematics interest)",
    objective: "Provides a thorough curriculum bridging the gap between theoretical computing science concepts and practical modern programming frameworks (Python, Java, Android, Web technologies) to produce industry-ready software developers.",
    highlights: [
      { title: "Weekly Labs", desc: "12+ hours of dedicated hands-on programming labs weekly under expert assistance." },
      { title: "Full-Stack Bootcamps", desc: "Integrated extra-curricular training on React, Node.js, and database structures." },
      { title: "AICTE Curriculum", desc: "Syllabus aligned with modern software standards and industry software requirements." }
    ],
    subjects: [
      "Programming in C & C++",
      "Data Structures & Algorithms (DSA)",
      "Advanced Java & J2EE Technologies",
      "Web Architecture (HTML5, CSS3, JS)",
      "Python Scripting & Automation",
      "Database Systems (RDBMS & SQL)",
      "Linux System Administration",
      "Computer Networks & Cyber Security",
      "Software Engineering & Agile Methodologies",
      "Cloud Computing & Web Services",
      "Android Application Development Lab",
      "Capstone Software Project Work"
    ],
    careers: [
      "Software Developer", 
      "Full-Stack Web Developer", 
      "Database Administrator (DBA)", 
      "IT Support Consultant", 
      "System Security Analyst", 
      "Android App Developer", 
      "Tech Entrepreneur & Freelancer"
    ]
  };

  const bbaDetails = {
    title: "Bachelor of Business Administration (BBA)",
    code: "AICTE Program Code: BBA-SV26",
    duration: "3 Years (6 Semesters)",
    intake: "120 Seats",
    affiliation: "Affiliated to Aryabhatta Knowledge University (AKU), Patna",
    eligibility: "12th Pass (Any stream with aggregate 45% marks)",
    objective: "Fosters foundational understanding of core business operations, management principles, financial accounting, marketing strategies, and HR planning to groom modern management executives and startup owners.",
    highlights: [
      { title: "Case-Study Method", desc: "Active training through corporate case studies from top management portals." },
      { title: "Entrepreneurship Cell", desc: "Direct incubator access under MoE Institution's Innovation Council (IIC)." },
      { title: "Digital Marketing Elective", desc: "Practical workshops covering SEO, Google Ads, and traffic analytics." }
    ],
    subjects: [
      "Principles of Management",
      "Organizational Behaviour (OB)",
      "Financial Accounting & Analysis",
      "Marketing & Brand Management",
      "Corporate Communication & Speech",
      "Human Resource Management (HRM)",
      "Business Law & Corporate Ethics",
      "Managerial & Business Economics",
      "Production & Operations Management",
      "Entrepreneurship Development Plan",
      "Banking, Insurance & Financial Markets",
      "Consumer Behaviour & Market Research"
    ],
    careers: [
      "Business Development Executive", 
      "Marketing & Sales Coordinator", 
      "Human Resource (HR) Manager", 
      "Financial & Investment Advisor", 
      "Retail Operations Manager", 
      "Corporate Operations Analyst", 
      "Management Trainee / Startup Owner"
    ]
  };

  const courseFaqs = [
    {
      q: "What is the core difference between choosing a BCA and a BBA degree?",
      a: "BCA focuses primarily on software engineering, web architectures, mobile application development, database management, and cloud systems, preparing you for technical roles. BBA focuses on marketing, financial planning, human resource management, corporate strategy, and entrepreneurship, grooming you for leadership, consulting, and administrative pathways."
    },
    {
      q: "Is prior programming knowledge or a specific Class 12 stream required for BCA?",
      a: "No prior programming experience is required! Our first-semester curriculum is designed to teach programming (C language) from scratch. Students from Science, Commerce, and Arts streams are eligible to apply, provided they have a strong interest in analytical problem-solving and basic mathematics."
    },
    {
      q: "How does the college assist with Bihar Student Credit Card (DRCC) applications?",
      a: "We have a dedicated Student Advisory Desk. Once your admission registration is confirmed, our office issues the certified Bonafide Certificate, university-approved Year-wise Fee Structure, and AICTE approval documents on official letterheads. You can submit these directly at your local DRCC center to process the 4 Lakh loan."
    },
    {
      q: "Are professional certifications included in the course structure?",
      a: "Yes! To ensure corporate readiness, we align our semesters with global certification programs. BCA students prepare for vendor credentials like Oracle Java, AWS Cloud Practitioner, CCNA, and Red Hat Linux. BBA students target certifications from HubSpot (Inbound Marketing), Google Project Management, Excel Expert, and NISM (Mutual Funds)."
    },
    {
      q: "What is the dress code/uniform protocol for undergraduate students?",
      a: "We follow a professional corporate uniform code. Students are required to wear the college uniform on specified academic days, group presentations, industrial visits, guest lectures, and semester examination days to foster discipline and professional etiquette."
    },
    {
      q: "What are the recent placement records and average packages for BBA & BCA?",
      a: "Our Career Relations Cell actively connects students with MNCs and startups. Recent graduates have secured placements with salary packages ranging from 3.5 LPA to 5 LPA, with highest offers reaching 7+ LPA. Key recruiters include IT solution firms, banking institutions, and consumer brand corporations."
    }
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-20">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex justify-center">
            <span className="section-tagline"><BookOpen className="w-3.5 h-3.5 animate-blink" /> Academic Offerings</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Undergraduate Course Programs
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Approved by AICTE and Affiliated to Aryabhatta Knowledge University (AKU), Patna. Rigorous professional pathways designed to foster high employability and technical innovation.
          </p>
        </div>

        {/* 1. BCA COURSE SECTION */}
        <div className="space-y-8 border-b border-slate-200/50 dark:border-slate-800/55 pb-16">
          <div className="flex items-start sm:items-center gap-3">
            <span className="p-3 bg-brand-purple/5 dark:bg-brand-purple/10 text-brand-purple dark:text-brand-purple-light rounded-2xl border border-brand-purple/10">
              <Laptop className="w-7 h-7" />
            </span>
            <div className="text-left">
              <span className="text-[10px] text-brand-purple font-extrabold uppercase tracking-wider block">{bcaDetails.code}</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-display leading-tight">
                {bcaDetails.title}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: Overview, Objective & Highlights */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-md">
              <div className="space-y-6 text-left">
                {/* Cover Image */}
                <div className="w-full h-44 overflow-hidden rounded-2xl relative shadow-sm border border-slate-100 dark:border-slate-800/50">
                  <img 
                    src="/images/bca_cover.png" 
                    alt="BCA Program Cover" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-4 bg-brand-gold text-brand-navy text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Computer Applications
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs font-bold text-slate-650 dark:text-slate-350">
                  <div className="flex items-center gap-2"><Clock className="w-4.5 h-4.5 text-brand-gold shrink-0" /> Duration: {bcaDetails.duration}</div>
                  <div className="flex items-center gap-2"><Users className="w-4.5 h-4.5 text-brand-gold shrink-0" /> Intake: {bcaDetails.intake}</div>
                </div>

                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                  {bcaDetails.objective}
                </p>

                {/* Academic Highlights */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Program Highlights</h4>
                  {bcaDetails.highlights.map((hl, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <Cpu className="w-4.5 h-4.5 text-brand-purple shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-extrabold text-slate-900 dark:text-white block">{hl.title}</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">{hl.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800/60 pt-4 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-center gap-4 text-left">
                <div className="text-xs">
                  <span className="text-slate-400 block">Affiliation Authority</span>
                  <span className="font-bold text-slate-800 dark:text-white">{bcaDetails.affiliation}</span>
                </div>
                <button
                  onClick={() => handleApplyClick('BCA')}
                  className="w-full sm:w-auto bg-brand-navy hover:bg-brand-navy-light text-white text-center text-xs font-extrabold uppercase px-6 py-3 rounded-xl transition-all dark:bg-brand-purple dark:hover:bg-brand-purple-light shadow"
                >
                  Apply Online (BCA)
                </button>
              </div>
            </div>

            {/* Right Card: Curriculum & Career Opportunities */}
            <div className="lg:col-span-6 bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-6">
              
              {/* Curriculum Grid */}
              <div className="space-y-4 text-left">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-lg font-display flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-brand-purple" /> Course Curriculum & Subjects
                </h3>
                <p className="text-xs text-slate-400">Semester courses are updated regularly to align with Aryabhatta Knowledge University regulations:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {bcaDetails.subjects.map((sub, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-xl shadow-sm">
                      <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-350">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Paths */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 p-5 rounded-2xl text-left space-y-3.5 shadow-sm">
                <h3 className="font-extrabold text-slate-905 dark:text-white text-sm font-display flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-brand-gold-dark" /> Target Placements & Roles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {bcaDetails.careers.map((career, idx) => (
                    <span key={idx} className="bg-slate-50 dark:bg-slate-850/60 border border-slate-150 dark:border-slate-850 text-slate-650 dark:text-slate-300 text-[10px] font-extrabold px-3 py-1.5 rounded-lg">
                      {career}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 2. BBA COURSE SECTION */}
        <div className="space-y-8 border-b border-slate-200/50 dark:border-slate-800/55 pb-16">
          <div className="flex items-start sm:items-center gap-3">
            <span className="p-3 bg-brand-gold/5 dark:bg-brand-gold/10 text-brand-gold-dark dark:text-brand-gold rounded-2xl border border-brand-gold/15">
              <Briefcase className="w-7 h-7" />
            </span>
            <div className="text-left">
              <span className="text-[10px] text-brand-gold-dark font-extrabold uppercase tracking-wider block">{bbaDetails.code}</span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-display leading-tight">
                {bbaDetails.title}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: Overview, Objective & Highlights */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-6 shadow-md">
              <div className="space-y-6 text-left">
                {/* Cover Image */}
                <div className="w-full h-44 overflow-hidden rounded-2xl relative shadow-sm border border-slate-100 dark:border-slate-800/50">
                  <img 
                    src="/images/bba_cover.png" 
                    alt="BBA Program Cover" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <span className="absolute bottom-3 left-4 bg-brand-gold text-brand-navy text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Business Administration
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs font-bold text-slate-650 dark:text-slate-350">
                  <div className="flex items-center gap-2"><Clock className="w-4.5 h-4.5 text-brand-gold shrink-0" /> Duration: {bbaDetails.duration}</div>
                  <div className="flex items-center gap-2"><Users className="w-4.5 h-4.5 text-brand-gold shrink-0" /> Intake: {bbaDetails.intake}</div>
                </div>

                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                  {bbaDetails.objective}
                </p>

                {/* Academic Highlights */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Program Highlights</h4>
                  {bbaDetails.highlights.map((hl, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <Compass className="w-4.5 h-4.5 text-brand-gold-dark shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-extrabold text-slate-900 dark:text-white block">{hl.title}</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">{hl.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800/60 pt-4 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:items-center gap-4 text-left">
                <div className="text-xs">
                  <span className="text-slate-400 block">Affiliation Authority</span>
                  <span className="font-bold text-slate-800 dark:text-white">{bbaDetails.affiliation}</span>
                </div>
                <button
                  onClick={() => handleApplyClick('BBA')}
                  className="w-full sm:w-auto bg-brand-navy hover:bg-brand-navy-light text-white text-center text-xs font-extrabold uppercase px-6 py-3 rounded-xl transition-all dark:bg-brand-purple dark:hover:bg-brand-purple-light shadow"
                >
                  Apply Online (BBA)
                </button>
              </div>
            </div>

            {/* Right Card: Curriculum & Career Opportunities */}
            <div className="lg:col-span-6 bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-6">
              
              {/* Curriculum Grid */}
              <div className="space-y-4 text-left">
                <h3 className="font-extrabold text-slate-905 dark:text-white text-lg font-display flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-brand-gold-dark" /> Course Curriculum & Subjects
                </h3>
                <p className="text-xs text-slate-400">Semester courses are updated regularly to align with Aryabhatta Knowledge University regulations:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {bbaDetails.subjects.map((sub, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-xl shadow-sm">
                      <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-350">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Paths */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 p-5 rounded-2xl text-left space-y-3.5 shadow-sm">
                <h3 className="font-extrabold text-slate-905 dark:text-white text-sm font-display flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-brand-gold-dark" /> Target Placements & Roles
                </h3>
                <div className="flex flex-wrap gap-2">
                  {bbaDetails.careers.map((career, idx) => (
                    <span key={idx} className="bg-slate-50 dark:bg-slate-850/60 border border-slate-150 dark:border-slate-850 text-slate-650 dark:text-slate-300 text-[10px] font-extrabold px-3 py-1.5 rounded-lg">
                      {career}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 3. ACADEMIC EVALUATION & SCHOLARSHIPS SECTION */}
        <div className="p-4 sm:p-8 bg-slate-50 dark:bg-slate-900/40 rounded-2xl sm:rounded-3xl border border-slate-200/60 dark:border-slate-800/60 space-y-6 sm:space-y-8 text-left shadow-lg">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Award className="w-3.5 h-3.5 animate-blink" /> Academic Regulations</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Evaluation & Financing Framework
            </h2>
            <p className="text-xs text-slate-400">How classes are conducted, evaluated, and financed at Sarvadnya Vidyapeeth:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Assessment Panel */}
            <div className="space-y-4">
              <h3 className="font-extrabold text-slate-800 dark:text-white text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-purple rounded-full"></span> Continuous Evaluation System
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                To guarantee academic excellence and prepare students for corporate challenges, our teachers conduct regular evaluation rounds including:
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-650 dark:text-slate-350">
                <li className="flex gap-2"><CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" /> <span>**Mid-Term Exams**: Conducted at the end of 8th and 16th week of the semester.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" /> <span>**Lab Files & Viva Voce**: Regular evaluation of technical projects and compiler codes.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" /> <span>**Attendance Weightage**: 75% classroom attendance is mandatory for university exams.</span></li>
              </ul>
            </div>

            {/* DRCC Loan Checklist */}
            <div className="space-y-4">
              <h3 className="font-extrabold text-slate-800 dark:text-white text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-gold rounded-full"></span> BSCCS Financing Checklist
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Our Student Advisory Desk provides all certified paperwork needed at DRCC centers for the Bihar Student Credit Card loan:
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-650 dark:text-slate-350">
                <li className="flex gap-2"><CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" /> <span>**Bonafide Certificate**: Standard academic certificate issued by our registrar.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" /> <span>**Verified Fee Layout**: Detailed year-wise cost layout signed by the accounts desk.</span></li>
                <li className="flex gap-2"><CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" /> <span>**AICTE Approval Letter**: Official state and board clearance copy for loan authorization.</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. COURSE SPECIFIC FAQs (Full Width Card Container) */}
        <div className="p-4 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl sm:rounded-3xl space-y-6 sm:space-y-8 text-left shadow-lg">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><HelpCircle className="w-3.5 h-3.5 animate-blink" /> Course Queries</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-xs text-slate-400">Common questions about course eligibility, credit cards, dress codes, and careers:</p>
          </div>

          <div className="w-full space-y-4">
            {courseFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleCourseFaq(idx)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 font-bold text-sm text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-850/40 transition-colors text-left"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-5 h-5 text-brand-purple shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${courseFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                
                {courseFaqIndex === idx && (
                  <div className="px-4 sm:px-6 pb-5 pt-3 sm:pt-1 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-150 dark:border-slate-800/40 animate-fade-in-up">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
