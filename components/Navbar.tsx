'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Instagram, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Scrolls to a section element (e.g. the "why shuhiz" section)
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const targetId = href.replace(/.*\#/, "");
      const elem = document.getElementById(targetId);
      
      if (elem) {
        const headerOffset = 100;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setIsOpen(false);
    }
  };

  // Scrolls back to the top of the page
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (pathname === '/') {
      e.preventDefault(); // Prevents a full page reload
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F0C9D9]/30 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            
            {/* Right side: logo, scrolls to top on click */}
            <div className="flex-shrink-0 z-50">
              <Link 
                href="/" 
                className="flex items-center gap-3 group" 
                onClick={(e) => {
                    handleScrollToTop(e);
                    setIsOpen(false);
                }}
              >
                <img 
                  src="https://by-shuhiz.my.canva.site/21/_assets/media/c553eb4d347c6272e041d39d8e3a392d.png" 
                  alt="Shuhiz Logo" 
                  className="h-24 w-auto object-contain group-hover:scale-105 transition-transform"
                />
              </Link>
            </div>

            {/* Center: navigation menu, xl screens and up */}
            <div className="hidden xl:flex items-center space-x-8 space-x-reverse relative right-24">
              <Link 
                href="/" 
                onClick={handleScrollToTop} // Scroll to top on click
                className="text-base font-medium text-gray-600 hover:text-accent hover:bg-[#F0C9D9]/10 px-4 py-2 rounded-full transition-all cursor-pointer"
              >
                ראשי
              </Link>
              <Link href="/portfolio" className="text-base font-medium text-gray-600 hover:text-accent hover:bg-[#F0C9D9]/10 px-4 py-2 rounded-full transition-all">
                העבודות שלי
              </Link>
              <Link 
                  href="/#why-us" 
                  onClick={(e) => handleScroll(e, '#why-us')}
                  className="text-base font-medium text-gray-600 hover:text-accent hover:bg-[#F0C9D9]/10 px-4 py-2 rounded-full transition-all cursor-pointer"
              >
                למה שוחיז?
              </Link>
            </div>

            {/* Left side: contact buttons, xl screens and up */}
            <div className="hidden xl:flex items-center gap-2 -ml-24">
              <a 
                href="https://www.instagram.com/shuhizzz/" 
                target="_blank"
                className="p-2 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="tel:0549216966" 
                className="p-2 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all"
                aria-label="Phone"
              > 
                <Phone size={20} />
              </a>
              <a 
                href="https://wa.me/972549216966" 
                target="_blank"
                className="flex items-center gap-2 bg-accent text-white px-5 py-2 rounded-full font-bold hover:opacity-90 transition-all shadow-md"
              > 
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="hidden lg:inline">נדבר?</span>
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfZDhvVC0qdHdfL0TExfG3Rjs_77Uro9uPcBNhPBfnUzSHYDA/viewform" 
                target="_blank"
                className="flex items-center gap-2 bg-accent text-white px-5 py-2 rounded-full font-bold hover:opacity-90 transition-all shadow-md"
              > 
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
                <span className="hidden lg:inline">השארת פרטים</span>
              </a>
            </div>

            {/* Hamburger button */}
            <div className="xl:hidden z-50">
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#704724] p-2">
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile drawer menu */}
      <div className={`xl:hidden fixed inset-0 bg-white z-[100] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Top area */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <button onClick={() => setIsOpen(false)} className="text-[#704724] p-2 bg-gray-50 rounded-full">
                <X size={28} />
            </button>
            <img 
              src="https://by-shuhiz.my.canva.site/21/_assets/media/c553eb4d347c6272e041d39d8e3a392d.png" 
              alt="Logo" 
              className="h-16 object-contain"
            />
        </div>

        {/* Center: links */}
        <div className="flex flex-col items-center justify-center space-y-6 mt-10">
            <Link 
              href="/" 
              onClick={(e) => { handleScrollToTop(e); setIsOpen(false); }} // Scroll to top on click
              className="text-3xl font-black text-[#704724] hover:text-[#F0C9D9] transition-colors"
            >
              ראשי
            </Link>
            <Link 
              href="/portfolio" 
              onClick={() => setIsOpen(false)} 
              className="text-3xl font-black text-[#704724] hover:text-[#F0C9D9] transition-colors"
            >
              העבודות שלי
            </Link>
            <Link 
              href="/#why-us" 
              onClick={(e) => handleScroll(e, '#why-us')} 
              className="text-3xl font-black text-[#704724] hover:text-[#F0C9D9] transition-colors"
            >
              למה שוחיז?
            </Link>
        </div>

        {/* Bottom area */}
        <div className="absolute bottom-8 left-0 right-0 px-6 flex flex-col gap-3">
            <a href="https://wa.me/972549216966" target="_blank" className="w-full bg-[#25D366] text-white py-3 rounded-full text-xl font-bold text-center shadow-md flex items-center justify-center gap-2">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>וואטסאפ</span>
            </a>
            
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZDhvVC0qdHdfL0TExfG3Rjs_77Uro9uPcBNhPBfnUzSHYDA/viewform" target="_blank" className="bg-[#704724] text-white py-3 rounded-full text-lg font-bold text-center shadow-md flex items-center justify-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
                <span>השארת פרטים</span>
            </a>

            <a href="tel:0549216966" className="border-2 border-[#704724] text-[#704724] py-3 rounded-full text-lg font-bold text-center flex items-center justify-center gap-2">
                <Phone size={24} />
                <span>חייג אלינו</span>
            </a>

            <div className="flex justify-center mt-2">
                <a href="https://www.instagram.com/shuhizzz/" target="_blank" className="text-gray-400 hover:text-accent">
                    <Instagram size={28} />
                </a>
            </div>
        </div>

      </div>
    </>
  );
}