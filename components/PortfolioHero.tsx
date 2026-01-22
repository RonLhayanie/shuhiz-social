'use client';

export default function PortfolioHero() {
  // חילצתי את כל הקישורים מה-HTML ששלחת
  const images = [
    "https://by-shuhiz.my.canva.site/21/_assets/media/f04ceca15fc7087a7af9aa0157e98fb0.jpg", // כלה גב
    "https://by-shuhiz.my.canva.site/21/_assets/media/123d5ef72470e24d208bd04f97dd5aaf.jpg", // זוג ברכב צוחקים
    "https://by-shuhiz.my.canva.site/21/_assets/media/f29312ebbbd4916de7c034ff958a9005.jpg", // שולחן ערוך
    "https://by-shuhiz.my.canva.site/21/_assets/media/5fb8834d2ac88485c103e4386b4da3f1.jpg", // וסט תלוי
    "https://by-shuhiz.my.canva.site/21/_assets/media/c1c2a0fb1dc6cd1ea754675902dad3e5.jpg", // וסט חום
    "https://by-shuhiz.my.canva.site/21/_assets/media/1bf99bc03d2f1ec57e479220ac3f0451.jpg", // משפט על הקיר
    "https://by-shuhiz.my.canva.site/21/_assets/media/10ce79b9b88f5f8fcb6bdcd375d89a8e.png", // בחורה עם ג'ינס וחולצה אפורה
    "https://by-shuhiz.my.canva.site/21/_assets/media/d47f7ad6865bed6c6747926ddf44f353.jpg", // חולצה וינטג' תלויה
    "https://by-shuhiz.my.canva.site/21/_assets/media/e9826665573538f9f8e8c029c8e4521f.png", // היילי ביבר / הזרקה
    "https://by-shuhiz.my.canva.site/21/_assets/media/e7c0edeb0fce955ac38d2a37a39f6434.jpg", // שמלת כלה תלויה
    "https://by-shuhiz.my.canva.site/21/_assets/media/fb3c68f78613de004d27f576493f3af5.jpg", // זוג מתנשק שחור לבן
    "https://by-shuhiz.my.canva.site/21/_assets/media/d1f1de56d7e1a85c28832674bb14e1ee.jpg", // זוג בלילה דובאי
    "https://by-shuhiz.my.canva.site/21/_assets/media/1b36debe3868bab1612724da739e651f.png", // בלייזר לבן ותיק
    "https://by-shuhiz.my.canva.site/21/_assets/media/29a40224e49913bfd6daf6ed0f4a492f.jpg", // זוג ברכב שחור לבן
    "https://by-shuhiz.my.canva.site/21/_assets/media/d08d3cfd13c5a940948849fac883099b.png", // UGG
    "https://by-shuhiz.my.canva.site/21/_assets/media/aaa428dfd22765ff50dad4d27423f110.jpg", // פיצה וכלב
    "https://by-shuhiz.my.canva.site/21/_assets/media/4c47eb928e42d906fa86ade4236556b9.png", // רופאה
    "https://by-shuhiz.my.canva.site/21/_assets/media/2b81bef8616b4e61a2fc87469f74e619.jpg", // שולחן ארוך
    "https://by-shuhiz.my.canva.site/21/_assets/media/11b032b7ecd1a8f9dabbdf1b6ab44283.jpg", // תקריב טבעת/יד
    "https://by-shuhiz.my.canva.site/21/_assets/media/da54b113617bc6f47421f62fba315b2c.jpg", // נרות
  ];

  return (
    <section className="w-full bg-white overflow-hidden">
      {/* מסכה עדינה למעלה שתשתלב עם התפריט */}
      <div className="w-full h-32 bg-gradient-to-b from-white via-white/80 to-transparent absolute top-0 z-10 pointer-events-none"></div>
      
      {/* גריד Masonry - מסתדר אוטומטית כמו פאזל */}
      <div className="columns-2 md:columns-3 lg:columns-5 gap-4 space-y-4 p-4 pt-28">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-lg">
            <img 
              src={src} 
              alt="Portfolio item" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* אפקט האפלה קטן במעבר עכבר */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
      
      {/* מסכה עדינה למטה למעבר חלק לתוכן */}
      <div className="w-full h-24 bg-gradient-to-t from-white to-transparent -mt-24 relative z-10 pointer-events-none"></div>
    </section>
  );
}