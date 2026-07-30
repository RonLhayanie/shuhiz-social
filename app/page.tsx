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
      
      {/* Top section: logo, hero image and copy */}
      <Hero />
      
      {/* Services section (cards) */}
      <Services />

      <InstagramFeed />

      <Recommendations />
      {/* Benefits section (6 icons with copy) */}
      <WhyUs />
      
      {/* Contact and footer */}
      <Contact />
      <Footer />
      
    </main>
  );
}