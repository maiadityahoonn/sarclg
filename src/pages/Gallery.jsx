import { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles, SlidersHorizontal, X, Compass, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Campus', 'Classrooms', 'Computer Labs', 'Hostels', 'Sports', 'Events', 'Workshops'];

  const galleryItems = [
    { id: 1, title: "Main Academic Building Entrance", category: "Campus", image: "/images/campus_building.png", desc: "Sarvadnya Vidyapeeth Patna front gate and main lobby." },
    { id: 2, title: "Smart Classroom Coding Lab", category: "Classrooms", image: "/images/smart_classroom.png", desc: "Classroom fitted with digital smart projection panels." },
    { id: 3, title: "Advanced Computing Lab", category: "Computer Labs", image: "/images/computer_lab.png", desc: "Dual core high-speed programmer terminals for Python / Java." },
    { id: 4, title: "Graduation & Placement Day 2026", category: "Events", image: "/images/placement_celebration.png", desc: "Students celebrating their corporate career selection." },
    { id: 5, title: "Business Development Workshop", category: "Workshops", image: "/images/bba_cover.png", desc: "Mentorship sessions detailing startup frameworks and management." },
    { id: 6, title: "MoE IIC Pitching Competition", category: "Events", image: "/images/innovation_lab.png", desc: "Students presenting wireframes and business proposals to coordinators." },
    { id: 7, title: "Central Academic Library Room", category: "Campus", image: "/images/library.png", desc: "Thousands of study texts, directories, and books." },
    { id: 8, title: "Developer Coding Hackathon", category: "Events", image: "/images/bca_cover.png", desc: "48-hour coding hackathon with awards sponsored by tech partners." },
    { id: 9, title: "Twin Sharing Hostel Room", category: "Hostels", image: "/images/hostel_room.png", desc: "Cozy twin sharing hostel room with modern study desks." },
    { id: 10, title: "SV Sports Arena & Playground", category: "Sports", image: "/images/sports_facilities.png", desc: "College sports turf area supporting volleyball and basketball." },
    { id: 11, title: "AI Study Classroom", category: "Classrooms", image: "/images/facility_classroom_ai.png", desc: "Collaborative learning room equipped with digital projector boards." },
    { id: 12, title: "High-Tech Programmer Lab", category: "Computer Labs", image: "/images/facility_labs_ai.png", desc: "Advanced lab designed for testing algorithms and server scripts." },
    { id: 13, title: "MoE Innovation Cell Center", category: "Campus", image: "/images/facility_labs_ai_1.png", desc: "Dedicated work desk for IoT prototype designing and hardware testing." },
    { id: 14, title: "Spacious Central Reading Room", category: "Campus", image: "/images/facility_library_ai.png", desc: "Silent reading zones in the main library block for focus study." },
    { id: 15, title: "National Level Corporate Seminar", category: "Events", image: "/images/facility_seminar_ai.png", desc: "Host to panel discussions with corporate HR directors." },
    { id: 16, title: "Digital Smart Classroom Sessions", category: "Classrooms", image: "/images/facility_classroom_ai_1.png", desc: "Interactive class sessions promoting group work and design models." }
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="pt-32 sm:pt-36 pb-14 sm:pb-20 glow-mesh min-h-screen relative text-slate-800 dark:text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-16">
        
        {/* Intro Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center">
            <span className="section-tagline"><Sparkles className="w-3.5 h-3.5 animate-pulse" /> Life at Campus</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
            Photo Gallery & Highlights
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A glimpse into our campus infrastructure, interactive labs, startup sessions, and cultural events.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="max-w-5xl mx-auto overflow-x-auto no-scrollbar">
          <div className="bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl flex flex-nowrap gap-1.5 border border-gray-200/50 dark:border-slate-800/80 w-max min-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`shrink-0 text-center text-xs font-bold px-4 py-2.5 rounded-xl transition-all ${
                  activeFilter === cat
                    ? 'bg-white dark:bg-slate-800 text-brand-purple dark:text-brand-purple-light shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-slate-800/80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between aspect-square cursor-pointer bg-slate-100 dark:bg-slate-850"
            >
              {/* Actual image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay graphics */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              
              <div className="relative p-5 z-10 flex justify-between items-start">
                <span className="bg-brand-purple/90 backdrop-blur-sm border border-brand-purple/20 text-white text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
                <span className="p-1.5 bg-black/40 rounded-full text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>

              <div className="relative p-5 z-10 text-white space-y-1.5 bg-gradient-to-t from-black/90 via-black/45 to-transparent pt-12">
                <h3 className="font-extrabold text-sm leading-snug group-hover:text-brand-gold-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10px] text-slate-300 leading-normal line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Campus Tour info */}
        <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm space-y-5 text-left max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="p-3 bg-brand-purple/10 text-brand-purple rounded-2xl h-fit shrink-0">
            <Compass className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base font-display">Virtual Campus Video Tour</h3>
            <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
              Can't visit Patna? Walk through our campus digitally! Explore high-resolution visuals of our Advanced Computing Lab, Smart India Hackathon Innovation Center, and central library catalog rooms. Ask our counsel officers at the main desk to share the 3D VR walkthrough credentials during virtual admission counselling.
            </p>
          </div>
        </div>

        {/* Interactive Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setSelectedImage(null)}></div>
            <div className="relative w-full max-w-3xl bg-white dark:bg-brand-navy-light rounded-3xl shadow-2xl border border-gray-200/60 dark:border-slate-800 overflow-hidden text-left animate-in zoom-in-95 duration-200 flex flex-col">
              
              {/* Media Display */}
              <div className="w-full relative aspect-video bg-black flex items-center justify-center">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="max-w-full max-h-full object-contain"
                />
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-black/45 hover:bg-black/60 transition-colors text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Descriptions */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-brand-purple/10 text-brand-purple dark:text-brand-purple-light text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider inline-block">
                    {selectedImage.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">ID: 0{selectedImage.id}</span>
                </div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white font-display">{selectedImage.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                  {selectedImage.desc}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
