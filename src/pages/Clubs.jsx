import { Users, Heart, Cpu, Landmark, Sparkles, CheckCircle2, Award, Zap, Compass, TreePine, Clock, Calendar } from 'lucide-react';

export default function Clubs() {
  const clubs = [
    {
      title: "CodeX Coding Club",
      desc: "Nurturing programmers and developer mindsets. Organizes weekly coding contests, algorithm seminars, web development sprints, and open-source project building.",
      icon: Cpu,
      lead: "BCA Student Committee"
    },
    {
      title: "Synergy Management Club",
      desc: "Developing leadership and administrative acumen. Hosts business case-study sprints, marketing campaign simulations, stock trading fests, and entrepreneurship talks.",
      icon: Compass,
      lead: "BBA Student Committee"
    },
    {
      title: "NSS & Community Services",
      desc: "Cultivating civic responsibility. Engages students in blood donation camps, local Bihar village literacy programs, relief campaigns, and digital financial literacy drives.",
      icon: Heart,
      lead: "National Service Scheme Cell"
    },
    {
      title: "Eco-Guardians Green Club",
      desc: "Leading carbon-neutral campus policies. Focuses on tree plantation fests, paper recycling drives, campus plastic-free checks, and green IT awareness workshops.",
      icon: TreePine,
      lead: "Environmental Committee"
    },
    {
      title: "Pratibha Drama & Cultural Club",
      desc: "Fostering creative performing arts. Organizes college bands, street theatre (Nukkad Natak), folk dance celebrations, and coordinates fests decoration.",
      icon: Sparkles,
      lead: "Cultural Committee"
    },
    {
      title: "Literati Debating & Book Club",
      desc: "Polishing public speaking and logical reasoning. Conducts weekly Mock Parliaments, English writing contests, book discussions, and group speaking drills.",
      icon: Landmark,
      lead: "Literary Committee"
    }
  ];

  const benefits = [
    "Earn Official Club Certificates to enhance your professional corporate resume.",
    "NSS volunteers gain special social outreach credits valuable in governmental/higher studies.",
    "Develop real-world leadership, project budget management, and communication skills.",
    "Participate in state and national level college club meets representing SV Patna."
  ];

  const enrollmentSteps = [
    { step: "Step 01", title: "Club Induction Session", desc: "Attend the introductory presentations held during the first-year induction week describing club scopes." },
    { step: "Step 02", title: "Online Registration", desc: "Submit your choice form specifying up to two clubs you are interested in joining." },
    { step: "Step 03", title: "Interaction & Interview", desc: "Short conversational interview with student coordinators to map your interests and assign roles." },
    { step: "Step 04", title: "Active Project Allocation", desc: "Get allocated to ongoing tasks, NSS campaigns, code repositories, or event drafts." }
  ];

  const weeklySchedule = [
    { day: "Monday", time: "03:30 PM - 05:00 PM", club: "Synergy Management Club", agenda: "Business case studies & market strategy sprints" },
    { day: "Wednesday", time: "03:30 PM - 05:00 PM", club: "CodeX Coding Club", agenda: "Data structure algorithms & HackerRank coding challenges" },
    { day: "Friday", time: "02:00 PM - 04:30 PM", club: "NSS & Social Outreach", agenda: "Local village literacy camp planning & blood drive organization" },
    { day: "Saturday", time: "11:00 AM - 01:00 PM", club: "Literati Debating Club", agenda: "Mock Parliament sessions & public speaking exercises" }
  ];

  const clubAchievements = [
    { title: "NSS Excellence Award 2025", desc: "Awarded special citation by local Patna administrative board for organizing 12 blood donation drives.", category: "Social Welfare" },
    { title: "Smart Green Campus Rating", desc: "Eco-Guardians club plantation drive resulted in a 40% increase in campus canopy cover.", category: "Environment" },
    { title: "IT Hackathon Win", desc: "CodeX developers won the state-level coding sprint hosted at IIT Patna.", category: "Technology" }
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen relative text-slate-800 dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-20">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center">
            <span className="section-tagline"><Users className="w-3.5 h-3.5 animate-pulse" /> Student Activities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Student Clubs & Community Services
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Nurturing leadership, collaborative team spirit, technical skills, and social civic values.
          </p>
        </div>

        {/* Overview Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Grow, Lead, and Give Back
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
              Extracurricular activities play a vital role in building well-rounded personalities. At Sarvadnya Vidyapeeth, student clubs provide an energetic playground for students to explore their programming potential, business acumen, and creative hobbies.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Equally important is our commitment to social welfare. Through our active National Service Scheme (NSS) cell and community outreach programs, students regularly participate in rural welfare, blood donation camps, and green campus plantation drives to serve society.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex-1">
                <span className="text-brand-gold text-2xl font-extrabold block">6 Active</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Student Clubs</span>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-850 flex-1">
                <span className="text-brand-purple dark:text-brand-purple-light text-2xl font-extrabold block">NSS Hub</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Community Outreach</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/85 relative group">
              <img 
                src="/images/smart_classroom.png" 
                alt="SV Clubs Student Collaborations" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white text-left">
                <span className="bg-brand-gold text-brand-navy text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider block w-fit mb-2">
                  Student Lounge
                </span>
                <h4 className="font-black text-xl font-display">Collaborative Workspace</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Where club coordinators gather to coordinate hackathons, NSS drives, and cultural fests schedules.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Clubs Grid List */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Zap className="w-3.5 h-3.5" /> Club List</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Student Club Directory
            </h2>
            <p className="text-xs text-slate-400">
              Join one or more clubs to explore your potential and serve the community:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {clubs.map((club, idx) => {
              const IconComponent = club.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow">
                  <div className="space-y-3">
                    <div className="flex gap-3 items-center">
                      <span className="p-2 bg-brand-purple/5 text-brand-purple dark:bg-brand-purple/10 dark:text-brand-purple-light rounded-xl border border-brand-purple/10 shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </span>
                      <div className="text-left">
                        <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-display leading-tight">{club.title}</h3>
                        <span className="text-[9px] text-brand-gold font-bold uppercase tracking-wider block mt-0.5">{club.lead}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold text-left">
                      {club.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Club Enrollment Roadmap */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Clock className="w-3.5 h-3.5" /> Joining Process</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Club Enrollment Onboarding Steps
            </h2>
            <p className="text-xs text-slate-400">
              How students can join and volunteer for active student committees:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {enrollmentSteps.map((step, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between space-y-4">
                <div className="absolute top-4 right-4 text-slate-100 dark:text-slate-800/40 text-4xl font-black font-display pointer-events-none select-none">
                  {idx + 1}
                </div>
                <div className="space-y-2 relative z-10">
                  <span className="bg-brand-purple/10 text-brand-purple dark:text-brand-purple-light text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider inline-block font-sans">
                    {step.step}
                  </span>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-display">{step.title}</h3>
                  <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Club Weekly Activity Schedule */}
        <div className="space-y-8 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Calendar className="w-3.5 h-3.5 animate-pulse" /> Club Timings</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Weekly Activity Calendar
            </h2>
            <p className="text-xs text-slate-400">
              Standard time slots allocated for weekly brainstorming sessions and events:
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-850 bg-white dark:bg-slate-900 shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-150 dark:border-slate-800 text-slate-850 dark:text-white font-bold font-display uppercase tracking-wider">
                    <th className="p-5">Weekday</th>
                    <th className="p-5">Time Slot</th>
                    <th className="p-5">Student Club</th>
                    <th className="p-5">Focus Agenda</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-semibold text-slate-650 dark:text-slate-400">
                  {weeklySchedule.map((sched, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/25 transition-colors">
                      <td className="p-5 text-slate-900 dark:text-white font-black">{sched.day}</td>
                      <td className="p-5 text-brand-purple dark:text-brand-purple-light font-bold">{sched.time}</td>
                      <td className="p-5 text-slate-850 dark:text-slate-300 font-bold">{sched.club}</td>
                      <td className="p-5 leading-relaxed">{sched.agenda}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Club Achievements */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Award className="w-3.5 h-3.5" /> Club Records</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Club Milestones & Achievements
            </h2>
            <p className="text-xs text-slate-400">
              Recent trophies and recognition certificates secured by student activity committees:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {clubAchievements.map((ach, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow relative">
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-slate-100 dark:border-slate-800/80 pb-2.5">
                    <span className="text-[9px] font-black text-brand-purple bg-brand-purple/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-sans">{ach.category}</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-display leading-tight">{ach.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {ach.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits & Social Service desk */}
        <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm space-y-5 text-left">
          <h3 className="font-extrabold text-slate-900 dark:text-white text-lg font-display border-b border-slate-200/85 dark:border-slate-800/85 pb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-brand-gold" /> Why Participate in Clubs & NSS?
          </h3>
          <p className="text-xs text-slate-655 leading-relaxed font-semibold">
            Being an active participant in extracurricular cells provides critical learning and career benefits:
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs font-bold text-slate-655 dark:text-slate-350 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
