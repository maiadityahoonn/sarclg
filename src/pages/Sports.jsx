import { Trophy, ShieldCheck, HeartPulse, Sparkles, CheckCircle2, ChevronRight, Activity, Users, Flame, Calendar, Clock } from 'lucide-react';

export default function Sports() {
  const sports = [
    {
      title: "Volleyball & Basketball Courts",
      desc: "Full-sized outdoor courts with secure fencing and professional lighting grids, letting students practice in the evenings.",
      icon: Activity,
      type: "Outdoor Sports"
    },
    {
      title: "Cricket & Football Field",
      desc: "Well-maintained green turf playground suitable for hosting inter-college tournaments and local athletic meets.",
      icon: Trophy,
      type: "Outdoor Field"
    },
    {
      title: "Indoor Recreation Lounge",
      desc: "Comfortable common rooms equipped with high-quality Table Tennis tables, Chess boards, Carrom boards, and yoga mats.",
      icon: Users,
      type: "Indoor Games"
    },
    {
      title: "Fitness & Gymnasium",
      desc: "Dedicated fitness area with standard dumbbells, cardiovascular treadmills, and exercise cycles for student health workouts.",
      icon: HeartPulse,
      type: "Gym & Fitness"
    }
  ];

  const guidelines = [
    "Sports equipment can be issued from the physical education room using student ID cards.",
    "First-aid kits, recovery ice packs, and transport facilities are fully stocked for field injuries.",
    "Inter-departmental tournaments (Cricket, Carrom, Volleyball) are hosted twice a semester.",
    "Students selected in regional/state tournaments receive sports attendance grace and certificates."
  ];

  const sportsMeetSchedule = [
    { event: "Track & Field Sprints", duration: "Day 01 - Morning", details: "100m, 200m, and 4x100m relays for BBA & BCA cohorts." },
    { event: "Inter-Department Volleyball", duration: "Day 01 - Afternoon", details: "Knockout matches leading to final faceoff under floodlights." },
    { event: "Carrom & Chess Sprints", duration: "Day 02 - Morning", details: "Indoor intelligence board games hosted in common lounge." },
    { event: "Inter-College Cricket Final", duration: "Day 02 - Afternoon", details: "Annual final clash between SV Patna and regional B-school teams." },
    { event: "Awards & Closing Ceremony", duration: "Day 02 - Evening", details: "Presentation of winner medals, athlete of the year, and trophies." }
  ];

  const sportsAchievements = [
    { title: "Patna B-School Cricket Cup", desc: "Our Cricket team won the gold trophy in the annual district B-school cricket league.", year: "2025" },
    { title: "State Level Chess Runner-Up", desc: "BCA final-year student secured 2nd place in the Bihar State Under-25 Chess Meet.", year: "2025" },
    { title: "Regional Volleyball Shield", desc: "SV Volleyball team successfully defended the regional championship shield.", year: "2024" }
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen relative text-slate-800 dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-20">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center">
            <span className="section-tagline"><Activity className="w-3.5 h-3.5 animate-pulse" /> Sports & Fitness</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Sports & Athletic Facilities
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Encouraging physical fitness, team spirit, and competitive achievements in regional sports meets.
          </p>
        </div>

        {/* Overview Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              A Healthy Mind in a Healthy Body
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
              At Sarvadnya Vidyapeeth, we place high emphasis on physical fitness and athletic recreation. Our campus is equipped with outdoor fields, dedicated courts, and indoor recreation zones where students unwind and build cooperative team bonds.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              We host the Annual Sports Meet every winter, bringing together student cohorts from BBA and BCA classes to compete for trophies in track events, outdoor field sports, and indoor board games.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex-1">
                <span className="text-brand-gold text-2xl font-extrabold block">5+ Facilities</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Playground Areas</span>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex-1">
                <span className="text-brand-purple dark:text-brand-purple-light text-2xl font-extrabold block">Annual</span>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Inter-College Sports Meet</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="w-full h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/85 relative group">
              <img 
                src="/images/sports_facilities.png" 
                alt="SV College Sports Fields" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white text-left">
                <span className="bg-brand-gold text-brand-navy text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider block w-fit mb-2">
                  Campus Playground
                </span>
                <h4 className="font-black text-xl font-display">SV Sports Arena</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Stunning athletic court area supporting volleyball, basketball, and student fitness sprints.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Sports Categories Cards */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Flame className="w-3.5 h-3.5" /> Outdoor & Indoor</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Dedicated Sports Amenities
            </h2>
            <p className="text-xs text-slate-400">
              Check out the active indoor recreation rooms and outdoor fields available to hostellers and day-scholars:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {sports.map((sp, idx) => {
              const IconComponent = sp.icon;
              return (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex gap-4 items-start hover:shadow-md transition-all">
                  <span className="p-3 bg-brand-purple/5 text-brand-purple dark:bg-brand-purple/10 dark:text-brand-purple-light rounded-xl border border-brand-purple/10 shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </span>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2 flex-wrap">
                      <h3 className="font-extrabold text-slate-900 dark:text-white text-base leading-tight font-display">{sp.title}</h3>
                      <span className="bg-slate-50 dark:bg-slate-850/60 border border-slate-150 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider shrink-0 font-sans">
                        {sp.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                      {sp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Annual Sports Meet Timeline */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Calendar className="w-3.5 h-3.5" /> Annual Meet</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Annual Winter Sports Meet Schedule
            </h2>
            <p className="text-xs text-slate-400">
              The 2-day timeline of events held during our annual inter-departmental athletic fest:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pt-2">
            {sportsMeetSchedule.map((sched, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="bg-brand-purple/10 text-brand-purple dark:text-brand-purple-light text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider inline-block font-sans">
                    {sched.duration}
                  </span>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-display">{sched.event}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {sched.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sports Achievements Cabinet */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Trophy className="w-3.5 h-3.5 animate-pulse" /> Trophy Cabinet</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Inter-College Sports Achievements
            </h2>
            <p className="text-xs text-slate-400">
              Recent medals and championship trophies secured by our college athletic cohorts:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {sportsAchievements.map((ach, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow relative text-left">
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-slate-100 dark:border-slate-800/80 pb-2.5">
                    <span className="text-[9px] font-black text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-sans">{ach.year}</span>
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

        {/* Guidelines and Support desk */}
        <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm space-y-5 text-left">
          <h3 className="font-extrabold text-slate-900 dark:text-white text-lg font-display border-b border-slate-200/85 dark:border-slate-800/85 pb-3 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" /> Sports Desk & Athlete Guidelines
          </h3>
          <p className="text-xs text-slate-655 leading-relaxed font-semibold">
            To ensure fair play and safety, all athletes must follow physical education guidelines:
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guidelines.map((item, idx) => (
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
