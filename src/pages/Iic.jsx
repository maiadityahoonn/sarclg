import { Lightbulb, Zap, Rocket, Trophy, Compass, Download, ShieldCheck, CheckCircle2, Users, Star, FileText } from 'lucide-react';

export default function Iic() {
  const activities = [
    { title: "Startup Awareness Programs", desc: "Interactive bootcamps describing patent policies, startup schemes, and venture funding." },
    { title: "Hackathons & Ideation", desc: "48-hour coding & prototype challenge where students design apps to solve local city challenges." },
    { title: "Design Thinking Workshops", desc: "Expert mentorship sessions detailing human-centered design frameworks and wireframes." },
    { title: "Idea Pitching Competitions", desc: "Pitch decks presentation in front of regional investors and startup incubators." },
    { title: "Industry Collaboration", desc: "Live site visits and project training with technology startups in Bihar." },
    { title: "Entrepreneurship Development", desc: "Masterclasses from successful startup founders sharing real-world challenges." },
  ];

  const mandates = [
    { title: "Scouting Ideas", desc: "Identifying and nurturing creative thoughts and student-led software/hardware prototypes." },
    { title: "IPR & Patent Support", desc: "Guiding students through Intellectual Property Rights, patent filings, and copyright processes." },
    { title: "Pre-Incubation Pipeline", desc: "Providing active mentoring, workspace access, and seed-funding checkups for young founders." },
    { title: "ARIIA Rankings", desc: "Aligning institutional progress with MoE's Atal Ranking of Institutions on Innovation Achievements." }
  ];

  const committee = [
    { name: "Dr. K. N. Sinha", role: "IIC President", dept: "R&D Head & Computer Science" },
    { name: "Prof. S. Sharma", role: "IIC Convener", dept: "M.Tech CSE Coordinator" },
    { name: "Dr. A. Mukherjee", role: "IPR Activity Coordinator", dept: "Management Research Advisor" },
    { name: "Prof. R. Sen", role: "Startup Activity Coordinator", dept: "Entrepreneurship Mentor" }
  ];

  const pipelineStages = [
    {
      stage: "Stage 01",
      title: "Ideation & Scouting",
      desc: "Ideation bootcamps and annual hackathons (like Smart India Hackathon) screen student proposals for feasibility and problem statement validation."
    },
    {
      stage: "Stage 02",
      title: "Proof of Concept (PoC)",
      desc: "Developing actual functional hardware/software models in our advanced Innovation Lab. Supported by internal funding grants up to ₹50,000."
    },
    {
      stage: "Stage 03",
      title: "IPR & Legal Filing",
      desc: "Drafting patents, software copyright agreements, and guiding the student team in company incorporation rules under expert guidance."
    },
    {
      stage: "Stage 04",
      title: "Incubation & Pitching",
      desc: "Inviting regional angel investors, venture funds, and startup founders for pitch deck reviews to secure external funding rounds."
    }
  ];

  const achievements = [
    {
      title: "Smart India Hackathon 2025",
      team: "Team Byte-Vanguards",
      desc: "Finalist entry in the Ministry of Agriculture portal challenge, designing an offline vernacular weather forecast system.",
      status: "National Finalist"
    },
    {
      title: "Bihar Start-up Ideation Sprint",
      team: "Team Agri-Predict",
      desc: "Awarded runner-up trophy and ₹25,000 cash grant for proposing dynamic soil profiling dashboards.",
      status: "State Runner-Up"
    }
  ];

  const handleDownloadCert = () => {
    const element = document.createElement("a");
    const file = new Blob([
      "MINISTRY OF EDUCATION INNOVATION CELL (GOVERNMENT OF INDIA)\n\n" +
      "INSTITUTION INNOVATION COUNCIL (IIC) CERTIFICATE\n\n" +
      "This is to certify that SARVADNYA VIDYAPEETH, Patna, Bihar, has established an Institution's Innovation Council (IIC) for the Academic Year 2026-27 under the guidance of MoE Innovation Cell, AICTE, New Delhi.\n\n" +
      "Ref: IIC-MoE-PATNA-SV-2026\n" +
      "Date of issue: June 15, 2026\n\n" +
      "Signed,\n" +
      "National Coordinator, MoE Innovation Cell."
    ], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "MoE_IIC_Establishment_Certificate_Sarvadnya.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-20">
        
        {/* Intro Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center">
            <span className="section-tagline"><Lightbulb className="w-3.5 h-3.5 animate-pulse" /> MoE Initiative</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Institution Innovation Council (IIC)
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Fostering innovation, design thinking, entrepreneurship, and a startup ecosystem among students.
          </p>
        </div>

        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 text-left space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Fostering Startup Ideation
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sarvadnya Vidyapeeth has established an **Institution Innovation Council (IIC)** under the guidelines of the Ministry of Education's Innovation Cell, Government of India. The cell acts as a catalyst for converting students' creative ideas into functional startup prototypes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="p-2 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-xl h-fit shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">Design Thinking</h4>
                  <p className="text-[10px] text-slate-550 dark:text-slate-400 font-semibold mt-0.5">Learn how to frame, map, and prototype ideas.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="p-2 bg-amber-50 dark:bg-amber-950/20 text-brand-gold rounded-xl h-fit shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900 dark:text-white">National Competitions</h4>
                  <p className="text-[10px] text-slate-555 dark:text-slate-400 font-semibold mt-0.5">Participate in Smart India Hackathons & Ideation challenges.</p>
                </div>
              </div>
            </div>

            {/* Visual Certificate Box */}
            <div className="bg-slate-950 text-white border border-slate-800 rounded-3xl p-6 space-y-5 text-left relative overflow-hidden shadow-2xl mt-4">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/10 rounded-bl-full"></div>
              
              <div className="flex items-center gap-3">
                <Rocket className="w-8 h-8 text-brand-purple" />
                <div>
                  <span className="text-[9px] text-brand-purple font-bold tracking-wider uppercase block">MoE Innovation Cell</span>
                  <h3 className="text-xs font-bold text-white leading-tight">IIC Establishment Status</h3>
                </div>
              </div>

              <div className="border border-slate-900 bg-slate-900/60 p-3.5 rounded-xl text-[9px] font-mono text-slate-400 space-y-1">
                <p>Status: REGISTERED HUB</p>
                <p>Cell Reg No: IIC-PATNA-SV-2026</p>
                <p className="text-emerald-500">IIC Star Rating: ★★★★☆</p>
              </div>

              <button
                onClick={handleDownloadCert}
                className="w-full bg-brand-purple hover:bg-brand-purple-light text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors font-sans"
              >
                <Download className="w-4 h-4" /> Download IIC Certificate
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full h-80 md:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative">
              <img 
                src="/images/innovation_lab.png" 
                alt="MoE Innovation Council Lab" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white text-left">
                <span className="bg-brand-gold text-brand-navy text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider block w-fit mb-2">
                  Innovation & Research Hub
                </span>
                <h3 className="text-lg font-black font-display">Institution Innovation Council</h3>
                <p className="text-xs text-slate-350 leading-relaxed mt-1">
                  Students working on electronics prototypes, microcontrollers, IoT devices, and brainstorming startup models.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Objectives */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><ShieldCheck className="w-3.5 h-3.5" /> Institutional Mandate</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              MoE-IIC Core Mandates & Objectives
            </h2>
            <p className="text-xs text-slate-400">
              The Institution Innovation Council aligns with national priorities set by the Ministry of Education:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {mandates.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/85 p-6 rounded-2xl shadow-md text-left space-y-3 hover:shadow-lg transition-all duration-300">
                <span className="text-brand-purple dark:text-brand-purple-light text-xl font-extrabold block">0{idx + 1}</span>
                <h3 className="text-sm font-black text-slate-850 dark:text-white uppercase tracking-wider block leading-tight">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Activities grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Zap className="w-3.5 h-3.5" /> Action Initiatives</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Innovation & Entrepreneurship Initiatives
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Activities organized throughout the academic year to prompt developer ecosystems and product designs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl text-left border border-slate-100 dark:border-slate-800/60 flex gap-4 hover:-translate-y-1 transition-all duration-300">
                <div className="p-2 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-xl h-fit shrink-0">
                  <Lightbulb className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">{act.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pre-Incubation Pipeline Stages */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Rocket className="w-3.5 h-3.5" /> Idea-to-Market</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              The Pre-Incubation Startup Pipeline
            </h2>
            <p className="text-xs text-slate-400">
              How we guide student innovations from a basic paper concept up to corporate launch:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {pipelineStages.map((stage, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between space-y-4">
                <div className="absolute top-4 right-4 text-slate-150 dark:text-slate-800/40 text-4xl font-black font-display pointer-events-none select-none">
                  {idx + 1}
                </div>
                <div className="space-y-2 relative z-10">
                  <span className="bg-brand-purple/10 text-brand-purple dark:text-brand-purple-light text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider inline-block font-sans">
                    {stage.stage}
                  </span>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-display">{stage.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Committee */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Users className="w-3.5 h-3.5" /> Council Leadership</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              IIC Executive Council Committee
            </h2>
            <p className="text-xs text-slate-400">
              The faculty members steering the Innovation and Entrepreneurship programs at our institute:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {committee.map((person, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/85 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-2 text-left">
                  <span className="text-xs font-black text-slate-900 dark:text-white block">{person.name}</span>
                  <span className="text-[10px] text-brand-purple font-bold block uppercase tracking-wider">{person.role}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5 leading-snug">{person.dept}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathon Achievements Spotlight */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Trophy className="w-3.5 h-3.5" /> Innovation Success</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              National Hackathon & Ideation Spotlight
            </h2>
            <p className="text-xs text-slate-400">
              Celebrating our students representing the institution in prestigious regional and national challenges:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {achievements.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-slate-100 dark:border-slate-800/80 pb-2.5">
                    <span className="text-[9px] font-black text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-sans">{item.status}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">{item.team}</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-display leading-tight">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
