import { Shield, FlameKindling, Wifi, Utensils, BookOpen, UserCheck, HeartPulse, Tv, Users, Building, ShieldAlert, Clock, Award } from 'lucide-react';

export default function Hostel() {
  const features = [
    { title: "Separate Hostels", desc: "Completely separate buildings for boys and girls to ensure privacy and comfort.", icon: UserCheck },
    { title: "24/7 Security & CCTV", desc: "Around-the-clock security guards and continuous CCTV surveillance across corridors.", icon: Shield },
    { title: "High-Speed WiFi", desc: "Campus-wide fiber internet connection for homework and academic research.", icon: Wifi },
    { title: "Hygienic Mess & Food", desc: "Spacious dining hall providing three nutritious, fresh meals a day with high hygiene checks.", icon: Utensils },
    { title: "Quiet Study Rooms", desc: "Acoustically sound study halls for group discussions and exam preparation.", icon: BookOpen },
    { title: "Medical Assistance", desc: "First-aid kits, on-call doctor, and emergency vehicle transport links to local clinics.", icon: HeartPulse },
    { title: "Housekeeping", desc: "Daily cleaning of corridors, washrooms, and rooms for healthy living.", icon: FlameKindling },
    { title: "Recreation Lounge", desc: "Common lounge area with television, chess, carrom boards, and newspapers.", icon: Tv }
  ];

  const hostelFees = [
    { type: "Triple Sharing (Non-AC)", charge: "₹75,000 / Year", facility: "Standard bed, study desk, shared washroom, high-speed WiFi, mess charges included." },
    { type: "Double Sharing (Non-AC)", charge: "₹85,000 / Year", facility: "Premium twin room layout, personal cupboards, high-speed WiFi, mess charges included." },
    { type: "Double Sharing (AC Room)", charge: "₹1,05,000 / Year", facility: "Air-conditioned premium room, personal study desks, mess charges, and gym access included." }
  ];

  const routineSteps = [
    { time: "07:30 AM – 08:30 AM", title: "Nutritious Breakfast", desc: "Fresh breakfast served at the dining hall (Idli, Dosa, Paratha, Milk, Tea) to prepare for lectures." },
    { time: "09:00 AM – 04:00 PM", title: "Academic Session", desc: "Regular classroom lectures, interactive coding labs, and study projects in main block." },
    { time: "04:30 PM – 06:30 PM", title: "Sports & Recreation", desc: "Access to playground courts, indoor games room, coding club discussions, and gym." },
    { time: "08:00 PM – 09:00 PM", title: "Dinner & Curfew Check", desc: "Curfew roll-call by resident warden, followed by nutritious dinner buffet." },
    { time: "09:00 PM – 11:00 PM", title: "Quiet Study Hours", desc: "Mandatory quiet hours in hostel rooms and study halls for exam preparation." }
  ];

  const conductRules = [
    "Curfew timing is strictly 8:00 PM. No student is allowed to enter or leave the premises past curfew without written warden permission.",
    "Ragging is strictly prohibited. Any student found engaging in ragging activities will face immediate expulsion and legal action.",
    "Outside guests or parents are not permitted in student rooms. They may meet students in the designated visitor lounge.",
    "Electrical appliances (heaters, irons, coolers) are not allowed inside student rooms to prevent power trip hazards."
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen relative text-slate-800 dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-20">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center">
            <span className="section-tagline"><Building className="w-3.5 h-3.5 animate-pulse" /> Residential Facilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Safe & Comfortable Hostels
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A home away from home. Safe, secure, and student-friendly accommodation for boys and girls.
          </p>
        </div>

        {/* Hostel Overview Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text + Cards */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              A Supportive Living Environment
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
              We understand that a comfortable and secure living environment is critical for students to focus on their higher education. Sarvadnya Vidyapeeth provides separate hostels for boys and girls near the campus in Patna. 
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              The hostels are supervised by dedicated resident wardens who maintain discipline, manage facilities, and provide emotional support and guidance to the hostellers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Boys Hostel Summary */}
              <div className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800 text-left shadow-lg">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2">Boys Hostel</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  Dedicated boys hostel block. Monitored entry checks, recreational room, and hygienic food options.
                </p>
                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold px-2.5 py-1 rounded">Warden Supervised</span>
              </div>

              {/* Girls Hostel Summary */}
              <div className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800 text-left shadow-lg">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-2">Girls Hostel</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  Dedicated girls housing block. High surveillance security checks, housekeeping, and study halls.
                </p>
                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold px-2.5 py-1 rounded">24/7 Security</span>
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful Image */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-full h-80 md:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800/80 relative">
              <img 
                src="/images/hostel_room.png" 
                alt="Cozy Hostel Room Accommodation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white text-left">
                <span className="bg-brand-gold text-brand-navy text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-2">
                  Student Life Facilities
                </span>
                <h4 className="font-black text-lg font-display">Clean & Cozy Twin Sharing Rooms</h4>
                <p className="text-[10px] text-slate-300 mt-1 leading-relaxed">
                  Furnished with modern study desks, comfortable beds, personal wardrobe units, and bright ambient lighting.
                </p>
              </div>
            </div>

            <div className="p-5 bg-purple-50/50 dark:bg-purple-950/10 rounded-2xl border border-purple-100 dark:border-slate-800 text-left">
              <div className="flex justify-start mb-2">
                <span className="section-tagline"><UserCheck className="w-3.5 h-3.5" /> Hostel Allotment</span>
              </div>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
                Hostel rooms are allotted on a first-come, first-served basis at the time of admission confirmation. Standard options include twin-sharing and triple-sharing rooms.
              </p>
            </div>
          </div>

        </div>

        {/* Features list */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Hostel Facilities & Amenities
            </h2>
            <p className="text-xs text-slate-400">
              High-quality utilities provided to all campus hostellers:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 p-6 rounded-2xl text-left hover:-translate-y-1 transition-all duration-300">
                  <div className="p-2.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-brand-purple w-fit rounded-xl mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hostel Fee Structure */}
        <div className="space-y-8 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Award className="w-3.5 h-3.5" /> Hostel Charges</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Annual Hostel Fee Structure
            </h2>
            <p className="text-xs text-slate-400">
              Transparent lodging and boarding fees for the academic session 2026-27:
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-850 bg-white dark:bg-slate-900 shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-150 dark:border-slate-800 text-slate-850 dark:text-white font-bold font-display uppercase tracking-wider">
                    <th className="p-5">Room Type</th>
                    <th className="p-5">Annual Charges</th>
                    <th className="p-5">Facilities Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-semibold text-slate-650 dark:text-slate-400">
                  {hostelFees.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/25 transition-colors">
                      <td className="p-5 text-slate-900 dark:text-white font-black">{fee.type}</td>
                      <td className="p-5 text-brand-purple dark:text-brand-purple-light font-bold">{fee.charge}</td>
                      <td className="p-5 leading-relaxed">{fee.facility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Daily routine timeline */}
        <div className="space-y-10 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="section-tagline"><Clock className="w-3.5 h-3.5" /> Hostel Timeline</span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Standard Daily Resident Routine
            </h2>
            <p className="text-xs text-slate-400">
              The structure of a typical day in the life of a resident student at our hostel:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pt-2">
            {routineSteps.map((step, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="bg-brand-purple/10 text-brand-purple dark:text-brand-purple-light text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider inline-block font-sans">
                    {step.time}
                  </span>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-display">{step.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code of Conduct & Rules */}
        <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm space-y-5 text-left">
          <h3 className="font-extrabold text-slate-900 dark:text-white text-lg font-display border-b border-slate-200/85 dark:border-slate-800/85 pb-3 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-500" /> Hostel Rules & Code of Conduct
          </h3>
          <p className="text-xs text-slate-650 leading-relaxed font-semibold">
            To ensure a safe and disciplined residential campus, all hostellers must strictly abide by these rules:
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conductRules.map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <ShieldAlert className="w-4.5 h-4.5 text-red-550 shrink-0 mt-0.5" />
                <span className="text-xs font-bold text-slate-650 dark:text-slate-350 leading-relaxed">
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
