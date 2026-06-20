import { BookOpen, ShieldCheck, HeartHandshake, Lightbulb, Users, Cpu, Milestone, CheckCircle } from 'lucide-react';

export default function About() {
  const values = [
    { title: "Quality Education", desc: "Commitment to academic excellence with customized modules and regular test series.", icon: BookOpen },
    { title: "Affordable Fees", desc: "Making professional degrees accessible to students from economically weaker backgrounds.", icon: HeartHandshake },
    { title: "Innovation Culture", desc: "Established Ministry of Education IIC to foster creativity, hackathons, and startup design.", icon: Lightbulb },
    { title: "Career Orientation", desc: "Focus on resume-building, mock interviews, and 100% placement coordination.", icon: ShieldCheck },
  ];

  const infrastructure = [
    { name: "Smart Classrooms", desc: "Audio-visual teaching systems with digital projectors and high-speed WiFi connections." },
    { name: "High-Tech Computer Labs", desc: "Latest PCs loaded with modern compiler suites (C, Python, Java, DBMS tools) for practical experiments." },
    { name: "Academic Library", desc: "Thousands of reference texts, business case journals, and national research papers accessible digitally and physically." },
    { name: "Seminar & Conference Hall", desc: "Acoustically treated auditoriums with audio-mic systems to support guest presentations and panels." },
    { name: "Innovation Council Room", desc: "Dedicated spaces with whiteboard brainstorm corners for startup prototyping and idea pitching." },
    { name: "Student Advisory Cell", desc: "Interactive student desk to support credit card document submissions and scholarship applications." },
  ];

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-16">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="flex justify-center">
            <span className="section-tagline"><Users className="w-3.5 h-3.5 animate-blink" /> Who We Are</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            About Sarvadnya Vidyapeeth
          </h1>
          <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <div className="space-y-4 text-sm md:text-base text-slate-650 dark:text-slate-400 leading-relaxed">
            <p className="font-semibold text-brand-purple dark:text-brand-purple-light text-center">
              सर्वज्ञ विद्यापीठ • BEUR - BETAURA ROAD, PATNA – 800002 • Affiliated to Aryabhatta University
            </p>
            <p>
              Sarvadnya Vidyapeeth, Patna is a modern and skill-based higher education institute established with the aim of providing affordable and quality education to students from rural and semi-urban areas.
            </p>
            <p>
              The institution is committed to delivering academic excellence along with practical knowledge and employment-oriented training. Sarvadnya Vidyapeeth focuses on developing students’ skills in a way that makes them self-reliant and capable of building successful careers.
            </p>
            <p className="text-xs md:text-sm text-slate-500">
              Being located in Patna, a growing educational hub, the Vidyapeeth offers students better exposure, opportunities, and a strong platform for overall development.
            </p>
          </div>
        </div>

        {/* Chairman's Message */}
        <div className="glass-card p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center shadow-lg">
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              <img 
                src="/images/chairman.png"
                alt="Chairman, Sarvadnya Vidyapeeth"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-2xl border-2 border-brand-gold/50 shadow-lg"
              />
              <div className="absolute -bottom-3 -right-3 bg-brand-gold text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md">
                SV Patna
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="flex justify-center lg:justify-start">
              <span className="section-tagline"><Milestone className="w-3.5 h-3.5 animate-blink" /> Chairman's Message</span>
            </div>
            <blockquote className="text-sm md:text-base font-medium text-slate-700 dark:text-slate-300 italic leading-relaxed">
              "At Sarvadnya Vidyapeeth, we are committed to shaping the leaders of tomorrow by providing top-tier, skill-based education that is both accessible and affordable. In today's dynamic digital and business landscape, practical competence is the key to career success. Our BCA and BBA programs are designed to equip students with real-world programming skills and strategic management capabilities. Through our state-of-the-art labs, incubation centers, and dedicated career guidance, we help every student realize their full potential and build a self-reliant future. I welcome you to join our family and embark on a path of growth and excellence."
            </blockquote>
            <div>
              <span className="font-extrabold text-sm text-slate-900 dark:text-white block">Chairman</span>
              <span className="text-xs text-slate-400 block">Sarvadnya Vidyapeeth</span>
            </div>
          </div>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          
          {/* Vision Box */}
          <div className="glass-card p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800 text-left relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-bl-full"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-xl">
                <Milestone className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white font-display">
                Our Institutional Vision
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              To establish Sarvadnya Vidyapeeth as a leading centre of excellence in higher education by providing quality, affordable, and skill-based learning that empowers students to become knowledgeable, self-reliant, and socially responsible individuals.
            </p>
          </div>

          {/* Mission Box */}
          <div className="glass-card p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800 text-left relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-amber-50 dark:bg-amber-950/20 text-brand-gold rounded-xl">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white font-display">
                Our Strategic Mission
              </h2>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-450 font-bold">
              <li className="flex gap-2">
                <span className="text-brand-purple font-extrabold">•</span>
                <span>To provide affordable and accessible higher education to students from rural and semi-urban areas.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-purple font-extrabold">•</span>
                <span>To deliver industry-oriented and skill-based education, especially in fields like BCA and BBA.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-purple font-extrabold">•</span>
                <span>To promote practical learning, innovation, and entrepreneurship among students.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-purple font-extrabold">•</span>
                <span>To develop students’ personality, leadership, and professional skills.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-purple font-extrabold">•</span>
                <span>To create employment opportunities through career guidance, training, and placement support.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-purple font-extrabold">•</span>
                <span>To contribute to society by building educated, skilled, and responsible citizens.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Accreditations & Affiliations Section (Full-Width) */}
        <div className="space-y-8 w-full">
          <div className="text-center w-full space-y-2">
            <div className="flex justify-center">
              <span className="section-tagline">
                <ShieldCheck className="w-3.5 h-3.5 animate-blink" /> Recognizations & Board approvals
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display text-center">
              Accreditations & Affiliations
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 text-center max-w-3xl mx-auto leading-relaxed">
              Sarvadnya Vidyapeeth is officially recognized, approved, and affiliated with the following regulatory and academic bodies:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {/* AICTE Card */}
            <div className="glass-card p-6 md:p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-md flex flex-col md:flex-row gap-6 items-center text-center md:text-left hover:-translate-y-1 transition-all duration-300 w-full">
              <div className="w-24 h-24 p-3 bg-white rounded-2xl border border-slate-100 dark:border-slate-850 shrink-0 flex items-center justify-center shadow-inner">
                <img 
                  src="/images/aicte_logo.png" 
                  alt="AICTE Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-2 flex-grow">
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                  AICTE Approved
                </h3>
                <span className="text-[10px] bg-amber-50 dark:bg-amber-950/20 text-brand-gold font-extrabold px-3 py-1 rounded-full uppercase tracking-wider block w-fit mx-auto md:mx-0">
                  Approved Government Body
                </span>
                <p className="text-xs md:text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-semibold">
                  Approved by All India Council for Technical Education (AICTE), Ministry of Education, Government of India. The institution complies strictly with AICTE standards for academic quality, faculty requirements, and infrastructural setup.
                </p>
              </div>
            </div>

            {/* AKU Card */}
            <div className="glass-card p-6 md:p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-md flex flex-col md:flex-row gap-6 items-center text-center md:text-left hover:-translate-y-1 transition-all duration-305 w-full">
              <div className="w-24 h-24 p-3 bg-white rounded-2xl border border-slate-100 dark:border-slate-850 shrink-0 flex items-center justify-center shadow-inner">
                <img 
                  src="/images/aku_logo.png" 
                  alt="AKU Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-2 flex-grow">
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                  Affiliated to AKU, Patna
                </h3>
                <span className="text-[10px] bg-purple-50 dark:bg-purple-950/20 text-brand-purple font-extrabold px-3 py-1 rounded-full uppercase tracking-wider block w-fit mx-auto md:mx-0">
                  A State University of Bihar
                </span>
                <p className="text-xs md:text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-semibold">
                  Affiliated to Aryabhatta Knowledge University (AKU), Patna. AKU was established by the Government of Bihar for technical, medical, and management education. Our degrees, exams, and curriculum follow standard university guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Target Students */}
        <div className="space-y-8">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display text-center">
            Target Students & Focus Groups
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "12th Pass Students (All Streams)", desc: "Students who have completed higher secondary education (Arts, Commerce, or Science) and seek higher education in IT (BCA) or Management (BBA)." },
              { title: "Rural and Semi-Urban Youth", desc: "Students from rural and semi-urban areas who lack access to modern skill-based higher education. SV bridges this academic divide." },
              { title: "Economically Weaker Section (EWS)", desc: "Students from low-income families who cannot afford expensive private colleges. SV offers cost-effective rates and scholarship support." },
              { title: "First-Generation Learners", desc: "Students who are the first in their families to attend college. SV provides mentoring, counseling, and a supportive campus system." },
              { title: "Skill & Job-Oriented Seekers", desc: "Youth interested in gaining digital skills, practical technical fluency, and direct corporate career opportunities after graduation." },
              { title: "IT & Corporate Career Builders", desc: "Individuals preparing for careers in Information Technology, Software Development, Business Management, and Entrepreneurship." }
            ].map((tgt, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl text-left border border-slate-100 dark:border-slate-850/60 shadow flex flex-col justify-between">
                <div>
                  <span className="bg-brand-purple/5 text-brand-purple dark:text-brand-purple-light text-[10px] font-extrabold px-3 py-1 rounded-full mb-3 block w-fit">FOCUS 0{idx + 1}</span>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-2">{tgt.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{tgt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Objectives */}
        <div className="p-4 sm:p-8 bg-slate-100/60 dark:bg-slate-900/40 rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-800/80 space-y-6 sm:space-y-8 text-left shadow-lg">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Our Detailed Objectives
            </h2>
            <p className="text-xs text-slate-400">Clear academic, social, and career-oriented goals guiding our institutional growth:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Academic Excellence", desc: "Provide high-quality education in BCA and BBA with a focus on conceptual clarity and continuous evaluation." },
              { title: "Skill Development & Employability", desc: "Equip students with industry-relevant skills such as programming, digital literacy, and corporate management." },
              { title: "Affordable Higher Learning", desc: "Keep tuition fees reasonable to make career-oriented programs accessible to low-income and semi-urban students." },
              { title: "Student Enrollment Growth", desc: "Year 1 target: 300–500 students, Year 3: 800+ students, Year 5: Full capacity of 1500–2000 students." },
              { title: "Infrastructure & Lab Facilities", desc: "Develop well-equipped programming labs, smart learning spaces, reference libraries, and resident hostels." },
              { title: "Career & Placement Support", desc: "Establish a dedicated Placement & Career Development Cell to assist with corporate jobs, internships, and vacancies." },
              { title: "Personality & Soft Skills", desc: "Enhance soft skills, confidence, leadership abilities, and speech through seminar workshops." },
              { title: "Industry Collaboration", desc: "Partner with corporate companies and tech organizations for training, internships, and guest lectures." },
              { title: "Digital & Practical Focus", desc: "Promote digital tools, hands-on coding, case studies, and practical projects beyond standard textbooks." },
              { title: "Long-Term Growth Scope", desc: "Gradually expand by introducing advanced courses (MBA, MCA) and advanced labs in the coming years." }
            ].map((obj, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">{obj.title}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal mt-0.5">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values grid */}
        <div className="space-y-8">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display text-center">
            Our Pillars of Strength
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-slate-50 dark:bg-slate-900/60 border border-gray-100 dark:border-slate-800 p-6 rounded-2xl text-left hover:-translate-y-1 transition-all duration-300">
                  <div className="p-2.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-brand-purple w-fit rounded-xl mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-2">{val.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Infrastructure grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              Premium Campus Facilities
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Modern digital infrastructure configured for high-efficiency learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructure.map((fac, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl text-left border border-slate-100 dark:border-slate-800/60 flex gap-4">
                <div className="p-2 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-xl h-fit shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1.5">{fac.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{fac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

