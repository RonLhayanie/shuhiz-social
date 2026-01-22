import { Calendar, MousePointerClick, Heart, Lightbulb, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Event & Launch Content",
      hebrewTitle: "תוכן לאירועים",
      desc: "תוכן לאירועים שגורם לאורחים להפוך למשווקים",
      icon: <Calendar size={32} />
    },
    {
      title: "PPC",
      hebrewTitle: "קידום ממומן",
      desc: "קמפיינים ב-Meta & Google עם תוצאות שמצדיקות תקציב",
      icon: <MousePointerClick size={32} />
    },
    {
      title: "Social Media",
      hebrewTitle: "ניהול סושיאל",
      desc: "ניהול עמודים שמדברים שיווק, לא רק פוסטים",
      icon: <Heart size={32} />
    },
    {
      title: "Creative Strategy",
      hebrewTitle: "אסטרטגיה וקריאייטיב",
      desc: "קונספטים, סדרות תוכן ודמויות שהופכות למותג",
      icon: <Lightbulb size={32} />
    },
    {
      title: "Influencer Collabs",
      hebrewTitle: "משפיענים",
      desc: "שיתופי פעולה שנראים אורגניים אבל עובדים מדויק",
      icon: <Users size={32} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden scroll-mt-48">
      
      {/* כותרת האזור */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-[#F0C9D9]/30 tracking-widest uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          SERVICES
        </h2>
        <h2 className="text-4xl md:text-5xl font-black text-[#704724] relative">
          השירותים שלי
        </h2>
        <div className="flex justify-center items-center gap-2 mt-4 text-[#704724]">
            <span>✦</span>
            <div className="w-20 h-[2px] bg-[#704724]"></div>
            <span>✦</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* גריד הכרטיסים */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((item, index) => (
            <div key={index} className="group h-full">
              <div className="h-full border-2 border-[#704724] rounded-3xl p-6 flex flex-col items-center text-center bg-white hover:shadow-[8px_8px_0px_0px_rgba(240,201,217,1)] transition-all duration-300 transform hover:-translate-y-2">
                
                {/* אייקון */}
                <div className="mb-4 text-[#704724] group-hover:scale-110 transition-transform duration-300 p-3 rounded-full bg-[#F0C9D9]/20">
                    {item.icon}
                </div>

                {/* כותרת באנגלית (קטנה למעלה) */}
                <span className="text-xs font-bold tracking-widest text-[#704724]/60 uppercase mb-1">
                    {item.title}
                </span>

                {/* כותרת ראשית */}
                <h3 className="text-xl font-black text-[#704724] mb-3">
                    {item.hebrewTitle}
                </h3>

                {/* טקסט תיאור */}
                <p className="text-sm font-medium leading-relaxed text-gray-600">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}