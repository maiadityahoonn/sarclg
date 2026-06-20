import { BookOpen, Cpu, Award, Globe, Users, TrendingUp, Sparkles, CheckCircle, Lightbulb, FileText, Settings, Heart } from 'lucide-react';

export default function RnD() {
  const stats = [
    { value: "45+", label: "Journal Publications", sub: "Indexed in Scopus / UGC CARE" },
    { value: "12+", label: "Ongoing Prototypes", sub: "IoT, App & Business models" },
    { value: "15+", label: "Faculty Mentors", sub: "Ph.D. Scholars & Industry Experts" },
    { value: "2", label: "Advanced R&D Labs", sub: "Dedicated Innovation Centers" }
  ];

  const researchDomains = [
    {
      title: "Artificial Intelligence & ML",
      icon: Cpu,
      desc: "Investigating deep learning architectures, computer vision applications, natural language parsing, and predictive analytics models for real-world deployment.",
      subfields: ["Neural Networks", "NLP in Vernacular Languages", "Predictive Diagnostics"]
    },
    {
      title: "Software & Cloud Architecture",
      icon: Settings,
      desc: "Optimizing database queries, analyzing microservices performance, developing cloud security protocols, and testing scalable distributed systems.",
      subfields: ["Microservices Orchestration", "Query Normalization", "Serverless Computation"]
    },
    {
      title: "Data Science & Market Strategy",
      icon: TrendingUp,
      desc: "Employing SPSS and advanced analytics to map consumer behavior buying trends, evaluate market forecasting models, and refine startup scaling strategies.",
      subfields: ["Quantitative Market Models", "SPSS Regression Sprints", "Consumer Analytics"]
    },
    {
      title: "Sustainability & Green IT",
      icon: Globe,
      desc: "Researching energy-efficient computing standards, green code optimization frameworks, and smart IoT grids for eco-friendly campus environments.",
      subfields: ["Energy-efficient Schedulers", "Eco-system Analytics", "IoT Grid Topologies"]
    }
  ];

  const projects = [
    {
      title: "Smart Campus IoT Grid",
      desc: "An integrated network of sensors monitoring real-time library occupancy, laboratory temperature, and campus energy consumption to optimize resources.",
      status: "Prototype Deployed",
      tech: "Raspberry Pi, Python, MongoDB, MQTT",
      teamSize: "4 BCA Students"
    },
    {
      title: "Agri-Tech Yield Predictor",
      desc: "A predictive analytics dashboard matching regional soil profiles and local weather patterns to optimize crop yield cycles in Bihar districts.",
      status: "Field Testing",
      tech: "Python, Scikit-Learn, React, Pandas",
      teamSize: "3 BCA + 1 BBA Student"
    },
    {
      title: "Edu-Sync Classroom Sandbox",
      desc: "A real-time collaborative code editor and sandbox running in web browsers, helping teachers conduct instant compiler testing sessions in class.",
      status: "Beta Version Live",
      tech: "React, Node.js, WebSockets, Docker",
      teamSize: "5 BCA Students"
    }
  ];

  const leadership = [
    { name: "Dr. K. N. Sinha", role: "Dean, R&D Cell", details: "Ph.D. in Computer Science, 18+ Years Research Experience" },
    { name: "Prof. S. Sharma", role: "R&D Cell Coordinator", details: "M.Tech in CSE, Specialist in Distributed Computing" },
    { name: "Dr. A. Mukherjee", role: "Management Research Advisor", details: "Ph.D. in Business Economics, SPSS Specialist" }
  ];

  const studentSupport = [
    "Full reimbursement of delegate registration fees for accepted papers in IEEE, Springer, or UGC-CARE journals.",
    "Complimentary access to digital research libraries, databases (DELNET), and academic plagiarism detection cells.",
    "Internal research grant seed-funding up to ₹50,000 for verified student hardware-software prototype builds.",
    "Dedicated weekly mentorship hours with Ph.D. faculty to guide paper formatting, abstract drafts, and reference logs."
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen relative text-slate-800 dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-20">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center">
            <span className="section-tagline"><Sparkles className="w-3.5 h-3.5 animate-pulse" /> Intellectual Innovation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Research & Development Cell (R&D)
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Nurturing scientific inquiry, technology prototypes, and peer-reviewed academic publications.
          </p>
        </div>

        {/* R&D cell info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Fostering Innovation & Academic Research
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
              At Sarvadnya Vidyapeeth, the Research & Development Cell serves as the cornerstone of academic development. We actively nurture a spirit of scientific inquiry among both students and faculty members. Our cell focuses on bridging the gap between classroom theory and real-world technology research, resulting in working prototypes and peer-reviewed publications.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Our team provides continuous guidance to students in publishing research articles, drafting patent applications, and developing software/hardware innovations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex-1">
                <span className="text-brand-gold text-2xl font-extrabold block">2 Advanced Labs</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Innovation Centers</span>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex-1">
                <span className="text-brand-purple dark:text-brand-purple-light text-2xl font-extrabold block">45+ Papers</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Scopus & UGC CARE Articles</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/85 relative group">
              <img 
                src="/images/innovation_lab.png" 
                alt="SV R&D Innovation Lab" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white text-left">
                <span className="bg-brand-gold text-brand-navy text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider block w-fit mb-2">
                  Academic Innovation
                </span>
                <h4 className="font-black text-xl font-display">SV Advanced Innovation Center</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Equipped with modern IoT nodes, analytics servers, and reference registries for student projects.
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
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* 1. CORE RESEARCH DOMAINS */}
        <section className="space-y-8 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="flex justify-center">
              <span className="section-tagline"><Cpu className="w-3.5 h-3.5" /> Exploration Spheres</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Core Fields of Investigation
            </h2>
            <p className="text-xs text-slate-400">Our faculty and student research teams operate across four main digital domains:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {researchDomains.map((domain, idx) => {
              const IconComponent = domain.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
                  <span className="p-3 bg-brand-purple/5 text-brand-purple dark:bg-brand-purple/10 dark:text-brand-purple-light rounded-xl border border-brand-purple/10 shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </span>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base leading-tight font-display">{domain.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed font-semibold">
                        {domain.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.subfields.map((sub, sIdx) => (
                        <span key={sIdx} className="bg-slate-50 dark:bg-slate-850/60 border border-slate-150 dark:border-slate-850 text-slate-600 dark:text-slate-300 text-[9px] font-black px-2.5 py-1 rounded-md">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 2. ONGOING PROTOTYPES & LAB PROJECT SHOWCASE */}
        <section className="space-y-8 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="flex justify-center">
              <span className="section-tagline"><Lightbulb className="w-3.5 h-3.5" /> Prototyping Lab</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Student Lab Projects & Prototypes
            </h2>
            <p className="text-xs text-slate-400">Working models and software pipelines developed by our BCA and BBA cohorts:</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/80 pb-2.5">
                    <span className="text-[9px] font-black text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full uppercase tracking-wider">{proj.status}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">{proj.teamSize}</span>
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-display leading-tight">{proj.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {proj.desc}
                  </p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-950/40 p-3.5 rounded-xl border border-slate-150 dark:border-slate-800/80 text-left">
                  <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block">Tech Stack / Tools</span>
                  <span className="text-[10px] font-bold text-slate-700 dark:text-slate-350 block mt-1 leading-snug">{proj.tech}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. RESEARCH LEADERSHIP & STUDENT SUPPORT CELLS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4 text-left">
          
          {/* Research Committee */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-lg font-display border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-purple" /> Cell Advisory Board
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Our R&D division is structured under senior academic leadership to ensure research reviews and mentoring quality:
              </p>

              <div className="space-y-4.5">
                {leadership.map((person, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="w-1.5 h-1.5 bg-brand-purple rounded-full shrink-0 mt-2"></span>
                    <div>
                      <span className="text-xs font-black text-slate-900 dark:text-white block">{person.name}</span>
                      <span className="text-[10px] text-brand-purple font-bold block uppercase tracking-wider">{person.role}</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5 leading-snug">{person.details}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-slate-100 dark:border-slate-800 pt-4 text-xs font-bold text-slate-500">
              SV R&D Cell Office: Academic Block B, Room 204.
            </div>
          </div>

          {/* Student Mentorship and Grants */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-lg font-display border-b border-slate-200/80 dark:border-slate-800/80 pb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-gold-dark" /> Student Research Support desk
              </h3>
              <p className="text-xs text-slate-505 leading-relaxed font-semibold">
                Sarvadnya Vidyapeeth actively funds and supports undergraduate research initiatives:
              </p>
              
              <ul className="space-y-3.5">
                {studentSupport.map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-slate-650 dark:text-slate-350 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-200 dark:border-slate-800 pt-4 text-left flex justify-between items-center gap-4 flex-wrap">
              <div className="text-xs">
                <span className="text-slate-400 block font-semibold">Have a research proposal?</span>
                <span className="text-[10px] text-slate-550 dark:text-slate-400 font-bold block mt-0.5 leading-snug">Submit abstract papers to our coordinator at:</span>
                <a href="mailto:sarvadnyaavidyapeeth11@gmail.com" className="text-[10px] text-brand-purple font-black hover:underline break-all">sarvadnyaavidyapeeth11@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
