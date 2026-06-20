import { useState, useEffect, useRef } from 'react';
import { X, Send, RotateCcw, ArrowUpRight, Phone, Mail, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AdmissionChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Name, 2: Phone, 3: Email, 4: Course, 5: Summary, 6: Success
  const [isTyping, setIsTyping] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: "Hello! I am Neha Mehta, your Sarvadnya Vidyapeeth Admissions Counselor. May I know your name to get started? 😊" }
  ]);

  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  // Dispatch events to toggle visibility of floating button
  useEffect(() => {
    window.dispatchEvent(new CustomEvent(isOpen ? 'chatbot-opened' : 'chatbot-closed'));
  }, [isOpen]);

  // Auto trigger after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSubmitted = sessionStorage.getItem("sv_admission_submitted");
      if (!hasSubmitted) {
        setIsOpen(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Listen to open requests
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
    };
    window.addEventListener('open-admission-chatbot', handleOpen);
    return () => {
      window.removeEventListener('open-admission-chatbot', handleOpen);
    };
  }, []);

  const simulateBotResponse = (responseText, nextStep, delay = 800) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', text: responseText }]);
      setIsTyping(false);
      setStep(nextStep);
    }, delay);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const cleanInput = inputValue.trim();
    if (!cleanInput) return;

    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: cleanInput }]);
    setInputValue("");

    if (step === 1) {
      // Step 1: Process Name
      setName(cleanInput);
      simulateBotResponse(
        `Nice to meet you, ${cleanInput}! Could you please share your 10-digit mobile number so I can call you to explain the admission process? 📞`,
        2
      );
    } else if (step === 2) {
      // Step 2: Process Phone
      const digitsOnly = cleanInput.replace(/\D/g, '');
      if (digitsOnly.length !== 10) {
        simulateBotResponse(
          "Oops! That doesn't look like a valid 10-digit mobile number. Please check and re-enter. 📱",
          2
        );
      } else {
        setPhone(digitsOnly);
        simulateBotResponse(
          "Got it! What is your email address so I can send the prospectus & course details? ✉️",
          3
        );
      }
    } else if (step === 3) {
      // Step 3: Process Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleanInput)) {
        simulateBotResponse(
          "Please enter a valid email address so I can forward you the course curriculum sheets. 📧",
          3
        );
      } else {
        setEmail(cleanInput);
        simulateBotResponse(
          "Which course are you interested in pursuing? Please select one of the programs below: 🎓",
          4
        );
      }
    }
  };

  const handleCourseSelect = (selectedCourse) => {
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: selectedCourse }]);
    setCourse(selectedCourse);

    simulateBotResponse(
      `Perfect choice! Let's verify your details:

• Name: ${name}
• Mobile: ${phone}
• Email: ${email}
• Program: ${selectedCourse === 'BCA' ? 'BCA (Bachelor of Computer Applications)' : 'BBA (Bachelor of Business Administration)'}

Click 'Submit' below to confirm your admission enquiry! 🚀`,
      5
    );
  };

  const handleSubmitEnquiry = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setStep(6);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        sender: 'bot', 
        text: `Congratulations! Your admission enquiry has been successfully registered. I will call you personally within 24 hours to guide you further. Have a wonderful day ahead! 🎉` 
      }]);
      sessionStorage.setItem("sv_admission_submitted", "true");
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const handleRestart = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCourse("");
    setInputValue("");
    setStep(1);
    setMessages([
      { id: Date.now(), sender: 'bot', text: "Hello! I am Neha Mehta, your Sarvadnya Vidyapeeth Admissions Counselor. May I know your name to register a new enquiry? 😊" }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 md:right-8 z-50 w-auto sm:w-[330px] md:w-[370px] h-[min(480px,calc(100dvh-1.5rem))] md:h-[min(520px,calc(100dvh-3rem))] rounded-3xl overflow-hidden border border-slate-200 bg-white/95 backdrop-blur-md shadow-2xl flex flex-col justify-between animate-in slide-in-from-bottom-5 duration-300">
      
      {/* Header */}
      <div className="bg-brand-navy dark:bg-brand-purple-dark text-white px-4 sm:px-5 py-3.5 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src="/images/counsellor_avatar.png" 
              alt="Neha Mehta" 
              className="w-10 h-10 rounded-full object-cover border border-purple-200 shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-brand-navy"></span>
          </div>
          <div className="text-left">
            <h4 className="font-extrabold text-xs md:text-sm font-display leading-tight">Neha Mehta</h4>
            <span className="text-[10px] text-emerald-400 font-bold block mt-0.5">Admissions Counselor</span>
          </div>
        </div>
        
        <button 
          onClick={() => setIsOpen(false)}
          className="p-1 hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-white/80 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Logs Area */}
      <div className="flex-grow overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/50">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in duration-200`}
          >
            <div 
              className={`max-w-[88%] sm:max-w-[82%] px-3.5 sm:px-4.5 py-3 text-xs leading-relaxed font-semibold shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-brand-purple text-white rounded-3xl rounded-tr-none'
                  : 'bg-white text-slate-700 border border-slate-100 rounded-3xl rounded-tl-none whitespace-pre-line text-left'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Bouncing Typing Dots */}
        {isTyping && (
          <div className="flex justify-start animate-in fade-in duration-200">
            <div className="px-4.5 py-3.5 bg-white border border-slate-100 rounded-3xl rounded-tl-none shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Footer Action / Input Area */}
      <div className="p-4 border-t border-slate-100 bg-white">
        
        {/* Step 4: Course Selection Buttons */}
        {step === 4 && !isTyping && (
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2 animate-in slide-in-from-bottom-2 duration-300">
            <button
              onClick={() => handleCourseSelect("BCA")}
              className="flex-1 py-3 bg-slate-50 hover:bg-brand-purple hover:text-white text-brand-purple text-center border border-brand-purple-light/20 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
            >
              BCA Program
            </button>
            <button
              onClick={() => handleCourseSelect("BBA")}
              className="flex-1 py-3 bg-slate-50 hover:bg-brand-purple hover:text-white text-brand-purple text-center border border-brand-purple-light/20 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
            >
              BBA Program
            </button>
          </div>
        )}

        {/* Step 5: Summary Confirmation Button */}
        {step === 5 && !isTyping && (
          <button
            onClick={handleSubmitEnquiry}
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer animate-pulse-subtle"
          >
            <CheckCircle className="w-4 h-4" /> Submit Enquiry
          </button>
        )}

        {/* Step 6: Completed Success Actions */}
        {step === 6 && !isTyping && (
          <div className="grid grid-cols-1 min-[380px]:grid-cols-[1fr_auto] gap-2">
            <button
              onClick={handleRestart}
              className="flex-grow py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 text-center border border-slate-200 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" /> Restart Chat
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 bg-brand-navy text-white text-center rounded-xl text-xs font-black uppercase tracking-wider hover:bg-brand-navy-light transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        )}

        {/* Steps 1, 2, 3: Input Text Form */}
        {step < 4 && (
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type={step === 2 ? "tel" : step === 3 ? "email" : "text"}
              required
              placeholder={
                step === 1 ? "Enter your full name..." :
                step === 2 ? "Enter 10-digit phone number..." :
                "Enter your email address..."
              }
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isTyping}
              className="flex-grow text-xs px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-purple disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isTyping || !inputValue.trim()}
              className="bg-brand-navy hover:bg-brand-navy-light text-white p-2.5 rounded-xl shadow-md transition-all flex items-center justify-center disabled:opacity-40 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>

    </div>
  );
}
