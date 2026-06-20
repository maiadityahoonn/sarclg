import { Calendar, Music, Cpu, Users, Award, Sparkles, CheckCircle2, ChevronRight, BookOpen, Quote, HelpCircle } from 'lucide-react';

export default function Events() {
  const events = [
    {
      title: 'Annual Cultural Fest "Aura"',
      desc: "Our flagship 3-day cultural event. Features state-level dancing contests, music bands performances, fashion shows, street plays (Nukkad Natak), and fine arts exhibitions.",
      icon: Music,
      timeline: "Held annually in February"
    },
    {
      title: 'Tech Fest "Technovation"',
      desc: "A competitive platform for computer application students. Includes 24-hour coding hackathons, IT quizzes, system troubleshooting rounds, and UI design sprints.",
      icon: Cpu,
      timeline: "Held annually in October"
    },
    {
      title: 'National Seminars & Webinars',
      desc: "Inviting distinguished scientists, professors from premier institutes (like IITs/NITs), and corporate directors to present research on emerging technologies.",
      icon: BookOpen,
      timeline: "Monthly Academic Calendar"
    },
    {
      title: 'Skills Development Workshops',
      desc: "Short hands-on training bootcamps focused on cloud deployments, full-stack framework setups, digital marketing strategies, and resume tailoring.",
      icon: Award,
      timeline: "Bi-weekly Weekend Tracks"
    }
  ];

  const milestones = [
    { year: "2026", event: "National Level Hackathon", desc: "Successfully hosted 15+ engineering and computer application college teams for a 36-hour code sprint." },
    { year: "2025", event: "Corporate Conclave 2.0", desc: "Invited HR directors from Wipro, ICICI Bank, and Genpact to discuss hiring outlooks in Eastern India." },
    { year: "2024", event: "Establishment of MoE IIC", desc: "Inaugural launch of our Institution Innovation Council hub with startup awareness fests." }
  ];

  const testimonials = [
    {
      name: "Amit Sen",
      course: "BCA (Batch 2023-26)",
      quote: "Organizing Technovation 2025 taught me how to manage deadlines, direct technical teams, and coordinate with corporate sponsors. It is a fantastic leadership incubator.",
      role: "Lead Student Coordinator"
    },
    {
      name: "Riya Verma",
      role: "Cultural Secretary",
      course: "BBA (Batch 2024-27)",
      quote: "Designing the decorations and scheduling performance slots for Aura Fest built my communication and event marketing skills tremendously."
    }
  ];

  const committees = [
    { name: "Cultural Committee", scope: "Overseeing Aura Fest, annual fests, street plays, dance and music auditions, and stage coordination." },
    { name: "Technical Committee", scope: "Directing Technovation, weekend coding sprints, web design hackathons, and lab installations." },
    { name: "Outreach & Press Cell", scope: "Coordinating guest invitations, drafting press releases, public announcements, and social media coverage." }
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen relative text-slate-800 dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-20">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center">
            <span className="section-tagline"><Calendar className="w-3.5 h-3.5 animate-pulse" /> Campus Life Events</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Events, Fests & Seminars
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Fostering creative expressions, technology challenges, and corporate networking drives.
          </p>
        </div>

        {/* Overview Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              A Vibrant Calendar of Opportunities
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
              At Sarvadnya Vidyapeeth, we believe education extends far beyond textbooks. Our vibrant campus life is packed with cultural fests, technology symposiums, and national seminars designed to nurture student talent and build leadership skills.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Students actively participate in organizing these events under faculty guidance, gaining hands-on management experience, budget coordination, and public speaking confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex-1">
                <span className="text-brand-gold text-2xl font-extrabold block">25+</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Annual Events</span>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex-1">
                <span className="text-brand-purple dark:text-brand-purple-light text-2xl font-extrabold block">1500+</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Student Attendees</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/85 relative group">
              <img 
                src="/images/seminar_hall.png" 
                alt="SV Seminar Hall Events" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white text-left">
                <span className="bg-brand-gold text-brand-navy text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider block w-fit mb-2">
                  Campus Venue
                </span>
                <h4 className="font-black text-xl font-display">SV Seminar & Conclave Hall</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Host to guest lectures, design reviews, cultural fests, and certificate ceremonies.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Events Categories Cards */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Sparkles className="w-3.5 h-3.5" /> Event Categories</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Core Event Classifications
            </h2>
            <p className="text-xs text-slate-400">
              Explore the diverse range of events organized by our student committees:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {events.map((ev, idx) => {
              const IconComponent = ev.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex gap-4 items-start hover:shadow-md transition-all">
                  <span className="p-3 bg-brand-purple/5 text-brand-purple dark:bg-brand-purple/10 dark:text-brand-purple-light rounded-xl border border-brand-purple/10 shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </span>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2 flex-wrap">
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base leading-tight font-display">{ev.title}</h3>
                      <span className="bg-slate-50 dark:bg-slate-850/60 border border-slate-150 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider shrink-0 font-sans">
                        {ev.timeline}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                      {ev.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestone Timeline */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Award className="w-3.5 h-3.5" /> Event Milestones</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Recent Event Highlights & Milestones
            </h2>
            <p className="text-xs text-slate-400">
              A brief review of key fests and conclaves successfully executed at our campus:
            </p>
          </div>

          <div className="max-w-3xl mx-auto border-l-2 border-brand-purple-light/20 pl-6 space-y-8 pt-2">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative space-y-1.5 text-left pl-4">
                <span className="absolute -left-[35px] top-1.5 bg-brand-purple text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-950">
                  {idx + 1}
                </span>
                <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider">{m.year} • {m.event}</span>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm leading-tight font-display">{m.event}</h3>
                <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Student Organizing Committees */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Users className="w-3.5 h-3.5" /> Event Execution</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Student Organizing Committees
            </h2>
            <p className="text-xs text-slate-400">
              The driving forces responsible for planning, promoting, and executing campus activities:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {committees.map((comm, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/85 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-display leading-tight">{comm.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {comm.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Quote className="w-3.5 h-3.5" /> Experience Logs</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Student Fest Testimonials
            </h2>
            <p className="text-xs text-slate-400">
              Hear what our coordinators say about managing regional cultural fests and IT hackathons:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow text-left">
                <p className="text-xs italic text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  "{test.quote}"
                </p>
                <div className="border-t border-slate-100 dark:border-slate-800 pt-3">
                  <span className="text-xs font-black text-slate-900 dark:text-white block">{test.name}</span>
                  <span className="text-[10px] text-brand-purple font-bold block uppercase tracking-wider">{test.role}</span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">{test.course}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Registration Guidelines */}
        <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm space-y-5 text-left">
          <h3 className="font-extrabold text-slate-900 dark:text-white text-lg font-display border-b border-slate-200/85 dark:border-slate-800/85 pb-3 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-brand-purple" /> Event Delegate & Volunteer Registration Guidelines
          </h3>
          <p className="text-xs text-slate-650 leading-relaxed font-semibold font-sans">
            How students can participate or volunteer in college events:
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <li className="flex gap-2">
              <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 shrink-0" />
              <div>
                <span className="font-black text-slate-850 dark:text-white">Sign up as a Volunteer</span>
                <p className="text-[10px] text-slate-400 mt-0.5">Audition with committee leads one month prior to fest launches.</p>
              </div>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 shrink-0" />
              <div>
                <span className="font-black text-slate-850 dark:text-white">Register as Delegate</span>
                <p className="text-[10px] text-slate-400 mt-0.5">Submit abstracts or hackathon team sheets to the technical coordinator desk.</p>
              </div>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 shrink-0" />
              <div>
                <span className="font-black text-slate-850 dark:text-white">Certificate Issuance</span>
                <p className="text-[10px] text-slate-400 mt-0.5">Collect digital and paper certificates from R&D Block Office Room 204.</p>
              </div>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="w-5.5 h-5.5 text-emerald-500 shrink-0" />
              <div>
                <span className="font-black text-slate-850 dark:text-white">External Competitions</span>
                <p className="text-[10px] text-slate-400 mt-0.5">Request sponsorships or travel allowance sheets for outstation events.</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
