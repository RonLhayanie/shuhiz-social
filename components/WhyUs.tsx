import { Brain, TrendingUp, Users, Bot, Camera, MessageCircle } from 'lucide-react';

export default function WhyUs() {
  const items = [
    {
      title: "קריאייטיב שלא מפחד לגעת",
      desc: "אני בונה רעיונות שיש להם אופי – ולא רק עיצוב. דמויות, קונספטים, סדרות תוכן, משחקים – שמדברים עם הקהל בגובה העיניים.",
      icon: <Brain size={32} className="text-[#704724]" />
    },
    {
      title: "משתמשת בבינה מלאכותית (AI)",
      desc: "כדי לייעל תהליכי תוכן, עיצוב, כתיבה וניתוח — ומצליחה להוציא יותר בזמן קצר, בלי לאבד את הרגש האנושי.",
      icon: <Bot size={32} className="text-[#704724]" />
    },
    {
      title: "אני מזהה טרנד לפני שהוא מתפוצץ",
      desc: "ויודעת לחבר אותו לעסק בצורה חכמה, טבעית ומדויקת. פידליות בלי להיראות כאילו התאמצת.",
      icon: <TrendingUp size={32} className="text-[#704724]" />
    },
    {
      title: "אני לא רק חושבת - אני מבצעת",
      desc: "לא רק הרעיון, אלא הביצוע. צילום, עריכה, כתיבה והגשה בפורמט שמתאים בול לפלטפורמה.",
      icon: <Camera size={32} className="text-[#704724]" />
    },
    {
      title: "ניהול קמפיינים בתקציבים גדולים",
      desc: "ניהול ב-Meta & Google תוך הבנה של מה באמת עובד בפועל, לא רק בטבלה. חיבור חכם בין דאטה לתוכן.",
      icon: <Users size={32} className="text-[#704724]" />
    },
    {
      title: "מדברת את השפה של הלקוחות",
      desc: "גם כשהם בסטורי, גם בדרך לעסק, וגם כשהם עדיין לא יודעים שהם צריכים אותך.",
      icon: <MessageCircle size={32} className="text-[#704724]" />
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center relative">
        
        {/* כותרת גדולה */}
        <h2 className="text-6xl md:text-9xl font-black text-[#F0C9D9] uppercase tracking-tighter mb-20 opacity-40 select-none">
        ? WHY SHUHIZ
        </h2>

        {/* גריד היתרונות */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 px-4 relative z-10 -mt-10 mb-24">
            {items.map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 group hover:-translate-y-2 transition-transform duration-300">
                    <div className="p-4 bg-[#F0C9D9]/30 rounded-full mb-2 group-hover:bg-[#F0C9D9] transition-colors">
                        {item.icon}
                    </div>
                    <h4 className="font-bold text-xl text-[#704724] leading-tight">
                        {item.title}
                    </h4>
                    <p className="text-black font-bold text-sm leading-relaxed max-w-xs mx-auto">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>

       {/* --- חלק תחתון לפי התמונה --- */}
        <div className=" pt-16 max-w-6xl mx-auto text-center flex flex-col items-center">
            <h3 className="text-3xl md:text-5xl font-black text-[#F0C9D9] leading-tight mb-8">
              כי שיווק טוב הוא לא רק מה שאתה אומר –<br /> אלא איך אתה גורם למישהו אחר להרגיש. 
            </h3>
            <div className="text-5xl text-[#F0C9D9]">✦</div>
        </div>
        {/* ------------------------- */}

      </div>
    </section>
  );
}