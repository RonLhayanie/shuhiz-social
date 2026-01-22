import { Star } from 'lucide-react';

export default function Recommendations() {
  // רשימת הלקוחות - תוקן הקישור של אריאל
  const clients = [

    { name: "Fusion", src: "    https://by-shuhiz.my.canva.site/21/_assets/media/7e3ed564961eac1fe815426baf10d5d1.png" },
    { name: "Yardena", src: "https://by-shuhiz.my.canva.site/21/_assets/media/43ba324bdfc8d9b80dd94a4a1e4a715f.png" },
    { name: "Cosmo", src: "https://by-shuhiz.my.canva.site/21/_assets/media/97f95ccb5deb4bf81e474dce721f70a9.png" },
    { name: "Jimmy Who", src: "https://by-shuhiz.my.canva.site/21/_assets/media/6b4490eea41770c602515045839a3e41.png" },
    { name: "Maza", src: "https://by-shuhiz.my.canva.site/21/_assets/media/677782c5343e8a7200b3da2072e08c58.png" },
    { name: "Trendy", src: "https://by-shuhiz.my.canva.site/21/_assets/media/ec6aa6dc0b9062f33781074c17918813.jpg" },
    // הקישור הנכון לאריאל:
    { name: "Ariel", src: "https://by-shuhiz.my.canva.site/21/_assets/media/185d8eff0573e0734f3f4cb25098bdc4.png" }, 
  ];

  // רשימת צילומי המסך של הוואטסאפ
  const testimonials = [
    "https://by-shuhiz.my.canva.site/21/_assets/media/31cc1e02d22a700c0a73e71604669ec4.jpg",
    "https://by-shuhiz.my.canva.site/21/_assets/media/357ba94855430711cefa1a368c9b7c6b.jpg",
    "https://by-shuhiz.my.canva.site/21/_assets/media/8bb65c877d2db77083072af7d925f4da.jpg",
    "https://by-shuhiz.my.canva.site/21/_assets/media/c9afac1ad764d8dbb29730733dd18c81.jpg", 
  ];

   // רשימת המותגים שצריכים לקבל "זום"
  const zoomedBrands = ["Fusion", "Maza", "Jimmy Who"];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* כותרת עליונה */}
        <h2 className="text-3xl md:text-5xl font-black text-[#F0C9D9] mb-16 leading-tight">
            הגישה שלי בשיווק היא לא רק מה אני עושה – <span className="text-[#704724]">אלא איך.</span>
        </h2>

        {/* שורת לוגואים */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-24">
            {clients.map((client, index) => {
                const isZoomed = zoomedBrands.includes(client.name);

                return (
                    <div 
                        key={index} 
                        // אם זה לא מותג לזום, מוסיפים p-4 כדי להקטין את התמונה בפנים. הגודל החיצוני נשאר זהה לכולם.
                        className={`w-28 h-28 md:w-32 md:h-32 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm hover:scale-110 transition-transform duration-300 overflow-hidden ${isZoomed ? '' : 'p-4'}`}
                    >
                        <img 
                            src={client.src} 
                            alt={client.name} 
                            // אם זה מותג לזום: scale-[1.3] ו-object-cover. אחרת: רגיל ו-object-contain.
                            className={`w-full h-full transform transition-transform ${isZoomed ? 'object-cover scale-[1.3]' : 'object-cover scale-[1.35]'}`} 
                        />
                    </div>
                );
            })}
        </div>

        {/* כותרת ממליצים עם כוכבים */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <div className="flex gap-2 text-[#704724]">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={28} fill="transparent" strokeWidth={1.5} />
                ))}
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-[#F0C9D9] tracking-wide">
                לקוחות ממליצים
            </h2>

            <div className="flex gap-2 text-[#704724]">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={28} fill="transparent" strokeWidth={1.5} />
                ))}
            </div>
        </div>

        {/* גריד טלפונים */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {testimonials.map((imgSrc, index) => (
                <div key={index} className="relative w-[220px] h-[450px] bg-black rounded-[2rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-black rounded-b-lg z-20"></div>
                    <img 
                        src={imgSrc} 
                        alt={`Testimonial ${index + 1}`} 
                        className="w-full h-full object-cover bg-white"
                    />
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}