import Link from "next/link";

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top section: logo and buttons */}
        <div className="flex flex-col items-center justify-center text-center mb-12 space-y-6">
            
            {/* Logo */}
            <img 
              src="https://by-shuhiz.my.canva.site/21/_assets/media/c553eb4d347c6272e041d39d8e3a392d.png" 
              alt="Shuhiz Logo" 
              className="w-72 md:w-96 object-contain"
            />

            {/* Name button, brown outline */}
            <div className="border border-[#704724] px-16 py-3 rounded-full bg-white shadow-sm">
                <span className="text-[#F0C9D9] font-serif tracking-[0.2em] text-xl uppercase">
                    BY SHAHAR COHEN
                </span>
            </div>

            {/* Portfolio button */}
            <Link 
              href="/portfolio" 
              className="bg-[#F0C9D9] text-white px-10 py-3 rounded-full font-bold text-lg shadow-md hover:bg-[#704724] transition-all transform hover:-translate-y-1"
            >
                לעבודות שלי
            </Link>

            {/* Divider with star */}
            <div className="w-full max-w-4xl border-t-2 border-[#704724]/30 mt-8 relative">
                <span className="absolute -left-2 -top-5 text-3xl text-[#704724]">✦</span>
            </div>
        </div>

        {/* Bottom section: image and copy */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Right column: image */}
          <div className="relative w-full md:w-[40%] flex flex-col items-center">
            <div className="relative flex justify-center items-center">
              <div 
                className="absolute bg-[#F0C9D9] rounded-full"
                style={{ width: '380px', height: '380px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}
              ></div>
              <img 
                src="https://i.ibb.co/gZcbS98x/da80091877a854e8a32d1c7e11b4a71b-1.png" 
                alt="Shahar Cohen" 
                className="relative z-10 w-[280px] md:w-[240px] h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Left column: copy */}
          <div className="w-full md:w-[60%] text-right space-y-4">
            <div className="text-4xl text-[#704724]">✦</div>
            
            <h1 className="text-3xl md:text-5xl font-black text-black leading-tight">
              שוחיז היא סוכנות שיווק צעירה<br />
              <span className="text-[#F0C9D9]">שנוגעת באנשים</span> לפני שהם לוחצים.
            </h1>

            <h2 className="text-xl font-bold text-[#704724]">
                אנחנו יודעים לזהות טרנד לפני שהוא קורה, ומדברים בשפה שהפיד מבין.
            </h2>

            {/* Body copy */}
            <div className="text-gray-600 space-y-3 text-lg leading-relaxed">
                <p>
                    שחר כהן, בת 21 מתל אביב – מייסדת שוחיז, סוכנות לשיווק ופרסום בדיגיטל.
                    מתמחה בניהול סושיאל מדיה ובקידום ממומן, עם מטרה אחת ברורה: להפוך מותגים לנוכחות דיגיטלית חזקה ומדויקת.
                </p>
                <p>
                    את הדרך שלי בעולם השיווק התחלתי כבר במהלך השירות הצבאי, מתוך סקרנות טבעית לעולם שמאחורי הקלעים של התוכן והפרסום.
                </p>
                <p>
                    מאז הספקתי ללוות עסקים בארץ ובחו"ל, להוביל קמפיינים בתקציבים של עשרות אלפי שקלים ויורו בחודש, ולבנות אסטרטגיות שיווק שמביאות תוצאות – ולא רק לייקים.
                </p>
                
                <div className="py-2">
                    <p className="font-bold text-black">אני מאמינה בשיווק שנשען על שלושה דברים:</p>
                    <p>תוכן מדויק. קריאייטיב חד. תוצאות בשטח.</p>
                </div>

                <div>
                    <p className="font-bold text-black mb-1">מה אני מביאה לשולחן?</p>
                    <ul className="list-disc list-inside space-y-1 marker:text-[#F0C9D9]">
                        <li>יכולת לחשוב מחוץ לקופסה – אבל לפעול תמיד בתוכה.</li>
                        <li>חיבור חכם בין טרנדים לדאטה.</li>
                        <li>וביצוע שהוא לא רק יפה – אלא גם עובד.</li>
                    </ul>
                </div>

                <p className="font-bold text-black pt-2">
                    "אם גם אתם מאמינים ששיווק טוב הוא שיווק שמרגישים אותו – אני כאן כדי לגרום לזה לקרות."
                </p>
            </div>

            <div className="text-4xl text-[#704724] flex justify-end">✦</div>
          </div>

        </div>
      </div>
    </section>
  );
}