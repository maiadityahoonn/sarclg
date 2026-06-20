import { Award, CheckCircle2, FileText, Percent, HelpCircle } from 'lucide-react';

export default function Scholarships() {
  const scholarshipSchemes = [
    { title: "SC / ST Welfare Scholarship", value: "15% Fee Waiver", desc: "For students belonging to SC/ST categories. Requires verified caste and income certificate declarations.", icon: Percent },
    { title: "OBC Category Concessions", value: "10% Fee Waiver", desc: "For students from OBC backgrounds. Calculated on semester academic tuition fee totals.", icon: Percent },
    { title: "EWS Scheme Support", value: "Need-Based Aid", desc: "Special fee adjustments and installment structures for Economically Weaker Sections.", icon: Award },
    { title: "Government Assistance Schemes", value: "NSP Coordination", desc: "Assisting students in submitting claims on the National Scholarship Portal (NSP) and state portals.", icon: FileText }
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex justify-center">
            <span className="section-tagline"><Award className="w-3.5 h-3.5 animate-blink" /> Financial Assistance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Scholarships & Financial Support
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Encouraging academic merit and supporting education for students from rural and economically weaker backgrounds.
          </p>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          {scholarshipSchemes.map((sch, idx) => {
            const Icon = sch.icon;
            return (
              <div key={idx} className="glass-card p-6 md:p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/60 flex gap-5 shadow-lg relative overflow-hidden group">
                <div className="p-3 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-2xl h-fit shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-black text-brand-gold-dark dark:text-brand-gold-light uppercase tracking-wider block">
                    {sch.value}
                  </span>
                  <h3 className="text-lg font-black text-slate-905 dark:text-white font-display">
                    {sch.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {sch.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Documentation Guidelines */}
        <div className="max-w-3xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 text-left space-y-6 shadow-sm">
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white font-display flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-purple" /> Documentation Checklist for Scholarships
          </h3>
          <p className="text-xs text-slate-400">To claim category concessions or state benefits, students must submit copies of the following verified certificates:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Valid Category Certificate (Caste Certificate)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Income Certificate issued by CO/BDO office</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Residential Certificate of Bihar</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>10th & 12th Standard marksheets & photographs</span>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <span className="font-bold text-slate-800 dark:text-white block text-sm">Need help submitting applications?</span>
              <span className="text-xs text-slate-400">Visit our student counseling desk during campus hours.</span>
            </div>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-admission-modal'))}
              className="w-full md:w-auto bg-brand-navy hover:bg-brand-navy-light text-white text-center text-xs font-bold px-5 py-3 rounded-xl transition-all shadow dark:bg-brand-purple dark:hover:bg-brand-purple-light"
            >
              Enquire About Scholarships
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

