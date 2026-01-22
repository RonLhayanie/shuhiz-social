'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioHero from '@/components/PortfolioHero'; // הייבוא של הקולאז'
import PortfolioVideos from '@/components/PortfolioVideos';
import CaseStudy from '@/components/CaseStudy';
import { ArrowLeft, Star ,TrendingUp} from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('הכל');
  const categories = ["הכל", "Social Media", "PPC", "Branding", "UGC"];

  const caseStudiesData = [
    {
      id: "ariel-medical",
      clientName: "ARIEL MEDICAL",
      subtitle: "ITALY",
      category: "International PPC",
      location: "איטליה / אירופה",
      themeColor: "#F0C9D9", 
      logo: "https://by-shuhiz.my.canva.site/21/_assets/media/c5cafbb8ada02371db9bd57d02836d80.png",
      // מבנה המדיה החדש
      mediaItems: [
        { type: 'image', src: "https://by-shuhiz.my.canva.site/21/_assets/media/a89a1e56cfb53f11b72a6465512b0f09.png" },
        { type: 'image', src: "https://by-shuhiz.my.canva.site/21/_assets/media/331e263ff7781541f56bcf112ac41f91.png" }
      ],
      challenge: "לשווק טיפולים יוקרתיים (רפואה אסתטית) בשוק הבינלאומי ובפרט באירופה, בתוך סביבה סופר-תחרותית.",
      whatIDid: [
        "ניהול תקציב של 50,000€+ בחודש",
        "יצירת עשרות מודעות בהתאמה לחגים ומועדים",
        "תרגום והבנה עמוקה של הקהל האיטלקי",
        "A/B Testing בלתי פוסק למודעות וניסוחים"
      ],
      results: [
        { value: "5,500", label: "לידים חודשיים בממוצע" },
        { value: "X2", label: "הכפלת תקציב תוך חודשיים" },
        { value: "2 סניפים", label: "נוספים נפתחו (ליטא ופורטוגל)" }
      ],
      concept: 'קונספטים: "ליפ פליפ לוולנטיינס"'
    },

    {
      id: "maza-tlv",
      clientName: "MAZA TLV",
      subtitle: "CONTENT PRODUCTION",
      category: "Social Media",
      location: "תל אביב",
      themeColor: "#A83E3E", 
      logo: "https://by-shuhiz.my.canva.site/21/_assets/media/889997b31ab0c2b71c39f08a5abfa0f8.png",
      // מבנה המדיה החדש - תמונה ווידאו
      mediaItems: [
        { type: 'image', src: "https://by-shuhiz.my.canva.site/21/_assets/media/980f34642807c1419b0ef87b24016e6b.png" },
        { type: 'video', src: "https://by-shuhiz.my.canva.site/21/_assets/video/3a389a11955b284c278bc96497a98a36.mp4" }
      ],
      challenge: "למנף אירוע פרטי לתוכן מסחרי משכנע למסעדה.",
      whatIDid: [
        "בחירת קונספט עיצובי תואם לאופי המקום",
        "צילום תוכן וידאו ותמונות לאינסטגרם",
        "עריכת סרטון רילס הממחיש את האווירה"
      ],
      results: [
        { value: "ויזואל יוקרתי", label: "המותאם למסעדת שף תל אביבית" },
        { value: "תיעוד אותנטי", label: "של חוויה בזמן אמת" },
        { value: "מעורבות גבוהה", label: "תגובות חמות מהקהל" }
      ],
      concept: 'קונספט: "חוויה תל אביבית אותנטית"'
    },

    {
      id: "bride-social",
      clientName: "BRIDE SOCIAL",
      subtitle: "WEDDING CONTENT",
      category: "UGC / Social",
      location: "ישראל",
      themeColor: "#D4AF37", 
      logo: "https://by-shuhiz.my.canva.site/21/_assets/media/c5856a25ce7faaaaaea31fe5f86f8d07.png",
      // כאן הגדרנו showCircularLogo: false כדי להסתיר את הלוגו המעוגל
      showCircularLogo: false,
      // הוספנו 3 תמונות למערך, כולל זו שהייתה בלוגו
      mediaItems: [
        { type: 'image', src: "https://by-shuhiz.my.canva.site/21/_assets/media/c5856a25ce7faaaaaea31fe5f86f8d07.png" },
        { type: 'image', src: "https://by-shuhiz.my.canva.site/21/_assets/media/a7a4db827019de44df99b6c90238e8b8.png" },
        { type: 'image', src: "https://by-shuhiz.my.canva.site/21/_assets/media/0715c09977a72a4a5130357e4580ac8f.png" }
      ],
      challenge: "לייצר חוויית תוכן בלתי נשכחת סביב חתונה, שתהיה גם מרגשת וגם מגניבה - ותעבוד על הסושיאל כמו פסטיבל אהבה.",
      whatIDid: [
        "פיתוח שפה גרפית אישית לחתונה",
        "תיעוד LIVE: התארגנות, מפגש ואירוע",
        "עריכת רילסים בזמן אמת (Same Day Edit)",
        "הפקת תמונות סטילס לשיתוף מידי"
      ],
      results: [
        { value: "3 ימי עסקים", label: "קבלת כל התוצרים ערוכים" },
        { value: "Buzz", label: "יצירת באזז סביב האירוע בזמן אמת" },
        { value: "תוכן אותנטי", label: "לשימוש מידי בחשבון הכלה" }
      ],
      concept: 'קונספט: "פסטיבל אהבה בסושיאל"'
    },

    {
      id: "yardena",
      clientName: "YARDENA",
      subtitle: "TLV STREET FOOD",
      category: "Social Media",
      location: "תל אביב",
      themeColor: "#86A760", 
      logo: "https://by-shuhiz.my.canva.site/21/_assets/media/5c857a1a3ab0a82b0202f475ce7b43a8.png",
      // כאן הגדרנו רק פריט אחד שהוא וידאו, והלוגו המעוגל יופיע כברירת מחדל
      mediaItems: [
        { type: 'video', src: "https://by-shuhiz.my.canva.site/21/_assets/video/177ceb8f9def0df2c33f7e6349d9c457.mp4" }
      ],
      challenge: "לבדל את סביח ירדנה מדוכן שוק שגרתי למותג תל אביבי נועז וצעיר.",
      whatIDid: [
        "בניית שפת רחוב והומור סביב המנה",
        "גאנטים חודשיים: רילס, קרוסלות ופוסטים",
        "רעיונות אינטראקטיביים: 'שאלות בפיתה', ראיונות בשוק",
        "המחשת אווירה ביתית וחמה"
      ],
      results: [
        { value: "40K", label: "חשיפה אורגנית (ללא ממומן)" },
        { value: "300%", label: "עלייה בעוקבים ובאינטראקציות" },
        { value: "תנועה פיזית", label: "לקוחות שמגיעים דרך האינסטגרם" }
      ],
      concept: 'קונספט: "הסביח של השוק"'
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <PortfolioHero />
      <PortfolioVideos />

      <div className="text-center pt-20 pb-10 bg-[#FAF9F6]">
          <h2 className="text-4xl md:text-6xl font-black text-[#704724]">
              סיפורי הצלחה
          </h2>
          <p className="text-gray-500 mt-2 text-lg">איך הפכנו אתגר לתוצאה</p>
      </div>

      {/* לולאה על כל ה-Case Studies */}
      {caseStudiesData.map((study) => (
        // @ts-ignore - ההערה הזו נדרשת לפעמים בגלל בעיות טייפסקריפט קטנות עם פרופס אופציונליים, אבל הקוד עובד
        <CaseStudy key={study.id} {...study} />
      ))}

      {/* הנעה לפעולה בסוף */}
      <section className="bg-[#704724] py-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                  גם העסק שלכם יכול להיראות ככה
              </h2>
              <p className="text-lg text-white/80 mb-10 font-medium">
                  בואו ניפגש לקפה (או זום) ונראה איך ממריאים מכאן.
              </p>
              <Link 
                href="/#contact" 
                className="inline-flex items-center gap-2 bg-[#F0C9D9] text-[#704724] px-8 py-3 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span>דברו איתי</span>
                <ArrowLeft size={20} />
              </Link>
          </div>
      </section>

      <Footer />
    </main>
  );
}