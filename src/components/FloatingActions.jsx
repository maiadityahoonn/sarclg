import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onOpen = () => setIsChatbotOpen(true);
    const onClose = () => setIsChatbotOpen(false);

    window.addEventListener('chatbot-opened', onOpen);
    window.addEventListener('chatbot-closed', onClose);
    window.addEventListener('open-admission-chatbot', onOpen);

    return () => {
      window.removeEventListener('chatbot-opened', onOpen);
      window.removeEventListener('chatbot-closed', onClose);
      window.removeEventListener('open-admission-chatbot', onOpen);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-3 items-end">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-white dark:bg-brand-navy-light text-brand-navy dark:text-white p-3 sm:p-3.5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-slate-800"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Chat with Neha Trigger (Only shown when chatbot window is closed) */}
      {!isChatbotOpen && (
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-admission-chatbot'))}
          className="bg-gradient-to-r from-brand-purple to-indigo-600 hover:from-indigo-600 hover:to-brand-purple text-white p-2.5 sm:pl-3.5 sm:pr-5 sm:py-2.5 rounded-full shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2.5 border border-purple-500/20 group cursor-pointer relative"
          aria-label="Chat with Neha"
        >
          <div className="relative">
            <img 
              src="/images/counsellor_avatar.png" 
              alt="Neha Mehta" 
              className="w-8 h-8 rounded-full object-cover border border-white/20 shadow-inner" 
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full border-2 border-brand-purple"></span>
          </div>
          <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-xs group-hover:block transition-all duration-300 ease-out text-xs font-black uppercase tracking-wider whitespace-nowrap">
            Chat with Neha
          </span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border border-white animate-ping"></span>
        </button>
      )}

      {/* WhatsApp Floating Chat */}
      <a
        href="https://wa.me/919955330733?text=Hi,%20I%20am%20interested%20in%20getting%20admission%20details%20for%20BCA/BBA%20at%20Sarvadnya%20Vidyapeeth%20Patna."
        target="_blank"
        rel="noreferrer"
        className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 sm:p-3.5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.262-4.103c1.652.981 3.57 1.498 5.523 1.499 5.626 0 10.203-4.58 10.207-10.21.002-2.727-1.058-5.292-2.986-7.222C17.135 2.035 14.57 1.002 11.99 1.002 6.368 1.002 1.79 5.58 1.787 11.21c-.001 1.954.512 3.864 1.49 5.516L2.302 20.894l4.017-.997zM17.485 14.53c-.3-.15-1.771-.875-2.04-.972-.27-.099-.465-.148-.66.15-.195.298-.758.943-.93 1.14-.173.199-.347.223-.647.074-.3-.15-1.267-.467-2.414-1.49-1.894-1.692-2.147-1.983-2.447-2.48-.302-.5-.032-.77.268-1.07.27-.27.6-.7.9-1.05.097-.105.195-.21.285-.315.09-.105.15-.225.225-.375.075-.15.037-.285-.018-.399-.056-.114-.465-1.122-.638-1.54-.168-.405-.333-.35-.465-.357h-.39c-.15 0-.39.056-.6.284-.21.228-.795.777-.795 1.895 0 1.118.81 2.198.922 2.35.112.15 1.59 2.43 3.852 3.407.538.232 1.037.382 1.4.498.54.173 1.03.148 1.417.09.432-.066 1.771-.724 2.02-.1426.248-.699.248-1.192 0-.27z"/>
        </svg>
        <span className="hidden sm:inline-block max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-out text-sm font-semibold whitespace-nowrap font-sans">
          WhatsApp Chat
        </span>
      </a>

    </div>
  );
}
