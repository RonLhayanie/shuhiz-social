import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import InstagramFeed from "@/components/InstagramFeed";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      
      {/* חלק עליון: לוגו, תמונה ראשית וטקסט */}
      <Hero />
      
      {/* אזור השירותים (הקוביות) */}
      <Services />

      <InstagramFeed />

      <Recommendations />
      {/* אזור היתרונות (6 האייקונים והטקסטים) */}
      <WhyUs />
      
      {/* יצירת קשר ופוטר */}
      <Contact />
      <Footer />
      
    </main>
  );
}