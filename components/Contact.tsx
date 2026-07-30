import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative text-center">
      <div className="max-w-4xl mx-auto px-4">
        
        <h2 className="text-6xl md:text-9xl font-black text-[#F0C9D9] opacity-30 select-none mb-[-40px] md:mb-[-70px]">
          LET'S TALK
        </h2>
        <h2 className="text-4xl md:text-6xl font-black text-[#704724] relative z-10 mb-8">
          בואו נדבר תכלס
        </h2>

        <p className="text-xl text-gray-600 mb-12">
            אני מאמינה בעבודה עם אנשים, לא רק עם בריפים.<br/>
            אם התחברת – אשמח לשמוע עלייך.
        </p>

        <a 
            href="https://did.li/form-details" 
            target="_blank"
            className="inline-block bg-[#F0C9D9] text-[#704724] px-12 py-4 rounded-full font-black text-2xl shadow-xl hover:scale-105 transition-transform mb-16 border-4 border-white ring-2 ring-[#F0C9D9]"
        >
            לחצו כאן !
        </a>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-[#704724]">
            <div className="flex items-center gap-3">
                <Phone className="text-[#F0C9D9]" />
                <span className="font-bold text-lg">054-9216966</span>
            </div>
            <div className="flex items-center gap-3">
                <Mail className="text-[#F0C9D9]" />
                <span className="font-bold text-lg">by.shuhiz@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
                <MapPin className="text-[#F0C9D9]" />
                <span className="font-bold text-lg">תל אביב, ישראל</span>
            </div>
        </div>

        <div className="mt-12 flex justify-center gap-6">
            <a 
                href="tel:0549216966" 
                className="p-4 bg-green-500 text-white rounded-full hover:opacity-90 transition-opacity"
            >
                <Phone size={24} />
            </a>
            <a href="https://www.instagram.com/shuhizzz/" target="_blank" className="p-4 bg-gradient-to-tr from-yellow-400 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity">
                <Instagram size={24} />
            </a>
            {/* WhatsApp button */}
            <a 
                href="https://wa.me/972549216966" 
                target="_blank" 
                className="p-4 bg-green-500 text-white rounded-full hover:opacity-90 transition-opacity flex items-center justify-center"
            >
                <svg 
                    role="img" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor"
                    width="24"
                    height="24"
                >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
            </a>
        </div>

      </div>
    </section>
  );
}