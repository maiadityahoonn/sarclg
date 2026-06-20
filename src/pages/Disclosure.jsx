import { ShieldCheck, Info, FileSpreadsheet, Scale, HeartHandshake, CalendarRange, GraduationCap, Building, Coins, Users } from 'lucide-react';

export default function Disclosure() {
  const committees = [
    { title: "Anti-Ragging Committee", members: "Dr. K. Prasad (Convener), Prof. R. Sharma, Smt. M. Devi", desc: "Monitors and ensures a strict ragging-free campus environment." },
    { title: "Grievance Redressal Committee", members: "Prof. S. Sinha (Chairman), Smt. A. Singh, Prof. B. Kumar", desc: "Addresses student academic and non-academic grievances within 48 hours." },
    { title: "Internal Complaint Committee (ICC)", members: "Dr. R. Kumari (Presiding Officer), Smt. P. Sen, Smt. K. Devi", desc: "Focuses on gender sensitization and resolving related issues." },
  ];

  const approvedIntakes = [
    { course: "Bachelor of Computer Applications (BCA)", seats: "180 Seats", duration: "3 Years (6 Semesters)", affiliation: "Aryabhatta Knowledge University (Patna)" },
    { course: "Bachelor of Business Administration (BBA)", seats: "120 Seats", duration: "3 Years (6 Semesters)", affiliation: "Aryabhatta Knowledge University (Patna)" }
  ];

  const facultyStats = [
    { metric: "Total Full-Time Faculty", value: "18 Members", details: "All members approved by AICTE & AKU guidelines." },
    { metric: "PhD Holders / Doctorates", value: "4 Faculty", details: "Leading researchers guiding student prototype developments." },
    { metric: "Student-to-Teacher Ratio", value: "1:20 Ratio", details: "Maintains optimal learning engagement and individual attention." }
  ];

  const infraSpecs = [
    { facility: "Smart Classrooms", quantity: "6 Rooms", detail: "Fitted with high-definition digital smartboards and audio systems." },
    { facility: "Advanced Computer Labs", quantity: "2 Labs", detail: "Equipped with 120+ systems running Intel processors and fast internet." },
    { facility: "Reference Library", quantity: "1 Facility", detail: "Holds 10,000+ volumes, subscription journals, and DELNET digital access." },
    { facility: "Seminar & Pitching Hall", quantity: "1 Hall", detail: "Air-conditioned 150-capacity hall for corporate guest lectures and hackathons." }
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen relative text-slate-800 dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex justify-center">
            <span className="section-tagline"><ShieldCheck className="w-3.5 h-3.5 animate-pulse" /> Regulatory Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Mandatory Disclosures
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Published in compliance with the All India Council for Technical Education (AICTE) regulations.
          </p>
        </div>

        {/* Info Blocks */}
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          
          {/* 1. Institutional coordinates */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="p-3 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-2xl h-fit shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div className="space-y-3 w-full">
              <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">1. Institutional Credentials</h3>
              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1.5 leading-relaxed font-semibold">
                <p>• <strong className="text-slate-800 dark:text-white font-bold">Name of the Institution:</strong> SARVADNYA VIDYAPEETH</p>
                <p>• <strong className="text-slate-800 dark:text-white font-bold">Approved Location:</strong> Beur-Betaura Road, Patna – 800002, Bihar, India</p>
                <p>• <strong className="text-slate-800 dark:text-white font-bold">Approved Courses:</strong> Bachelor of Computer Applications (BCA) & Bachelor of Business Administration (BBA)</p>
                <p>• <strong className="text-slate-800 dark:text-white font-bold">Affiliated University:</strong> Aryabhatta Knowledge University (Patna)</p>
              </div>
            </div>
          </div>

          {/* 2. Approved Intake Seat Capacity */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="p-3 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-2xl h-fit shrink-0">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <div className="space-y-4 w-full">
              <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">2. Approved Intake Capacity</h3>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
                Approved student enrollment intake capacity authorized by AICTE for the academic session 2026-27:
              </p>
              <div className="overflow-x-auto border border-slate-100 dark:border-slate-800 rounded-2xl">
                <table className="min-w-full divide-y divide-slate-255 dark:divide-slate-800 text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-900/60 font-black text-slate-700 dark:text-slate-350 uppercase">
                    <tr>
                      <th className="px-4 py-3">Course / Program</th>
                      <th className="px-4 py-3">Intake Limit</th>
                      <th className="px-4 py-3">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-semibold text-slate-600 dark:text-slate-400">
                    {approvedIntakes.map((intake, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/40">
                        <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">{intake.course}</td>
                        <td className="px-4 py-3 text-brand-purple dark:text-brand-purple-light font-extrabold">{intake.seats}</td>
                        <td className="px-4 py-3">{intake.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 3. Faculty & Mentorship Metrics */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="p-3 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-2xl h-fit shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-4 w-full">
              <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">3. Academic Faculty Strength</h3>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
                Maintaining appropriate academic guidelines to deliver premium mentorship and guide student research cells:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {facultyStats.map((stat, idx) => (
                  <div key={idx} className="p-4 bg-slate-50/50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-2xl text-left">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">{stat.metric}</span>
                    <strong className="text-base font-extrabold text-brand-gold-dark dark:text-brand-gold block mt-1">{stat.value}</strong>
                    <p className="text-[9px] text-slate-500 mt-1 leading-snug">{stat.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Campus Infrastructure specs */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="p-3 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-2xl h-fit shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div className="space-y-4 w-full">
              <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">4. Campus Infrastructure & Facilities</h3>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
                Details of instructional land, laboratory setups, and resources provided inside the Patna campus:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {infraSpecs.map((spec, idx) => (
                  <div key={idx} className="p-4 bg-slate-50/30 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-2xl text-left space-y-1">
                    <div className="flex flex-col min-[380px]:flex-row min-[380px]:justify-between min-[380px]:items-center gap-2">
                      <span className="font-bold text-xs text-slate-900 dark:text-white">{spec.facility}</span>
                      <span className="bg-purple-100 dark:bg-purple-950/60 text-brand-purple dark:text-brand-purple-light text-[9px] font-extrabold px-2.5 py-0.5 rounded-full font-sans uppercase">{spec.quantity}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">{spec.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5. Compliance & Welfare Committees */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="p-3 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-2xl h-fit shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div className="space-y-4 w-full">
              <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">5. Compliance & Welfare Committees</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {committees.map((com, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800/60 text-xs">
                    <span className="font-bold text-slate-800 dark:text-white block mb-1">{com.title}</span>
                    <p className="text-[10px] text-slate-400 font-medium mb-2">{com.desc}</p>
                    <span className="block text-[9px] text-brand-gold-dark font-extrabold uppercase">Members:</span>
                    <span className="text-[10px] text-slate-400 leading-normal block">{com.members}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6. Strict Anti-Ragging Policy */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="p-3 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-2xl h-fit shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2.5">
              <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">6. Strict Anti-Ragging Policy</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                Sarvadnya Vidyapeeth enforces a **zero-tolerance policy** against ragging. Any student found engaging in, inciting, or participating in ragging within or outside campus boundaries is subject to immediate suspension, rustication, and filing of official police reports as mandated by the Supreme Court rulings.
              </p>
            </div>
          </div>

          {/* 7. AICTE Fee Refund and Course Withdrawal Policies */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="p-3 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-2xl h-fit shrink-0">
              <Coins className="w-6 h-6" />
            </div>
            <div className="space-y-3 w-full">
              <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">7. Course Withdrawal & Refund Regulations</h3>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
                Refund applications are processed in strict compliance with the AICTE Guidelines on fee refund:
              </p>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 space-y-2 font-semibold">
                <p>• **Before Course Commencement:** 100% refund of tuition and registration fees, subject to a deduction of ₹1,000 processing fee.</p>
                <p>• **After Course Commencement (Seat Filled):** If a student withdraws and the vacated seat is filled by another candidate, the refund is calculated proportionately based on class attendance.</p>
                <p>• **After Course Commencement (Seat Vacant):** No refunds are permissible if a student withdraws and the seat remains vacant for the remainder of the session.</p>
              </div>
            </div>
          </div>

          {/* 8. Academic Calendar */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="p-3 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-2xl h-fit shrink-0">
              <CalendarRange className="w-6 h-6" />
            </div>
            <div className="space-y-3 w-full">
              <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">8. Academic Session Timeline</h3>
              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 font-semibold">
                <p>• Commencement of Odd Semester: August 2026</p>
                <p>• Odd Semester Examinations: December 2026</p>
                <p>• Commencement of Even Semester: January 2027</p>
                <p>• Even Semester Examinations: May 2027</p>
              </div>
            </div>
          </div>

          {/* 9. Right to Information (RTI) Cell Details */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="p-3 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-2xl h-fit shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div className="space-y-3 w-full">
              <h3 className="text-lg font-black text-slate-900 dark:text-white font-display">9. Right to Information (RTI) Cell</h3>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
                In compliance with the Right to Information Act, 2005, the following officers are designated for managing queries:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold pt-1">
                <div className="p-4 bg-slate-50/50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-2xl">
                  <span className="text-[10px] text-brand-gold font-bold uppercase block">Public Information Officer (PIO)</span>
                  <strong className="text-slate-900 dark:text-white block mt-0.5">Mr. R. K. Sinha</strong>
                  <p className="text-[10px] text-slate-400 font-medium mt-1">Assistant Registrar, SV Campus</p>
                  <p className="text-[10px] text-brand-purple mt-0.5">pio@sarvadnyavidyapeeth.edu.in</p>
                </div>
                <div className="p-4 bg-slate-50/50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-2xl">
                  <span className="text-[10px] text-brand-gold font-bold uppercase block">Appellate Authority</span>
                  <strong className="text-slate-900 dark:text-white block mt-0.5">Dr. K. Prasad</strong>
                  <p className="text-[10px] text-slate-400 font-medium mt-1">Director, Sarvadnya Vidyapeeth Patna</p>
                  <p className="text-[10px] text-brand-purple mt-0.5">director@sarvadnyavidyapeeth.edu.in</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
