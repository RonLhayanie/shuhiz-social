import Link from 'next/link';
import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-2 border-[#F0C9D9]/50 pt-10 pb-6"> {/* צמצום רווחים אנכיים */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* הקטנת רוחב הקונטיינר ל-6xl */}
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 text-center md:text-right mb-8"> {/* צמצום gap */}
          
          {/* עמודה 1: לוגו */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <img 
              src="https://by-shuhiz.my.canva.site/21/_assets/media/c553eb4d347c6272e041d39d8e3a392d.png" 
              alt="Shuhiz Logo" 
              className="h-10 w-auto object-contain"
            />
            <p className="text-[#704724] text-xs leading-relaxed max-w-xs font-medium">
              סוכנות שיווק שנוגעת באנשים.
              <br />
              אסטרטגיה, קריאייטיב ותוכן שמביא תוצאות.
            </p>
          </div>

          {/* עמודה 2: ניווט */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold text-[#F0C9D9] text-base mb-1">ניווט</h4>
            <Link href="/" className="text-[#704724] text-sm hover:text-[#F0C9D9] transition-colors font-medium">ראשי</Link>
            <Link href="/portfolio" className="text-[#704724] text-sm hover:text-[#F0C9D9] transition-colors font-medium">עבודות</Link>
            <Link href="#services" className="text-[#704724] text-sm hover:text-[#F0C9D9] transition-colors font-medium">שירותים</Link>
            <Link href="#why-us" className="text-[#704724] text-sm hover:text-[#F0C9D9] transition-colors font-medium">למה שוחיז?</Link>
          </div>

          {/* עמודה 3: יצירת קשר */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold text-[#F0C9D9] text-base mb-1">דברו איתי</h4>
            <a href="tel:0549216966" className="text-[#704724] hover:text-[#F0C9D9] transition-colors font-medium flex items-center justify-center md:justify-start gap-2">
                <span className="text-sm">054-9216966</span>
                <Phone size={14} />
            </a>
            <a href="mailto:by.shuhiz@gmail.com" className="text-[#704724] hover:text-[#F0C9D9] transition-colors font-medium flex items-center justify-center md:justify-start gap-2">
                <span className="text-sm">by.shuhiz@gmail.com</span>
                <Mail size={14} />
            </a>
            <span className="text-[#704724] font-medium flex items-center justify-center md:justify-start gap-2">
                <span className="text-sm">תל אביב, ישראל</span>
            </span>
          </div>

          {/* עמודה 4: סושיאל (רק אינסטגרם) */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="font-bold text-[#F0C9D9] text-base">עקבו אחרינו</h4>
            <div>
                <a 
                    href="https://www.instagram.com/shuhizzz/" 
                    target="_blank" 
                    className="p-2 bg-[#704724] text-white rounded-full hover:bg-[#F0C9D9] hover:text-[#704724] transition-all duration-300 inline-block"
                >
                    <Instagram size={18} />
                </a>
            </div>
          </div>

        </div>
        {/* זכויות יוצרים - מחובר, בלי קו מפריד, טקסט קטן */}
        <div className="text-center">
            <p className="text-gray-400 text-[10px] font-medium">
                © {currentYear} SHUHIZ Digital Marketing. כל הזכויות שמורות.
            </p>
        </div>

      </div>
    </footer>
  );
}