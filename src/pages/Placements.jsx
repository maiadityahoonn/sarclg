import { useState } from 'react';
import { Briefcase, Landmark, Globe, CheckCircle2, Award, ArrowUpRight, HelpCircle, Clock, TrendingUp, Users, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Placements() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const services = [
    { title: "Resume Building", desc: "One-on-one sessions to write standard professional profiles and projects summary." },
    { title: "Mock Interviews", desc: "Rigorous technical and HR mock interviews mimicking modern corporate assessments." },
    { title: "Soft Skills Training", desc: "Group discussions and public speaking courses to improve candidate confidence." },
    { title: "Internship Support", desc: "Assisting students in finding industry internships during summer/winter terms." },
    { title: "Career Counseling", desc: "Assessing student skills to guide them into technology or management pathways." },
    { title: "International Placements", desc: "Direct counseling and application support for recruiters in Gulf and Asian countries." },
  ];

  const stats = [
    { value: "₹7.2 LPA", label: "Highest Package Secured", desc: "At top global multinational software/IT firm." },
    { value: "₹4.2 LPA", label: "Average Package", desc: "Steady median compensation package across departments." },
    { value: "35+", label: "Active Recruiter Partners", desc: "Leading national tech, finance, and consumer corporations." },
    { value: "100%", label: "Placement Assistance", desc: "Continuous training sprints, interview workshops & resume logs." }
  ];

  const recentPlacements = [
    {
      name: "Rajesh Kumar",
      course: "BCA (Batch 2023-26)",
      company: "Wipro Technologies",
      role: "Associate Software Engineer",
      package: "₹5.5 LPA",
      testimonial: "The Coding Bootcamps and Mock Interviews held by the Placement Cell helped me clear my technical assessments with confidence."
    },
    {
      name: "Priya Singh",
      course: "BBA (Batch 2023-26)",
      company: "ICICI Bank",
      role: "Management Trainee",
      package: "₹4.8 LPA",
      testimonial: "SV's persistent focus on soft skills, group discussion sessions, and presentation workshops polished my corporate communication."
    },
    {
      name: "Aman Verma",
      course: "BCA (Batch 2022-25)",
      company: "Infosys",
      role: "System Engineer Specialist",
      package: "₹6.2 LPA",
      testimonial: "Through the Student Credit Card support and rigorous lab assignments, I secured a solid tech platform right from Patna."
    },
    {
      name: "Sneha Kumari",
      course: "BBA (Batch 2022-25)",
      company: "Genpact",
      role: "Financial Analyst",
      package: "₹4.5 LPA",
      testimonial: "Internships organized in local institutions gave me practical case-study knowledge that impressed my recruiters during selection."
    }
  ];

  const roadmapPhases = [
    {
      phase: "Phase 01",
      title: "Skill Mapping & Profiles",
      duration: "Semesters 1 - 3",
      desc: "Profiling candidates, conducting basic aptitude diagnostics, writing professional resume drafts, and setting up coding/business portfolio sheets."
    },
    {
      phase: "Phase 02",
      title: "Bootcamps & Specializations",
      duration: "Semester 4",
      desc: "Full-stack React framework training, SQL query normalizations, business analytics case-study workshops, and mandatory summer corporate internships."
    },
    {
      phase: "Phase 03",
      title: "Mock Audits & HR Prep",
      duration: "Semester 5",
      desc: "Weekly Group Discussion sprints, live public speaking exercises, technical mock assessments, and standard HR interview simulations."
    },
    {
      phase: "Phase 04",
      title: "On-Campus Recruitments",
      duration: "Semester 6",
      desc: "Participating in institutional campus recruitment drives, pool placement interviews, and pre-placement letter checks before graduation."
    }
  ];

  const placementFaqs = [
    {
      q: "What is the eligibility criteria to register with the Training & Placement Cell?",
      a: "All final-year students (Semester 5 and Semester 6) of BCA and BBA courses with a minimum cumulative GPA of 6.0 and no active backlogs are eligible to register. However, all students must attend the placement training workshops commencing from the first year."
    },
    {
      q: "Does the college help in securing summer internships?",
      a: "Yes. The Career Relations Cell has tied up with local software firms, startup incubators, and banking institutes in Bihar and Bengal to assist students in finding mandatory 4-to-6 week summer internships."
    },
    {
      q: "How many companies can a student apply for?",
      a: "As per our placement policy, a student is allowed to participate in multiple recruitment drives until they secure a 'dream offer' or 'standard offer' above a specific package threshold. Once an offer letter is officially accepted, the student is typically excluded from further standard drives to allow equal opportunity for peers."
    },
    {
      q: "What training support is provided to students for placements?",
      a: "We conduct structured sessions in English presentation skills, technical aptitude, logic building, data structure drills, and resume checks. We also invite industry mentors for guest lectures and real-world case study sprints."
    },
    {
      q: "Can students apply for international placements?",
      a: "Yes. We offer direct overseas counseling and profile mapping for recruiters based in Gulf countries (such as UAE, Oman, Saudi Arabia) and Southeast Asian hubs (Singapore, Malaysia), focusing on roles in IT, Customer Support, and Retail Management."
    }
  ];

  const countries = [
    { name: "United Arab Emirates (UAE)" },
    { name: "Qatar" },
    { name: "Oman" },
    { name: "Bahrain" },
    { name: "Kuwait" },
    { name: "Saudi Arabia" },
    { name: "Singapore" },
    { name: "Malaysia" },
    { name: "European Countries" }
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-20">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center">
            <span className="section-tagline"><Briefcase className="w-3.5 h-3.5 animate-blink" /> Career Relations Cell</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Placements & Career Cell
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Fostering corporate linkages, practical internships, and global employment avenues.
          </p>
        </div>

        {/* Corporate cell info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Training for the Global Industry
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              At Sarvadnya Vidyapeeth, our **Training & Placement Cell** works continuously to bridge the gap between classroom academics and corporate demands. We begin training our students from the first year, focusing on coding bootcamps, presentation skills, logical reasoning, and industry case studies.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Our placement officers maintain active links with recruiters in Patna, Bangalore, Delhi NCR, and overseas to align academic project models with current market technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex-1">
                <span className="text-brand-gold text-2xl font-extrabold block">100%</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Placement Support</span>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex-1">
                <span className="text-brand-purple dark:text-brand-purple-light text-2xl font-extrabold block">8+ Countries</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">International Support</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/85 relative group">
              <img 
                src="/images/placement_celebration.png" 
                alt="SV Placement Celebration" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white text-left">
                <span className="bg-brand-gold text-brand-navy text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider block w-fit mb-2">
                  Success Career Records
                </span>
                <h4 className="font-black text-xl font-display">Congratulations SV Achievers</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Students graduating from BCA and BBA classes get corporate selections in tech organizations and business groups.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-850 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/85 shadow-md text-left space-y-2 hover:shadow-lg transition-all duration-300">
              <span className="text-brand-purple dark:text-brand-purple-light text-3xl font-extrabold block tracking-tight">{stat.value}</span>
              <span className="text-xs font-black text-slate-850 dark:text-white uppercase tracking-wider block leading-tight">{stat.label}</span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Placement Services Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Placement Training & Incubation Services
            </h2>
            <p className="text-xs text-slate-400">
              Assisting and training candidates through active incubation tracks:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((ser, idx) => (
              <div key={idx} className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl text-left border border-slate-200/50 dark:border-slate-800/60 shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/20 text-brand-purple dark:text-brand-purple-light flex items-center justify-center mb-4 font-black">
                    0{idx + 1}
                  </div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2">{ser.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{ser.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Stage Placement Journey Roadmap */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Clock className="w-3.5 h-3.5" /> Preparation Roadmap</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              The 4-Stage Placement Journey
            </h2>
            <p className="text-xs text-slate-400">
              Our Training and Placement Cell grooms students starting from the very first year up to their final semester recruitment drives:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {roadmapPhases.map((phase, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between space-y-4">
                <div className="absolute top-4 right-4 text-slate-100 dark:text-slate-800/40 text-4xl font-black font-display pointer-events-none select-none">
                  {idx + 1}
                </div>
                <div className="space-y-2 relative z-10">
                  <span className="bg-brand-purple/10 text-brand-purple dark:text-brand-purple-light text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                    {phase.phase}
                  </span>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-display">{phase.title}</h3>
                  <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider block">{phase.duration}</span>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Placed Achievers Showcase */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Award className="w-3.5 h-3.5" /> Success Spotlight</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Our Recent Placed Achievers
            </h2>
            <p className="text-xs text-slate-400">
              Meet some of our successful graduates who secured placements in reputed corporations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {recentPlacements.map((student, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow relative">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-display leading-tight">{student.name}</h3>
                      <span className="text-[10px] text-slate-400 font-semibold block mt-0.5">{student.course}</span>
                    </div>
                    <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0 font-sans">
                      {student.package}
                    </span>
                  </div>
                  <div className="border-t border-slate-100 dark:border-slate-800/85 pt-3 text-left">
                    <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block">Recruiter</span>
                    <span className="text-xs font-bold text-brand-purple dark:text-brand-purple-light block mt-0.5">{student.company}</span>
                    <span className="text-[10px] text-slate-500 font-semibold block mt-0.5">{student.role}</span>
                  </div>
                  <p className="text-xs italic text-slate-500 dark:text-slate-400 leading-relaxed pt-1 text-left font-medium">
                    "{student.testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Support Details */}
        <div className="p-8 md:p-12 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-8 text-left shadow-md">
          <div className="space-y-3 max-w-2xl">
            <div className="flex justify-center lg:justify-start">
              <span className="section-tagline"><Globe className="w-3.5 h-3.5 animate-blink" /> International Placements</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display font-sans">
              Overseas Placement Counseling Services
            </h3>
            <p className="text-xs md:text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
              We provide dedicated global career support to prepare students for employment procedures in leading technology and business sectors across the Middle East and Southeast Asia:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-sans">
            {countries.map((c, idx) => (
              <div key={idx} className="glass-card p-4 rounded-xl border border-gray-200/50 dark:border-slate-800 flex items-center gap-3">
                <div className="p-1.5 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-lg shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-850 dark:text-slate-300">{c.name}</span>
              </div>
            ))}
          </div>

          {/* Target Industry Sectors */}
          <div className="space-y-4 pt-6 border-t border-slate-200/40">
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
              Target Industry Sectors
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-bold text-slate-700 dark:text-slate-350">
              {[
                "Information Technology (IT)", "Business & Administration", 
                "Customer Support Services", "Banking & Finance", 
                "Retail Management", "Hospitality & Tourism", 
                "Digital Marketing", "Corporate Services"
              ].map((sec) => (
                <div key={sec} className="flex items-center gap-2 bg-white dark:bg-slate-900 p-3 rounded-xl border border-gray-250 dark:border-slate-800/80 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{sec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs font-bold text-slate-650 dark:text-slate-400">
            <div className="flex gap-2">
              <Globe className="w-5 h-5 text-brand-purple shrink-0" />
              <div>
                <span>Overseas Career Counseling</span>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">Assessing work visa regulations and profile alignment.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Award className="w-5 h-5 text-brand-purple shrink-0" />
              <div>
                <span>Document Guidance</span>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">Helping in credential evaluation and embassy updates.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Landmark className="w-5 h-5 text-brand-purple shrink-0" />
              <div>
                <span>English Communication Training</span>
                <p className="text-[10px] text-slate-400 font-medium mt-0.5">IELTS/TOEFL standard speech and writing exercises.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Placement FAQs Section */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><HelpCircle className="w-3.5 h-3.5 animate-pulse-subtle" /> FAQ Desk</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Placement FAQ Section
            </h2>
            <p className="text-xs text-slate-400">
              Clear your doubts about job drives, training support, and registration guidelines:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 pt-2">
            {placementFaqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-3 sm:gap-4 font-display font-black text-slate-800 dark:text-white text-xs md:text-sm uppercase tracking-wide transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-350 rounded-lg border border-slate-150 dark:border-slate-700">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  
                  <div className={`transition-all duration-350 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-60 border-t border-slate-100 dark:border-slate-800/80' : 'max-h-0'
                  }`}>
                    <div className="px-4 sm:px-6 py-4 sm:py-5 text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
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
