import { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, X, BookOpen } from 'lucide-react';

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "Why BCA is the Best Career Path in 2026",
      category: "Career Guidance",
      date: "June 12, 2026",
      author: "Tech Advisor",
      readTime: "4 min read",
      image: "/images/bca_cover.png",
      summary: "With the rise of artificial intelligence, cloud technologies, and mobile development, computer application graduates are in higher demand than ever. Learn why choosing BCA sets you up for rapid career growth.",
      content: "The technological landscape in 2026 has evolved dramatically. Modern enterprises are looking for specialists who don't just understand code, but can manage full-stack deployments, database security, and cloud architectures. A Bachelor of Computer Applications (BCA) at Sarvadnya Vidyapeeth Patna provides a comprehensive foundation covering C++, Python, Java, and Database systems. Combined with the Institution Innovation Council (IIC) support, students get exposed to startup environments early. Career prospects range from software developers to cloud administrators, making it one of the most lucrative undergraduate paths."
    },
    {
      id: 2,
      title: "Understanding Bihar Student Credit Card Scheme",
      category: "Admission Updates",
      date: "June 10, 2026",
      author: "Admissions Office",
      readTime: "6 min read",
      image: "/images/credit_card_drcc.png",
      summary: "A complete step-by-step guide explaining how students in Bihar can avail zero-interest education loans under the MNSSBY government program to complete BBA/BCA.",
      content: "The Bihar Student Credit Card Scheme (BSCCS) is a transformative initiative by the Government of Bihar under the MNSSBY program. It provides collateral-free educational loans up to Rs. 4 Lakhs for students wishing to pursue higher courses like BCA and BBA. Many eligible students miss this opportunity due to confusion surrounding documentation. At Sarvadnya Vidyapeeth, we generate the required bonafide structures instantly and guide you through DRCC coordinates. The repayment period starts only after course completion and a grace period, making education truly accessible."
    },
    {
      id: 3,
      title: "Top Management Skills You Learn in BBA",
      category: "Business Articles",
      date: "June 05, 2026",
      author: "Management Faculty",
      readTime: "5 min read",
      image: "/images/bba_cover.png",
      summary: "Explore the core pillars of business administration: marketing strategies, finance structures, human resource management, and entrepreneurial leadership.",
      content: "A Bachelor of Business Administration (BBA) is designed to create future managers and entrepreneurs. Unlike theoretical courses, BBA focuses heavily on case studies, presentations, and team building. Key modules like principles of management, corporate finance, marketing strategies, and human resources prepare students for immediate entry-level corporate positions. Furthermore, the promotion of startup ideas through our Innovation Council helps students build real-world leadership qualities."
    },
    {
      id: 4,
      title: "How to Prepare for Software Placement Interviews",
      category: "Placement News",
      date: "May 28, 2026",
      author: "Placement Officer",
      readTime: "5 min read",
      image: "/images/placement_celebration.png",
      summary: "Tips and strategies from our Career Cell coordinator on cracking technical coding rounds and HR mock interviews successfully.",
      content: "Placements require a combination of technical command and soft skills. For IT placements, a strong grip on DBMS, data structures, and Python/Java is mandatory. However, many candidates fail during the final HR interview rounds due to communication blockages. Our Career Relations Cell organizes regular mock interviews, resume critique workshops, and personality development sessions to prepare students. We also coordinate international opportunities in Gulf countries like UAE and Qatar, helping final-year candidates prepare documentation correctly."
    },
    {
      id: 5,
      title: "IPR & Patent Filing: A Student's Guide",
      category: "Research & Innovation",
      date: "May 20, 2026",
      author: "R&D Coordinator",
      readTime: "5 min read",
      image: "/images/innovation_lab.png",
      summary: "Curious about patents and intellectual property? Discover how SV's R&D Cell assists students in drafting, filing, and funding patent applications.",
      content: "Intellectual Property Rights (IPR) are key in technology and business programs. At Sarvadnya Vidyapeeth Patna, the MoE Institution Innovation Council (IIC) provides a direct guidance pipeline. We help student developers conduct novelty search operations on patent registries, draft legal claim descriptions, and reimburse government application fees up to ₹50,000 for verified prototypes. Getting a patent indexed as an undergraduate student sets you apart for tech leadership roles globally."
    },
    {
      id: 6,
      title: "Clubs & NSS: Shaping Leadership",
      category: "Campus Life",
      date: "May 15, 2026",
      author: "Student Welfare Dean",
      readTime: "4 min read",
      image: "/images/smart_classroom.png",
      summary: "Why joining student clubs (like CodeX, Synergy) and participating in NSS community service shapes successful corporate leadership personalities.",
      content: "Companies hiring BBA and BCA students do not look at GPA scores alone; they seek leadership, team skills, and high emotional quotients. Extracurricular cells (such as CodeX Programming Club or Synergy Management Club) let students manage fests budget logs and lead peer teams. Furthermore, volunteering with the National Service Scheme (NSS) cell in local Patna health camps instills empathy and civic responsibilities. Balancing academic courses with club activities is the key to corporate preparation."
    },
    {
      id: 7,
      title: "Campus Fitness: Why Sports Matter in College",
      category: "Sports & Health",
      date: "May 10, 2026",
      author: "Physical Education Coach",
      readTime: "4 min read",
      image: "/images/sports_facilities.png",
      summary: "A review of sports amenities, the Annual Winter Sports Meet structure, and the mental wellness benefit of daily athletic routines.",
      content: "Maintaining physical fitness is crucial to study focus. Sarvadnya Vidyapeeth Patna provides access to outdoor courts, green turf grounds, indoor board games lounge, and gymnasium equipment. Regular participation in team games like volleyball and cricket improves resilience under pressure. Our Annual Sports Meet gives student teams a platform to represent the college. Daily workouts and sports participation are highly encouraged to support cognitive health and relief stress."
    }
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen relative text-slate-800 dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-12">

        {/* Intro Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex justify-center">
            <span className="section-tagline"><BookOpen className="w-3.5 h-3.5 animate-pulse" /> News & Press Room</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Blogs & Career Updates
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Read articles on computer sciences, business management strategies, admission deadlines, and placement advice.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 text-left max-w-6xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="glass-card rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 bg-white dark:bg-slate-900"
            >
              <div>
                {/* Blog thumbnail */}
                <div className="w-full h-48 overflow-hidden relative border-b border-slate-100 dark:border-slate-800/50">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-brand-purple/90 backdrop-blur-sm text-white font-bold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>

                <div className="p-4 sm:p-6 md:p-8 space-y-4">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white font-display leading-snug group-hover:text-brand-purple-light transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {blog.summary}
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800/60 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {blog.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {blog.author}</span>
                </div>

                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="w-full sm:w-auto text-center text-brand-purple dark:text-brand-purple-light hover:text-slate-950 dark:hover:text-white font-extrabold flex items-center justify-center gap-1 transition-colors"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Read Blog Modal Popup */}
        {selectedBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            <div className="absolute inset-0 bg-slate-900/65 backdrop-blur-sm" onClick={() => setSelectedBlog(null)}></div>
            <div className="relative w-full max-w-2xl bg-white dark:bg-brand-navy-light rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-800 overflow-hidden text-left animate-in zoom-in-95 duration-200 max-h-[calc(100dvh-1.5rem)] sm:max-h-[85vh] flex flex-col">

              {/* Header with Cover Image */}
              <div className="w-full h-48 md:h-56 overflow-hidden relative">
                <img
                  src={selectedBlog.image}
                  alt={selectedBlog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-black/45 hover:bg-black/60 transition-colors text-white"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 text-white text-left">
                  <span className="bg-brand-gold text-brand-navy font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full block w-fit mb-2 animate-pulse-subtle">
                    {selectedBlog.category}
                  </span>
                  <h3 className="font-extrabold text-base md:text-lg font-display leading-tight">{selectedBlog.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-3 font-bold">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedBlog.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> By {selectedBlog.author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedBlog.readTime}</span>
                </div>

                <p className="font-bold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                  {selectedBlog.summary}
                </p>

                <p className="whitespace-pre-line text-xs md:text-sm">
                  {selectedBlog.content}
                </p>
              </div>

              {/* Footer */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="w-full sm:w-auto bg-brand-navy dark:bg-brand-purple text-white text-center text-xs font-bold px-5 py-2.5 rounded-xl transition-all"
                >
                  Close Article
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
