import { useState } from 'react';
import { Download, FileText, Bookmark, ShieldCheck, Zap, Sparkles, Building, Coins, Info, ListFilter } from 'lucide-react';

export default function Downloads() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Documents" },
    { id: "syllabi", label: "Prospectus & Syllabi" },
    { id: "approvals", label: "Approvals & Certificates" },
    { id: "forms", label: "Campus Forms & Manuals" }
  ];

  const downloads = [
    {
      title: "Academic Prospectus 2026-27",
      type: "Official Prospectus Brochure",
      category: "syllabi",
      size: "1.5 MB",
      filename: "Sarvadnya_Vidyapeeth_Prospectus_2026-27.txt",
      content: "SARVADNYA VIDYAPEETH - ACADEMIC PROSPECTUS 2026-27\n\nWelcome to Sarvadnya Vidyapeeth, Patna.\nThis prospectus details the admission guidelines, eligibility, campus rules, code of conduct, and academic curriculum for BCA and BBA courses.\nAddress: Beur-Betaura Road, Patna - 800002, Bihar\nWebsite: sarvadnyavidyapeeth.edu.in",
      icon: Bookmark
    },
    {
      title: "BCA Syllabus & Curriculum",
      type: "BCA Semester Scheme & Core Syllabi",
      category: "syllabi",
      size: "920 KB",
      filename: "SV_BCA_Syllabus.txt",
      content: "SARVADNYA VIDYAPEETH - BCA SYLLABUS AND SEMESTER OUTLINE\n\nApproved under Aryabhatta Knowledge University (AKU):\nSemester 1: Computer Fundamentals, Programming in C, Mathematics, Communication.\nSemester 2: Data Structures, C++ OOPs, System Analysis & Design.\nSemester 3: Operating Systems, Java Programming, DBMS.\nSemester 4: Python Scripting, Computer Networks, Software Engineering.\nSemester 5: Web Technologies, AI Foundations, Elective-I.\nSemester 6: Cloud Computing, Major Capstone Project, Internships.",
      icon: FileText
    },
    {
      title: "BBA Syllabus & Curriculum",
      type: "BBA Core Subjects & Specializations",
      category: "syllabi",
      size: "870 KB",
      filename: "SV_BBA_Syllabus.txt",
      content: "SARVADNYA VIDYAPEETH - BBA CORE CURRICULUM SHEET\n\nApproved under Aryabhatta Knowledge University (AKU):\nSemester 1: Principles of Management, Micro Economics, Business Math.\nSemester 2: Organizational Behavior, Financial Accounting, Macro Economics.\nSemester 3: Business Law, Marketing Management, IT in Business.\nSemester 4: Human Resource Management, Quantitative Techniques, Business Ethics.\nSemester 5: Strategic Management, Financial Markets, Elective Stream (HR/Marketing/Finance).\nSemester 6: Project Appraisal, Industrial Internships, Dissertation.",
      icon: FileText
    },
    {
      title: "AICTE Approval Letter",
      type: "Extension of Approval (EoA) 2026-27",
      category: "approvals",
      size: "820 KB",
      filename: "AICTE_Approval_Letter_2026-27.txt",
      content: "ALL INDIA COUNCIL FOR TECHNICAL EDUCATION (AICTE)\nExtension of Approval Letter for Academic Session 2026-27.\nSarvadnya Vidyapeeth is approved for BBA (120 Seats) and BCA (180 Seats).\nAffiliated to Aryabhatta Knowledge University, Patna.",
      icon: ShieldCheck
    },
    {
      title: "MoE IIC Establishment Certificate",
      type: "Ministry of Education Innovation Cell",
      category: "approvals",
      size: "540 KB",
      filename: "MoE_IIC_Establishment_Certificate.txt",
      content: "MINISTRY OF EDUCATION INNOVATION CELL\nCertificate of Establishment of Institution Innovation Council (IIC) at Sarvadnya Vidyapeeth, Patna.\nFostering coding hackathons, startup bootcamps, and pitching events.",
      icon: Zap
    },
    {
      title: "Student Credit Card Guidelines",
      type: "DRCC & MNSSBY Process Checklist",
      category: "forms",
      size: "680 KB",
      filename: "Bihar_Student_Credit_Card_Process.txt",
      content: "BIHAR STUDENT CREDIT CARD SCHEME - PROCESS AND DOCUMENTS CHECKLIST\n\n1. Secure Bonafide Certificate & Fee Estimate from Sarvadnya Vidyapeeth.\n2. Submit online application on MNSSBY website.\n3. Present documents at local DRCC office for verification.\n4. Loan approved and disbursed.",
      icon: FileText
    },
    {
      title: "Admission Registration Form",
      type: "Offline Course Application Form",
      category: "forms",
      size: "450 KB",
      filename: "SV_Offline_Admission_Form.txt",
      content: "SARVADNYA VIDYAPEETH PATNA - STUDENT ENROLLMENT APPLICATION FORM\n\nPlease fill out all fields in block letters:\nCourse Requested (BCA/BBA):\nStudent Full Name:\nMother's Name / Father's Name:\nAadhaar Number:\nMobile Number & Email:\nIntermediate 10+2 Roll Details & Percentage:\nAttach original marksheets & photos during physical submission.",
      icon: Sparkles
    },
    {
      title: "Hostel Allocation Request Form",
      type: "Hostel Lodging Application Format",
      category: "forms",
      size: "310 KB",
      filename: "Hostel_Room_Allocation_Form.txt",
      content: "SARVADNYA VIDYAPEETH HOSTELS - ALLOCATION APPLICATION\n\nStudent Name:\nRoll Number:\nCourse & Semester:\nPreferred Room Type (Double Sharing / Triple Sharing):\nPreferred AC status (AC / Non-AC):\nParent Name & Contact:\nMedical History / Food Allergy details (if any):\nEmergency Helpline Number:",
      icon: Building
    },
    {
      title: "Anti-Ragging Student Affidavit",
      type: "Mandatory Student Compliance Undertaking",
      category: "forms",
      size: "260 KB",
      filename: "Anti_Ragging_Affidavit_Format.txt",
      content: "ANTI-RAGGING COMPLIANCE UNDERTAKING - AFFIDAVIT FORMAT\n\nI, student of Sarvadnya Vidyapeeth Patna, do hereby solemnly declare that:\n1. I will not engage in or abet any ragging practices.\n2. I understand that ragging is a criminal offense and punishable by law.\n3. In case of breach, I agree to face suspension, rustication, and legal prosecution.",
      icon: ShieldCheck
    },
    {
      title: "Library DELNET Membership Form",
      type: "Digital Library Access Card Form",
      category: "forms",
      size: "190 KB",
      filename: "Library_DELNET_Card_Form.txt",
      content: "SARVADNYA CAMPUS LIBRARY - MEMBERSHIP CARD APPLICATION\n\nStudent ID / Roll No:\nCourse Branch (BCA/BBA):\nStudent Name:\nDELNET login creation request:\nI agree to library regulations, book return deadlines, and zero-damage policies.",
      icon: Bookmark
    },
    {
      title: "Scholarship Waiver Claim Sheet",
      type: "Category Concession Waiver Claim Form",
      category: "forms",
      size: "420 KB",
      filename: "Scholarship_Claim_Form_Sarvadnya.txt",
      content: "SARVADNYA VIDYAPEETH - SCHOLARSHIP CLAIM WORKSHEET\n\nSelect Waiver claim:\n- SC/ST Welfare Scholarship (15% Waiver)\n- OBC Category Concession (10% Waiver)\n- EWS Need-Based assistance\nPlease attach certified caste and income documents.",
      icon: Coins
    }
  ];

  const handleDownload = (filename, content) => {
    const element = document.createElement("a");
    const file = new Blob([content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const filteredDownloads = activeCategory === "all" 
    ? downloads 
    : downloads.filter(dl => dl.category === activeCategory);

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen relative text-slate-800 dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-12">
        
        {/* Intro Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex justify-center">
            <span className="section-tagline"><Download className="w-3.5 h-3.5 animate-pulse" /> Academic Resources</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Downloads & Document Centre
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Access official catalogs, academic rules, government verification guidelines, and application worksheets.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-2 pb-4">
          <div className="flex items-center justify-center gap-1.5 text-xs font-black text-slate-500 sm:mr-2 uppercase tracking-wider">
            <ListFilter className="w-4 h-4 text-brand-purple shrink-0" /> Filter:
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`w-full sm:w-auto px-4.5 py-2 rounded-xl text-center text-xs font-bold transition-all border ${
                activeCategory === cat.id
                  ? 'bg-brand-navy border-brand-navy text-white dark:bg-brand-purple dark:border-brand-purple'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredDownloads.map((dl, idx) => {
            const Icon = dl.icon;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow flex flex-col justify-between text-left hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual Category Label */}
                <span className="absolute top-4 right-4 bg-purple-50 dark:bg-purple-950/40 text-brand-purple dark:text-brand-purple-light text-[8px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider font-sans">
                  {dl.category}
                </span>

                <div className="space-y-4">
                  <div className="p-3 bg-purple-50/50 dark:bg-purple-950/20 text-brand-purple rounded-2xl w-fit">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white leading-snug">{dl.title}</h3>
                    <p className="text-[10px] text-slate-400 mt-1.5 font-medium leading-normal">{dl.type}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800/60 mt-5 pt-4 flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-3">
                  <span className="text-[10px] font-bold text-slate-400">Size: {dl.size}</span>
                  <button
                    onClick={() => handleDownload(dl.filename, dl.content)}
                    className="w-full min-[380px]:w-auto bg-brand-navy hover:bg-brand-navy-light text-white text-center text-xs font-bold px-4.5 py-2 rounded-xl flex items-center justify-center gap-1 shadow-md dark:bg-brand-purple dark:hover:bg-brand-purple-light transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Download Tips / Help */}
        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-950/30 border border-slate-150 dark:border-slate-850 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-left flex flex-col sm:flex-row gap-4 items-start shadow-sm mt-8">
          <div className="p-2 bg-purple-50 dark:bg-purple-950/20 text-brand-purple rounded-xl shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white font-display">Need assistance or hard copies?</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              All files are downloaded as standardized format documents. Print them out and bring them to the campus admissions cell during counselings. If you require physical copies, you can collect the printed prospectuses and admission worksheets directly from SV Patna Camp Window No. 2.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
